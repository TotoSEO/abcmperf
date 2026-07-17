/**
 * Peuple la collection « pages » (balises SEO + contenu structuré des fiches
 * formation) avec les valeurs actuellement rendues sur le site, en
 * FILL-ONLY-EMPTY : un champ déjà renseigné dans l'admin n'est JAMAIS écrasé.
 *
 * Découplé de l'import d'articles (SEED_ON_BUILD) : comme il ne remplit que le
 * vide, il tourne à CHAQUE build sans risque, pour que le back-office affiche
 * toujours les valeurs courantes des pages (éditables ensuite).
 *
 * Non bloquant : en cas d'échec (base indisponible), log et sort en 0.
 */
import { getPayload } from 'payload'
import config from '@payload-config'
import { ABCM_SERVICES, serviceMetadata } from '@/data/services'
import {
  rootFormationSlugs, getFormation, formationMetadata, formationPriceFrom,
  STD_MODALITES, STD_FINANCEMENT, STD_TARIFS, STD_PREREQUIS,
} from '@/data/formations'
import { formationContent } from '@/data/formationContent'
import { formationContentToLexical } from '@/lib/formation-content-to-lexical'

const log = (m: string) => process.stderr.write(m + '\n')
const titleStr = (t: any): string => (typeof t === 'string' ? t : t?.absolute || '')

// Un champ est « vide » (donc à compléter) s'il est null/undefined, une chaîne
// vide ou un tableau vide. Un nombre (0 inclus) ou un objet non vide comptent
// comme renseignés.
const isEmptyValue = (v: any): boolean => {
  if (v === null || v === undefined) return true
  if (typeof v === 'string') return v.trim() === ''
  if (Array.isArray(v)) return v.length === 0
  return false
}

// Un contenu richText Lexical est « rempli » s'il contient au moins un nœud
// non vide (autre chose qu'un unique paragraphe vide).
const hasRichContent = (c: any): boolean => {
  const kids = c?.root?.children
  if (!Array.isArray(kids) || kids.length === 0) return false
  return kids.some((n: any) => {
    if (n?.type === 'paragraph') return Array.isArray(n.children) && n.children.length > 0
    return Boolean(n?.type)
  })
}

const staticPages: any[] = [
  { path: '/', title: 'Accueil', pageType: 'classique' },
  { path: '/contact/', title: 'Contact', pageType: 'classique',
    seoTitle: 'Contact : devis & projets de formation',
    metaDescription: 'Contactez ABCM Performances à Strasbourg : renseignement ou projet de formation (intra/inter, présentiel ou visio). Réponse rapide, organisme Qualiopi.' },
  { path: '/portfolio/', title: 'Portfolio', pageType: 'portfolio',
    seoTitle: "Nos références et cas d'études | ABCM Performances",
    metaDescription: "Découvrez les réalisations d'ABCM Performances : sites internet, stratégie digitale, marketing, formations, publicité et graphisme pour des entreprises du Grand Est." },
  { path: '/articles/', title: 'Blog', pageType: 'classique' },
  { path: '/formations-strasbourg/', title: 'Formations', pageType: 'classique',
    seoTitle: 'Formations digitales & IA à Strasbourg',
    metaDescription: '18 formations professionnelles à Strasbourg et en visio : IA, réseaux sociaux, marketing digital, web et marque employeur. Qualiopi, financement OPCO.' },
  { path: '/mentions-legales/', title: 'Mentions légales', pageType: 'systeme',
    seoTitle: 'Mentions légales & RGPD',
    metaDescription: 'Mentions légales du site ABCM Performances : éditeur, propriété intellectuelle, cookies, protection des données personnelles (RGPD).' },
  { path: '/modalites-de-la-formation/', title: 'Modalités de la formation', pageType: 'systeme',
    seoTitle: 'Modalités de formation',
    metaDescription: "Modalités, moyens pédagogiques, techniques et d'encadrement des formations ABCM Performances, organisme certifié Qualiopi à Strasbourg." },
]

const servicePages = ABCM_SERVICES.map((s: any) => {
  const md: any = serviceMetadata(s.slug)
  return { path: `/${s.slug}/`, title: s.name || s.title || s.slug, pageType: 'service',
    seoTitle: titleStr(md.title), metaDescription: md.description || '', h1: s.title || '' }
})

const formationPages = rootFormationSlugs().map((slug: string) => {
  const f: any = getFormation(slug)
  const md: any = formationMetadata(slug)
  // Contenu éditorial « mini-article » (après le bloc formatrice) converti en
  // Lexical, pour être repris et édité dans le back-office comme un article.
  const editorial = formationContentToLexical(formationContent(slug))
  return {
    path: `/${slug}/`, title: f?.title || slug, pageType: 'formation',
    seoTitle: titleStr(md.title), metaDescription: md.description || '', h1: f?.title || '',
    ...(editorial ? { content: editorial } : {}),
    formationContent: {
      lead: f?.lead || '',
      prix: f ? formationPriceFrom(f) : undefined,
      duree: f?.duree || '',
      public: f?.public || '',
      // Ces champs utilisent des standards partagés en repli sur le site : on
      // les reprend tels quels pour que le back-office ne soit jamais vide.
      prerequis: f?.prerequis || STD_PREREQUIS,
      modalites: f?.modalites || STD_MODALITES,
      financement: f?.financement || STD_FINANCEMENT,
      objectifs: (f?.objectifs || []).map((o: string) => ({ objectif: o })),
      programme: (f?.programme || []).map((m: any) => ({
        module: m?.module || '',
        points: (m?.points || []).map((p: string) => ({ point: p })),
      })),
      tarifs: (f?.tarifs || STD_TARIFS).map((t: string) => ({ tarif: t })),
      faq: (f?.faq || []).map((x: any) => ({ question: x?.q || '', reponse: x?.a || '' })),
    },
  }
})

try {
  const payload = await getPayload({ config })
  const seedPage = async (p: any) => {
    const existing = await payload.find({ collection: 'pages', where: { path: { equals: p.path } }, limit: 1, depth: 2 })
    if (existing.docs.length) {
      const cur: any = existing.docs[0]
      const data: any = { title: p.title, pageType: p.pageType }
      if (p.seoTitle && !cur.seoTitle) data.seoTitle = p.seoTitle
      if (p.metaDescription && !cur.metaDescription) data.metaDescription = p.metaDescription
      if (p.h1 && !cur.h1) data.h1 = p.h1
      // Contenu éditorial (richText) : rempli seulement s'il est vide (jamais
      // écrasé si un rédacteur l'a déjà édité dans le back-office).
      if (p.content && !hasRichContent(cur.content)) data.content = p.content
      if (p.formationContent) {
        // Fill-only-empty champ par champ : on complète chaque valeur manquante
        // (ex. modalités/financement/tarifs restés vides), sans toucher à ce qui
        // a déjà été saisi.
        const curFC: any = cur.formationContent || {}
        const merged: any = {}
        let changed = false
        for (const [k, v] of Object.entries(p.formationContent)) {
          if (isEmptyValue(curFC[k]) && !isEmptyValue(v)) { merged[k] = v; changed = true }
        }
        if (changed) data.formationContent = { ...curFC, ...merged }
      }
      return payload.update({ collection: 'pages', id: cur.id, data, overrideAccess: true, context: { seeding: true } })
    }
    return payload.create({
      collection: 'pages',
      data: {
        path: p.path, title: p.title, pageType: p.pageType,
        seoTitle: p.seoTitle || '', metaDescription: p.metaDescription || '', h1: p.h1 || '',
        ...(p.content ? { content: p.content } : {}),
        ...(p.formationContent ? { formationContent: p.formationContent } : {}),
      },
      overrideAccess: true, context: { seeding: true },
    })
  }
  let ok = 0
  for (const p of [...staticPages, ...servicePages, ...formationPages]) {
    try { await seedPage(p); ok++ } catch (e: any) { log(`  ✗ page ${p.path} — ${e?.message || e}`) }
  }
  log(`populate-pages : ${ok} pages traitées (fill-only-empty)`)
} catch (e: any) {
  log('populate-pages : échec (' + (e?.message || e) + ') — ignoré')
}
process.exit(0)
