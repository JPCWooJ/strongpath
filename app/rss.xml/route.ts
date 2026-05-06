import { articleHref } from '@/lib/articles'
import { client, postsQuery } from '@/lib/sanity'
import type { Post } from '@/lib/sanity'
import { absoluteUrl, siteMetadata } from '@/lib/site'

export const revalidate = 3600

function escapeXml(value = '') {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const posts: Post[] = await client.fetch(postsQuery)
  const items = posts
    .map((post) => {
      const url = absoluteUrl(articleHref(post))

      return `
        <item>
          <title>${escapeXml(post.title)}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          ${post.publishedAt ? `<pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>` : ''}
          <description>${escapeXml(post.excerpt)}</description>
        </item>
      `
    })
    .join('')

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${escapeXml(siteMetadata.name)}</title>
        <link>${siteMetadata.url}</link>
        <description>${escapeXml(siteMetadata.description)}</description>
        <language>${siteMetadata.language}</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${items}
      </channel>
    </rss>`

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  })
}
