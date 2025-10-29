import siteRaw from "@/data/site.json";
import businessesRaw from "@/data/businesses.json";
import partnersRaw from "@/data/partners.json";
import { z } from "zod";

const addressSchema = z.object({
  country: z.string(),
  city: z.string(),
  subCity: z.string(),
  woreda: z.string(),
  house: z.string(),
  landmark: z.string(),
});

export const siteSchema = z.object({
  name: z.string(),
  tagline: z.string(),
  vision: z.string(),
  mission: z.string(),
  values: z.array(z.string()),
  objectives: z.array(z.string()),
  address: addressSchema,
  phones: z.array(z.string()),
  emails: z.array(z.string().email()),
  website: z.string(),
  socials: z.array(z.object({ platform: z.string(), url: z.string().url() })),
  meta: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
  }),
});

const projectStatus = z.enum(["active", "construction", "procurement"]);

export const businessesSchema = z.object({
  pillars: z.array(z.object({ name: z.string(), description: z.string() })),
  projects: z.array(
    z.object({
      name: z.string(),
      summary: z.string(),
      status: projectStatus,
    }),
  ),
  futurePipeline: z.array(z.object({ name: z.string(), description: z.string() })),
});

export const partnersSchema = z.array(
  z.object({
    name: z.string(),
    logo: z.string(),
    url: z.string().url(),
  }),
);

export type SiteConfig = z.infer<typeof siteSchema>;
export type BusinessesConfig = z.infer<typeof businessesSchema>;
export type PartnersConfig = z.infer<typeof partnersSchema>;
export type ProjectStatus = z.infer<typeof projectStatus>;

export const siteConfig: SiteConfig = siteSchema.parse(siteRaw);
export const businessesConfig: BusinessesConfig = businessesSchema.parse(businessesRaw);
export const partnersConfig: PartnersConfig = partnersSchema.parse(partnersRaw);
