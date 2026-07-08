/**
 * Crée / synchronise le schéma de la base au moment du BUILD (Vercel).
 *
 * Payload ne « push » le schéma que hors production
 * (cf. @payloadcms/db-postgres connect.js :
 *   if (NODE_ENV !== 'production' && push !== false) await pushDevSchema()).
 * Pendant le build Vercel, NODE_ENV vaut 'production' → le push est ignoré et
 * les tables ne sont jamais créées. On force donc NODE_ENV='development' juste
 * pour cette étape (drizzle-kit est présent au build et Supabase est joignable).
 * Le runtime, lui, reste en production et ne push pas.
 *
 * Ne bloque jamais le build : en cas d'échec, log l'erreur et sort en 0.
 */
import { getPayload } from 'payload'
import config from '@payload-config'

const log = (m: string) => process.stderr.write(m + '\n')

try {
  if (!process.env.DATABASE_URI && !process.env.POSTGRES_URL) {
    log('ℹ ensure-schema : aucune DATABASE_URI — étape ignorée.')
  } else {
    // Force le mode qui déclenche le push du schéma (voir en-tête).
    process.env.NODE_ENV = 'development'
    process.env.PAYLOAD_MIGRATING = 'false'
    log('▶ ensure-schema : connexion à la base et push du schéma…')
    const payload = await getPayload({ config })
    // Sanity check : la table users doit exister après le push.
    try {
      await payload.count({ collection: 'users' })
      log('✅ ensure-schema : schéma prêt (table users accessible).')
    } catch (inner: any) {
      log('⚠ ensure-schema : le push ne semble pas avoir créé les tables — ' + (inner?.message || inner))
    }
  }
} catch (e: any) {
  log('⚠ ensure-schema : échec — ' + (e?.message || e))
  log('   → vérifier DATABASE_URI (Session pooler 5432) et l’accès Supabase.')
}
process.exit(0)
