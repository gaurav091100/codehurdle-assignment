import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { STEPS } from "@/constants";
import { Step } from "@/lib/types";

export function ProductOverview() {
  return (
    <section id="product" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="One structured loop, from fundamentals to offer"
            subtitle="CodeHurdle isn't a problem archive. It's a path: diagnose, practice, simulate, and repeat until the interview feels routine."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {STEPS.map((step:Step, index:number) => (
            <Reveal key={step.title} delay={index * 0.1}>
              <div className="relative h-full rounded-2xl border border-border/10 bg-surface p-7">
                <step.icon
                  className="h-6 w-6 text-brand-fg"
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
