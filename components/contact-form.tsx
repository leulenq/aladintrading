"use client";

import { FormEvent, useState, useTransition } from "react";
import { Button } from "./button";
import { cn, formatPhone } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import { useRouter } from "next/navigation";

interface ContactFormProps {
  className?: string;
}

type FormState = "idle" | "success" | "error";

export function ContactForm({ className }: ContactFormProps) {
  const router = useRouter();
  const [formState, setFormState] = useState<FormState>("idle");
  const [message, setMessage] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("form-name", "contact");
    setFormState("idle");
    setMessage("");

    startTransition(() => {
      (async () => {
        try {
          const response = await fetch("/.netlify/functions/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(formData.entries())),
          });

          if (!response.ok) {
            throw new Error("Something went wrong");
          }

          setFormState("success");
          setMessage("Thank you. Our team will be in touch shortly.");
          form.reset();
          setTimeout(() => router.push("/success"), 1200);
        } catch (error) {
          console.error(error);
          setFormState("error");
          setMessage("We could not send your message. Please try again or call us directly.");
        }
      })();
    });
  };

  return (
    <form
      name="contact"
      method="POST"
      action="/success"
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
            className="w-full rounded-lg border border-brand.line bg-white px-4 py-3 text-sm text-brand-ink shadow-xs focus:border-brand.black focus:outline-none"
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
            className="w-full rounded-lg border border-brand.line bg-white px-4 py-3 text-sm text-brand-ink shadow-xs focus:border-brand.black focus:outline-none"
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
            defaultValue={siteConfig.phones[0] ? formatPhone(siteConfig.phones[0]) : undefined}
            className="w-full rounded-lg border border-brand.line bg-white px-4 py-3 text-sm text-brand-ink shadow-xs focus:border-brand.black focus:outline-none"
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
            className="w-full rounded-lg border border-brand.line bg-white px-4 py-3 text-sm text-brand-ink shadow-xs focus:border-brand.black focus:outline-none"
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
          className="w-full rounded-lg border border-brand.line bg-white px-4 py-3 text-sm text-brand-ink shadow-xs focus:border-brand.black focus:outline-none"
        />
      </div>
      <Button type="submit" className="w-full sm:w-auto" disabled={isPending}>
        {isPending ? "Sending..." : "Send message"}
      </Button>
      {message && (
        <p
          className={cn(
            "text-sm",
            formState === "error" ? "text-red-600" : "text-emerald-600",
          )}
        >
          {message}
        </p>
      )}
    </form>
  );
}
