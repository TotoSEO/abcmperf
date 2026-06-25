import * as React from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. */
  variant?: "primary" | "secondary" | "outline" | "ghost";
  /** Size preset. */
  size?: "sm" | "md" | "lg";
  /** Rounded square instead of a circle. */
  square?: boolean;
  /** Accessible label (sets aria-label). */
  label?: string;
  /** The icon node. */
  children?: React.ReactNode;
}

/**
 * Icon-only button. Circular by default. Always pass `label` for a11y.
 */
export function IconButton(props: IconButtonProps): JSX.Element;
