"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("contact");
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

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16">

          <FadeIn from="bottom">
            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                {t("description")}
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

          <FadeIn from="bottom" delay={150}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-muted-foreground uppercase tracking-wider"
                  >
                    {t("name_label")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={t("name_placeholder")}
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
                    {t("email_label")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t("email_placeholder")}
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
                  {t("message_label")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={t("message_placeholder")}
                  className={cn(
                    "w-full rounded-lg border border-border bg-muted/40 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 resize-none",
                    "outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  )}
                />
              </div>

              {state === "success" && (
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <CheckCircle size={16} />
                  {t("success")}
                </div>
              )}
              {state === "error" && (
                <div className="flex items-center gap-2 text-sm text-destructive">
                  <AlertCircle size={16} />
                  {t("error")}
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
                    {t("sending")}
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    {t("submit")}
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
