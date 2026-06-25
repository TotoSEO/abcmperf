import React from "react";

const HUES = {
  yellow: "var(--logo-yellow)", orange: "var(--logo-orange)", magenta: "var(--logo-magenta)",
  blue: "var(--logo-blue)", green: "var(--logo-green)", accent: "var(--accent-500)",
};

export function StatCard({ value, prefix, suffix, label, hue, className = "", style, ...rest }) {
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
