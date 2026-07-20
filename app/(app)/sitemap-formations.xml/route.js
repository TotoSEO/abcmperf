import { sectionEntries, renderUrlset, SITEMAP_HEADERS } from "@/lib/sitemap";

// Sous-sitemap « formations » : fiches formation (collection « pages »,
// pageType formation, hors noindex). Repli : data/formations.
export const revalidate = 3600;

export async function GET() {
  const xml = renderUrlset(await sectionEntries("formations"));
  return new Response(xml, { headers: SITEMAP_HEADERS });
}
