/**
 * Convertit le contenu éditorial « fichier » d'une fiche formation
 * (data/formationContent.js — structure { sections: [{ h2, blocks[] }] })
 * en un état Lexical valide pour le champ richText `content` de la collection
 * Pages, en préservant les blocs maison :
 *   - callout  → bloc « Astuce » (encart mis en avant, variante « info »)
 *   - columns  → bloc « Colonnes » (chaque colonne = richText imbriqué)
 *   - table    → tableau natif Lexical (EXPERIMENTAL_TableFeature)
 *
 * Sert au peuplement (fill-only-empty) : une fois converti, le contenu est
 * éditable dans le back-office exactement comme un article.
 */

type LexNode = Record<string, any>

// --- Nœuds inline (texte, gras, liens) --------------------------------------

const FORMAT_BOLD = 1

function textNode(text: string, format = 0): LexNode {
  return { type: 'text', text, format, style: '', mode: 'normal', detail: 0, version: 1 }
}

function linkNode(url: string, children: LexNode[]): LexNode {
  return {
    type: 'link',
    fields: { linkType: 'custom', newTab: false, url },
    children,
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 3,
  }
}

// Parse **gras** et [ancre](/url/) (même grammaire que RichContent.renderInline)
// en une liste de nœuds inline Lexical.
export function inlineNodes(input: string): LexNode[] {
  const text = String(input ?? '')
  const out: LexNode[] = []
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(textNode(text.slice(last, m.index)))
    if (m[1] !== undefined) {
      out.push(textNode(m[1], FORMAT_BOLD))
    } else {
      // Le libellé d'un lien peut lui-même contenir du gras.
      out.push(linkNode(m[3], boldWithin(m[2])))
    }
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(textNode(text.slice(last)))
  return out.length ? out : [textNode(text)]
}

// Gras seul (à l'intérieur d'un lien : pas de lien imbriqué).
function boldWithin(input: string): LexNode[] {
  const text = String(input ?? '')
  const out: LexNode[] = []
  const re = /\*\*([^*]+)\*\*/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(textNode(text.slice(last, m.index)))
    out.push(textNode(m[1], FORMAT_BOLD))
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(textNode(text.slice(last)))
  return out.length ? out : [textNode(text)]
}

// Retire le balisage inline pour un champ texte brut (contenu d'un encart).
export function stripInline(input: string): string {
  return String(input ?? '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
}

// --- Nœuds bloc -------------------------------------------------------------

function paragraph(children: LexNode[]): LexNode {
  return { type: 'paragraph', children, direction: 'ltr', format: '', indent: 0, version: 1, textStyle: '', textFormat: 0 }
}

function heading(tag: string, children: LexNode[]): LexNode {
  return { type: 'heading', tag, children, direction: 'ltr', format: '', indent: 0, version: 1 }
}

function listItem(children: LexNode[], value: number): LexNode {
  return { type: 'listitem', value, checked: undefined, children, direction: 'ltr', format: '', indent: 0, version: 1 }
}

function list(listType: 'bullet' | 'number', items: string[]): LexNode {
  return {
    type: 'list',
    listType,
    tag: listType === 'number' ? 'ol' : 'ul',
    start: 1,
    children: items.map((it, i) => listItem(inlineNodes(it), i + 1)),
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  }
}

// Cellule / ligne / tableau natifs Lexical.
function tableCell(text: string, header: boolean): LexNode {
  return {
    type: 'tablecell',
    headerState: header ? 1 : 0, // 1 = ROW (th), 0 = td
    colSpan: 1,
    rowSpan: 1,
    backgroundColor: null,
    children: [paragraph(inlineNodes(text))],
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  }
}

function tableRow(cells: LexNode[]): LexNode {
  return { type: 'tablerow', children: cells, direction: 'ltr', format: '', indent: 0, version: 1 }
}

function tableNode(headers: string[], rows: string[][]): LexNode {
  const children: LexNode[] = []
  if (Array.isArray(headers) && headers.length) {
    children.push(tableRow(headers.map((h) => tableCell(h, true))))
  }
  for (const r of rows || []) {
    children.push(tableRow((r || []).map((c) => tableCell(c, false))))
  }
  return { type: 'table', children, direction: 'ltr', format: '', indent: 0, version: 1 }
}

// Bloc « Astuce » (encart mis en avant) — utilisé pour les callout.
function astuceBlock(title: string, text: string): LexNode {
  return {
    type: 'block',
    fields: {
      blockType: 'astuce',
      blockName: '',
      titre: title || 'À retenir',
      contenu: stripInline(text),
      variante: 'info',
    },
    format: '',
    version: 2,
  }
}

// Éditeur imbriqué d'une colonne (titre en h4 + liste ou paragraphe).
function columnEditorState(col: any): LexNode {
  const children: LexNode[] = []
  if (col?.title) children.push(heading('h4', inlineNodes(col.title)))
  if (Array.isArray(col?.items) && col.items.length) {
    children.push(list('bullet', col.items))
  } else if (col?.text) {
    children.push(paragraph(inlineNodes(col.text)))
  }
  if (!children.length) children.push(paragraph([]))
  return { root: { type: 'root', children, direction: 'ltr', format: '', indent: 0, version: 1 } }
}

// Bloc « Colonnes ».
function columnsBlock(cols: any[]): LexNode {
  return {
    type: 'block',
    fields: {
      blockType: 'columns',
      blockName: '',
      colonnes: (cols || []).map((c) => ({ contenu: columnEditorState(c) })),
    },
    format: '',
    version: 2,
  }
}

// --- Bloc éditorial → nœuds Lexical ----------------------------------------

function blockToNodes(b: any): LexNode[] {
  switch (b?.type) {
    case 'p':
      return [paragraph(inlineNodes(b.text))]
    case 'h3':
      return [heading('h3', inlineNodes(b.text))]
    case 'ul':
      return [list('bullet', b.items || [])]
    case 'ol':
      return [list('number', b.items || [])]
    case 'table': {
      const out: LexNode[] = []
      // La légende devient un paragraphe (gras) au-dessus du tableau.
      if (b.caption) out.push(paragraph(inlineNodes('**' + stripInline(b.caption) + '**')))
      out.push(tableNode(b.headers || [], b.rows || []))
      return out
    }
    case 'columns':
      return [columnsBlock(b.cols || [])]
    case 'callout':
      return [astuceBlock(b.title || '', b.text || '')]
    default:
      return []
  }
}

// Convertit un contenu { sections: [{ h2, blocks[] }] } en état Lexical complet.
// Renvoie null si le contenu est vide.
export function formationContentToLexical(content: any): LexNode | null {
  if (!content || !Array.isArray(content.sections) || content.sections.length === 0) return null
  const children: LexNode[] = []
  for (const s of content.sections) {
    if (s?.h2) children.push(heading('h2', inlineNodes(s.h2)))
    for (const b of s?.blocks || []) children.push(...blockToNodes(b))
  }
  if (!children.length) return null
  return { root: { type: 'root', children, direction: 'ltr', format: '', indent: 0, version: 1 } }
}
