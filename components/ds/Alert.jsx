import React from "react";

const ICONS = {
  info: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.5h.01"/></svg>,
  success: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9"/></svg>,
  warning: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 16H3z"/><path d="M12 9v4M12 16.5h.01"/></svg>,
  danger: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15 9l-6 6M9 9l6 6"/></svg>,
};

export function Alert({ variant = "info", title, icon, className = "", children, ...rest }) {
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
