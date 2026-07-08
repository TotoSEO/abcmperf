'use client'

import * as React from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext.js'
import { $getRoot, $getSelection, $isRangeSelection } from 'lexical'
import { INSERT_BLOCK_COMMAND, createClientFeature } from '@payloadcms/richtext-lexical/client'

// Palette de blocs ABCM — barre persistante affichée au-dessus de l'éditeur.
// Chaque carte insère le bloc correspondant d'un clic (au niveau du curseur,
// ou en fin de contenu si l'éditeur n'a pas encore le focus). C'est la version
// robuste et supportée d'une « bibliothèque de blocs » à la WordPress : elle
// réutilise exactement la commande d'insertion native (INSERT_BLOCK_COMMAND).

type PaletteBlock = { slug: string; label: string; icon: string; desc: string }

const BLOCKS: PaletteBlock[] = [
  { slug: 'astuce', label: 'Astuce', icon: '💡', desc: 'Encart éditorial mis en avant (astuce, info, à retenir, attention).' },
  { slug: 'ctaBanner', label: 'Bannière CTA', icon: '📣', desc: 'Bandeau d’appel à l’action avec bouton et lien.' },
  { slug: 'columns', label: 'Colonnes', icon: '▚', desc: 'Mise en page sur 2 à 4 colonnes.' },
]

function BlockPalettePlugin(): React.ReactElement {
  const [editor] = useLexicalComposerContext()

  const insertBlock = React.useCallback(
    (blockType: string) => {
      // Garantit une sélection (au besoin en fin de contenu) : la commande
      // native n'insère un bloc que s'il existe une sélection de type range.
      editor.update(() => {
        const selection = $getSelection()
        if (!$isRangeSelection(selection)) {
          $getRoot().selectEnd()
        }
      })
      editor.dispatchCommand(INSERT_BLOCK_COMMAND, { blockType, blockName: '' })
    },
    [editor],
  )

  return (
    <div className="abcm-palette" role="toolbar" aria-label="Bibliothèque de blocs">
      <span className="abcm-palette__title">Blocs&nbsp;ABCM</span>
      <div className="abcm-palette__items">
        {BLOCKS.map((b) => (
          <button
            key={b.slug}
            type="button"
            className="abcm-palette__item"
            title={b.desc}
            aria-label={`Insérer un bloc ${b.label}`}
            // preventDefault sur mousedown : évite que l'éditeur perde sa
            // sélection quand on clique le bouton de la palette.
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => insertBlock(b.slug)}
          >
            <span className="abcm-palette__icon" aria-hidden="true">
              {b.icon}
            </span>
            <span className="abcm-palette__name">{b.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export const BlockPaletteFeatureClient = createClientFeature({
  plugins: [{ Component: BlockPalettePlugin, position: 'aboveContainer' }],
})
