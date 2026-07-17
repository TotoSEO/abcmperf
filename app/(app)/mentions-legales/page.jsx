import { ABCM_INFO } from "@/data/formations";
import { withPageOverride } from "@/lib/payload-pages";

export async function generateMetadata() {
  return withPageOverride("/mentions-legales/", {
    title: "Mentions légales & RGPD",
    description:
      "Mentions légales du site ABCM Performances : éditeur, propriété intellectuelle, cookies, protection des données personnelles (RGPD).",
    alternates: { canonical: "/mentions-legales/" },
  });
}

export default function MentionsLegalesPage() {
  return (
    <article className="modalites">
      <section className="fmt-hero on-dark" data-theme="dark">
        <div className="container fmt-hero__inner">
          <span className="fmt-hero__eyebrow"><span className="fmt-hero__dot" aria-hidden="true" />Informations légales</span>
          <h1 className="fmt-hero__title">Mentions légales</h1>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow prose">
          <h2>1. Présentation du site</h2>
          <p>
            Conformément aux dispositions des articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004 pour la
            Confiance dans l'économie numérique (L.C.E.N.), les informations suivantes concernent le site
            https://abcmperformances.com
          </p>
          <p>
            <strong>Éditeur et responsable de la publication :</strong><br />
            ABCM Performances, SARL au capital de 4 000 €<br />
            SIRET : 81341035400019<br />
            20 rue des Serruriers, 67000 Strasbourg<br />
            Téléphone : {ABCM_INFO.phone} · E-mail : {ABCM_INFO.email}<br />
            Site : https://abcmperformances.com
          </p>

          <h2>2. Description des services fournis</h2>
          <p>
            Le site https://abcmperformances.com a pour objet de fournir une information concernant l'ensemble des
            activités de la société. L'éditeur s'efforce de fournir des informations aussi précises que possible,
            mais ne saurait être tenu responsable des omissions, des inexactitudes et des carences dans la mise à
            jour. Toutes les informations sont données à titre indicatif, non exhaustives, et sont susceptibles
            d'évoluer.
          </p>

          <h2>3. Propriété intellectuelle et contrefaçons</h2>
          <p>
            ABCM Performances détient les droits de propriété intellectuelle sur tous les éléments accessibles sur
            le site (textes, images, graphismes, logo, icônes, sons, logiciels). Toute reproduction,
            représentation, modification, publication ou adaptation, totale ou partielle, est interdite sans
            autorisation écrite préalable adressée à {ABCM_INFO.email}. Toute exploitation non autorisée sera
            considérée comme constitutive d'une contrefaçon et poursuivie conformément aux articles L.335-2 et
            suivants du Code de la propriété intellectuelle.
          </p>

          <h2>4. Liens hypertextes et cookies</h2>
          <p>
            Le site contient des liens hypertextes vers d'autres sites, mis en place avec autorisation. ABCM
            Performances décline toute responsabilité quant au contenu de ces sites. La navigation sur le site est
            susceptible de provoquer l'installation de cookies destinés à faciliter la navigation et à mesurer la
            fréquentation (Google Analytics). Vous pouvez désactiver les cookies via les pages d'aide de votre
            navigateur (Mozilla Firefox, Google Chrome, Opera, Microsoft Edge).
          </p>

          <h2>5. Protection des données personnelles</h2>
          <p>
            Les informations recueillies via les formulaires de contact sont enregistrées afin de faciliter les
            échanges avec les prospects et clients. Aucune adresse IP n'est collectée lors de l'envoi d'un
            formulaire. Les données sont conservées pendant une durée maximale de 6 mois en cas de non-conclusion
            d'un contrat.
          </p>
          <p>
            Conformément aux articles 38 et suivants de la loi n° 78-17 du 6 janvier 1978, tout utilisateur dispose
            d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles le
            concernant. Toute demande peut être adressée par courrier écrit et signé à :
          </p>
          <p>
            ABCM Performances<br />
            1 Place Dora d'Istria, 67100 Strasbourg
          </p>
          <p>
            Aucune information personnelle n'est publiée, échangée, transférée, cédée ou vendue à des tiers sans le
            consentement de l'utilisateur.
          </p>

          <h2>6. Déclaration à la CNIL</h2>
          <p>
            Conformément à la loi n° 78-17 du 6 janvier 1978 modifiée par la loi n° 2004-801 du 6 août 2004, ce site
            a fait l'objet d'une déclaration auprès de la Commission nationale de l'informatique et des libertés
            (www.cnil.fr).
          </p>
        </div>
      </section>
    </article>
  );
}
