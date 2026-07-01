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
