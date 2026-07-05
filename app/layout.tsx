import './globals.css'

export const metadata = {
  metadataBase: new URL('https://hnmspace.com'),
  title: 'HNM SPACE',
  description: 'HNM SPACE works across marketing, commerce, and distribution with a focus on structure, execution, and trust.',
  icons: {
    icon: '/hnm-symbol-black.png',
    apple: '/hnm-symbol-black.png',
  },
  openGraph: {
    title: 'HNM SPACE',
    description: 'Marketing, commerce, and distribution — designed to work independently, built to work together.',
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
