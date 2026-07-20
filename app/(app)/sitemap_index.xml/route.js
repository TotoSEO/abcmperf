import { renderSitemapIndex, SITEMAP_HEADERS } from "@/lib/sitemap";

// Index des sitemaps : pointe vers les 5 sous-sitemaps (pages, articles,
// formations, portfolio, service). Régénéré au plus tard toutes les heures, et
// immédiatement quand une page/fiche est modifiée dans le back-office
// (revalidatePath dans les hooks des collections).
export const revalidate = 3600;

export async function GET() {
  const xml = await renderSitemapIndex();
  return new Response(xml, { headers: SITEMAP_HEADERS });
}
