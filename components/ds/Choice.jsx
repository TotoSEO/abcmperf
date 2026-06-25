import React from "react";

const Check = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6"/></svg>);

export function Checkbox({ label, className = "", ...rest }) {
  return (
    <label className={["abcm-choice", className].filter(Boolean).join(" ")}>
      <input type="checkbox" {...rest} />
      <span className="abcm-choice__box"><Check /></span>
      {label && <span>{label}</span>}
    </label>
  );
}

export function Radio({ label, className = "", ...rest }) {
  return (
    <label className={["abcm-choice", className].filter(Boolean).join(" ")}>
      <input type="radio" {...rest} />
      <span className="abcm-choice__box abcm-choice__box--radio"><span className="abcm-choice__dot" /></span>
      {label && <span>{label}</span>}
    </label>
  );
}

export function Switch({ label, className = "", ...rest }) {
  return (
    <label className={["abcm-switch", className].filter(Boolean).join(" ")}>
      <input type="checkbox" role="switch" {...rest} />
      <span className="abcm-switch__track"><span className="abcm-switch__thumb" /></span>
      {label && <span>{label}</span>}
    </label>
  );
}
