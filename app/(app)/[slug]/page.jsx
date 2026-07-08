import { notFound } from "next/navigation";
import { FormationDetail } from "@/components/site/FormationDetail";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { BlogArticle } from "@/components/site/BlogArticle";
import { getFormation, rootFormationSlugs, formationMetadata } from "@/data/formations";
import { getService, serviceMetadata, ABCM_SERVICES } from "@/data/services";
import { getPost, blogSlugs } from "@/lib/blog";
import { getPostFromPayload } from "@/lib/payload-posts";

// Fiches formation, fiches service ET articles de blog servis à la racine
// (slugs hérités du site WordPress pour conserver le jus SEO).
//
// Les articles sont rendus depuis Payload (édition en direct), avec repli sur
// les fichiers d'origine si la base est indisponible. ISR : pages statiques,
// régénérées à la publication (revalidatePath dans les hooks Articles) ou au
// plus tard toutes les 5 min. dynamicParams autorise les nouveaux articles
// créés dans l'admin à s'afficher sans rebuild.
export const dynamicParams = true;
export const revalidate = 300;

export function generateStaticParams() {
  return [
    ...rootFormationSlugs().map((slug) => ({ slug })),
    ...ABCM_SERVICES.map((s) => ({ slug: s.slug })),
    ...blogSlugs().map((slug) => ({ slug })),
  ];
}

// Récupère un article : Payload en priorité (live), repli fichier.
async function resolvePost(slug) {
  return (await getPostFromPayload(slug)) || getPost(slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (getFormation(slug)) return formationMetadata(slug);
  if (getService(slug)) return serviceMetadata(slug);
  const post = await resolvePost(slug);
  if (post) {
    return {
      title: post.seoTitle ? { absolute: post.seoTitle } : post.title,
      description: post.description || undefined,
      alternates: { canonical: `/${slug}/` },
      openGraph: {
        type: "article",
        title: post.seoTitle || post.title,
        description: post.description || undefined,
        publishedTime: post.date || undefined,
        modifiedTime: post.modified || undefined,
      },
    };
  }
  return {};
}

export default async function RootSlugPage({ params }) {
  const { slug } = await params;
  const formation = getFormation(slug);
  if (formation) return <FormationDetail formation={formation} />;
  const service = getService(slug);
  if (service) return <ServiceDetail service={service} />;
  const post = await resolvePost(slug);
  if (post) return <BlogArticle post={post} />;
  notFound();
}
