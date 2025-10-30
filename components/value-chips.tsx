"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function ValueChips() {
  return (
    <TooltipProvider>
      <div className="relative">
        <div className="-mx-4 overflow-x-auto px-4 pb-2">
          <div className="flex w-max gap-3">
            {siteConfig.values.map((value, index) => (
              <Tooltip key={value.name}>
                <TooltipTrigger asChild>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="cursor-pointer select-none rounded-full border border-brand-line/70 bg-white/70 px-5 py-2 text-sm font-medium text-brand-ink shadow-xs backdrop-blur transition hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    {value.name}
                  </motion.span>
                </TooltipTrigger>
                <TooltipContent>{value.description}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
