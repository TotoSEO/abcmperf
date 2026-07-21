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
    // Section « derniers articles » de la home.
    revalidatePath('/')
    revalidatePath('/sitemap-articles.xml')
    revalidatePath('/sitemap_index.xml')
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
        // L'import (seeding) ne marque jamais un article comme édité : on
        // préserve le HTML original ET la date de modification d'origine
        // (fidélité SEO). Une vraie édition dans l'admin marque l'article.
        if (req?.context?.seeding) return data
        if (data) {
          // Toute édition dans l'admin → la date de modification (updatedAt de
          // Payload) devient la référence pour dateModified.
          data.editedInAdmin = true
          // Édition spécifique du contenu → rendu depuis Lexical.
          const changed =
            JSON.stringify(data?.content ?? null) !== JSON.stringify(originalDoc?.content ?? null)
          if (changed) data.contentEdited = true
        }
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
    components: {
      edit: {
        // Bouton « Supprimer… » avec overlay de création de redirection.
        beforeDocumentControls: [
          '/lib/payload/deleteWithRedirect/DeleteWithRedirect#DeleteWithRedirect',
        ],
      },
    },
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
      admin: { description: 'Titre principal (H1) de l’article.' },
    },

    // ── Colonne de droite (sidebar) : réglages de l'article, façon WordPress ──
    // Box repliable regroupant slug, image à la une, auteur, date, extrait.
    {
      type: 'collapsible',
      label: 'Réglages de l’article',
      admin: { position: 'sidebar', initCollapsed: false },
      fields: [
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          index: true,
          label: 'Slug (URL)',
          admin: { description: 'ex. geo-vs-aeo → /geo-vs-aeo/' },
        },
        {
          name: 'author',
          type: 'text',
          label: 'Auteur',
          defaultValue: 'ABCM',
        },
        {
          name: 'publishedDate',
          type: 'date',
          label: 'Date de publication',
          admin: { date: { pickerAppearance: 'dayAndTime' } },
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
          label: 'Texte alternatif (alt)',
          admin: { description: 'Prioritaire sur le alt du média. Pour le SEO.' },
        },
        {
          name: 'excerpt',
          type: 'textarea',
          label: 'Extrait',
          admin: { description: 'Résumé court affiché dans les listes d’articles.' },
        },
      ],
    },
    // SEO : deuxième box repliable dans la sidebar.
    {
      type: 'collapsible',
      label: 'SEO',
      admin: { position: 'sidebar', initCollapsed: true },
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

    // ─────────────────── Colonne centrale : le contenu ───────────────────
    {
      name: 'summary',
      type: 'array',
      label: 'En bref',
      labels: { singular: 'point', plural: 'points' },
      admin: { description: 'Encart « En bref » (liste de points clés, en tête d’article).' },
      fields: [{ name: 'point', type: 'text', required: true }],
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Contenu',
      editor: contentEditor,
    },
    // HTML original importé : conservé pour référence et repli, mais rangé dans
    // un menu replié fermé par défaut (retiré de la sidebar).
    {
      type: 'collapsible',
      label: 'HTML original (import — référence)',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'legacyHtml',
          type: 'textarea',
          label: 'HTML original',
          admin: {
            readOnly: true,
            description: 'HTML historique conservé pour fidélité de rendu et repli.',
          },
        },
      ],
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
      // Passe à true à la première édition dans l'admin. Tant que false, la
      // dateModified (données structurées / affichage) reste la date de
      // modification d'origine (legacyModified), et non la date d'import.
      name: 'editedInAdmin',
      type: 'checkbox',
      defaultValue: false,
      admin: { hidden: true },
    },
    {
      // Date de modification d'origine (issue du site WordPress). Sert de
      // dateModified tant que l'article n'a pas été édité dans l'admin.
      name: 'legacyModified',
      type: 'date',
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
