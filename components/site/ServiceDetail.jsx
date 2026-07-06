import React from "react";
import Link from "next/link";
import { Button, Icon } from "@/components/ds";
import { ABCM_SERVICES, SERVICE_GROUPS, getService } from "@/data/services";
import { serviceContent } from "@/data/serviceContent";
import { ABCM_INFO } from "@/data/formations";
import { PORTFOLIO_URL, primaryTheme, casesForService } from "@/data/portfolio";
import { getAllCases } from "@/lib/portfolio";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { Blocks, renderInline } from "@/components/site/RichContent";
import { ServiceShowcase } from "@/components/site/ServiceViz";

const SITE = ABCM_INFO.url;

function withBase(s, base) {
  return typeof s === "string" ? s.split("%ASSET%").join(base) : s;
}

// Sépare l'éventuelle section FAQ (rendue en accordéon) du reste du corps.
function parseFaq(section) {
  const out = [];
  let cur = null;
  for (const b of section.blocks || []) {
    if (b.type === "h3") {
      cur = { q: b.text, a: [] };
      out.push(cur);
    } else if (cur && b.type === "p") {
      cur.a.push({ kind: "p", text: b.text });
    } else if (cur && (b.type === "ul" || b.type === "ol")) {
      cur.a.push({ kind: "list", type: b.type, items: b.items });
    }
  }
  return out;
}

function plain(text) {
  return String(text || "").replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");
}

function buildJsonLd(s, faqs) {
  const orgId = SITE + "/#organization";
  const url = SITE + `/${s.slug}/`;
  const graph = [
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
  ];
  if (faqs && faqs.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: plain(f.q),
        acceptedAnswer: {
          "@type": "Answer",
          text: plain(f.a.map((x) => (x.kind === "p" ? x.text : x.items.join(" "))).join(" ")),
        },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

const TRUST = [
  { num: "+10", label: "ans d'expérience" },
  { num: "65+", label: "projets clients livrés" },
  { num: "24-48h", label: "délai de réponse" },
  { num: "Qualiopi", label: "organisme certifié" },
];

export function ServiceDetail({ service }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const s = service || ABCM_SERVICES[0];
  const group = SERVICE_GROUPS.find((g) => g.id === s.group);
  const siblings = (group ? group.services : [])
    .filter((slug) => slug !== s.slug)
    .map(getService)
    .filter(Boolean);
  const content = serviceContent(s.slug);
  const allSections = (content && content.sections) || [];
  const faqSection = allSections.find((sec) => /foire aux questions|questions fr[eé]quentes|faq/i.test(sec.h2 || ""));
  const bodySections = allSections.filter((sec) => sec !== faqSection);
  const faqs = faqSection ? parseFaq(faqSection) : [];

  const cases = casesForService(s, getAllCases(), group ? group.services : [], 4);
  const jsonLd = buildJsonLd(s, faqs);

  // Bande CTA insérée après la 2e section (si le contenu est assez long).
  const ctaAfter = bodySections.length >= 4 ? 1 : -1;

  return (
    <div className="svcd2" style={{ "--_hue": `var(--logo-${s.hue})` }}>
      <ScrollReveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---- Hero ---- */}
      <section className="svcd2-hero on-dark" data-theme="dark">
        <div className="svcd2-hero__deco" aria-hidden="true">
          <div className="svcd2-hero__aurora" />
          <span className="svcd2-rond svcd2-rond--a" />
          <span className="svcd2-rond svcd2-rond--b" />
          <svg className="svcd2-hero__dots" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="svcdd" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="1.4" cy="1.4" r="1.4" fill="currentColor" /></pattern></defs>
            <rect width="140" height="140" fill="url(#svcdd)" />
          </svg>
          <div className="svcd2-hero__grain" />
        </div>
        <div className="container svcd2-hero__inner">
          <nav className="svcd2-crumbs" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span className="svcd2-crumbs__current">{s.name}</span>
          </nav>
          <span className="svcd2-hero__eyebrow"><Icon name={group ? group.icon : "sparkles"} size={16} /> {group ? group.label : "Expertise"}</span>
          <h1 className="svcd2-hero__title">{s.title}</h1>
          <p className="svcd2-hero__lead">{s.tagline}</p>
          <ul className="svcd2-hero__points">
            <li><Icon name="check" size={16} /> Agence à taille humaine à Strasbourg</li>
            <li><Icon name="check" size={16} /> Accompagnement sur-mesure, sans jargon</li>
            <li><Icon name="check" size={16} /> Des résultats concrets et mesurables</li>
          </ul>
          <div className="svcd2-hero__actions">
            <Button as={Link} href="/contact" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Demander un devis gratuit</Button>
            {cases.length ? <a href="#realisations" className="svcd2-hero__ghost">Voir nos réalisations</a> : null}
          </div>
        </div>
      </section>

      {/* ---- Bande de confiance (superposée au hero) ---- */}
      <div className="svcd2-trust-wrap">
        <div className="container">
          <div className="svcd2-trust" data-reveal>
            {TRUST.map((t) => (
              <div className="svcd2-trust__item" key={t.label}>
                <span className="svcd2-trust__num">{t.num}</span>
                <span className="svcd2-trust__label">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---- Corps : sections alternées ---- */}
      <div className="svcd2-body">
        {bodySections.map((sec, i) => (
          <React.Fragment key={i}>
            <section className={"svcd2-sec" + (i % 2 === 1 ? " svcd2-sec--tint" : "")}>
              {i % 2 === 1 ? (
                <span className="svcd2-sec__deco" aria-hidden="true">
                  <span className="svcd2-rond svcd2-rond--c" />
                  <span className="svcd2-rond svcd2-rond--d" />
                </span>
              ) : null}
              <div className="container container-narrow svcd2-sec__inner" data-reveal>
                <h2 className="svcd2-sec__title">{sec.h2}</h2>
                <div className="svcd2-rich rich">
                  <Blocks blocks={sec.blocks} />
                </div>
              </div>
            </section>
            {i === 0 ? <ServiceShowcase slug={s.slug} /> : null}
            {i === ctaAfter ? (
              <section className="svcd2-cta-band">
                <div className="container">
                  <div className="svcd2-cta" data-reveal>
                    <div>
                      <h2>Un projet de {s.name.toLowerCase()}&nbsp;?</h2>
                      <p>Un premier échange gratuit pour cadrer vos besoins et vous proposer la bonne approche, sans engagement.</p>
                    </div>
                    <Button as={Link} href="/contact" variant="secondary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Discuter de mon projet</Button>
                  </div>
                </div>
              </section>
            ) : null}
          </React.Fragment>
        ))}
      </div>

      {/* ---- Cas d'étude (portfolio) ---- */}
      {cases.length ? (
        <section className="section svcd2-cases" id="realisations">
          <div className="svcd2-cases__deco" aria-hidden="true"><span className="svcd2-rond svcd2-rond--e" /><span className="svcd2-rond svcd2-rond--f" /></div>
          <div className="container">
            <header className="svcd2-cases__head" data-reveal>
              <span className="svcd2-cases__eyebrow"><Icon name="layout-grid" size={15} /> Nos réalisations</span>
              <h2 className="svcd2-cases__title">Des projets de {s.name.toLowerCase()} que nous avons réalisés</h2>
              <p className="svcd2-cases__sub">Quelques exemples concrets de missions menées pour nos clients.</p>
            </header>
            <div className="svcd2-cases__grid" data-reveal>
              {cases.map((c) => {
                const ct = primaryTheme(c.categories);
                return (
                  <Link key={c.slug} href={`${PORTFOLIO_URL}${c.slug}/`} className="svcd2-case" style={{ "--_hue": ct.hue }}>
                    <span className="svcd2-case__media">
                      {c.cover ? <img src={withBase(c.cover, base)} alt="" loading="lazy" /> : null}
                      <span className="svcd2-case__scrim" aria-hidden="true" />
                    </span>
                    <span className="svcd2-case__body">
                      <span className="svcd2-case__type">{c.projectType}</span>
                      <span className="svcd2-case__name">{c.title}</span>
                    </span>
                    <span className="svcd2-case__go" aria-hidden="true"><Icon name="arrow-up-right" size={16} /></span>
                  </Link>
                );
              })}
            </div>
            <div className="svcd2-cases__all" data-reveal>
              <Link href={PORTFOLIO_URL} className="svcd2-cases__link">Voir toutes nos références <Icon name="arrow-right" size={15} /></Link>
            </div>
          </div>
        </section>
      ) : null}

      {/* ---- FAQ (accordéon) ---- */}
      {faqs.length ? (
        <section className="section svcd2-faq svcd2-sec--tint">
          <div className="container container-narrow">
            <header className="svcd2-faq__head" data-reveal>
              <span className="svcd2-cases__eyebrow"><Icon name="sparkles" size={15} /> FAQ</span>
              <h2 className="svcd2-sec__title">{faqSection.h2}</h2>
            </header>
            <div className="svcd2-faq__list" data-reveal>
              {faqs.map((f, i) => (
                <details className="svcd2-faq__item" key={i}>
                  <summary><span>{f.q}</span><span className="svcd2-faq__chev" aria-hidden="true"><Icon name="chevron-down" size={18} /></span></summary>
                  <div className="svcd2-faq__ans rich">
                    {f.a.map((x, j) => x.kind === "p"
                      ? <p className="rich__p" key={j}>{renderInline(x.text)}</p>
                      : <Blocks key={j} blocks={[{ type: x.type, items: x.items }]} />)}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ---- Formation liée ---- */}
      {s.relatedFormation ? (
        <section className="section svcd2-formation">
          <div className="container">
            <div className="svcd2-formation__card" data-reveal>
              <span className="svcd2-formation__ic"><Icon name="graduation-cap" size={26} /></span>
              <div className="svcd2-formation__body">
                <span className="svcd2-formation__kicker">Vous préférez gagner en autonomie&nbsp;?</span>
                <h2 className="svcd2-formation__h">{s.relatedFormation.label}</h2>
                <p>Formez vos équipes en présentiel à Strasbourg ou à distance. Formation finançable par votre OPCO, organisme certifié Qualiopi.</p>
              </div>
              <Link href={s.relatedFormation.url} className="svcd2-formation__link">Voir la formation <Icon name="arrow-right" size={16} /></Link>
            </div>
          </div>
        </section>
      ) : null}

      {/* ---- Cross-sell ---- */}
      {siblings.length ? (
        <section className="section svcd2-more">
          <div className="container">
            <div data-reveal>
              <p className="svcd2-cases__eyebrow">{group.label}</p>
              <h2 className="svcd2-cases__title">À découvrir aussi</h2>
            </div>
            <div className="svcd2-more__grid" data-reveal>
              {siblings.map((x) => (
                <Link key={x.slug} href={`/${x.slug}/`} className="svcd2-more__card" style={{ "--_hue": `var(--logo-${x.hue})` }}>
                  <span className="svcd2-more__ic"><Icon name={x.icon} size={22} /></span>
                  <span className="svcd2-more__name">{x.name}</span>
                  <span className="svcd2-more__desc">{x.tagline}</span>
                  <span className="svcd2-more__go" aria-hidden="true"><Icon name="arrow-right" size={16} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ---- CTA final ---- */}
      <section className="svcd2-final on-dark" data-theme="dark">
        <div className="svcd2-final__deco" aria-hidden="true"><span className="svcd2-rond svcd2-rond--g" /><span className="svcd2-rond svcd2-rond--h" /></div>
        <div className="container svcd2-final__inner" data-reveal>
          <h2 className="svcd2-final__title">Prêt à passer à l&apos;action&nbsp;?</h2>
          <p className="svcd2-final__sub">Décrivez-nous votre projet : nous revenons vers vous rapidement avec une proposition claire et adaptée.</p>
          <div className="svcd2-final__actions">
            <Button as={Link} href="/contact" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Demander un devis gratuit</Button>
            <a className="svcd2-final__tel" href={`tel:${ABCM_INFO.phoneHref}`}><Icon name="phone" size={16} /> {ABCM_INFO.phone}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
