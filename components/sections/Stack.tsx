import { getTranslations } from "next-intl/server";
import { stack } from "@/data/stack";
import { SimpleIcon } from "@/components/ui/simple-icon";
import { FadeIn } from "@/components/shared/FadeIn";

export async function Stack() {
  const t = await getTranslations("stack");
  const categories = t.raw("categories") as Record<string, string>;

  return (
    <section id="stack" className="py-24 px-6">
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

        <div className="space-y-10">
          {stack.map((category, i) => (
            <FadeIn key={category.key} delay={i * 80}>
              <div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                  {categories[category.key]}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-border bg-card hover:border-border/80 hover:bg-muted/50 transition-colors"
                    >
                      <SimpleIcon icon={tech.icon} size={18} />
                      <span className="text-sm font-medium text-foreground">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
