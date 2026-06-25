import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Inner padding preset. */
  padding?: "none" | "sm" | "md" | "lg";
  /** Stronger drop shadow, no border. */
  elevated?: boolean;
  /** No shadow. */
  flat?: boolean;
  /** Lift + shadow on hover (use for clickable cards). */
  interactive?: boolean;
  /** Yellow accent bar along the top edge. */
  accent?: boolean;
  /** Center all content (text-align + flex column align-items center). */
  center?: boolean;
  /** Element/tag to render. */
  as?: React.ElementType;
  children?: React.ReactNode;
}

/**
 * Rounded surface container — the base for most content blocks.
 * `interactive` adds the hover-lift used by clickable cards.
 *
 * @startingPoint section="Core" subtitle="Surface container with variants" viewport="700x260"
 */
export function Card(props: CardProps): JSX.Element;
