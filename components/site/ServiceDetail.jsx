import React from "react";
import Link from "next/link";
import { Button, Badge, SectionHeading, Card, Tag, CircleMotif, Icon } from "@/components/ds";
import { ABCM_SERVICES, SERVICE_STEPS, DEFAULT_STEPS } from "@/data/services";

export function ServiceDetail({ service }) {
  const s = service || ABCM_SERVICES[0];
  const points = SERVICE_STEPS[s.slug] || DEFAULT_STEPS;
  const related = ABCM_SERVICES.filter((x) => x.slug !== s.slug).slice(0, 4);

  return (
    <div className="svc">
      <section className="svc__hero on-dark" data-theme="dark">
        <div className="hero__motif"><CircleMotif size={220} opacity={0.8} /></div>
        <div className="container">
          <Link className="svc__back" href="/#services"><Icon name="arrow-left" size={16} /> Toutes les expertises</Link>
          <Badge variant="accent" solid>{s.title}</Badge>
          <h1 className="svc__title">{s.title}</h1>
          <p className="hero__lead">{s.desc} Une prestation pilotée par nos experts, du premier échange jusqu&apos;aux résultats.</p>
          <Button as={Link} href="/contact" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Demander un devis</Button>
        </div>
      </section>
      <section className="section">
        <div className="container svc__grid">
          <div>
            <SectionHeading eyebrow="Notre méthode" title="Comment on procède" />
            <ol className="svc__steps">
              {points.map((p, i) => (
                <li key={p}><span className="svc__num">{String(i + 1).padStart(2, "0")}</span><span>{p}</span></li>
              ))}
            </ol>
          </div>
          <Card elevated accent padding="lg" className="svc__aside">
            <h3>Pourquoi ABCM ?</h3>
            <ul className="svc__checks">
              <li><Icon name="check" size={18} /> Équipe à taille humaine</li>
              <li><Icon name="check" size={18} /> Réactivité &amp; efficacité</li>
              <li><Icon name="check" size={18} /> Approche 360°</li>
              <li><Icon name="check" size={18} /> Accompagnement depuis 2015</li>
            </ul>
            <Button as={Link} href="/contact" variant="secondary" block>Parler à un expert</Button>
            <p className="svc__related">Autres expertises&nbsp;:</p>
            <div className="svc__tags">
              {related.map((x) => (
                <Link key={x.slug} href={`/services/${x.slug}`} style={{ textDecoration: "none" }}>
                  <Tag hue={x.hue} className="abcm-tag--clickable">{x.title}</Tag>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
