const canonicalSiteUrl = 'https://www.strongpath.com'
const staleVercelHostname = ['strongpath', 'vercel', 'app'].join('.')

function resolveSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '')

  if (!configuredUrl) return canonicalSiteUrl

  try {
    const parsedUrl = new URL(
      configuredUrl.includes('://') ? configuredUrl : `https://${configuredUrl}`
    )

    if (parsedUrl.hostname === staleVercelHostname) return canonicalSiteUrl

    return parsedUrl.origin
  } catch {
    return configuredUrl
  }
}

export const siteMetadata = {
  name: 'StrongPath',
  title: 'StrongPath - Strength for life after 50',
  description:
    'Practical strength guidance for adults and families facing age-related muscle loss.',
  url: resolveSiteUrl(),
  locale: 'en_US',
  language: 'en-us',
  rssPath: '/rss.xml',
  socialImage: '/strongpath-og.png',
  publisher: {
    name: 'StrongPath',
  },
}

export function absoluteUrl(path = '/') {
  const baseUrl = siteMetadata.url.replace(/\/$/, '')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${normalizedPath}`
}
