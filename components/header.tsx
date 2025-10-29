"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Nav } from "./nav";
import { MobileNav } from "./mobile-nav";
import { Button } from "./button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur ${
        scrolled ? "bg-white/85 shadow-sm" : "bg-white/70"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Aladian Trading home">
          <Image src="/logo.svg" alt="Aladian Trading logo" width={120} height={32} className="h-8 w-auto" />
          <span className="hidden text-sm font-semibold tracking-[0.3em] text-brand-ink sm:inline">
            ALADIAN TRADING PLC
          </span>
        </Link>
        <Nav />
        <div className="flex items-center gap-3">
          <Button asChild size="sm" variant="secondary">
            <Link href="/contact">Let's talk</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
