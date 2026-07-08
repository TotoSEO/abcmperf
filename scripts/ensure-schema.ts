/**
 * Crée / synchronise le schéma de la base au moment du BUILD (Vercel).
 *
 * Lancé par le script `vercel-build` avec RUN_DB_PUSH=true : Payload effectue
 * alors un « push » du schéma (drizzle-kit est disponible pendant le build et
 * Supabase est joignable). Au runtime, aucun push n'est tenté.
 *
 * Ne bloque jamais le build : en cas d'échec, log l'erreur et sort en 0 pour
 * que le site public se déploie quand même (l'erreur reste visible dans le log).
 */
import { getPayload } from 'payload'
import config from '@payload-config'

const log = (m: string) => process.stderr.write(m + '\n')

try {
  if (!process.env.DATABASE_URI && !process.env.POSTGRES_URL) {
    log('ℹ ensure-schema : aucune DATABASE_URI — étape ignorée.')
  } else {
    log('▶ ensure-schema : connexion à la base et synchronisation du schéma…')
    await getPayload({ config })
    log('✅ ensure-schema : schéma prêt.')
  }
} catch (e: any) {
  log('⚠ ensure-schema : échec — ' + (e?.message || e))
  log('   → vérifier DATABASE_URI (Session pooler 5432) et l’accès Supabase.')
}
process.exit(0)
