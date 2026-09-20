"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

/** Above-the-fold introduction: brand promise, primary CTAs and a decorative "product" panel. */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-950 text-white">
      {/* Ambient gradient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-[-10%] h-[28rem] w-[28rem] rounded-full bg-navy-600/40 blur-3xl" />
        <div className="absolute right-[-10%] top-1/4 h-[26rem] w-[26rem] rounded-full bg-accent-500/20 blur-3xl" />
      </div>

      <Container className="relative grid gap-16 py-24 sm:py-28 lg:grid-cols-2 lg:items-center lg:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          <motion.div variants={item}>
            <Badge tone="onDark">Soluciones tecnológicas a medida</Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Software Built
            <br />
            <span className="text-accent-300">Around Your</span>
            <br />
            Business
          </motion.h1>

          <motion.p variants={item} className="max-w-lg text-lg leading-relaxed text-slate-300">
            Transformamos los retos de tu negocio en plataformas digitales eficientes, escalables
            y diseñadas exclusivamente para potenciar tu crecimiento.
          </motion.p>

          <motion.div variants={item} className="flex flex-col gap-4 sm:flex-row">
            <Button href="#contacto" variant="primary" withArrow>
              Contáctanos
            </Button>
            <Button href="#portafolio" variant="outline">
              Ver Proyectos
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Decorative "product" window */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-2 shadow-soft backdrop-blur-sm">
            <div className="rounded-xl bg-navy-900/60 p-6">
              <div className="mb-6 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <div className="space-y-3">
                <div className="h-3 w-2/3 rounded-full bg-accent-400/40" />
                <div className="h-3 w-5/6 rounded-full bg-white/15" />
                <div className="h-3 w-1/2 rounded-full bg-white/15" />
                <div className="h-3 w-3/4 rounded-full bg-white/10" />
                <div className="mt-6 h-24 w-full rounded-lg border border-white/10 bg-gradient-to-br from-accent-500/20 to-transparent" />
                <div className="h-3 w-1/3 rounded-full bg-white/10" />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-soft sm:-left-10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950/5 text-navy-700">
              <Icon name="code" />
            </span>
            <div className="text-left">
              <p className="text-xs text-navy-700/60">Desarrollo Web</p>
              <p className="text-sm font-semibold text-navy-950">A Medida</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
