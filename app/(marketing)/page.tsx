import Image from "next/image";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { Section } from "@/components/section";
import { Stats } from "@/components/stats";
import { SectorsGrid } from "@/components/sectors-grid";
import { ProjectsSpotlight } from "@/components/projects-spotlight";
import { FeatureGrid } from "@/components/feature-grid";
import { ValueChips } from "@/components/value-chips";
import { ObjectivesList } from "@/components/objectives-list";
import { Timeline } from "@/components/timeline";
import { ContactForm } from "@/components/contact-form";
import { Map } from "@/components/map";
import { siteConfig } from "@/lib/config";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import { ScrollProgress } from "@/components/scroll-progress";
import { DotNav } from "@/components/dot-nav";
import { BackToTop } from "@/components/back-to-top";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";
import { Building2, Factory, FileText, Globe2, Tractor, Truck, Pickaxe, Repeat } from "lucide-react";
import { Fragment } from "react";
import { formatPhone } from "@/lib/utils";

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

export default function HomePage() {
  const { overview, projects, capabilities, vision, mission, objectives, timeline, faqs, contact } = siteConfig;

  return (
    <Fragment>
      <ScrollProgress />
      <DotNav />
      <BackToTop />
      <Hero />
      <Section padded={false}>
        <Container className="pb-20 pt-12">
          <LogoCloud />
        </Container>
      </Section>
      <Section
        id="company-overview"
        eyebrow="Company overview"
        title="Operational scale with regional ambition"
        description={overview.paragraphs.join(" ")}
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-8">
            <div className="space-y-4 text-brand-muted">
              {overview.currentStatus.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="rounded-3xl border border-brand-line/70 bg-white/80 p-6 shadow-xs">
              <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-muted">Operational presence</h3>
              <div className="mt-6">
                <Stats stats={overview.stats} />
              </div>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-brand-line/70 bg-brand-mist/40 p-6 shadow-xs">
            <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-muted">Pillar snapshot</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              {overview.infographic.map((item) => {
                const Icon = infographicIconMap[item.icon];
                return (
                  <div key={item.label} className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 shadow-xs">
                    {Icon && <Icon className="h-5 w-5 text-brand-accent" />}
                    <span className="text-sm font-medium text-brand-ink">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
      <Section
        id="sectors"
        eyebrow="Sectors"
        title="Integrated pillars"
        description="Each sector is led by specialised teams that coordinate sourcing, operations, compliance, and market delivery across Ethiopia and beyond."
      >
        <SectorsGrid sectors={siteConfig.sectors} />
      </Section>
      <Section
        id="projects"
        eyebrow="Projects"
        title="Delivery across active investments"
        description="We actively manage programme milestones across manufacturing, distribution, and industrialisation projects."
      >
        <ProjectsSpotlight projects={projects} />
      </Section>
      <Section
        id="capabilities"
        eyebrow="Capabilities"
        title="Core competencies across the value chain"
        description="Our teams orchestrate manufacturing, distribution, trade, and infrastructure capabilities to respond rapidly to partner needs."
      >
        <Tabs defaultValue={capabilities[0]?.id ?? ""}>
          <TabsList className="w-full flex-wrap">
            {capabilities.map((capability) => (
              <TabsTrigger key={capability.id} value={capability.id}>
                {capability.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {capabilities.map((capability) => (
            <TabsContent key={capability.id} value={capability.id}>
              <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
                <div className="space-y-5 rounded-3xl border border-brand-line/70 bg-white/80 p-6 shadow-xs">
                  <h3 className="text-xl font-semibold text-brand-ink">{capability.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-muted">{capability.description}</p>
                  <ul className="space-y-3 text-sm text-brand-ink">
                    {capability.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="overflow-hidden rounded-3xl border border-brand-line/60 bg-white/60 shadow-xs">
                  <Image
                    src={capability.image}
                    alt={`${capability.title} diagram`}
                    width={600}
                    height={420}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Section>
      <Section
        id="differentiators"
        eyebrow="Why Aladian"
        title="Differentiators that sustain performance"
        description="We combine process discipline, investment in people, and resilient infrastructure to deliver dependable outcomes."
      >
        <FeatureGrid />
      </Section>
      <Section id="vision" eyebrow="Vision & Mission">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-brand-line/70 bg-white/80 p-6 shadow-xs">
            <Badge variant="accent">Vision</Badge>
            <h3 className="mt-4 text-2xl font-semibold text-brand-ink">Forward-looking growth</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">{vision}</p>
          </div>
          <div className="rounded-3xl border border-brand-line/70 bg-white/80 p-6 shadow-xs">
            <Badge variant="accent">Mission</Badge>
            <h3 className="mt-4 text-2xl font-semibold text-brand-ink">Execution with integrity</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">{mission}</p>
          </div>
        </div>
      </Section>
      <Section
        id="values"
        eyebrow="Values"
        title="Guiding principles"
        description="Our values anchor decision-making and governance across every business line."
      >
        <ValueChips />
      </Section>
      <Section
        id="objectives"
        eyebrow="Objectives"
        title="Strategic priorities"
        description="Targets that direct our investments, partnerships, and operational excellence initiatives."
      >
        <ObjectivesList objectives={objectives} />
      </Section>
      <Section
        id="timeline"
        eyebrow="Roadmap"
        title="Milestones on the horizon"
        description="We are sequencing investments to unlock scalable growth while strengthening compliance and stakeholder value."
      >
        <Timeline items={timeline} />
      </Section>
      <Section
        id="faqs"
        eyebrow="FAQs"
        title="Frequently asked questions"
        description="Answers to common questions from investors, partners, and prospective collaborators."
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="rounded-3xl border border-brand-line/70 bg-white/75 px-6 py-4 text-left text-base font-semibold text-brand-ink">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="border border-brand-line/70 bg-brand-mist/40 text-brand-muted">
                <div className="px-6 py-4 text-sm leading-relaxed text-brand-muted">{faq.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
      <Section
        id="contact"
        eyebrow="Contact"
        title="Connect with Aladian Trading"
        description="Our team is ready to discuss partnerships, procurement, and investment opportunities across all sectors."
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="space-y-6 rounded-3xl border border-brand-line/70 bg-white/80 p-6 shadow-xs">
            <dl className="grid gap-4 text-sm text-brand-muted">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">Address</dt>
                <dd className="mt-1 text-brand-ink">
                  {contact.address}
                  <br />
                  {contact.landmark}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">Phone</dt>
                <dd className="mt-1 flex flex-col gap-1 text-brand-ink">
                  {contact.phones.map((phone) => (
                    <a key={phone} href={`tel:${formatPhone(phone)}`} className="hover:text-brand-accent">
                      {phone}
                    </a>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${contact.email}`} className="text-brand-ink hover:text-brand-accent">
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">Website</dt>
                <dd className="mt-1 text-brand-ink">{contact.website}</dd>
              </div>
            </dl>
            <ContactForm className="mt-6" />
          </div>
          <Map />
        </div>
      </Section>
    </Fragment>
  );
}
