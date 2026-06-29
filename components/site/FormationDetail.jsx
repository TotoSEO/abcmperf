import React from "react";
import Link from "next/link";
import { Button, SectionHeading, Card, CircleMotif, Icon, Accordion } from "@/components/ds";
import {
  ABCM_INFO, HUB_URL, MODALITES_URL,
  STD_MODALITES, STD_TARIFS, STD_FINANCEMENT, STD_PREREQUIS, STD_DELAI, STD_ACCESSIBILITE,
  QUALIOPI_MENTION, QUALIOPI_CERT_FILE, assetPath,
  getSilo, relatedFor,
} from "@/data/formations";

const SITE = ABCM_INFO.url;

/* "1 jour (7 h)" / "2 jours (14 h)" -> ISO 8601 "PT7H" (dernière valeur horaire trouvée). */
function workloadISO(duree) {
  const all = [...String(duree).matchAll(/(\d+)\s*h/gi)].map((m) => m[1]);
  return all.length ? `PT${all[all.length - 1]}H` : undefined;
}

/* Met en valeur « à Strasbourg » dans le H1 avec le dégradé de marque. */
function renderTitle(title) {
  const needle = "à Strasbourg";
  const i = title.indexOf(needle);
  if (i === -1) return title;
  return (
    <>
      {title.slice(0, i)}
      <span className="text-gradient-warm">{needle}</span>
      {title.slice(i + needle.length)}
    </>
  );
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
          name: "ABCM Performances, Strasbourg",
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
      name: "Qualiopi : actions de formation",
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

  const formats = [
    { icon: "map-pin", title: "Présentiel", text: "Dans vos locaux à Strasbourg et partout dans le Grand Est." },
    { icon: "monitor", title: "Distanciel", text: "En visioconférence (Teams, Google Meet, Zoom)." },
    { icon: "users", title: "Intra & inter", text: "Sur-mesure pour votre équipe, ou en groupe inter-entreprise." },
  ];

  return (
    <article className="fmt" style={{ "--silo-hue": `var(--logo-${f.hue})` }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---- Hero ---- */}
      <section className="fmt-hero on-dark" data-theme="dark">
        <div className="fmt-hero__motif"><CircleMotif size={320} overlap={0.32} opacity={0.7} /></div>
        <div className="container fmt-hero__inner">
          <nav className="fmt__crumbs" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <Link href={HUB_URL}>Formations</Link>
            <span aria-hidden="true">/</span>
            <span className="fmt__crumb-current">{f.name}</span>
          </nav>
          <span className="fmt-hero__eyebrow"><span className="fmt-hero__dot" aria-hidden="true" />{silo?.emoji} {silo?.label}</span>
          <h1 className="fmt-hero__title">{renderTitle(f.title)}</h1>
          <p className="fmt-hero__lead">{f.lead}</p>
          <div className="fmt-hero__actions">
            <Button as={Link} href="/contact" rel="nofollow" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Je suis intéressé par cette formation</Button>
            <Button as="a" href={`tel:${ABCM_INFO.phoneHref}`} variant="outline" size="lg" iconLeft={<Icon name="phone" size={18} />}>{ABCM_INFO.phone}</Button>
          </div>
          <ul className="fmt-hero__trust">
            <li><Icon name="shield-check" size={16} /> Certifié Qualiopi</li>
            <li><Icon name="clock" size={16} /> {f.duree}</li>
            <li><Icon name="map-pin" size={16} /> Présentiel &amp; visio</li>
            <li><Icon name="check" size={16} /> Finançable OPCO</li>
          </ul>
        </div>
      </section>

      {/* ---- Corps ---- */}
      <section className="section fmt-body">
        <div className="container fmt__grid">
          <div className="fmt__main">
            {/* Objectifs */}
            <header className="fmt-head">
              <span className="eyebrow">Objectifs pédagogiques</span>
              <h2 className="fmt-head__title">Ce que vous saurez faire</h2>
            </header>
            <ul className="fmt__objectives">
              {f.objectifs.map((o) => (
                <li key={o}><span className="fmt__obj-ic"><Icon name="check" size={16} /></span>{o}</li>
              ))}
            </ul>

            {/* Programme */}
            <header className="fmt-head fmt__mt">
              <span className="eyebrow">Programme détaillé</span>
              <h2 className="fmt-head__title">Le déroulé de la formation</h2>
            </header>
            <ol className="fmt-modules">
              {f.programme.map((m, i) => (
                <li className="fmt-module" key={m.module}>
                  <div className="fmt-module__num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="fmt-module__body">
                    <h3 className="fmt-module__title">{m.module}</h3>
                    <ul className="fmt-module__points">
                      {m.points.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>

            {/* Public & prérequis */}
            <header className="fmt-head fmt__mt">
              <span className="eyebrow">Pour qui</span>
              <h2 className="fmt-head__title">Public &amp; prérequis</h2>
            </header>
            <div className="fmt__pubprereq">
              <div className="fmt-pp">
                <span className="fmt-pp__ic"><Icon name="users" size={22} /></span>
                <h3>Public visé</h3>
                <p>{f.public}</p>
              </div>
              <div className="fmt-pp">
                <span className="fmt-pp__ic"><Icon name="check" size={22} /></span>
                <h3>Prérequis</h3>
                <p>{f.prerequis || STD_PREREQUIS}</p>
              </div>
            </div>

            {/* Modalités */}
            <header className="fmt-head fmt__mt">
              <span className="eyebrow">Modalités</span>
              <h2 className="fmt-head__title">Comment se déroule la formation</h2>
            </header>
            <div className="fmt-formats">
              {formats.map((fm) => (
                <div className="fmt-format" key={fm.title}>
                  <span className="fmt-format__ic"><Icon name={fm.icon} size={22} /></span>
                  <h3 className="fmt-format__title">{fm.title}</h3>
                  <p>{fm.text}</p>
                </div>
              ))}
            </div>
            <p className="fmt-modalites">{f.modalites || STD_MODALITES}</p>
            <p className="fmt__delai"><Icon name="clock" size={16} /> {STD_DELAI}</p>
            <p className="fmt__delai"><Icon name="users" size={16} /> {STD_ACCESSIBILITE}</p>
            <p className="fmt-quali"><Icon name="shield-check" size={16} /> {QUALIOPI_MENTION}</p>
            <div className="fmt-quali-links">
              <a href={assetPath(QUALIOPI_CERT_FILE)} target="_blank" rel="noreferrer"><Icon name="shield-check" size={16} /> Voir le certificat Qualiopi</a>
              <Link href={MODALITES_URL}><Icon name="arrow-right" size={16} /> Modalités &amp; moyens pédagogiques</Link>
            </div>
          </div>

          {/* ---- Aside (buy-box) ---- */}
          <aside className="fmt__aside">
            <Card elevated padding="lg" className="fmt-box">
              <span className="fmt-box__bar" aria-hidden="true" />
              <h3 className="fmt-box__title">En bref</h3>
              <ul className="fmt__facts">
                {facts.map((ft) => (
                  <li key={ft.label}>
                    <span className="fmt__fact-ic"><Icon name={ft.icon} size={18} /></span>
                    <span><strong>{ft.label}</strong><span className="fmt__fact-val">{ft.value}</span></span>
                  </li>
                ))}
              </ul>

              <div className="fmt-box__finance">
                <span className="fmt-box__seal"><Icon name="shield-check" size={18} /> Qualiopi</span>
                <p>{f.financement || STD_FINANCEMENT}</p>
              </div>

              <div className="fmt-box__tarifs">
                <p className="fmt-box__tarifs-title">Tarifs (HT)</p>
                <ul>{tarifs.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>

              <Button as={Link} href="/contact" rel="nofollow" variant="primary" block iconRight={<Icon name="arrow-right" size={16} />}>Demander un devis</Button>
              <a className="fmt-box__mail" href={`mailto:${ABCM_INFO.email}`}><Icon name="mail" size={16} /> {ABCM_INFO.email}</a>
            </Card>
          </aside>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      {f.faq && f.faq.length > 0 && (
        <section className="section section--alt fmt-faq">
          <div className="container faq">
            <header className="fmt-head fmt-head--center">
              <span className="eyebrow">Questions fréquentes</span>
              <h2 className="fmt-head__title">On répond à vos questions</h2>
            </header>
            <Accordion defaultOpen={[0]} items={f.faq.map((x) => ({ title: x.q, content: x.a }))} />
          </div>
        </section>
      )}

      {/* ---- Maillage interne ---- */}
      <section className="section">
        <div className="container">
          <header className="fmt-head">
            <span className="eyebrow">{silo?.emoji} {silo?.label}</span>
            <h2 className="fmt-head__title">Formations liées</h2>
          </header>
          <div className="fmt__related">
            {related.map((r) => (
              <Link key={r.slug} href={r.url} className="fmt-rel" style={{ "--_hue": `var(--logo-${r.hue})` }}>
                <span className="fmt-rel__ic"><Icon name={r.icon} size={22} /></span>
                <span className="fmt-rel__name">{r.name}</span>
                <span className="fmt-rel__go"><Icon name="arrow-right" size={16} /></span>
              </Link>
            ))}
          </div>
          <p className="fmt__hublink">
            <Link href={HUB_URL}><Icon name="arrow-left" size={16} /> Voir toutes les formations à Strasbourg</Link>
          </p>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="section fmt-cta-wrap">
        <div className="container">
          <div className="fmt-cta">
            <div className="fmt-cta__motif"><CircleMotif size={200} overlap={0.32} opacity={0.6} /></div>
            <div className="fmt-cta__text">
              <h2>Prêt à monter en compétences&nbsp;?</h2>
              <p>Parlons de votre projet de formation, en intra ou en inter-entreprise. Devis sous 48&nbsp;h.</p>
            </div>
            <div className="fmt-cta__actions">
              <Button as={Link} href="/contact" rel="nofollow" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Demander un devis</Button>
              <Button as="a" href={`tel:${ABCM_INFO.phoneHref}`} variant="outline" size="lg" iconLeft={<Icon name="phone" size={18} />}>{ABCM_INFO.phone}</Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
