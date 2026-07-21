"use client";
import React from "react";
import { Input, Textarea, Button, Icon, Checkbox } from "@/components/ds";
import { ABCM_INFO, formationsBySilo } from "@/data/formations";

const cx = (...a) => a.filter(Boolean).join(" ");
const STEPS = ["Vos informations", "Votre besoin", "Détails"];

const EMPTY = {
  prenom: "", nom: "", entreprise: "", email: "", telephone: "",
  motif: "", message: "",
  formations: [], modalite: "", format: "", participants: "", periode: "", precisions: "",
  consent: false,
};

/* Consentement RGPD + mention d'information (art. 13 RGPD). Case non
   pré-cochée et obligatoire pour envoyer, comme le recommande la CNIL. */
function ConsentBlock({ checked, onChange, error }) {
  return (
    <div className="fmt-consent">
      <Checkbox
        checked={checked}
        onChange={onChange}
        aria-invalid={error ? "true" : undefined}
        label={
          <>
            J'accepte que les informations saisies soient utilisées par ABCM
            Performances pour traiter ma demande. <span aria-hidden="true">*</span>
          </>
        }
      />
      {error && <span className="fmt-field__error">{error}</span>}
      <p className="fmt-consent__note">
        Vos données ne servent qu'à répondre à votre demande et ne sont jamais
        cédées à des tiers. Vous disposez d'un droit d'accès, de rectification,
        d'effacement et d'opposition — voir nos{" "}
        <a href="/mentions-legales/">mentions légales &amp; RGPD</a>.
      </p>
    </div>
  );
}

/* Petit contrôle segmenté (radiogroup stylé). */
function Segmented({ label, value, onChange, options }) {
  return (
    <div className="fmt-field">
      <span className="fmt-field__label">{label}</span>
      <div className="fmt-seg" role="radiogroup" aria-label={label}>
        {options.map((o) => (
          <button
            type="button" key={o.value} role="radio" aria-checked={value === o.value}
            className={cx("fmt-seg__opt", value === o.value && "is-sel")}
            onClick={() => onChange(o.value)}
          >
            {o.icon && <Icon name={o.icon} size={16} />}{o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function ContactWizard() {
  const [step, setStep] = React.useState(0);
  const [dir, setDir] = React.useState("fwd");
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [sendError, setSendError] = React.useState("");
  const [data, setData] = React.useState(EMPTY);
  const [errors, setErrors] = React.useState({});

  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));
  const go = (next, d = "fwd") => { setDir(d); setStep(next); };
  const toggleFormation = (name) =>
    setData((d) => ({
      ...d,
      formations: d.formations.includes(name)
        ? d.formations.filter((n) => n !== name)
        : [...d.formations, name],
    }));

  const validateInfos = () => {
    const er = {};
    if (!data.prenom.trim()) er.prenom = "Indiquez votre prénom";
    if (!data.nom.trim()) er.nom = "Indiquez votre nom";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) er.email = "Adresse e-mail invalide";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const next0 = () => { if (validateInfos()) go(1, "fwd"); };
  const chooseMotif = (m) => { setData((d) => ({ ...d, motif: m })); go(2, "fwd"); };

  const submit = async (e) => {
    e.preventDefault();
    const er = {};
    if (data.motif === "renseignement" && !data.message.trim()) er.message = "Écrivez votre message";
    if (data.motif === "formation" && data.formations.length === 0) er.formations = "Choisissez au moins une formation";
    if (!data.consent) er.consent = "Merci de cocher cette case pour envoyer votre demande.";
    setErrors(er);
    if (Object.keys(er).length) return;

    setSending(true);
    setSendError("");
    try {
      const res = await fetch("/contact/submit/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok || !body.ok) {
        if (body.errors) setErrors(body.errors);
        setSendError(body.error || "L'envoi a échoué. Réessayez ou écrivez-nous directement.");
        return;
      }
      setSent(true);
    } catch {
      setSendError("Connexion impossible. Vérifiez votre réseau et réessayez.");
    } finally {
      setSending(false);
    }
  };

  const reset = () => { setData(EMPTY); setErrors({}); setSent(false); setSendError(""); go(0, "back"); };

  return (
    <div className="fmt-wiz">
      {/* Progression */}
      <ol className="fmt-wiz__steps" aria-hidden={sent}>
        {STEPS.map((s, i) => (
          <li key={s} className={cx("fmt-wiz__step", !sent && i === step && "is-active", (sent || i < step) && "is-done")}>
            <span className="fmt-wiz__step-num">{(sent || i < step) ? <Icon name="check" size={16} /> : i + 1}</span>
            <span className="fmt-wiz__step-label">{s}</span>
          </li>
        ))}
      </ol>

      <div className="fmt-wiz__card">
        {sent ? (
          <div className="fmt-wiz__done">
            <span className="fmt-wiz__done-ic"><Icon name="check" size={36} /></span>
            <h2>Merci {data.prenom}&nbsp;! Votre demande est partie.</h2>
            <p>
              {data.motif === "formation" ? (
                data.formations.length > 1
                  ? <>Nous revenons vers vous très vite avec une proposition pour les <strong>{data.formations.length} formations</strong> sélectionnées.</>
                  : <>Nous revenons vers vous très vite avec une proposition pour la formation <strong>{data.formations[0]}</strong>.</>
              ) : (
                <>Notre équipe vous recontacte sous 48&nbsp;h ouvrées au sujet de votre demande.</>
              )}
            </p>
            <Button variant="outline" onClick={reset} iconLeft={<Icon name="arrow-left" size={16} />}>Nouvelle demande</Button>
          </div>
        ) : (
          <form onSubmit={submit} className="fmt-wiz__form">
            <div className={cx("fmt-wiz__panel", `fmt-wiz__panel--${dir}`)} key={step}>

              {/* -------- Étape 1 : informations -------- */}
              {step === 0 && (
                <>
                  <h2 className="fmt-wiz__title">Faisons connaissance</h2>
                  <p className="fmt-wiz__hint">On commence par l'essentiel pour pouvoir vous recontacter.</p>
                  <div className="fmt-wiz__row">
                    <Input id="prenom" name="prenom" label="Prénom" placeholder="Caroline" required value={data.prenom} onChange={set("prenom")} error={errors.prenom} />
                    <Input id="nom" name="nom" label="Nom" placeholder="Meyer" required value={data.nom} onChange={set("nom")} error={errors.nom} />
                  </div>
                  <Input id="entreprise" name="entreprise" label="Entreprise" placeholder="Votre société (facultatif)" value={data.entreprise} onChange={set("entreprise")} />
                  <div className="fmt-wiz__row">
                    <Input id="email" name="email" label="E-mail" type="email" placeholder="vous@entreprise.fr" required value={data.email} onChange={set("email")} error={errors.email} />
                    <Input id="telephone" name="telephone" label="Téléphone" type="tel" placeholder="06 12 34 56 78" value={data.telephone} onChange={set("telephone")} />
                  </div>
                  <div className="fmt-wiz__nav">
                    <span />
                    <Button type="button" variant="primary" size="lg" onClick={next0} iconRight={<Icon name="arrow-right" size={18} />}>Continuer</Button>
                  </div>
                </>
              )}

              {/* -------- Étape 2 : motif -------- */}
              {step === 1 && (
                <>
                  <h2 className="fmt-wiz__title">Pourquoi nous contactez-vous&nbsp;?</h2>
                  <p className="fmt-wiz__hint">Choisissez une option, le formulaire s'adapte.</p>
                  <div className="fmt-wiz__choices">
                    <button type="button" className={cx("fmt-wiz__choice", data.motif === "renseignement" && "is-sel")} onClick={() => chooseMotif("renseignement")}>
                      <span className="fmt-wiz__choice-ic"><Icon name="mail" size={26} /></span>
                      <span className="fmt-wiz__choice-t">Renseignement</span>
                      <span className="fmt-wiz__choice-d">Une question, une demande d'information ou tout autre sujet.</span>
                      <span className="fmt-wiz__choice-go"><Icon name="arrow-right" size={18} /></span>
                    </button>
                    <button type="button" className={cx("fmt-wiz__choice", data.motif === "formation" && "is-sel")} onClick={() => chooseMotif("formation")}>
                      <span className="fmt-wiz__choice-ic"><Icon name="graduation-cap" size={26} /></span>
                      <span className="fmt-wiz__choice-t">Réaliser une formation</span>
                      <span className="fmt-wiz__choice-d">Former vos équipes, en intra ou en inter-entreprise.</span>
                      <span className="fmt-wiz__choice-go"><Icon name="arrow-right" size={18} /></span>
                    </button>
                  </div>
                  <div className="fmt-wiz__nav">
                    <Button type="button" variant="ghost" onClick={() => go(0, "back")} iconLeft={<Icon name="arrow-left" size={18} />}>Retour</Button>
                    <span />
                  </div>
                </>
              )}

              {/* -------- Étape 3 : détails -------- */}
              {step === 2 && data.motif === "renseignement" && (
                <>
                  <h2 className="fmt-wiz__title">Votre message</h2>
                  <p className="fmt-wiz__hint">Dites-nous en quelques lignes comment nous pouvons vous aider.</p>
                  <Textarea id="message" name="message" label="Votre demande" rows={6} placeholder="Bonjour, je souhaiterais…" value={data.message} onChange={set("message")} error={errors.message} />
                  <ConsentBlock checked={data.consent} onChange={(e) => setData((d) => ({ ...d, consent: e.target.checked }))} error={errors.consent} />
                  {sendError && <p className="fmt-field__error" role="alert">{sendError}</p>}
                  <div className="fmt-wiz__nav">
                    <Button type="button" variant="ghost" onClick={() => go(1, "back")} disabled={sending} iconLeft={<Icon name="arrow-left" size={18} />}>Retour</Button>
                    <Button type="submit" variant="primary" size="lg" disabled={sending} iconRight={<Icon name="send" size={18} />}>{sending ? "Envoi…" : "Envoyer ma demande"}</Button>
                  </div>
                </>
              )}

              {step === 2 && data.motif === "formation" && (
                <>
                  <h2 className="fmt-wiz__title">Votre projet de formation</h2>
                  <p className="fmt-wiz__hint">Quelques précisions pour préparer une proposition adaptée.</p>

                  <div className="fmt-field fmt-pick">
                    <span className="fmt-field__label">
                      Quelle(s) formation(s) vous intéresse(nt) ?
                      <span className="fmt-pick__hint">Plusieurs choix possibles</span>
                    </span>
                    {formationsBySilo().map(({ silo, items }) => (
                      <div className="fmt-pick__group" key={silo.id}>
                        <span className="fmt-pick__group-label">{silo.emoji} {silo.label}</span>
                        <div className="fmt-pick__chips">
                          {items.map((f) => {
                            const on = data.formations.includes(f.name);
                            return (
                              <button
                                type="button" key={f.slug} aria-pressed={on}
                                className={cx("fmt-pick__chip", on && "is-sel")}
                                onClick={() => toggleFormation(f.name)}
                              >
                                <span className="fmt-pick__check" aria-hidden="true"><Icon name="check" size={13} /></span>
                                {f.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                    <div className="fmt-pick__group">
                      <span className="fmt-pick__group-label">Autre</span>
                      <div className="fmt-pick__chips">
                        <button
                          type="button" aria-pressed={data.formations.includes("Autre / sur-mesure")}
                          className={cx("fmt-pick__chip", data.formations.includes("Autre / sur-mesure") && "is-sel")}
                          onClick={() => toggleFormation("Autre / sur-mesure")}
                        >
                          <span className="fmt-pick__check" aria-hidden="true"><Icon name="check" size={13} /></span>
                          Autre / formation sur-mesure
                        </button>
                      </div>
                    </div>
                    {errors.formations && <span className="fmt-field__error">{errors.formations}</span>}
                  </div>

                  <Segmented
                    label="À distance ou sur site ?"
                    value={data.modalite}
                    onChange={(v) => setData((d) => ({ ...d, modalite: v }))}
                    options={[
                      { value: "presentiel", label: "Sur site", icon: "map-pin" },
                      { value: "distanciel", label: "À distance", icon: "monitor" },
                      { value: "indifferent", label: "Peu importe", icon: "check" },
                    ]}
                  />
                  <p className="fmt-wiz__note"><Icon name="map-pin" size={15} /> Nous nous déplaçons uniquement dans le Grand Est et alentours (Lille…). Partout ailleurs, la formation se déroule en visio.</p>

                  <Segmented
                    label="Format souhaité"
                    value={data.format}
                    onChange={(v) => setData((d) => ({ ...d, format: v }))}
                    options={[
                      { value: "intra", label: "Intra (mon équipe)", icon: "users" },
                      { value: "inter", label: "Inter / individuel", icon: "user-round" },
                    ]}
                  />

                  <div className="fmt-wiz__row">
                    <Input id="participants" name="participants" label="Nombre de participants" type="number" min="1" placeholder="Ex. 6" value={data.participants} onChange={set("participants")} />
                    <Input id="periode" name="periode" label="Période souhaitée" placeholder="Ex. septembre 2026" value={data.periode} onChange={set("periode")} />
                  </div>
                  <Textarea id="precisions" name="precisions" label="Précisions (facultatif)" rows={3} placeholder="Objectifs, niveau des participants, contexte…" value={data.precisions} onChange={set("precisions")} />

                  <ConsentBlock checked={data.consent} onChange={(e) => setData((d) => ({ ...d, consent: e.target.checked }))} error={errors.consent} />
                  {sendError && <p className="fmt-field__error" role="alert">{sendError}</p>}
                  <div className="fmt-wiz__nav">
                    <Button type="button" variant="ghost" onClick={() => go(1, "back")} disabled={sending} iconLeft={<Icon name="arrow-left" size={18} />}>Retour</Button>
                    <Button type="submit" variant="primary" size="lg" disabled={sending} iconRight={<Icon name="send" size={18} />}>{sending ? "Envoi…" : "Envoyer ma demande"}</Button>
                  </div>
                </>
              )}
            </div>
          </form>
        )}
      </div>

      {/* Contact direct */}
      <div className="fmt-wiz__direct">
        <a href={`tel:${ABCM_INFO.phoneHref}`}><Icon name="phone" size={16} /> {ABCM_INFO.phone}</a>
        <a href={`mailto:${ABCM_INFO.email}`}><Icon name="mail" size={16} /> {ABCM_INFO.email}</a>
        <span><Icon name="map-pin" size={16} /> Strasbourg · Grand Est</span>
      </div>
    </div>
  );
}
