"use client";
import React from "react";
import Link from "next/link";
import { LogoMark, Icon } from "@/components/ds";

const NAV = [
  { label: "Nos services", href: "/#services" },
  { label: "Références", href: "/#references" },
  { label: "Blog", href: "/#blog" },
];

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
        <div className="site-header__left">
          <LogoMark as={Link} href="/" />
          <nav className="site-nav">
            {NAV.map((n) => (
              <Link key={n.label} href={n.href} className="site-nav__link">{n.label}</Link>
            ))}
          </nav>
        </div>
        <div className="site-header__pill">
          <Link href="/formations-strasbourg/" className="site-header__pillbtn site-header__pillbtn--ghost">Nos formations certifiées</Link>
          <Link href="/contact" className="site-header__pillbtn site-header__pillbtn--solid">Nous contacter <Icon name="arrow-right" size={15} /></Link>
        </div>
        <button className="site-header__burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? "x" : "menu"} size={24} />
        </button>
      </div>
      {open && (
        <div className="site-menu">
          {NAV.map((n) => (
            <Link key={n.label} href={n.href} onClick={() => setOpen(false)}>{n.label}</Link>
          ))}
          <Link href="/formations-strasbourg/" className="site-menu__btn site-menu__btn--ghost" onClick={() => setOpen(false)}>Nos formations certifiées</Link>
          <Link href="/contact" className="site-menu__btn site-menu__btn--solid" onClick={() => setOpen(false)}>Nous contacter</Link>
        </div>
      )}
    </header>
  );
}
