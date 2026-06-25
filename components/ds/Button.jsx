import React from "react";

export function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  block = false,
  as,
  className = "",
  children,
  ...rest
}) {
  const Tag = as || (rest.href ? "a" : "button");
  const cls = [
    "abcm-btn",
    `abcm-btn--${variant}`,
    size !== "md" && `abcm-btn--${size}`,
    block && "abcm-btn--block",
    className,
  ].filter(Boolean).join(" ");
  return (
    <Tag className={cls} {...rest}>
      {iconLeft && <span className="abcm-btn__icon">{iconLeft}</span>}
      {children && <span>{children}</span>}
      {iconRight && <span className="abcm-btn__icon">{iconRight}</span>}
    </Tag>
  );
}
