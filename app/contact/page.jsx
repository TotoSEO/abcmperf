import { Contact } from "@/components/site/Contact";
import { AgencyMap } from "@/components/site/AgencyMap";

export const metadata = {
  title: "Contact : devis & projets de formation",
  description:
    "Contactez ABCM Performances à Strasbourg : renseignement ou projet de formation (intra/inter, présentiel ou visio). Réponse rapide, organisme Qualiopi.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <Contact
        titleAs="h1"
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Un simple renseignement ou une formation à organiser ? Répondez à quelques questions, le formulaire s'adapte et notre équipe revient vers vous très vite."
      />
      <AgencyMap />
    </>
  );
}
