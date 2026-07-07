import React from "react";
import Link from "next/link";
import { Button, Icon } from "@/components/ds";
import { ABCM_INFO } from "@/data/formations";

export function Hero() {
  return (
    <section className="hero on-dark" data-theme="dark">
      <div className="hero__shapes" aria-hidden="true">
        <span className="hero__shape hero__shape--1" />
        <span className="hero__shape hero__shape--2" />
        <span className="hero__shape hero__shape--3" />
        <span className="hero__shape hero__shape--4" />
      </div>
      <div className="container hero__inner">
        <span className="hero__eyebrow" data-reveal><Icon name="map-pin" size={15} /> Agence &amp; organisme de formation à Strasbourg</span>
        <h1 className="hero__title">Agence marketing, digital et communication à <span className="hero__hl">Strasbourg</span></h1>
        <div className="hero__lead">
          <p>ABCM Performances est une agence de marketing, marketing digital et communication, ainsi qu'un organisme de formation certifié Qualiopi basé à Strasbourg.</p>
          <p>Notre expertise dans le digital et la transmission de savoir-faire, forte de plus de 10 ans de pratique auprès d'une riche variété de clients, nous permet aujourd'hui de vous accompagner avec qualité et professionnalisme.</p>
        </div>
        <div className="hero__actions">
          <Button as={Link} href="/contact" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Parler de mon projet</Button>
          <Button as={Link} href="/formations-strasbourg/" variant="outline" size="lg">Voir nos formations</Button>
        </div>
      </div>
    </section>
  );
}
