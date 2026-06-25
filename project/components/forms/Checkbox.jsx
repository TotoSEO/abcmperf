import React from "react";

const STYLE_ID = "abcm-choice-styles";
const CSS = `
.abcm-choice { display: inline-flex; align-items: flex-start; gap: 0.65em; font-family: var(--font-sans); font-size: var(--text-sm); color: var(--text); cursor: pointer; line-height: 1.4; }
.abcm-choice input { position: absolute; opacity: 0; width: 0; height: 0; }
.abcm-choice__box {
  flex: none; width: 1.35em; height: 1.35em; border-radius: var(--radius-xs);
  border: var(--border-width-thick) solid var(--border-strong); background: var(--surface);
  display: inline-flex; align-items: center; justify-content: center; color: #fff;
  transition: background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out); margin-top: 0.05em;
}
.abcm-choice__box--radio { border-radius: 50%; }
.abcm-choice__box svg { width: 0.9em; height: 0.9em; opacity: 0; transform: scale(0.6); transition: all var(--dur-base) var(--ease-spring); }
.abcm-choice__dot { width: 0.55em; height: 0.55em; border-radius: 50%; background: var(--night); opacity: 0; transform: scale(0.4); transition: all var(--dur-base) var(--ease-spring); }
.abcm-choice:hover .abcm-choice__box { border-color: var(--neutral-400); }
.abcm-choice input:focus-visible + .abcm-choice__box { box-shadow: 0 0 0 4px var(--ring); }
.abcm-choice input:checked + .abcm-choice__box { background: var(--accent-400); border-color: var(--accent-400); }
.abcm-choice input:checked + .abcm-choice__box svg { opacity: 1; transform: scale(1); }
.abcm-choice input:checked + .abcm-choice__box--radio { background: var(--accent-400); }
.abcm-choice input:checked + .abcm-choice__box--radio .abcm-choice__dot { opacity: 1; transform: scale(1); }
.abcm-choice input:disabled ~ * { opacity: 0.5; }

/* Switch */
.abcm-switch { display: inline-flex; align-items: center; gap: 0.65em; font-family: var(--font-sans); font-size: var(--text-sm); color: var(--text); cursor: pointer; }
.abcm-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.abcm-switch__track {
  width: 2.6em; height: 1.5em; border-radius: var(--radius-pill); background: var(--neutral-300);
  position: relative; transition: background var(--dur-base) var(--ease-out); flex: none;
}
.abcm-switch__thumb {
  position: absolute; top: 0.15em; left: 0.15em; width: 1.2em; height: 1.2em; border-radius: 50%;
  background: #fff; box-shadow: var(--shadow-sm); transition: transform var(--dur-base) var(--ease-spring);
}
.abcm-switch input:checked + .abcm-switch__track { background: var(--accent-400); }
.abcm-switch input:checked + .abcm-switch__track .abcm-switch__thumb { transform: translateX(1.1em); }
.abcm-switch input:focus-visible + .abcm-switch__track { box-shadow: 0 0 0 4px var(--ring); }
.abcm-switch input:disabled + .abcm-switch__track { opacity: 0.5; }
`;

const Check = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6"/></svg>);

function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

export function Checkbox({ label, className = "", ...rest }) {
  useStyles();
  return (
    <label className={["abcm-choice", className].filter(Boolean).join(" ")}>
      <input type="checkbox" {...rest} />
      <span className="abcm-choice__box"><Check /></span>
      {label && <span>{label}</span>}
    </label>
  );
}

export function Radio({ label, className = "", ...rest }) {
  useStyles();
  return (
    <label className={["abcm-choice", className].filter(Boolean).join(" ")}>
      <input type="radio" {...rest} />
      <span className="abcm-choice__box abcm-choice__box--radio"><span className="abcm-choice__dot" /></span>
      {label && <span>{label}</span>}
    </label>
  );
}

export function Switch({ label, className = "", ...rest }) {
  useStyles();
  return (
    <label className={["abcm-switch", className].filter(Boolean).join(" ")}>
      <input type="checkbox" role="switch" {...rest} />
      <span className="abcm-switch__track"><span className="abcm-switch__thumb" /></span>
      {label && <span>{label}</span>}
    </label>
  );
}
