import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-[110px]"
      />
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border/10 bg-gradient-to-b from-foreground/[0.06] to-foreground/[0.02] px-6 py-16 text-center sm:px-16">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Start closing the gap between practice and the real interview
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-balance text-foreground/60">
              Free to start. No credit card required. Your first structured
              track is ready in under two minutes.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#" size="lg">
                Create your free account
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="#faq" variant="secondary" size="lg">
                Read the FAQ
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
