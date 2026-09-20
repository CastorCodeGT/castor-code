import type { ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  /** "onDark" for use over the navy hero, "onLight" for use over white sections. */
  tone?: "onDark" | "onLight";
  className?: string;
}

export function Badge({ children, tone = "onLight", className = "" }: BadgeProps) {
  const toneStyles =
    tone === "onDark"
      ? "bg-white/10 text-accent-300 ring-1 ring-inset ring-white/20"
      : "bg-navy-900/5 text-navy-700 ring-1 ring-inset ring-navy-900/10";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide ${toneStyles} ${className}`}
    >
      {children}
    </span>
  );
}
