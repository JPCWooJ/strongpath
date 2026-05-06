import Link from 'next/link'
import type { ArticleMeta } from '@/lib/articles'
import { formatArticleDate, normalizeTag } from '@/lib/articles'

export function ArticleList({ articles }: { articles: ArticleMeta[] }) {
  return (
    <div className="grid border-t border-inkwell">
      {articles.map((article) => (
        <article
          key={article.href}
          className="grid gap-18 border-b border-inkwell py-30 md:grid-cols-[0.28fr_0.72fr]"
        >
          <div className="border-t border-inkwell pt-12 font-utility text-caption leading-caption text-inkwell/65 md:border-t-0 md:pt-0">
            {article.category && <p>{article.category}</p>}
            {article.publishedAt && <p className="mt-8">{formatArticleDate(article.publishedAt)}</p>}
            {article.readingMinutes && <p className="mt-8">{article.readingMinutes} min read</p>}
          </div>
          <div>
            <Link href={article.href} className="group">
              <h2 className="font-display text-[36px] font-normal leading-[1.06] text-inkwell group-hover:underline md:text-[48px]">
                {article.title}
              </h2>
            </Link>
            {article.description && (
              <p className="sp-body mt-18 text-inkwell/85">{article.description}</p>
            )}
            {article.tags.length > 0 && (
              <div className="mt-18 flex flex-wrap gap-8">
                {article.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tags/${normalizeTag(tag)}`}
                    className="border border-inkwell/40 px-8 py-4 font-utility text-caption leading-caption text-inkwell/70 transition-colors hover:border-inkwell hover:text-inkwell"
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
