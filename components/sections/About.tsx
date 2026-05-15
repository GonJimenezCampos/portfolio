import { about } from "@/data/about";
import { FadeIn } from "@/components/shared/FadeIn";

export function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16">

          {/* ── Left: heading + highlights ── */}
          <FadeIn from="bottom">
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-widest uppercase text-primary">
                  01. Sobre mí
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  Quién soy
                </h2>
              </div>

              <dl className="space-y-4">
                {about.highlights.map((item) => (
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

          {/* ── Right: paragraphs ── */}
          <FadeIn from="bottom" delay={150}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
