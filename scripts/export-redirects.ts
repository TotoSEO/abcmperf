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

const OUT = path.join(process.cwd(), 'redirects.generated.json')
const log = (m: string) => process.stderr.write(m + '\n')

let list: Array<{ from: string; to: string; type: string }> = []
try {
  const payload = await getPayload({ config })
  const res = await payload.find({ collection: 'redirects', limit: 0, depth: 0 })
  list = (res.docs || [])
    .map((d: any) => ({ from: String(d.from || ''), to: String(d.to || ''), type: d.type || '301' }))
    .filter((r) => r.from && r.to && r.from !== r.to)
  log(`export-redirects : ${list.length} redirections exportées`)
} catch (e: any) {
  log('export-redirects : échec (' + (e?.message || e) + ') — liste vide, repli sur les stubs')
  list = []
}

fs.writeFileSync(OUT, JSON.stringify(list))
process.exit(0)
