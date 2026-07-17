import React from "react";
import Link from "next/link";
import { Icon } from "@/components/ds";
import { ABCM_INFO } from "@/data/formations";

// Carte de localisation de l'agence (accueil + page contact).
// Fond de carte OpenStreetMap en iframe : aucune clé API, aucun cookie de suivi
// (pas de bandeau de consentement nécessaire), compatible export statique.
// Les liens « itinéraire / voir sur la carte » pointent vers Google Maps.
const ADDR = `${ABCM_INFO.street}, ${ABCM_INFO.postalCode} ${ABCM_INFO.city}`;
const LAT = 48.5808595;
const LON = 7.7475844;
const BBOX = [LON - 0.005, LAT - 0.003, LON + 0.005, LAT + 0.003].join("%2C");
const EMBED = `https://www.openstreetmap.org/export/embed.html?bbox=${BBOX}&layer=mapnik&marker=${LAT}%2C${LON}`;
const Q = encodeURIComponent(`ABCM Performances, ${ADDR}`);
const SEARCH = `https://www.google.com/maps/search/?api=1&query=${Q}`;
const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${Q}`;

export function AgencyMap({
  id = "acces",
  as: TitleTag = "h2",
  eyebrow = "Nous rendre visite",
  title = "Où nous trouver",
}) {
  return (
    <section className="section agencymap" id={id} aria-label="Localisation de l'agence">
      <div className="agencymap__deco" aria-hidden="true">
        <span className="rond rond--blue agencymap__r1" />
        <span className="rond rond--ring rond--magenta agencymap__r2" />
        <span className="rond rond--orange agencymap__r3" />
      </div>
      <div className="container">
        <div className="agencymap__card" data-reveal>
          <div className="agencymap__info">
            <span className="agencymap__eyebrow"><Icon name="map-pin" size={15} /> {eyebrow}</span>
            <TitleTag className="agencymap__title">{title}</TitleTag>
            <p className="agencymap__lead">
              Notre agence et notre organisme de formation vous accueillent en plein cœur de
              Strasbourg. Un café vous attend&nbsp;: passez nous voir ou prenez rendez-vous.
            </p>
            <ul className="agencymap__list">
              <li>
                <span className="agencymap__ic"><Icon name="map-pin" size={18} /></span>
                <span>{ABCM_INFO.street}<br />{ABCM_INFO.postalCode} {ABCM_INFO.city}</span>
              </li>
              <li>
                <span className="agencymap__ic"><Icon name="phone" size={18} /></span>
                <a href={`tel:${ABCM_INFO.phoneHref}`}>{ABCM_INFO.phone}</a>
              </li>
              <li>
                <span className="agencymap__ic"><Icon name="mail" size={18} /></span>
                <a href={`mailto:${ABCM_INFO.email}`}>{ABCM_INFO.email}</a>
              </li>
              <li>
                <span className="agencymap__ic"><Icon name="clock" size={18} /></span>
                <span>Du lundi au vendredi, 8h30 &ndash; 19h</span>
              </li>
            </ul>
            <div className="agencymap__actions">
              <a className="agencymap__btn agencymap__btn--primary" href={DIRECTIONS} target="_blank" rel="noreferrer">
                Obtenir l&apos;itinéraire <Icon name="arrow-up-right" size={16} />
              </a>
              <a className="agencymap__btn agencymap__btn--ghost" href={`tel:${ABCM_INFO.phoneHref}`}>
                <Icon name="phone" size={16} /> Appeler l&apos;agence
              </a>
            </div>
          </div>
          <div className="agencymap__map">
            {/* loading="eager" : un iframe lazy ajouté lors d'une navigation SPA
                ne se déclenche pas toujours sans scroll — la carte reste « plate »
                tant qu'on ne recharge pas. */}
            <iframe
              title="Carte de localisation d'ABCM Performances à Strasbourg"
              src={EMBED}
              loading="eager"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a className="agencymap__maplink" href={SEARCH} target="_blank" rel="noreferrer">
              Voir sur Google Maps <Icon name="arrow-up-right" size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
