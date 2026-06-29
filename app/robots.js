import { ABCM_INFO } from "@/data/formations";

export const dynamic = "force-static";

export default function robots() {
  const base = ABCM_INFO.url;
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
