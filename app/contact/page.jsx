import { Contact } from "@/components/site/Contact";

export const metadata = {
  title: "Contact : devis & projets de formation",
  description:
    "Contactez ABCM Performances à Strasbourg : renseignement ou projet de formation (intra/inter, présentiel Grand Est ou visio). Réponse sous 48 h. Organisme certifié Qualiopi.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <Contact
      titleAs="h1"
      eyebrow="Contact"
      title="Parlons de votre projet"
      description="Un simple renseignement ou une formation à organiser ? Répondez à quelques questions, le formulaire s'adapte et notre équipe revient vers vous très vite."
    />
  );
}
