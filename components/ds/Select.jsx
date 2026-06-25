import React from "react";

export function Select({ label, id, options, placeholder, className = "", children, defaultValue, ...rest }) {
  return (
    <label className="abcm-select-field" htmlFor={id}>
      {label && <span className="abcm-select-field__label">{label}</span>}
      <span className="abcm-select-wrap">
        <select id={id} className={["abcm-select", className].filter(Boolean).join(" ")} defaultValue={defaultValue ?? (placeholder ? "" : undefined)} {...rest}>
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
