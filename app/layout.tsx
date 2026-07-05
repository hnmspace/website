import './globals.css'

export const metadata = {
  title: 'HNM SPACE',
  description: 'HNM SPACE builds reliable structures across marketing, commerce, and distribution.'
  icons: {
    icon: '/png_05.png',
    apple: '/png_05.png',
  },
  openGraph: {
    title: 'HNM SPACE',
    description: 'HNM SPACE builds reliable structures across marketing, commerce, and distribution.'
    url: 'https://hnmspace.com',
    siteName: 'HNM SPACE',
    locale: 'ko_KR',
    type: 'website',
    images: ['/png_01.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
