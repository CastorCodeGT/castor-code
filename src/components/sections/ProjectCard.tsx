import type { Project } from "@/types";
import Image from "next/image";

export interface ProjectCardProps {
  project: Project;
}

/** Elegant, reusable case-study card. Ready to repeat once more projects ship. */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-navy-950/8 bg-white shadow-card transition-shadow hover:shadow-soft">
      <div className="relative aspect-16/10 w-full overflow-hidden bg-navy-950/5">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          quality={100} // Fuerza a Next.js a no comprimir la imagen
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1000px" // Pide una resolución mayor en pantallas grandes
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-4 p-8">
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-navy-950/5 px-3 py-1 text-xs font-semibold text-navy-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
            {project.client}
          </p>
          <h3 className="mt-1 text-xl font-bold text-navy-950">{project.title}</h3>
        </div>

        <p className="text-base leading-relaxed text-navy-700/70">{project.description}</p>
      </div>
    </article>
  );
}
