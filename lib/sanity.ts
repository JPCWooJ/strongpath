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
  publishedAt: string
  excerpt: string
  author: string
  mainImage: { asset: { _ref: string } }
  body?: PortableTextBlock[]
}

// All posts — list view (no body, keeps payload small)
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  author,
  mainImage
}`

// Single post by slug — includes body for full render
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  body,
  author,
  mainImage
}`
