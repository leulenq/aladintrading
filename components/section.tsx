"use client";

import { ReactNode } from "react";
import { Container } from "./container";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  padded?: boolean;
}

export function Section({ id, eyebrow, title, description, children, className, padded = true }: SectionProps) {
  return (
    <section id={id} data-section={id} className={cn("scroll-mt-32", className)}>
      <Container className={padded ? "py-20 lg:py-28" : undefined}>
        <div className="space-y-12">
          {(title || description || eyebrow) && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-120px" }}
              className="max-w-3xl space-y-4"
            >
              {eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-muted">{eyebrow}</p>
              )}
              {title && (
                <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">{title}</h2>
              )}
              {description && <p className="text-lg leading-relaxed text-brand-muted">{description}</p>}
            </motion.div>
          )}
          <div>{children}</div>
        </div>
      </Container>
    </section>
  );
}
