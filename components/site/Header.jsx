"use client";
import React from "react";
import Link from "next/link";
import { LogoMark, Button, Icon } from "@/components/ds";
import { ABCM_NAV } from "@/data/services";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"site-header" + (scrolled ? " is-stuck" : "")}>
      <div className="container site-header__inner">
        <LogoMark as={Link} href="/" />
        <nav className="site-nav">
          {ABCM_NAV.map((n) => (
            <Link key={n.label} href={n.href} className="site-nav__link">{n.label}</Link>
          ))}
        </nav>
        <div className="site-header__cta">
          <Button as={Link} href="/contact" variant="primary" size="sm" iconRight={<Icon name="arrow-right" size={16} />}>Démarrer un projet</Button>
        </div>
        <button className="site-header__burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? "x" : "menu"} size={24} />
        </button>
      </div>
      {open && (
        <div className="site-menu">
          {ABCM_NAV.map((n) => (
            <Link key={n.label} href={n.href} onClick={() => setOpen(false)}>{n.label}</Link>
          ))}
          <Button as={Link} href="/contact" variant="primary" block onClick={() => setOpen(false)}>Démarrer un projet</Button>
        </div>
      )}
    </header>
  );
}
