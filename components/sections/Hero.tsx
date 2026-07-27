import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { HERO_STATS } from "@/constants/index";
import { HeroStat } from "@/lib/types";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-24">
      {/* Subtle background grid + glow, purely decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]"
      />

      <Container className="relative grid gap-16 pb-20 lg:grid-cols-2 lg:items-center lg:pb-28">
        <Reveal>
          <div className="flex flex-col items-start gap-6">
            <Badge>
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
              Trusted by 42,000+ aspiring engineers
            </Badge>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Interview prep that tells you{" "}
              <span className="text-brand-fg">what to practice next</span>,
              not just what to solve.
            </h1>

            <p className="max-w-lg text-balance text-lg text-foreground/60">
              CodeHurdle turns scattered coding practice into a structured
              path — timed mock interviews, topic tracks, and progress you can
              actually measure.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="#cta" size="lg">
                Start practicing free
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="#product" variant="secondary" size="lg">
                See how it works
              </Button>
            </div>

            <dl className="mt-4 grid w-full grid-cols-3 gap-4 border-t border-border/10 pt-6">
              {HERO_STATS.map((stat:HeroStat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-semibold text-foreground">
                    {stat.value}
                  </dd>
                  <span className="text-xs text-foreground/50">{stat.label}</span>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <CodeWindow />
        </Reveal>
      </Container>
    </section>
  );
}

/**
 * Decorative product visual: a stylized "mock interview" code editor.
 * Static markup (no real code execution) — purely to make the hero concrete
 * rather than abstract, giving first-time visitors an immediate sense of
 * what "practicing on CodeHurdle" looks like.
 */
function CodeWindow() {
  return (
    <div className="relative rounded-2xl border border-border/10 bg-surface shadow-2xl shadow-black/40 backdrop-blur dark:bg-ink-900/80">
      <div className="flex items-center justify-between border-b border-border/10 px-5 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-green-400/70" />
        </div>
        <span className="text-xs text-foreground/40">mock_interview.py</span>
        <span className="flex items-center gap-1.5 rounded-full bg-accent-500/15 px-2.5 py-1 text-xs font-medium text-accent-400">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
          18:42 remaining
        </span>
      </div>

      <div className="space-y-1.5 px-6 py-6 font-mono text-[13px] leading-relaxed">
        <p className="text-foreground/40"># Problem: Merge overlapping intervals</p>
        <p>
          <span className="text-purple-600 dark:text-purple-300">def</span>{" "}
          <span className="text-brand-fg">merge</span>
          <span className="text-foreground/70">(intervals):</span>
        </p>
        <p className="pl-4 text-foreground/70">
          intervals.sort(<span className="text-accent-500 dark:text-accent-400">key</span>=
          <span className="text-purple-600 dark:text-purple-300">lambda</span> i: i[0])
        </p>
        <p className="pl-4 text-foreground/70">merged = []</p>
        <p className="pl-4">
          <span className="text-purple-600 dark:text-purple-300">for</span>{" "}
          <span className="text-foreground/70">start, end</span>{" "}
          <span className="text-purple-600 dark:text-purple-300">in</span>{" "}
          <span className="text-foreground/70">intervals:</span>
        </p>
        <p className="pl-8 text-foreground/70">...</p>
        <p className="mt-3 flex items-center gap-2 text-brand-fg">
          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
          Runtime: O(n log n) — optimal
        </p>
        <span className="mt-1 inline-block h-4 w-2 animate-blink bg-brand-fg" />
      </div>

      <div className="flex items-center justify-between border-t border-border/10 px-6 py-4">
        <span className="text-xs text-foreground/40">
          Feedback generated after submission
        </span>
        <span className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/70">
          Arrays &amp; Sorting
        </span>
      </div>
    </div>
  );
}
