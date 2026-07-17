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
    // ── Contenu structuré d'une fiche FORMATION (affiché seulement pour les
    // pages de type « formation »). Chaque champ laissé vide conserve la valeur
    // actuelle du site (repli). ─────────────────────────────────────────────
    {
      type: 'collapsible',
      label: 'Contenu de la formation',
      admin: {
        initCollapsed: false,
        condition: (data) => data?.pageType === 'formation',
        description:
          'Pilote la fiche formation. Un champ vide = la valeur actuelle du site est conservée.',
      },
      fields: [
        {
          name: 'formationContent',
          type: 'group',
          label: false,
          fields: [
            { name: 'lead', type: 'textarea', label: 'Accroche (chapô sous le titre)' },
            {
              type: 'row',
              fields: [
                { name: 'prix', type: 'number', label: 'Prix « à partir de » (€ HT / pers.)', admin: { width: '33%' } },
                { name: 'duree', type: 'text', label: 'Durée', admin: { width: '33%' } },
                { name: 'public', type: 'text', label: 'Public visé', admin: { width: '34%' } },
              ],
            },
            { name: 'prerequis', type: 'text', label: 'Prérequis' },
            {
              name: 'objectifs',
              type: 'array',
              label: 'Objectifs pédagogiques',
              labels: { singular: 'objectif', plural: 'objectifs' },
              fields: [{ name: 'objectif', type: 'text', required: true }],
            },
            {
              name: 'programme',
              type: 'array',
              label: 'Programme (modules)',
              labels: { singular: 'module', plural: 'modules' },
              admin: { description: 'Le déroulé de la formation, module par module.' },
              fields: [
                { name: 'module', type: 'text', required: true, label: 'Titre du module' },
                {
                  name: 'points',
                  type: 'array',
                  label: 'Points abordés',
                  labels: { singular: 'point', plural: 'points' },
                  fields: [{ name: 'point', type: 'text', required: true }],
                },
              ],
            },
            { name: 'modalites', type: 'textarea', label: 'Modalités (paragraphe)' },
            { name: 'financement', type: 'textarea', label: 'Financement (encart)' },
            {
              name: 'tarifs',
              type: 'array',
              label: 'Tarifs (HT)',
              labels: { singular: 'tarif', plural: 'tarifs' },
              fields: [{ name: 'tarif', type: 'text', required: true }],
            },
            {
              name: 'faq',
              type: 'array',
              label: 'FAQ',
              labels: { singular: 'question', plural: 'questions' },
              fields: [
                { name: 'question', type: 'text', required: true },
                { name: 'reponse', type: 'textarea', required: true },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Contenu éditorial (SEO)',
      admin: {
        description:
          'Bloc de contenu rédactionnel affiché sur la page (pages classiques, et en tête de corps des fiches service/formation).',
      },
    },
  ],
}
