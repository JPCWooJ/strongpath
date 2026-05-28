import Link from 'next/link'
import Image from 'next/image'
import type { ArticleMeta } from '@/lib/articles'
import { formatArticleDate, normalizeTag } from '@/lib/articles'

function MetaLine({ article }: { article: ArticleMeta }) {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-4 font-utility text-[13px] leading-[1.35] text-[#5A6472]">
      {article.category && <p>{article.category}</p>}
      {article.publishedAt && <p>{formatArticleDate(article.publishedAt)}</p>}
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
      <article className="grid gap-18 border-y border-[#2E6171]/30 py-24 md:grid-cols-[0.42fr_0.58fr] md:gap-28 md:py-34">
        {featuredArticle.image && (
          <Link href={featuredArticle.href} className="group block">
            <Image
              src={featuredArticle.image.src}
              alt={featuredArticle.image.alt}
              width={900}
              height={600}
              priority
              className="aspect-[4/3] w-full border border-[#2E6171]/20 object-cover transition-opacity group-hover:opacity-90 md:aspect-[5/4]"
              style={{ objectPosition: featuredArticle.image.objectPosition }}
            />
          </Link>
        )}
        <div className="md:pt-2">
          <div>
            <p className="font-utility text-[13px] leading-none text-[#2E6171]">Start here</p>
            <div className="mt-10">
              <MetaLine article={featuredArticle} />
            </div>
          </div>
          <div className="mt-12 md:mt-16">
            <Link href={featuredArticle.href} className="group">
              <h2 className="max-w-[760px] font-display text-[38px] font-normal leading-[1.04] text-[#0B2545] group-hover:underline md:text-[52px] md:leading-[1.02]">
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
        </div>
      </article>

      <div className="divide-y divide-[#2E6171]/22">
        {supportingArticles.map((article) => (
          <article
            key={article.href}
            className="grid gap-12 py-20 md:grid-cols-[150px_minmax(0,1fr)] md:gap-20 md:py-24"
          >
            {article.image ? (
              <Link href={article.href} className="group block">
                <Image
                  src={article.image.src}
                  alt={article.image.alt}
                  width={420}
                  height={300}
                  className="aspect-[16/10] w-full border border-[#2E6171]/18 object-cover transition-opacity group-hover:opacity-90 md:aspect-[5/4]"
                  style={{ objectPosition: article.image.objectPosition }}
                />
              </Link>
            ) : (
              <div className="hidden border border-[#2E6171]/18 bg-[#FAF8F5] md:block" />
            )}
            <div>
              <MetaLine article={article} />
              <Link href={article.href} className="group mt-8 block">
                <h2 className="max-w-[720px] font-display text-[29px] font-normal leading-[1.1] text-[#0B2545] group-hover:underline md:text-[36px]">
                  {article.title}
                </h2>
              </Link>
              {article.description && (
                <p className="mt-9 max-w-[680px] font-body text-[17px] leading-[1.54] text-[#1A1D24]/76 md:text-[18px]">
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
