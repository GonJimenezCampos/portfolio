import { projects, type Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";

const TYPE_LABEL: Record<Project["type"], string> = {
  professional: "Profesional",
  personal: "Personal",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:bg-primary/[0.02] transition-colors">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="space-y-1">
          <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-2">
            {TYPE_LABEL[project.type]}
          </span>
          <h3 className="font-semibold text-foreground text-lg leading-tight">
            {project.title}
          </h3>
        </div>

        {/* External links */}
        {project.links.length > 0 && (
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Highlights */}
      <ul className="space-y-2 mb-6">
        {project.highlights.map((item, i) => (
          <li
            key={i}
            className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed"
          >
            <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      {/* Stack tags — pushed to bottom */}
      <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-border">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-0.5 rounded-md text-xs font-mono text-muted-foreground bg-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <FadeIn>
          <div className="mb-16 space-y-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary">
              04. Proyectos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Lo que he construido
            </h2>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 100}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
