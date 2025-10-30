import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "muted" | "outline" | "accent";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const base = "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide";
  const variants = {
    default: "bg-brand-accent text-white shadow-xs",
    muted: "bg-brand-mist text-brand-ink",
    outline: "border border-brand-line text-brand-ink",
    accent: "bg-brand-blush text-brand-ink",
  } as const;
  return <span className={cn(base, variants[variant], className)} {...props} />;
}
