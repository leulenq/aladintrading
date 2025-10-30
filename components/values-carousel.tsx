"use client";

import { Section } from "./section";
import { ValueChips } from "./value-chips";

export function ValuesCarousel() {
  return (
    <Section
      id="values"
      eyebrow="Values"
      title="Guiding principles"
      description="Our values anchor decision-making and governance across every business line."
    >
      <ValueChips />
    </Section>
  );
}
