import React from "react";
import { ContactWizard } from "@/components/site/ContactWizard";

// Section contact réutilisable (accueil + page /contact) : un titre + l'assistant
// multi-étapes. titleAs = "h1" sur la page contact, "h2" en section d'accueil.
export function Contact({
  id = "contact",
  titleAs: TitleTag = "h2",
  eyebrow = "Contact",
  title = "Vous avez un projet ?",
  description = "Un renseignement ou une formation à organiser ? Répondez à quelques questions, le formulaire s'adapte et notre équipe revient vers vous très vite.",
}) {
  return (
    <section className="section fmt-wiz-section" id={id}>
      <div className="container fmt-wiz-wrap">
        <header className="fmt-head fmt-head--center fmt-wiz-intro">
          <span className="eyebrow">{eyebrow}</span>
          <TitleTag className="fmt-wiz-h1">{title}</TitleTag>
          <p className="fmt-wiz-sub">{description}</p>
        </header>
        <ContactWizard />
      </div>
    </section>
  );
}
