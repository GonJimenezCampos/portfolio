import { education, type EducationEntry } from "@/data/education";
import { GraduationCap, Award } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";

const TYPE_CONFIG: Record<
  EducationEntry["type"],
  { icon: React.ReactNode; label: string }
> = {
  degree: {
    icon: <GraduationCap size={16} />,
    label: "Titulación",
  },
  certification: {
    icon: <Award size={16} />,
    label: "Certificación",
  },
};

export function Education() {
  return (
    <section id="formacion" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <div className="mb-16 space-y-2">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary">
            05. Formación
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Educación
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {education.map((entry, i) => {
            const config = TYPE_CONFIG[entry.type];
            return (
              <FadeIn key={entry.title} delay={i * 100}>
              <div
                className="rounded-xl border border-border bg-card p-6 space-y-4"
              >
                {/* Type badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-medium">
                  {config.icon}
                  {config.label}
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground leading-snug">
                    {entry.title}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {entry.institution}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {entry.period}
                  </p>
                </div>

                {entry.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {entry.description}
                  </p>
                )}
              </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
