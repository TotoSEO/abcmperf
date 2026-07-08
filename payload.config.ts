import path from 'path'
import { fileURLToPath } from 'url'

import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import sharp from 'sharp'

import { Users } from '@/collections/Users'
import { Media } from '@/collections/Media'
import { Pages } from '@/collections/Pages'
import { Articles } from '@/collections/Articles'
import { Redirects } from '@/collections/Redirects'

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
  },
  collections: [Pages, Articles, Redirects, Media, Users],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-a-remplacer-en-production',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // Postgres (Supabase) dès qu'une URL est fournie ; sinon repli SQLite pour
  // que l'app démarre et se vérifie sans configuration.
  db: databaseURI
    ? postgresAdapter({
        pool: { connectionString: databaseURI },
      })
    : sqliteAdapter({
        client: { url: process.env.SQLITE_URL || 'file:./payload.db' },
      }),
  sharp,
  plugins: [
    // En production, les médias sont stockés sur Vercel Blob (le FS de Vercel
    // est en lecture seule). En local, stockage disque classique.
    ...(blobToken
      ? [
          vercelBlobStorage({
            collections: { media: true },
            token: blobToken,
          }),
        ]
      : []),
  ],
})
