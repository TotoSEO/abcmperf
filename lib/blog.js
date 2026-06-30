import fs from "node:fs";
import path from "node:path";

// Articles de blog repris VERBATIM des pages live (content/blog/<slug>.json),
// générés par scripts/extract_article.py. Lecture au build (export statique).
const DIR = path.join(process.cwd(), "content", "blog");

export function blogSlugs() {
  if (!fs.existsSync(DIR)) return [];
  return fs.readdirSync(DIR).filter((f) => f.endsWith(".json")).map((f) => f.slice(0, -5));
}

export function getPost(slug) {
  const p = path.join(DIR, `${slug}.json`);
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

export function getAllPosts() {
  return blogSlugs()
    .map(getPost)
    .filter(Boolean)
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
}
