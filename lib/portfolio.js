import fs from "node:fs";
import path from "node:path";

// Fiches références reprises VERBATIM des pages live (content/portfolio/<slug>.json),
// générées par scripts de scraping. Lecture au build (export statique).
const DIR = path.join(process.cwd(), "content", "portfolio");

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
    return JSON.parse(fs.readFileSync(p, "utf8"));
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
