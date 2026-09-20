import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Icon } from "@/components/ui/icons";
import type { ValueProp } from "@/types";

const VALUE_PROPS: (ValueProp & { heading: string })[] = [
  {
    heading: "Misión",
    icon: "target",
    title: "Impulsamos tu operación con tecnología a la medida",
    description:
      "Ayudar a las empresas a escalar y optimizar sus procesos mediante soluciones de software a la medida, eficientes e innovadoras.",
  },
  {
    heading: "Visión",
    icon: "eye",
    title: "El socio tecnológico de confianza para tu transformación digital",
    description:
      "Posicionarnos como el socio tecnológico de confianza para negocios que buscan la transformación digital con código de alta calidad.",
  },
];

/** "Nosotros" section: Mission and Vision presented as matching cards. */
export function About() {
  return (
    <section id="nosotros" className="bg-white py-24 sm:py-28">
      <Container className="flex flex-col items-center gap-16">
        <FadeIn>
          <SectionHeading
            eyebrow="Nosotros"
            title="Construimos software con propósito claro"
            description="En Castor Code combinamos ingeniería sólida y visión de negocio para que cada línea de código aporte valor real a tu empresa."
          />
        </FadeIn>

        <div className="grid w-full gap-6 md:grid-cols-2">
          {VALUE_PROPS.map((value, index) => (
            <FadeIn key={value.heading} delay={index * 0.15} direction={index % 2 === 0 ? "left" : "right"}>
              <article className="flex h-full flex-col gap-5 rounded-2xl border border-navy-950/8 bg-white p-8 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950/5 text-navy-700">
                  <Icon name={value.icon === "target" ? "target" : "eye"} width={24} height={24} />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
                    {value.heading}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-navy-950">{value.title}</h3>
                </div>
                <p className="text-base leading-relaxed text-navy-700/70">{value.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
