import { createClient, groq } from 'next-sanity'
import type { PortableTextBlock } from '@portabletext/react'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2026-04-24',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
})

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
  mainImage?: { asset: { _ref: string } }
  body?: PortableTextBlock[]
}

const publishedPostFilter = `_type == "post" && defined(slug.current) && draft != true`

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
  mainImage
}`
