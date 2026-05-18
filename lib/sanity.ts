import { createClient, groq } from 'next-sanity'
import type { PortableTextBlock } from '@portabletext/react'

type SanityClientLike = {
  fetch: <T = unknown>(query: string, params?: Record<string, unknown>) => Promise<T>
}

const hasSanityConfig = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET
)

export const client: SanityClientLike = hasSanityConfig
  ? createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
      apiVersion: '2026-04-24',
      useCdn: true,
      token: process.env.SANITY_API_TOKEN,
    })
  : {
      async fetch<T = unknown>(query: string): Promise<T> {
        return (query.includes('[0]') ? null : []) as T
      },
    }

export type Post = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt?: string
  updatedAt?: string
  excerpt?: string
  author?: string
  category?: string
  tags?: string[]
  seoTitle?: string
  seoDescription?: string
  canonicalUrl?: string
  estimatedReadingMinutes?: number
  sources?: ArticleSource[]
  mainImage?: { asset: { _ref: string } }
  heroImage?: ArticleImage
  body?: PortableTextBlock[]
}

export type ArticleSource = {
  title: string
  publication?: string
  year?: string
  href?: string
}

export type ArticleImage = {
  src: string
  alt: string
  credit: string
  sourceUrl: string
  licenseUrl: string
  caption?: string
  objectPosition?: string
}

const publicSlugFilter = `!(slug.current match "*draft*") && !(slug.current match "*test*") && !(slug.current match "*delete*")`
const publishedPostFilter = `_type == "post" && defined(slug.current) && draft != true && !(_id in path("drafts.**")) && ${publicSlugFilter}`

export const postsQuery = groq`*[${publishedPostFilter}] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  updatedAt,
  excerpt,
  author,
  category,
  tags,
  seoTitle,
  seoDescription,
  canonicalUrl,
  estimatedReadingMinutes,
  sources,
  mainImage
}`

export const postSlugsQuery = groq`*[${publishedPostFilter}] {
  "slug": slug.current
}`

export const postsByTagQuery = groq`*[
  ${publishedPostFilter} &&
  count((tags[])[lower(@) == lower($tag) || lower(@) match lower($tagDisplay)]) > 0
] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  updatedAt,
  excerpt,
  author,
  category,
  tags,
  seoTitle,
  seoDescription,
  canonicalUrl,
  estimatedReadingMinutes,
  sources,
  mainImage
}`

export const postQuery = groq`*[${publishedPostFilter} && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  updatedAt,
  excerpt,
  body,
  author,
  category,
  tags,
  seoTitle,
  seoDescription,
  canonicalUrl,
  estimatedReadingMinutes,
  sources,
  mainImage
}`
