"use client";

import { Section } from "./section";
import { siteConfig } from "@/lib/config";
import { SectorsGrid } from "./sectors-grid";

export function Sectors() {
  return (
    <Section
      id="sectors"
      eyebrow="Sectors"
      title="Integrated pillars"
      description="Each sector is led by specialised teams coordinating sourcing, operations, compliance, and market delivery across Ethiopia and beyond."
    >
      <SectorsGrid sectors={siteConfig.sectors} />
    </Section>
  );
}
