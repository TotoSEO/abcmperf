/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Les fiches formation réutilisent les URLs WordPress existantes, qui se
  // terminent par "/". On rend donc le slash final canonique.
  trailingSlash: true,
};

export default nextConfig;
