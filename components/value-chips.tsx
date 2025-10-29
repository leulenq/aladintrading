"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";

export function ValueChips() {
  return (
    <div className="flex flex-wrap gap-3">
      {siteConfig.values.map((value, index) => (
        <motion.span
          key={value}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-full border border-brand.line/60 bg-white/70 px-4 py-2 text-sm font-medium text-brand-ink shadow-xs backdrop-blur"
        >
          {value}
        </motion.span>
      ))}
    </div>
  );
}
