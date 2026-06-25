import React from "react";

const STYLE_ID = "abcm-iconbtn-styles";
const CSS = `
.abcm-iconbtn {
  display: inline-flex; align-items: center; justify-content: center;
  width: 2.75em; height: 2.75em; font-size: var(--text-sm);
  border-radius: var(--radius-pill); border: var(--border-width-thick) solid transparent;
  cursor: pointer; padding: 0; flex: none;
  transition: transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
}
.abcm-iconbtn svg { width: 1.25em; height: 1.25em; display: block; }
.abcm-iconbtn:active { transform: scale(0.92); }
.abcm-iconbtn:disabled { opacity: 0.45; cursor: not-allowed; }
.abcm-iconbtn--sm { width: 2.2em; height: 2.2em; }
.abcm-iconbtn--lg { width: 3.25em; height: 3.25em; font-size: var(--text-md); }
.abcm-iconbtn--square { border-radius: var(--radius-md); }
.abcm-iconbtn--primary { background: var(--accent-400); color: var(--night); }
.abcm-iconbtn--primary:hover { background: var(--accent-300); box-shadow: var(--shadow-accent); }
.abcm-iconbtn--secondary { background: var(--night); color: #fff; }
.abcm-iconbtn--secondary:hover { background: var(--neutral-800); }
.abcm-iconbtn--outline { background: transparent; color: var(--text); border-color: var(--border-strong); }
.abcm-iconbtn--outline:hover { border-color: var(--night); background: var(--surface-2); }
.abcm-iconbtn--ghost { background: transparent; color: var(--text); }
.abcm-iconbtn--ghost:hover { background: var(--surface-inset); }
.on-dark .abcm-iconbtn--ghost, [data-theme="dark"] .abcm-iconbtn--ghost { color: #fff; }
.on-dark .abcm-iconbtn--outline, [data-theme="dark"] .abcm-iconbtn--outline { color: #fff; }
`;

function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

export function IconButton({ variant = "ghost", size = "md", square = false, label, className = "", children, ...rest }) {
  useStyles();
  const cls = ["abcm-iconbtn", `abcm-iconbtn--${variant}`, size !== "md" && `abcm-iconbtn--${size}`, square && "abcm-iconbtn--square", className].filter(Boolean).join(" ");
  return <button type="button" className={cls} aria-label={label} {...rest}>{children}</button>;
}
