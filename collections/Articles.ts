import type { CollectionConfig } from 'payload'
import { contentEditor } from '@/lib/payload/editor'

// Revalide la page publique d'un article (ISR) après publication / suppression.
// Ne fait rien pendant l'import (context.seeding) ni hors contexte Next.
async function revalidateArticle(slug?: string, context?: any) {
  if (!slug || context?.seeding) return
  try {
    const { revalidatePath } = await import('next/cache')
    revalidatePath(`/${slug}/`)
    revalidatePath('/articles/')
  } catch {
    /* hors contexte Next (CLI) : ignoré */
  }
}

export const Articles: CollectionConfig = {
  slug: 'articles',
  labels: { singular: 'Article', plural: 'Articles' },
  hooks: {
    beforeChange: [
      ({ data, originalDoc, req }) => {
        // L'import ne marque jamais un article comme « édité » : on préserve
        // le HTML original (fidélité SEO). Seule une vraie édition du contenu
        // dans l'admin bascule le rendu vers le contenu Lexical.
        if (req?.context?.seeding) return data
        const changed =
          JSON.stringify(data?.content ?? null) !== JSON.stringify(originalDoc?.content ?? null)
        if (changed && data) data.contentEdited = true
        return data
      },
    ],
    afterChange: [
      ({ doc, req }) => {
        void revalidateArticle(doc?.slug, req?.context)
      },
    ],
    afterDelete: [
      ({ doc, req }) => {
        void revalidateArticle(doc?.slug, req?.context)
      },
    ],
  },
  admin: {
    useAsTitle: 'title',
    group: 'Contenu',
    defaultColumns: ['title', 'slug', 'publishedDate', '_status', 'updatedAt'],
    description: 'Articles de blog.',
    listSearchableFields: ['title', 'slug'],
  },
  versions: {
    drafts: {
      autosave: { interval: 800 },
    },
    maxPerDoc: 20,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre (H1 / affichage)',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: 'Slug (URL)',
      admin: {
        position: 'sidebar',
        description: 'Identifiant d’URL, ex. geo-vs-aeo → /geo-vs-aeo/',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'author',
          type: 'text',
          label: 'Auteur',
          defaultValue: 'ABCM',
          admin: { width: '50%' },
        },
        {
          name: 'publishedDate',
          type: 'date',
          label: 'Date de publication',
          admin: { width: '50%', date: { pickerAppearance: 'dayAndTime' } },
        },
      ],
    },
    {
      name: 'cover',
      type: 'upload',
      relationTo: 'media',
      label: 'Image à la une',
    },
    {
      name: 'coverAlt',
      type: 'text',
      label: 'Texte alternatif de l’image à la une (alt)',
      admin: {
        description:
          'Prioritaire sur le alt du média. Décrit l’image à la une pour le SEO.',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Extrait',
      admin: { description: 'Résumé court affiché dans les listes d’articles.' },
    },
    {
      name: 'summary',
      type: 'array',
      label: 'En bref',
      labels: { singular: 'point', plural: 'points' },
      admin: { description: 'Encart « En bref » (liste de points clés).' },
      fields: [{ name: 'point', type: 'text', required: true }],
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Contenu',
      editor: contentEditor,
    },
    {
      type: 'collapsible',
      label: 'SEO',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'seoTitle',
          type: 'text',
          label: 'Balise Title',
          admin: { description: 'Si vide, le titre de l’article est utilisé.' },
        },
        { name: 'metaDescription', type: 'textarea', label: 'Meta description' },
      ],
    },
    {
      // Conservation du HTML d'origine importé depuis WordPress : garantit une
      // fidélité de rendu parfaite et sert de repli. Non éditable.
      name: 'legacyHtml',
      type: 'textarea',
      label: 'HTML original (import)',
      admin: {
        readOnly: true,
        position: 'sidebar',
        description: 'HTML historique conservé pour référence.',
      },
    },
    {
      // Passe à true dès que le contenu est édité dans l'admin : le site public
      // rend alors le contenu Lexical au lieu du HTML original.
      name: 'contentEdited',
      type: 'checkbox',
      defaultValue: false,
      admin: { hidden: true },
    },
    {
      // Chemin de la couverture d'origine (avec %ASSET%), utilisé en repli tant
      // qu'aucune image n'est uploadée dans le média.
      name: 'legacyCoverSrc',
      type: 'text',
      admin: { hidden: true },
    },
  ],
}
