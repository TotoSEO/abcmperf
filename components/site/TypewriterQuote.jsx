"use client";
import React, { useEffect, useRef, useState } from "react";
import { ServiceViz } from "@/components/site/ServiceViz";

const QUOTE =
  "Gestion de vos réseaux sociaux, création de site web, gestion de votre budget Google Ads ou formation en référencement naturel : nous disposons des services qu'il faut à votre entreprise pour grandir !";

const WORDS = QUOTE.split(" ");

export function TypewriterQuote() {
  const ref = useRef(null);
  const [inview, setInview] = useState(false);

  // Révèle le texte mot à mot (rapide) quand la section entre dans le viewport.
  // prefers-reduced-motion : tout est affiché d'emblée (voir CSS).
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setInview(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInview(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="tw-quote tw-quote--split" aria-label="Notre promesse">
      <div className="tw-quote__deco" aria-hidden="true">
        <span className="rond rond--orange tw-quote__r1" />
        <span className="rond rond--ring rond--magenta tw-quote__r2" />
        <span className="rond rond--blue tw-quote__r3" />
      </div>
      <div className="container tw-quote__grid">
        <div className="tw-quote__col">
          <p className="eyebrow tw-quote__eyebrow">Notre promesse</p>
          {/* Texte complet pour lecteurs d'écran et SEO. */}
          <p className="sr-only">{QUOTE}</p>
          <blockquote ref={ref} className={"tw-quote__text" + (inview ? " is-in" : "")} aria-hidden="true">
            <span className="tw-quote__mark">&ldquo;</span>
            {WORDS.map((w, i) => (
              <span key={i} className="tw-word" style={{ animationDelay: `${(i * 0.045).toFixed(3)}s` }}>
                {w}{" "}
              </span>
            ))}
          </blockquote>
          <span className={"tw-quote__cite" + (inview ? " is-visible" : "")} aria-hidden="true">
            ABCM Performances
          </span>
        </div>
        <div className="tw-quote__viz" data-reveal="right">
          <div className="sv-screen" style={{ "--_h": "var(--logo-magenta)" }}>
            <ServiceViz vizKey="logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
