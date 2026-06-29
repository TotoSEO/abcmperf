"use client";
import React, { useEffect, useRef, useState } from "react";
import { assetPath } from "@/data/formations";

// Bloc « formatrice » (Audrey) : la photo arrive depuis l'hors champ au scroll.
export function TrainerBlock() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className={"trainer" + (inView ? " is-in" : "")} aria-label="La formatrice">
      <figure className="trainer__photo">
        <img
          src={assetPath("audrey-braun.png")}
          alt="Audrey Braun, formatrice experte certifiée chez ABCM Performances"
          width="800"
          height="800"
          loading="lazy"
        />
      </figure>
      <div className="trainer__text">
        <h2 className="trainer__title">Audrey – Formatrice experte certifiée</h2>
        <p>
          Audrey accompagne les marques et les entreprises depuis 2015. Toutes ses formations s'inspirent de
          l'expérience terrain et des besoins exprimés par ses clients. Le contenu proposé est le résultat d'un
          grand travail de veille et de recherche permanent. Enseignante et intervenante dans plusieurs écoles de
          commerce et marketing, elle comptabilise à ce jour de nombreuses formations et accompagnements sur le
          terrain.
        </p>
      </div>
    </section>
  );
}
