import { sectionEntries, renderUrlset, SITEMAP_HEADERS } from "@/lib/sitemap";

// Sous-sitemap « pages » : pages classiques et système (accueil, contact,
// listings, mentions légales, modalités…). Piloté par la collection « pages »
// du back-office (pageType classique/système, hors noindex).
export const revalidate = 3600;

export async function GET() {
  const xml = renderUrlset(await sectionEntries("pages"));
  return new Response(xml, { headers: SITEMAP_HEADERS });
}
