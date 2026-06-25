import * as React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Optional category hue dot — a logo-palette key or any CSS colour. */
  hue?: "yellow" | "orange" | "magenta" | "blue" | "green" | string;
  /** Active (selected) state — filled night blue. */
  active?: boolean;
  /** Show a remove "×"; called when clicked. */
  onRemove?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

/**
 * Category / filter chip. Optional logo-palette hue dot, selectable
 * `active` state, and an optional remove control.
 */
export function Tag(props: TagProps): JSX.Element;
