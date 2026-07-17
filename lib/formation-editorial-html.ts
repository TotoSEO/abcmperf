import { convertLexicalToHTMLAsync } from '@payloadcms/richtext-lexical/html-async'

/**
 * Rendu du contenu éditorial d'une fiche FORMATION (champ richText `content`)
 * en HTML habillé avec les classes `rich__*` du site, pour conserver EXACTEMENT
 * l'apparence de l'ancien rendu fichier (RichContent.jsx) une fois le contenu
 * repris dans le back-office.
 *
 * On s'appuie sur les converters par défaut de Payload (texte, gras/italique,
 * liens, titres, listes) — robustes face à toute édition — et on ne surcharge
 * que ce qui porte une identité visuelle : tableaux et blocs maison.
 */

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

const converters = ({ defaultConverters }: any) => ({
  ...defaultConverters,
  upload: ({ node }: any) => {
    const url = mediaUrl(node?.value)
    if (!url) return ''
    const alt = esc(node?.fields?.alt || node?.value?.alt || '')
    return `<img src="${esc(url)}" alt="${alt}" loading="lazy" />`
  },
  // Tableaux → habillage rich__table (les cellules d'en-tête = headerState > 0).
  table: async ({ node, nodesToHTML }: any) => {
    const rows = (await nodesToHTML({ nodes: node.children })).join('')
    return `<div class="rich__table-wrap"><table class="rich__table"><tbody>${rows}</tbody></table></div>`
  },
  tablerow: async ({ node, nodesToHTML }: any) => {
    const cells = (await nodesToHTML({ nodes: node.children })).join('')
    return `<tr>${cells}</tr>`
  },
  tablecell: async ({ node, nodesToHTML }: any) => {
    const inner = (await nodesToHTML({ nodes: node.children })).join('')
    const Tag = node?.headerState > 0 ? 'th' : 'td'
    const colspan = node?.colSpan > 1 ? ` colspan="${node.colSpan}"` : ''
    const rowspan = node?.rowSpan > 1 ? ` rowspan="${node.rowSpan}"` : ''
    return `<${Tag}${colspan}${rowspan}>${inner}</${Tag}>`
  },
  blocks: {
    // Encart mis en avant.
    astuce: ({ node }: any) => {
      const f = node?.fields || {}
      return (
        `<div class="rich__callout">` +
        (f.titre ? `<p class="rich__callout-title">${esc(f.titre)}</p>` : '') +
        `<p class="rich__callout-text">${esc(f.contenu).replace(/\n/g, '<br/>')}</p>` +
        `</div>`
      )
    },
    // Bannière CTA (réutilise l'habillage article, déjà stylé).
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
    // Colonnes → rich__cols (chaque colonne = son propre contenu riche).
    columns: async ({ node }: any) => {
      const cols = Array.isArray(node?.fields?.colonnes) ? node.fields.colonnes : []
      const parts: string[] = []
      for (const col of cols) {
        const inner = col?.contenu
          ? await convertLexicalToHTMLAsync({ data: col.contenu, converters, disableContainer: true })
          : ''
        parts.push(`<div class="rich__col">${inner}</div>`)
      }
      return `<div class="rich__cols">${parts.join('')}</div>`
    },
  },
})

// Rend le contenu éditorial d'une fiche formation en HTML habillé `rich`.
export async function renderFormationEditorialToHtml(content: any): Promise<string> {
  if (!content?.root) return ''
  try {
    const html = await convertLexicalToHTMLAsync({ data: content, converters, disableContainer: true })
    return html ? `<div class="rich rich--cms">${html}</div>` : ''
  } catch {
    return ''
  }
}
