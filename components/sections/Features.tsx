import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FEATURES } from "@/constants/index";
import { Feature } from "@/lib/types";

export function Features() {
  return (
    <section id="features" className="border-t border-border/10 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Key features"
            title="Everything you need to prepare, nothing you don't"
            subtitle="Every feature exists to answer one question: are you actually getting closer to being interview-ready?"
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature:Feature, index:number) => (
            <Reveal key={feature.title} delay={(index % 3) * 0.08}>
              <article className="group h-full rounded-2xl border border-border/10 bg-surface p-6 transition-colors hover:border-brand-400/30 hover:bg-surface-hover">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-fg transition-colors group-hover:bg-brand-500/20">
                  <feature.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
