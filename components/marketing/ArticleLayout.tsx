import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import type { PortableTextComponents } from '@portabletext/react'
import type { Post } from '@/lib/sanity'
import type { ArticleMeta } from '@/lib/articles'
import { formatArticleDate, normalizeTag } from '@/lib/articles'

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-48 font-display text-[42px] font-normal leading-[1.1] text-inkwell">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-34 font-display text-[30px] font-normal leading-[1.16] text-inkwell">
        {children}
      </h3>
    ),
    normal: ({ children }) => <p className="sp-body mt-22 text-inkwell/88">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-34 border-l border-gold pl-24 font-display text-[30px] leading-[1.18] text-inkwell">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-22 list-disc space-y-10 pl-24 font-body text-[20px] leading-[1.65] text-inkwell/88">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-22 list-decimal space-y-10 pl-24 font-body text-[20px] leading-[1.65] text-inkwell/88">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '#'
      return (
        <a href={href} className="text-inkwell underline decoration-gold underline-offset-4">
          {children}
        </a>
      )
    },
  },
}

function getPlainBlockText(block: unknown) {
  if (!block || typeof block !== 'object' || !('children' in block)) return ''

  const children = (block as { children?: Array<{ text?: string }> }).children
  if (!Array.isArray(children)) return ''

  return children.map((child) => child.text || '').join('')
}

function getArticleBody(post: Post) {
  if (!post.body || !post.sources?.length) return post.body

  const sourceHeadingIndex = post.body.findIndex(
    (block) =>
      'style' in block &&
      block.style === 'h2' &&
      getPlainBlockText(block).trim().toLowerCase() === 'sources referenced'
  )

  if (sourceHeadingIndex === -1) return post.body
  return post.body.slice(0, sourceHeadingIndex)
}

function EditorialSources({ post }: { post: Post }) {
  if (!post.sources?.length) return null

  return (
    <section aria-labelledby="article-sources" className="mt-60 border-t border-inkwell pt-24">
      <p className="font-utility text-caption leading-caption text-inkwell/65">Sources</p>
      <h2
        id="article-sources"
        className="mt-10 font-display text-[34px] font-normal leading-[1.1] text-inkwell"
      >
        Editorial source record
      </h2>
      <div className="mt-22 border-t border-inkwell/50">
        {post.sources.map((source) => (
          <div
            key={`${source.title}-${source.publication}`}
            className="grid gap-10 border-b border-inkwell/35 py-16 md:grid-cols-[0.68fr_0.32fr]"
          >
            <div>
              {source.href ? (
                <a
                  href={source.href}
                  className="font-body text-[18px] font-medium leading-[1.35] text-inkwell underline decoration-gold underline-offset-4"
                >
                  {source.title}
                </a>
              ) : (
                <p className="font-body text-[18px] font-medium leading-[1.35] text-inkwell">
                  {source.title}
                </p>
              )}
            </div>
            <p className="font-utility text-caption leading-caption text-inkwell/65">
              {source.publication}
              {source.year ? `, ${source.year}` : ''}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function RelatedReading({ articles }: { articles: ArticleMeta[] }) {
  if (articles.length === 0) return null

  return (
    <section aria-labelledby="related-reading" className="mt-60 border-t border-inkwell pt-24">
      <p className="font-utility text-caption leading-caption text-inkwell/65">Continue reading</p>
      <h2
        id="related-reading"
        className="mt-10 font-display text-[34px] font-normal leading-[1.1] text-inkwell"
      >
        Related reading
      </h2>
      <div className="mt-22 grid border-t border-inkwell/50">
        {articles.slice(0, 4).map((article) => (
          <article
            key={article.href}
            className="grid gap-10 border-b border-inkwell/35 py-18 md:grid-cols-[0.26fr_0.74fr]"
          >
            <div className="font-utility text-caption leading-caption text-inkwell/65">
              {article.category && <p>{article.category}</p>}
              {article.readingMinutes && <p className="mt-8">{article.readingMinutes} min read</p>}
            </div>
            <div>
              <Link href={article.href} className="group">
                <h3 className="font-display text-[28px] font-normal leading-[1.08] text-inkwell group-hover:underline">
                  {article.title}
                </h3>
              </Link>
              {article.description && (
                <p className="mt-10 font-utility text-caption leading-[1.45] text-inkwell/70">
                  {article.description}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ArticleEndCta() {
  return (
    <section className="mt-60 border-y border-inkwell py-24">
      <p className="font-utility text-caption leading-caption text-inkwell/65">Stay close</p>
      <h2 className="mt-10 font-display text-[34px] font-normal leading-[1.1] text-inkwell">
        Receive the next StrongPath guides.
      </h2>
      <p className="sp-body mt-14 max-w-[620px] text-inkwell/82">
        Evidence-first articles on strength, muscle loss, recovery, and helping a parent begin
        without pressure.
      </p>
      <Link
        href="/waitlist"
        className="mt-22 inline-block border border-inkwell px-16 py-12 font-utility text-caption leading-none text-inkwell transition-colors hover:bg-inkwell hover:text-parchment"
      >
        Join the waitlist
      </Link>
    </section>
  )
}

export function ArticleLayout({
  post,
  readingMinutes,
  relatedArticles = [],
}: {
  post: Post
  readingMinutes?: number
  relatedArticles?: ArticleMeta[]
}) {
  const publishedAt = formatArticleDate(post.publishedAt)
  const updatedAt = formatArticleDate(post.updatedAt)
  const articleBody = getArticleBody(post)

  return (
    <main>
      <article>
        <header className="border-b border-inkwell">
          <div className="sp-container py-[72px] md:py-[104px]">
            <div className="border-y border-inkwell py-18">
              <div className="flex flex-wrap items-center justify-between gap-10 font-utility text-caption leading-caption text-inkwell/65">
                <p>StrongPath article</p>
                <p>Evidence-oriented health education</p>
              </div>
            </div>
            <div className="grid gap-40 pt-48 lg:grid-cols-[0.28fr_0.72fr]">
              <div className="border-t border-inkwell pt-18 font-utility text-caption leading-caption text-inkwell/65 lg:border-t-0 lg:pt-0">
                {post.category && <p>{post.category}</p>}
                {publishedAt && <p className="mt-8">{publishedAt}</p>}
                {updatedAt && updatedAt !== publishedAt && <p className="mt-8">Updated {updatedAt}</p>}
                {readingMinutes && <p className="mt-8">{readingMinutes} min read</p>}
                {post.author && <p className="mt-8">By {post.author}</p>}
              </div>
              <div>
                <h1 className="max-w-[980px] font-display text-[54px] font-normal leading-[0.98] text-inkwell md:text-[86px]">
                  {post.title}
                </h1>
                {post.excerpt && (
                  <p className="mt-30 max-w-[760px] font-body text-[22px] font-medium leading-[1.45] text-inkwell/85">
                    {post.excerpt}
                  </p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-28 flex flex-wrap gap-8">
                    {post.tags.map((tag) => (
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
            </div>
          </div>
        </header>

        <div className="sp-container py-60">
          <div className="grid gap-40 lg:grid-cols-[0.28fr_minmax(0,0.72fr)]">
            <aside className="hidden border-r border-inkwell pr-30 font-utility text-caption leading-caption text-inkwell/65 lg:block">
              <p className="text-inkwell">Source standard</p>
              <p className="mt-12">
                Claims should rest on current peer-reviewed research, named institutional sources,
                or clearly identified mechanisms.
              </p>
              <p className="mt-18 text-inkwell">Reader note</p>
              <p className="mt-12">
                Educational only. Not medical advice or a substitute for care from a qualified
                professional.
              </p>
            </aside>
            <div className="max-w-[800px]">
              <div className="mb-34 border-y border-inkwell py-18 font-utility text-caption leading-caption text-inkwell/70">
                StrongPath separates book credibility from claim substantiation. The book anchors
                the work; current research carries specific health claims.
              </div>
              {articleBody ? (
                <PortableText value={articleBody} components={portableTextComponents} />
              ) : (
                <p className="sp-body text-inkwell/85">This article is being prepared.</p>
              )}
              <EditorialSources post={post} />
              <RelatedReading articles={relatedArticles} />
              <ArticleEndCta />
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
