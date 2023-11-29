import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import localFont from 'next/font/local'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const calSans = localFont({
  src: '../fonts/CalSans-SemiBold.woff2',
  variable: '--font-cal',
})

export const metadata: Metadata = {
  title: 'Everything Starts as a Square - Get lost in the world of icon design',
  description:
    'A book and video course that teaches you how to design your own icons from scratch.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        calSans.variable,
      )}
    >
      <head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
