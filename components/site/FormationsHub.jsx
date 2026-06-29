import React from "react";
import Link from "next/link";
import { Button, SectionHeading, ServiceCard, CircleMotif, Icon } from "@/components/ds";
import { ABCM_INFO, HUB_URL, FORMATIONS, formationsBySilo } from "@/data/formations";

const SITE = ABCM_INFO.url;

function buildJsonLd() {
  const orgId = SITE + "/#organization";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": SITE + HUB_URL,
        name: "Formations à Strasbourg | ABCM Performances",
        description:
          "Catalogue des formations ABCM Performances à Strasbourg et en distanciel : IA, réseaux sociaux, marketing digital, web et marque employeur. Organisme certifié Qualiopi.",
        url: SITE + HUB_URL,
        isPartOf: { "@id": SITE + "/#website" },
        about: { "@id": orgId },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE + "/" },
          { "@type": "ListItem", position: 2, name: "Formations à Strasbourg", item: SITE + HUB_URL },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: FORMATIONS.map((f, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: f.name,
          url: SITE + f.url,
        })),
      },
      {
        "@type": ["Organization", "EducationalOrganization"],
        "@id": orgId,
        name: ABCM_INFO.name,
        url: SITE,
        telephone: ABCM_INFO.phoneHref,
        email: ABCM_INFO.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: ABCM_INFO.city,
          postalCode: ABCM_INFO.postalCode,
          addressRegion: ABCM_INFO.region,
          addressCountry: ABCM_INFO.country,
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Certification Qualiopi",
          name: "Qualiopi : actions de formation",
        },
      },
    ],
  };
}

export function FormationsHub() {
  const groups = formationsBySilo();
  const jsonLd = buildJsonLd();

  return (
    <div className="fmt-hub">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---- Hero ---- */}
      <section className="fmt-hero on-dark" data-theme="dark">
        <div className="fmt-hero__motif"><CircleMotif size={340} overlap={0.32} opacity={0.7} /></div>
        <div className="container fmt-hero__inner">
          <span className="fmt-hero__eyebrow"><span className="fmt-hero__dot" aria-hidden="true" />Organisme certifié Qualiopi</span>
          <h1 className="fmt-hero__title">Formations digitales, IA &amp; marketing à <span className="text-gradient-warm">Strasbourg</span></h1>
          <p className="fmt-hero__lead">
            {FORMATIONS.length} formations professionnelles pour monter en compétences sur l'IA, les réseaux sociaux,
            le marketing digital, le web et la marque employeur. En présentiel à Strasbourg et dans le Grand Est,
            ou à distance en visio. Intra et inter-entreprise, finançables via votre OPCO.
          </p>
          <div className="fmt-hero__actions">
            <Button as={Link} href="/contact" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Demander un devis</Button>
            <Button as="a" href={`tel:${ABCM_INFO.phoneHref}`} variant="outline" size="lg" iconLeft={<Icon name="phone" size={18} />}>{ABCM_INFO.phone}</Button>
          </div>
          <ul className="fmt-hero__trust">
            <li><Icon name="graduation-cap" size={16} /> {FORMATIONS.length} formations</li>
            <li><Icon name="shield-check" size={16} /> Certifié Qualiopi</li>
            <li><Icon name="map-pin" size={16} /> Strasbourg &amp; visio</li>
            <li><Icon name="check" size={16} /> Finançable OPCO</li>
          </ul>
        </div>
      </section>

      {/* ---- Nav silos ---- */}
      <nav className="fmt-hub__nav" aria-label="Catégories de formation">
        <div className="container fmt-hub__nav-inner">
          {groups.map(({ silo }) => (
            <a key={silo.id} href={`#${silo.id}`} className="fmt-hub__nav-link">
              <span aria-hidden="true">{silo.emoji}</span> {silo.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ---- Silos ---- */}
      {groups.map(({ silo, items }, i) => (
        <section key={silo.id} id={silo.id} className={"section fmt-hub__silo" + (i % 2 === 1 ? " fmt-hub__silo--alt" : "")}>
          <div className="container">
            <SectionHeading align="center" eyebrow={`${silo.emoji} ${silo.label}`} title={silo.label} description={silo.intro} />
            <div className="fmt-hub__grid">
              {items.map((f) => (
                <ServiceCard
                  key={f.slug}
                  as={Link}
                  href={f.url}
                  hue={f.hue}
                  icon={<Icon name={f.icon} size={26} />}
                  title={f.name}
                  description={f.cardDesc}
                  linkLabel="Voir la formation"
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ---- CTA ---- */}
      <section className="section">
        <div className="container">
          <div className="svc-banner">
            <div>
              <h3>Un besoin spécifique ou une formation sur-mesure&nbsp;?</h3>
              <p>Toutes nos formations s'adaptent à votre équipe, en intra comme en inter-entreprise. Parlons de votre projet.</p>
            </div>
            <Button as={Link} href="/contact" variant="secondary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Nous contacter</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
