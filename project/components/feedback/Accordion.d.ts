import * as React from "react";

export interface AccordionItem {
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** Allow several panels open at once. */
  allowMultiple?: boolean;
  /** Indices open on mount. */
  defaultOpen?: number[];
  className?: string;
}

/** Expandable FAQ-style list. Plus icon rotates to a yellow × when open. */
export function Accordion(props: AccordionProps): JSX.Element;
