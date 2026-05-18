import type { MetadataRoute } from 'next'
import { articleHref, normalizeTag } from '@/lib/articles'
import { mergePublishedPosts } from '@/lib/flagship-articles'
import { client, postsQuery } from '@/lib/sanity'
import type { Post } from '@/lib/sanity'
import { absoluteUrl } from '@/lib/site'

function routeLastModified(posts: Post[], path: string) {
  if (path === '/book') return undefined

  const timestamps = posts
    .map((post) => post.updatedAt || post.publishedAt)
    .filter(Boolean)
    .map((date) => new Date(date as string).getTime())
    .filter((time) => Number.isFinite(time))

  if (timestamps.length === 0) return undefined

  return new Date(Math.max(...timestamps))
}

function tagLastModified(posts: Post[], tag: string) {
  return routeLastModified(
    posts.filter((post) => post.tags?.some((postTag) => normalizeTag(postTag) === tag)),
    '/blog'
  )
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: Post[] = await client.fetch(postsQuery)
  const publishedPosts = mergePublishedPosts(posts)
  const staticRoutes: MetadataRoute.Sitemap = ['/', '/blog', '/book'].map((path) => ({
    url: absoluteUrl(path),
    lastModified: routeLastModified(publishedPosts, path),
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
    new Set(publishedPosts.flatMap((post) => post.tags?.map(normalizeTag) || []))
  ).map((tag) => ({
    url: absoluteUrl(`/blog/tags/${normalizeTag(tag)}`),
    lastModified: tagLastModified(publishedPosts, tag),
    changeFrequency: 'weekly',
    priority: 0.5,
  }))

  return [...staticRoutes, ...articleRoutes, ...tagRoutes]
}
