import { Section } from "@/components/section";
import { Card, CardDescription, CardTitle } from "@/components/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";
import { businessesConfig, type ProjectStatus } from "@/lib/config";
import { statusToLabel, statusToProgress } from "@/lib/utils";
import type { Metadata } from "next";
import { PipelineScroller } from "@/components/pipeline-scroller";

export const metadata: Metadata = {
  title: "Aladian Trading PLC | Businesses",
  description: "Explore the diversified business pillars, active projects, and future pipeline of Aladian Trading PLC.",
  openGraph: {
    title: "Aladian Trading PLC | Businesses",
    description: "Explore the diversified business pillars, active projects, and future pipeline of Aladian Trading PLC.",
    images: [{ url: "/og-cover.svg", width: 1200, height: 630 }],
  },
};

const statusTone: Record<ProjectStatus, string> = {
  active: "bg-emerald-100 text-emerald-700",
  construction: "bg-amber-100 text-amber-700",
  procurement: "bg-sky-100 text-sky-700",
};

export default function BusinessesPage() {
  return (
    <>
      <Section title="Business sectors" description="Each pillar is structured for scale with clear market positioning and operational KPIs.">
        <Accordion type="single" collapsible className="space-y-4">
          {businessesConfig.pillars.map((pillar) => (
            <AccordionItem key={pillar.name} value={pillar.name}>
              <AccordionTrigger>{pillar.name}</AccordionTrigger>
              <AccordionContent>
                <p>{pillar.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
      <Section title="Current projects" description="Active investments charted with clear milestones, capital allocation, and market readiness.">
        <div className="grid gap-6 md:grid-cols-2">
          {businessesConfig.projects.map((project) => (
            <Card key={project.name} className="h-full space-y-4">
              <div className="flex items-center justify-between gap-3">
                <CardTitle>{project.name}</CardTitle>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusTone[project.status]} uppercase tracking-wide`}>
                  {statusToLabel(project.status)}
                </span>
              </div>
              <CardDescription>{project.summary}</CardDescription>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-brand-muted">
                  <span>Progress</span>
                  <span>{statusToProgress(project.status)}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-brand.line/60">
                  <div
                    className="h-full rounded-full bg-brand.black transition-all"
                    style={{ width: `${statusToProgress(project.status)}%` }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <Section title="Future pipeline" description="Upcoming programs currently in development, signalling where we are investing next.">
        <PipelineScroller items={businessesConfig.futurePipeline} />
      </Section>
    </>
  );
}
