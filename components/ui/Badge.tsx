import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border/10 bg-foreground/5 px-3 py-1 text-xs font-medium tracking-wide text-brand-fg",
        className
      )}
    >
      {children}
    </span>
  );
}
