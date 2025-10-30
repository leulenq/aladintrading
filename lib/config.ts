import siteRaw from "@/data/site.json";
import { z } from "zod";

const ctaSchema = z.object({
  label: z.string(),
  target: z.string(),
});

const heroStatSchema = z.object({
  label: z.string(),
  value: z.string(),
});

const overviewSchema = z.object({
  paragraphs: z.array(z.string()),
  currentStatus: z.array(z.string()),
  stats: z.array(heroStatSchema),
  infographic: z.array(
    z.object({
      label: z.string(),
      icon: z.enum(["factory", "arrows", "files", "wheat", "globe", "crane", "pickaxe", "truck"]),
    }),
  ),
});

const sectorSchema = z.object({
  id: z.string(),
  name: z.string(),
  summary: z.string(),
  detail: z.string(),
});

const projectSchema = z.object({
  name: z.string(),
  summary: z.string(),
  status: z.string(),
  progress: z.number().min(0).max(100),
  milestone: z.string(),
});

const capabilitySchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  bullets: z.array(z.string()),
  image: z.string(),
});

const differentiatorSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const valueSchema = z.object({
  name: z.string(),
  description: z.string(),
});

const timelineSchema = z.object({
  period: z.string(),
  title: z.string(),
  description: z.string(),
});

const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const logoSchema = z.object({
  name: z.string(),
  logo: z.string(),
  url: z.string().url(),
});

const contactSchema = z.object({
  address: z.string(),
  landmark: z.string(),
  phones: z.array(z.string()),
  email: z.string().email(),
  website: z.string(),
  map: z.object({
    image: z.string(),
    link: z.string().url(),
  }),
});

export const siteSchema = z.object({
  name: z.string(),
  tagline: z.string(),
  meta: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
  }),
  hero: z.object({
    headline: z.string(),
    subheadline: z.string(),
    primaryCta: ctaSchema,
    secondaryCta: ctaSchema,
    stats: z.array(heroStatSchema),
  }),
  overview: overviewSchema,
  sectors: z.array(sectorSchema),
  projects: z.array(projectSchema),
  capabilities: z.array(capabilitySchema),
  differentiators: z.array(differentiatorSchema),
  vision: z.string(),
  mission: z.string(),
  values: z.array(valueSchema),
  objectives: z.array(z.string()),
  timeline: z.array(timelineSchema),
  faqs: z.array(faqSchema),
  logoCloud: z.array(logoSchema),
  contact: contactSchema,
});

export type SiteConfig = z.infer<typeof siteSchema>;
export type Sector = z.infer<typeof sectorSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Capability = z.infer<typeof capabilitySchema>;
export type Differentiator = z.infer<typeof differentiatorSchema>;
export type CoreValue = z.infer<typeof valueSchema>;
export type TimelineItem = z.infer<typeof timelineSchema>;
export type Faq = z.infer<typeof faqSchema>;

export const siteConfig: SiteConfig = siteSchema.parse(siteRaw);
