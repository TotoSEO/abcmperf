"use client";
import React from "react";

const Plus = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>);

export function Accordion({ items = [], allowMultiple = false, defaultOpen = [], className = "" }) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
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
