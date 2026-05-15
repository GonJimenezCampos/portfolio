"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  /** Delay before the animation starts (ms). Useful to stagger siblings. */
  delay?: number;
  /** How far the element travels upward when entering (Tailwind translate class). */
  from?: "bottom" | "left" | "none";
}

export function FadeIn({
  children,
  className,
  delay = 0,
  from = "bottom",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const translateClass =
    from === "bottom"
      ? "translate-y-6"
      : from === "left"
        ? "-translate-x-6"
        : "";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${translateClass}`,
        className
      )}
    >
      {children}
    </div>
  );
}
