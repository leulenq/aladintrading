"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Stat {
  label: string;
  value: string;
  helper?: string;
  icon?: ReactNode;
}

interface StatsProps {
  stats: Stat[];
  className?: string;
}

export function Stats({ stats, className }: StatsProps) {
  return (
    <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-card border border-brand.line bg-white/80 p-6 shadow-sm backdrop-blur"
        >
          <div className="flex items-center gap-3">
            {stat.icon && <div className="text-brand-ink/70">{stat.icon}</div>}
            <dt className="text-sm font-medium uppercase tracking-wide text-brand-muted">{stat.label}</dt>
          </div>
          <dd className="mt-3 text-3xl font-semibold text-brand-ink">{stat.value}</dd>
          {stat.helper && <p className="mt-2 text-sm text-brand-muted">{stat.helper}</p>}
        </motion.div>
      ))}
    </div>
  );
}
