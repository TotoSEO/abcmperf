import { PortfolioHub } from "@/components/site/PortfolioHub";
import { getAllCases } from "@/lib/portfolio";

export const metadata = {
  title: { absolute: "Nos références et cas d'études | ABCM Performances" },
  description:
    "Découvrez les réalisations d'ABCM Performances : sites internet, stratégie digitale, marketing, formations, publicité et graphisme pour des entreprises du Grand Est.",
  alternates: { canonical: "/portfolio/" },
  openGraph: {
    type: "website",
    title: "Nos références et cas d'études | ABCM Performances",
    description: "La preuve par l'exemple : les projets clients d'ABCM Performances.",
  },
};

export default function PortfolioPage() {
  // On ne passe au composant client que les champs utiles à la grille.
  const cases = getAllCases().map((c) => ({
    slug: c.slug,
    title: c.title,
    projectType: c.projectType,
    categories: c.categories,
    cover: c.cover,
    logo: c.logo,
  }));
  return <PortfolioHub cases={cases} />;
}
