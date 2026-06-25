import React from "react";

export function IconButton({ variant = "ghost", size = "md", square = false, label, className = "", children, ...rest }) {
  const cls = ["abcm-iconbtn", `abcm-iconbtn--${variant}`, size !== "md" && `abcm-iconbtn--${size}`, square && "abcm-iconbtn--square", className].filter(Boolean).join(" ");
  return <button type="button" className={cls} aria-label={label} {...rest}>{children}</button>;
}
