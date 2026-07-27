import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section";
}

/**
 * Provides one consistent horizontal rhythm (max-width + gutters) for every
 * section on the page, so spacing never drifts section to section.
 */
export function Container({
  as: Tag = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
