import React from "react";
import Link from "next/link";
import { LogoMark, Icon } from "@/components/ds";

const COLS = [
  { h: "Expertises", links: [
    { label: "Création de site web", href: "/services/site-web" },
    { label: "Stratégie digitale", href: "/services/strategie" },
    { label: "Community Management", href: "/services/community" },
    { label: "Référencement SEO", href: "/services/seo" },
    { label: "Google Ads", href: "/services/ads" },
  ] },
  { h: "Consulting", links: [
    { label: "Personal Branding", href: "/services/branding" },
    { label: "Référencement GEO (IA)", href: "/services/geo" },
    { label: "Formations", href: "/services/formations" },
  ] },
  { h: "Agence", links: [
    { label: "Références", href: "/#references" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
    { label: "Mentions légales", href: "/contact" },
  ] },
];

export function Footer() {
  return (
    <footer className="site-footer on-dark" data-theme="dark">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <LogoMark />
          <p>Agence de communication &amp; marketing digital à Strasbourg. Depuis 2015.</p>
          <div className="contact__social">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" size={20} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={20} /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><Icon name="youtube" size={20} /></a>
          </div>
        </div>
        {COLS.map((c) => (
          <div key={c.h} className="site-footer__col">
            <h4>{c.h}</h4>
            {c.links.map((l) => <Link key={l.label} href={l.href}>{l.label}</Link>)}
          </div>
        ))}
      </div>
      <div className="container site-footer__bottom">
        <span>© 2026 ABCM Performances</span>
        <span>Strasbourg · France</span>
      </div>
    </footer>
  );
}
