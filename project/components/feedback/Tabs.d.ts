import * as React from "react";

export interface TabItem {
  id: string;
  label: React.ReactNode;
  /** Optional panel content rendered below the list. */
  content?: React.ReactNode;
}

export interface TabsProps {
  /** Tabs as strings or {id,label,content}. */
  tabs: Array<string | TabItem>;
  /** Controlled active id. */
  value?: string;
  /** Initial active id (uncontrolled). */
  defaultValue?: string;
  /** Fired with the new active id. */
  onChange?: (id: string) => void;
  /** Pill segmented (default) or underlined line tabs. */
  variant?: "pill" | "line";
  className?: string;
}

/** Tabbed navigation — segmented pill or underlined line style. */
export function Tabs(props: TabsProps): JSX.Element;
