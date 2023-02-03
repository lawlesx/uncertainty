import './globals.css';
import { Montserrat, Quicksand, Oswald } from '@next/font/google'
import { AnalyticsWrapper } from './components/analytics';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${montserrat.variable} ${quicksand.variable} ${oswald.variable} bg-background`}>
      <head />
      <body>{children}</body>
      <AnalyticsWrapper />
    </html>
  )
}
