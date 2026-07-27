import { HeroStat, NavLink } from "@/lib/types";
import { Github, Linkedin, Twitter } from "lucide-react";


export const NAV_LINKS: NavLink[] = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Why Us", href: "#why-us" },
  { label: "Stories", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_STATS: HeroStat[] = [
  { value: "42K+", label: "developers practicing" },
  { value: "1,200+", label: "curated problems" },
  { value: "89%", label: "report interview confidence" },
];

export const FOOTER_SOCIAL_LINKS = [
  { icon: Github, label: "GitHub" },
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Practice tracks", href: "#product" },
      { label: "Mock interviews", href: "#features" },
      { label: "Pricing", href: "#cta" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why CodeHurdle", href: "#why-us" },
      { label: "Stories", href: "#testimonials" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Help center", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
];