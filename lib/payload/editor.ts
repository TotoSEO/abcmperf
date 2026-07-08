import {
  lexicalEditor,
  HeadingFeature,
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  BlocksFeature,
} from '@payloadcms/richtext-lexical'

import { Astuce } from '@/blocks/Astuce'
import { CtaBanner } from '@/blocks/CtaBanner'
import { Columns } from '@/blocks/Columns'

// Éditeur de corps d'article : rédaction riche (paragraphes, listes, citations,
// liens, gras/italique…) + titres limités à H2→H4 (le H1 reste le titre de
// l'article, pour le SEO) + tableaux + la bibliothèque de blocs maison.
export const contentEditor = lexicalEditor({
  features: ({ defaultFeatures }) => [
    ...defaultFeatures,
    // Placé après defaultFeatures : écrase la feature « heading » par défaut
    // pour ne proposer que H2, H3 et H4 dans la barre d'outils.
    HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
    EXPERIMENTAL_TableFeature(),
    FixedToolbarFeature(),
    BlocksFeature({ blocks: [Astuce, CtaBanner, Columns] }),
  ],
})
