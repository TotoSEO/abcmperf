import React from "react";

const STYLE_ID = "abcm-logomark-styles";
const CSS = `
.abcm-logomark { display: inline-flex; align-items: center; gap: 0.6em; text-decoration: none; }
.abcm-logomark__mark { height: 1.9em; width: auto; display: block; flex: none; }
.abcm-logomark__word { display: flex; flex-direction: column; line-height: 1; }
.abcm-logomark__name { font-family: var(--font-display); font-weight: 700; font-size: 1.25em; letter-spacing: -0.02em; color: var(--text); }
.abcm-logomark__sub { font-family: var(--font-mono); font-size: 0.55em; letter-spacing: 0.2em; text-transform: uppercase; color: var(--text-muted); margin-top: 0.35em; }
.on-dark .abcm-logomark__name, [data-theme="dark"] .abcm-logomark__name { color: #fff; }
.on-dark .abcm-logomark__sub, [data-theme="dark"] .abcm-logomark__sub { color: var(--accent-400); }
`;

function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

/** ABCM lockup: the 5-circle mark + wordmark. Pass `src` pointing at the
 *  logo asset (relative to the page). `markOnly` hides the wordmark. */
export function LogoMark({ src = "assets/logo-abcm-circles.png", markOnly = false, href, className = "", style, ...rest }) {
  useStyles();
  const Tag = href ? "a" : "span";
  return (
    <Tag href={href} className={["abcm-logomark", className].filter(Boolean).join(" ")} style={{ fontSize: "1rem", ...style }} {...rest}>
      <img className="abcm-logomark__mark" src={src} alt="ABCM Performances" />
      {!markOnly && (
        <span className="abcm-logomark__word">
          <span className="abcm-logomark__name">ABCM</span>
          <span className="abcm-logomark__sub">Performances</span>
        </span>
      )}
    </Tag>
  );
}
