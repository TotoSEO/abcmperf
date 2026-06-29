import React from "react";
import { SectionHeading, TestimonialCard } from "@/components/ds";

const ITEMS = [
  { author: "Kevin Kanel", source: "Google · Avis vérifié", quote: "Professionnalisme & réactivité. Nous avons fait appel à ABCM pour notre site internet et nous sommes extrêmement satisfaits du résultat." },
  { author: "Yann Vignaud", source: "Google · Avis vérifié", quote: "Superbe prestation. ABCM a su m'accompagner pour la création du site web, et il y avait beaucoup à faire." },
  { author: "Hélène Voisin", source: "Google · Avis vérifié", quote: "Créativité & efficacité. Totale satisfaction pour la réalisation de notre site, de notre logo et de nos cartes de visite." },
];

export function Testimonials() {
  return (
    <section className="section section--alt" id="references">
      <div className="container">
        <div data-reveal>
          <SectionHeading align="center" eyebrow="Avis clients" title="Les avis de nos clients"
            description="Ils nous font confiance et témoignent de notre accompagnement et de la qualité de nos prestations." />
        </div>
        <div className="testi__grid" data-reveal>
          {ITEMS.map((t) => <TestimonialCard key={t.author} {...t} />)}
        </div>
      </div>
    </section>
  );
}
