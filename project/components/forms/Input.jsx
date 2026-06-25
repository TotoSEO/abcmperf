import React from "react";

const STYLE_ID = "abcm-input-styles";
const CSS = `
.abcm-field { display: flex; flex-direction: column; gap: var(--space-2); font-family: var(--font-sans); }
.abcm-field__label { font-size: var(--text-sm); font-weight: 600; color: var(--text); display: flex; gap: 0.35em; }
.abcm-field__req { color: var(--danger); }
.abcm-field__hint { font-size: var(--text-xs); color: var(--text-muted); }
.abcm-field__error { font-size: var(--text-xs); color: var(--danger); font-weight: 600; }
.abcm-input-wrap { position: relative; display: flex; align-items: center; }
.abcm-input-wrap__icon { position: absolute; left: 0.9em; color: var(--text-subtle); display: inline-flex; pointer-events: none; }
.abcm-input-wrap__icon svg { width: 1.15em; height: 1.15em; }
.abcm-input {
  width: 100%; font-family: var(--font-sans); font-size: var(--text-base);
  color: var(--text); background: var(--surface);
  border: var(--border-width-thick) solid var(--border-strong);
  border-radius: var(--radius-md); padding: 0.7em 0.9em; line-height: 1.4;
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out);
}
.abcm-input::placeholder { color: var(--text-subtle); }
.abcm-input:hover { border-color: var(--neutral-400); }
.abcm-input:focus { outline: none; border-color: var(--accent-400); box-shadow: 0 0 0 4px var(--ring); }
.abcm-input:disabled { opacity: 0.55; cursor: not-allowed; background: var(--surface-inset); }
.abcm-input--has-icon { padding-left: 2.6em; }
.abcm-input--error { border-color: var(--danger); }
.abcm-input--error:focus { box-shadow: 0 0 0 4px var(--danger-soft); }
textarea.abcm-input { resize: vertical; min-height: 6em; }
`;

function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

function Field({ label, required, hint, error, htmlFor, children }) {
  return (
    <label className="abcm-field" htmlFor={htmlFor}>
      {label && <span className="abcm-field__label">{label}{required && <span className="abcm-field__req">*</span>}</span>}
      {children}
      {error ? <span className="abcm-field__error">{error}</span> : hint && <span className="abcm-field__hint">{hint}</span>}
    </label>
  );
}

export function Input({ label, hint, error, required, icon, className = "", id, ...rest }) {
  useStyles();
  const cls = ["abcm-input", icon && "abcm-input--has-icon", error && "abcm-input--error", className].filter(Boolean).join(" ");
  return (
    <Field label={label} required={required} hint={hint} error={error} htmlFor={id}>
      <span className="abcm-input-wrap">
        {icon && <span className="abcm-input-wrap__icon">{icon}</span>}
        <input id={id} className={cls} aria-invalid={!!error} {...rest} />
      </span>
    </Field>
  );
}

export function Textarea({ label, hint, error, required, className = "", id, ...rest }) {
  useStyles();
  const cls = ["abcm-input", error && "abcm-input--error", className].filter(Boolean).join(" ");
  return (
    <Field label={label} required={required} hint={hint} error={error} htmlFor={id}>
      <textarea id={id} className={cls} aria-invalid={!!error} {...rest} />
    </Field>
  );
}
