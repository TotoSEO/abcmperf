import type { Block } from 'payload'

// Encart « Astuce » — bloc éditorial mis en avant dans le corps d'un article.
export const Astuce: Block = {
  slug: 'astuce',
  interfaceName: 'AstuceBlock',
  labels: { singular: 'Astuce', plural: 'Astuces' },
  fields: [
    {
      name: 'titre',
      type: 'text',
      label: 'Titre de l’encart',
      defaultValue: 'Astuce',
    },
    {
      name: 'contenu',
      type: 'textarea',
      required: true,
      label: 'Contenu',
    },
    {
      name: 'variante',
      type: 'select',
      label: 'Style',
      defaultValue: 'astuce',
      options: [
        { label: 'Astuce (rose)', value: 'astuce' },
        { label: 'Info (bleu)', value: 'info' },
        { label: 'À retenir (vert)', value: 'retenir' },
        { label: 'Attention (ambre)', value: 'attention' },
      ],
    },
  ],
}
