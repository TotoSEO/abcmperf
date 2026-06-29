import React from "react";
import Link from "next/link";
import { Badge, Button, Icon } from "@/components/ds";

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
        <Badge variant="accent" solid dot>Agence &amp; organisme de formation Qualiopi · Strasbourg</Badge>
        <h1 className="hero__title">Agence marketing, digital et communication à <span className="hero__hl">Strasbourg</span></h1>
        <div className="hero__lead">
          <p>ABCM Performances est une agence de marketing, marketing digital et communication, ainsi qu'un organisme de formation certifié Qualiopi basé à Strasbourg.</p>
          <p>Notre expertise dans le digital et la transmission de savoir-faire, forte de plus de 10 ans de pratique auprès d'une riche variété de clients, nous permet aujourd'hui de vous accompagner avec qualité et professionnalisme.</p>
          <p>Gestion de vos réseaux sociaux, création de site web, gestion de votre budget Google ADS ou formation en référencement naturel, nous disposons des services qu'il faut à votre entreprise pour grandir !</p>
        </div>
        <div className="hero__actions">
          <Button as={Link} href="/contact" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Parler de mon projet</Button>
          <Button as={Link} href="/formations-strasbourg/" variant="outline" size="lg">Voir nos formations</Button>
        </div>
      </div>
    </section>
  );
}
