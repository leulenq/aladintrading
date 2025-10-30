"use client";

import { Section } from "./section";
import { siteConfig } from "@/lib/config";
import { ProjectsSpotlight } from "./projects-spotlight";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Delivery across active investments"
      description="Programme management across manufacturing, distribution, and industrialisation projects keeps operations aligned to milestones."
    >
      <ProjectsSpotlight projects={siteConfig.projects} />
    </Section>
  );
}
