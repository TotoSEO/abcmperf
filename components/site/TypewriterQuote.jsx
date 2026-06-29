"use client";
import React, { useEffect, useRef, useState } from "react";

const QUOTE =
  "Gestion de vos réseaux sociaux, création de site web, gestion de votre budget Google ADS ou formation en référencement naturel, nous disposons des services qu'il faut à votre entreprise pour grandir !";

export function TypewriterQuote() {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  // Démarre l'effet machine à écrire quand la citation entre dans le viewport.
  // Respecte prefers-reduced-motion : affiche tout le texte d'un coup.
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(QUOTE.length);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started || count >= QUOTE.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), 24);
    return () => clearTimeout(t);
  }, [started, count]);

  const done = count >= QUOTE.length;

  return (
    <section className="tw-quote" aria-label="Notre promesse">
      <div className="container">
        {/* Texte complet pour les lecteurs d'écran et le SEO (toujours dans le DOM). */}
        <p className="sr-only">{QUOTE}</p>
        <blockquote ref={ref} className="tw-quote__text" aria-hidden="true">
          <span className="tw-quote__mark">&ldquo;</span>
          <span>{QUOTE.slice(0, count)}</span>
          <span className={"tw-quote__caret" + (done ? " is-done" : "")} />
        </blockquote>
        <span className={"tw-quote__cite" + (done ? " is-visible" : "")} aria-hidden="true">
          ABCM Performances
        </span>
      </div>
    </section>
  );
}
