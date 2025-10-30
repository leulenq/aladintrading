"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { sections } from "@/lib/sections";
import { useScrollSpy } from "@/lib/hooks";

export function Nav() {
  const activeId = useScrollSpy(sections.map((section) => section.id));

  return (
    <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
      {sections.map((section) => {
        const active = activeId === section.id;
        return (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition",
              active
                ? "bg-brand-accent text-white shadow-sm"
                : "text-brand-muted hover:bg-brand-mist/70 hover:text-brand-ink",
            )}
          >
            {section.label}
          </Link>
        );
      })}
    </nav>
  );
}
