import Link from "next/link";
import { Button, Icon } from "@/components/ds";

// Destinations stratégiques proposées depuis la 404 : les grandes portes
// d'entrée du site, pour ne jamais laisser l'internaute dans une impasse.
const DESTINATIONS = [
  {
    href: "/#services",
    icon: "monitor",
    hue: "var(--logo-blue)",
    title: "Nos expertises",
    desc: "Sites web, SEO/GEO, Google Ads, réseaux sociaux…",
  },
  {
    href: "/formations-strasbourg/",
    icon: "graduation-cap",
    hue: "var(--logo-green)",
    title: "Nos formations",
    desc: "18 formations certifiées Qualiopi, à Strasbourg & en visio.",
  },
  {
    href: "/portfolio/",
    icon: "layout-grid",
    hue: "var(--logo-magenta)",
    title: "Nos références",
    desc: "Les projets clients et cas d'études de l'agence.",
  },
  {
    href: "/articles/",
    icon: "sparkles",
    hue: "var(--logo-orange)",
    title: "Le blog",
    desc: "Conseils marketing, SEO, IA et actualités digitales.",
  },
  {
    href: "/contact",
    icon: "mail",
    hue: "var(--logo-yellow)",
    title: "Nous contacter",
    desc: "Un projet, un devis, une question ? Parlons-en.",
  },
];

export default function NotFound() {
  return (
    <div className="nf">
      {/* ---- Hero sombre ---- */}
      <section className="nf-hero on-dark" data-theme="dark">
        <div className="nf-hero__deco" aria-hidden="true">
          <span className="nf-hero__blob" />
          <svg className="nf-hero__dots" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="nf-dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1.4" cy="1.4" r="1.4" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="120" height="120" fill="url(#nf-dots)" />
          </svg>
        </div>
        <div className="container nf-hero__inner">
          <span className="nf-hero__code">404</span>
          <h1 className="nf-hero__title">Cette page a disparu&nbsp;des&nbsp;radars.</h1>
          <p className="nf-hero__lead">
            Le lien est peut-être erroné, ou la page a été déplacée. Pas d'inquiétude&nbsp;:
            voici les meilleures portes d'entrée pour retrouver votre chemin.
          </p>
          <div className="nf-hero__actions">
            <Button as={Link} href="/" variant="primary" size="lg" iconLeft={<Icon name="arrow-left" size={18} />}>
              Retour à l'accueil
            </Button>
            <Button as={Link} href="/contact" variant="outline" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      {/* ---- Pages stratégiques ---- */}
      <section className="section nf-nav">
        <div className="container">
          <h2 className="nf-nav__title">Où souhaitez-vous aller&nbsp;?</h2>
          <div className="nf-nav__grid">
            {DESTINATIONS.map((d) => (
              <Link key={d.href} href={d.href} className="nf-card" style={{ "--_hue": d.hue }}>
                <span className="nf-card__ic">
                  <Icon name={d.icon} size={24} />
                </span>
                <span className="nf-card__body">
                  <span className="nf-card__name">{d.title}</span>
                  <span className="nf-card__desc">{d.desc}</span>
                </span>
                <span className="nf-card__go" aria-hidden="true">
                  <Icon name="arrow-up-right" size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
