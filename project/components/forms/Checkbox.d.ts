import * as React from "react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label rendered to the right. */
  label?: React.ReactNode;
}
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

/** Checkbox with yellow checked fill. */
export function Checkbox(props: CheckboxProps): JSX.Element;
/** Radio button — group by shared `name`. */
export function Radio(props: RadioProps): JSX.Element;
/** Toggle switch with yellow active track. */
export function Switch(props: SwitchProps): JSX.Element;
