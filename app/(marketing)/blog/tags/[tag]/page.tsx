import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticleList } from '@/components/marketing/ArticleList'
import { displayTag, normalizeTag, toArticleMeta } from '@/lib/articles'
import { mergePublishedPosts } from '@/lib/flagship-articles'
import { buildMetadata } from '@/lib/seo'
import { client, postsQuery } from '@/lib/sanity'
import type { Post } from '@/lib/sanity'

export const revalidate = 60

export async function generateStaticParams() {
  const posts: Post[] = await client.fetch(postsQuery)
  const publishedPosts = mergePublishedPosts(posts)
  const tags = new Set<string>()

  publishedPosts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tags.add(normalizeTag(tag))
    })
  })

  return Array.from(tags).map((tag) => ({ tag }))
}

export async function generateMetadata({
  params,
}: {
  params: { tag: string }
}): Promise<Metadata> {
  const label = displayTag(params.tag)

  return buildMetadata({
    title: `${label} Articles - StrongPath`,
    description: `StrongPath articles tagged ${label}.`,
    path: `/blog/tags/${params.tag}`,
  })
}

export default async function TagPage({ params }: { params: { tag: string } }) {
  const label = displayTag(params.tag)
  const allPosts: Post[] = await client.fetch(postsQuery)
  const posts = mergePublishedPosts(allPosts).filter((post) =>
    post.tags?.some((tag) => normalizeTag(tag) === params.tag)
  )

  if (posts.length === 0) notFound()

  return (
    <main>
      <section className="border-b border-near-black">
        <div className="sp-container py-[72px]">
          <p className="sp-kicker mb-18 text-near-black/70">Topic</p>
          <h1 className="font-display text-[54px] font-normal leading-[1] text-near-black md:text-[82px]">
            {label}
          </h1>
          <p className="mt-30 max-w-[680px] font-body text-[22px] font-medium leading-[1.45] text-near-black/85">
            StrongPath articles on {label.toLowerCase()}, written for careful readers who want
            evidence before advice.
          </p>
        </div>
      </section>

      <section>
        <div className="sp-container py-60">
          <ArticleList articles={posts.map(toArticleMeta)} />
        </div>
      </section>
    </main>
  )
}
