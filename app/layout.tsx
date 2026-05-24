// PROTECTED — APPEND ONLY. Add providers by wrapping children; do not modify existing providers or metadata.
import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { QueryProvider } from "@/lib/query/provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import { IntlProvider } from "./intl-provider";
import "./globals.css";

const defaultUrl =
  process.env.VERCEL_URL && process.env.VERCEL_URL.length > 0
    ? `https://${process.env.VERCEL_URL}`
    : process.env.PORTLESS_URL || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: "Applyfast — Visa-aware job search",
    template: "%s | Applyfast",
  },
  description:
    "Applyfast helps international candidates decide where to apply with sponsor confidence, visa-aware job analysis, resume tailoring, and tracking.",
  keywords: [
    "visa sponsorship jobs",
    "OPT jobs",
    "STEM OPT jobs",
    "H-1B sponsor jobs",
    "international student job search",
    "resume tailoring",
    "job tracker",
  ],
  authors: [{ name: "Applyfast" }],
  creator: "Applyfast",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Applyfast",
    title: "Applyfast — Stop applying blind",
    description:
      "Know whether a job is worth applying to before wasting time. Analyze sponsor confidence, visa fit, and resume match.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Applyfast — Stop applying blind",
    description:
      "Visa-aware job decisions for international candidates.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NuqsAdapter>
            <QueryProvider>
              <TooltipProvider>
                <Suspense>
                  <IntlProvider>
                    {children}
                  </IntlProvider>
                </Suspense>
              </TooltipProvider>
            </QueryProvider>
          </NuqsAdapter>
        </ThemeProvider>
        <Toaster richColors closeButton />
        <Analytics />
      </body>
    </html>
  );
}
