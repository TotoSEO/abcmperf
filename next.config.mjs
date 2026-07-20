import { withPayload } from '@payloadcms/next/withPayload'
import fs from 'node:fs'

/** @type {import('next').NextConfig} */

// Hébergement : Vercel (application complète Next + Payload).
// Le site public ET le back-office (/admin) sont servis depuis Vercel ;
// il ne reste qu'à brancher le nom de domaine (dernière étape).

// Redirections gérées dans le back-office : exportées au build par
// scripts/export-redirects.ts vers redirects.generated.json, converties ici en
// vraies redirections HTTP 301/302. (Une nouvelle redirection ajoutée dans
// l'admin s'active au prochain déploiement.)
function managedRedirects() {
  try {
    const raw = fs.readFileSync(new URL('./redirects.generated.json', import.meta.url), 'utf8')
    const list = JSON.parse(raw)
    if (!Array.isArray(list)) return []
    return list
      .filter((r) => r && r.from && r.to && r.from !== r.to)
      .map((r) => ({
        source: r.from,
        destination: r.to,
        // Vrai code HTTP 301/302 (et non 308/307) pour coller au gestionnaire.
        statusCode: r.type === '302' ? 302 : 301,
      }))
  } catch {
    return []
  }
}

const nextConfig = {
  reactStrictMode: true,
  // Les URLs héritées de WordPress finissent par « / » — conservé pour le SEO.
  trailingSlash: true,
  // Le repli fichier (content/blog/*.json), utilisé si la base est injoignable,
  // s'exécute désormais au runtime (ISR) — pas seulement au build. On force donc
  // l'inclusion de ces fichiers dans le bundle des fonctions serverless Vercel,
  // sans quoi le repli renverrait une liste vide pendant une coupure base.
  outputFileTracingIncludes: {
    '/articles': ['./content/blog/**/*'],
    '/[slug]': ['./content/blog/**/*'],
    // Les fiches portfolio et les sitemaps utilisent le repli fichier au runtime
    // (ISR) si la base est injoignable → on force l'inclusion de ces contenus
    // dans le bundle des fonctions serverless Vercel.
    '/portfolio': ['./content/portfolio/**/*'],
    '/portfolio/[slug]': ['./content/portfolio/**/*'],
    '/sitemap_index.xml': ['./content/blog/**/*', './content/portfolio/**/*'],
    '/sitemap-articles.xml': ['./content/blog/**/*'],
    '/sitemap-portfolio.xml': ['./content/portfolio/**/*'],
  },
  async redirects() {
    return [
      // Point d'entrée du back-office : /admin-login → connexion Payload.
      { source: '/admin-login', destination: '/admin/login', permanent: false },
      // Sitemap historique → index segmenté (préserve les soumissions existantes).
      { source: '/sitemap.xml', destination: '/sitemap_index.xml', permanent: true },
      ...managedRedirects(),
    ]
  },
}

export default withPayload(nextConfig)
