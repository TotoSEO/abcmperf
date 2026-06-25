import React from "react";
import { SectionHeading, Accordion } from "@/components/ds";

const ITEMS = [
  { title: "Combien coûte la création d'un site internet ?", content: "Chaque projet est sur-mesure. Après un échange (autour d'un café !), nous établissons un devis clair selon vos besoins, du site vitrine au e-commerce." },
  { title: "Quels sont les délais de réalisation ?", content: "Comptez en général 4 à 8 semaines entre le lancement et la mise en ligne, selon l'ampleur du projet et la réactivité des échanges." },
  { title: "Proposez-vous un suivi après la livraison ?", content: "Oui. Maintenance, mises à jour, hébergement dédié et accompagnement marketing : nous restons votre partenaire sur la durée." },
  { title: "Travaillez-vous avec des clients hors de Strasbourg ?", content: "Bien sûr. Nous sommes ancrés à Strasbourg mais accompagnons des clients partout en France, en présentiel comme à distance." },
];

export function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="container faq">
        <SectionHeading eyebrow="Questions fréquentes" title="Tout ce que vous vous demandez" />
        <Accordion defaultOpen={[0]} items={ITEMS} />
      </div>
    </section>
  );
}
