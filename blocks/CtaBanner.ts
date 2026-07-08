import type { Block } from 'payload'

// Bannière d'appel à l'action insérable dans le corps d'un article.
// Texte, libellé du bouton, lien et couleur du bandeau sont tous éditables.
export const CtaBanner: Block = {
  slug: 'ctaBanner',
  interfaceName: 'CtaBannerBlock',
  labels: { singular: 'Bannière CTA', plural: 'Bannières CTA' },
  fields: [
    {
      name: 'texte',
      type: 'text',
      required: true,
      label: 'Texte',
      defaultValue: 'Besoin d’experts en gestion des réseaux sociaux ?',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'labelBouton',
          type: 'text',
          required: true,
          label: 'Libellé du bouton',
          defaultValue: 'Contactez-nous',
          admin: { width: '50%' },
        },
        {
          name: 'lien',
          type: 'text',
          required: true,
          label: 'Lien du bouton',
          defaultValue: '/contact/',
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'couleur',
      type: 'select',
      label: 'Couleur du bandeau',
      defaultValue: 'rose',
      options: [
        { label: 'Rose ABCM', value: 'rose' },
        { label: 'Violet', value: 'violet' },
        { label: 'Bleu nuit', value: 'bleu' },
        { label: 'Vert', value: 'vert' },
        { label: 'Ambre', value: 'ambre' },
        { label: 'Sombre', value: 'sombre' },
      ],
    },
  ],
}
