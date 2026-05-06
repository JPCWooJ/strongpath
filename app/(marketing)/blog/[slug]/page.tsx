import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticleJsonLd } from '@/components/marketing/ArticleJsonLd'
import { ArticleLayout } from '@/components/marketing/ArticleLayout'
import { estimateReadingMinutes } from '@/lib/articles'
import { buildArticleMetadata } from '@/lib/seo'
import { client, postQuery, postSlugsQuery } from '@/lib/sanity'
import type { Post } from '@/lib/sanity'

export const revalidate = 60

export async function generateStaticParams() {
  const posts: Array<{ slug: string }> = await client.fetch(postSlugsQuery)
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post: Post | null = await client.fetch(postQuery, { slug: params.slug })

  if (!post) return {}

  return buildArticleMetadata(post)
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post: Post | null = await client.fetch(postQuery, { slug: params.slug })

  if (!post) notFound()

  return (
    <>
      <ArticleJsonLd post={post} />
      <ArticleLayout
        post={post}
        readingMinutes={post.estimatedReadingMinutes || estimateReadingMinutes(post)}
      />
    </>
  )
}
