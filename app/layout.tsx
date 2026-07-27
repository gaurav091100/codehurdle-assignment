import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CodeHurdle — Interview prep that tells you what to practice next",
  description:
    "Structured coding practice, timed mock interviews, and measurable progress for engineers preparing for technical interviews.",
  metadataBase: new URL("https://codehurdle.example.com"),
  openGraph: {
    title: "CodeHurdle — Structured interview prep for engineers",
    description:
      "Structured coding practice, timed mock interviews, and measurable progress for engineers preparing for technical interviews.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background font-sans text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
