import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://hnmspace.com'),
  title: {
    default: 'HNM SPACE | Built to Endure',
    template: '%s | HNM SPACE',
  },
  description: 'Marketing. Commerce. Distribution.',
  keywords: ['HNM SPACE', '에이치엔엠스페이스', 'Built to Endure', '마케팅', '커머스', '유통', '기업 그룹'],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    shortcut: ['/favicon.ico'],
  },
  openGraph: {
    title: 'HNM SPACE | Built to Endure',
    description: 'Marketing. Commerce. Distribution.',
    url: '/',
    siteName: 'HNM SPACE',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HNM SPACE | Built to Endure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HNM SPACE | Built to Endure',
    description: 'Marketing. Commerce. Distribution.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
