"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark, Icon } from "@/components/ds";
import { servicesByGroup } from "@/data/services";
import { SILOS } from "@/data/formations";

const NAV = [
  { label: "Références", href: "/portfolio/" },
  { label: "Blog", href: "/articles/" },
];

// Petit sceau « certifié » (SVG inline, léger) accolé au lien formations.
function CertifiedBadge() {
  return (
    <svg className="cert-badge" viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" focusable="false">
      <path className="cert-badge__seal" d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82 1.89 3.2L12 21.04l3.4 1.46 1.89-3.2 3.61-.82-.34-3.69L23 12z" />
      <path className="cert-badge__check" d="M10.09 16.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z" />
    </svg>
  );
}

// Megamenu services (desktop) : 4 pôles, chacun avec ses fiches.
function ServicesMega({ groups, open }) {
  return (
    <div className={"mega" + (open ? " is-open" : "")} role="menu" aria-label="Nos services">
      <div className="mega__inner">
        <div className="mega__grid">
          {groups.map(({ group, items }) => (
            <div className="mega__col" key={group.id} style={{ "--_hue": `var(--logo-${group.hue})` }}>
              <div className="mega__chead">
                <span className="mega__cic"><Icon name={group.icon} size={18} /></span>
                <span className="mega__cheads">
                  <span className="mega__ctitle">{group.label}</span>
                </span>
              </div>
              <ul className="mega__list">
                {items.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/${s.slug}/`} className="mega__link" role="menuitem" style={{ "--_hue": `var(--logo-${s.hue})` }}>
                      <span className="mega__lic"><Icon name={s.icon} size={15} /></span>
                      <span className="mega__ltext">
                        <span className="mega__lname">{s.name}</span>
                        <span className="mega__ldesc">{s.tagline}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Megamenu formations (desktop) : 5 pôles → ancre de la section correspondante.
function FormationsMega({ open }) {
  return (
    <div className={"mega mega--formations" + (open ? " is-open" : "")} role="menu" aria-label="Formations">
      <div className="mega__inner">
        <div className="fmega__grid">
          {SILOS.map((silo) => (
            <Link key={silo.id} href={`/formations-strasbourg/#${silo.id}`} className="fmega__col" role="menuitem" style={{ "--_hue": `var(--logo-${silo.hue})` }}>
              <span className="fmega__ic"><Icon name={silo.icon} size={22} /></span>
              <span className="fmega__label">{silo.label}</span>
              <span className="fmega__intro">{silo.intro}</span>
              <span className="fmega__go" aria-hidden="true">Voir les formations <Icon name="arrow-right" size={14} /></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [mobServices, setMobServices] = React.useState(false);
  const [mobFormations, setMobFormations] = React.useState(false);
  const [mega, setMega] = React.useState(null); // "services" | "formations" | null
  const [scrolled, setScrolled] = React.useState(false);
  // Menu services : on masque les fiches marquées « hideFromNav » (pages landing
  // accessibles en direct / via campagnes, volontairement hors navigation).
  const groups = servicesByGroup().map((g) => ({
    ...g,
    items: g.items.filter((s) => !s.hideFromNav),
  }));
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tout refermer à chaque changement de page (nav SPA : le hover/focus restait figé).
  const firstRender = React.useRef(true);
  React.useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    setMega(null); setOpen(false); setMobServices(false); setMobFormations(false);
    if (typeof document !== "undefined" && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, [pathname]);

  const closeMenu = () => { setOpen(false); setMobServices(false); setMobFormations(false); };
  // Ferme le megamenu si le focus quitte complètement le pôle (clavier).
  const onItemBlur = (e) => { if (!e.currentTarget.contains(e.relatedTarget)) setMega(null); };

  return (
    <header className={"site-header" + (scrolled ? " is-stuck" : "")}>
      <div className="container site-header__inner">
        <div className="site-header__left">
          <LogoMark as={Link} href="/" />
          <nav className="site-nav">
            <div className="site-nav__item site-nav__item--mega"
              onMouseEnter={() => setMega("services")} onMouseLeave={() => setMega(null)} onBlur={onItemBlur}>
              <button type="button" className="site-nav__link site-nav__link--mega site-nav__trigger"
                aria-expanded={mega === "services"} onFocus={() => setMega("services")}>
                Nos services <Icon name="chevron-down" size={13} className={"site-nav__chev" + (mega === "services" ? " is-open" : "")} />
              </button>
              <ServicesMega groups={groups} open={mega === "services"} />
            </div>
            <div className="site-nav__item site-nav__item--mega"
              onMouseEnter={() => setMega("formations")} onMouseLeave={() => setMega(null)} onBlur={onItemBlur}>
              <button type="button" className="site-nav__link site-nav__link--mega site-nav__trigger"
                aria-expanded={mega === "formations"} onFocus={() => setMega("formations")}>
                Formations <Icon name="chevron-down" size={13} className={"site-nav__chev" + (mega === "formations" ? " is-open" : "")} />
              </button>
              <FormationsMega open={mega === "formations"} />
            </div>
            {NAV.map((n) => (
              <Link key={n.label} href={n.href} className="site-nav__link">{n.label}</Link>
            ))}
          </nav>
        </div>
        <div className="site-header__actions">
          <Link href="/formations-strasbourg/" className="site-header__formlink">Nos formations certifiées<CertifiedBadge /></Link>
          <Link href="/contact" className="site-header__pillbtn site-header__pillbtn--solid">Nous contacter <Icon name="arrow-right" size={15} /></Link>
        </div>
        <button className="site-header__burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? "x" : "menu"} size={24} />
        </button>
      </div>
      {open && (
        <div className="site-menu">
          <button className="site-menu__acc" aria-expanded={mobServices} onClick={() => setMobServices((v) => !v)}>
            Nos services <Icon name="chevron-down" size={16} className={"site-menu__accchev" + (mobServices ? " is-open" : "")} />
          </button>
          {mobServices && (
            <div className="site-menu__sub">
              {groups.map(({ group, items }) => (
                <div className="site-menu__grp" key={group.id} style={{ "--_hue": `var(--logo-${group.hue})` }}>
                  <p className="site-menu__grplabel">{group.label}</p>
                  {items.map((s) => (
                    <Link key={s.slug} href={`/${s.slug}/`} className="site-menu__sublink" onClick={closeMenu}>
                      <span className="site-menu__subdot" aria-hidden="true" />{s.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
          <button className="site-menu__acc" aria-expanded={mobFormations} onClick={() => setMobFormations((v) => !v)}>
            Formations <Icon name="chevron-down" size={16} className={"site-menu__accchev" + (mobFormations ? " is-open" : "")} />
          </button>
          {mobFormations && (
            <div className="site-menu__sub">
              {SILOS.map((silo) => (
                <Link key={silo.id} href={`/formations-strasbourg/#${silo.id}`} className="site-menu__sublink" style={{ "--_hue": `var(--logo-${silo.hue})` }} onClick={closeMenu}>
                  <span className="site-menu__subdot" aria-hidden="true" />{silo.label}
                </Link>
              ))}
            </div>
          )}
          {NAV.map((n) => (
            <Link key={n.label} href={n.href} onClick={closeMenu}>{n.label}</Link>
          ))}
          <Link href="/formations-strasbourg/" className="site-menu__btn site-menu__btn--ghost" onClick={closeMenu}>Nos formations certifiées<CertifiedBadge /></Link>
          <Link href="/contact" className="site-menu__btn site-menu__btn--solid" onClick={closeMenu}>Nous contacter</Link>
        </div>
      )}
    </header>
  );
}
