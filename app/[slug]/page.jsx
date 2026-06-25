import { notFound } from "next/navigation";
import { FormationDetail } from "@/components/site/FormationDetail";
import { getFormation, rootFormationSlugs, formationMetadata } from "@/data/formations";

// Seuls les slugs de fiches connus sont rendus ; tout autre chemin -> 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return rootFormationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return formationMetadata(slug);
}

export default async function FormationPage({ params }) {
  const { slug } = await params;
  const formation = getFormation(slug);
  if (!formation) notFound();
  return <FormationDetail formation={formation} />;
}
