import Link from 'next/link'
import { ArticleList } from '@/components/marketing/ArticleList'
import { getTagCounts, toArticleMeta } from '@/lib/articles'
import { mergePublishedPosts } from '@/lib/flagship-articles'
import { buildMetadata } from '@/lib/seo'
import { client, postsQuery } from '@/lib/sanity'
import type { Post } from '@/lib/sanity'

export const revalidate = 60

export const metadata = buildMetadata({
  title: 'StrongPath Articles',
  description:
    'Evidence-based articles on age-related muscle loss, resistance training, protein, recovery, and helping aging parents stay strong.',
  path: '/blog',
})

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(postsQuery)
  const publishedPosts = mergePublishedPosts(posts)
  const tagCounts = getTagCounts(publishedPosts)
  const articles = publishedPosts.map(toArticleMeta)

  return (
    <main className="bg-parchment">
      <section className="border-b border-[#2E6171]/28 bg-[#FAF8F5]">
        <div className="sp-container grid gap-18 py-34 md:py-48 lg:grid-cols-[0.38fr_0.62fr] lg:items-end lg:gap-34">
          <div>
            <p className="font-utility text-[13px] leading-none text-[#2E6171]">StrongPath articles</p>
            <h1 className="mt-12 font-display text-[46px] font-normal leading-[1.02] text-[#0B2545] md:text-[72px] md:leading-[0.98]">
              Research made practical
            </h1>
          </div>
          <p className="max-w-[660px] font-body text-[18px] leading-[1.55] text-[#1A1D24]/78 md:text-[21px]">
            Clear, evidence-oriented guidance on sarcopenia, strength training, protein, recovery,
            and helping aging parents protect capacity.
          </p>
        </div>
      </section>

      {Object.keys(tagCounts).length > 0 && (
        <section className="border-b border-[#2E6171]/25">
          <div className="sp-container py-18 md:py-22">
            <div className="flex flex-wrap gap-8">
              {Object.entries(tagCounts).map(([tag, count]) => (
                <Link
                  key={tag}
                  href={`/blog/tags/${tag}`}
                  className="border border-[#2E6171]/32 px-9 py-5 font-utility text-[13px] leading-none text-[#1A1D24]/68 transition-colors hover:border-[#0B2545] hover:text-[#0B2545]"
                >
                  {tag.replace(/-/g, ' ')} ({count})
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="sp-container py-28 md:py-40">
          {publishedPosts.length === 0 ? (
            <p className="font-body text-[18px] leading-[1.6] text-[#1A1D24]/75">No posts yet.</p>
          ) : (
            <ArticleList articles={articles} />
          )}
        </div>
      </section>
    </main>
  )
}
