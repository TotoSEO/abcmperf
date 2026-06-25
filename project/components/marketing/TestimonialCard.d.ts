import * as React from "react";

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The review text. */
  quote?: React.ReactNode;
  /** Reviewer name. */
  author: string;
  /** Source line (e.g. "Google · Avis vérifié"). */
  source?: React.ReactNode;
  /** Avatar image URL (falls back to initials). */
  avatar?: string;
  /** Star count 0–5. */
  rating?: number;
}

/** Client testimonial card — star rating, quote, avatar + source line. */
export function TestimonialCard(props: TestimonialCardProps): JSX.Element;
