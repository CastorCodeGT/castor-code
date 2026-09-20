/**
 * Shared domain types for the Castor Code landing page.
 * Component-specific prop interfaces live next to their component;
 * types re-used across multiple components/data files live here.
 */

export interface NavLink {
  /** Visible label in the navbar / footer. */
  label: string;
  /** In-page anchor (e.g. "#nosotros") or external path. */
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  /** Icon key rendered via the shared <Icon /> map. */
  icon: "github" | "instagram";
}

export interface Project {
  id: string;
  /** Client / organization name. */
  client: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  status: "live" | "in-progress";
}

export interface ValueProp {
  title: string;
  description: string;
  icon: "target" | "eye" | "spark";
}
