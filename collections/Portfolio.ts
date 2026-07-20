import type { CollectionConfig } from 'payload'
import { contentEditor } from '@/lib/payload/editor'
import { PORTFOLIO_THEMES } from '@/data/portfolio'
import { ABCM_SERVICES } from '@/data/services'

// Revalide (ISR) la fiche portfolio publique, la grille /portfolio/ et les
// sitemaps après édition / suppression. Ne fait rien pendant l'import
// (context.seeding) ni hors contexte Next (CLI).
async function revalidatePortfolio(slug?: string, context?: any) {
  if (context?.seeding) return
  try {
    const { revalidatePath } = await import('next/cache')
    if (slug) revalidatePath(`/portfolio/${slug}/`)
    revalidatePath('/portfolio/')
    // Sitemap portfolio + index : une fiche créée / supprimée s'y répercute.
    revalidatePath('/sitemap-portfolio.xml')
    revalidatePath('/sitemap_index.xml')
  } catch {
    /* hors contexte Next (CLI) : ignoré */
  }
}

// Options « catégories » alignées sur les thématiques (silos) du portfolio.
const CATEGORY_OPTIONS = PORTFOLIO_THEMES.map((t) => ({ label: t.label, value: t.id }))

// Options « service lié » = les fiches service du site (slug stable).
const SERVICE_OPTIONS = ABCM_SERVICES.map((s: any) => ({
  label: s.name || s.title || s.slug,
  value: s.slug,
}))

// Fiches références / cas clients du portfolio, éditables et créables depuis le
// back-office. Le site public lit cette collection en priorité (source de
// vérité), avec repli sur les fiches historiques (content/portfolio/*.json).
export const Portfolio: CollectionConfig = {
  slug: 'portfolio',
  labels: { singular: 'Référence (portfolio)', plural: 'Portfolio' },
  hooks: {
    afterChange: [({ doc, req }) => { void revalidatePortfolio(doc?.slug, req?.context) }],
    afterDelete: [({ doc, req }) => { void revalidatePortfolio(doc?.slug, req?.context) }],
  },
  admin: {
    useAsTitle: 'title',
    group: 'Contenu',
    defaultColumns: ['title', 'slug', 'projectType', 'status', 'updatedAt'],
    description: 'Fiches références / cas clients affichées dans le portfolio.',
    listSearchableFields: ['title', 'slug', 'projectType'],
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
      label: 'Titre (nom du client / projet)',
      admin: { description: 'Ex. « Abry Arnold ». Sert de H1 sur la fiche.' },
    },

    // ── Colonne de droite : réglages de la fiche ──────────────────────────
    {
      type: 'collapsible',
      label: 'Réglages de la référence',
      admin: { position: 'sidebar', initCollapsed: false },
      fields: [
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          index: true,
          label: 'Slug (URL)',
          admin: { description: 'ex. abry-arnold → /portfolio/abry-arnold/' },
        },
        {
          name: 'status',
          type: 'select',
          required: true,
          defaultValue: 'draft',
          label: 'Statut',
          options: [
            { label: 'Brouillon (non publié)', value: 'draft' },
            { label: 'Publié (en ligne)', value: 'published' },
          ],
          admin: {
            description:
              'Seules les fiches « Publié » apparaissent sur le site et dans le sitemap.',
          },
        },
        {
          name: 'projectType',
          type: 'text',
          label: 'Type de projet',
          admin: { description: 'Ex. « Stratégie Digitale », « Création de site »… (affiché en sur-titre).' },
        },
        {
          name: 'categories',
          type: 'select',
          hasMany: true,
          label: 'Thématiques',
          options: CATEGORY_OPTIONS,
          admin: {
            description:
              'Une ou plusieurs thématiques. La première sert de thématique principale (couleur / filtre).',
          },
        },
        {
          name: 'cover',
          type: 'upload',
          relationTo: 'media',
          label: 'Image de couverture (vignette)',
          admin: { description: 'Visuel principal : vignette de la grille et image du hero.' },
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo du client (optionnel)',
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
          admin: { description: 'Si vide, le titre de la fiche est utilisé.' },
        },
        { name: 'metaDescription', type: 'textarea', label: 'Meta description' },
        {
          name: 'noindex',
          type: 'checkbox',
          label: 'Ne pas indexer (noindex)',
          // Politique actuelle : les fiches références ne sont pas indexées.
          // Coché par défaut → la fiche est en noindex et hors du sitemap.
          defaultValue: true,
          admin: {
            description:
              'Coché par défaut (politique du site) : la fiche est en noindex et exclue du sitemap. Décochez pour indexer cette fiche et l’ajouter au sitemap portfolio.',
          },
        },
      ],
    },

    // ─────────────────── Colonne centrale : le contenu ───────────────────
    {
      name: 'content',
      type: 'richText',
      label: 'Contenu de la fiche',
      editor: contentEditor,
      admin: {
        description:
          'Corps de la fiche. Chaque titre H2 (ex. « La demande », « Notre réponse ») démarre une nouvelle section illustrée.',
      },
    },
    // Encart « service / formation lié » affiché en surimpression du corps.
    {
      type: 'collapsible',
      label: 'Encart mis en avant (service ou formation lié)',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'promo',
          type: 'group',
          label: false,
          fields: [
            {
              name: 'kind',
              type: 'select',
              defaultValue: 'none',
              label: 'Type d’encart',
              options: [
                { label: 'Aucun', value: 'none' },
                { label: 'Service lié', value: 'service' },
                { label: 'Formation liée', value: 'formation' },
              ],
            },
            {
              name: 'service',
              type: 'select',
              label: 'Service lié',
              options: SERVICE_OPTIONS,
              admin: { condition: (_, sibling) => sibling?.kind === 'service' },
            },
            {
              name: 'formation',
              type: 'text',
              label: 'Slug de la formation liée',
              admin: {
                condition: (_, sibling) => sibling?.kind === 'formation',
                description: 'Ex. formation-wordpress (le slug de la fiche formation, sans les slashs).',
              },
            },
          ],
        },
      ],
    },
  ],
}
