import './globals.css'

export const metadata = {
  title: 'HNM SPACE',
  description: 'Marketing, Commerce, Distribution. Built for results.',
  openGraph: {
    title: 'HNM SPACE',
    description: 'Marketing, Commerce, Distribution. Built for results.',
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
