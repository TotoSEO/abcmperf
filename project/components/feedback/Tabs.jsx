import React from "react";

const STYLE_ID = "abcm-tabs-styles";
const CSS = `
.abcm-tabs { font-family: var(--font-sans); }
.abcm-tabs__list { display: inline-flex; gap: 4px; padding: 5px; background: var(--surface-inset); border-radius: var(--radius-pill); }
.abcm-tabs__list--line { background: transparent; padding: 0; gap: 8px; border-bottom: 1px solid var(--border); border-radius: 0; width: 100%; }
.abcm-tab {
  appearance: none; border: none; background: transparent; cursor: pointer;
  font-family: var(--font-display); font-weight: 600; font-size: var(--text-sm); color: var(--text-muted);
  padding: 0.6em 1.1em; border-radius: var(--radius-pill); white-space: nowrap;
  transition: background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out);
}
.abcm-tab:hover { color: var(--text); }
.abcm-tab--active { background: var(--surface); color: var(--text); box-shadow: var(--shadow-sm); }
.abcm-tabs__list--line .abcm-tab { border-radius: 0; padding: 0.7em 0.4em; position: relative; }
.abcm-tabs__list--line .abcm-tab--active { background: transparent; box-shadow: none; color: var(--text); }
.abcm-tabs__list--line .abcm-tab--active::after { content: ""; position: absolute; left: 0; right: 0; bottom: -1px; height: 3px; background: var(--accent-400); border-radius: 3px 3px 0 0; }
.abcm-tabs__panel { padding-top: var(--space-5); }
`;

function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

export function Tabs({ tabs = [], value, defaultValue, onChange, variant = "pill", className = "" }) {
  useStyles();
  const ids = tabs.map((t) => (typeof t === "string" ? t : t.id));
  const [internal, setInternal] = React.useState(defaultValue ?? ids[0]);
  const active = value ?? internal;
  const select = (id) => { setInternal(id); onChange && onChange(id); };
  const current = tabs.find((t) => (typeof t === "string" ? t : t.id) === active);
  return (
    <div className={["abcm-tabs", className].filter(Boolean).join(" ")}>
      <div className={["abcm-tabs__list", variant === "line" && "abcm-tabs__list--line"].filter(Boolean).join(" ")} role="tablist">
        {tabs.map((t) => {
          const tab = typeof t === "string" ? { id: t, label: t } : t;
          return (
            <button key={tab.id} role="tab" aria-selected={active === tab.id}
              className={["abcm-tab", active === tab.id && "abcm-tab--active"].filter(Boolean).join(" ")}
              onClick={() => select(tab.id)}>
              {tab.label}
            </button>
          );
        })}
      </div>
      {current && typeof current !== "string" && current.content != null && (
        <div className="abcm-tabs__panel" role="tabpanel">{current.content}</div>
      )}
    </div>
  );
}
