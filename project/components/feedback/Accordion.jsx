import React from "react";

const STYLE_ID = "abcm-accordion-styles";
const CSS = `
.abcm-accordion { font-family: var(--font-sans); display: flex; flex-direction: column; gap: var(--space-3); }
.abcm-accordion__item { border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--surface); overflow: hidden; transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out); }
.abcm-accordion__item:hover { border-color: var(--border-strong); }
.abcm-accordion__item--open { border-color: transparent; box-shadow: var(--shadow-md); }
.abcm-accordion__head {
  appearance: none; width: 100%; background: transparent; border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: space-between; gap: var(--space-4);
  padding: var(--space-5); text-align: left;
  font-family: var(--font-display); font-weight: 600; font-size: var(--text-md); color: var(--text);
  transition: color var(--dur-base) var(--ease-out);
}
.abcm-accordion__head:hover { color: var(--accent-700); }
.abcm-accordion__item--open .abcm-accordion__head { color: var(--text); }
.abcm-accordion__icon { flex: none; width: 1.75em; height: 1.75em; border-radius: 50%; background: var(--surface-inset);
  display: inline-flex; align-items: center; justify-content: center; color: var(--text); transition: transform var(--dur-base) var(--ease-spring), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out); }
.abcm-accordion__icon svg { width: 0.9em; height: 0.9em; }
.abcm-accordion__item--open .abcm-accordion__icon { transform: rotate(135deg); background: var(--accent-400); color: var(--night); }
.abcm-accordion__panel { overflow: hidden; display: grid; grid-template-rows: 0fr; transition: grid-template-rows var(--dur-slow) var(--ease-out); }
.abcm-accordion__item--open .abcm-accordion__panel { grid-template-rows: 1fr; }
.abcm-accordion__inner { overflow: hidden; }
.abcm-accordion__body { padding: 0 var(--space-5) var(--space-5); color: var(--text-muted); line-height: var(--leading-relaxed); border-top: 1px solid var(--border); padding-top: var(--space-4); margin-top: 2px; }
`;

const Plus = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>);

function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

export function Accordion({ items = [], allowMultiple = false, defaultOpen = [], className = "" }) {
  useStyles();
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = (i) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };
  return (
    <div className={["abcm-accordion", className].filter(Boolean).join(" ")}>
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i} className={["abcm-accordion__item", isOpen && "abcm-accordion__item--open"].filter(Boolean).join(" ")}>
            <button className="abcm-accordion__head" aria-expanded={isOpen} onClick={() => toggle(i)}>
              <span>{it.title}</span>
              <span className="abcm-accordion__icon"><Plus /></span>
            </button>
            <div className="abcm-accordion__panel">
              <div className="abcm-accordion__inner">
                <div className="abcm-accordion__body">{it.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
