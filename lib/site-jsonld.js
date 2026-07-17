import { ABCM_INFO } from "@/data/formations";
import { SERVICE_GROUPS } from "@/data/services";

// Données structurées SEO local du site (accueil). Centralise l'entité
// « organisation » (ProfessionalService / LocalBusiness) réutilisée par @id
// dans les autres pages (fiches formation notamment).

const SITE = ABCM_INFO.url; // https://abcmperformances.com
export const ORG_ID = SITE + "/#organization";
const WEBSITE_ID = SITE + "/#website";

// Coordonnées de l'agence (identiques à AgencyMap).
const GEO = { latitude: 48.5808595, longitude: 7.7475844 };

const SAMEAS = [
  "https://www.instagram.com/abcm_performances/",
  "https://x.com/abcmperf",
  "https://www.linkedin.com/company/abcm-performances/",
];

const LOGO = SITE + "/logo-abcm-circles.png";

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: ABCM_INFO.street,
  addressLocality: ABCM_INFO.city,
  postalCode: ABCM_INFO.postalCode,
  addressRegion: ABCM_INFO.region,
  addressCountry: ABCM_INFO.country,
};

// Entité principale : agence de communication & organisme de formation à
// Strasbourg. Multi-type pour couvrir à la fois le local business (pack local
// Google) et l'organisme de formation.
export function organizationNode() {
  return {
    "@type": ["ProfessionalService", "EducationalOrganization"],
    "@id": ORG_ID,
    name: ABCM_INFO.name,
    alternateName: "ABCM",
    url: SITE + "/",
    logo: { "@type": "ImageObject", url: LOGO },
    image: LOGO,
    description:
      "Agence de communication & marketing digital à Strasbourg depuis 2015 : création de site web, SEO/GEO, Google Ads, réseaux sociaux, stratégie digitale et formations professionnelles certifiées Qualiopi.",
    telephone: ABCM_INFO.phoneHref,
    email: ABCM_INFO.email,
    foundingDate: "2015",
    priceRange: "€€",
    currenciesAccepted: "EUR",
    address: postalAddress,
    geo: { "@type": "GeoCoordinates", ...GEO },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${ABCM_INFO.name}, ${ABCM_INFO.street}, ${ABCM_INFO.postalCode} ${ABCM_INFO.city}`,
    )}`,
    areaServed: [
      { "@type": "City", name: "Strasbourg" },
      { "@type": "AdministrativeArea", name: "Grand Est" },
      { "@type": "Country", name: "France" },
    ],
    knowsAbout: [
      "Marketing digital",
      "Référencement naturel (SEO)",
      "Référencement génératif (GEO / IA)",
      "Publicité en ligne (Google Ads)",
      "Création de site internet",
      "E-commerce",
      "Réseaux sociaux & community management",
      "Intelligence artificielle générative",
      "Formation professionnelle",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(ABCM_INFO.googleStars),
      reviewCount: String(ABCM_INFO.googleReviews),
      bestRating: "5",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Certification Qualiopi",
      name: "Qualiopi : actions de formation",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services & formations ABCM Performances",
      itemListElement: SERVICE_GROUPS.map((g) => ({
        "@type": "OfferCatalog",
        name: g.label,
        description: g.intro,
      })),
    },
    sameAs: SAMEAS,
  };
}

// Le site lui-même, rattaché à l'éditeur (organisation).
function webSiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE + "/",
    name: ABCM_INFO.name,
    inLanguage: "fr-FR",
    publisher: { "@id": ORG_ID },
  };
}

// Graphe JSON-LD complet à injecter sur la page d'accueil.
export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), webSiteNode()],
  };
}
