import { PortfolioHub } from "@/components/site/PortfolioHub";
import { getAllPortfolioSummaries } from "@/lib/payload-portfolio";
import { withPageOverride } from "@/lib/payload-pages";

// ISR : la grille se régénère quand une fiche est publiée / supprimée dans
// l'admin (revalidatePath dans les hooks Portfolio) ou au plus tard toutes les
// 5 min.
export const revalidate = 300;

export async function generateMetadata() {
  return withPageOverride("/portfolio/", {
    title: { absolute: "Nos références et cas d'études | ABCM Performances" },
    description:
      "Découvrez les réalisations d'ABCM Performances : sites internet, stratégie digitale, marketing, formations, publicité et graphisme pour des entreprises du Grand Est.",
    alternates: { canonical: "/portfolio/" },
    openGraph: {
      type: "website",
      title: "Nos références et cas d'études | ABCM Performances",
      description: "La preuve par l'exemple : les projets clients d'ABCM Performances.",
    },
  });
}

export default async function PortfolioPage() {
  // Fusion Payload (source de vérité) + fiches fichier ; on ne passe au composant
  // client que les champs utiles à la grille.
  const cases = (await getAllPortfolioSummaries()).map((c) => ({
    slug: c.slug,
    title: c.title,
    projectType: c.projectType,
    categories: c.categories,
    cover: c.cover,
    logo: c.logo,
  }));
  return <PortfolioHub cases={cases} />;
}
