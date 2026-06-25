import React from "react";

const STYLE_ID = "abcm-card-styles";
const CSS = `
.abcm-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);
  padding: var(--space-6); color: var(--text);
  transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
}
.abcm-card--pad-none { padding: 0; }
.abcm-card--pad-sm { padding: var(--space-4); }
.abcm-card--pad-lg { padding: var(--space-8); }
.abcm-card--flat { box-shadow: none; }
.abcm-card--elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.abcm-card--interactive { cursor: pointer; }
.abcm-card--interactive:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: transparent; }
.abcm-card--accent { border-top: 4px solid var(--accent-400); }
.abcm-card--center { text-align: center; display: flex; flex-direction: column; align-items: center; }
`;

function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

export function Card({ padding = "md", elevated = false, flat = false, interactive = false, accent = false, center = false, as = "div", className = "", children, ...rest }) {
  useStyles();
  const Tag = as;
  const cls = [
    "abcm-card",
    padding !== "md" && `abcm-card--pad-${padding}`,
    elevated && "abcm-card--elevated",
    flat && "abcm-card--flat",
    interactive && "abcm-card--interactive",
    accent && "abcm-card--accent",
    center && "abcm-card--center",
    className,
  ].filter(Boolean).join(" ");
  return <Tag className={cls} {...rest}>{children}</Tag>;
}
