"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./nav";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand.line bg-white/70 text-brand-ink backdrop-blur lg:hidden" aria-label="Open menu">
        <Menu className="h-5 w-5" />
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-brand.black/60 backdrop-blur-sm" />
        <DialogPrimitive.Content
          className="fixed inset-y-0 right-0 z-50 w-72 bg-white p-6 shadow-lg focus:outline-none"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-brand-ink">Menu</span>
            <DialogPrimitive.Close className="rounded-full border border-brand.line bg-white/80 p-2 text-brand-ink" aria-label="Close menu">
              <X className="h-4 w-4" />
            </DialogPrimitive.Close>
          </div>
          <ul className="mt-6 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <DialogPrimitive.Close asChild>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-base font-medium text-brand-ink transition hover:bg-brand.bg",
                    )}
                  >
                    {link.label}
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
