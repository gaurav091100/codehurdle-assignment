import Link from "next/link";
import { Terminal } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FOOTER_COLUMNS, FOOTER_SOCIAL_LINKS } from "@/constants/index";
import { FooterColumn, FooterSocialLink } from "@/lib/types";

export function Footer() {
  return (
    <footer className="border-t border-border/10 bg-footer-background">
      <Container className="py-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Link href="#top" className="flex items-center gap-2 text-footer-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/20 text-brand-fg">
                <Terminal className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-base font-semibold tracking-tight">
                CodeHurdle
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-footer-foreground/50">
              Structured practice and mock interviews for engineers preparing
              for their next technical interview.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {FOOTER_SOCIAL_LINKS.map(({ icon: Icon, label }:FooterSocialLink) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border/10 text-footer-foreground/60 transition-colors hover:border-border/25 hover:text-footer-foreground"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((column:FooterColumn) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-footer-foreground">
                {column.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-footer-foreground/50 transition-colors hover:text-footer-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/10 pt-8 sm:flex-row">
          <p className="text-xs text-footer-foreground/40">
            © {new Date().getFullYear()} CodeHurdle. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-footer-foreground/40 hover:text-footer-foreground/70"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-footer-foreground/40 hover:text-footer-foreground/70"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
