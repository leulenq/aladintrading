"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { sections } from "@/lib/sections";
import { useScrollSpy } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(sections.map((section) => section.id));

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-line bg-white/80 text-brand-ink backdrop-blur lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-brand-ink/40 backdrop-blur-sm" />
        <DialogPrimitive.Content
          className="fixed inset-y-0 right-0 z-50 w-72 bg-brand-surface p-6 shadow-lg focus:outline-none"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-brand-ink">Menu</span>
            <DialogPrimitive.Close
              className="rounded-full border border-brand-line bg-white/80 p-2 text-brand-ink"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </DialogPrimitive.Close>
          </div>
          <ul className="mt-6 space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <DialogPrimitive.Close asChild>
                  <Link
                    href={`#${section.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-base font-medium transition",
                      activeId === section.id
                        ? "bg-brand-accent text-white"
                        : "text-brand-muted hover:bg-brand-mist/70 hover:text-brand-ink",
                    )}
                  >
                    {section.label}
                  </Link>
                </DialogPrimitive.Close>
              </li>
            ))}
          </ul>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
