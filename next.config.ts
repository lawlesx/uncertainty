import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [40, 75],
    // YouTube thumbnails for renders without a local image
    remotePatterns: [new URL('https://i.ytimg.com/vi/**')],
  },
}

export default nextConfig
