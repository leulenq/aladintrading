"use client";

import { Section } from "./section";
import { siteConfig } from "@/lib/config";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

export function Faqs() {
  return (
    <Section
      id="faqs"
      eyebrow="FAQs"
      title="Frequently asked questions"
      description="Answers to common questions from investors, partners, and prospective collaborators."
    >
      <Accordion type="single" collapsible className="space-y-3">
        {siteConfig.faqs.map((faq) => (
          <AccordionItem key={faq.question} value={faq.question}>
            <AccordionTrigger className="rounded-3xl border border-brand-line/70 bg-white/75 px-5 py-4 text-left text-base font-semibold text-brand-ink shadow-xs">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="border border-t-0 border-brand-line/70 bg-brand-mist/40 px-5 py-4 text-sm leading-relaxed text-brand-muted">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
