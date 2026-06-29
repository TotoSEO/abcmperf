import React from "react";
import Link from "next/link";
import { Button, SectionHeading, ServiceCard, Icon } from "@/components/ds";
import { ABCM_INFO, HUB_URL, FORMATIONS, formationsBySilo, assetPath } from "@/data/formations";
import { QualiopiBlock } from "@/components/site/QualiopiBlock";
import { ScrollReveal } from "@/components/site/ScrollReveal";

const SITE = ABCM_INFO.url;

const CLIENTS = [
  { slug: "biomerieux", name: "Biomérieux" },
  { slug: "caisse-epargne", name: "Caisse d'Épargne" },
  { slug: "crcc", name: "CRCC" },
  { slug: "pierre-lannier", name: "Pierre Lannier" },
  { slug: "afi-esca", name: "AFI ESCA" },
  { slug: "welch-kessler", name: "Welch Kessler & Associés" },
];

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
      <ScrollReveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---- Hero (pleine largeur) ---- */}
      <section className="fhero on-dark" data-theme="dark">
        <div className="fhero__deco" aria-hidden="true">
          <span className="fhero__shape fhero__shape--l" />
          <span className="fhero__shape fhero__shape--r" />
          <svg className="fhero__route fhero__route--l" viewBox="0 0 160 290" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M152 6 H40 a34 34 0 0 0 -34 34 V284" stroke="url(#fhrL)" strokeWidth="3" strokeDasharray="1 11" strokeLinecap="round" />
            <defs><linearGradient id="fhrL" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d6306b" /><stop offset="1" stopColor="#ee8a2c" /></linearGradient></defs>
          </svg>
          <svg className="fhero__route fhero__route--r" viewBox="0 0 160 290" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 6 H120 a34 34 0 0 1 34 34 V284" stroke="url(#fhrR)" strokeWidth="3" strokeDasharray="1 11" strokeLinecap="round" />
            <defs><linearGradient id="fhrR" x1="1" y1="0" x2="0" y2="1"><stop stopColor="#f2c811" /><stop offset="1" stopColor="#d6306b" /></linearGradient></defs>
          </svg>
        </div>

        <div className="container fhero__inner">
          <span className="fhero__rating">
            <span className="fhero__stars" aria-hidden="true">
              <Icon name="star" size={18} /><Icon name="star" size={18} /><Icon name="star" size={18} /><Icon name="star" size={18} /><Icon name="star" size={18} />
            </span>
            <span className="fhero__rating-txt">Organisme de formation certifié Qualiopi</span>
          </span>

          <h1 className="fhero__title">
            <span className="fhero__hl-pink">Formez-vous</span> au digital, à l'IA et au marketing à <span className="fhero__hl-warm">Strasbourg</span>
          </h1>

          <p className="fhero__sub">
            {FORMATIONS.length} formations professionnelles, en présentiel à Strasbourg ou à distance.
            Intra et inter-entreprise, finançables via votre OPCO.
          </p>

          <div className="fhero__cta-row">
            <span className="fhero__note fhero__note--l">
              <span>Accès immédiat<br />au catalogue</span>
              <svg className="fhero__arrow" viewBox="0 0 80 50" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10 C40 6 66 16 72 40" stroke="#f2c811" strokeWidth="2.6" strokeLinecap="round" />
                <path d="M61 35 L74 42 L66 27" stroke="#f2c811" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="fhero__cta-stack">
              <Link className="fhero__cta" href="/contact" rel="nofollow">Demander un devis</Link>
              <a className="fhero__cta2" href="#formations">Voir les formations disponibles</a>
            </span>
            <span className="fhero__note fhero__note--r">
              <span className="fhero__note-num">+10 ans</span>
              <span>d'expérience</span>
            </span>
          </div>
        </div>
      </section>

      {/* ---- Ils nous font confiance ---- */}
      <section className="fhero-logos on-dark" data-theme="dark">
        <div className="container">
          <p className="fhero-logos__title" data-reveal>Ils nous font confiance</p>
          <div className="fhero-logos__grid" data-reveal>
            {CLIENTS.map((c) => (
              <div key={c.slug} className="fhero-logos__card">
                <img src={assetPath(`clients/${c.slug}.png`)} alt={c.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Silos ---- */}
      {groups.map(({ silo, items }, i) => (
        <section key={silo.id} id={i === 0 ? "formations" : silo.id} className={"section fmt-hub__silo" + (i % 2 === 1 ? " fmt-hub__silo--alt" : "")}>
          <div className="container">
            <div data-reveal>
              <SectionHeading align="center" title={silo.label} description={silo.intro} />
            </div>
            <div className="fmt-hub__grid" data-reveal>
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

      {/* ---- Salle / locaux Strasbourg ---- */}
      <section className="section fmt-room">
        <div className="container fmt-room__inner">
          <div className="fmt-room__media" data-reveal="left">
            <img
              src={assetPath("salle-formation-strasbourg.webp")}
              alt="La salle de formation d'ABCM Performances à Strasbourg : lumineuse, avec tables de réunion et grandes fenêtres"
              loading="lazy"
              width="1360"
              height="907"
            />
          </div>
          <div className="fmt-room__text" data-reveal="right">
            <SectionHeading eyebrow="Nos locaux" title="Formez-vous en présentiel au cœur de Strasbourg" />
            <p>
              Nos formations se déroulent dans un cadre lumineux et chaleureux à Strasbourg, propice à
              l'apprentissage et aux échanges. Nous privilégions les petits groupes pour un accompagnement
              personnalisé et un maximum de pratique.
            </p>
            <ul className="fmt-room__list">
              <li><Icon name="users" size={18} /> Petits groupes : 8 personnes maximum</li>
              <li><Icon name="map-pin" size={18} /> À Strasbourg et dans tout le Grand Est</li>
              <li><Icon name="monitor" size={18} /> Aussi disponibles à distance, en visioconférence</li>
            </ul>
            <Button as={Link} href="/contact" variant="primary" rel="nofollow" iconRight={<Icon name="arrow-right" size={18} />}>Organiser une formation</Button>
          </div>
        </div>
      </section>

      {/* ---- Organisme spécialisé ---- */}
      <section className="section fmt-hub__spec">
        <div className="container container-narrow">
          <header className="fmt-head" data-reveal>
            <span className="eyebrow">Notre approche</span>
            <h2 className="fmt-head__title">Un organisme de formation spécialisé</h2>
          </header>
          <p data-reveal>
            Ce sont vos spécificités qui nous permettent de mettre en place des programmes entièrement
            sur-mesure pour vos formations intra-entreprise. Nos formations inter-entreprise permettent
            également à vos salariés de se former en-dehors de l&apos;entreprise et de rencontrer des salariés
            d&apos;autres horizons. Nous nous occupons de toute la logistique et de l&apos;organisation.
          </p>
          <p data-reveal>
            ABCM Performances vous propose donc des contenus adaptés à vos besoins précis. Loin des grands
            organismes de formation, nous nous adaptons à chaque stratégie d&apos;entreprise afin de fournir une
            réponse adaptée et réaliste. Nous partons toujours de contenus existants que nous adaptons pour vos
            objectifs et votre réalité de terrain.
          </p>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="section fmt-hub__cta">
        <div className="container">
          <div className="svc-banner" data-reveal>
            <div>
              <h3>Un besoin spécifique ou une formation sur-mesure&nbsp;?</h3>
              <p>Toutes nos formations s'adaptent à votre équipe, en intra comme en inter-entreprise. Parlons de votre projet.</p>
            </div>
            <Button as={Link} href="/contact" variant="secondary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Nous contacter</Button>
          </div>
        </div>
      </section>

      {/* ---- Qualiopi (bas de page) ---- */}
      <section className="section quali-section">
        <div className="container" data-reveal>
          <QualiopiBlock />
        </div>
      </section>
    </div>
  );
}
