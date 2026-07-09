import { FormationsHub } from "@/components/site/FormationsHub";

export const metadata = {
  title: "Formations digitales & IA à Strasbourg",
  description:
    "18 formations professionnelles à Strasbourg et en visio : IA, réseaux sociaux, marketing digital, web et marque employeur. Qualiopi, financement OPCO.",
  keywords: ["formation Strasbourg", "formation marketing digital Strasbourg", "formation IA", "formation réseaux sociaux", "Qualiopi", "OPCO"],
  alternates: { canonical: "/formations-strasbourg/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ABCM Performances",
    title: "Formations à Strasbourg | ABCM Performances",
    description:
      "18 formations professionnelles à Strasbourg et en distanciel. Organisme certifié Qualiopi, financement OPCO.",
    url: "/formations-strasbourg/",
  },
};

export default function FormationsHubPage() {
  return <FormationsHub />;
}
