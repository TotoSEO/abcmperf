import React from "react";

const STYLE_ID = "abcm-alert-styles";
const CSS = `
.abcm-alert {
  display: flex; gap: var(--space-4); align-items: flex-start;
  font-family: var(--font-sans); font-size: var(--text-sm); line-height: 1.5;
  padding: var(--space-5); border-radius: var(--radius-lg);
  background: var(--surface); border: 1px solid var(--border);
  box-shadow: var(--shadow-sm); position: relative; overflow: hidden;
}
.abcm-alert::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 5px; background: var(--_c, var(--accent-400)); }
.abcm-alert__icon {
  flex: none; width: 2.5em; height: 2.5em; border-radius: var(--radius-md);
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--_c, var(--accent-400)); color: #fff;
  box-shadow: 0 8px 18px color-mix(in oklch, var(--_c, var(--accent-400)) 38%, transparent);
}
.abcm-alert__icon svg { width: 1.3em; height: 1.3em; }
.abcm-alert__body { flex: 1; padding-top: 0.1em; }
.abcm-alert__title { font-family: var(--font-display); font-weight: 700; font-size: var(--text-md); margin-bottom: 0.1em; color: var(--text); }
.abcm-alert__body p { color: var(--text-muted); margin: 0; }
.abcm-alert--info    { --_c: var(--info); }
.abcm-alert--success { --_c: var(--success); }
.abcm-alert--warning { --_c: var(--warning); }
.abcm-alert--danger  { --_c: var(--danger); }
`;

const ICONS = {
  info: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.5h.01"/></svg>,
  success: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9"/></svg>,
  warning: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 16H3z"/><path d="M12 9v4M12 16.5h.01"/></svg>,
  danger: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15 9l-6 6M9 9l6 6"/></svg>,
};

function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

export function Alert({ variant = "info", title, icon, className = "", children, ...rest }) {
  useStyles();
  return (
    <div role="alert" className={["abcm-alert", `abcm-alert--${variant}`, className].filter(Boolean).join(" ")} {...rest}>
      <span className="abcm-alert__icon">{icon || ICONS[variant]}</span>
      <div className="abcm-alert__body">
        {title && <div className="abcm-alert__title">{title}</div>}
        {children && <p>{children}</p>}
      </div>
    </div>
  );
}
