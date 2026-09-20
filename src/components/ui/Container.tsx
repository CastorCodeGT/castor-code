import type { ElementType, HTMLAttributes, ReactNode } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  /** Render as a different element, e.g. "section" or "header". Defaults to "div". */
  as?: ElementType;
}

/** Centers content and applies the page's consistent max-width + responsive gutters. */
export function Container({ children, as: Tag = "div", className = "", ...rest }: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
