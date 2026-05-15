export const siteMetadata = {
  name: 'StrongPath',
  title: 'StrongPath - Evidence-based strength for adults 55+',
  description:
    'Evidence-based strength guidance for adults and families facing age-related muscle loss.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://strongpath.vercel.app',
  locale: 'en_US',
  language: 'en-us',
  rssPath: '/rss.xml',
  socialImage: '/opengraph-image',
  publisher: {
    name: 'StrongPath',
  },
}

export function absoluteUrl(path = '/') {
  const baseUrl = siteMetadata.url.replace(/\/$/, '')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${normalizedPath}`
}
