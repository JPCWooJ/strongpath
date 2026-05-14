import Link from 'next/link'
import type { ArticleMeta } from '@/lib/articles'
import { formatArticleDate, normalizeTag } from '@/lib/articles'

export function ArticleList({ articles }: { articles: ArticleMeta[] }) {
  const [featuredArticle, ...supportingArticles] = articles

  return (
    <div className="grid border-t border-inkwell/65">
      {featuredArticle && (
        <article
          key={featuredArticle.href}
          className="grid gap-24 border-b border-inkwell/45 py-34 md:grid-cols-[0.32fr_0.68fr] md:py-42"
        >
          <div className="font-utility text-[13px] leading-[1.45] text-inkwell/58">
            <p className="text-inkwell/72">Featured research</p>
            {featuredArticle.category && <p className="mt-14">{featuredArticle.category}</p>}
            {featuredArticle.publishedAt && (
              <p className="mt-6">{formatArticleDate(featuredArticle.publishedAt)}</p>
            )}
            {featuredArticle.readingMinutes && (
              <p className="mt-6">{featuredArticle.readingMinutes} min read</p>
            )}
          </div>
          <div>
            <Link href={featuredArticle.href} className="group">
              <h2 className="font-display text-[40px] font-normal leading-[1.03] text-inkwell group-hover:underline md:text-[58px]">
                {featuredArticle.title}
              </h2>
            </Link>
            {featuredArticle.description && (
              <p className="mt-20 max-w-[760px] font-body text-[21px] font-normal leading-[1.52] text-inkwell/84">
                {featuredArticle.description}
              </p>
            )}
            {featuredArticle.tags.length > 0 && (
              <div className="mt-24 flex flex-wrap gap-x-12 gap-y-10">
                {featuredArticle.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tags/${normalizeTag(tag)}`}
                    className="border border-inkwell/30 px-10 py-6 font-utility text-[13px] leading-none text-inkwell/66 transition-colors hover:border-inkwell hover:text-inkwell"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </article>
      )}

      {supportingArticles.map((article) => (
        <article
          key={article.href}
          className="grid gap-16 border-b border-inkwell/35 py-28 md:grid-cols-[0.26fr_0.74fr] md:gap-24"
        >
          <div className="flex flex-wrap gap-x-12 gap-y-4 font-utility text-[13px] leading-[1.4] text-inkwell/56 md:block">
            {article.category && <p>{article.category}</p>}
            {article.publishedAt && <p className="md:mt-6">{formatArticleDate(article.publishedAt)}</p>}
            {article.readingMinutes && <p className="md:mt-6">{article.readingMinutes} min read</p>}
          </div>
          <div>
            <Link href={article.href} className="group">
              <h2 className="font-display text-[31px] font-normal leading-[1.08] text-inkwell group-hover:underline md:text-[40px]">
                {article.title}
              </h2>
            </Link>
            {article.description && (
              <p className="mt-14 max-w-[720px] font-body text-[18px] leading-[1.56] text-inkwell/82">
                {article.description}
              </p>
            )}
            {article.tags.length > 0 && (
              <div className="mt-16 flex flex-wrap gap-x-10 gap-y-8">
                {article.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tags/${normalizeTag(tag)}`}
                    className="border border-inkwell/25 px-9 py-5 font-utility text-[13px] leading-none text-inkwell/62 transition-colors hover:border-inkwell hover:text-inkwell"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
