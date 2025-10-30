"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";
import type { Sector } from "@/lib/config";

interface SectorsGridProps {
  sectors: Sector[];
}

export function SectorsGrid({ sectors }: SectorsGridProps) {
  return (
    <Accordion type="multiple" className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {sectors.map((sector, index) => (
        <AccordionItem key={sector.id} value={sector.id}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-3xl border border-brand-line/70 bg-white/75 p-1 shadow-xs"
          >
            <AccordionTrigger className="rounded-3xl border-none bg-transparent px-5 py-5 text-left text-base font-semibold text-brand-ink">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">Pillar</div>
                <div className="mt-1 text-lg font-semibold text-brand-ink">{sector.name}</div>
                <p className="mt-2 text-sm text-brand-muted">{sector.summary}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="border-none bg-brand-mist/40 text-brand-muted">
              <div className="px-5 py-4 text-sm leading-relaxed text-brand-muted">{sector.detail}</div>
            </AccordionContent>
          </motion.div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
