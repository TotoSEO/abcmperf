import React from "react";

const STYLE_ID = "abcm-tag-styles";
const CSS = `
.abcm-tag {
  display: inline-flex; align-items: center; gap: 0.5em;
  font-family: var(--font-sans); font-size: var(--text-sm); font-weight: 600;
  line-height: 1; padding: 0.5em 0.85em; border-radius: var(--radius-pill);
  background: var(--surface); color: var(--text);
  border: 1px solid var(--border-strong);
  transition: border-color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out);
  cursor: default;
}
.abcm-tag--clickable { cursor: pointer; }
.abcm-tag--clickable:hover { border-color: var(--night); background: var(--surface-2); }
.abcm-tag__hue { width: 0.6em; height: 0.6em; border-radius: 50%; flex: none; }
.abcm-tag__x {
  display: inline-flex; align-items: center; justify-content: center;
  width: 1.1em; height: 1.1em; border-radius: 50%; border: none; background: transparent;
  color: var(--text-muted); cursor: pointer; font-size: 1.1em; line-height: 1; padding: 0;
}
.abcm-tag__x:hover { background: var(--surface-inset); color: var(--text); }
.abcm-tag--active { background: var(--night); color: #fff; border-color: var(--night); }
`;

const HUES = {
  yellow: "var(--logo-yellow)", orange: "var(--logo-orange)", magenta: "var(--logo-magenta)",
  blue: "var(--logo-blue)", green: "var(--logo-green)",
};

function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

export function Tag({ hue, active = false, onRemove, onClick, className = "", children, ...rest }) {
  useStyles();
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
