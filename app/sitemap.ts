import type { MetadataRoute } from 'next'
import { articleHref, normalizeTag } from '@/lib/articles'
import { mergePublishedPosts } from '@/lib/flagship-articles'
import { client, postsQuery } from '@/lib/sanity'
import type { Post } from '@/lib/sanity'
import { absoluteUrl } from '@/lib/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: Post[] = await client.fetch(postsQuery)
  const publishedPosts = mergePublishedPosts(posts)
  const staticRoutes: MetadataRoute.Sitemap = ['/', '/blog', '/waitlist'].map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))

  const articleRoutes: MetadataRoute.Sitemap = publishedPosts.map((post) => ({
    url: absoluteUrl(articleHref(post)),
    lastModified: post.updatedAt || post.publishedAt || new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const tagRoutes: MetadataRoute.Sitemap = Array.from(
    new Set(publishedPosts.flatMap((post) => post.tags || []))
  ).map((tag) => ({
    url: absoluteUrl(`/blog/tags/${normalizeTag(tag)}`),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5,
  }))

  return [...staticRoutes, ...articleRoutes, ...tagRoutes]
}
