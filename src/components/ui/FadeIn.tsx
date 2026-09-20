"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export interface FadeInProps {
  children: ReactNode;
  /** Delay in seconds before the animation starts, useful for staggering siblings. */
  delay?: number;
  /** Direction the content slides in from. Defaults to a subtle upward slide. */
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

const OFFSETS: Record<NonNullable<FadeInProps["direction"]>, { x?: number; y?: number }> = {
  up: { y: 24 },
  left: { x: -24 },
  right: { x: 24 },
  none: {},
};

/** Fades + slides content into view once it scrolls into the viewport. */
export function FadeIn({ children, delay = 0, direction = "up", className }: FadeInProps) {
  const offset = OFFSETS[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
