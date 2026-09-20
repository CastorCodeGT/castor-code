"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { NAV_LINKS } from "@/data/navigation";
import type { NavLink } from "@/types";

export interface NavbarProps {
  links?: NavLink[];
}

export function Navbar({ links = NAV_LINKS }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-950/5 bg-white/80 backdrop-blur-md">
      <Container as="nav" className="flex h-20 items-center justify-between">
        <Link href="#top" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <Image src="/castorcode.svg" alt="Castor Code" width={36} height={30} className="h-8 w-auto" priority />
          <span className="text-lg font-bold tracking-tight text-navy-950">
            Castor<span className="text-navy-600">Code</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-navy-800/80 transition-colors hover:text-navy-950"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="#contacto" variant="secondary">
            Cotizar Proyecto
          </Button>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy-950 md:hidden"
        >
          <Icon name={isOpen ? "close" : "menu"} />
        </button>
      </Container>

      {isOpen && (
        <div className="border-t border-navy-950/5 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-navy-800 hover:bg-navy-950/5"
              >
                {link.label}
              </a>
            ))}
            <Button href="#contacto" variant="secondary" className="mt-2 w-full" onClick={() => setIsOpen(false)}>
              Cotizar Proyecto
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
