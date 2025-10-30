"use client";

import { Fragment } from "react";
import { Building2, Factory, FileText, Globe2, Pickaxe, Repeat, Tractor, Truck } from "lucide-react";
import { Section } from "./section";
import { Stats } from "./stats";
import { siteConfig } from "@/lib/config";
import { GlassCard } from "./card";
import { LogoCloud } from "./logo-cloud";

const infographicIconMap = {
  factory: Factory,
  arrows: Repeat,
  files: FileText,
  wheat: Tractor,
  globe: Globe2,
  crane: Building2,
  pickaxe: Pickaxe,
  truck: Truck,
} as const;

export function Overview() {
  const { overview } = siteConfig;

  return (
    <Fragment>
      <Section
        id="overview"
        eyebrow="Company overview"
        title="Operational scale with regional ambition"
        description={overview.paragraphs.join(" ")}
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-10">
            <div className="space-y-5 text-brand-muted">
              {overview.currentStatus.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <GlassCard className="space-y-6 border-brand-line/60 bg-white/70 shadow-xs">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">Operational presence</p>
                <p className="mt-2 text-sm text-brand-muted">
                  Data-led governance keeps every pillar aligned to market expectations and compliance benchmarks.
                </p>
              </div>
              <Stats stats={overview.stats} className="gap-4 sm:grid-cols-3" />
            </GlassCard>
          </div>
          <div className="space-y-6">
            <GlassCard className="space-y-6 border-brand-line/50 bg-brand-mist/40 shadow-xs">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">Pillar snapshot</p>
                <p className="mt-2 text-sm text-brand-muted">
                  Eight integrated sectors collaborate to deliver reliable industrial solutions across Ethiopia.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {overview.infographic.map((item) => {
                  const Icon = infographicIconMap[item.icon];
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-2xl border border-white/40 bg-white/70 px-4 py-3 shadow-xs"
                    >
                      {Icon && <Icon className="h-5 w-5 text-brand-accent" />}
                      <span className="text-sm font-medium text-brand-ink">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </div>
        </div>
      </Section>
      <Section padded={false}>
        <div className="pb-20 pt-12">
          <LogoCloud />
        </div>
      </Section>
    </Fragment>
  );
}
