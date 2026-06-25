import React from "react";

const HUES = {
  yellow: "var(--logo-yellow)", orange: "var(--logo-orange)", magenta: "var(--logo-magenta)",
  blue: "var(--logo-blue)", green: "var(--logo-green)",
};

export function Tag({ hue, active = false, onRemove, onClick, className = "", children, ...rest }) {
  const clickable = !!onClick;
  const cls = ["abcm-tag", clickable && "abcm-tag--clickable", active && "abcm-tag--active", className].filter(Boolean).join(" ");
  return (
    <span className={cls} onClick={onClick} {...rest}>
      {hue && <span className="abcm-tag__hue" style={{ background: HUES[hue] || hue }} />}
      {children}
      {onRemove && (
        <button type="button" className="abcm-tag__x" aria-label="Retirer" onClick={(e) => { e.stopPropagation(); onRemove(e); }}>×</button>
      )}
    </span>
  );
}
