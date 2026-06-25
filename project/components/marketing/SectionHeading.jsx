import React from "react";

const STYLE_ID = "abcm-sectionheading-styles";
const CSS = `
.abcm-sh { display: flex; flex-direction: column; gap: var(--space-3); max-width: 56ch; }
.abcm-sh--center { align-items: center; text-align: center; margin-inline: auto; }
.abcm-sh__eyebrow { display: inline-flex; align-items: center; gap: 0.65em; font-family: var(--font-mono); font-size: var(--text-2xs); letter-spacing: var(--tracking-caps); text-transform: uppercase; color: var(--accent-700); font-weight: 700; }
.abcm-sh__eyebrow::before { content: ""; width: 1.9em; height: 0.42em; flex: none; border-radius: var(--radius-pill); background: linear-gradient(90deg, var(--logo-yellow), var(--logo-orange), var(--logo-magenta), var(--logo-blue)); }
.abcm-sh--center .abcm-sh__eyebrow { flex-direction: column; gap: 0.7em; }
.abcm-sh__title { font-family: var(--font-display); font-weight: 700; letter-spacing: var(--tracking-tight); line-height: 1.08; color: var(--text); margin: 0; font-size: var(--text-2xl); }
.abcm-sh--lg .abcm-sh__title { font-size: var(--text-3xl); }
.abcm-sh__desc { font-size: var(--text-md); line-height: var(--leading-relaxed); color: var(--text-muted); margin: 0; }
.on-dark .abcm-sh__eyebrow, [data-theme="dark"] .abcm-sh__eyebrow { color: var(--accent-400); }
`;

function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

export function SectionHeading({ eyebrow, title, description, align = "left", size = "md", as = "h2", className = "", ...rest }) {
  useStyles();
  const Title = as;
  const cls = ["abcm-sh", align === "center" && "abcm-sh--center", size === "lg" && "abcm-sh--lg", className].filter(Boolean).join(" ");
  return (
    <div className={cls} {...rest}>
      {eyebrow && <span className="abcm-sh__eyebrow">{eyebrow}</span>}
      {title && <Title className="abcm-sh__title">{title}</Title>}
      {description && <p className="abcm-sh__desc">{description}</p>}
    </div>
  );
}
