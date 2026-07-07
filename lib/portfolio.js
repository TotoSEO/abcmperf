import fs from "node:fs";
import path from "node:path";
import { ABCM_SERVICES } from "../data/services.js";

// Fiches références reprises VERBATIM des pages live (content/portfolio/<slug>.json),
// générées par scripts de scraping. Lecture au build (export statique).
const DIR = path.join(process.cwd(), "content", "portfolio");

const SERVICE_SLUGS = new Set(ABCM_SERVICES.map((s) => s.slug));

// Services réellement mobilisés sur un projet : l'encart promo (s'il pointe un
// service) + les services cités en lien dans le corps de la fiche (source de
// vérité : ce que le texte d'origine référence). Ordre : promo d'abord.
function computeServices(c) {
  const out = [];
  const add = (slug) => {
    if (slug && SERVICE_SLUGS.has(slug) && !out.includes(slug)) out.push(slug);
  };
  if (c && c.promo && c.promo.kind === "Service") add(c.promo.slug);
  const re = /href="(?:%ASSET%)?\/([a-z0-9-]+)\/"/g;
  let m;
  while ((m = re.exec((c && c.body) || ""))) add(m[1]);
  return out;
}

export function portfolioSlugs() {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.slice(0, -5));
}

export function getCase(slug) {
  const p = path.join(DIR, `${slug}.json`);
  if (!fs.existsSync(p)) return null;
  try {
    const c = JSON.parse(fs.readFileSync(p, "utf8"));
    c.services = computeServices(c);
    return c;
  } catch {
    return null;
  }
}

export function getAllCases() {
  return portfolioSlugs()
    .map(getCase)
    .filter(Boolean)
    .sort((a, b) => (a.title || "").localeCompare(b.title || "", "fr"));
}
