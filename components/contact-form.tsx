"use client";

import { FormEvent, useTransition } from "react";
import { Button } from "./button";
import { cn, formatPhone } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/toast";

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const router = useRouter();
  const toast = useToast();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("form-name", "contact");

    startTransition(async () => {
      try {
        const response = await fetch("/.netlify/functions/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Object.fromEntries(formData.entries())),
        });

        if (!response.ok) {
          throw new Error("Unable to submit");
        }

        form.reset();
        toast({
          title: "Message sent",
          description: "Thank you for connecting with Aladian Trading. Our team will respond shortly.",
          variant: "success",
        });
        setTimeout(() => {
          router.replace("/?contact=success#contact");
        }, 1000);
      } catch (error) {
        console.error(error);
        toast({
          title: "Submission failed",
          description: "We could not send your message. Please retry or reach us directly by phone.",
          variant: "error",
        });
      }
    });
  };

  return (
    <form
      name="contact"
      method="POST"
      action="/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={cn("space-y-5", className)}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-brand-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-brand-line bg-brand-surface px-4 py-3 text-sm text-brand-ink shadow-xs focus:border-brand-accent focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-brand-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-brand-line bg-brand-surface px-4 py-3 text-sm text-brand-ink shadow-xs focus:border-brand-accent focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-brand-ink">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            defaultValue={siteConfig.contact.phones[0] ? formatPhone(siteConfig.contact.phones[0]) : undefined}
            className="w-full rounded-lg border border-brand-line bg-brand-surface px-4 py-3 text-sm text-brand-ink shadow-xs focus:border-brand-accent focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-brand-ink">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            className="w-full rounded-lg border border-brand-line bg-brand-surface px-4 py-3 text-sm text-brand-ink shadow-xs focus:border-brand-accent focus:outline-none"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-brand-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-brand-line bg-brand-surface px-4 py-3 text-sm text-brand-ink shadow-xs focus:border-brand-accent focus:outline-none"
        />
      </div>
      <Button type="submit" className="w-full sm:w-auto" disabled={isPending}>
        {isPending ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
