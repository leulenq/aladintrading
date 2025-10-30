"use client";

import { Card, CardDescription, CardTitle } from "./card";
import { Badge } from "./badge";
import { motion } from "framer-motion";
import type { BusinessesConfig } from "@/lib/config";

interface PillarsGridProps {
  pillars: BusinessesConfig["pillars"];
}

export function PillarsGrid({ pillars }: PillarsGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {pillars.map((pillar, index) => (
        <motion.div
          key={pillar.name}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <Card className="h-full">
            <Badge variant="muted" className="mb-4 text-xs uppercase tracking-wide">
              {String(index + 1).padStart(2, "0")}
            </Badge>
            <CardTitle>{pillar.name}</CardTitle>
            <CardDescription>{pillar.description}</CardDescription>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
