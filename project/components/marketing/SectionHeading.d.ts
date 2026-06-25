import * as React from "react";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mono overline above the title. */
  eyebrow?: React.ReactNode;
  /** Main heading text. */
  title?: React.ReactNode;
  /** Supporting paragraph. */
  description?: React.ReactNode;
  /** Alignment. */
  align?: "left" | "center";
  /** Title size. */
  size?: "md" | "lg";
  /** Heading tag for the title. */
  as?: React.ElementType;
}

/**
 * Section header: mono eyebrow + display title + description.
 * The standard way to open a marketing section.
 *
 * @startingPoint section="Marketing" subtitle="Section header block" viewport="700x220"
 */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
