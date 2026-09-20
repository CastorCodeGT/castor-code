import type { ReactNode } from "react";
import { Badge } from "./Badge";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "onDark" | "onLight";
}

/** Consistent eyebrow + title + description block used at the top of every section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "onLight",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleColor = tone === "onDark" ? "text-white" : "text-navy-950";
  const descriptionColor = tone === "onDark" ? "text-slate-300" : "text-navy-700/70";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && <Badge tone={tone}>{eyebrow}</Badge>}
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${titleColor}`}>{title}</h2>
      {description && <p className={`text-base leading-relaxed sm:text-lg ${descriptionColor}`}>{description}</p>}
    </div>
  );
}
