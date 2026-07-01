"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@/components/ds";
import { PORTFOLIO_URL, PORTFOLIO_THEMES, primaryTheme, caseThemes } from "@/data/portfolio";

function withBase(s) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return typeof s === "string" ? s.split("%ASSET%").join(base) : s;
}

function Card({ c }) {
  const theme = primaryTheme(c.categories);
  const themes = caseThemes(c.categories);
  const cover = withBase(c.cover);
  const logo = withBase(c.logo);
  return (
    <Link href={`${PORTFOLIO_URL}${c.slug}/`} className="pf-card" style={{ "--_hue": theme.hue }}>
      <span className="pf-card__media">
        {cover ? <img src={cover} alt="" loading="lazy" /> : <span className="pf-card__ph" />}
        <span className="pf-card__scrim" aria-hidden="true" />
        <span className="pf-card__tags">
          {themes.slice(0, 2).map((t) => (
            <span key={t.id} className="pf-card__tag" style={{ "--_hue": t.hue }}>{t.short}</span>
          ))}
        </span>
        <span className="pf-card__go" aria-hidden="true"><Icon name="arrow-up-right" size={18} /></span>
      </span>
      <span className="pf-card__body">
        {logo ? (
          <span className="pf-card__logo"><img src={logo} alt={`Logo ${c.title}`} loading="lazy" /></span>
        ) : (
          <span className="pf-card__logo pf-card__logo--txt" aria-hidden="true">{c.title.slice(0, 1)}</span>
        )}
        <span className="pf-card__type"><Icon name={theme.icon} size={13} /> {c.projectType || "Cas client"}</span>
        <span className="pf-card__name">{c.title}</span>
      </span>
    </Link>
  );
}

export function PortfolioHub({ cases }) {
  const [active, setActive] = React.useState("all");

  const counts = React.useMemo(() => {
    const m = { all: cases.length };
    for (const t of PORTFOLIO_THEMES) m[t.id] = cases.filter((c) => (c.categories || []).includes(t.id)).length;
    return m;
  }, [cases]);

  const filtered = active === "all" ? cases : cases.filter((c) => (c.categories || []).includes(active));

  return (
    <div className="pf-hub">
      {/* ---- Hero ---- */}
      <section className="pf-hero on-dark" data-theme="dark">
        <div className="pf-hero__deco" aria-hidden="true">
          <span className="pf-hero__blob pf-hero__blob--1" />
          <span className="pf-hero__blob pf-hero__blob--2" />
          <span className="pf-hero__blob pf-hero__blob--3" />
          <svg className="pf-hero__grid-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs><pattern id="pfdots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" /></pattern></defs>
            <rect width="200" height="200" fill="url(#pfdots)" />
          </svg>
        </div>
        <div className="container pf-hero__inner">
          <span className="pf-hero__eyebrow"><Icon name="sparkles" size={16} /> Portfolio ABCM Performances</span>
          <h1 className="pf-hero__title">Nos références et <span className="pf-hero__hl">cas d&apos;études</span></h1>
          <p className="pf-hero__sub">
            {cases.length} projets menés pour des entreprises du Grand Est et d&apos;ailleurs : sites internet,
            stratégie digitale, marketing, formations, publicité et graphisme. La preuve par l&apos;exemple.
          </p>
          <div className="pf-hero__stats">
            <span className="pf-hero__stat"><b>{cases.length}</b> références</span>
            <span className="pf-hero__stat"><b>{PORTFOLIO_THEMES.length}</b> expertises</span>
            <span className="pf-hero__stat"><b>+10</b> ans d&apos;expérience</span>
          </div>
        </div>
      </section>

      {/* ---- Filtres + grille ---- */}
      <section className="section pf-grid-section">
        <div className="container">
          <div className="pf-filters" role="tablist" aria-label="Filtrer par thématique">
            <button
              type="button"
              className={"pf-filter" + (active === "all" ? " is-active" : "")}
              onClick={() => setActive("all")}
              aria-pressed={active === "all"}
            >
              <Icon name="layout-grid" size={15} /> Tout <span className="pf-filter__n">{counts.all}</span>
            </button>
            {PORTFOLIO_THEMES.map((t) => (
              <button
                key={t.id}
                type="button"
                className={"pf-filter" + (active === t.id ? " is-active" : "")}
                onClick={() => setActive(t.id)}
                aria-pressed={active === t.id}
                style={{ "--_hue": t.hue }}
              >
                <Icon name={t.icon} size={15} /> {t.label} <span className="pf-filter__n">{counts[t.id]}</span>
              </button>
            ))}
          </div>

          <div className="pf-grid" key={active}>
            {filtered.map((c, i) => (
              <div className="pf-grid__item" style={{ "--_i": i }} key={c.slug}>
                <Card c={c} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="section pf-hub__cta">
        <div className="container">
          <div className="svc-banner" data-reveal>
            <div>
              <h3>Votre projet mérite la même attention&nbsp;?</h3>
              <p>Racontez-nous vos objectifs : nous construisons une réponse sur-mesure, du site à la stratégie.</p>
            </div>
            <Link href="/contact" className="abcm-btn abcm-btn--secondary abcm-btn--lg">
              Nous contacter <Icon name="arrow-right" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
