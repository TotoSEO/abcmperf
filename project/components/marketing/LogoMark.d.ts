import * as React from "react";

export interface LogoMarkProps extends React.HTMLAttributes<HTMLElement> {
  /** Path to the circle-logo asset, relative to the page. */
  src?: string;
  /** Hide the wordmark, show only the circles. */
  markOnly?: boolean;
  /** Render as a link. */
  href?: string;
}

/** ABCM brand lockup — 5-circle mark plus "ABCM / Performances" wordmark. */
export function LogoMark(props: LogoMarkProps): JSX.Element;
