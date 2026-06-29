import "./globals.css";
import "./ds.css";
import "./site.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const metadata = {
  metadataBase: new URL("https://abcmperformances.com"),
  title: {
    default: "ABCM Performances, agence de communication & marketing digital à Strasbourg",
    template: "%s | ABCM Performances",
  },
  description:
    "Agence de communication & marketing digital à Strasbourg depuis 2015. Création de site web, référencement SEO/GEO, Google Ads, community management et stratégie digitale.",
  keywords: ["agence communication Strasbourg", "marketing digital", "création site internet", "référencement SEO", "Google Ads", "community management"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ABCM Performances",
    title: "ABCM Performances, agence de communication & marketing digital",
    description: "Boostez votre visibilité sur le web & les réseaux. Une équipe à taille humaine à Strasbourg, depuis 2015.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Hanken+Grotesk:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
