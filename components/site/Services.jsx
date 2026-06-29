import React from "react";
import Link from "next/link";
import { SectionHeading, Button, Icon } from "@/components/ds";
import { ABCM_SERVICES } from "@/data/services";

export function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div data-reveal>
          <SectionHeading align="center" size="lg" eyebrow="Nos expertises"
            title="Nos services marketing &amp; communication"
            description="Nos services couvrent tous les aspects de la communication digitale. Survolez une expertise pour la découvrir." />
        </div>
        <div className="svc-bento">
          {ABCM_SERVICES.map((s) => (
            <div className="svc-cell" data-reveal="scale" key={s.slug}>
              <Link href={`/services/${s.slug}`} className="svc-tile" style={{ "--_hue": `var(--logo-${s.hue})` }}>
                <span className="svc-tile__ic"><Icon name={s.icon} size={26} /></span>
                <span className="svc-tile__go" aria-hidden="true"><Icon name="arrow-right" size={18} /></span>
                <div className="svc-tile__body">
                  <h3 className="svc-tile__title">{s.title}</h3>
                  <p className="svc-tile__desc">{s.desc}</p>
                </div>
              </Link>
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
