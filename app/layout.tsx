import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://hnmspace.com'),
  title: {
    default: 'HNM SPACE',
    template: '%s | HNM SPACE',
  },
  description: 'HNM SPACE는 마케팅, 커머스, 유통 사업을 운영하며 각 사업의 전문성과 그룹의 공통 기준을 바탕으로 지속 가능한 성장을 만들어갑니다.',
  keywords: ['HNM SPACE', '에이치엔엠스페이스', '마케팅', '커머스', '유통'],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/hnm-symbol-black.png',
    apple: '/hnm-symbol-black.png',
  },
  openGraph: {
    title: 'HNM SPACE',
    description: 'Marketing. Commerce. Distribution. 서로 다른 사업을 하나의 기준으로 운영합니다.',
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
    title: 'HNM SPACE',
    description: 'Marketing. Commerce. Distribution. 서로 다른 사업을 하나의 기준으로 운영합니다.',
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
