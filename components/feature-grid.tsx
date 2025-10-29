"use client";

import { Card, CardDescription, CardTitle } from "./card";
import { Lightbulb, Users, Settings, Building, Handshake } from "lucide-react";

const features = [
  {
    title: "Continuous improvement",
    description: "Lean operating systems and Kaizen routines deliver measurable efficiencies across every business unit.",
    icon: Lightbulb,
  },
  {
    title: "Human capital",
    description: "Dedicated talent programs foster leadership, technical excellence, and inclusive workplaces.",
    icon: Users,
  },
  {
    title: "Technology",
    description: "Digital procurement, traceability, and analytics improve transparency and rapid decision-making.",
    icon: Settings,
  },
  {
    title: "Infrastructure",
    description: "Investments in warehousing, utilities, and logistics create resilient platforms for partners.",
    icon: Building,
  },
  {
    title: "Stakeholder value",
    description: "Responsible governance strengthens trust with communities, regulators, and investors.",
    icon: Handshake,
  },
];

export function FeatureGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {features.map((feature, index) => (
        <Card key={feature.title} className="h-full">
          <feature.icon className="h-10 w-10 rounded-full bg-brand.black/90 p-2 text-brand.white" />
          <CardTitle className="mt-4 capitalize">{feature.title}</CardTitle>
          <CardDescription>{feature.description}</CardDescription>
        </Card>
      ))}
    </div>
  );
}
