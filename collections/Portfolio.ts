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
//
// Structure de la fiche pensée pour l'édition : chaque partie a son propre champ
// (demande du client, notre réponse, visuels, projet en quelques mots…) plutôt
// qu'un seul corps libre. Le champ « content » historique reste disponible en
// repli pour les fiches importées avant cette refonte.
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
    // ─────────────────── Colonne centrale : le contenu ───────────────────
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre (nom du client / projet)',
      admin: { description: 'Ex. « Abry Arnold ». Sert de nom de la référence dans le back-office.' },
    },
    {
      name: 'h1',
      type: 'text',
      label: 'H1 (titre principal de la page)',
      admin: { description: 'Titre affiché en haut de la fiche. Si vide, le titre ci-dessus est utilisé.' },
    },
    {
      name: 'summary',
      type: 'textarea',
      label: 'Le projet en quelques mots',
      admin: { description: 'Résumé court affiché en introduction de la fiche (1 à 3 phrases).' },
    },
    {
      name: 'clientRequest',
      type: 'richText',
      label: 'La demande du client',
      editor: contentEditor,
      admin: { description: 'Le besoin, le contexte et les objectifs du client.' },
    },
    {
      name: 'ourResponse',
      type: 'richText',
      label: 'Notre réponse',
      editor: contentEditor,
      admin: { description: 'La solution mise en place, la démarche et les livrables.' },
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Visuels de la prestation',
      labels: { singular: 'Visuel', plural: 'Visuels' },
      admin: { description: 'Une ou plusieurs images (mockups, captures, réalisations…). Ajoutez-en autant que nécessaire.' },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Image',
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Texte alternatif (accessibilité / SEO)',
        },
      ],
    },
    // Corps libre historique : repli pour les fiches importées avant la refonte
    // par champs dédiés. Optionnel pour les nouvelles fiches.
    {
      name: 'content',
      type: 'richText',
      label: 'Contenu libre (optionnel)',
      editor: contentEditor,
      admin: {
        description:
          'Optionnel. Ancien format « corps libre » (sections en titres H2). Utilisé uniquement si les champs structurés ci-dessus sont vides.',
      },
    },
    // Encart « service / formation lié » affiché en surimpression du corps.
    {
      type: 'collapsible',
      label: 'Service / formation associé (encart mis en avant)',
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
              label: 'Service associé',
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
        // ── Mise en avant : « à la une » sur la première ligne de la grille ──
        // Jusqu'à 3 fiches peuvent être épinglées. Elles sont affichées en tête
        // du portfolio (première ligne). L'ordre entre elles est donné par le
        // rang ci-dessous (1 → 3). Au-delà de 3, seules les 3 premières (rang le
        // plus bas) sont réellement épinglées côté site.
        {
          name: 'featured',
          type: 'checkbox',
          defaultValue: false,
          label: 'À la une (première ligne)',
          admin: {
            description:
              'Épingle cette fiche sur la première ligne du portfolio. Jusqu’à 3 fiches à la une (les 3 rangs les plus bas si davantage sont cochées).',
          },
        },
        {
          name: 'featuredRank',
          type: 'number',
          label: 'Rang à la une (1 à 3)',
          min: 1,
          max: 3,
          admin: {
            condition: (_, sibling) => Boolean(sibling?.featured),
            description:
              'Ordre d’affichage parmi les fiches à la une (1 = première). Laisser vide pour classer par titre.',
            step: 1,
          },
        },
        {
          name: 'projectType',
          type: 'text',
          label: 'Type de projet (sur-titre)',
          admin: { description: 'Ex. « Stratégie Digitale », « Création de site »… (affiché en sur-titre).' },
        },
        {
          name: 'categories',
          type: 'select',
          hasMany: true,
          label: 'Catégorie de projet',
          options: CATEGORY_OPTIONS,
          admin: {
            description:
              'Une ou plusieurs catégories. La première sert de catégorie principale (couleur / filtre).',
          },
        },
        {
          name: 'cover',
          type: 'upload',
          relationTo: 'media',
          label: 'Image de présentation (vignette)',
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
  ],
}
