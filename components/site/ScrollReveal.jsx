"use client";
import { useEffect } from "react";

// Anime les [data-reveal] à leur entrée dans le viewport (une fois), avec un
// léger stagger entre frères. Observe aussi les [data-reveal] ajoutés après coup
// (ex : grille portfolio filtrée). Démarre les scènes animées (.sv-screen) à
// l'entrée à l'écran. Respecte prefers-reduced-motion (tout visible, figé).
export function ScrollReveal() {
  useEffect(() => {
    if (typeof window !== "undefined" && !window.location.hash) {
      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    // 1. Reveals [data-reveal].
    document.documentElement.classList.add("reveal-on");
    const io1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const parent = el.parentElement;
          const sibs = parent ? Array.from(parent.querySelectorAll(":scope > [data-reveal]")) : [el];
          const idx = Math.max(0, sibs.indexOf(el));
          el.style.transitionDelay = Math.min(idx, 6) * 70 + "ms";
          el.classList.add("is-in");
          io1.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io1.observe(el));

    // Contenus qui se re-rendent (grille portfolio filtrée…) : observer les
    // nouveaux [data-reveal] à la volée.
    const observeNew = (n) => {
      if (n.nodeType !== 1) return;
      if (n.matches && n.matches("[data-reveal]")) io1.observe(n);
      if (n.querySelectorAll) n.querySelectorAll("[data-reveal]").forEach((el) => io1.observe(el));
    };
    const mo = new MutationObserver((muts) => muts.forEach((m) => m.addedNodes.forEach(observeNew)));
    mo.observe(document.body, { childList: true, subtree: true });

    // 2. Scènes animées : jouent uniquement à l'écran (démarrage à 0), en pause
    //    sinon — pour ne pas arriver en plein milieu d'une boucle.
    const scenes = Array.from(document.querySelectorAll(".sv-screen"));
    let io2;
    if (scenes.length) {
      io2 = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.target.classList.toggle("is-inview", e.isIntersecting)),
        { threshold: 0.35 }
      );
      scenes.forEach((s) => io2.observe(s));
    }

    return () => {
      io1.disconnect();
      mo.disconnect();
      if (io2) io2.disconnect();
      // On retire « reveal-on » au démontage : sinon, après une navigation SPA
      // vers une page sans ScrollReveal, la classe restait sur <html> et gardait
      // ses [data-reveal] figés en opacity:0 (aucun observateur pour les révéler).
      document.documentElement.classList.remove("reveal-on");
    };
  }, []);

  return null;
}
