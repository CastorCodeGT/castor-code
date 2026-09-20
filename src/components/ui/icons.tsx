import type { SVGProps } from "react";

export type IconName =
  | "github"
  | "instagram"
  | "target"
  | "eye"
  | "spark"
  | "code"
  | "arrow-right"
  | "menu"
  | "close"
  | "layers";

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

const paths: Record<IconName, React.ReactNode> = {
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.35 4.68-4.58 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  ),
  instagram: ( // <-- Ícono de Instagram agregado
    <g fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="4" ry="4" />
      <circle cx="12" cy="12" r="3" />
      <line x1="16.5" y1="7.5" x2="16.5" y2="7.5" />
    </g>
  ),
  target: (
    <g fill="none" stroke="currentColor" strokeWidth={1.6}>
      <circle cx={12} cy={12} r={8} />
      <circle cx={12} cy={12} r={4.2} />
      <circle cx={12} cy={12} r={0.6} fill="currentColor" />
    </g>
  ),
  eye: (
    <g fill="none" stroke="currentColor" strokeWidth={1.6}>
      <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
      <circle cx={12} cy={12} r={2.8} />
    </g>
  ),
  spark: (
    <path d="M12 2.5c.5 3.6 1.6 6.2 3.5 8.1 1.9 1.9 4.5 3 8.1 3.5-3.6.5-6.2 1.6-8.1 3.5-1.9 1.9-3 4.5-3.5 8.1-.5-3.6-1.6-6.2-3.5-8.1-1.9-1.9-4.5-3-8.1-3.5 3.6-.5 6.2-1.6 8.1-3.5 1.9-1.9 3-4.5 3.5-8.1Z" />
  ),
  code: (
    <g fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 8-4.5 4L9 16" />
      <path d="m15 8 4.5 4-4.5 4" />
    </g>
  ),
  "arrow-right": (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14m-6-6 6 6-6 6"
    />
  ),
  menu: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      d="M4 7h16M4 12h16M4 17h16"
    />
  ),
  close: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      d="M6 6l12 12M18 6 6 18"
    />
  ),
  layers: (
    <g fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round">
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </g>
  ),
};

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={20}
      height={20}
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
