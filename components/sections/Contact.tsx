"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/shared/FadeIn";

type FormState = "idle" | "loading" | "success" | "error";

const SOCIAL_LINKS = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: <Mail size={18} />,
  },
  {
    label: "GitHub",
    value: "GonJimenezCampos",
    href: siteConfig.github,
    icon: <GithubIcon style={{ width: 18, height: 18 }} />,
  },
  {
    label: "LinkedIn",
    value: "gjimenezcampos",
    href: siteConfig.linkedin,
    icon: <LinkedinIcon style={{ width: 18, height: 18 }} />,
  },
];

export function Contact() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(
        `https://formspree.io/f/${siteConfig.formspreeId}`,
        {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        }
      );

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <FadeIn>
          <div className="mb-16 space-y-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary">
              06. Contacto
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Hablemos
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16">

          {/* ── Left: info + social links ── */}
          <FadeIn from="bottom">
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              Si tienes una oportunidad interesante, una pregunta o simplemente
              quieres conectar, escríbeme. Respondo en menos de 24 horas.
            </p>

            <ul className="space-y-4">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                      {link.icon}
                    </span>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {link.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          </FadeIn>

          {/* ── Right: form ── */}
          <FadeIn from="bottom" delay={150}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-muted-foreground uppercase tracking-wider"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className={cn(
                    "w-full rounded-lg border border-border bg-muted/40 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50",
                    "outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  )}
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-muted-foreground uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className={cn(
                    "w-full rounded-lg border border-border bg-muted/40 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50",
                    "outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  )}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs font-medium text-muted-foreground uppercase tracking-wider"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Cuéntame en qué puedo ayudarte..."
                className={cn(
                  "w-full rounded-lg border border-border bg-muted/40 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 resize-none",
                  "outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                )}
              />
            </div>

            {/* Feedback messages */}
            {state === "success" && (
              <div className="flex items-center gap-2 text-sm text-green-500">
                <CheckCircle size={16} />
                Mensaje enviado. Te respondo pronto.
              </div>
            )}
            {state === "error" && (
              <div className="flex items-center gap-2 text-sm text-destructive">
                <AlertCircle size={16} />
                Algo falló. Inténtalo de nuevo o escríbeme directamente por email.
              </div>
            )}

            <button
              type="submit"
              disabled={state === "loading" || state === "success"}
              className={cn(
                "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors",
                "bg-primary text-primary-foreground hover:bg-primary/90",
                "disabled:opacity-60 disabled:cursor-not-allowed"
              )}
            >
              {state === "loading" ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                  Enviando…
                </>
              ) : (
                <>
                  <Send size={15} />
                  Enviar mensaje
                </>
              )}
            </button>
          </form>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
