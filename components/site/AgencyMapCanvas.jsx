"use client";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { ABCM_INFO } from "@/data/formations";

// Carte interactive de l'agence, rendue côté client avec Leaflet + tuiles
// OpenStreetMap. Remplace l'ancien iframe openstreetmap.org/export/embed.html
// qui : (1) ne remplissait pas toujours son conteneur — Leaflet interne mesurait
// une taille erronée à l'init et restait « en petit carré » ; (2) imposait un
// bandeau d'attribution non stylable (cross-origin). Ici on maîtrise tout :
// invalidateSize() garantit le remplissage, et l'attribution est réduite au
// minimum requis par la politique d'usage des tuiles OSM.
const LAT = ABCM_INFO.latitude;
const LON = ABCM_INFO.longitude;
const LABEL = `${ABCM_INFO.name}, ${ABCM_INFO.street}, ${ABCM_INFO.postalCode} ${ABCM_INFO.city}`;

export function AgencyMapCanvas() {
  const holder = useRef(null);

  useEffect(() => {
    const el = holder.current;
    if (!el) return;
    let map;
    let ro;
    let cancelled = false;

    import("leaflet").then((mod) => {
      const L = mod.default || mod;
      // Garde-fou contre une double init (StrictMode en dev, re-montage SPA).
      if (cancelled || !el || el._leaflet_id) return;

      map = L.map(el, {
        center: [LAT, LON],
        zoom: 16,
        // Le zoom molette « piégerait » le scroll de la page : on le désactive.
        scrollWheelZoom: false,
      });
      map.attributionControl.setPrefix(false).setPosition("bottomleft");

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>',
      }).addTo(map);

      const pin = L.divIcon({
        className: "agencymap__pin",
        html: '<span class="agencymap__pin-dot"></span>',
        iconSize: [22, 22],
        iconAnchor: [11, 11],
      });
      L.marker([LAT, LON], { icon: pin, title: LABEL, keyboard: false }).addTo(map);

      // Le conteneur n'est pas toujours à sa taille finale au moment de l'init
      // (révélation au scroll, transition de navigation) : on force Leaflet à
      // re-mesurer dès qu'il change de dimensions.
      const fix = () => map && map.invalidateSize();
      requestAnimationFrame(fix);
      setTimeout(fix, 300);
      if (typeof ResizeObserver !== "undefined") {
        ro = new ResizeObserver(fix);
        ro.observe(el);
      }
    });

    return () => {
      cancelled = true;
      if (ro) ro.disconnect();
      if (map) map.remove();
    };
  }, []);

  return (
    <div
      ref={holder}
      className="agencymap__canvas"
      role="img"
      aria-label={`Carte de localisation : ${LABEL}`}
    />
  );
}
