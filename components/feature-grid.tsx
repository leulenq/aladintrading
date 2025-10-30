"use client";

import { siteConfig } from "@/lib/config";
import { Card, CardDescription, CardTitle } from "./card";
import { Lightbulb, Users, Cpu, Building2, Handshake, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import type { ComponentType } from "react";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  "Continuous Improvement": Lightbulb,
  "Human Capital": Users,
  "Technology Investments": Cpu,
  "Development Infrastructure": Building2,
  "Stakeholder Value": Handshake,
  Reliability: ShieldCheck,
};

export function FeatureGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {siteConfig.differentiators.map((feature, index) => {
        const Icon = iconMap[feature.title] ?? Lightbulb;
        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <Card className="h-full bg-gradient-to-br from-white/90 to-brand-mist/40">
              <Icon className="h-10 w-10 rounded-2xl bg-brand-accent/10 p-2.5 text-brand-ink" />
              <CardTitle className="mt-4">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
