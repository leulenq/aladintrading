"use client";

import { Section } from "./section";
import { siteConfig } from "@/lib/config";
import { Badge } from "./badge";
import { GlassCard } from "./card";

export function VisionMission() {
  return (
    <Section id="vision" eyebrow="Vision & Mission">
      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard className="h-full space-y-4 border-brand-line/60 bg-white/75 shadow-xs">
          <Badge variant="accent">Vision</Badge>
          <h3 className="text-2xl font-semibold text-brand-ink">Forward-looking growth</h3>
          <p className="text-sm leading-relaxed text-brand-muted">{siteConfig.vision}</p>
        </GlassCard>
        <GlassCard className="h-full space-y-4 border-brand-line/60 bg-white/75 shadow-xs">
          <Badge variant="accent">Mission</Badge>
          <h3 className="text-2xl font-semibold text-brand-ink">Execution with integrity</h3>
          <p className="text-sm leading-relaxed text-brand-muted">{siteConfig.mission}</p>
        </GlassCard>
      </div>
    </Section>
  );
}
