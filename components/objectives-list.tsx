"use client";

import { motion } from "framer-motion";
import { Section } from "./section";
import { siteConfig } from "@/lib/config";

export function ObjectivesList() {
  const { objectives } = siteConfig;

  return (
    <Section
      id="objectives"
      eyebrow="Objectives"
      title="Strategic priorities"
      description="Targets guiding investments, partnerships, and operational excellence initiatives."
    >
      <ol className="grid gap-4 md:grid-cols-2">
        {objectives.map((objective, index) => (
          <motion.li
            key={objective}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-start gap-4 rounded-2xl border border-brand-line/70 bg-white/75 p-5 shadow-xs"
          >
            <span className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-accent/90 text-sm font-semibold text-white">
              {index + 1}
            </span>
            <p className="text-sm leading-relaxed text-brand-muted">{objective}</p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
