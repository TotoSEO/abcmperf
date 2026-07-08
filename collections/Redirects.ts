import type { CollectionConfig } from 'payload'

// Gestionnaire de redirections 301/302. Pré-rempli avec les redirections
// existantes du site (voir scripts/migrate-content.ts).
export const Redirects: CollectionConfig = {
  slug: 'redirects',
  labels: { singular: 'Redirection', plural: 'Redirections' },
  admin: {
    useAsTitle: 'from',
    group: 'Contenu',
    defaultColumns: ['from', 'to', 'type', 'updatedAt'],
    description: 'Redirections 301 / 302.',
    listSearchableFields: ['from', 'to'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'from',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: 'Depuis (chemin)',
      admin: { description: 'Ancienne URL, ex. /ancienne-page/' },
    },
    {
      name: 'to',
      type: 'text',
      required: true,
      label: 'Vers (chemin ou URL)',
      admin: { description: 'Destination, ex. /nouvelle-page/' },
    },
    {
      name: 'type',
      type: 'select',
      defaultValue: '301',
      label: 'Type',
      options: [
        { label: '301 — permanent', value: '301' },
        { label: '302 — temporaire', value: '302' },
      ],
    },
  ],
}
