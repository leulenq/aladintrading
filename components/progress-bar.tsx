"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/lib/hooks";

export function ProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="pointer-events-none fixed inset-y-0 right-6 z-40 hidden w-[2px] rounded-full bg-brand-line/60 lg:block">
      <motion.div
        className="absolute bottom-0 w-full rounded-full bg-brand-accent"
        animate={{ height: `${progress}%` }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      />
    </div>
  );
}
