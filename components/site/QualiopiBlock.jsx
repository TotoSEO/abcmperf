import React from "react";
import { Icon } from "@/components/ds";
import { QUALIOPI_MENTION, QUALIOPI_CERT_FILE, assetPath } from "@/data/formations";

// Bloc Qualiopi réutilisable : logo officiel (avec bandeau République Française)
// + mention exacte + lien vers le certificat. Le logo ne doit pas être modifié.
export function QualiopiBlock({ className = "" }) {
  return (
    <div className={["quali-block", className].filter(Boolean).join(" ")}>
      <img
        className="quali-block__logo"
        src={assetPath("logo-qualiopi.png")}
        alt="Qualiopi - processus certifié - République Française"
        width="220"
        height="109"
      />
      <div className="quali-block__body">
        <p className="quali-block__mention">{QUALIOPI_MENTION}</p>
        <a className="quali-block__link" href={assetPath(QUALIOPI_CERT_FILE)} target="_blank" rel="noreferrer">
          <Icon name="shield-check" size={16} /> Voir le certificat Qualiopi
        </a>
      </div>
    </div>
  );
}
