import React from "react";

const STYLE_ID = "abcm-select-styles";
const CSS = `
.abcm-select-field { display: flex; flex-direction: column; gap: var(--space-2); font-family: var(--font-sans); }
.abcm-select-field__label { font-size: var(--text-sm); font-weight: 600; color: var(--text); }
.abcm-select-wrap { position: relative; display: flex; align-items: center; }
.abcm-select {
  appearance: none; width: 100%; font-family: var(--font-sans); font-size: var(--text-base);
  color: var(--text); background: var(--surface); cursor: pointer;
  border: var(--border-width-thick) solid var(--border-strong);
  border-radius: var(--radius-md); padding: 0.7em 2.4em 0.7em 0.9em; line-height: 1.4;
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.abcm-select:hover { border-color: var(--neutral-400); }
.abcm-select:focus { outline: none; border-color: var(--accent-400); box-shadow: 0 0 0 4px var(--ring); }
.abcm-select:disabled { opacity: 0.55; cursor: not-allowed; background: var(--surface-inset); }
.abcm-select-wrap__chev { position: absolute; right: 0.9em; pointer-events: none; color: var(--text-muted); }
.abcm-select-wrap__chev svg { width: 1.1em; height: 1.1em; display: block; }
`;

function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

export function Select({ label, id, options, placeholder, className = "", children, ...rest }) {
  useStyles();
  return (
    <label className="abcm-select-field" htmlFor={id}>
      {label && <span className="abcm-select-field__label">{label}</span>}
      <span className="abcm-select-wrap">
        <select id={id} className={["abcm-select", className].filter(Boolean).join(" ")} {...rest}>
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options
            ? options.map((o) => {
                const opt = typeof o === "string" ? { value: o, label: o } : o;
                return <option key={opt.value} value={opt.value}>{opt.label}</option>;
              })
            : children}
        </select>
        <span className="abcm-select-wrap__chev">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
        </span>
      </span>
    </label>
  );
}
