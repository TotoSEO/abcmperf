import React from "react";
import Link from "next/link";
import { Button, Icon } from "@/components/ds";
import { FORMATIONS, HUB_URL } from "@/data/formations";

export function FormationsPromo() {
  return (
    <section className="section fpromo-wrap">
      <div className="container">
        <div className="fpromo on-dark" data-theme="dark">
          <div className="fpromo__text" data-reveal="left">
            <span className="eyebrow">Organisme de formation Qualiopi</span>
            <h2>ABCM Performances, votre organisme de formations professionnelles à Strasbourg</h2>
            <p>
              Nous proposons plusieurs formations, en présentiel dans nos locaux ou dans les vôtres, ou en
              visio. Boostez votre business avec nous ! Toutes nos formations peuvent être financées par votre
              OPCO, et sont certifiées Qualiopi.
            </p>
          </div>
          <div className="fpromo__card" data-reveal="right">
            <span className="fpromo__ic"><Icon name="graduation-cap" size={30} /></span>
            <p className="fpromo__card-title">{FORMATIONS.length} formations</p>
            <p className="fpromo__card-sub">IA, réseaux sociaux, marketing, web et marque employeur.</p>
            <Button as={Link} href={HUB_URL} variant="primary" block iconRight={<Icon name="arrow-right" size={18} />}>
              Consulter notre catalogue de formations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
