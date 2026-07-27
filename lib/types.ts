import type { LucideIcon } from "lucide-react";
export interface NavLink {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

export interface FooterSocialLink {
  icon: LucideIcon;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}