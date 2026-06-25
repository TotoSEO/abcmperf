import React from "react";

const STYLE_ID = "abcm-statcard-styles";
const CSS = `
.abcm-stat { display: flex; flex-direction: column; gap: var(--space-1); }
.abcm-stat__value { font-family: var(--font-display); font-weight: 700; letter-spacing: var(--tracking-tight); line-height: 1; font-size: var(--text-3xl); color: var(--text); display: flex; align-items: baseline; gap: 0.08em; }
.abcm-stat__suffix { color: var(--accent-500); }
.abcm-stat__label { font-family: var(--font-sans); font-size: var(--text-sm); color: var(--text-muted); }
.on-dark .abcm-stat__value, [data-theme="dark"] .abcm-stat__value { color: #fff; }
.on-dark .abcm-stat__suffix, [data-theme="dark"] .abcm-stat__suffix { color: var(--accent-400); }
`;

const HUES = {
  yellow: "var(--logo-yellow)", orange: "var(--logo-orange)", magenta: "var(--logo-magenta)",
  blue: "var(--logo-blue)", green: "var(--logo-green)", accent: "var(--accent-500)",
};

function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

export function StatCard({ value, prefix, suffix, label, hue, className = "", style, ...rest }) {
  useStyles();
  const tint = hue ? (HUES[hue] || hue) : undefined;
  return (
    <div className={["abcm-stat", className].filter(Boolean).join(" ")} style={style} {...rest}>
      <span className="abcm-stat__value" style={tint ? { color: tint } : undefined}>
        {prefix && <span className="abcm-stat__suffix" style={tint ? { color: tint } : undefined}>{prefix}</span>}
        {value}
        {suffix && <span className="abcm-stat__suffix" style={tint ? { color: tint } : undefined}>{suffix}</span>}
      </span>
      {label && <span className="abcm-stat__label">{label}</span>}
    </div>
  );
}
