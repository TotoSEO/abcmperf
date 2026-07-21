import 'server-only'
import { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { renderLexicalToHtml } from '@/lib/lexical-html'
import { getService, ABCM_SERVICES } from '@/data/services'
import { getFormation } from '@/data/formations'
import { getAllCases as getFileCases, getCase as getFileCase } from '@/lib/portfolio'

// Fiches références du portfolio pilotées depuis le back-office (collection
// « portfolio »). Modèle identique aux articles : Payload est la source de
// vérité, avec repli fidèle sur les fiches historiques
// (content/portfolio/*.json) si la base est injoignable ou si la fiche n'existe
// qu'en fichier. Une fiche créée / supprimée / dépubliée dans l'admin se
// répercute donc en live (ISR) sur le site ET dans le sitemap portfolio.

const SERVICE_SLUGS = new Set(ABCM_SERVICES.map((s: any) => s.slug))

// Encart promo (service / formation lié) reconstruit à partir du choix fait dans
// l'admin. Les métadonnées (nom, accroche, icône, couleur) sont lues dans les
// données de référence du site pour rester synchronisées avec les fiches.
function buildPromo(promo: any): any {
  if (!promo || !promo.kind || promo.kind === 'none') return null
  if (promo.kind === 'service' && promo.service) {
    const s: any = getService(promo.service)
    if (s) {
      return {
        kind: 'Service',
        url: `/${s.slug}/`,
        name: s.name,
        desc: s.tagline || '',
        icon: s.icon,
        hue: s.hue,
        slug: s.slug,
      }
    }
  }
  if (promo.kind === 'formation' && promo.formation) {
    const slug = String(promo.formation).replace(/^\/+|\/+$/g, '')
    const f: any = getFormation(slug)
    if (f) {
      return {
        kind: 'Formation',
        url: f.url,
        name: f.name,
        desc: f.cardDesc || '',
        icon: f.icon,
        hue: f.hue,
        slug: f.slug,
      }
    }
  }
  return null
}

// Services mobilisés par un projet : l'encart promo (s'il pointe un service) +
// les services cités en lien dans le corps rendu de la fiche. Même logique que
// lib/portfolio.js, adaptée aux liens rendus depuis Lexical (« /slug/ »).
function computeServices(promo: any, bodyHtml: string): string[] {
  const out: string[] = []
  const add = (slug?: string) => {
    if (slug && SERVICE_SLUGS.has(slug) && !out.includes(slug)) out.push(slug)
  }
  if (promo && promo.kind === 'Service') add(promo.slug)
  const re = /href="(?:%ASSET%)?\/([a-z0-9-]+)\/"/g
  let m: RegExpExecArray | null
  while ((m = re.exec(bodyHtml || ''))) add(m[1])
  return out
}

function mediaUrl(m: any): string | null {
  if (m && typeof m === 'object' && m.url) return m.url
  return null
}

function esc(s: unknown): string {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// Rend un champ richText Lexical en HTML (chaîne vide si vide / erreur).
async function richToHtml(field: any): Promise<string> {
  if (!field?.root) return ''
  try {
    return (await renderLexicalToHtml(field)) || ''
  } catch {
    return ''
  }
}

// Galerie « Visuels de la prestation » → suite de <figure> (même habillage que
// les images du corps historique).
function galleryHtml(gallery: any): string {
  if (!Array.isArray(gallery)) return ''
  return gallery
    .map((item: any) => {
      const src = mediaUrl(item?.image)
      if (!src) return ''
      return `<figure class="pf-fig"><img src="${esc(src)}" alt="${esc(item?.alt || '')}" loading="lazy"/></figure>`
    })
    .filter(Boolean)
    .join('')
}

// Corps HTML de la fiche. Nouvelles fiches : assemblé à partir des champs
// structurés (résumé, demande, réponse, visuels) sous la même forme (intro +
// sections en <h2>) que le corps historique, pour un rendu identique sans
// toucher au composant. Fiches historiques (champs structurés vides) : repli
// sur le corps libre « content ».
async function buildBody(doc: any): Promise<string> {
  const [request, response] = await Promise.all([
    richToHtml(doc.clientRequest),
    richToHtml(doc.ourResponse),
  ])
  const gallery = galleryHtml(doc.gallery)
  const summary = (doc.summary || '').trim()
  const hasStructured = Boolean(summary || request || response || gallery)
  if (hasStructured) {
    return [
      summary ? `<p>${esc(summary)}</p>` : '',
      request ? `<h2>La demande du client</h2>${request}` : '',
      response ? `<h2>Notre réponse</h2>${response}` : '',
      gallery ? `<h2>Le projet en images</h2>${gallery}` : '',
    ].filter(Boolean).join('\n')
  }
  return richToHtml(doc.content)
}

// Objet « case » complet (même forme que lib/portfolio.js) pour le rendu d'une
// fiche : corps HTML assemblé, promo résolu, services déduits.
async function buildCase(doc: any) {
  const body = await buildBody(doc)
  const promo = buildPromo(doc.promo)
  const categories = Array.isArray(doc.categories) ? doc.categories.filter(Boolean) : []
  const c: any = {
    slug: doc.slug,
    title: doc.title,
    h1: (doc.h1 || '').trim() || doc.title,
    projectType: doc.projectType || '',
    categories,
    cover: mediaUrl(doc.cover),
    logo: mediaUrl(doc.logo),
    heroBg: null,
    body,
    promo,
    seoTitle: (doc.seoTitle || '').trim(),
    metaDescription: (doc.metaDescription || '').trim(),
    noindex: Boolean(doc.noindex),
    updatedAt: doc.updatedAt || doc.createdAt || undefined,
  }
  c.services = computeServices(promo, body)
  return c
}

// Une fiche PUBLIÉE depuis Payload (rendu live). Renvoie `null` si la fiche
// n'existe pas / n'est pas publiée (l'appelant retombe alors sur le fichier
// d'origine, puis 404). LÈVE une erreur si la base est injoignable → repli
// fichier. Mémoïsé par requête.
export const getPortfolioCaseFromPayload = cache(async (slug: string) => {
  const payload = await getPayload({ config })
  const res = await payload.find({
    collection: 'portfolio',
    where: { and: [{ slug: { equals: slug } }, { status: { equals: 'published' } }] },
    limit: 1,
    depth: 2,
  })
  const doc: any = res.docs?.[0]
  if (!doc) return null
  return buildCase(doc)
})

// Résout une fiche portfolio pour l'affichage : Payload d'abord (source de
// vérité), repli sur la fiche fichier si absente en base ou si la base est
// injoignable. Renvoie null si introuvable partout (→ 404).
export async function resolvePortfolioCase(slug: string) {
  try {
    const fromPayload = await getPortfolioCaseFromPayload(slug)
    if (fromPayload) return fromPayload
  } catch {
    /* base injoignable : on tente le repli fichier */
  }
  return getFileCase(slug)
}

export type PortfolioSummary = {
  slug: string
  title: string
  projectType: string
  categories: string[]
  cover: string | null
  logo: string | null
  noindex: boolean
  services: string[]
  featured: boolean
  featuredRank: number | null
  lastModified?: string
  source: 'payload' | 'file'
}

// Résumé léger (grille /portfolio/, fiches liées, sitemap). Services déduits du
// seul encart promo (pas de rendu du corps, pour rester rapide sur la liste).
function summaryFromDoc(doc: any): PortfolioSummary {
  const promo = buildPromo(doc.promo)
  const services = promo && promo.kind === 'Service' && promo.slug ? [promo.slug] : []
  return {
    slug: doc.slug,
    title: doc.title,
    projectType: doc.projectType || '',
    categories: Array.isArray(doc.categories) ? doc.categories.filter(Boolean) : [],
    cover: mediaUrl(doc.cover),
    logo: mediaUrl(doc.logo),
    noindex: Boolean(doc.noindex),
    services,
    featured: Boolean(doc.featured),
    featuredRank: typeof doc.featuredRank === 'number' ? doc.featuredRank : null,
    lastModified: doc.updatedAt || doc.createdAt || undefined,
    source: 'payload' as const,
  }
}

// Toutes les fiches publiées depuis Payload, en résumé. Renvoie [] si la base
// est injoignable (repli complet sur les fichiers assuré par l'appelant).
const payloadSummaries = cache(async () => {
  try {
    const payload = await getPayload({ config })
    const res = await payload.find({
      collection: 'portfolio',
      where: { status: { equals: 'published' } },
      limit: 1000,
      depth: 1,
      sort: '-updatedAt',
    })
    return (res.docs || []).map(summaryFromDoc)
  } catch {
    return []
  }
})

// Résumé des fiches fichier historiques, normalisé à la même forme.
function fileSummaries(): PortfolioSummary[] {
  return getFileCases().map((c: any) => ({
    slug: c.slug,
    title: c.title,
    projectType: c.projectType || '',
    categories: Array.isArray(c.categories) ? c.categories : [],
    cover: c.cover || null,
    logo: c.logo || null,
    // Politique du site : les fiches références historiques restent en noindex
    // (donc hors sitemap). Seules les fiches Payload explicitement indexables
    // (case « noindex » décochée) entrent dans le sitemap portfolio.
    noindex: true,
    services: c.services || [],
    // Les fiches historiques (fichier) ne sont jamais mises à la une : seule
    // l'édition back-office pilote l'épinglage.
    featured: false,
    featuredRank: null,
    lastModified: undefined as string | undefined,
    source: 'file' as const,
  }))
}

// Union des fiches Payload (prioritaires) et fichier, dédupliquées par slug.
// Utilisé par la grille du portfolio, les fiches liées et le sitemap. Une fiche
// recréée dans l'admin (même slug) prend le dessus sur sa version fichier.
export const getAllPortfolioSummaries = cache(async () => {
  const fromPayload = await payloadSummaries()
  const seen = new Set(fromPayload.map((c) => c.slug))
  const merged: PortfolioSummary[] = [...fromPayload]
  for (const f of fileSummaries()) {
    if (!seen.has(f.slug)) merged.push(f)
  }

  const byTitle = (a: PortfolioSummary, b: PortfolioSummary) =>
    (a.title || '').localeCompare(b.title || '', 'fr')

  // Fiches « à la une » : classées par rang (1 → 3) puis par titre, limitées à
  // 3 (première ligne de la grille). Au-delà de 3, les fiches en trop perdent
  // leur statut épinglé pour rester cohérent avec le rendu côté site.
  const pinned = merged
    .filter((c) => c.featured)
    .sort((a, b) => (a.featuredRank ?? 99) - (b.featuredRank ?? 99) || byTitle(a, b))
    .slice(0, 3)
  const pinnedSlugs = new Set(pinned.map((c) => c.slug))
  for (const c of merged) {
    if (c.featured && !pinnedSlugs.has(c.slug)) c.featured = false
  }

  const rest = merged.filter((c) => !pinnedSlugs.has(c.slug)).sort(byTitle)
  return [...pinned, ...rest]
}
)

// Slugs de toutes les fiches (Payload publiées + fichiers) pour
// generateStaticParams. Ne lève jamais (repli fichier).
export async function allPortfolioSlugs(): Promise<string[]> {
  const list = await getAllPortfolioSummaries()
  return list.map((c) => c.slug)
}
