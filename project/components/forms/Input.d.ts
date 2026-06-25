import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label rendered above the control. */
  label?: React.ReactNode;
  /** Helper text below the field. */
  hint?: React.ReactNode;
  /** Error message — turns the field red and replaces the hint. */
  error?: React.ReactNode;
  /** Marks the field required (adds a red asterisk). */
  required?: boolean;
  /** Leading icon node. */
  icon?: React.ReactNode;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
}

/** Text input with label, hint, error and optional leading icon. */
export function Input(props: InputProps): JSX.Element;
/** Multi-line text input — same label/hint/error contract as Input. */
export function Textarea(props: TextareaProps): JSX.Element;
