import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/constants/index";
import { Testimonial } from "@/lib/types";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-t border-border/10 py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Social proof"
            title="Engineers who used the structure to get unstuck"
            subtitle="A sample of the kind of feedback we hear most — not about volume of problems solved, but about clarity gained."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial:Testimonial, index:number) => (
            <Reveal key={testimonial.name} delay={index * 0.1}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-border/10 bg-surface p-7">
                <div>
                  <Quote
                    className="h-6 w-6 text-brand-400/70"
                    aria-hidden="true"
                  />
                  <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground/80">
                    “{testimonial.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-sm font-semibold text-brand-fg"
                    aria-hidden="true"
                  >
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-foreground/50">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
