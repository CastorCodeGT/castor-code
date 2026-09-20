import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";
import { NAV_LINKS, SOCIAL_LINKS } from "@/data/navigation";

/** Bottom bar: brand mark, quick links, social links and copyright. Pairs visually with <Contact />. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-slate-300">
      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/castorcode.svg"
            alt="Castor Code"
            width={28}
            height={23}
            className="h-6 w-auto invert"
          />
          <span className="text-sm font-semibold text-white">Castor Code</span>
        </div>

        <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-slate-300 transition-colors hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Icon name={social.icon} width={16} height={16} />
            </a>
          ))}
        </div>
      </Container>

      <Container className="border-t border-white/5 py-6">
        <p className="text-center text-xs text-slate-400 sm:text-left">
          © {year} Castor Code. Software Built Around Your Business. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
