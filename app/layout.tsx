import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://hnmspace.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'HNM SPACE | Built to Endure',
    template: '%s | HNM SPACE',
  },
  description: 'HNM SPACE는 마케팅, 커머스, 유통을 기반으로 장기적 관점의 사업 구조를 운영하는 기업 그룹입니다.',
  keywords: [
    'HNM SPACE',
    '에이치엔엠스페이스',
    'hnmspace',
    'Built to Endure',
    '마케팅 기업',
    '커머스 기업',
    '유통 기업',
    '마케팅 커머스 유통',
    '기업 그룹',
    '브랜드 운영',
    '사업 운영',
  ],
  authors: [{ name: 'HNM SPACE' }],
  creator: 'HNM SPACE',
  publisher: 'HNM SPACE',
  category: 'Business',
  alternates: {
    canonical: '/',
  },
  manifest: '/site.webmanifest',
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
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HNM SPACE',
  alternateName: ['에이치엔엠스페이스', 'hnmspace'],
  url: siteUrl,
  logo: `${siteUrl}/icon-512.png`,
  image: `${siteUrl}/og-image.png`,
  description: 'HNM SPACE는 마케팅, 커머스, 유통을 기반으로 장기적 관점의 사업 구조를 운영하는 기업 그룹입니다.',
  slogan: 'Built to Endure.',
  email: 'henry@hnmspace.com',
  areaServed: 'KR',
  knowsAbout: ['Marketing', 'Commerce', 'Distribution', 'Brand', 'Business Operations'],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'henry@hnmspace.com',
      contactType: 'business inquiries',
      availableLanguage: ['ko', 'en'],
    },
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'HNM SPACE',
  url: siteUrl,
  inLanguage: 'ko-KR',
  description: 'Marketing. Commerce. Distribution.',
  publisher: {
    '@type': 'Organization',
    name: 'HNM SPACE',
    url: siteUrl,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
