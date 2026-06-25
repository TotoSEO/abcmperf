import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { ABCM_SERVICES, getService } from "@/data/services";

export function generateStaticParams() {
  return ABCM_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: `${s.desc} ABCM Performances, agence de communication & marketing digital à Strasbourg.`,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
