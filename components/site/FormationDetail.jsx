import React from "react";
import Link from "next/link";
import { Button, Badge, SectionHeading, Card, Tag, CircleMotif, Icon, Accordion } from "@/components/ds";
import {
  ABCM_INFO, HUB_URL,
  STD_MODALITES, STD_TARIFS, STD_FINANCEMENT, STD_PREREQUIS, STD_DELAI, STD_ACCESSIBILITE,
  getSilo, relatedFor,
} from "@/data/formations";

const SITE = ABCM_INFO.url;

/* "1 jour (7 h)" / "2 jours (14 h)" -> ISO 8601 "PT7H" (dernière valeur horaire trouvée). */
function workloadISO(duree) {
  const all = [...String(duree).matchAll(/(\d+)\s*h/gi)].map((m) => m[1]);
  return all.length ? `PT${all[all.length - 1]}H` : undefined;
}

function buildJsonLd(f) {
  const canonical = SITE + f.url;
  const orgId = SITE + "/#organization";
  const workload = workloadISO(f.duree);

  const course = {
    "@type": "Course",
    "@id": canonical + "#course",
    name: f.title,
    description: f.metaDescription || f.lead,
    url: canonical,
    inLanguage: "fr-FR",
    provider: { "@id": orgId },
    offers: {
      "@type": "Offer",
      category: "Inter-entreprise",
      price: "760",
      priceCurrency: "EUR",
      url: canonical,
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["Onsite", "Online"],
      ...(workload ? { courseWorkload: workload } : {}),
      location: [
        {
          "@type": "Place",
          name: "ABCM Performances — Strasbourg",
          address: {
            "@type": "PostalAddress",
            addressLocality: ABCM_INFO.city,
            postalCode: ABCM_INFO.postalCode,
            addressRegion: ABCM_INFO.region,
            addressCountry: ABCM_INFO.country,
          },
        },
        { "@type": "VirtualLocation", url: canonical },
      ],
    },
  };

  const organization = {
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
      name: "Qualiopi — Actions de formation",
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: "Formations à Strasbourg", item: SITE + HUB_URL },
      { "@type": "ListItem", position: 3, name: f.name, item: canonical },
    ],
  };

  const graph = [course, organization, breadcrumb];
  if (f.faq && f.faq.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": canonical + "#faq",
      mainEntity: f.faq.map((x) => ({
        "@type": "Question",
        name: x.q,
        acceptedAnswer: { "@type": "Answer", text: x.a },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

export function FormationDetail({ formation }) {
  const f = formation;
  const silo = getSilo(f.silo);
  const related = relatedFor(f);
  const tarifs = f.tarifs || STD_TARIFS;
  const jsonLd = buildJsonLd(f);

  const facts = [
    { icon: "clock", label: "Durée", value: f.duree },
    { icon: "users", label: "Public", value: f.public },
    { icon: "graduation-cap", label: "Prérequis", value: f.prerequis || STD_PREREQUIS },
    { icon: "map-pin", label: "Lieu & format", value: "Strasbourg / Grand Est & distanciel" },
  ];

  return (
    <article className="fmt">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---- Hero ---- */}
      <section className="svc__hero on-dark" data-theme="dark">
        <div className="hero__motif"><CircleMotif size={220} opacity={0.8} /></div>
        <div className="container">
          <nav className="fmt__crumbs" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <Link href={HUB_URL}>Formations</Link>
            <span aria-hidden="true">/</span>
            <span className="fmt__crumb-current">{f.name}</span>
          </nav>
          <Badge variant="accent" solid>{silo?.emoji} {silo?.label}</Badge>
          <h1 className="svc__title">{f.title}</h1>
          <p className="hero__lead">{f.lead}</p>
          <div className="fmt__hero-meta">
            <span><Icon name="clock" size={16} /> {f.duree}</span>
            <span><Icon name="shield-check" size={16} /> Certifié Qualiopi</span>
            <span><Icon name="map-pin" size={16} /> Présentiel &amp; visio</span>
          </div>
          <div className="fmt__hero-actions">
            <Button as={Link} href="/contact" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Demander le programme</Button>
            <Button as="a" href={`tel:${ABCM_INFO.phoneHref}`} variant="outline" size="lg" iconLeft={<Icon name="phone" size={18} />}>{ABCM_INFO.phone}</Button>
          </div>
        </div>
      </section>

      {/* ---- Corps ---- */}
      <section className="section">
        <div className="container fmt__grid">
          <div className="fmt__main">
            {/* Objectifs */}
            <SectionHeading eyebrow="Objectifs pédagogiques" title="Ce que vous saurez faire" />
            <ul className="fmt__objectives">
              {f.objectifs.map((o) => (
                <li key={o}><span className="fmt__obj-ic"><Icon name="check" size={16} /></span>{o}</li>
              ))}
            </ul>

            {/* Programme */}
            <SectionHeading eyebrow="Programme" title="Le détail de la formation" className="fmt__mt" />
            <Accordion
              allowMultiple
              defaultOpen={[0]}
              items={f.programme.map((m) => ({
                title: m.module,
                content: (
                  <ul className="fmt__module">
                    {m.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                ),
              }))}
            />

            {/* Public & prérequis */}
            <div className="fmt__pubprereq fmt__mt">
              <Card padding="lg" className="fmt__pp-card">
                <h3><Icon name="users" size={20} /> Public visé</h3>
                <p>{f.public}</p>
              </Card>
              <Card padding="lg" className="fmt__pp-card">
                <h3><Icon name="check" size={20} /> Prérequis</h3>
                <p>{f.prerequis || STD_PREREQUIS}</p>
              </Card>
            </div>

            {/* Modalités */}
            <SectionHeading eyebrow="Modalités" title="Comment se déroule la formation" className="fmt__mt" />
            <p className="lead">{f.modalites || STD_MODALITES}</p>
            <p className="fmt__delai"><Icon name="clock" size={16} /> {STD_DELAI}</p>
            <p className="fmt__delai"><Icon name="users" size={16} /> {STD_ACCESSIBILITE}</p>
          </div>

          {/* ---- Aside ---- */}
          <aside className="fmt__aside">
            <Card elevated accent padding="lg" className="fmt__aside-card">
              <h3>En bref</h3>
              <ul className="fmt__facts">
                {facts.map((ft) => (
                  <li key={ft.label}>
                    <span className="fmt__fact-ic"><Icon name={ft.icon} size={18} /></span>
                    <span><strong>{ft.label}</strong><span className="fmt__fact-val">{ft.value}</span></span>
                  </li>
                ))}
              </ul>

              <div className="fmt__finance">
                <p className="fmt__finance-title"><Icon name="shield-check" size={18} /> Financement & Qualiopi</p>
                <p>{f.financement || STD_FINANCEMENT}</p>
              </div>

              <div className="fmt__tarifs">
                <p className="fmt__tarifs-title">Tarifs (HT)</p>
                <ul>{tarifs.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>

              <Button as={Link} href="/contact" variant="primary" block iconRight={<Icon name="arrow-right" size={16} />}>Demander un devis</Button>
              <a className="fmt__mail" href={`mailto:${ABCM_INFO.email}`}><Icon name="mail" size={16} /> {ABCM_INFO.email}</a>
            </Card>
          </aside>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      {f.faq && f.faq.length > 0 && (
        <section className="section section--alt">
          <div className="container faq">
            <SectionHeading eyebrow="Questions fréquentes" title={`${f.name} — FAQ`} />
            <Accordion defaultOpen={[0]} items={f.faq.map((x) => ({ title: x.q, content: x.a }))} />
          </div>
        </section>
      )}

      {/* ---- Maillage interne ---- */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={`${silo?.emoji} ${silo?.label}`} title="Formations liées" />
          <div className="fmt__related">
            {related.map((r) => (
              <Link key={r.slug} href={r.url} className="fmt__related-card" style={{ "--_hue": `var(--logo-${r.hue})` }}>
                <span className="fmt__related-ic"><Icon name={r.icon} size={22} /></span>
                <span className="fmt__related-name">{r.name}</span>
                <span className="fmt__related-go"><Icon name="arrow-right" size={16} /></span>
              </Link>
            ))}
          </div>
          <p className="fmt__hublink">
            <Link href={HUB_URL}><Icon name="arrow-left" size={16} /> Voir toutes les formations à Strasbourg</Link>
          </p>
        </div>
      </section>
    </article>
  );
}
