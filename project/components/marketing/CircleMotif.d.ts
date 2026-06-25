import * as React from "react";

export interface CircleMotifProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Circle diameter in px. */
  size?: number;
  /** Overlap fraction between circles (0–0.6). */
  overlap?: number;
  /** Blend mode — "screen" on dark, "multiply" on light. */
  blend?: "screen" | "multiply";
  /** Circle opacity. */
  opacity?: number;
  /** How many of the 5 logo circles to draw (1–5). */
  count?: number;
}

/** The signature ABCM overlapping-circle motif — decorative brand device. */
export function CircleMotif(props: CircleMotifProps): JSX.Element;
