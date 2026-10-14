import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Old portfolio routes (v2). /uncertainty was the page Google ranked for "Aniruddha Sil";
  // permanent redirects hand that ranking to the new homepage instead of a 404.
  async redirects() {
    return [
      { source: '/uncertainty', destination: '/', permanent: true },
      { source: '/uncertainty/web', destination: '/#work', permanent: true },
      { source: '/uncertainty/artwork', destination: '/#after-dark', permanent: true },
      { source: '/uncertainty/:path*', destination: '/', permanent: true },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [40, 75],
    // YouTube thumbnails for renders without a local image
    remotePatterns: [new URL('https://i.ytimg.com/vi/**')],
  },
}

export default nextConfig
