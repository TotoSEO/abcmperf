import { sectionEntries, renderUrlset, SITEMAP_HEADERS } from "@/lib/sitemap";

// Sous-sitemap « articles » : articles de blog publiés (collection « articles »,
// repli fichiers). Un article publié / supprimé dans l'admin s'y répercute.
export const revalidate = 3600;

export async function GET() {
  const xml = renderUrlset(await sectionEntries("articles"));
  return new Response(xml, { headers: SITEMAP_HEADERS });
}
