import path from 'path'
import { fileURLToPath } from 'url'

import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { fr } from '@payloadcms/translations/languages/fr'
import sharp from 'sharp'

import { Users } from '@/collections/Users'
import { Media } from '@/collections/Media'
import { Pages } from '@/collections/Pages'
import { Articles } from '@/collections/Articles'
import { Redirects } from '@/collections/Redirects'
import { migrations } from '@/migrations'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// URL de connexion Postgres (Supabase) fournie en production via l'environnement.
// Accepte DATABASE_URI ou les variables standard de Supabase/Vercel Postgres.
const rawDatabaseURI =
  process.env.DATABASE_URI ||
  process.env.POSTGRES_URL ||
  process.env.SUPABASE_DB_URL ||
  ''

// CRUCIAL (serverless + Supabase) : on force le **Transaction pooler** (port
// 6543) au lieu du **Session pooler** (5432). En mode session, chaque instance
// Vercel garde une connexion Postgres ouverte en permanence (Payload en tient
// une par pool pour écouter les erreurs, jamais relâchée) ; les instances
// serverless gelées accumulent ces connexions jusqu'à saturer les 15 slots du
// pooler → « EMAXCONNSESSION max clients reached in session mode ».
//
// Le Transaction pooler multiplexe : une connexion cliente inactive n'occupe
// AUCUN backend Postgres (un backend n'est emprunté que le temps d'une
// transaction), et la limite de clients est bien plus élevée. C'est le mode
// recommandé par Supabase pour Vercel/serverless. Les deux poolers partagent le
// même hôte et les mêmes identifiants : seul le port change, d'où la réécriture
// ci-dessous (idempotente : sans effet si l'URL n'est pas le Session pooler).
const databaseURI = rawDatabaseURI.replace(
  /(pooler\.supabase\.com):5432\b/i,
  '$1:6543',
)

// Jeton de stockage média Vercel Blob (production). Vide en local.
const blobToken = process.env.BLOB_READ_WRITE_TOKEN || ''

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: {
      titleSuffix: ' — ABCM Admin',
      title: 'ABCM · Back-office',
    },
    components: {
      graphics: {
        Logo: '/components/admin/Logo#Logo',
        Icon: '/components/admin/Icon#Icon',
      },
    },
  },
  collections: [Pages, Articles, Redirects, Media, Users],
  // Interface du back-office forcée en français (indépendamment du navigateur).
  i18n: {
    supportedLanguages: { fr },
    fallbackLanguage: 'fr',
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-a-remplacer-en-production',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // Postgres (Supabase) dès qu'une URL est fournie ; sinon repli SQLite pour
  // que l'app démarre et se vérifie sans configuration.
  db: databaseURI
    ? postgresAdapter({
        pool: {
          connectionString: databaseURI,
          // Supabase impose le SSL. rejectUnauthorized:false évite les soucis
          // de chaîne de certificats sans désactiver le chiffrement.
          ssl: { rejectUnauthorized: false },
          connectionTimeoutMillis: 10000,
          // Via le Transaction pooler, plusieurs connexions par instance sont
          // sans danger (les inactives ne tiennent aucun backend). max DOIT être
          // > 1 : Payload garde en permanence 1 connexion par pool pour l'écoute
          // d'erreurs ; à max:1 il ne resterait AUCUNE connexion pour les
          // requêtes (elles tomberaient toutes en timeout). idleTimeoutMillis
          // libère les connexions clientes inactives entre deux invocations.
          max: 5,
          idleTimeoutMillis: 30000,
        },
        // En production, Payload applique automatiquement ces migrations au
        // premier démarrage (création du schéma dans Supabase) — pas besoin de
        // drizzle-kit au runtime, ce sont de simples requêtes SQL versionnées.
        // En dev, le schéma est poussé automatiquement (comportement par défaut).
        prodMigrations: migrations,
      })
    : sqliteAdapter({
        client: { url: process.env.SQLITE_URL || 'file:./payload.db' },
      }),
  sharp,
  plugins: [
    // Le plugin est TOUJOURS déclaré (même sans token) pour que son composant
    // client soit inclus dans l'importMap — sinon l'admin plante au runtime
    // dès que le token est présent (« PayloadComponent not found in importMap »).
    // Il n'est fonctionnellement actif (stockage Vercel Blob) que si un token
    // est fourni ; sinon `enabled: false` → stockage disque local classique.
    vercelBlobStorage({
      enabled: Boolean(blobToken),
      collections: {
        // disablePayloadAccessControl : les URLs média pointent DIRECTEMENT sur
        // le CDN Vercel Blob (store public) au lieu de la route Payload
        // /api/media/file/*. Les vignettes de l'admin et les images du site
        // public sont donc servies par le CDN — plus aucune fonction serverless
        // ni connexion Postgres par image (cause majeure de l'« EMAXCONNSESSION »
        // sur la grille média). Sûr ici : le store Blob est public, ces images
        // sont destinées à être publiques.
        media: { disablePayloadAccessControl: true },
      },
      token: blobToken || 'vercel_blob_rw_placeholder',
    }),
  ],
})
