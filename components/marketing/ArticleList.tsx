import Link from 'next/link'
import type { ArticleMeta } from '@/lib/articles'
import { formatArticleDate, normalizeTag } from '@/lib/articles'

export function ArticleList({ articles }: { articles: ArticleMeta[] }) {
  return (
    <div className="grid border-t border-navy/35">
      {articles.map((article) => (
        <article
          key={article.href}
          className="grid gap-18 border-b border-navy/35 py-30 md:grid-cols-[0.34fr_0.66fr]"
        >
          <div className="font-utility text-caption leading-caption text-inkwell/65">
            {article.category && <p>{article.category}</p>}
            {article.publishedAt && <p className="mt-8">{formatArticleDate(article.publishedAt)}</p>}
            {article.readingMinutes && <p className="mt-8">{article.readingMinutes} min read</p>}
          </div>
          <div>
            <Link href={article.href} className="group">
              <h2 className="font-display text-[34px] font-normal leading-[1.08] text-navy group-hover:underline md:text-[48px]">
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
                    className="border border-gold/70 px-8 py-4 font-utility text-caption leading-caption text-navy transition-colors hover:border-navy hover:bg-navy hover:text-paper"
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
