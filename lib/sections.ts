export const sections = [
  { id: "overview", label: "Overview" },
  { id: "sectors", label: "Sectors" },
  { id: "projects", label: "Projects" },
  { id: "capabilities", label: "Capabilities" },
  { id: "differentiators", label: "Differentiators" },
  { id: "vision", label: "Vision & Mission" },
  { id: "values", label: "Values" },
  { id: "objectives", label: "Objectives" },
  { id: "timeline", label: "Timeline" },
  { id: "faqs", label: "FAQs" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
