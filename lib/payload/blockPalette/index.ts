import { createServerFeature } from '@payloadcms/richtext-lexical'

// Feature serveur qui monte la palette de blocs ABCM au-dessus de l'éditeur.
// Le composant client est référencé via l'importMap (chemin racine du projet) :
// il doit être régénéré (`npm run generate:importmap`) après toute modification.
export const BlockPaletteFeature = createServerFeature({
  key: 'blockPalette',
  feature: {
    ClientFeature: '/lib/payload/blockPalette/Palette#BlockPaletteFeatureClient',
  },
})
