// Contenu sémantique éditorial par fiche formation (SEO + lecture).
// Structure : { [slug]: { sections: [ { h2, blocks: [...] } ] } }
// Blocs supportés : p, h3, ul, ol, table, columns, callout (cf. RichContent.jsx).
// Rédigé sur-mesure par formation (recherche concurrentielle + plan).

export const FORMATION_CONTENT = {};

export function formationContent(slug) {
  return FORMATION_CONTENT[slug] || null;
}
