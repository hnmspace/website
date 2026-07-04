import './globals.css'

export const metadata = {
  title: 'HNM SPACE',
  description: 'Build. Grow. Last. HNM Space creates structures for brands that want to move.',
  openGraph: {
    title: 'HNM SPACE',
    description: 'Build. Grow. Last. HNM Space creates structures for brands that want to move.',
    url: 'https://hnmspace.com',
    siteName: 'HNM SPACE',
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
