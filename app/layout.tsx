import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Applyfast — Tailor your resume to any job in 10 seconds",
  description:
    "Paste a job description and your resume. Get a tailored resume + cover letter back, instantly. Open source, fork it, add your AI key, ship it.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return (
    <html lang="en">
      <body className={`${geistSans.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
