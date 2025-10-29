import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;
export const AccordionItem = AccordionPrimitive.Item;

export const AccordionTrigger = ({ className, children, ...props }: AccordionPrimitive.AccordionTriggerProps) => (
  <AccordionPrimitive.Trigger
    className={cn(
      "group flex w-full items-center justify-between gap-4 rounded-xl border border-brand.line bg-white/80 px-5 py-4 text-left text-base font-medium text-brand-ink transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand.accent focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronDown className="h-4 w-4 shrink-0 text-brand-muted transition-transform group-data-[state=open]:rotate-180" />
  </AccordionPrimitive.Trigger>
);

export const AccordionContent = ({ className, children, ...props }: AccordionPrimitive.AccordionContentProps) => (
  <AccordionPrimitive.Content
    className={cn(
      "mt-2 overflow-hidden rounded-xl border border-brand.line bg-white/70 text-sm text-brand-muted data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className,
    )}
    {...props}
  >
    <div className="px-5 py-4 leading-relaxed">{children}</div>
  </AccordionPrimitive.Content>
);
