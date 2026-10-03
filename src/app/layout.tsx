import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Manrope, Syne } from 'next/font/google'
import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Preloader from '@/components/Preloader'
import Providers from '@/components/Providers'
import SceneLoader from '@/components/canvas/SceneLoader'
import { profile, socials } from '@/lib/data'
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/lib/site'
import './globals.css'

const syne = Syne({ subsets: ['latin'], variable: '--font-syne', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: 'Aniruddha Sil',
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  keywords: [
    'Aniruddha Sil',
    'lawlesx',
    'frontend developer',
    'React developer',
    'Next.js developer',
    'Thoughtworks',
    'Bangalore',
    'creative developer',
    'WebGL',
    'Three.js',
    'Blender',
    'Unreal Engine',
    'portfolio',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: SITE_TITLE,
    description: 'Websites, motion and tiny 3D worlds.',
    url: '/',
    siteName: 'Aniruddha Sil',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/og.jpg', width: 1200, height: 630, alt: 'A Blender render of a cave with a glowing sword' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: 'Websites, motion and tiny 3D worlds.',
    images: ['/images/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  // Google Search Console: set GOOGLE_SITE_VERIFICATION in Vercel to the code from the HTML-tag method
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
  formatDetection: { telephone: false, email: false, address: false },
}

// Structured data so search engines know who the site is about.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  alternateName: profile.handle,
  url: SITE_URL,
  image: `${SITE_URL}${profile.photo}`,
  jobTitle: 'Frontend Developer',
  worksFor: { '@type': 'Organization', name: 'Thoughtworks' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Nitte Meenakshi Institute of Technology' },
  address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressCountry: 'IN' },
  knowsAbout: ['React', 'Next.js', 'TypeScript', 'WebGL', 'Three.js', 'Blender', 'Unreal Engine'],
  sameAs: socials.map((s) => s.href),
}

export const viewport: Viewport = {
  themeColor: '#07060d',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
        />
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
