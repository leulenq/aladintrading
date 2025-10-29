"use client";

import { businessesConfig } from "@/lib/config";
import { statusToLabel } from "@/lib/utils";
import { motion } from "framer-motion";
import { Badge } from "./badge";

export function Timeline() {
  return (
    <div className="rounded-card border border-brand.line bg-white/70 p-6 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-brand-ink">Delivery milestones</h3>
          <p className="mt-1 text-sm text-brand-muted">Tracking the progress of our strategic initiatives.</p>
        </div>
        <div className="hidden text-xs font-medium uppercase tracking-[0.25em] text-brand-muted/80 sm:block">
          Updated quarterly
        </div>
      </div>
      <ol className="mt-8 space-y-6 border-l border-brand.line/70 pl-6">
        {businessesConfig.projects.map((project, index) => (
          <motion.li
            key={project.name}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="absolute -left-9 flex h-6 w-6 items-center justify-center rounded-full border border-brand.line bg-white text-xs font-semibold text-brand-ink shadow-xs">
              {index + 1}
            </span>
            <div className="flex flex-col gap-3 rounded-xl border border-brand.line/70 bg-white/80 p-5 shadow-xs backdrop-blur">
              <div className="flex flex-wrap items-center gap-3">
                <h4 className="text-lg font-semibold text-brand-ink">{project.name}</h4>
                <Badge variant={project.status === "active" ? "accent" : "muted"}>{statusToLabel(project.status)}</Badge>
              </div>
              <p className="text-sm text-brand-muted">{project.summary}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
