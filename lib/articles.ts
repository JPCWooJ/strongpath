import type { PortableTextBlock } from '@portabletext/react'
import type { Post } from '@/lib/sanity'

export type ArticleMeta = {
  href: string
  title: string
  description: string
  publishedAt?: string
  updatedAt?: string
  author?: string
  category?: string
  tags: string[]
  readingMinutes?: number
}

export function articleHref(post: Pick<Post, 'slug'>) {
  return `/blog/${post.slug.current}`
}

export function isPublicArticleSlug(slug?: string) {
  if (!slug) return false

  const normalizedSlug = slug.trim().toLowerCase()
  return !normalizedSlug.startsWith('test-') && !normalizedSlug.includes('delete-me')
}

export function isPublicArticle(post: Pick<Post, 'slug'>) {
  return isPublicArticleSlug(post.slug.current)
}

export function normalizeTag(tag: string) {
  return tag
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function displayTag(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export function formatArticleDate(date?: string) {
  if (!date) return null

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function getBlockText(blocks?: PortableTextBlock[]) {
  if (!blocks) return ''

  return blocks
    .map((block) => {
      if (!('children' in block) || !Array.isArray(block.children)) return ''

      return block.children
        .map((child) => {
          if (typeof child === 'object' && child && 'text' in child) return child.text
          return ''
        })
        .join('')
    })
    .filter(Boolean)
    .join(' ')
}

export function estimateReadingMinutes(post: Pick<Post, 'body' | 'excerpt'>) {
  const text = [post.excerpt, getBlockText(post.body)].filter(Boolean).join(' ')
  const words = text.trim().split(/\s+/).filter(Boolean).length

  if (words === 0) return undefined
  return Math.max(1, Math.ceil(words / 180))
}

export function toArticleMeta(post: Post): ArticleMeta {
  return {
    href: articleHref(post),
    title: post.title,
    description: post.excerpt || '',
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    author: post.author,
    category: post.category,
    tags: post.tags || [],
    readingMinutes: post.estimatedReadingMinutes || estimateReadingMinutes(post),
  }
}

export function getTagCounts(posts: Post[]) {
  return posts.reduce<Record<string, number>>((counts, post) => {
    for (const tag of post.tags || []) {
      const normalized = normalizeTag(tag)
      if (!normalized) continue
      counts[normalized] = (counts[normalized] || 0) + 1
    }

    return counts
  }, {})
}
