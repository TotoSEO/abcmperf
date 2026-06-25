import React from "react";

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
  const cls = ["abcm-input", error && "abcm-input--error", className].filter(Boolean).join(" ");
  return (
    <Field label={label} required={required} hint={hint} error={error} htmlFor={id}>
      <textarea id={id} className={cls} aria-invalid={!!error} {...rest} />
    </Field>
  );
}
