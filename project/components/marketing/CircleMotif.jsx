import React from "react";

const STYLE_ID = "abcm-motif-styles";
const CSS = `
.abcm-motif { display: inline-flex; align-items: center; pointer-events: none; }
.abcm-motif__c { border-radius: 50%; mix-blend-mode: screen; }
.abcm-motif--multiply .abcm-motif__c { mix-blend-mode: multiply; }
`;

const COLORS = ["var(--logo-yellow)", "var(--logo-orange)", "var(--logo-magenta)", "var(--logo-blue)", "var(--logo-green)"];

function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

/** The signature 5-circle motif. `blend` defaults to "screen" (use on dark
 *  backgrounds); use "multiply" on light backgrounds. `size` is the circle
 *  diameter in px; `overlap` is the fraction circles overlap (0–0.6). */
export function CircleMotif({ size = 120, overlap = 0.28, blend = "screen", opacity = 0.92, count = 5, className = "", style, ...rest }) {
  useStyles();
  const colors = COLORS.slice(0, Math.max(1, Math.min(count, 5)));
  return (
    <span className={["abcm-motif", blend === "multiply" && "abcm-motif--multiply", className].filter(Boolean).join(" ")} style={style} aria-hidden="true" {...rest}>
      {colors.map((c, i) => (
        <span key={i} className="abcm-motif__c" style={{
          width: size, height: size, background: c, opacity,
          marginLeft: i === 0 ? 0 : -(size * overlap),
        }} />
      ))}
    </span>
  );
}
