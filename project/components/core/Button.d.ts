import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. */
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  /** Size preset. */
  size?: "sm" | "md" | "lg";
  /** Icon node placed before the label. */
  iconLeft?: React.ReactNode;
  /** Icon node placed after the label. */
  iconRight?: React.ReactNode;
  /** Stretch to full container width. */
  block?: boolean;
  /** Render as a different element/component (e.g. "a"). */
  as?: React.ElementType;
  /** When set, renders an anchor by default. */
  href?: string;
  children?: React.ReactNode;
}

/**
 * Primary call-to-action button. Pill-shaped, Space Grotesk label.
 * Yellow `primary` for the main action; `secondary` (night blue) and
 * `outline` for supporting actions.
 *
 * @startingPoint section="Core" subtitle="Pill buttons in every variant" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
