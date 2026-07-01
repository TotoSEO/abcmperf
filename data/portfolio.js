// Métadonnées des thématiques (silos) du portfolio. Les fiches elles-mêmes
// vivent dans content/portfolio/<slug>.json (contenu repris VERBATIM du site
// WordPress) et sont lues au build par lib/portfolio.js.

export const PORTFOLIO_URL = "/portfolio/";

export const PORTFOLIO_THEMES = [
  { id: "site-internet", label: "Sites internet", short: "Web", hue: "var(--logo-blue)", icon: "monitor" },
  { id: "formations", label: "Formations", short: "Formations", hue: "var(--logo-green)", icon: "graduation-cap" },
  { id: "strategie", label: "Stratégie", short: "Stratégie", hue: "var(--logo-magenta)", icon: "target" },
  { id: "marketing", label: "Marketing", short: "Marketing", hue: "var(--logo-orange)", icon: "line-chart" },
  { id: "publicite", label: "Publicité", short: "Publicité", hue: "var(--logo-yellow)", icon: "megaphone" },
  { id: "graphisme", label: "Graphisme", short: "Graphisme", hue: "#7c5cff", icon: "palette" },
];

export const THEME_MAP = Object.fromEntries(PORTFOLIO_THEMES.map((t) => [t.id, t]));

export function getTheme(id) {
  return THEME_MAP[id] || null;
}

// Thématique principale d'une fiche = première catégorie déclarée (ordre source).
export function primaryTheme(categories) {
  const list = Array.isArray(categories) ? categories : [];
  for (const id of list) {
    if (THEME_MAP[id]) return THEME_MAP[id];
  }
  return PORTFOLIO_THEMES[0];
}

// Thématiques d'une fiche, dans l'ordre canonique des thèmes.
export function caseThemes(categories) {
  const set = new Set(Array.isArray(categories) ? categories : []);
  return PORTFOLIO_THEMES.filter((t) => set.has(t.id));
}

// Catégorie portfolio de repli par pôle de service (pour les cas d'étude).
const CAT_BY_GROUP = {
  web: "site-internet",
  referencement: "strategie",
  social: "marketing",
  acquisition: "publicite",
};

// Sélectionne jusqu'à `max` fiches références pertinentes pour un service :
// d'abord celles dont l'encart promo pointe ce service, puis les autres
// services du même pôle, puis par catégorie thématique. `groupServiceSlugs`
// = slugs des services du même pôle (fournis par l'appelant).
export function casesForService(service, allCases, groupServiceSlugs = [], max = 4) {
  const cases = Array.isArray(allCases) ? allCases : [];
  const byPromo = cases.filter((c) => c.promo && c.promo.slug === service.slug);
  const byGroup = cases.filter((c) => c.promo && groupServiceSlugs.includes(c.promo.slug));
  const cat = CAT_BY_GROUP[service.group];
  const byCat = cat ? cases.filter((c) => (c.categories || []).includes(cat)) : [];
  const seen = new Set();
  const out = [];
  for (const list of [byPromo, byGroup, byCat]) {
    for (const c of list) {
      if (!seen.has(c.slug)) {
        seen.add(c.slug);
        out.push(c);
      }
    }
  }
  return out.slice(0, max);
}
