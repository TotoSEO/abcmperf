import React from "react";

const NAMES = ["Würth", "bioMérieux", "Caisse d'Épargne", "AFI", "CRCC", "Welch & Kessler", "Fortal", "Adis"];

export function Clients() {
  return (
    <section className="clients">
      <div className="container">
        <p className="clients__label">Ils nous font confiance</p>
        <div className="clients__row">
          {NAMES.map((n) => <span key={n} className="clients__logo">{n}</span>)}
        </div>
      </div>
    </section>
  );
}
