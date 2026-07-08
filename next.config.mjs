import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */

// Hébergement : Vercel (application complète Next + Payload).
// Le site public ET le back-office (/admin) sont servis depuis Vercel ;
// il ne reste qu'à brancher le nom de domaine (dernière étape).
const nextConfig = {
  reactStrictMode: true,
  // Les URLs héritées de WordPress finissent par « / » — conservé pour le SEO.
  trailingSlash: true,
  async redirects() {
    return [
      // Point d'entrée du back-office : /admin-login → connexion Payload.
      { source: '/admin-login', destination: '/admin/login', permanent: false },
    ]
  },
}

export default withPayload(nextConfig)
