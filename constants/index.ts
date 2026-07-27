import { Feature, FooterColumn, FooterSocialLink, HeroStat, NavLink, Step, ValueProp } from "@/lib/types";
import {
  Code2,
  Target,
  Users,
  BookOpenCheck,
  Timer,
  Briefcase,
  ShieldCheck,
  LineChart,
  MessagesSquare,
  Rocket,
  Github,
  Linkedin,
  Twitter,
  Compass,
  PenLine,
  TrendingUp,
} from "lucide-react";

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

export const STEPS:Step[] = [
  {
    icon: Compass,
    title: "1. Get placed on a track",
    description:
      "A short diagnostic places you on a topic track matched to your current level — no guessing where to start.",
  },
  {
    icon: PenLine,
    title: "2. Practice with feedback",
    description:
      "Solve problems with hints layered by need, then read an explanation built around the pattern, not just the answer.",
  },
  {
    icon: TrendingUp,
    title: "3. Simulate the real thing",
    description:
      "Once a track is solid, take a timed mock interview that mirrors the format and pressure of the real interview.",
  },
];

export const FOOTER_SOCIAL_LINKS:FooterSocialLink[] = [
  { icon: Github, label: "GitHub" },
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
];

export const FOOTER_COLUMNS:FooterColumn[] = [
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

export const FEATURES: Feature[] = [
  {
    icon: Code2,
    title: "Structured practice paths",
    description:
      "Skip the random-problem grind. Follow topic-ordered tracks that build from fundamentals to interview-level difficulty.",
  },
  {
    icon: Timer,
    title: "Real interview simulations",
    description:
      "Timed mock interviews with realistic constraints, so the pressure of the real thing isn't a surprise on the day.",
  },
  {
    icon: LineChart,
    title: "Progress you can see",
    description:
      "Track topic mastery, weak spots, and momentum over time instead of guessing whether you're actually improving.",
  },
  {
    icon: MessagesSquare,
    title: "Editorial-quality explanations",
    description:
      "Every problem ships with a clear walkthrough of the approach, not just a solution to memorize.",
  },
  {
    icon: Users,
    title: "Peer discussion, curated",
    description:
      "Ask questions and compare approaches in moderated threads built for learning, not noise.",
  },
  {
    icon: Briefcase,
    title: "Company-focused sets",
    description:
      "Practice sets tagged by company and role so your prep matches the interviews you actually have coming up.",
  },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    icon: Target,
    title: "Built for outcomes, not streaks",
    description:
      "CodeHurdle measures readiness, not consistency theatre. We optimize for whether you'd pass the interview tomorrow.",
  },
  {
    icon: BookOpenCheck,
    title: "Curriculum written by engineers who hire",
    description:
      "Problem sets and explanations are reviewed by engineers who've sat on the other side of the interview table.",
  },
  {
    icon: ShieldCheck,
    title: "No pay-to-skip shortcuts",
    description:
      "Every learner follows the same evidence-based path. We don't sell shortcuts that undermine actual learning.",
  },
  {
    icon: Rocket,
    title: "Designed to get you unstuck fast",
    description:
      "Hint layers and guided nudges mean you're never stuck for more than a few minutes without direction.",
  },
];
