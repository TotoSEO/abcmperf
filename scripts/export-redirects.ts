/**
 * Exporte les redirections de Payload vers redirects.generated.json, lu par
 * next.config au build pour produire de vraies redirections 301/302.
 *
 * Lancé dans `vercel-build` avant `next build`. Non bloquant : en cas d'échec
 * (base indisponible), écrit une liste vide et sort en 0 — les anciens stubs
 * statiques restent en repli.
 */
import { getPayload } from 'payload'
import config from '@payload-config'
import fs from 'node:fs'
import path from 'node:path'
import { ABCM_SERVICES } from '@/data/services'
import { rootFormationSlugs } from '@/data/formations'

const OUT = path.join(process.cwd(), 'redirects.generated.json')
const log = (m: string) => process.stderr.write(m + '\n')

// Garde-fou : une redirection ne doit JAMAIS masquer une page qui existe
// réellement. Quand une URL autrefois redirigée redevient une vraie fiche (ex.
// /agence-payload/ rétablie après avoir été 301 vers /agence-web-strasbourg/),
// l'ancienne ligne peut subsister en base ; on l'ignore ici pour que la page
// live prime, sans dépendre d'un nettoyage manuel du back-office.
const livePaths = new Set<string>([
  ...ABCM_SERVICES.map((s: any) => `/${s.slug}/`),
  ...rootFormationSlugs().map((slug: string) => `/${slug}/`),
])

let list: Array<{ from: string; to: string; type: string }> = []
try {
  const payload = await getPayload({ config })
  const res = await payload.find({ collection: 'redirects', limit: 0, depth: 0 })
  const all = (res.docs || [])
    .map((d: any) => ({ from: String(d.from || ''), to: String(d.to || ''), type: d.type || '301' }))
    .filter((r) => r.from && r.to && r.from !== r.to)
  list = all.filter((r) => !livePaths.has(r.from))
  const skipped = all.length - list.length
  log(`export-redirects : ${list.length} redirections exportées` + (skipped ? ` (${skipped} ignorée(s) : masquaient une page live)` : ''))
} catch (e: any) {
  log('export-redirects : échec (' + (e?.message || e) + ') — liste vide, repli sur les stubs')
  list = []
}

fs.writeFileSync(OUT, JSON.stringify(list))
process.exit(0)
