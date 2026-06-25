import * as React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. Falls back to initials when omitted. */
  src?: string;
  /** Full name — drives initials and (with `hue`) the fallback colour. */
  name?: string;
  /** Size preset. */
  size?: "sm" | "md" | "lg" | "xl";
  /** Yellow accent ring. */
  ring?: boolean;
  /** Tint the initials fallback from the logo palette. */
  hue?: boolean;
}

/**
 * Round user avatar — image or auto initials fallback (night-blue, or a
 * logo-palette tint when `hue` is set).
 */
export function Avatar(props: AvatarProps): JSX.Element;
