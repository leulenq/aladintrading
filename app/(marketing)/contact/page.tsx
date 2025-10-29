import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { Map } from "@/components/map";
import { siteConfig } from "@/lib/config";
import { formatPhone } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aladian Trading PLC | Contact",
  description: "Connect with Aladian Trading PLC for partnerships, supply chain collaborations, and investment opportunities.",
  openGraph: {
    title: "Aladian Trading PLC | Contact",
    description: "Connect with Aladian Trading PLC for partnerships, supply chain collaborations, and investment opportunities.",
    images: [{ url: "/og-cover.svg", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <Section title="Contact our team" description="We respond within one business day to all qualified partnership and supply requests.">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-8">
          <div className="rounded-2xl border border-brand.line/70 bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-brand-ink">Visit or reach out</h2>
            <dl className="mt-4 space-y-4 text-sm text-brand-muted">
              <div>
                <dt className="font-semibold text-brand-ink">Address</dt>
                <dd>
                  Ethiopia — Addis Abeba City, Yeka Sub-City, Woreda 09, H.No 2465, in front of Ethiopian Electric Utility HQ
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-ink">Phone</dt>
                {siteConfig.phones.map((phone) => (
                  <dd key={phone}>
                    <a className="hover:text-brand-ink" href={`tel:${formatPhone(phone)}`}>
                      {phone}
                    </a>
                  </dd>
                ))}
              </div>
              <div>
                <dt className="font-semibold text-brand-ink">Email</dt>
                {siteConfig.emails.map((email) => (
                  <dd key={email}>
                    <a className="hover:text-brand-ink" href={`mailto:${email}`}>
                      {email}
                    </a>
                  </dd>
                ))}
              </div>
              <div>
                <dt className="font-semibold text-brand-ink">Website</dt>
                <dd>{siteConfig.website}</dd>
              </div>
            </dl>
          </div>
          <Map />
        </div>
        <div className="rounded-2xl border border-brand.line/70 bg-white/80 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-brand-ink">Send us a message</h2>
          <p className="mt-2 text-sm text-brand-muted">
            Share your project brief or procurement requirement and our business development team will follow up with precise next steps.
          </p>
          <ContactForm className="mt-6" />
        </div>
      </div>
    </Section>
  );
}
