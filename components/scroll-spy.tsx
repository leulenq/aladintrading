"use client";

import { sections } from "@/lib/sections";
import { useScrollSpy } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export function ScrollSpy() {
  const activeId = useScrollSpy(sections.map((section) => section.id));

  return (
    <nav aria-label="Section shortcuts" className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:flex lg:flex-col lg:gap-3">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={cn(
            "group relative flex h-3.5 w-3.5 items-center justify-center rounded-full bg-brand-line/70 transition", 
            activeId === section.id && "bg-brand-accent"
          )}
        >
          <span
            className={cn(
              "pointer-events-none absolute left-5 whitespace-nowrap rounded-full bg-brand-surface px-3 py-1 text-xs font-medium text-brand-ink opacity-0 shadow-sm transition group-hover:opacity-100",
              activeId === section.id && "opacity-100",
            )}
          >
            {section.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
