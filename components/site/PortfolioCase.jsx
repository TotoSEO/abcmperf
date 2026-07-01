import React from "react";
import Link from "next/link";
import { Button, Icon } from "@/components/ds";
import { ABCM_INFO } from "@/data/formations";
import { PORTFOLIO_URL, primaryTheme, caseThemes } from "@/data/portfolio";
import { getAllCases } from "@/lib/portfolio";
import { ScrollReveal } from "@/components/site/ScrollReveal";

const SITE = ABCM_INFO.url;

function withBase(s, base) {
  return typeof s === "string" ? s.split("%ASSET%").join(base) : s;
}
function stripTags(s) {
  return String(s || "").replace(/<[^>]+>/g, "").trim();
}

// Découpe le corps VERBATIM en sections délimitées par les <h2> (La Demande,
// Notre réponse, Le projet en quelques mots...). Le texte n'est pas modifié.
function splitSections(html) {
  const parts = String(html || "").split(/<h2>([\s\S]*?)<\/h2>/g);
  const intro = parts[0] || "";
  const sections = [];
  for (let i = 1; i < parts.length; i += 2) {
    sections.push({ title: stripTags(parts[i]), html: (parts[i + 1] || "").trim() });
  }
  return { intro: intro.trim(), sections };
}

// Renommages d'affichage demandés (le contenu stocké reste verbatim).
const TITLE_MAP = { "La Demande": "La demande du client" };

// Encart promo (service/formation lié) qui se superpose au texte.
function PromoAside({ promo }) {
  const isF = promo.kind === "Formation";
  const hue = /^(#|var\()/.test(promo.hue) ? promo.hue : `var(--logo-${promo.hue})`;
  return (
    <Link href={promo.url} className="pf-promo" style={{ "--_hue": hue }}>
      <span className="pf-promo__ic"><Icon name={promo.icon || (isF ? "graduation-cap" : "sparkles")} size={20} /></span>
      <span className="pf-promo__kicker">{isF ? "Formation liée" : "Service lié"}</span>
      <span className="pf-promo__cta">{isF ? "Se renseigner sur notre formation" : "Consulter notre service"}</span>
      <span className="pf-promo__name">{promo.name}</span>
      {promo.desc ? <span className="pf-promo__desc">{promo.desc}</span> : null}
      <span className="pf-promo__go">{isF ? "Découvrir la formation" : "Découvrir le service"} <Icon name="arrow-right" size={14} /></span>
    </Link>
  );
}

function buildJsonLd(c) {
  const url = SITE + `${PORTFOLIO_URL}${c.slug}/`;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": url + "#case",
    name: `${c.title} - ${c.projectType || "Cas client"}`,
    url,
    inLanguage: "fr-FR",
    creator: { "@id": SITE + "/#organization" },
    about: c.projectType || undefined,
  };
}

export function PortfolioCase({ item }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const c = item;
  const theme = primaryTheme(c.categories);
  const themes = caseThemes(c.categories);
  const cover = withBase(c.cover, base);
  const logo = withBase(c.logo, base);
  const body = withBase(c.body || "", base);
  const { intro, sections } = splitSections(body);
  const promo = c.promo || null;
  // L'encart promo se place dans la section "Notre réponse" (sinon la 2e).
  const promoIdx = promo
    ? (() => {
        const r = sections.findIndex((s) => /r[ée]ponse/i.test(s.title));
        return r >= 0 ? r : sections.length > 1 ? 1 : 0;
      })()
    : -1;
  const jsonLd = buildJsonLd(c);

  const related = getAllCases()
    .filter((x) => x.slug !== c.slug && (x.categories || []).includes(theme.id))
    .slice(0, 3);

  return (
    <div className="pf-case" style={{ "--_hue": theme.hue }}>
      <ScrollReveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---- Hero (2 colonnes : texte + visuel encadré) ---- */}
      <section className="pf-hero2 on-dark" data-theme="dark">
        <div className="pf-hero2__deco" aria-hidden="true">
          <span className="pf-hero2__blob" />
          <svg className="pf-hero2__dots" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="pfh2" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1.4" cy="1.4" r="1.4" fill="currentColor" /></pattern></defs>
            <rect width="120" height="120" fill="url(#pfh2)" />
          </svg>
        </div>
        <div className="container pf-hero2__inner">
          <nav className="pf-crumbs" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <Link href={PORTFOLIO_URL}>Références</Link>
            <span aria-hidden="true">/</span>
            <span className="pf-crumbs__current">{c.title}</span>
          </nav>

          <div className="pf-hero2__grid">
            <div className="pf-hero2__text">
              <span className="pf-hero2__eyebrow">
                <Icon name={theme.icon} size={16} /> {c.projectType || "Cas client"}
              </span>
              <h1 className="pf-hero2__title">{c.title}</h1>
              <div className="pf-hero2__tags">
                {themes.map((t) => (
                  <span key={t.id} className="pf-tag" style={{ "--_hue": t.hue }}>
                    <span className="pf-tag__dot" aria-hidden="true" />{t.label}
                  </span>
                ))}
              </div>
            </div>

            {cover ? (
              <div className="pf-hero2__visual">
                <span className="pf-hero2__shape" aria-hidden="true" />
                <figure className="pf-hero2__frame">
                  <img src={cover} alt={`Aperçu du projet ${c.title}`} />
                </figure>
                {logo ? (
                  <span className="pf-hero2__logo"><img src={logo} alt={`Logo ${c.title}`} /></span>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* ---- Corps (verbatim) : chaque section en 2 colonnes ---- */}
      <section className="section pf-case2-body">
        <div className="container">
          {intro ? (
            <div className="pf-intro" data-reveal dangerouslySetInnerHTML={{ __html: intro }} />
          ) : null}

          {sections.map((s, i) => (
            <div className="pf-sec" key={i} data-reveal>
              <div className="pf-sec__head">
                <span className="pf-sec__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="pf-sec__title">{TITLE_MAP[s.title] || s.title}</h2>
              </div>
              <div className="pf-sec__content">
                {i === promoIdx && promo ? <PromoAside promo={promo} /> : null}
                <div className="pf-sec__prose" dangerouslySetInnerHTML={{ __html: s.html }} />
              </div>
            </div>
          ))}

          {!sections.length ? (
            <div className="pf-sec">
              {promo ? (
                <div className="pf-sec__content">
                  <PromoAside promo={promo} />
                  <div className="pf-sec__prose">
                    <p>{c.title} nous a fait confiance{c.projectType ? ` pour ${c.projectType.toLowerCase()}` : ""}.</p>
                  </div>
                </div>
              ) : (
                <p className="pf-intro">{c.title} nous a fait confiance{c.projectType ? ` pour ${c.projectType.toLowerCase()}` : ""}.</p>
              )}
            </div>
          ) : null}

          <aside className="pf-case-cta" data-reveal>
            <div>
              <h2>Un projet similaire&nbsp;?</h2>
              <p>Parlons de vos objectifs. Notre équipe strasbourgeoise vous répond rapidement avec une approche adaptée.</p>
            </div>
            <Button as={Link} href="/contact" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>
              Démarrer un projet
            </Button>
          </aside>
        </div>
      </section>

      {/* ---- Autres références de la même thématique ---- */}
      {related.length ? (
        <section className="section pf-case-more">
          <div className="container">
            <div className="pf-case-more__head" data-reveal>
              <span className="pf-case-more__eyebrow" style={{ "--_hue": theme.hue }}>
                <Icon name={theme.icon} size={15} /> {theme.label}
              </span>
              <h2 className="pf-case-more__title">D&apos;autres références à découvrir</h2>
            </div>
            <div className="pf-case-more__grid" data-reveal>
              {related.map((x) => {
                const xt = primaryTheme(x.categories);
                return (
                  <Link key={x.slug} href={`${PORTFOLIO_URL}${x.slug}/`} className="pf-mini" style={{ "--_hue": xt.hue }}>
                    <span className="pf-mini__media">
                      {x.cover ? <img src={withBase(x.cover, base)} alt="" loading="lazy" /> : null}
                    </span>
                    <span className="pf-mini__body">
                      <span className="pf-mini__name">{x.title}</span>
                      <span className="pf-mini__type">{x.projectType}</span>
                    </span>
                    <span className="pf-mini__go" aria-hidden="true"><Icon name="arrow-up-right" size={16} /></span>
                  </Link>
                );
              })}
            </div>
            <div className="pf-case-more__all" data-reveal>
              <Link href={PORTFOLIO_URL} className="pf-case-more__link">
                <Icon name="layout-grid" size={16} /> Voir toutes les références
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
