import { buildContactEmail } from "@/lib/contact-email";

// Route d'envoi du formulaire de contact.
//   POST /contact/submit  → envoie un e-mail à ABCM via Resend.
// Hors du namespace /api/ (réservé à Payload). Exécution Node (fetch Resend).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Destinataires des demandes. Surchargeable via CONTACT_EMAIL_TO (liste
// séparée par des virgules). Par défaut : les deux boîtes ABCM.
const TO = (process.env.CONTACT_EMAIL_TO || "caroline@abcmperformances.com, audrey@abcm.io")
  .split(",")
  .map((a) => a.trim())
  .filter(Boolean);
// Expéditeur : doit appartenir à un domaine vérifié dans Resend.
// À défaut, le domaine de test « onboarding@resend.dev » fonctionne sans config.
const FROM = process.env.CONTACT_EMAIL_FROM || "ABCM Performances <onboarding@resend.dev>";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const MAX = 5000; // garde-fou anti-abus sur la longueur des champs texte

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

/** Normalise + tronque une valeur texte. */
const s = (v) => (typeof v === "string" ? v.trim().slice(0, MAX) : "");

export async function POST(req) {
  let raw;
  try {
    raw = await req.json();
  } catch {
    return json({ ok: false, error: "Requête invalide." }, 400);
  }

  const motif = raw?.motif === "formation" ? "formation" : raw?.motif === "renseignement" ? "renseignement" : "";

  // ---- Validation ----
  const payload = {
    motif,
    prenom: s(raw?.prenom),
    nom: s(raw?.nom),
    entreprise: s(raw?.entreprise),
    email: s(raw?.email),
    telephone: s(raw?.telephone),
    message: s(raw?.message),
    formations: Array.isArray(raw?.formations) ? raw.formations.map(s).filter(Boolean).slice(0, 30) : [],
    modalite: s(raw?.modalite),
    format: s(raw?.format),
    participants: s(raw?.participants),
    periode: s(raw?.periode),
    precisions: s(raw?.precisions),
    consent: raw?.consent === true,
  };

  const errors = {};
  if (!motif) errors.motif = "Motif manquant.";
  if (!payload.prenom) errors.prenom = "Prénom requis.";
  if (!payload.nom) errors.nom = "Nom requis.";
  if (!EMAIL_RE.test(payload.email)) errors.email = "E-mail invalide.";
  if (motif === "renseignement" && !payload.message) errors.message = "Message requis.";
  if (motif === "formation" && payload.formations.length === 0) errors.formations = "Sélectionnez au moins une formation.";
  if (!payload.consent) errors.consent = "Consentement requis.";
  if (Object.keys(errors).length) return json({ ok: false, errors }, 422);

  // ---- Configuration Resend ----
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Ne pas exposer le détail côté client, mais tracer côté serveur.
    console.error("[contact] RESEND_API_KEY manquante — e-mail non envoyé.");
    return json({ ok: false, error: "Service d'envoi non configuré." }, 503);
  }

  const { subject, html, text } = buildContactEmail(payload);

  // ---- Envoi via l'API HTTP Resend ----
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: TO,
        subject,
        html,
        text,
        reply_to: payload.email, // répondre directement à la personne
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error(`[contact] Échec Resend ${res.status}: ${detail}`);
      return json({ ok: false, error: "L'envoi a échoué. Réessayez ou contactez-nous directement." }, 502);
    }

    return json({ ok: true });
  } catch (err) {
    console.error("[contact] Erreur réseau Resend:", err);
    return json({ ok: false, error: "L'envoi a échoué. Réessayez ou contactez-nous directement." }, 502);
  }
}
