import * as React from "react";

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The headline number/text. */
  value: React.ReactNode;
  /** Accent-coloured prefix (e.g. "+"). */
  prefix?: React.ReactNode;
  /** Accent-coloured suffix (e.g. "%", "k"). */
  suffix?: React.ReactNode;
  /** Caption below the number. */
  label?: React.ReactNode;
  /** Colour the number with a logo-palette hue (or any CSS colour). */
  hue?: "yellow" | "orange" | "magenta" | "blue" | "green" | "accent" | string;
}

/** Big-number statistic with accent prefix/suffix and caption. */
export function StatCard(props: StatCardProps): JSX.Element;
