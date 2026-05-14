import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticleJsonLd } from '@/components/marketing/ArticleJsonLd'
import { ArticleLayout } from '@/components/marketing/ArticleLayout'
import { estimateReadingMinutes, normalizeTag, toArticleMeta } from '@/lib/articles'
import { findFlagshipArticle, flagshipArticles, mergePublishedPosts } from '@/lib/flagship-articles'
import { buildArticleMetadata } from '@/lib/seo'
import { client, postQuery, postsQuery, postSlugsQuery } from '@/lib/sanity'
import type { Post } from '@/lib/sanity'

export const revalidate = 60

export async function generateStaticParams() {
  const posts: Array<{ slug: string }> = await client.fetch(postSlugsQuery)
  return [
    ...flagshipArticles.map((post) => ({ slug: post.slug.current })),
    ...posts.map((post) => ({ slug: post.slug })),
  ]
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post: Post | null =
    findFlagshipArticle(params.slug) || (await client.fetch(postQuery, { slug: params.slug }))

  if (!post) return {}

  return buildArticleMetadata(post)
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post: Post | null =
    findFlagshipArticle(params.slug) || (await client.fetch(postQuery, { slug: params.slug }))

  if (!post) notFound()

  const posts: Post[] = await client.fetch(postsQuery)
  const currentTags = new Set((post.tags || []).map(normalizeTag))
  const candidatePosts = mergePublishedPosts(posts).filter(
    (candidate) => candidate.slug.current !== post.slug.current && Boolean(candidate.category)
  )
  const scoredArticles = candidatePosts
    .map((candidate) => {
      const sharedTags = (candidate.tags || []).filter((tag) => currentTags.has(normalizeTag(tag)))
      const categoryScore = candidate.category && candidate.category === post.category ? 4 : 0
      return {
        article: candidate,
        score: categoryScore + sharedTags.length * 2,
      }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score
      return new Date(b.article.publishedAt || 0).getTime() - new Date(a.article.publishedAt || 0).getTime()
    })
    .map(({ article }) => article)
  const scoredSlugs = new Set(scoredArticles.map((article) => article.slug.current))
  const fallbackArticles = candidatePosts.filter((article) => !scoredSlugs.has(article.slug.current))
  const relatedArticles = [...scoredArticles, ...fallbackArticles].slice(0, 4).map(toArticleMeta)

  return (
    <>
      <ArticleJsonLd post={post} />
      <ArticleLayout
        post={post}
        readingMinutes={post.estimatedReadingMinutes || estimateReadingMinutes(post)}
        relatedArticles={relatedArticles}
      />
    </>
  )
}
