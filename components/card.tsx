import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function Card({ children, className, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={cn(
        "group rounded-card border border-brand-line/70 bg-brand-surface/80 p-6 shadow-sm shadow-brand-ink/5 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-md",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function GlassCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/40 bg-white/60 p-6 shadow-sm shadow-brand-ink/10 backdrop-blur-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn("text-xl font-semibold text-brand-ink", className)}>{children}</h3>;
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("mt-3 text-sm leading-relaxed text-brand-muted", className)}>{children}</p>;
}
