"use client";

import Image from "next/image";
import { Section } from "./section";
import { siteConfig } from "@/lib/config";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GlassCard } from "./card";

export function CapabilitiesTabs() {
  const { capabilities } = siteConfig;

  return (
    <Section
      id="capabilities"
      eyebrow="Capabilities"
      title="Core competencies across the value chain"
      description="Teams orchestrate manufacturing, distribution, trade, and infrastructure programmes that respond quickly to partner needs."
    >
      <Tabs defaultValue={capabilities[0]?.id ?? ""} className="w-full">
        <TabsList className="w-full flex-wrap justify-start gap-2 bg-transparent p-0">
          {capabilities.map((capability) => (
            <TabsTrigger key={capability.id} value={capability.id} className="rounded-full border border-brand-line bg-white/80 px-4 py-2 text-sm text-brand-muted data-[state=active]:border-brand-accent data-[state=active]:bg-brand-accent/10 data-[state=active]:text-brand-ink">
              {capability.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {capabilities.map((capability) => (
          <TabsContent key={capability.id} value={capability.id} className="mt-10 focus-visible:outline-none">
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <GlassCard className="space-y-5 border-brand-line/60 bg-white/80 shadow-xs">
                <div>
                  <h3 className="text-2xl font-semibold text-brand-ink">{capability.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{capability.description}</p>
                </div>
                <ul className="space-y-3 text-sm text-brand-ink">
                  {capability.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
              <GlassCard className="overflow-hidden border-brand-line/50 bg-white/70 p-0 shadow-xs">
                <Image
                  src={capability.image}
                  alt={`${capability.title} illustration`}
                  width={640}
                  height={480}
                  className="h-auto w-full"
                />
              </GlassCard>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}
