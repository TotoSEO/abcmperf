import { ContactWizard } from "@/components/site/ContactWizard";

export const metadata = {
  title: "Contact — devis & projets de formation",
  description:
    "Contactez ABCM Performances à Strasbourg : renseignement ou projet de formation (intra/inter, présentiel Grand Est ou visio). Réponse sous 48 h. Organisme certifié Qualiopi.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <section className="section fmt-wiz-section">
      <div className="container fmt-wiz-wrap">
        <header className="fmt-head fmt-head--center fmt-wiz-intro">
          <span className="eyebrow">Contact</span>
          <h1 className="fmt-wiz-h1">Parlons de votre projet</h1>
          <p className="fmt-wiz-sub">
            Un simple renseignement ou une formation à organiser&nbsp;? Répondez à quelques questions,
            le formulaire s'adapte et notre équipe revient vers vous très vite.
          </p>
        </header>
        <ContactWizard />
      </div>
    </section>
  );
}
