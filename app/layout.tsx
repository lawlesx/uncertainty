import './globals.css';
import { Montserrat, Quicksand } from '@next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${montserrat.variable} ${quicksand.variable}`}>
      <head />
      <body>{children}</body>
    </html>
  )
}
