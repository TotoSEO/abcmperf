import * as React from "react";

export interface ServiceCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Icon node (use a Lucide SVG). */
  icon?: React.ReactNode;
  /** Service name. */
  title: React.ReactNode;
  /** Short description. */
  description?: React.ReactNode;
  /** Link target — renders the "En savoir plus" affordance. */
  href?: string;
  /** Link label. */
  linkLabel?: string;
  /** Categorical hue from the logo palette. */
  hue?: "yellow" | "orange" | "magenta" | "blue" | "green" | "accent" | string;
}

/**
 * Service / offering card with a tinted icon tile and a hover underline in
 * its category hue. The workhorse of the ABCM "Nos services" grid.
 *
 * @startingPoint section="Marketing" subtitle="Service offering card" viewport="380x300"
 */
export function ServiceCard(props: ServiceCardProps): JSX.Element;
