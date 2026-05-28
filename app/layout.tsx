import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp"
})

const SITE_URL = "https://minna-no-kaigo-ai.vercel.app"
const TITLE = "みんなの介護AI｜介護専用プロンプト集"
const DESCRIPTION = "ChatGPT・Claudeで使える介護専用プロンプト集を販売。介護記録・ヒヤリハット・申し送りをメモを入れるだけで自動生成。"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: [
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/logo.png', sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/logo.png' }],
    url: SITE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="bg-background">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
