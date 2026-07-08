import fs from 'node:fs'
import path from 'node:path'
import { JSDOM } from 'jsdom'
import { convertHTMLToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import type { Payload } from 'payload'

import { contentEditor } from '@/lib/payload/editor'
import { ABCM_SERVICES } from '@/data/services'
import { rootFormationSlugs, getFormation } from '@/data/formations'

type SeedOpts = {
  payload: Payload
  log?: (m: string) => void
  // Ignore tout upload de média (couvertures + images en ligne). Utile tant
  // qu'aucun stockage (Vercel Blob) n'est branché : l'import reste « texte ».
  skipMedia?: boolean
}

/**
 * Importe le contenu existant du dépôt dans Payload. Idempotent (upsert par
 * slug / chemin). Renvoie un récap chiffré.
 */
export async function runContentSeed({ payload, log = () => {}, skipMedia = false }: SeedOpts) {
  const editorConfig = await editorConfigFactory.fromEditor({
    config: payload.config,
    editor: contentEditor,
  })

  const CWD = process.cwd()
  const BLOG_DIR = path.join(CWD, 'content', 'blog')
  const PUBLIC_DIR = path.join(CWD, 'public')

  const upsert = async (collection: any, field: string, value: string, data: Record<string, any>) => {
    const existing = await payload.find({
      collection,
      where: { [field]: { equals: value } },
      limit: 1,
      depth: 0,
      ...(collection === 'articles' ? { draft: true } : {}),
    })
    if (existing.docs.length) {
      return payload.update({
        collection,
        id: existing.docs[0].id,
        data,
        overrideAccess: true,
        context: { seeding: true },
      })
    }
    return payload.create({ collection, data, overrideAccess: true, context: { seeding: true } })
  }

  const uploadImageBySrc = async (src?: string, alt?: string): Promise<number | string | null> => {
    if (skipMedia) return null
    if (!src) return null
    if (/^https?:\/\//i.test(src)) return null
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

  const collectUploadNodes = (node: any, acc: any[] = []): any[] => {
    if (!node || !Array.isArray(node.children)) return acc
    for (const child of node.children) {
      if (child?.type === 'upload') acc.push(child)
      else collectUploadNodes(child, acc)
    }
    return acc
  }

  const pruneDroppedNodes = (node: any) => {
    if (!node || !Array.isArray(node.children)) return
    node.children = node.children.filter((c: any) => !c.__drop)
    node.children.forEach(pruneDroppedNodes)
  }

  const htmlToContent = async (html: string) => {
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

  // ── 1. Articles ──────────────────────────────────────────────────────────
  const summaries: Record<string, string[]> = fs.existsSync(path.join(BLOG_DIR, 'summaries.json'))
    ? JSON.parse(fs.readFileSync(path.join(BLOG_DIR, 'summaries.json'), 'utf8'))
    : {}
  const articleFiles = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.json') && f !== 'summaries.json')

  log(`▶ Articles (${articleFiles.length})${skipMedia ? ' — sans images (skipMedia)' : ''}`)
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
        legacyCoverSrc: raw.cover?.src || '',
        contentEdited: false,
        _status: 'published',
      })
      aOk++
    } catch (e: any) {
      aFail++
      log(`  ✗ ${slug} — ${e?.message || e}`)
    }
  }

  // ── 2. Redirections ──────────────────────────────────────────────────────
  const findStubs = (dir: string, acc: string[] = []): string[] => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) findStubs(full, acc)
      else if (entry.name === 'index.html') acc.push(full)
    }
    return acc
  }
  let rOk = 0
  for (const stubPath of findStubs(PUBLIC_DIR)) {
    try {
      const stub = fs.readFileSync(stubPath, 'utf8')
      if (!/http-equiv="refresh"/i.test(stub)) continue
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
      log(`  ✗ redirect ${stubPath} — ${e?.message || e}`)
    }
  }
  log(`▶ Redirections : ${rOk}`)

  // ── 3. Pages ─────────────────────────────────────────────────────────────
  const staticPages = [
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
      log(`  ✗ page ${p.path} — ${e?.message || e}`)
    }
  }
  log(`▶ Pages : ${pOk}`)

  const summary = { articles: aOk, articleFails: aFail, redirects: rOk, pages: pOk }
  log(`✅ Import terminé — articles ${aOk}/${articleFiles.length} (échecs ${aFail}), redirections ${rOk}, pages ${pOk}`)
  return summary
}
