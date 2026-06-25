import React from "react";
import Link from "next/link";
import { Badge, Button, StatCard, CircleMotif, Icon } from "@/components/ds";

export function Hero() {
  return (
    <section className="hero on-dark" data-theme="dark">
      <div className="hero__motif"><CircleMotif size={260} overlap={0.3} opacity={0.85} /></div>
      <div className="container hero__inner">
        <Badge variant="accent" solid dot>Agence à Strasbourg · depuis 2015</Badge>
        <h1 className="hero__title">Boostez votre <span className="hero__hl">visibilité</span> sur le web &amp; les réseaux</h1>
        <p className="hero__lead">Agence de communication &amp; marketing digital. Une équipe à taille humaine qui conçoit, déploie et pilote votre présence en ligne, du site web au référencement.</p>
        <div className="hero__actions">
          <Button as={Link} href="/contact" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Parler de mon projet</Button>
          <Button as={Link} href="/#services" variant="outline" size="lg">Voir nos expertises</Button>
        </div>
        <div className="hero__stats">
          <StatCard prefix="+" value="150" label="projets livrés" hue="yellow" />
          <StatCard value="9" label="experts dédiés" hue="magenta" />
          <StatCard value="4,9" suffix="/5" label="avis Google" hue="green" />
          <StatCard value="360°" label="accompagnement" hue="blue" />
        </div>
      </div>
    </section>
  );
}
