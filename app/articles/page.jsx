import { BlogIndex } from "@/components/site/BlogIndex";

export const metadata = {
  title: { absolute: "Blog - ABCM" },
  description:
    "Retrouvez tous nos articles de blog concernant l'actualité du Web et de la formation en matière de digital.",
  alternates: { canonical: "/articles/" },
};

export default function ArticlesPage() {
  return <BlogIndex />;
}
