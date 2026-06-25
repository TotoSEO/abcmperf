import React from "react";

export function Badge({ variant = "neutral", solid = false, dot = false, className = "", children, ...rest }) {
  const cls = ["abcm-badge", `abcm-badge--${variant}`, solid && "abcm-badge--solid", className].filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      {dot && <span className="abcm-badge__dot" />}
      {children}
    </span>
  );
}
