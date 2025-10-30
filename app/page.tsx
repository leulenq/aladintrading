import { Hero } from "@/components/hero";
import { Overview } from "@/components/overview";
import { Sectors } from "@/components/sectors";
import { Projects } from "@/components/projects";
import { CapabilitiesTabs } from "@/components/capabilities-tabs";
import { Differentiators } from "@/components/differentiators";
import { VisionMission } from "@/components/vision-mission";
import { ValuesCarousel } from "@/components/values-carousel";
import { ObjectivesList } from "@/components/objectives-list";
import { RoadmapTimeline } from "@/components/roadmap-timeline";
import { Faqs } from "@/components/faqs";
import { ContactCard } from "@/components/contact";

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <Overview />
      <Sectors />
      <Projects />
      <CapabilitiesTabs />
      <Differentiators />
      <VisionMission />
      <ValuesCarousel />
      <ObjectivesList />
      <RoadmapTimeline />
      <Faqs />
      <ContactCard />
    </div>
  );
}
