import { notFound, redirect, permanentRedirect } from "next/navigation";
import { PortfolioCase } from "@/components/site/PortfolioCase";
import { resolvePortfolioCase, getAllPortfolioSummaries, allPortfolioSlugs } from "@/lib/payload-portfolio";
import { getRedirectFor } from "@/lib/payload-posts";
import { PORTFOLIO_URL } from "@/data/portfolio";

// Fiches références servies depuis Payload (source de vérité) avec repli fidèle
// sur les fiches fichier historiques. ISR : pages statiques régénérées à la
// publication/suppression (revalidatePath dans les hooks Portfolio) ou au plus
// tard toutes les 5 min. dynamicParams autorise les nouvelles fiches créées
// dans l'admin à s'afficher sans rebuild.
export const dynamicParams = true;
export const revalidate = 300;

export async function generateStaticParams() {
  const slugs = await allPortfolioSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = await resolvePortfolioCase(slug);
  if (!c) return {};
  const name = c.projectType ? `${c.title} - ${c.projectType}` : c.title;
  return {
    title: c.seoTitle ? { absolute: c.seoTitle } : { absolute: `${name} | Référence ABCM` },
    description:
      c.metaDescription ||
      `Cas client ${c.title}${c.projectType ? ` : ${c.projectType.toLowerCase()}` : ""}. Une réalisation ABCM Performances, agence à Strasbourg.`,
    // Fiches références en noindex par défaut (politique du site) : suivies mais
    // non indexées. Une fiche Payload dont la case « noindex » a été décochée
    // (noindex === false) est explicitement indexable.
    robots: { index: c.noindex === false, follow: true },
    alternates: { canonical: `${PORTFOLIO_URL}${slug}/` },
  };
}

export default async function PortfolioCasePage({ params }) {
  const { slug } = await params;
  const c = await resolvePortfolioCase(slug);
  if (!c) {
    // Fiche inexistante/supprimée : une redirection gérée (créée dans l'admin,
    // ex. à la suppression) peut exister — on l'applique en live avant le 404.
    const red = await getRedirectFor(`${PORTFOLIO_URL}${slug}/`);
    if (red) {
      if (red.type === "302") redirect(red.to);
      permanentRedirect(red.to);
    }
    notFound();
  }
  const allCases = await getAllPortfolioSummaries();
  return <PortfolioCase item={c} allCases={allCases} />;
}
