"use client";

import { motion } from "framer-motion";

interface ObjectivesListProps {
  objectives: string[];
}

export function ObjectivesList({ objectives }: ObjectivesListProps) {
  return (
    <ol className="space-y-4">
      {objectives.map((objective, index) => (
        <motion.li
          key={objective}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.08, duration: 0.4 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-start gap-4 rounded-xl border border-brand.line bg-white/80 p-5 shadow-xs"
        >
          <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand.black text-sm font-semibold text-white">
            {index + 1}
          </span>
          <p className="text-sm leading-relaxed text-brand-muted">{objective}</p>
        </motion.li>
      ))}
    </ol>
  );
}
