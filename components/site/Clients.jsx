import React from "react";
import { Icon } from "@/components/ds";
import { ABCM_INFO, assetPath } from "@/data/formations";

const LOGOS = [
  { slug: "biomerieux", name: "bioMérieux" },
  { slug: "afi-esca", name: "AFI ESCA" },
  { slug: "caisse-epargne", name: "Caisse d'Épargne" },
  { slug: "pierre-lannier", name: "Pierre Lannier" },
  { slug: "crcc", name: "CRCC" },
  { slug: "wera-tools", name: "Wera Tools" },
];

export function Clients() {
  return (
    <section className="clients2" aria-label="Nos clients">
      <div className="container">
        <div className="clients2__card" data-reveal>
          <div className="clients2__intro">
            <span className="clients2__stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="star" size={16} />)}
            </span>
            <span className="clients2__rtxt"><b>{ABCM_INFO.googleStars},0</b> sur {ABCM_INFO.googleReviews} avis Google</span>
            <span className="clients2__label">Ils nous font confiance</span>
          </div>
          <div className="clients2__marquee">
            {/* Logos dupliqués : la 2e série (aria-hidden) assure une boucle
                continue sans coupure. */}
            <div className="clients2__track">
              {[...LOGOS, ...LOGOS].map((c, i) => (
                <span className="clients2__logo" key={i} aria-hidden={i >= LOGOS.length ? "true" : undefined}>
                  <img src={assetPath(`clients/${c.slug}.png`)} alt={i >= LOGOS.length ? "" : c.name} loading="lazy" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
