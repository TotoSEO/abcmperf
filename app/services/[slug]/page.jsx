import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { ABCM_SERVICES, getService, serviceMetadata } from "@/data/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return ABCM_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return serviceMetadata(slug);
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
