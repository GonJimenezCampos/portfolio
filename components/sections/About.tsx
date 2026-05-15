import { getTranslations } from "next-intl/server";
import { FadeIn } from "@/components/shared/FadeIn";

export async function About() {
  const t = await getTranslations("about");
  const paragraphs = t.raw("paragraphs") as string[];
  const h = t.raw("highlights") as Record<string, string>;

  const highlights = [
    { label: h.role_label, value: h.role_value },
    { label: h.company_label, value: h.company_value },
    { label: h.location_label, value: h.location_value },
    { label: h.experience_label, value: h.experience_value },
  ];

  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16">

          <FadeIn from="bottom">
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-widest uppercase text-primary">
                  {t("label")}
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  {t("title")}
                </h2>
              </div>

              <dl className="space-y-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-0.5 pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <dt className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="text-sm font-semibold text-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>

          <FadeIn from="bottom" delay={150}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
