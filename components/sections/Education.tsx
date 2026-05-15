import { getTranslations } from "next-intl/server";
import { education } from "@/data/education";
import { GraduationCap, Award } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";

type TEducationEntry = {
  title: string;
  institution: string;
  period: string;
  description: string | null;
};

export async function Education() {
  const t = await getTranslations("education");
  const entries = t.raw("entries") as TEducationEntry[];

  return (
    <section id="formacion" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-16 space-y-2">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary">
            {t("label")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {education.map((entry, i) => {
            const tEntry = entries[i];
            const isDegree = entry.type === "degree";
            return (
              <FadeIn key={tEntry.title} delay={i * 100}>
                <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-medium">
                    {isDegree ? <GraduationCap size={16} /> : <Award size={16} />}
                    {isDegree ? t("type_degree") : t("type_certification")}
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground leading-snug">
                      {tEntry.title}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {tEntry.institution}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {tEntry.period}
                    </p>
                  </div>

                  {tEntry.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tEntry.description}
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
