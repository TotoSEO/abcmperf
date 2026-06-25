import * as React from "react";

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Field label. */
  label?: React.ReactNode;
  /** Options as strings or {value,label}. Omit to pass <option> children. */
  options?: Array<string | SelectOption>;
  /** Disabled first option used as a placeholder. */
  placeholder?: string;
}

/** Styled native select with custom chevron. */
export function Select(props: SelectProps): JSX.Element;
