import { convertLexicalToHTMLAsync } from '@payloadcms/richtext-lexical/html-async'

const esc = (s: any) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

function mediaUrl(value: any): string {
  if (!value) return ''
  if (typeof value === 'object') return value.url || value.thumbnailURL || ''
  return ''
}

// Converters pour les blocs maison + les images (upload) de l'éditeur.
const converters = ({ defaultConverters }: any) => ({
  ...defaultConverters,
  upload: ({ node }: any) => {
    const url = mediaUrl(node?.value)
    if (!url) return ''
    const alt = esc(node?.fields?.alt || node?.value?.alt || '')
    return `<img src="${esc(url)}" alt="${alt}" loading="lazy" />`
  },
  blocks: {
    astuce: ({ node }: any) => {
      const f = node?.fields || {}
      const variante = esc(f.variante || 'astuce')
      return (
        `<aside class="blog-tip blog-tip--${variante}">` +
        (f.titre ? `<p class="blog-tip__title">${esc(f.titre)}</p>` : '') +
        `<div class="blog-tip__body">${esc(f.contenu).replace(/\n/g, '<br/>')}</div>` +
        `</aside>`
      )
    },
    ctaBanner: ({ node }: any) => {
      const f = node?.fields || {}
      const couleur = esc(f.couleur || 'rose')
      return (
        `<div class="blog-cta blog-cta--${couleur}">` +
        `<p class="blog-cta__text">${esc(f.texte)}</p>` +
        `<a class="blog-cta__btn" href="${esc(f.lien || '/contact/')}">${esc(f.labelBouton || 'Contact')}</a>` +
        `</div>`
      )
    },
    columns: async ({ node }: any) => {
      const cols = Array.isArray(node?.fields?.colonnes) ? node.fields.colonnes : []
      const parts: string[] = []
      for (const col of cols) {
        const inner = col?.contenu
          ? await convertLexicalToHTMLAsync({ data: col.contenu, converters, disableContainer: true })
          : ''
        parts.push(`<div class="blog-columns__col">${inner}</div>`)
      }
      const n = Math.min(Math.max(parts.length, 1), 4)
      return `<div class="blog-columns" data-cols="${n}">${parts.join('')}</div>`
    },
  },
})

// Rend le contenu Lexical d'un article en HTML (corps d'article).
// À utiliser sur un article dont le champ `content` a été peuplé (depth ≥ 2
// pour résoudre les images).
export async function renderLexicalToHtml(content: any): Promise<string> {
  if (!content?.root) return ''
  try {
    return await convertLexicalToHTMLAsync({ data: content, converters, disableContainer: true })
  } catch {
    return ''
  }
}
