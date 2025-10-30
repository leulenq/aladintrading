"use client";

import { motion } from "framer-motion";
import type { TimelineItem } from "@/lib/config";

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="rounded-3xl border border-brand-line/60 bg-white/80 p-8 shadow-sm backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-muted">Roadmap</p>
          <h3 className="mt-2 text-2xl font-semibold text-brand-ink">Strategic milestones</h3>
        </div>
        <p className="text-sm text-brand-muted">Tracking key deliverables across the next 12 months.</p>
      </div>
      <ol className="mt-10 grid gap-6 md:grid-cols-5">
        {items.map((item, index) => (
          <motion.li
            key={item.period}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-3 rounded-2xl border border-brand-line/60 bg-brand-mist/40 p-5 shadow-xs"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-muted">{item.period}</span>
            <h4 className="text-lg font-semibold text-brand-ink">{item.title}</h4>
            <p className="text-sm text-brand-muted">{item.description}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
