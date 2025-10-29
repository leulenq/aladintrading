"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/businesses", label: "Businesses" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition",
              active ? "bg-brand.black text-brand.white" : "text-brand-muted hover:text-brand-ink hover:bg-brand.bg",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

export const navLinks = links;
