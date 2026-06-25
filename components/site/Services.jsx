"use client";
import React from "react";
import Link from "next/link";
import { SectionHeading, ServiceCard, Tag, Button, Icon } from "@/components/ds";
import { ABCM_SERVICES } from "@/data/services";

const CATS = ["Tout", "Web", "Réseaux", "Référencement", "Conseil"];

export function Services() {
  const [active, setActive] = React.useState("Tout");
  const list = active === "Tout" ? ABCM_SERVICES : ABCM_SERVICES.filter((s) => s.cat === active);

  return (
    <section className="services" id="services">
      <div className="container">
        <SectionHeading align="center" size="lg" eyebrow="Nos expertises"
          title="Une approche 360° de votre communication"
          description="Nos services couvrent tous les aspects de la communication digitale. Choisissez votre terrain de jeu." />
        <div className="services__filters">
          {CATS.map((c) => (<Tag key={c} active={active === c} onClick={() => setActive(c)}>{c}</Tag>))}
        </div>
        <div className="services__grid">
          {list.map((s) => (
            <ServiceCard key={s.slug} as={Link} href={`/services/${s.slug}`} hue={s.hue}
              icon={<Icon name={s.icon} size={26} />} title={s.title} description={s.desc} />
          ))}
        </div>
        <div className="svc-banner">
          <div>
            <h3>Un besoin sur-mesure&nbsp;?</h3>
            <p>On construit l&apos;accompagnement qui colle à vos objectifs.</p>
          </div>
          <Button as={Link} href="/contact" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Parler à un expert</Button>
        </div>
      </div>
    </section>
  );
}
