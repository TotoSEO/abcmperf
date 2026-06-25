import React from "react";

const STYLE_ID = "abcm-button-styles";
const CSS = `
.abcm-btn {
  --_pad-y: 0.7em; --_pad-x: 1.25em; --_fs: var(--text-sm);
  display: inline-flex; align-items: center; justify-content: center; gap: 0.6em;
  font-family: var(--font-display); font-weight: var(--weight-semibold);
  font-size: var(--_fs); line-height: 1; letter-spacing: var(--tracking-snug);
  padding: var(--_pad-y) var(--_pad-x);
  border-radius: var(--radius-pill); border: var(--border-width-thick) solid transparent;
  cursor: pointer; white-space: nowrap; text-decoration: none;
  transition: transform var(--dur-fast) var(--ease-out),
              background var(--dur-base) var(--ease-out),
              box-shadow var(--dur-base) var(--ease-out),
              color var(--dur-base) var(--ease-out),
              border-color var(--dur-base) var(--ease-out);
}
.abcm-btn:active { transform: translateY(1px) scale(0.985); }
.abcm-btn:disabled, .abcm-btn[aria-disabled="true"] { opacity: 0.45; cursor: not-allowed; pointer-events: none; }
.abcm-btn__icon { display: inline-flex; flex: none; }
.abcm-btn__icon svg { width: 1.15em; height: 1.15em; display: block; }

.abcm-btn--sm { --_pad-y: 0.55em; --_pad-x: 1em; --_fs: var(--text-xs); }
.abcm-btn--lg { --_pad-y: 0.85em; --_pad-x: 1.6em; --_fs: var(--text-md); }
.abcm-btn--block { display: flex; width: 100%; }

.abcm-btn--primary { background: var(--accent-400); color: var(--accent-contrast); }
.abcm-btn--primary:hover { background: var(--accent-300); box-shadow: var(--shadow-accent); transform: translateY(-1px); }
.abcm-btn--primary:active { background: var(--accent-500); }

.abcm-btn--secondary { background: var(--night); color: #fff; }
.abcm-btn--secondary:hover { background: var(--neutral-800); transform: translateY(-1px); box-shadow: var(--shadow-md); }

.abcm-btn--outline { background: transparent; color: var(--text); border-color: var(--border-strong); }
.abcm-btn--outline:hover { border-color: var(--night); background: var(--surface-2); }

.abcm-btn--ghost { background: transparent; color: var(--text); }
.abcm-btn--ghost:hover { background: var(--surface-inset); }

.abcm-btn--link { background: transparent; color: var(--link); padding-left: 0; padding-right: 0; border-radius: 0; }
.abcm-btn--link:hover { color: var(--accent-600); }
.on-dark .abcm-btn--outline, [data-theme="dark"] .abcm-btn--outline { color: #fff; border-color: var(--border-strong); }
.on-dark .abcm-btn--ghost, [data-theme="dark"] .abcm-btn--ghost { color: #fff; }
`;

function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

export function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  block = false,
  as,
  className = "",
  children,
  ...rest
}) {
  useStyles();
  const Tag = as || (rest.href ? "a" : "button");
  const cls = [
    "abcm-btn",
    `abcm-btn--${variant}`,
    size !== "md" && `abcm-btn--${size}`,
    block && "abcm-btn--block",
    className,
  ].filter(Boolean).join(" ");
  return (
    <Tag className={cls} {...rest}>
      {iconLeft && <span className="abcm-btn__icon">{iconLeft}</span>}
      {children && <span>{children}</span>}
      {iconRight && <span className="abcm-btn__icon">{iconRight}</span>}
    </Tag>
  );
}
