/**
 * Import manuel du contenu existant vers Payload.
 *
 *   DATABASE_URI="…" npm run migrate:content
 *
 * Idempotent. Importe les 67 articles, les 262 redirections et les pages.
 * Les images ne sont uploadées que si un stockage est disponible (Vercel Blob
 * via BLOB_READ_WRITE_TOKEN) ou en local ; sinon l'import reste « texte ».
 */
import { getPayload } from 'payload'
import config from '@payload-config'
import { runContentSeed } from '@/lib/seed-content'

const log = (m: string) => process.stderr.write(m + '\n')
const payload = await getPayload({ config })

// En production sans stockage média branché, on saute les images (sinon échec
// d'écriture sur le FS en lecture seule de Vercel).
const skipMedia = process.env.NODE_ENV === 'production' && !process.env.BLOB_READ_WRITE_TOKEN

await runContentSeed({ payload, log, skipMedia })
process.exit(0)
