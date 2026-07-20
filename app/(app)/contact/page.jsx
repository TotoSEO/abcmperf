import { Contact } from "@/components/site/Contact";
import { AgencyMap } from "@/components/site/AgencyMap";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { withPageOverride } from "@/lib/payload-pages";

// Métadonnées codées en dur, surchargées en live par la fiche Payload
// (collection « pages », chemin /contact/) si ses champs SEO sont remplis.
export async function generateMetadata() {
  return withPageOverride("/contact/", {
    title: "Contact : devis & projets de formation",
    description:
      "Contactez ABCM Performances à Strasbourg : renseignement ou projet de formation (intra/inter, présentiel ou visio). Réponse rapide, organisme Qualiopi.",
    alternates: { canonical: "/contact/" },
  });
}

export default function ContactPage() {
  return (
    <>
      {/* Sans ScrollReveal sur la page, la classe globale « reveal-on » laissée
          par une navigation SPA depuis une autre page gardait le bloc [data-reveal]
          « Où nous trouver » invisible (grand vide blanc) jusqu'au rechargement. */}
      <ScrollReveal />
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
