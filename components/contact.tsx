"use client";

import { Section } from "./section";
import { siteConfig } from "@/lib/config";
import { formatPhone } from "@/lib/utils";
import { ContactForm } from "./contact-form";
import { Map } from "./map";
import { GlassCard } from "./card";

export function ContactCard() {
  const { contact } = siteConfig;

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Connect with our corporate team"
      description="We welcome partnership discussions, supplier collaborations, and stakeholder enquiries."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className="space-y-6">
          <GlassCard className="space-y-5 border-brand-line/60 bg-white/75 shadow-xs">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">Head office</p>
              <p className="mt-2 text-sm text-brand-muted">
                Ethiopia — Addis Ababa City, Yeka Sub-City, Woreda 09, H.No 2465, in front of Ethiopian Electric Utility HQ.
              </p>
            </div>
            <dl className="space-y-4 text-sm text-brand-ink">
              <div>
                <dt className="font-semibold">Address</dt>
                <dd className="text-brand-muted">
                  {contact.address}
                  <br />
                  {contact.landmark}
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Telephone</dt>
                <dd className="flex flex-wrap gap-3">
                  {contact.phones.map((phone) => (
                    <a key={phone} href={`tel:${formatPhone(phone)}`} className="text-brand-ink hover:underline">
                      {phone}
                    </a>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Email</dt>
                <dd>
                  <a href={`mailto:${contact.email}`} className="text-brand-ink hover:underline">
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Website</dt>
                <dd className="text-brand-muted">{contact.website}</dd>
              </div>
            </dl>
          </GlassCard>
          <Map />
        </div>
        <div className="rounded-3xl border border-brand-line/60 bg-white/80 p-6 shadow-sm shadow-brand-ink/5 backdrop-blur">
          <h3 className="text-lg font-semibold text-brand-ink">Send us a message</h3>
          <p className="mt-2 text-sm text-brand-muted">
            Share your enquiry and our corporate relations team will reach you within two business days.
          </p>
          <ContactForm className="mt-6" />
        </div>
      </div>
    </Section>
  );
}
