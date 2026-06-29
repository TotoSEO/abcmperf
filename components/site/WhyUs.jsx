import React from "react";
import Link from "next/link";
import { SectionHeading, Button, Icon } from "@/components/ds";

const ADVANTAGES = [
  "Une agence strasbourgeoise spécialisée dans la stratégie de communication & marketing digital.",
  "Une équipe d'experts : nous sommes 9 collaborateurs et chacun œuvre dans son domaine d'expertise.",
  "Une capacité de réactivité qui permet de répondre rapidement à toutes les demandes.",
  "Une approche à 360° avec une agence qui peut répondre à un large panel de besoins en communication (stratégie digitale, site web, site e-commerce, référencement SEA, SEO, publicités, réseaux sociaux, formation, etc.).",
];

export function WhyUs() {
  return (
    <section className="section whyus-wrap" id="agence">
      <div className="container whyus">
        <div className="whyus__text">
          <SectionHeading eyebrow="Pourquoi nous" title="Pourquoi travailler avec nous ?" />
          <p>Notre agence de communication accompagne ses clients depuis 2015.</p>
          <p>
            <strong>Points forts : réactivité &amp; efficacité !</strong> Nous comprenons l'importance de
            répondre rapidement aux besoins de nos clients et de fournir des solutions efficaces pour atteindre
            leurs objectifs de marketing en ligne.
          </p>
          <p>
            Que ce soit pour augmenter la visibilité en ligne, générer des leads qualifiés ou améliorer la
            notoriété de votre marque, nous sommes là pour vous aider à atteindre vos objectifs de manière
            rapide et efficace.
          </p>
          <Button as={Link} href="/contact" variant="primary" iconRight={<Icon name="arrow-right" size={18} />}>Nous contacter</Button>

          <h3 className="whyus__adv-title">Nos avantages</h3>
          <ul className="whyus__list">
            {ADVANTAGES.map((a) => (
              <li key={a}><span className="whyus__check"><Icon name="check" size={16} /></span>{a}</li>
            ))}
          </ul>
        </div>
        <div className="whyus__media">
          <img
            src="https://abcmperformances.com/wp-content/uploads/2020/01/abcm-17-1-scaled-e1578326636828.jpg"
            alt="L'équipe ABCM Performances à Strasbourg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
