import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string) {
  return phone.replace(/\s+/g, "");
}

const statusLabels: Record<string, string> = {
  operational: "Operational",
  "factory-construction": "Factory Construction",
  "machinery-procurement": "Machinery Procurement",
};

const statusColors: Record<string, string> = {
  operational: "bg-emerald-100 text-emerald-800",
  "factory-construction": "bg-amber-100 text-amber-800",
  "machinery-procurement": "bg-sky-100 text-sky-800",
};

export function projectStatusLabel(status: string) {
  return statusLabels[status] ?? status.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

export function projectStatusClass(status: string) {
  return statusColors[status] ?? "bg-brand-mist text-brand-ink";
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
