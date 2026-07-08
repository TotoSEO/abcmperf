import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

// Mise en page en colonnes (2 à 4). Chaque colonne a son propre contenu riche.
export const Columns: Block = {
  slug: 'columns',
  interfaceName: 'ColumnsBlock',
  labels: { singular: 'Colonnes', plural: 'Colonnes' },
  fields: [
    {
      name: 'colonnes',
      type: 'array',
      label: 'Colonnes',
      labels: { singular: 'colonne', plural: 'colonnes' },
      minRows: 2,
      maxRows: 4,
      fields: [
        {
          name: 'contenu',
          type: 'richText',
          label: 'Contenu de la colonne',
          // Éditeur simplifié dans les colonnes (pas de blocs imbriqués).
          editor: lexicalEditor(),
        },
      ],
    },
  ],
}
