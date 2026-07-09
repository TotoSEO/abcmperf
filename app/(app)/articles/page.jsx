import { BlogIndex } from "@/components/site/BlogIndex";

// ISR : la liste est régénérée à la publication/suppression d'un article
// (revalidatePath('/articles/') dans les hooks Articles) ou au plus tard toutes
// les 5 min. Les nouveaux articles remontent donc sans rebuild.
export const revalidate = 300;

export const metadata = {
  title: { absolute: "Blog - ABCM" },
  description:
    "Retrouvez tous nos articles de blog concernant l'actualité du Web et de la formation en matière de digital.",
  alternates: { canonical: "/articles/" },
};

export default function ArticlesPage() {
  return <BlogIndex />;
}
