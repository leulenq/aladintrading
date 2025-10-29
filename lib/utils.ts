import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string) {
  return phone.replace(/\s+/g, "");
}

export function statusToLabel(status: "active" | "construction" | "procurement") {
  switch (status) {
    case "active":
      return "Active";
    case "construction":
      return "Factory Construction";
    case "procurement":
      return "Machinery Procurement";
    default:
      return "In Progress";
  }
}

export function statusToProgress(status: "active" | "construction" | "procurement") {
  switch (status) {
    case "active":
      return 90;
    case "construction":
      return 60;
    case "procurement":
      return 30;
    default:
      return 45;
  }
}
