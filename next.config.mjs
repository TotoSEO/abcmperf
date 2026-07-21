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

// Redirections 301 des anciennes fiches formation (WordPress) supprimées lors
// de la refonte et oubliées par la migration : sans elles, ces URLs indexées
// renvoyaient un 404. Cibles alignées sur la convention des redirections déjà
// en place (marketing → webmarketing, RH → marque employeur, vidéo → CapCut,
// réseaux → réseaux sociaux, sinon le hub des formations). Complète les
// redirections gérées dans le back-office (managedRedirects).
const migrationRedirects = [
  // Fiches formation avec équivalent direct sur le nouveau site
  { source: '/formations-strasbourg/formation-publicite-google-ads/', destination: '/formation-publicite-google-ads/', statusCode: 301 },
  { source: '/formation-deployer-sa-strategie-de-referencement/', destination: '/formation-referencement-strasbourg/', statusCode: 301 },
  { source: '/formation-boostez-votre-efficacite-redactionnelle-grace-aux-ia-generatives/', destination: '/formation-booster-ses-ecrits-professionnels-avec-lia/', statusCode: 301 },
  { source: '/formation-rediger-pour-le-web-strasbourg/', destination: '/formation-booster-ses-ecrits-professionnels-avec-lia/', statusCode: 301 },
  { source: '/formation-vos-mails-sans-fautes-et-sans-reproches/', destination: '/formation-booster-ses-ecrits-professionnels-avec-lia/', statusCode: 301 },
  { source: '/formation-community-manager-strasbourg-alsace/', destination: '/formation-reseaux-sociaux/', statusCode: 301 },
  { source: '/formation-publicite-facebook-instagram/', destination: '/formation-reseaux-sociaux/', statusCode: 301 },
  { source: '/formation-recruter-avec-les-reseaux-sociaux-sourcing/', destination: '/formation-marketing-rh-marque-employeur/', statusCode: 301 },
  { source: '/formation-responsables-rh-en-tant-que-moteurs-de-la-communication-interne/', destination: '/formation-marketing-rh-marque-employeur/', statusCode: 301 },
  { source: '/formation-marketing-digital-acquisition-conversion-fidelisation/', destination: '/formation-marketing-digital-webmarketing-strasbourg/', statusCode: 301 },
  { source: '/formation-marketing-b2b/', destination: '/formation-marketing-digital-webmarketing-strasbourg/', statusCode: 301 },
  { source: '/formation-maitriser-les-methodes-de-marketing-btob/', destination: '/formation-marketing-digital-webmarketing-strasbourg/', statusCode: 301 },
  { source: '/formation-generer-trafic-ameliorer-roi/', destination: '/formation-marketing-digital-webmarketing-strasbourg/', statusCode: 301 },
  { source: '/formations-strasbourg/formation-marketing-direct/', destination: '/formation-marketing-digital-webmarketing-strasbourg/', statusCode: 301 },
  { source: '/formations-strasbourg/formation-strategie-video-marketing/', destination: '/formation-capcut/', statusCode: 301 },
  { source: '/community-management-important/', destination: '/community-management/', statusCode: 301 },
  // Formations sans équivalent (management, RSE, tutorat…) → hub des formations
  { source: '/formation-management-les-fondamentaux/', destination: '/formations-strasbourg/', statusCode: 301 },
  { source: '/formation-manager-une-equipe-intergenerationnelle/', destination: '/formations-strasbourg/', statusCode: 301 },
  { source: '/formation-reussir-sa-communication-rse/', destination: '/formations-strasbourg/', statusCode: 301 },
  { source: '/formation-communication-responsable/', destination: '/formations-strasbourg/', statusCode: 301 },
  { source: '/formation-marketing-et-communication-responsables/', destination: '/formations-strasbourg/', statusCode: 301 },
  { source: '/formation-tuteur-strasbourg/', destination: '/formations-strasbourg/', statusCode: 301 },
  { source: '/formation-construire-son-plan-de-communication-externe/', destination: '/formations-strasbourg/', statusCode: 301 },
  { source: '/onboarding-integration/', destination: '/formations-strasbourg/', statusCode: 301 },
]

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
      { source: '/sitemap.xml', destination: '/sitemap_index.xml', statusCode: 301 },
      ...migrationRedirects,
      ...managedRedirects(),
    ]
  },
}

export default withPayload(nextConfig)
