import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travis Kirby',
  description: 'Digital resume'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="ink">
      <body>{children}</body>
    </html>
  );
}