"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PhoneCall, Mail } from "lucide-react";
import { Nav } from "./nav";
import { MobileNav } from "./mobile-nav";
import { Button } from "./button";
import { siteConfig } from "@/lib/config";
import { formatPhone } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const updateOffset = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty("--header-offset", `${headerRef.current.offsetHeight}px`);
      }
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50" ref={headerRef}>
      <div className="hidden border-b border-brand-line/60 bg-brand-mist/70 px-6 py-2 text-xs font-medium text-brand-muted sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center gap-6">
          <a className="inline-flex items-center gap-2 hover:text-brand-ink" href={`tel:${formatPhone(siteConfig.contact.phones[0])}`}>
            <PhoneCall className="h-3.5 w-3.5" />
            {siteConfig.contact.phones[0]}
          </a>
          <a className="inline-flex items-center gap-2 hover:text-brand-ink" href={`mailto:${siteConfig.contact.email}`}>
            <Mail className="h-3.5 w-3.5" />
            {siteConfig.contact.email}
          </a>
        </div>
        <span className="tracking-[0.3em] uppercase text-[10px] text-brand-muted/80">Addis Ababa • Africa Growth Hub</span>
      </div>
      <header
        className={`transition-colors ${scrolled ? "bg-brand-surface/95 shadow-sm shadow-brand-ink/5 backdrop-blur" : "bg-brand-surface/70"}`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="#overview" className="flex items-center gap-3" aria-label="Aladian Trading home">
            <Image src="/logo.svg" alt="Aladian Trading logo" width={120} height={32} className="h-8 w-auto" />
            <span className="hidden text-sm font-semibold tracking-[0.3em] text-brand-muted sm:inline">
              ALADIAN TRADING PLC
            </span>
          </Link>
          <Nav />
          <div className="flex items-center gap-3">
            <Button asChild size="sm" variant="outline">
              <Link href="#contact">Let's talk</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>
    </div>
  );
}
