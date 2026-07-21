import { ABCM_INFO, SILOS, FORMATIONS, HUB_URL, MODALITES_URL } from "@/data/formations";
import { SERVICE_GROUPS, ABCM_SERVICES } from "@/data/services";
import { PORTFOLIO_URL } from "@/data/portfolio";

// /llms.txt — fichier de synthèse à destination des IA génératives
// (spec https://llmstxt.org). Format Markdown : titre, résumé, puis sections
// de liens vers les ressources clés. Généré depuis les catalogues services /
// formations (mêmes sources que le sitemap) → toujours à jour au déploiement.
export const revalidate = 3600;

const BASE = ABCM_INFO.url;
const abs = (path) => `${BASE}${path.startsWith("/") ? "" : "/"}${path}`;

const line = (label, url, note) => `- [${label}](${abs(url)})${note ? `: ${note}` : ""}`;

function servicesSection() {
  const out = ["## Services", ""];
  for (const g of SERVICE_GROUPS) {
    const items = ABCM_SERVICES.filter((s) => s.group === g.id);
    if (!items.length) continue;
    out.push(`### ${g.label}`, `_${g.intro}_`, "");
    for (const s of items) out.push(line(s.name, `/${s.slug}/`, s.tagline));
    out.push("");
  }
  return out.join("\n");
}

function formationsSection() {
  const out = ["## Formations professionnelles (organisme certifié Qualiopi)", ""];
  for (const silo of SILOS) {
    const items = FORMATIONS.filter((f) => f.silo === silo.id);
    if (!items.length) continue;
    out.push(`### ${silo.emoji} ${silo.label}`, `_${silo.intro}_`, "");
    for (const f of items) out.push(line(f.name, f.url, f.cardDesc));
    out.push("");
  }
  return out.join("\n");
}

function build() {
  const parts = [];

  parts.push(`# ${ABCM_INFO.name}`);
  parts.push("");
  parts.push(
    "> Agence de communication & marketing digital à Strasbourg (Grand Est), " +
      "depuis 2015. Nous accompagnons TPE, PME et institutions sur la création " +
      "de site web, le référencement (SEO & GEO/IA), la publicité en ligne, les " +
      "réseaux sociaux et la stratégie digitale, et formons les équipes " +
      "(organisme certifié Qualiopi, financement OPCO possible).",
  );
  parts.push("");
  parts.push(
    `À taille humaine, ABCM Performances intervient à Strasbourg et dans le ` +
      `Grand Est en présentiel, et partout ailleurs en visio. Contact : ` +
      `${ABCM_INFO.email} · ${ABCM_INFO.phone} · ${ABCM_INFO.street}, ` +
      `${ABCM_INFO.postalCode} ${ABCM_INFO.city}.`,
  );
  parts.push("");

  parts.push("## Pages principales");
  parts.push("");
  parts.push(line("Accueil", "/", "présentation de l'agence et de ses services"));
  parts.push(line("Contact", "/contact/", "demande de renseignement ou de formation (devis)"));
  parts.push(line("Formations à Strasbourg", HUB_URL, "catalogue complet des formations"));
  parts.push(line("Modalités de formation", MODALITES_URL, "financement, accessibilité, déroulé"));
  parts.push(line("Portfolio / réalisations", PORTFOLIO_URL, "études de cas clients"));
  parts.push(line("Blog / articles", "/articles/", "conseils marketing digital, SEO, réseaux sociaux, IA"));
  parts.push(line("Mentions légales", "/mentions-legales/"));
  parts.push("");

  parts.push(servicesSection());
  parts.push(formationsSection());

  parts.push("## Ressources");
  parts.push("");
  parts.push(line("Plan du site (index)", "/sitemap_index.xml", "sitemaps segmentés : pages, services, formations, articles, portfolio"));
  parts.push("");

  return parts.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
}

export function GET() {
  return new Response(build(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
