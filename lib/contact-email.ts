// ─────────────────────────────────────────────────────────────────────────
//  Construction des e-mails envoyés à ABCM lorsqu'un formulaire de contact
//  est soumis. Deux types de demandes : « renseignement » et « formation ».
//  IMPORTANT : toutes les saisies utilisateur sont échappées (anti-injection
//  HTML) avant d'être insérées dans le corps du message.
// ─────────────────────────────────────────────────────────────────────────

export type ContactPayload = {
  motif: "renseignement" | "formation";
  prenom: string;
  nom: string;
  entreprise?: string;
  email: string;
  telephone?: string;
  // Renseignement
  message?: string;
  // Formation
  formations?: string[];
  modalite?: string;
  format?: string;
  participants?: string;
  periode?: string;
  precisions?: string;
};

/** Échappe les caractères HTML sensibles d'une chaîne utilisateur. */
function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const MODALITE_LABELS: Record<string, string> = {
  presentiel: "Sur site (présentiel)",
  distanciel: "À distance (visio)",
  indifferent: "Peu importe",
};

const FORMAT_LABELS: Record<string, string> = {
  intra: "Intra — équipe du client",
  inter: "Inter / individuel",
};

const BRAND = "#e2001a"; // rouge ABCM
const INK = "#1a1a1a";
const MUTED = "#6b7280";
const LINE = "#e5e7eb";
const BG = "#f4f4f5";

/** Une ligne « Libellé : valeur » du tableau récapitulatif. */
function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:10px 16px;border-bottom:1px solid ${LINE};color:${MUTED};font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.03em;white-space:nowrap;vertical-align:top;">${esc(label)}</td>
      <td style="padding:10px 16px;border-bottom:1px solid ${LINE};color:${INK};font-size:15px;vertical-align:top;">${value}</td>
    </tr>`;
}

/** Bloc « coordonnées » commun aux deux types de demandes (valeurs déjà échappées). */
function contactRows(p: ContactPayload): string {
  const fullName = `${esc(p.prenom)} ${esc(p.nom)}`.trim();
  const mailLink = `<a href="mailto:${esc(p.email)}" style="color:${BRAND};text-decoration:none;">${esc(p.email)}</a>`;
  const telLink = p.telephone
    ? `<a href="tel:${esc(p.telephone)}" style="color:${BRAND};text-decoration:none;">${esc(p.telephone)}</a>`
    : `<span style="color:${MUTED};">—</span>`;
  return (
    row("Nom", `<strong>${fullName}</strong>`) +
    row("Entreprise", p.entreprise ? esc(p.entreprise) : `<span style="color:${MUTED};">—</span>`) +
    row("E-mail", mailLink) +
    row("Téléphone", telLink)
  );
}

/** Enveloppe HTML commune (en-tête + carte + pied de page). */
function wrap(opts: { badge: string; title: string; inner: string; preheader: string }): string {
  return `<!doctype html>
<html lang="fr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:${BG};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <span style="display:none!important;visibility:hidden;opacity:0;height:0;width:0;overflow:hidden;">${esc(opts.preheader)}</span>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BG};padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.08);">
        <tr>
          <td style="background:${INK};padding:22px 28px;">
            <span style="display:inline-block;background:${BRAND};color:#fff;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:5px 10px;border-radius:6px;">${esc(opts.badge)}</span>
            <div style="color:#ffffff;font-size:19px;font-weight:700;margin-top:12px;">${esc(opts.title)}</div>
            <div style="color:#9ca3af;font-size:13px;margin-top:2px;">Formulaire de contact — abcmperformances.com</div>
          </td>
        </tr>
        <tr><td style="padding:24px 28px 8px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${LINE};border-radius:10px;border-collapse:separate;overflow:hidden;">
            ${opts.inner}
          </table>
        </td></tr>
        <tr><td style="padding:16px 28px 26px;color:${MUTED};font-size:12px;line-height:1.5;">
          Cet e-mail a été généré automatiquement à la soumission du formulaire de contact du site.
          Répondez directement à ce message pour recontacter la personne.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/** Corps HTML — demande de renseignement. */
function renseignementHtml(p: ContactPayload): string {
  const messageBlock = `
    <tr>
      <td colspan="2" style="padding:14px 16px;background:#fafafa;">
        <div style="color:${MUTED};font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.03em;margin-bottom:8px;">Message</div>
        <div style="color:${INK};font-size:15px;line-height:1.6;white-space:pre-wrap;">${esc(p.message)}</div>
      </td>
    </tr>`;
  return wrap({
    badge: "Renseignement",
    title: `Nouvelle demande de ${p.prenom} ${p.nom}`.trim(),
    preheader: `Renseignement — ${p.prenom} ${p.nom} (${p.email})`,
    inner: contactRows(p) + messageBlock,
  });
}

/** Corps HTML — demande de formation. */
function formationHtml(p: ContactPayload): string {
  const formations = (p.formations && p.formations.length)
    ? `<ul style="margin:0;padding-left:18px;color:${INK};font-size:15px;line-height:1.7;">${p.formations
        .map((f) => `<li>${esc(f)}</li>`)
        .join("")}</ul>`
    : `<span style="color:${MUTED};">—</span>`;

  const modalite = p.modalite ? esc(MODALITE_LABELS[p.modalite] ?? p.modalite) : `<span style="color:${MUTED};">—</span>`;
  const format = p.format ? esc(FORMAT_LABELS[p.format] ?? p.format) : `<span style="color:${MUTED};">—</span>`;
  const participants = p.participants ? esc(p.participants) : `<span style="color:${MUTED};">—</span>`;
  const periode = p.periode ? esc(p.periode) : `<span style="color:${MUTED};">—</span>`;

  const precisionsBlock = p.precisions
    ? `
    <tr>
      <td colspan="2" style="padding:14px 16px;background:#fafafa;">
        <div style="color:${MUTED};font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.03em;margin-bottom:8px;">Précisions</div>
        <div style="color:${INK};font-size:15px;line-height:1.6;white-space:pre-wrap;">${esc(p.precisions)}</div>
      </td>
    </tr>`
    : "";

  return wrap({
    badge: "Formation",
    title: `Projet de formation — ${p.prenom} ${p.nom}`.trim(),
    preheader: `Formation — ${p.prenom} ${p.nom} (${p.email})`,
    inner:
      contactRows(p) +
      row("Formation(s)", formations) +
      row("Modalité", modalite) +
      row("Format", format) +
      row("Participants", participants) +
      row("Période souhaitée", periode) +
      precisionsBlock,
  });
}

/** Version texte brut (fallback e-mail) — commune aux deux types. */
function textVersion(p: ContactPayload): string {
  const L: string[] = [];
  L.push(p.motif === "formation" ? "PROJET DE FORMATION" : "DEMANDE DE RENSEIGNEMENT");
  L.push("");
  L.push(`Nom        : ${p.prenom} ${p.nom}`.trim());
  if (p.entreprise) L.push(`Entreprise : ${p.entreprise}`);
  L.push(`E-mail     : ${p.email}`);
  if (p.telephone) L.push(`Téléphone  : ${p.telephone}`);
  L.push("");
  if (p.motif === "formation") {
    L.push(`Formation(s) : ${(p.formations && p.formations.length) ? p.formations.join(", ") : "—"}`);
    L.push(`Modalité     : ${p.modalite ? (MODALITE_LABELS[p.modalite] ?? p.modalite) : "—"}`);
    L.push(`Format       : ${p.format ? (FORMAT_LABELS[p.format] ?? p.format) : "—"}`);
    L.push(`Participants : ${p.participants || "—"}`);
    L.push(`Période      : ${p.periode || "—"}`);
    if (p.precisions) { L.push(""); L.push("Précisions :"); L.push(p.precisions); }
  } else {
    L.push("Message :");
    L.push(p.message || "—");
  }
  return L.join("\n");
}

/** Construit le sujet + les corps HTML et texte de l'e-mail à envoyer à ABCM. */
export function buildContactEmail(p: ContactPayload): { subject: string; html: string; text: string } {
  const who = `${p.prenom} ${p.nom}`.trim() || p.email;
  if (p.motif === "formation") {
    const first = p.formations && p.formations.length ? ` · ${p.formations[0]}${p.formations.length > 1 ? ` (+${p.formations.length - 1})` : ""}` : "";
    return { subject: `🎓 Formation — ${who}${first}`, html: formationHtml(p), text: textVersion(p) };
  }
  return { subject: `✉️ Renseignement — ${who}`, html: renseignementHtml(p), text: textVersion(p) };
}
