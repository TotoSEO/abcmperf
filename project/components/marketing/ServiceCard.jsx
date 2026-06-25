import React from "react";

const STYLE_ID = "abcm-servicecard-styles";
const CSS = `
.abcm-service {
  display: flex; flex-direction: column; gap: var(--space-4); align-items: center; text-align: center;
  background: color-mix(in oklch, var(--_hue, var(--accent-400)) 7%, var(--surface));
  border: 1.5px solid color-mix(in oklch, var(--_hue, var(--accent-400)) 16%, transparent);
  border-radius: var(--radius-2xl);
  padding: var(--space-8) var(--space-6) var(--space-6); position: relative; overflow: hidden; height: 100%;
  text-decoration: none; color: var(--text);
  transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out);
}
.abcm-service::before { content: ""; position: absolute; top: -40%; left: 50%; transform: translateX(-50%); width: 150%; aspect-ratio: 1;
  background: radial-gradient(circle, color-mix(in oklch, var(--_hue, var(--accent-400)) 20%, transparent), transparent 62%);
  opacity: 0; transition: opacity var(--dur-slow) var(--ease-out); pointer-events: none; }
.abcm-service:hover { transform: translateY(-8px); box-shadow: 0 24px 50px color-mix(in oklch, var(--_hue, var(--accent-400)) 24%, transparent); }
.abcm-service:hover::before { opacity: 1; }
.abcm-service__icon {
  width: 4em; height: 4em; border-radius: var(--radius-xl); flex: none; position: relative;
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--surface); color: var(--_hue, var(--accent-600));
  box-shadow: var(--shadow-sm), inset 0 0 0 1.5px color-mix(in oklch, var(--_hue, var(--accent-400)) 22%, transparent);
  transition: background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-spring);
}
.abcm-service:hover .abcm-service__icon { background: var(--_hue, var(--accent-400)); color: #fff; transform: rotate(-6deg) scale(1.08); }
.abcm-service__icon svg { width: 1.7em; height: 1.7em; }
.abcm-service__title { font-family: var(--font-display); font-weight: 700; font-size: var(--text-lg); margin: 0; color: var(--text); position: relative; }
.abcm-service__desc { font-size: var(--text-sm); line-height: var(--leading-normal); color: var(--text-muted); margin: 0; flex: 1; position: relative; }
.abcm-service__link { display: inline-flex; align-items: center; gap: 0.4em; font-family: var(--font-display); font-weight: 600; font-size: var(--text-sm); color: var(--_hue, var(--accent-700)); margin-top: var(--space-1); position: relative; }
.abcm-service__link svg { width: 1.1em; height: 1.1em; transition: transform var(--dur-base) var(--ease-out); }
.abcm-service:hover .abcm-service__link svg { transform: translateX(4px); }
`;

const HUES = {
  yellow: "var(--logo-yellow)", orange: "var(--logo-orange)", magenta: "var(--logo-magenta)",
  blue: "var(--logo-blue)", green: "var(--logo-green)", accent: "var(--accent-500)",
};
const Arrow = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>);

function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

export function ServiceCard({ icon, title, description, href, linkLabel = "En savoir plus", hue = "accent", className = "", style, ...rest }) {
  useStyles();
  const Tag = href ? "a" : "div";
  return (
    <Tag href={href} className={["abcm-service", className].filter(Boolean).join(" ")} style={{ "--_hue": HUES[hue] || hue, ...style }} {...rest}>
      {icon && <span className="abcm-service__icon">{icon}</span>}
      <h3 className="abcm-service__title">{title}</h3>
      {description && <p className="abcm-service__desc">{description}</p>}
      {href && <span className="abcm-service__link">{linkLabel} <Arrow /></span>}
    </Tag>
  );
}
