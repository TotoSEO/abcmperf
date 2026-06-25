import React from "react";

const COLORS = ["var(--logo-yellow)", "var(--logo-orange)", "var(--logo-magenta)", "var(--logo-blue)", "var(--logo-green)"];

/** The signature 5-circle motif. `blend` "screen" on dark, "multiply" on light. */
export function CircleMotif({ size = 120, overlap = 0.28, blend = "screen", opacity = 0.92, count = 5, className = "", style, ...rest }) {
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
