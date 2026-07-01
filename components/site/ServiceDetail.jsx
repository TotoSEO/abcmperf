import React from "react";
import Link from "next/link";
import { Button, Icon } from "@/components/ds";
import { ABCM_SERVICES, SERVICE_GROUPS, getService } from "@/data/services";
import { serviceContent } from "@/data/serviceContent";
import { ABCM_INFO } from "@/data/formations";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { RichContent } from "@/components/site/RichContent";

const SITE = ABCM_INFO.url;

function buildJsonLd(s) {
  const orgId = SITE + "/#organization";
  const url = SITE + `/${s.slug}/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": url + "#service",
        name: s.name,
        serviceType: s.name,
        description: s.tagline,
        url,
        provider: { "@id": orgId },
        areaServed: { "@type": "City", name: "Strasbourg" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE + "/" },
          { "@type": "ListItem", position: 2, name: s.name, item: url },
        ],
      },
    ],
  };
}

export function ServiceDetail({ service }) {
  const s = service || ABCM_SERVICES[0];
  const group = SERVICE_GROUPS.find((g) => g.id === s.group);
  const siblings = (group ? group.services : [])
    .filter((slug) => slug !== s.slug)
    .map(getService)
    .filter(Boolean);
  const content = serviceContent(s.slug);
  const jsonLd = buildJsonLd(s);

  return (
    <div className="svcd" style={{ "--_hue": `var(--logo-${s.hue})` }}>
      <ScrollReveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---- Hero ---- */}
      <section className="svcd-hero on-dark" data-theme="dark">
        <div className="svcd-hero__deco" aria-hidden="true">
          <span className="svcd-hero__blob svcd-hero__blob--1" />
          <span className="svcd-hero__blob svcd-hero__blob--2" />
        </div>
        <div className="container svcd-hero__inner">
          <nav className="svcd-crumbs" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span className="svcd-crumbs__current">{s.name}</span>
          </nav>
          <span className="svcd-hero__eyebrow"><span className="svcd-hero__dot" aria-hidden="true" />{group ? group.label : "Expertise"}</span>
          <h1 className="svcd-hero__title">{s.title}</h1>
          <p className="svcd-hero__lead">{s.tagline}</p>
          <div className="svcd-hero__actions">
            <Button as={Link} href="/contact" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Demander un devis</Button>
            <Button as={Link} href="/#services" variant="outline" iconLeft={<Icon name="arrow-left" size={16} />}>Toutes les expertises</Button>
          </div>
        </div>
      </section>

      {/* ---- Corps ---- */}
      <section className="section svcd-body">
        <div className="container svcd-grid">
          <div className="svcd-main">
            <RichContent content={content} />
          </div>

          <aside className="svcd-aside">
            {s.relatedFormation ? (
              <div className="svcd-card svcd-card--formation" data-reveal="right">
                <span className="svcd-card__kicker"><Icon name="graduation-cap" size={16} /> Montez en compétences</span>
                <h3 className="svcd-card__h">{s.relatedFormation.label}</h3>
                <p className="svcd-card__txt">Vous préférez gagner en autonomie&nbsp;? Cette formation se suit en présentiel à Strasbourg ou à distance, et reste finançable par votre OPCO.</p>
                <Link href={s.relatedFormation.url} className="svcd-card__link">Voir la formation <Icon name="arrow-right" size={16} /></Link>
              </div>
            ) : null}

            <div className="svcd-card svcd-card--contact" data-reveal="right">
              <h3 className="svcd-card__h">Parlons de votre projet</h3>
              <p className="svcd-card__txt">Un premier échange gratuit pour cadrer vos besoins et vous proposer la bonne approche.</p>
              <Button as={Link} href="/contact" variant="primary" block iconRight={<Icon name="arrow-right" size={18} />}>Nous contacter</Button>
              <a className="svcd-card__tel" href={`tel:${ABCM_INFO.phoneHref}`}><Icon name="phone" size={16} /> {ABCM_INFO.phone}</a>
            </div>
          </aside>
        </div>
      </section>

      {/* ---- Cross-sell : autres services du même pôle ---- */}
      {siblings.length ? (
        <section className="section svcd-more">
          <div className="container">
            <div data-reveal>
              <p className="svcd-more__eyebrow">{group.label}</p>
              <h2 className="svcd-more__title">À découvrir aussi</h2>
            </div>
            <div className="svcd-more__grid" data-reveal>
              {siblings.map((x) => (
                <Link key={x.slug} href={`/${x.slug}/`} className="svcd-more__card" style={{ "--_hue": `var(--logo-${x.hue})` }}>
                  <span className="svcd-more__ic"><Icon name={x.icon} size={22} /></span>
                  <span className="svcd-more__name">{x.name}</span>
                  <span className="svcd-more__desc">{x.tagline}</span>
                  <span className="svcd-more__go" aria-hidden="true"><Icon name="arrow-right" size={16} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
