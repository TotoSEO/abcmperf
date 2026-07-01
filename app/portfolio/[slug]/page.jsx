import { notFound } from "next/navigation";
import { PortfolioCase } from "@/components/site/PortfolioCase";
import { getCase, portfolioSlugs } from "@/lib/portfolio";
import { PORTFOLIO_URL } from "@/data/portfolio";

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  const name = c.projectType ? `${c.title} - ${c.projectType}` : c.title;
  return {
    title: { absolute: `${name} | Référence ABCM` },
    description: `Cas client ${c.title}${c.projectType ? ` : ${c.projectType.toLowerCase()}` : ""}. Une réalisation ABCM Performances, agence à Strasbourg.`,
    // Fiches références en noindex (demande client), mais on suit les liens.
    robots: { index: false, follow: true },
    alternates: { canonical: `${PORTFOLIO_URL}${slug}/` },
  };
}

export default async function PortfolioCasePage({ params }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();
  return <PortfolioCase item={c} />;
}
