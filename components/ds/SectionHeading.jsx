import React from "react";

export function SectionHeading({ eyebrow, title, description, align = "left", size = "md", as = "h2", className = "", ...rest }) {
  const Title = as;
  const cls = ["abcm-sh", align === "center" && "abcm-sh--center", size === "lg" && "abcm-sh--lg", className].filter(Boolean).join(" ");
  return (
    <div className={cls} {...rest}>
      {eyebrow && <span className="abcm-sh__eyebrow">{eyebrow}</span>}
      {title && <Title className="abcm-sh__title">{title}</Title>}
      {description && <p className="abcm-sh__desc">{description}</p>}
    </div>
  );
}
