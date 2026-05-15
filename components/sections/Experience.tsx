import { getTranslations } from "next-intl/server";
import { experience } from "@/data/experience";
import { MapPin } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";

type TExperienceEntry = { role: string; period: string; bullets: string[] };

export async function Experience() {
  const t = await getTranslations("experience");
  const entries = t.raw("entries") as TExperienceEntry[];

  return (
    <section id="experiencia" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <FadeIn>
          <div className="mb-16 space-y-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary">
              {t("label")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {t("title")}
            </h2>
          </div>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {experience.map((entry, index) => {
              const tEntry = entries[index];
              return (
                <FadeIn key={index} delay={index * 100}>
                  <div className="relative pl-8">

                    <div className="absolute left-0 top-2 -translate-x-1/2 flex items-center justify-center">
                      <div
                        className={`w-3 h-3 rounded-full border-2 ${
                          entry.current
                            ? "bg-primary border-primary"
                            : "bg-background border-border"
                        }`}
                      />
                      {entry.current && (
                        <div className="absolute w-3 h-3 rounded-full bg-primary/40 animate-ping" />
                      )}
                    </div>

                    <div className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30 hover:bg-primary/[0.02]">

                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                        <div className="space-y-0.5">
                          <h3 className="font-semibold text-foreground text-lg leading-tight">
                            {tEntry.role}
                          </h3>
                          <p className="text-primary font-medium text-sm">
                            {entry.company}
                          </p>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1 flex-shrink-0">
                          <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                            {tEntry.period}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin size={11} />
                            {entry.location}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-5">
                        {tEntry.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed"
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {entry.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
