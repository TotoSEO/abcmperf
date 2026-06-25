import * as React from "react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Colour role + default icon. */
  variant?: "info" | "success" | "warning" | "danger";
  /** Bold title line. */
  title?: React.ReactNode;
  /** Override the default icon. */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/** Inline callout / notice with a leading status icon. */
export function Alert(props: AlertProps): JSX.Element;
