import 'server-only'
import { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { renderLexicalToHtml } from '@/lib/lexical-html'
import { renderFormationEditorialToHtml } from '@/lib/formation-editorial-html'

export type PageOverride = {
  seoTitle: string
  metaDescription: string
  h1: string
  noindex: boolean
  contentHtml: string
}

// Récupère les valeurs éditables d'une page depuis la collection Payload
// `pages`, identifiée par son chemin (ex. "/agence-web-strasbourg/").
//
// Modèle « override » : chaque champ ne prend le dessus sur la valeur codée en
// dur QUE s'il est renseigné (voir pickOverride ci-dessous). Les pages ont donc
// toujours un rendu correct, même si la fiche Payload est vide ou si la base est
// injoignable — d'où le try/catch qui renvoie simplement null (repli complet).
// Mémoïsé par requête (dédup entre generateMetadata et le rendu).
export const getPageOverride = cache(async (path: string): Promise<PageOverride | null> => {
  try {
    const payload = await getPayload({ config })
    const res = await payload.find({
      collection: 'pages',
      where: { path: { equals: path } },
      limit: 1,
      depth: 1,
    })
    const doc: any = res.docs?.[0]
    if (!doc) return null

    let contentHtml = ''
    if (doc.content?.root) {
      try {
        contentHtml = (await renderLexicalToHtml(doc.content)) || ''
      } catch {
        contentHtml = ''
      }
    }

    return {
      seoTitle: (doc.seoTitle || '').trim(),
      metaDescription: (doc.metaDescription || '').trim(),
      h1: (doc.h1 || '').trim(),
      noindex: Boolean(doc.noindex),
      contentHtml,
    }
  } catch {
    return null
  }
})

// Contenu structuré d'une fiche FORMATION piloté depuis le back-office.
// Renvoie un objet dont chaque champ est vide/null s'il n'a pas été renseigné
// (le composant applique alors un repli sur la valeur codée en dur). null si la
// page n'existe pas ou en cas d'erreur (repli complet).
export const getFormationOverride = cache(async (path: string) => {
  try {
    const payload = await getPayload({ config })
    const res = await payload.find({
      collection: 'pages',
      where: { path: { equals: path } },
      limit: 1,
      depth: 2,
    })
    const doc: any = res.docs?.[0]
    if (!doc) return null
    const fc: any = doc.formationContent || {}

    let contentHtml = ''
    if (doc.content?.root) {
      try {
        contentHtml = (await renderFormationEditorialToHtml(doc.content)) || ''
      } catch {
        contentHtml = ''
      }
    }

    return {
      h1: (doc.h1 || '').trim(),
      contentHtml,
      lead: (fc.lead || '').trim(),
      prix: typeof fc.prix === 'number' ? fc.prix : null,
      duree: (fc.duree || '').trim(),
      public: (fc.public || '').trim(),
      prerequis: (fc.prerequis || '').trim(),
      modalites: (fc.modalites || '').trim(),
      financement: (fc.financement || '').trim(),
      objectifs: Array.isArray(fc.objectifs)
        ? fc.objectifs.map((o: any) => o?.objectif).filter(Boolean)
        : [],
      programme: Array.isArray(fc.programme)
        ? fc.programme
            .map((m: any) => ({
              module: m?.module || '',
              points: Array.isArray(m?.points) ? m.points.map((p: any) => p?.point).filter(Boolean) : [],
            }))
            .filter((m: any) => m.module)
        : [],
      tarifs: Array.isArray(fc.tarifs)
        ? fc.tarifs.map((t: any) => t?.tarif).filter(Boolean)
        : [],
      faq: Array.isArray(fc.faq)
        ? fc.faq.map((x: any) => ({ q: x?.question || '', a: x?.reponse || '' })).filter((x: any) => x.q && x.a)
        : [],
    }
  } catch {
    return null
  }
})

// Applique l'override d'une page Payload sur un objet Metadata Next existant :
// seoTitle → title (template « %s | ABCM » conservé), metaDescription →
// description (y compris OpenGraph), noindex → robots. Ne touche à rien si le
// champ Payload est vide.
export async function withPageOverride(path: string, base: any): Promise<any> {
  const o = await getPageOverride(path)
  if (!o) return base
  const md = { ...base }
  if (o.seoTitle) {
    md.title = o.seoTitle
    if (md.openGraph) md.openGraph = { ...md.openGraph, title: o.seoTitle }
  }
  if (o.metaDescription) {
    md.description = o.metaDescription
    if (md.openGraph) md.openGraph = { ...md.openGraph, description: o.metaDescription }
  }
  if (o.noindex) {
    md.robots = { index: false, follow: false }
  }
  return md
}
