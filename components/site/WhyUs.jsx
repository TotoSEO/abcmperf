import React from "react";
import Link from "next/link";
import { SectionHeading, Button, Icon } from "@/components/ds";

const STATS = [
  { num: "+10", label: "ans d'expérience" },
  { num: "9", label: "experts dédiés" },
  { num: "360°", label: "de compétences" },
  { num: "2015", label: "à vos côtés depuis" },
];

const ADVANTAGES = [
  { icon: "map-pin", text: "Une agence strasbourgeoise spécialisée dans la stratégie de communication et le marketing digital." },
  { icon: "users", text: "Une équipe d'experts : 9 collaborateurs, chacun œuvrant dans son domaine de prédilection." },
  { icon: "clock", text: "Une réactivité à toute épreuve pour répondre rapidement à l'ensemble de vos demandes." },
  { icon: "target", text: "Une approche à 360° : site web, e-commerce, SEO, SEA, publicités, réseaux sociaux et formation." },
];

export function WhyUs() {
  return (
    <section className="section whyus-wrap" id="agence">
      <div className="container whyus">
        <div className="whyus__text">
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

        <div className="whyus__media">
          <img
            src="https://abcmperformances.com/wp-content/uploads/2020/01/abcm-17-1-scaled-e1578326636828.jpg"
            alt="Les locaux d'ABCM Performances à Strasbourg"
            loading="lazy"
          />
          <span className="whyus__badge"><Icon name="map-pin" size={15} /> Strasbourg &amp; Grand Est</span>
        </div>
      </div>

      <div className="container whyus__adv">
        <h3 className="whyus__adv-title">Nos avantages</h3>
        <div className="whyus__cards">
          {ADVANTAGES.map((a) => (
            <div key={a.text} className="whyus__card">
              <span className="whyus__card-ic"><Icon name={a.icon} size={22} /></span>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
