import './globals.css'

export const metadata = {
  title: 'HNM SPACE',
  description: 'HNM SPACE works across marketing, commerce, and distribution with quiet execution and clear standards.',
  icons: {
    icon: '/hnm-symbol-black.png',
    apple: '/hnm-symbol-black.png',
  },
  openGraph: {
    title: 'HNM SPACE',
    description: 'HNM SPACE works across marketing, commerce, and distribution with quiet execution and clear standards.',
    url: 'https://hnmspace.com',
    siteName: 'HNM SPACE',
    locale: 'ko_KR',
    type: 'website',
    images: ['/hnm-logo-primary-black.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
