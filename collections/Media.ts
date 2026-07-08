import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    group: 'Contenu',
    description: 'Images du site (couvertures d’articles, illustrations…).',
  },
  access: {
    read: () => true,
  },
  upload: {
    // En local, les fichiers vont dans /media (ignoré par git). En production
    // (Vercel), le plugin Vercel Blob prend le relais — voir payload.config.ts.
    mimeTypes: ['image/*'],
    imageSizes: [
      { name: 'thumbnail', width: 400 },
      { name: 'card', width: 768 },
      { name: 'hero', width: 1600 },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Texte alternatif (alt)',
      admin: { description: 'Décrit l’image pour l’accessibilité et le SEO.' },
    },
  ],
}
