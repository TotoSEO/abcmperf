"use client";
import { useEffect } from "react";

// Observe tous les éléments [data-reveal] et les anime quand ils entrent dans
// le viewport (une seule fois). Stagger automatique entre frères d'un même
// parent. Respecte prefers-reduced-motion (aucune animation, tout visible).
export function ScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (reduce || !("IntersectionObserver" in window) || !els.length) return;

    document.documentElement.classList.add("reveal-on");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const parent = el.parentElement;
          const sibs = parent ? Array.from(parent.querySelectorAll(":scope > [data-reveal]")) : [el];
          const idx = Math.max(0, sibs.indexOf(el));
          el.style.transitionDelay = Math.min(idx, 6) * 70 + "ms";
          el.classList.add("is-in");
          io.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
