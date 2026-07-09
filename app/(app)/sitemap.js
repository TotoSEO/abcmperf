import { ABCM_INFO, FORMATIONS, HUB_URL, MODALITES_URL } from "@/data/formations";
import { ABCM_SERVICES } from "@/data/services";
import { getAllPosts } from "@/lib/blog";
import { getAllPostsFromPayload } from "@/lib/payload-posts";

// ISR : le sitemap est régénéré à la publication/suppression d'un article
// (revalidatePath('/sitemap.xml') dans les hooks Articles) ou au plus tard
// toutes les 5 min. Un nouvel article y apparaît, un supprimé en disparaît.
export const revalidate = 300;

// URLs sur le domaine de production (abcmperformances.com), cohérent avec les
// balises canoniques.
export default async function sitemap() {
  const base = ABCM_INFO.url;
  const routes = [
    "/",
    HUB_URL,
    "/contact/",
    MODALITES_URL,
    "/mentions-legales/",
    "/articles/",
    "/portfolio/",
    ...FORMATIONS.map((f) => f.url),
    ...ABCM_SERVICES.map((s) => `/${s.slug}/`),
  ];
  const staticEntries = routes.map((path) => ({
    url: base + path,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path === HUB_URL ? 0.9 : 0.7,
  }));
  // Articles de blog depuis Payload (source de vérité), repli fichiers si la
  // base est injoignable. URL sur le slug, date de dernière modification réelle.
  const posts = (await getAllPostsFromPayload()) || getAllPosts();
  const blogEntries = posts.map((post) => ({
    url: `${base}/${post.slug}/`,
    lastModified: post.modified || post.date || undefined,
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...staticEntries, ...blogEntries];
}
