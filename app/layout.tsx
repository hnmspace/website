import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HNM SPACE',
  description: 'Marketing, Commerce, Distribution. HNM Space connects strategy and execution for brands ready to grow.',
  openGraph: {
    title: 'HNM SPACE',
    description: 'Marketing · Commerce · Distribution',
    url: 'https://hnmspace.com',
    siteName: 'HNM SPACE',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
