import { Section } from "@/components/section";
import { Button } from "@/components/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aladian Trading PLC | Message received",
  description: "Thank you for contacting Aladian Trading PLC. Our team will respond within one business day.",
};

export default function SuccessPage() {
  return (
    <Section title="Thank you" description="Your message has been delivered to the Aladian Trading team. We will review and respond shortly.">
      <div className="max-w-xl space-y-6 rounded-2xl border border-brand.line bg-white/80 p-8 text-brand-ink shadow-sm">
        <p>
          We appreciate your interest in collaborating with Aladian Trading PLC. Our specialists will review your enquiry and reach out with the next steps within one business day.
        </p>
        <Button asChild>
          <Link href="/">Back to homepage</Link>
        </Button>
      </div>
    </Section>
  );
}
