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
      <section className="border-b border-inkwell">
        <div className="sp-container grid gap-40 py-[72px] lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <p className="sp-kicker mb-18 text-inkwell/70">StrongPath articles</p>
            <h1 className="font-display text-[54px] font-normal leading-[1] text-inkwell md:text-[82px]">
              Research made practical.
            </h1>
          </div>
          <p className="max-w-[640px] font-body text-[22px] font-medium leading-[1.45] text-inkwell/85">
            Clear, evidence-oriented guidance on sarcopenia, strength training, protein, recovery,
            and helping aging parents protect capacity.
          </p>
        </div>
      </section>

      {Object.keys(tagCounts).length > 0 && (
        <section className="border-b border-inkwell">
          <div className="sp-container py-40">
            <div className="flex flex-wrap gap-8">
              {Object.entries(tagCounts).map(([tag, count]) => (
                <Link
                  key={tag}
                  href={`/blog/tags/${tag}`}
                  className="border border-inkwell/40 px-8 py-4 font-utility text-caption leading-caption text-inkwell/70 transition-colors hover:border-inkwell hover:text-inkwell"
                >
                  {tag.replace(/-/g, ' ')} ({count})
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="sp-container py-60">
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
