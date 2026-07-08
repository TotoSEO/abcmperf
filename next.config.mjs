import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */

// Deux cibles de déploiement pendant la migration :
//
//  • GitHub Pages (GITHUB_PAGES=true) — export statique du SITE PUBLIC uniquement,
//    servi depuis /abcmperf/. Ne construit PAS le back-office Payload (impossible
//    en export statique). Le workflow ne tourne que sur la branche `main`.
//
//  • Vercel (par défaut, GITHUB_PAGES vide) — application complète Next + Payload
//    (back-office /admin), servie à la racine. C'est la cible de la preview.
const isPages = process.env.GITHUB_PAGES === 'true'
const repo = 'abcmperf'

const baseConfig = {
  reactStrictMode: true,
  // Les URLs héritées de WordPress finissent par « / ».
  trailingSlash: true,
  // Exposé au client pour préfixer les assets servis via <img> bruts.
  env: { NEXT_PUBLIC_BASE_PATH: isPages ? `/${repo}` : '' },
}

const pagesConfig = {
  ...baseConfig,
  output: 'export',
  basePath: `/${repo}`,
  images: { unoptimized: true },
}

const vercelConfig = {
  ...baseConfig,
  async redirects() {
    return [
      // Point d'entrée du back-office demandé : /admin-login → connexion Payload.
      { source: '/admin-login', destination: '/admin/login', permanent: false },
    ]
  },
}

// En mode Pages : config statique brute (pas de Payload). Sinon : app complète
// enveloppée par Payload.
export default isPages ? pagesConfig : withPayload(vercelConfig)
