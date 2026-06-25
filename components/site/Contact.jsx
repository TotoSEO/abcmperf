"use client";
import React from "react";
import { SectionHeading, Input, Textarea, Select, Checkbox, Button, Alert, Icon } from "@/components/ds";
import { ABCM_SERVICES } from "@/data/services";

export function Contact({ id = "contact", eyebrow = "Contact", title = "Vous avez un projet ?",
  description = "Notre équipe vous répond rapidement avec une offre adaptée. Passez nous voir autour d'un café." }) {
  const [sent, setSent] = React.useState(false);

  return (
    <section className="section section--contact on-dark" data-theme="dark" id={id}>
      <div className="container contact">
        <div className="contact__info">
          <SectionHeading eyebrow={eyebrow} size="lg" title={title} description={description} />
          <ul className="contact__list">
            <li><Icon name="phone" size={18} /> <a href="tel:+33633072853">06 33 07 28 53</a></li>
            <li><Icon name="mail" size={18} /> <a href="mailto:info@abcmperformances.com">info@abcmperformances.com</a></li>
            <li><Icon name="map-pin" size={18} /> Strasbourg, France</li>
          </ul>
          <div className="contact__social">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" size={20} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={20} /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><Icon name="youtube" size={20} /></a>
          </div>
        </div>
        <div className="contact__form">
          {sent ? (
            <Alert variant="success" title="Message envoyé !">Merci, notre équipe vous recontacte sous 24h ouvrées.</Alert>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="contact__row">
                <Input id="prenom" name="prenom" label="Prénom" placeholder="Caroline" required />
                <Input id="nom" name="nom" label="Nom" placeholder="Meyer" required />
              </div>
              <Input id="email" name="email" label="Email" type="email" placeholder="vous@entreprise.fr" required />
              <Select id="besoin" name="besoin" label="Votre besoin" placeholder="Choisir un service…"
                options={ABCM_SERVICES.map((s) => s.title)} />
              <Textarea id="projet" name="projet" label="Votre projet" rows={3} placeholder="Décrivez vos besoins en quelques lignes…" />
              <Checkbox name="consent" label="J'accepte d'être recontacté au sujet de ma demande." required />
              <Button variant="primary" size="lg" block type="submit" iconRight={<Icon name="send" size={18} />}>Envoyer ma demande</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
