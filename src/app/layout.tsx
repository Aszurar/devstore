import './globals.css'

import type { Metadata } from 'next'
import { Inter, Roboto_Mono as RobotoM } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const roboto = RobotoM({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | devstore',
    default: 'devstore',
  },
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${roboto.variable}`}>
      <body className="bg-zinc-950 text-zinc-50 antialiased ">{children}</body>
    </html>
  )
}
