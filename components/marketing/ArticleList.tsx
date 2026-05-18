import Link from 'next/link'
import type { ArticleMeta } from '@/lib/articles'
import { formatArticleDate, normalizeTag } from '@/lib/articles'

function MetaLine({ article }: { article: ArticleMeta }) {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-4 font-utility text-[13px] leading-[1.35] text-[#5A6472]">
      {article.category && <p>{article.category}</p>}
      {article.publishedAt && <p>{formatArticleDate(article.publishedAt)}</p>}
      {article.readingMinutes && <p>{article.readingMinutes} min read</p>}
    </div>
  )
}

function Tags({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null

  return (
    <div className="mt-14 flex flex-wrap gap-x-10 gap-y-8">
      {tags.slice(0, 4).map((tag) => (
        <Link
          key={tag}
          href={`/blog/tags/${normalizeTag(tag)}`}
          className="font-utility text-[13px] leading-none text-[#2E6171] underline decoration-[#B8860B]/55 underline-offset-4 transition-colors hover:text-[#0B2545]"
        >
          {tag}
        </Link>
      ))}
    </div>
  )
}

export function ArticleList({ articles }: { articles: ArticleMeta[] }) {
  const [featuredArticle, ...supportingArticles] = articles

  if (!featuredArticle) return null

  return (
    <div>
      <article className="grid gap-18 border-y border-[#2E6171]/30 py-24 md:grid-cols-[0.35fr_0.65fr] md:gap-28 md:py-34">
        <div>
          <p className="font-utility text-[13px] leading-none text-[#2E6171]">Start here</p>
          <div className="mt-12">
            <MetaLine article={featuredArticle} />
          </div>
        </div>
        <div>
          <Link href={featuredArticle.href} className="group">
            <h2 className="max-w-[760px] font-display text-[40px] font-normal leading-[1.04] text-[#0B2545] group-hover:underline md:text-[56px] md:leading-[1.02]">
              {featuredArticle.title}
            </h2>
          </Link>
          {featuredArticle.description && (
            <p className="mt-12 max-w-[720px] font-body text-[18px] leading-[1.58] text-[#1A1D24]/78 md:mt-16 md:text-[20px]">
              {featuredArticle.description}
            </p>
          )}
          <Tags tags={featuredArticle.tags} />
        </div>
      </article>

      <div className="divide-y divide-[#2E6171]/22">
        {supportingArticles.map((article) => (
          <article key={article.href} className="grid gap-12 py-22 md:grid-cols-[0.26fr_0.74fr] md:gap-22 md:py-26">
            <MetaLine article={article} />
            <div>
              <Link href={article.href} className="group">
                <h2 className="max-w-[720px] font-display text-[30px] font-normal leading-[1.1] text-[#0B2545] group-hover:underline md:text-[38px]">
                  {article.title}
                </h2>
              </Link>
              {article.description && (
                <p className="mt-10 max-w-[680px] font-body text-[17px] leading-[1.56] text-[#1A1D24]/76 md:text-[18px]">
                  {article.description}
                </p>
              )}
              <Tags tags={article.tags} />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
