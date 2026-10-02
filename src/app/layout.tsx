import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Manrope, Syne } from 'next/font/google'
import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Preloader from '@/components/Preloader'
import Providers from '@/components/Providers'
import SceneLoader from '@/components/canvas/SceneLoader'
import './globals.css'

const syne = Syne({ subsets: ['latin'], variable: '--font-syne', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://lawlesx.vercel.app'),
  title: 'Aniruddha Sil — Frontend Engineer & 3D Artist',
  description:
    'Portfolio of Aniruddha Sil (lawlesx): frontend engineer at Thoughtworks building expressive web experiences, Blender artist and aspiring game developer.',
  openGraph: {
    title: 'Aniruddha Sil — Frontend Engineer & 3D Artist',
    description: 'Websites, motion and tiny 3D worlds.',
    url: 'https://lawlesx.vercel.app',
    siteName: 'Aniruddha Sil',
    images: [{ url: '/images/renders/Cave.png', width: 1920, height: 1080 }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = {
  themeColor: '#07060d',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable} ${mono.variable}`}>
      <body>
        <Providers>
          <SceneLoader />
          <Preloader />
          <Cursor />
          <Nav />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
