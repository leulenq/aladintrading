"use client";

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "@/lib/utils";

interface ToastItem {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: "default" | "success" | "error";
}

interface ToastContextValue {
  toast: (toast: Omit<ToastItem, "id">) => void;
}

const ToastContext = React.createContext<ToastContextValue | undefined>(undefined);

const variantClasses: Record<NonNullable<ToastItem["variant"]>, string> = {
  default: "bg-brand-surface text-brand-ink border-brand-line",
  success: "bg-emerald-50 text-emerald-900 border-emerald-200",
  error: "bg-rose-50 text-rose-900 border-rose-200",
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  const toast = React.useCallback((toastData: Omit<ToastItem, "id">) => {
    setToasts((prev) => [...prev, { id: crypto.randomUUID?.() ?? Math.random().toString(36), ...toastData }]);
  }, []);

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      <ToastPrimitive.Provider duration={4000} swipeDirection="right">
        {children}
        {toasts.map((toastItem) => (
          <ToastPrimitive.Root
            key={toastItem.id}
            className={cn(
              "pointer-events-auto relative flex w-full max-w-sm items-start gap-3 rounded-2xl border px-4 py-3 shadow-md shadow-brand-ink/10",
              variantClasses[toastItem.variant ?? "default"],
            )}
            onOpenChange={(open) => {
              if (!open) {
                removeToast(toastItem.id);
              }
            }}
            open
          >
            <div className="flex-1 space-y-1 text-sm leading-relaxed">
              {toastItem.title && <div className="font-semibold">{toastItem.title}</div>}
              {toastItem.description && <div className="text-sm/relaxed opacity-90">{toastItem.description}</div>}
            </div>
            <ToastPrimitive.Close className="btn-reset text-sm font-medium text-brand-muted hover:text-brand-ink">
              Close
            </ToastPrimitive.Close>
          </ToastPrimitive.Root>
        ))}
        <ToastPrimitive.Viewport className="fixed bottom-6 right-6 z-[60] flex w-full max-w-sm flex-col gap-3" />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context.toast;
}
