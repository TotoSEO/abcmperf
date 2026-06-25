import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Colour role. */
  variant?: "neutral" | "accent" | "success" | "info" | "warning" | "danger";
  /** Filled (solid) instead of soft tint. */
  solid?: boolean;
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}

/**
 * Small status / metadata pill in Space Mono. Soft tint by default;
 * `solid` for high-emphasis states.
 */
export function Badge(props: BadgeProps): JSX.Element;
