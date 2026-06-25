import React from "react";

export function Card({ padding = "md", elevated = false, flat = false, interactive = false, accent = false, center = false, as = "div", className = "", children, ...rest }) {
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
