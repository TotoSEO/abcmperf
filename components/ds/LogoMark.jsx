import React from "react";

/** ABCM lockup: the 5-circle mark + wordmark. `src` points at the logo asset.
 *  `markOnly` hides the wordmark. Pass `as` (e.g. Next's Link) for routing. */
export function LogoMark({ src, markOnly = false, as, className = "", style, ...rest }) {
  const Tag = as || (rest.href ? "a" : "span");
  // Préfixe le basePath (GitHub Pages) pour l'asset statique servi en <img>.
  const logo = src || `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo-abcm-circles.png`;
  return (
    <Tag className={["abcm-logomark", className].filter(Boolean).join(" ")} style={{ fontSize: "1rem", ...style }} {...rest}>
      <img className="abcm-logomark__mark" src={logo} alt="ABCM Performances" />
      {!markOnly && (
        <span className="abcm-logomark__word">
          <span className="abcm-logomark__name">ABCM</span>
          <span className="abcm-logomark__sub">Performances</span>
        </span>
      )}
    </Tag>
  );
}
