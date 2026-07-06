import React from "react";
import Link from "next/link";
import { SectionHeading, Button, Icon } from "@/components/ds";
import { assetPath } from "@/data/formations";

const STATS = [
  { num: "+10", label: "ans d'expérience" },
  { num: "9", label: "experts dédiés" },
  { num: "360°", label: "de compétences" },
  { num: "65+", label: "projets réalisés" },
];

const ADVANTAGES = [
  { icon: "map-pin", title: "Ancrage strasbourgeois", text: "Une agence locale spécialisée en stratégie de communication et marketing digital." },
  { icon: "users", title: "Une équipe d'experts", text: "9 collaborateurs, chacun œuvrant dans son domaine de prédilection." },
  { icon: "clock", title: "Réactivité à toute épreuve", text: "Nous répondons rapidement à l'ensemble de vos demandes." },
  { icon: "target", title: "Approche à 360°", text: "Web, e-commerce, SEO, SEA, publicités, réseaux sociaux et formation." },
];

export function WhyUs() {
  return (
    <section className="section whyus-wrap" id="agence">
      <div className="whyus__deco" aria-hidden="true">
        <span className="rond rond--ring rond--green whyus__r1" />
        <span className="rond rond--yellow whyus__r2" />
      </div>
      <div className="container whyus">
        <div className="whyus__text" data-reveal="left">
          <SectionHeading eyebrow="Pourquoi nous" title="Pourquoi travailler avec nous ?" />
          <p className="whyus__lead">
            Notre agence de communication accompagne ses clients depuis 2015. <strong>Réactivité et
            efficacité</strong> : nous répondons rapidement à vos besoins et déployons des solutions concrètes
            pour gagner en visibilité, générer des leads qualifiés et renforcer votre notoriété.
          </p>
          <div className="whyus__stats">
            {STATS.map((s) => (
              <div key={s.label} className="whyus__stat">
                <span className="whyus__stat-num">{s.num}</span>
                <span className="whyus__stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
          <Button as={Link} href="/contact" variant="primary" iconRight={<Icon name="arrow-right" size={18} />}>Nous contacter</Button>
        </div>

        <div className="whyus__media" data-reveal="right">
          <img
            src={assetPath("salle-formation-strasbourg.webp")}
            alt="La salle de formation d'ABCM Performances à Strasbourg"
            loading="lazy"
            width="1360"
            height="907"
          />
          <span className="whyus__badge"><Icon name="map-pin" size={15} /> Strasbourg &amp; Grand Est</span>
        </div>
      </div>

      <div className="container whyus__adv">
        <h3 className="whyus__adv-title" data-reveal>Nos avantages</h3>
        <div className="adv" data-reveal>
          {ADVANTAGES.map((a, i) => (
            <div key={a.title} className="adv__item">
              <span className="adv__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <span className="adv__ic"><Icon name={a.icon} size={22} /></span>
              <h4 className="adv__title">{a.title}</h4>
              <p className="adv__text">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
