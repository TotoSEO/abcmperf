/**
 * Migration du contenu existant vers Payload.
 *
 *   npm run migrate:content
 *
 * Idempotent : relançable sans créer de doublon (upsert par slug / chemin).
 * Importe :
 *   • les 67 articles de blog (content/blog/*.json) → collection `articles`
 *     (contenu HTML converti en Lexical éditable + HTML original conservé,
 *      image à la une uploadée dans `media`, « En bref », extrait, SEO) ;
 *   • les redirections 301 (stubs public/ * /index.html) → collection `redirects` ;
 *   • les pages du site (accueil, services, formations…) → collection `pages`.
 *
 * S'exécute là où les fichiers du dépôt sont présents (checkout complet), en
 * pointant DATABASE_URI vers la base cible (Supabase en production).
 */
import { getPayload } from 'payload'
import config from '@payload-config'
import fs from 'node:fs'
import path from 'node:path'
import { JSDOM } from 'jsdom'
import { convertHTMLToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'

import { contentEditor } from '@/lib/payload/editor'
import { ABCM_SERVICES } from '@/data/services'
import { rootFormationSlugs, getFormation } from '@/data/formations'

const log = (m: string) => process.stderr.write(m + '\n')

const payload = await getPayload({ config })
const editorConfig = await editorConfigFactory.fromEditor({
  config: payload.config,
  editor: contentEditor,
})

const CWD = process.cwd()
const BLOG_DIR = path.join(CWD, 'content', 'blog')
const PUBLIC_DIR = path.join(CWD, 'public')

// ─────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────
async function upsert(
  collection: any,
  field: string,
  value: string,
  data: Record<string, any>,
) {
  const existing = await payload.find({
    collection,
    where: { [field]: { equals: value } },
    limit: 1,
    depth: 0,
    ...(collection === 'articles' ? { draft: true } : {}),
  })
  if (existing.docs.length) {
    return payload.update({ collection, id: existing.docs[0].id, data, overrideAccess: true })
  }
  return payload.create({ collection, data, overrideAccess: true })
}

// Upload une image locale référencée par un src (déjà nettoyé de %ASSET%).
// Renvoie l'id du média (déduplication par nom de fichier) ou null si le
// fichier n'existe pas / est externe.
async function uploadImageBySrc(
  src?: string,
  alt?: string,
): Promise<number | string | null> {
  if (!src) return null
  if (/^https?:\/\//i.test(src)) return null // image externe : non gérée
  const rel = src.replaceAll('%ASSET%', '').replace(/^\/+/, '').split('?')[0].split('#')[0]
  let abs: string
  try {
    abs = path.join(PUBLIC_DIR, decodeURIComponent(rel))
  } catch {
    abs = path.join(PUBLIC_DIR, rel)
  }
  if (!fs.existsSync(abs)) return null
  const filename = path.basename(abs)
  const found = await payload.find({
    collection: 'media',
    where: { filename: { equals: filename } },
    limit: 1,
    depth: 0,
  })
  if (found.docs.length) return found.docs[0].id
  const created = await payload.create({
    collection: 'media',
    filePath: abs,
    data: { alt: alt || '' },
    overrideAccess: true,
  })
  return created.id
}

// Récupère, dans l'ordre du document, tous les noeuds `upload` produits par la
// conversion HTML→Lexical (un par balise <img>).
function collectUploadNodes(node: any, acc: any[] = []): any[] {
  if (!node || !Array.isArray(node.children)) return acc
  for (const child of node.children) {
    if (child?.type === 'upload') acc.push(child)
    else collectUploadNodes(child, acc)
  }
  return acc
}

function pruneDroppedNodes(node: any) {
  if (!node || !Array.isArray(node.children)) return
  node.children = node.children.filter((c: any) => !c.__drop)
  node.children.forEach(pruneDroppedNodes)
}

// Convertit le HTML en Lexical puis « répare » les images en ligne : chaque
// <img> local est uploadé dans `media` et le noeud upload correspondant reçoit
// un id valide (sinon il est retiré — le HTML original reste conservé à part).
async function htmlToContent(html: string) {
  const imgTags = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0])
  const imgIds: (number | string | null)[] = []
  for (const tag of imgTags) {
    const src = (tag.match(/\ssrc="([^"]+)"/i) || [])[1]
    const alt = (tag.match(/\salt="([^"]*)"/i) || [])[1] || ''
    imgIds.push(await uploadImageBySrc(src, alt))
  }

  const content: any = convertHTMLToLexical({ editorConfig, html, JSDOM })
  const uploadNodes = collectUploadNodes(content.root)
  uploadNodes.forEach((n, i) => {
    const id = imgIds[i]
    if (id != null) {
      n.relationTo = 'media'
      n.value = id
    } else {
      n.__drop = true
    }
  })
  pruneDroppedNodes(content.root)
  return content
}

// ─────────────────────────────────────────────────────────────────────────
// 1. Articles de blog
// ─────────────────────────────────────────────────────────────────────────
const summaries: Record<string, string[]> = fs.existsSync(path.join(BLOG_DIR, 'summaries.json'))
  ? JSON.parse(fs.readFileSync(path.join(BLOG_DIR, 'summaries.json'), 'utf8'))
  : {}

const articleFiles = fs
  .readdirSync(BLOG_DIR)
  .filter((f) => f.endsWith('.json') && f !== 'summaries.json')

log(`\n▶ Articles (${articleFiles.length})`)
let aOk = 0
let aFail = 0
for (const file of articleFiles) {
  const slug = file.slice(0, -5)
  try {
    const raw = JSON.parse(fs.readFileSync(path.join(BLOG_DIR, file), 'utf8'))
    const html = String(raw.html || '').replaceAll('%ASSET%', '')
    const content = await htmlToContent(html)
    const coverId = await uploadImageBySrc(raw.cover?.src, raw.cover?.alt)
    const summaryArr = Array.isArray(summaries[slug])
      ? summaries[slug].map((point) => ({ point }))
      : []

    await upsert('articles', 'slug', slug, {
      title: raw.title || slug,
      slug,
      author: raw.author || 'ABCM',
      publishedDate: raw.date || undefined,
      cover: coverId || undefined,
      coverAlt: raw.cover?.alt || '',
      excerpt: raw.description || '',
      summary: summaryArr,
      content,
      seoTitle: raw.seoTitle || '',
      metaDescription: raw.description || '',
      legacyHtml: raw.html || '',
      _status: 'published',
    })
    aOk++
    log(`  ✓ ${slug}`)
  } catch (e: any) {
    aFail++
    log(`  ✗ ${slug} — ${e?.message || e}`)
  }
}

// ─────────────────────────────────────────────────────────────────────────
// 2. Redirections 301 (stubs meta-refresh dans public/)
// ─────────────────────────────────────────────────────────────────────────
function findStubs(dir: string, acc: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) findStubs(full, acc)
    else if (entry.name === 'index.html') acc.push(full)
  }
  return acc
}

log(`\n▶ Redirections`)
let rOk = 0
let rFail = 0
const stubs = findStubs(PUBLIC_DIR)
for (const stubPath of stubs) {
  try {
    const stub = fs.readFileSync(stubPath, 'utf8')
    if (!/http-equiv="refresh"/i.test(stub)) continue // pas une redirection
    const from = '/' + path.relative(PUBLIC_DIR, path.dirname(stubPath)).split(path.sep).join('/') + '/'
    const canon = stub.match(/rel="canonical"\s+href="([^"]+)"/i)
    const refresh = stub.match(/content="0;\s*url=([^"]+)"/i)
    let to = ''
    if (canon) to = canon[1].replace(/^https?:\/\/[^/]+/i, '')
    else if (refresh) to = refresh[1]
    if (!to) continue
    await upsert('redirects', 'from', from, { from, to, type: '301' })
    rOk++
  } catch (e: any) {
    rFail++
    log(`  ✗ ${stubPath} — ${e?.message || e}`)
  }
}
log(`  ${rOk} redirections importées`)

// ─────────────────────────────────────────────────────────────────────────
// 3. Pages du site
// ─────────────────────────────────────────────────────────────────────────
log(`\n▶ Pages`)
const staticPages: Array<{ path: string; title: string; pageType: string }> = [
  { path: '/', title: 'Accueil', pageType: 'classique' },
  { path: '/contact/', title: 'Contact', pageType: 'classique' },
  { path: '/portfolio/', title: 'Portfolio', pageType: 'portfolio' },
  { path: '/articles/', title: 'Blog', pageType: 'classique' },
  { path: '/formations-strasbourg/', title: 'Formations', pageType: 'classique' },
  { path: '/mentions-legales/', title: 'Mentions légales', pageType: 'systeme' },
  { path: '/modalites-de-la-formation/', title: 'Modalités de la formation', pageType: 'systeme' },
]
const servicePages = ABCM_SERVICES.map((s: any) => ({
  path: `/${s.slug}/`,
  title: s.name || s.title || s.slug,
  pageType: 'service',
}))
const formationPages = rootFormationSlugs().map((slug: string) => {
  const f: any = getFormation(slug)
  return { path: `/${slug}/`, title: f?.title || slug, pageType: 'formation' }
})

let pOk = 0
for (const p of [...staticPages, ...servicePages, ...formationPages]) {
  try {
    await upsert('pages', 'path', p.path, p)
    pOk++
  } catch (e: any) {
    log(`  ✗ ${p.path} — ${e?.message || e}`)
  }
}
log(`  ${pOk} pages importées`)

log(`\n✅ Migration terminée — articles ${aOk}/${articleFiles.length} (échecs ${aFail}), redirections ${rOk}, pages ${pOk}`)
process.exit(0)
