/**
 * Import du contenu déclenché au BUILD Vercel, une seule fois, via la variable
 * d'environnement SEED_ON_BUILD=true.
 *
 * Utilisé par le script npm `vercel-build`. Sans le flag, sort immédiatement
 * (no-op) pour ne pas ralentir les déploiements. Ne bloque jamais le build :
 * en cas d'erreur, log et sort en 0.
 *
 * Le build dispose des fichiers du dépôt (content/, public/) et atteint
 * Supabase — contrairement au runtime serverless. Les images ne sont importées
 * que si Vercel Blob est configuré (BLOB_READ_WRITE_TOKEN) ; sinon import texte.
 */
import { getPayload } from 'payload'
import config from '@payload-config'
import { runContentSeed } from '@/lib/seed-content'

const log = (m: string) => process.stderr.write(m + '\n')

if (process.env.SEED_ON_BUILD !== 'true') {
  log('ℹ build-seed : SEED_ON_BUILD non défini — import ignoré.')
  process.exit(0)
}

try {
  const payload = await getPayload({ config })
  const skipMedia = !process.env.BLOB_READ_WRITE_TOKEN
  if (skipMedia) log('ℹ build-seed : pas de Vercel Blob — import du texte seul (images ignorées).')
  await runContentSeed({ payload, log, skipMedia })
} catch (e: any) {
  log('⚠ build-seed : échec — ' + (e?.message || e))
}
process.exit(0)
