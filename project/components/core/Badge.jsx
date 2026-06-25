import React from "react";

const STYLE_ID = "abcm-badge-styles";
const CSS = `
.abcm-badge {
  display: inline-flex; align-items: center; gap: 0.4em;
  font-family: var(--font-mono); font-size: var(--text-2xs); font-weight: 700;
  letter-spacing: 0.04em; line-height: 1; text-transform: uppercase;
  padding: 0.45em 0.7em; border-radius: var(--radius-pill);
  border: 1px solid transparent; white-space: nowrap;
}
.abcm-badge__dot { width: 0.5em; height: 0.5em; border-radius: 50%; background: currentColor; }
.abcm-badge--neutral { background: var(--surface-inset); color: var(--text-muted); }
.abcm-badge--accent  { background: var(--accent-100); color: var(--accent-700); }
.abcm-badge--success { background: var(--success-soft); color: var(--success); }
.abcm-badge--info    { background: var(--info-soft); color: var(--info); }
.abcm-badge--warning { background: var(--warning-soft); color: var(--warning); }
.abcm-badge--danger  { background: var(--danger-soft); color: var(--danger); }
.abcm-badge--solid.abcm-badge--neutral { background: var(--night); color: #fff; }
.abcm-badge--solid.abcm-badge--accent  { background: var(--accent-400); color: var(--night); }
.abcm-badge--solid.abcm-badge--success { background: var(--success); color: #fff; }
.abcm-badge--solid.abcm-badge--info    { background: var(--info); color: #fff; }
.abcm-badge--solid.abcm-badge--warning { background: var(--warning); color: #fff; }
.abcm-badge--solid.abcm-badge--danger  { background: var(--danger); color: #fff; }
`;

function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

export function Badge({ variant = "neutral", solid = false, dot = false, className = "", children, ...rest }) {
  useStyles();
  const cls = ["abcm-badge", `abcm-badge--${variant}`, solid && "abcm-badge--solid", className].filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      {dot && <span className="abcm-badge__dot" />}
      {children}
    </span>
  );
}
