import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { LogoCloud } from "@/components/logo-cloud";
import { ValueChips } from "@/components/value-chips";
import { Timeline } from "@/components/timeline";
import { FeatureGrid } from "@/components/feature-grid";
import { Card, CardDescription, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { businessesConfig, siteConfig } from "@/lib/config";
import { PillarsGrid } from "@/components/pillars-grid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section>
        <LogoCloud />
      </Section>
      <Section title="Strategic pillars" description="Diversified but connected capabilities that unlock industrial and commercial value across Ethiopia and the region.">
        <PillarsGrid pillars={businessesConfig.pillars} />
      </Section>
      <Section title="Operational cadence" description="We manage each venture with disciplined governance and transparent reporting to our investors and stakeholders.">
        <Timeline />
      </Section>
      <Section title="Vision & mission" description="Our roadmap aligns ambition with responsible impact for customers, communities, and collaborators.">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <Badge variant="accent">Vision</Badge>
            <CardTitle className="mt-3">Forward looking</CardTitle>
            <CardDescription>{siteConfig.vision}</CardDescription>
          </Card>
          <Card>
            <Badge variant="accent">Mission</Badge>
            <CardTitle className="mt-3">Execution focused</CardTitle>
            <CardDescription>{siteConfig.mission}</CardDescription>
          </Card>
        </div>
      </Section>
      <Section title="Values we live by" padded={false}>
        <ValueChips />
      </Section>
      <Section title="Why Aladian" description="Cross-functional expertise and dependable delivery make us the strategic ally for ambitious organisations.">
        <FeatureGrid />
      </Section>
    </>
  );
}
