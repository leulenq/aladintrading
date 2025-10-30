"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/config";
import { projectStatusClass, projectStatusLabel } from "@/lib/utils";

interface ProjectsSpotlightProps {
  projects: Project[];
}

export function ProjectsSpotlight({ projects }: ProjectsSpotlightProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.article
          key={project.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-line/70 bg-white/80 p-6 shadow-md shadow-brand-ink/5"
        >
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-brand-ink">{project.name}</h3>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${projectStatusClass(project.status)}`}>
              {projectStatusLabel(project.status)}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted">{project.summary}</p>
          <div className="mt-6 space-y-2">
            <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.3em] text-brand-muted">
              <span>Progress</span>
              <span>{project.progress}%</span>
            </div>
            <div className="h-2 rounded-full bg-brand-mist">
              <div
                className="h-full rounded-full bg-brand-accent"
                style={{ width: `${Math.min(Math.max(project.progress, 0), 100)}%` }}
              />
            </div>
          </div>
          <div className="mt-4 text-sm font-semibold text-brand-ink">{project.milestone}</div>
        </motion.article>
      ))}
    </div>
  );
}
