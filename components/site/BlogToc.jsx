"use client";
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ds";

// Sommaire sticky d'un article : liste des H2/H3, surbrillance de la section
// courante au scroll (couleur ABCM de la section). Repliable sur mobile.
export function BlogToc({ toc }) {
  const [activeId, setActiveId] = useState(toc && toc.length ? toc[0].id : null);
  const [open, setOpen] = useState(false);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!toc || toc.length < 2) return;
    const els = toc.map((t) => document.getElementById(t.id)).filter(Boolean);
    if (!els.length) return;

    const OFFSET = 104; // header (72) + marge de confort
    const update = () => {
      rafRef.current = 0;
      // Titre actif = le dernier dont le haut est passé sous le header.
      let current = els[0].id;
      for (const el of els) {
        if (el.getBoundingClientRect().top <= OFFSET) current = el.id;
        else break;
      }
      // Tout en bas de page : on force la dernière entrée.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = els[els.length - 1].id;
      }
      setActiveId((prev) => (prev === current ? prev : current));
    };
    const onScroll = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [toc]);

  if (!toc || toc.length < 2) return null;

  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    setActiveId(id);
    setOpen(false);
    const y = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav className={"blog-toc" + (open ? " is-open" : "")} aria-label="Sommaire de l'article">
      <button
        className="blog-toc__toggle"
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <Icon name="menu" size={16} /> Sommaire
        <Icon name="chevron-down" size={16} className="blog-toc__caret" />
      </button>
      <div className="blog-toc__panel">
        <p className="blog-toc__title"><Icon name="menu" size={14} /> Sommaire</p>
        <ol className="blog-toc__list">
          {toc.map((t) => (
            <li
              key={t.id}
              className={
                "blog-toc__item blog-toc__item--h" + t.level + (activeId === t.id ? " is-active" : "")
              }
              style={{ "--_hue": `var(--logo-${t.hue})` }}
            >
              <a href={`#${t.id}`} className="blog-toc__link" onClick={(e) => go(e, t.id)}>
                <span className="blog-toc__text">{t.text}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
