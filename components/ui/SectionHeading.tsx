import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Every section on the page follows the same heading pattern: an optional
 * eyebrow badge, a title, and a supporting subtitle. Centralizing it keeps
 * type scale and spacing identical across Features, FAQ, Testimonials, etc.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "text-balance text-base text-foreground/60 sm:text-lg",
            align === "center" ? "max-w-xl" : "max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
