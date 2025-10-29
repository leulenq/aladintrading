"use client";

import { Badge } from "./badge";
import { motion } from "framer-motion";
import type { BusinessesConfig } from "@/lib/config";

interface PipelineScrollerProps {
  items: BusinessesConfig["futurePipeline"];
}

export function PipelineScroller({ items }: PipelineScrollerProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand.line/70 bg-white/70 shadow-sm">
      <div className="flex gap-4 overflow-x-auto px-6 py-5" role="list">
        {items.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true, margin: "-80px" }}
            role="listitem"
            className="min-w-[280px] rounded-xl border border-brand.line bg-white/80 p-5 shadow-xs"
          >
            <Badge variant="muted" className="mb-3 inline-block">
              Upcoming
            </Badge>
            <h3 className="text-lg font-semibold text-brand-ink">{item.name}</h3>
            <p className="mt-2 text-sm text-brand-muted">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
