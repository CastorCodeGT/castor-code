"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const INITIAL_VALUES: ContactFormValues = { name: "", email: "", message: "" };

type SubmitStatus = "idle" | "submitting" | "success";

/** Contact section: pitch + a lightweight, controlled contact form. */
export function Contact() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  function handleChange(field: keyof ContactFormValues) {
    return (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    // TODO: wire up to a real endpoint (API route, form service, etc.).
    window.setTimeout(() => {
      setStatus("success");
      setValues(INITIAL_VALUES);
    }, 600);
  }

  return (
    <section id="contacto" className="bg-navy-950 py-24 text-white sm:py-28">
      <Container className="grid gap-16 lg:grid-cols-2 lg:items-start">
        <FadeIn direction="left">
          <SectionHeading
            align="left"
            tone="onDark"
            eyebrow="Contacto"
            title="Hablemos de tu próximo proyecto"
            description="Cuéntanos qué necesita tu negocio y te contactaremos para diseñar una solución de software a la medida."
          />
        </FadeIn>

        <FadeIn direction="right" delay={0.1}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={values.name}
                onChange={handleChange("name")}
                placeholder="Tu nombre completo"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition-colors focus:border-accent-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={values.email}
                onChange={handleChange("email")}
                placeholder="tucorreo@empresa.com"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition-colors focus:border-accent-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={values.message}
                onChange={handleChange("message")}
                placeholder="Cuéntanos sobre tu proyecto"
                className="resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition-colors focus:border-accent-400"
              />
            </div>

            <Button type="submit" variant="primary" disabled={status === "submitting"} className="w-full sm:w-fit">
              {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
            </Button>

            {status === "success" && (
              <p className="text-sm font-medium text-accent-300">
                ¡Gracias! Recibimos tu mensaje y te contactaremos pronto.
              </p>
            )}
          </form>
        </FadeIn>
      </Container>
    </section>
  );
}
