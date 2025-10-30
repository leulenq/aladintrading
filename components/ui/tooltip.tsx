"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <TooltipPrimitive.Provider delayDuration={150}>{children}</TooltipPrimitive.Provider>;
}

export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export function TooltipContent({ className, ...props }: TooltipPrimitive.TooltipContentProps) {
  return (
    <TooltipPrimitive.Content
      sideOffset={8}
      className={cn(
        "max-w-xs rounded-xl border border-brand-line bg-brand-surface px-3 py-2 text-xs font-medium text-brand-ink shadow-sm shadow-brand-ink/10",
        className,
      )}
      {...props}
    />
  );
}
