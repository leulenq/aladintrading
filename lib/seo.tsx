import type { Metadata } from "next";
import { siteConfig } from "./config";

export const defaultMetadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  keywords: siteConfig.meta.keywords,
  metadataBase: new URL("https://www.aladiantrading.com"),
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    url: "https://www.aladiantrading.com",
    siteName: siteConfig.name,
    images: [{ url: "/og-cover.svg", width: 1200, height: 630, alt: siteConfig.tagline }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: ["/og-cover.svg"],
  },
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.svg" },
      { rel: "apple-touch-icon", url: "/favicon.svg" },
    ],
  },
};

export function buildMetadata(overrides: Metadata = {}): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...overrides.openGraph,
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...overrides.twitter,
    },
  };
}

export function organizationJsonLd() {
  const { contact, values } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.name,
    url: "https://www.aladiantrading.com",
    logo: "https://www.aladiantrading.com/logo.svg",
    foundingDate: "2025",
    telephone: contact.phones,
    email: [contact.email],
    address: {
      "@type": "PostalAddress",
      addressCountry: "Ethiopia",
      addressLocality: contact.address,
      streetAddress: contact.landmark,
    },
    areaServed: ["Africa", "Middle East"],
    keywords: values.map((value) => value.name).join(", "),
  };
}
