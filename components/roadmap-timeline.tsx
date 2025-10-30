"use client";

import { Section } from "./section";
import { siteConfig } from "@/lib/config";
import { Timeline } from "./timeline";

export function RoadmapTimeline() {
  return (
    <Section
      id="timeline"
      eyebrow="Roadmap"
      title="Milestones on the horizon"
      description="We are sequencing investments to unlock scalable growth while strengthening compliance and stakeholder value."
    >
      <Timeline items={siteConfig.timeline} />
    </Section>
  );
}
