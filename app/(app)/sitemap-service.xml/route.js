import { sectionEntries, renderUrlset, SITEMAP_HEADERS } from "@/lib/sitemap";

// Sous-sitemap « service » : fiches service (collection « pages », pageType
// service, hors noindex). Repli : data/services.
export const revalidate = 3600;

export async function GET() {
  const xml = renderUrlset(await sectionEntries("service"));
  return new Response(xml, { headers: SITEMAP_HEADERS });
}
