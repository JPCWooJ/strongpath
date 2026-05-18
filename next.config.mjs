/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for embedded Sanity Studio in Next.js 14
  // 'sanity' must be listed — the Studio code lives there, not just in next-sanity
  transpilePackages: ['next-sanity', 'sanity', '@sanity/ui', '@sanity/icons'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'books.google.com',
        pathname: '/books/content',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/images/I/**',
      },
    ],
  },
}

export default nextConfig;
