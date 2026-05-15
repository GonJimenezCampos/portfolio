import { ArrowDown, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

function AvatarPlaceholder() {
  return (
    <div className="relative flex-shrink-0 mx-auto lg:mx-0">
      {/* Outer glow ring */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-md" />

      {/* Avatar circle */}
      <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-primary/30 bg-muted flex items-center justify-center overflow-hidden">
        {/* Subtle grid pattern inside */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Initials */}
        <span className="relative text-4xl sm:text-5xl font-bold tracking-tight text-primary select-none">
          GJC
        </span>
      </div>

      {/* Small floating badge — decorative */}
      <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-background border border-border text-xs font-medium text-muted-foreground shadow-sm">
        Backend Dev
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6"
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ── Left column: text ── */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Disponible para nuevas oportunidades
            </div>

            {/* Name */}
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
                Hola, soy
              </p>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Gonzalo
                <br />
                Jiménez Campos
              </h1>
              <p className="text-lg sm:text-xl text-primary font-semibold pt-1">
                Backend Developer
              </p>
            </div>

            {/* Tagline */}
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Construyo APIs robustas y aplicaciones escalables con Symfony y
              Django. Me importan el código limpio, las buenas prácticas y los
              sistemas que no fallan en producción.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#contacto"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Contactar
              </a>
              <a
                href="#proyectos"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                Ver proyectos
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon style={{ width: 20, height: 20 }} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon style={{ width: 20, height: 20 }} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* ── Right column: avatar ── */}
          <AvatarPlaceholder />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
