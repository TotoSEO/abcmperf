import React from "react";

/** ABCM lockup: the 5-circle mark + wordmark. `src` points at the logo asset.
 *  `markOnly` hides the wordmark. Pass `as` (e.g. Next's Link) for routing. */
export function LogoMark({ src = "/logo-abcm-circles.png", markOnly = false, as, className = "", style, ...rest }) {
  const Tag = as || (rest.href ? "a" : "span");
  return (
    <Tag className={["abcm-logomark", className].filter(Boolean).join(" ")} style={{ fontSize: "1rem", ...style }} {...rest}>
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
