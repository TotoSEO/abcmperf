import 'server-only'
import { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { renderLexicalToHtml } from '@/lib/lexical-html'
import { getPost } from '@/lib/blog'

// Construit un objet `post` (même forme que lib/blog.js) à partir de Payload.
// Renvoie null si l'article n'existe pas OU si la base est indisponible — dans
// ce cas l'appelant retombe sur le rendu fichier (aucune régression possible).
// Mémoïsé par requête (dédup entre generateMetadata et le rendu).
export const getPostFromPayload = cache(async (slug: string) => {
  try {
    const payload = await getPayload({ config })
    const res = await payload.find({
      collection: 'articles',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 2, // peuple cover + images du contenu
      draft: false,
    })
    const doc: any = res.docs?.[0]
    if (!doc) return null

    // Corps : HTML original exact tant que le contenu n'a pas été édité dans
    // l'admin ; sinon rendu du contenu Lexical (les modifs passent en live).
    let html = doc.legacyHtml || ''
    if (doc.contentEdited && doc.content?.root) {
      const rendered = await renderLexicalToHtml(doc.content)
      if (rendered) html = rendered
    }

    // Couverture : média uploadé si présent, sinon chemin d'origine conservé,
    // sinon ultime repli sur la couverture du fichier d'origine (garantit que
    // les couvertures ne disparaissent jamais, même avant un ré-import).
    let cover: { src: string; alt: string } | null = null
    if (doc.cover && typeof doc.cover === 'object' && doc.cover.url) {
      cover = { src: doc.cover.url, alt: doc.coverAlt || doc.cover.alt || '' }
    } else if (doc.legacyCoverSrc) {
      cover = { src: doc.legacyCoverSrc, alt: doc.coverAlt || '' }
    } else {
      const filePost: any = getPost(slug)
      if (filePost?.cover) cover = { src: filePost.cover.src, alt: doc.coverAlt || filePost.cover.alt || '' }
    }

    const summary = Array.isArray(doc.summary)
      ? doc.summary.map((s: any) => s?.point).filter(Boolean)
      : []

    return {
      slug: doc.slug,
      title: doc.title,
      seoTitle: doc.seoTitle || '',
      description: doc.metaDescription || doc.excerpt || '',
      author: doc.author || '',
      date: doc.publishedDate || undefined,
      modified: doc.updatedAt || undefined,
      cover,
      summary,
      html,
    }
  } catch {
    return null
  }
})
