import React from "react";

const STYLE_ID = "abcm-avatar-styles";
const CSS = `
.abcm-avatar {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: 50%; overflow: hidden; flex: none; position: relative;
  font-family: var(--font-display); font-weight: 700; color: #fff;
  background: var(--night); user-select: none;
}
.abcm-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
.abcm-avatar--sm { width: 32px; height: 32px; font-size: 12px; }
.abcm-avatar--md { width: 44px; height: 44px; font-size: 16px; }
.abcm-avatar--lg { width: 64px; height: 64px; font-size: 22px; }
.abcm-avatar--xl { width: 96px; height: 96px; font-size: 32px; }
.abcm-avatar__ring { box-shadow: 0 0 0 2px var(--surface), 0 0 0 4px var(--accent-400); }
`;

const HUES = ["var(--logo-yellow)", "var(--logo-orange)", "var(--logo-magenta)", "var(--logo-blue)", "var(--logo-green)"];

function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("").toUpperCase();
}

export function Avatar({ src, name = "", size = "md", ring = false, hue, className = "", style, ...rest }) {
  useStyles();
  const cls = ["abcm-avatar", `abcm-avatar--${size}`, ring && "abcm-avatar__ring", className].filter(Boolean).join(" ");
  const bg = hue ? (HUES[name.charCodeAt(0) % HUES.length] && hue) : undefined;
  const tint = hue ? HUES[(name.charCodeAt(0) || 0) % HUES.length] : undefined;
  return (
    <span className={cls} style={{ background: tint, ...style }} {...rest}>
      {src ? <img src={src} alt={name} /> : initials(name)}
    </span>
  );
}
