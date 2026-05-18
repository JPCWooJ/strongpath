import type { Metadata } from 'next'
import type { Post } from '@/lib/sanity'
import { absoluteUrl, siteMetadata } from '@/lib/site'
import { articleHref } from '@/lib/articles'

type MetadataInput = {
  title: string
  description: string
  path?: string
  type?: 'website' | 'article'
  publishedAt?: string
  updatedAt?: string
  authors?: string[]
  tags?: string[]
  image?: string
  canonicalUrl?: string
}

export function buildMetadata({
  title,
  description,
  path = '/',
  type = 'website',
  publishedAt,
  updatedAt,
  authors,
  tags,
  image,
  canonicalUrl,
}: MetadataInput): Metadata {
  const url = canonicalUrl || absoluteUrl(path)
  const imageUrl = image || absoluteUrl(siteMetadata.socialImage)

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteMetadata.name,
      locale: siteMetadata.locale,
      type,
      publishedTime: publishedAt,
      modifiedTime: updatedAt || publishedAt,
      authors,
      tags,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

export function buildArticleMetadata(post: Post): Metadata {
  return buildMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt || siteMetadata.description,
    path: articleHref(post),
    type: 'article',
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    authors: post.author ? [post.author] : [siteMetadata.publisher.name],
    tags: post.tags,
    canonicalUrl: post.canonicalUrl,
  })
}
