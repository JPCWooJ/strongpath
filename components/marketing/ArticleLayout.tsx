import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import type { PortableTextComponents } from '@portabletext/react'
import { AmazonLink } from '@/components/AmazonLink'
import { FTCDisclosure } from '@/components/FTCDisclosure'
import type { Post } from '@/lib/sanity'
import { articleHref, formatArticleDate, normalizeTag } from '@/lib/articles'
import { flagshipArticles } from '@/lib/flagship-articles'

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-64 font-display text-[40px] font-normal leading-[1.08] text-navy md:mt-76 md:text-[54px]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-[42px] font-display text-[30px] font-normal leading-[1.14] text-navy md:text-[34px]">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-26 font-body text-[18px] font-medium leading-[1.72] text-inkwell/90 md:text-[20px]">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-48 border-l-[5px] border-gold pl-24 font-display text-[32px] leading-[1.18] text-navy md:my-60 md:text-[40px]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-26 list-disc space-y-12 pl-24 font-body text-[18px] leading-[1.72] text-inkwell/88 md:text-[20px]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-26 list-decimal space-y-12 pl-24 font-body text-[18px] leading-[1.72] text-inkwell/88 md:text-[20px]">
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

export function ArticleLayout({ post, readingMinutes }: { post: Post; readingMinutes?: number }) {
  const publishedAt = formatArticleDate(post.publishedAt)
  const updatedAt = formatArticleDate(post.updatedAt)
  const relatedArticles = flagshipArticles
    .filter((article) => article.slug.current !== post.slug.current)
    .slice(0, 2)

  return (
    <main>
      <article>
        <header className="border-b border-navy bg-parchment">
          <div className="sp-container py-[84px] md:py-[124px]">
            <div className="grid gap-48 lg:grid-cols-[0.28fr_0.72fr]">
              <div className="border-y border-navy/30 py-18 font-utility text-[15px] font-medium leading-[1.35] text-inkwell/68 lg:border-y-0 lg:border-r lg:pr-24">
                {post.category && <p>{post.category}</p>}
                {publishedAt && <p className="mt-8">{publishedAt}</p>}
                {updatedAt && updatedAt !== publishedAt && <p className="mt-8">Updated {updatedAt}</p>}
                {readingMinutes && <p className="mt-8">{readingMinutes} min read</p>}
              </div>
              <div>
                <h1 className="max-w-[920px] font-display text-[58px] font-normal leading-[0.94] text-navy md:text-[96px]">
                  {post.title}
                </h1>
                {post.excerpt && (
                  <p className="mt-36 max-w-[680px] font-body text-[22px] font-medium leading-[1.5] text-inkwell/86 md:text-[25px]">
                    {post.excerpt}
                  </p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-28 flex flex-wrap gap-8">
                    {post.tags.map((tag) => (
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
            </div>
          </div>
        </header>

        <div className="bg-paper">
          <div className="sp-container py-[76px] md:py-[104px]">
            <div className="grid gap-50 lg:grid-cols-[0.22fr_minmax(0,0.78fr)]">
              <aside className="hidden border-r border-navy/25 pr-30 font-utility text-caption leading-caption text-inkwell/65 lg:block">
                <p>StrongPath article</p>
                <p className="mt-12">
                  Evidence-oriented health education. Not medical advice or a substitute for care.
                </p>
              </aside>
              <div className="max-w-[700px]">
                <div className="mb-[42px] border-y border-navy/25 py-24">
                  <p className="font-utility text-caption leading-caption text-inkwell/64">
                    Evidence note
                  </p>
                  <p className="mt-10 font-body text-[18px] font-medium leading-[1.58] text-inkwell/86 md:text-[20px]">
                    StrongPath separates credibility from substantiation: the book establishes the
                    category, while current research carries specific health claims.
                  </p>
                </div>
                {post.body ? (
                  <PortableText value={post.body} components={portableTextComponents} />
                ) : (
                  <p className="sp-body text-inkwell/85">This article is being prepared.</p>
                )}
              </div>
            </div>

            <footer className="mt-[96px] border-t border-navy/25 pt-50">
              <div className="grid gap-50 lg:grid-cols-[0.58fr_0.42fr]">
                <section>
                  <p className="font-utility text-caption leading-caption text-inkwell/64">
                    Related reading
                  </p>
                  <div className="mt-20 grid border-t border-navy/25">
                    {relatedArticles.map((article) => (
                      <Link
                        key={article.slug.current}
                        href={articleHref(article)}
                        className="group border-b border-navy/25 py-22"
                      >
                        <p className="font-utility text-caption leading-caption text-inkwell/60">
                          {article.category}
                        </p>
                        <h2 className="mt-8 font-display text-[34px] font-normal leading-[1.08] text-navy group-hover:underline md:text-[42px]">
                          {article.title}
                        </h2>
                      </Link>
                    ))}
                  </div>
                </section>

                <section className="border-y border-navy/25 py-30">
                  <p className="font-display text-[36px] font-normal leading-[1.06] text-navy">
                    Keep going carefully.
                  </p>
                  <p className="mt-16 font-body text-[18px] font-medium leading-[1.58] text-inkwell/84 md:text-[20px]">
                    Start with a calm assessment of where you are now, then read the book that
                    helped define the StrongPath work.
                  </p>
                  <div className="mt-28 flex flex-col gap-12">
                    <Link
                      href="/waitlist"
                      className="inline-flex justify-center border border-navy bg-navy px-22 py-14 font-body text-[18px] font-medium leading-none text-paper transition-colors hover:border-gold hover:bg-paper hover:text-navy"
                    >
                      Take the Assessment
                    </Link>
                    <AmazonLink
                      asin="1626344760"
                      className="inline-flex justify-center border border-gold px-22 py-14 font-body text-[18px] font-medium leading-none text-navy transition-colors hover:bg-navy hover:text-paper"
                    >
                      View the Book
                    </AmazonLink>
                  </div>
                  <div className="mt-18">
                    <FTCDisclosure />
                  </div>
                </section>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </main>
  )
}
