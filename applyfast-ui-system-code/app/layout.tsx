import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Applyfast UI System',
  description: 'Coded Applyfast design system and product screens',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
