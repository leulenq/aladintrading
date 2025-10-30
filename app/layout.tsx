import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ToastProvider } from "@/components/ui/toast";
import { ProgressBar } from "@/components/progress-bar";
import { ScrollSpy } from "@/components/scroll-spy";
import { BackToTop } from "@/components/back-to-top";
import { defaultMetadata, organizationJsonLd } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-brand-canvas font-sans text-brand-ink antialiased">
        <a
          href="#main"
          className="skip-link fixed left-6 top-4 -translate-y-16 rounded-full bg-brand-accent px-4 py-2 text-sm text-white shadow-sm focus:translate-y-0 focus:outline-none"
        >
          Skip to content
        </a>
        <ToastProvider>
          <ProgressBar />
          <ScrollSpy />
          <Header />
          <main id="main" className="relative overflow-hidden pt-[var(--header-offset,0px)]">{children}</main>
          <Footer />
          <BackToTop />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
          />
        </ToastProvider>
      </body>
    </html>
  );
}
