import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://hnmspace.com'),
  title: {
    default: 'HNM SPACE | Built to Endure',
    template: '%s | HNM SPACE',
  },
  description: 'HNM SPACE는 마케팅, 커머스, 유통을 기반으로 장기적 관점의 사업 구조를 만들어가는 기업 그룹입니다.',
  keywords: ['HNM SPACE', '에이치엔엠스페이스', 'Built to Endure', '마케팅', '커머스', '유통', '기업 그룹'],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/hnm-symbol-black.png',
    apple: '/hnm-symbol-black.png',
  },
  openGraph: {
    title: 'HNM SPACE | Built to Endure',
    description: 'Built to Endure. Marketing. Commerce. Distribution.',
    url: '/',
    siteName: 'HNM SPACE',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/hnm-logo-primary-black.png',
        alt: 'HNM SPACE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HNM SPACE | Built to Endure',
    description: 'Built to Endure. Marketing. Commerce. Distribution.',
    images: ['/hnm-logo-primary-black.png'],
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
