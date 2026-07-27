import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { VALUE_PROPS } from "@/constants/index";
import { ValueProp } from "@/lib/types";

export function WhyChoose() {
  return (
    <section id="why-us" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Why CodeHurdle"
              title="Built around readiness, not vanity metrics"
              subtitle="Streaks and problem counts feel productive but don't predict interview performance. We designed around what actually does."
              className="lg:sticky lg:top-28"
            />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {VALUE_PROPS.map((item:ValueProp, index:number) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="h-full rounded-2xl border border-border/10 bg-surface p-6">
                  <item.icon
                    className="h-5 w-5 text-accent-500 dark:text-accent-400"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
