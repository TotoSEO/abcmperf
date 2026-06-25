import React from "react";

const HUES = {
  yellow: "var(--logo-yellow)", orange: "var(--logo-orange)", magenta: "var(--logo-magenta)",
  blue: "var(--logo-blue)", green: "var(--logo-green)", accent: "var(--accent-500)",
};
const Arrow = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>);

export function ServiceCard({ icon, title, description, href, as, linkLabel = "En savoir plus", hue = "accent", className = "", style, ...rest }) {
  const Tag = as || (href ? "a" : "div");
  return (
    <Tag href={href} className={["abcm-service", className].filter(Boolean).join(" ")} style={{ "--_hue": HUES[hue] || hue, ...style }} {...rest}>
      {icon && <span className="abcm-service__icon">{icon}</span>}
      <h3 className="abcm-service__title">{title}</h3>
      {description && <p className="abcm-service__desc">{description}</p>}
      {(href || as) && <span className="abcm-service__link">{linkLabel} <Arrow /></span>}
    </Tag>
  );
}
