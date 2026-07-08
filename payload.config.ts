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
const databaseURI =
  process.env.DATABASE_URI ||
  process.env.POSTGRES_URL ||
  process.env.SUPABASE_DB_URL ||
  ''

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
          connectionTimeoutMillis: 15000,
          // Serverless Vercel : chaque instance (lambda) ouvre son propre pool.
          // Le Session pooler Supabase plafonne à 15 connexions ; sans limite,
          // quelques instances concurrentes saturent (« EMAXCONNSESSION max
          // clients reached in session mode »). On borne donc chaque instance à
          // 1 connexion + fermeture rapide des connexions inactives pour libérer
          // les slots au plus vite entre deux invocations.
          max: 1,
          idleTimeoutMillis: 10000,
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
      collections: { media: true },
      token: blobToken || 'vercel_blob_rw_placeholder',
    }),
  ],
})
