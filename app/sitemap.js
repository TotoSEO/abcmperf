import { ABCM_INFO, FORMATIONS, HUB_URL, MODALITES_URL } from "@/data/formations";
import { ABCM_SERVICES } from "@/data/services";

export const dynamic = "force-static";

// Sitemap statique généré au build (output: export). URLs sur le domaine de
// production (abcmperformances.com), cohérent avec les balises canoniques.
export default function sitemap() {
  const base = ABCM_INFO.url;
  const routes = [
    "/",
    HUB_URL,
    "/contact/",
    MODALITES_URL,
    "/mentions-legales/",
    ...FORMATIONS.map((f) => f.url),
    ...ABCM_SERVICES.map((s) => `/services/${s.slug}/`),
  ];
  return routes.map((path) => ({
    url: base + path,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path === HUB_URL ? 0.9 : 0.7,
  }));
}
