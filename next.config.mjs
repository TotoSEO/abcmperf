/** @type {import('next').NextConfig} */

// Déploiement GitHub Pages (projet servi depuis /abcmperf/).
// Le workflow .github/workflows/deploy.yml passe GITHUB_PAGES=true :
//   -> export statique dans out/ + basePath /abcmperf + images non optimisées.
// En local et pour un futur domaine personnalisé (servi à la racine),
// laisser GITHUB_PAGES vide : aucun basePath, comportement normal.
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "abcmperf";

const nextConfig = {
  reactStrictMode: true,
  // Les fiches réutilisent les URLs WordPress existantes, qui finissent par "/".
  trailingSlash: true,
  // Exposé au client pour préfixer les assets statiques servis via <img> bruts
  // (le basePath de Next ne préfixe pas les <img>, seulement _next/ et <Link>).
  env: { NEXT_PUBLIC_BASE_PATH: isPages ? `/${repo}` : "" },
  ...(isPages && {
    output: "export",
    basePath: `/${repo}`,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
