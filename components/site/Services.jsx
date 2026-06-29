import React from "react";
import Link from "next/link";
import { SectionHeading, Button, Icon } from "@/components/ds";
import { servicesByGroup } from "@/data/services";

export function Services() {
  const groups = servicesByGroup();

  return (
    <section className="services" id="services">
      <div className="container">
        <div data-reveal>
          <SectionHeading align="center" size="lg" eyebrow="Nos expertises"
            title="Nos services marketing &amp; communication"
            description="Du site web au référencement, de la vidéo à la publicité : une agence à 360° pour piloter toute votre communication digitale." />
        </div>

        <div className="svc-groups">
          {groups.map(({ group, items }) => (
            <div className="svc-group" key={group.id} style={{ "--_hue": `var(--logo-${group.hue})` }} data-reveal>
              <div className="svc-group__head">
                <span className="svc-group__ic"><Icon name={group.icon} size={24} /></span>
                <div className="svc-group__heads">
                  <p className="svc-group__eyebrow">{group.eyebrow}</p>
                  <h3 className="svc-group__label">{group.label}</h3>
                </div>
              </div>
              <div className="svc-group__grid">
                {items.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}/`} className="svc-card" style={{ "--_hue": `var(--logo-${s.hue})` }}>
                    <span className="svc-card__ic"><Icon name={s.icon} size={24} /></span>
                    <h4 className="svc-card__title">{s.name}</h4>
                    <p className="svc-card__desc">{s.tagline}</p>
                    <span className="svc-card__go" aria-hidden="true">Découvrir <Icon name="arrow-right" size={16} /></span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="svc-banner" data-reveal>
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
