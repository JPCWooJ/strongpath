import type { Post } from '@/lib/sanity'
import { articleHref } from '@/lib/articles'
import { absoluteUrl, siteMetadata } from '@/lib/site'

export function ArticleJsonLd({ post }: { post: Post }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: absoluteUrl(articleHref(post)),
    author: {
      '@type': 'Organization',
      name: post.author || siteMetadata.publisher.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.publisher.name,
      url: siteMetadata.url,
    },
    keywords: post.tags?.join(', '),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
