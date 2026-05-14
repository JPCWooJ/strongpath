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
    <main>
      <section className="border-b border-inkwell/70 bg-parchment">
        <div className="sp-container grid gap-34 py-[76px] lg:grid-cols-[0.44fr_0.56fr] lg:items-end">
          <div>
            <p className="sp-kicker mb-18 text-inkwell/60">StrongPath research</p>
            <h1 className="font-display text-[52px] font-normal leading-[1] text-inkwell md:text-[78px]">
              Research made practical.
            </h1>
          </div>
          <div className="max-w-[660px] border-t border-inkwell/28 pt-18">
            <p className="font-body text-[22px] font-normal leading-[1.52] text-inkwell/84">
              Clear, evidence-oriented guidance on sarcopenia, strength training, protein,
              recovery, and helping aging parents protect capacity.
            </p>
            <p className="mt-18 font-utility text-[13px] leading-[1.45] text-inkwell/58">
              Published for careful readers who want the research, the context, and the practical
              meaning before advice.
            </p>
          </div>
        </div>
      </section>

      {Object.keys(tagCounts).length > 0 && (
        <section className="border-b border-inkwell/50 bg-[#f7f1e4]/45">
          <div className="sp-container grid gap-18 py-30 md:grid-cols-[0.24fr_0.76fr] md:items-start">
            <p className="font-utility text-[13px] leading-[1.45] text-inkwell/56">
              Research pathways
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-8">
              {Object.entries(tagCounts).map(([tag, count]) => (
                <Link
                  key={tag}
                  href={`/blog/tags/${tag}`}
                  className="border border-inkwell/28 px-10 py-6 font-utility text-[13px] leading-none text-inkwell/66 transition-colors hover:border-inkwell hover:text-inkwell"
                >
                  {tag.replace(/-/g, ' ')} ({count})
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-parchment">
        <div className="sp-container py-[72px]">
          {publishedPosts.length === 0 ? (
            <p className="sp-body text-inkwell/75">No posts yet.</p>
          ) : (
            <ArticleList articles={articles} />
          )}
        </div>
      </section>
    </main>
  )
}
