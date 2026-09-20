import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Icon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

/** Featured case studies. Currently a single active success story, with more in the pipeline. */
export function Portfolio() {
  return (
    <section id="portafolio" className="bg-navy-950/2 py-24 sm:py-28">
      <Container className="flex flex-col items-center gap-16">
        <FadeIn>
          <SectionHeading
            eyebrow="Portafolio"
            title="Proyectos destacados"
            description="Cada proyecto es una solución construida a la medida de las necesidades reales de nuestro cliente."
          />
        </FadeIn>

        <div className="grid w-full gap-8 sm:grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <FadeIn direction="left">
            <ProjectCard project={PROJECTS[0]} />
          </FadeIn>

          <FadeIn direction="right" delay={0.15} className="flex justify-center lg:justify-start">
            <div className="flex max-w-sm flex-col items-start gap-4 rounded-2xl border border-dashed border-navy-950/15 p-8 text-left">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950/5 text-navy-700">
                <Icon name="layers" width={22} height={22} />
              </span>
              <Badge>Más proyectos en desarrollo...</Badge>
              <p className="text-base leading-relaxed text-navy-700/70">
                Estamos construyendo nuevas soluciones a la medida. Muy pronto añadiremos más
                casos de éxito a este portafolio.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
