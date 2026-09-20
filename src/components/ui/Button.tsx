import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "./icons";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface BaseButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  /** Show a trailing arrow icon. */
  withArrow?: boolean;
  className?: string;
}

export type ButtonProps = BaseButtonProps &
  (
    | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">)
    | ({ href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">)
  );

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-navy-900 hover:bg-accent-300/90 shadow-soft",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 shadow-soft",
  outline:
    "border border-white/30 text-white hover:bg-white/10",
  ghost:
    "border border-navy-900/15 text-navy-900 hover:bg-navy-900/5",
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 disabled:opacity-60 disabled:pointer-events-none";

/** Shared call-to-action control. Renders an <a> when `href` is given, otherwise a <button>. */
export function Button({ variant = "primary", withArrow, children, className = "", ...rest }: ButtonProps) {
  const classes = `${BASE} ${VARIANT_STYLES[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
        {withArrow && <Icon name="arrow-right" width={16} height={16} />}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonRest}>
      {children}
      {withArrow && <Icon name="arrow-right" width={16} height={16} />}
    </button>
  );
}
