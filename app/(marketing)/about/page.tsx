import { Section } from "@/components/section";
import { Card, CardDescription, CardTitle } from "@/components/card";
import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";
import { ObjectivesList } from "@/components/objectives-list";

export const metadata: Metadata = {
  title: `${siteConfig.name} | About`,
  description: siteConfig.meta.description,
  openGraph: {
    title: `${siteConfig.name} | About`,
    description: siteConfig.meta.description,
    images: [{ url: "/og-cover.svg", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <>
      <Section title="Company overview" description={siteConfig.tagline}>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardTitle>Who we are</CardTitle>
            <CardDescription>
              {siteConfig.mission}
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Where we are heading</CardTitle>
            <CardDescription>{siteConfig.vision}</CardDescription>
          </Card>
        </div>
      </Section>
      <Section title="Vision & Mission" description="Anchoring growth with purpose and measured execution.">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardTitle>Vision</CardTitle>
            <CardDescription>{siteConfig.vision}</CardDescription>
          </Card>
          <Card>
            <CardTitle>Mission</CardTitle>
            <CardDescription>{siteConfig.mission}</CardDescription>
          </Card>
        </div>
      </Section>
      <Section title="Strategic objectives" description="A disciplined plan guides our daily actions and long-term investments.">
        <ObjectivesList objectives={siteConfig.objectives} />
      </Section>
    </>
  );
}
