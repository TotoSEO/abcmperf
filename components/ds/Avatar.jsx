import React from "react";

const HUES = ["var(--logo-yellow)", "var(--logo-orange)", "var(--logo-magenta)", "var(--logo-blue)", "var(--logo-green)"];

function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("").toUpperCase();
}

export function Avatar({ src, name = "", size = "md", ring = false, hue, className = "", style, ...rest }) {
  const cls = ["abcm-avatar", `abcm-avatar--${size}`, ring && "abcm-avatar__ring", className].filter(Boolean).join(" ");
  const tint = hue ? HUES[(name.charCodeAt(0) || 0) % HUES.length] : undefined;
  return (
    <span className={cls} style={{ background: tint, ...style }} {...rest}>
      {src ? <img src={src} alt={name} /> : initials(name)}
    </span>
  );
}
