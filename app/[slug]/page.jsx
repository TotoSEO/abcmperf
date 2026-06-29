import { notFound } from "next/navigation";
import { FormationDetail } from "@/components/site/FormationDetail";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { getFormation, rootFormationSlugs, formationMetadata } from "@/data/formations";
import { getService, serviceMetadata, ABCM_SERVICES } from "@/data/services";

// Fiches formation ET fiches service servies à la racine (slugs hérités du site
// WordPress pour conserver le jus SEO). Tout autre chemin -> 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...rootFormationSlugs().map((slug) => ({ slug })),
    ...ABCM_SERVICES.map((s) => ({ slug: s.slug })),
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (getFormation(slug)) return formationMetadata(slug);
  if (getService(slug)) return serviceMetadata(slug);
  return {};
}

export default async function RootSlugPage({ params }) {
  const { slug } = await params;
  const formation = getFormation(slug);
  if (formation) return <FormationDetail formation={formation} />;
  const service = getService(slug);
  if (service) return <ServiceDetail service={service} />;
  notFound();
}
