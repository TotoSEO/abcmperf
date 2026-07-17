import type { CollectionConfig } from 'payload'

// Revalide (ISR) la page publique correspondante après édition/suppression —
// les modifs SEO/H1/contenu passent donc en live. Ne fait rien pendant l'import
// (context.seeding) ni hors contexte Next (CLI).
async function revalidatePage(path?: string, context?: any) {
  if (!path || context?.seeding) return
  try {
    const { revalidatePath } = await import('next/cache')
    revalidatePath(path)
  } catch {
    /* hors contexte Next : ignoré */
  }
}

// Pages du site (hors articles de blog). Sert à piloter les champs SEO
// (Title / Meta / H1) et, pour les pages classiques, un contenu éditable.
export const Pages: CollectionConfig = {
  slug: 'pages',
  hooks: {
    afterChange: [({ doc, req }) => { void revalidatePage(doc?.path, req?.context) }],
    afterDelete: [({ doc, req }) => { void revalidatePage(doc?.path, req?.context) }],
  },
  admin: {
    useAsTitle: 'title',
    group: 'Contenu',
    defaultColumns: ['title', 'path', 'pageType', 'updatedAt'],
    description: 'Pages du site : titres, méta et H1.',
    listSearchableFields: ['title', 'path'],
    components: {
      edit: {
        // Bouton « Supprimer… » avec overlay de création de redirection.
        beforeDocumentControls: [
          '/lib/payload/deleteWithRedirect/DeleteWithRedirect#DeleteWithRedirect',
        ],
      },
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre (interne / navigation)',
    },
    {
      name: 'path',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: 'Chemin (URL)',
      admin: { description: 'Ex. /contact/ ou /services/site-web/' },
    },
    {
      name: 'pageType',
      type: 'select',
      required: true,
      defaultValue: 'classique',
      label: 'Type de page',
      options: [
        { label: 'Page classique', value: 'classique' },
        { label: 'Service', value: 'service' },
        { label: 'Formation', value: 'formation' },
        { label: 'Portfolio', value: 'portfolio' },
        { label: 'Système', value: 'systeme' },
      ],
    },
    {
      type: 'collapsible',
      label: 'SEO',
      admin: { initCollapsed: false },
      fields: [
        { name: 'seoTitle', type: 'text', label: 'Balise Title' },
        { name: 'metaDescription', type: 'textarea', label: 'Meta description' },
        { name: 'h1', type: 'text', label: 'Titre H1' },
        {
          name: 'noindex',
          type: 'checkbox',
          label: 'Ne pas indexer (noindex)',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Contenu (optionnel)',
      admin: {
        description: 'Utilisé pour les pages classiques éditables via le CMS.',
      },
    },
  ],
}
