"use client";

import { ReactNode } from "react";
import { Container } from "./container";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  padded?: boolean;
}

export function Section({ id, title, description, children, className, padded = true }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      <Container className={padded ? "py-16 sm:py-20 lg:py-24" : undefined}>
        <div className="space-y-10">
          {(title || description) && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl space-y-3"
            >
              {title && (
                <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
                  {title}
                </h2>
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
