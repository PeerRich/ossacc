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
  title: 'oss/acc',
  description:
    'Everything is build with Open Source. The modern world we live in today would simply not exist.',
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
