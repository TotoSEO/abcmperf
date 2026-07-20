import { sectionEntries, renderUrlset, SITEMAP_HEADERS } from "@/lib/sitemap";

// Sous-sitemap « portfolio » : page listing + fiches références (collection
// « portfolio » publiées + fiches fichier historiques, hors noindex). Une fiche
// créée / supprimée dans l'admin s'y répercute.
export const revalidate = 3600;

export async function GET() {
  const xml = renderUrlset(await sectionEntries("portfolio"));
  return new Response(xml, { headers: SITEMAP_HEADERS });
}
