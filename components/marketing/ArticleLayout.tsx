import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import type { PortableTextComponents } from '@portabletext/react'
import type { Post } from '@/lib/sanity'
import { formatArticleDate, normalizeTag } from '@/lib/articles'

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-48 font-display text-[40px] font-normal leading-[1.1] text-navy md:text-[46px]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-34 font-display text-[30px] font-normal leading-[1.16] text-navy">
        {children}
      </h3>
    ),
    normal: ({ children }) => <p className="sp-body mt-22 text-inkwell/90">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-34 border-l-[5px] border-gold pl-24 font-display text-[30px] leading-[1.18] text-navy">
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

export function ArticleLayout({ post, readingMinutes }: { post: Post; readingMinutes?: number }) {
  const publishedAt = formatArticleDate(post.publishedAt)
  const updatedAt = formatArticleDate(post.updatedAt)

  return (
    <main>
      <article>
        <header className="border-b border-navy bg-parchment">
          <div className="sp-container py-[72px] md:py-[96px]">
            <div className="grid gap-40 lg:grid-cols-[0.32fr_0.68fr]">
              <div className="font-utility text-caption leading-caption text-inkwell/65">
                {post.category && <p>{post.category}</p>}
                {publishedAt && <p className="mt-8">{publishedAt}</p>}
                {updatedAt && updatedAt !== publishedAt && <p className="mt-8">Updated {updatedAt}</p>}
                {readingMinutes && <p className="mt-8">{readingMinutes} min read</p>}
              </div>
              <div>
                <h1 className="max-w-[920px] font-display text-[48px] font-normal leading-[0.98] text-navy md:text-[82px]">
                  {post.title}
                </h1>
                {post.excerpt && (
                  <p className="mt-30 max-w-[760px] font-body text-[22px] font-medium leading-[1.45] text-inkwell/86 md:text-[24px]">
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
          <div className="sp-container py-60">
          <div className="grid gap-40 lg:grid-cols-[0.24fr_minmax(0,0.76fr)]">
            <aside className="hidden border-r border-navy/30 pr-30 font-utility text-caption leading-caption text-inkwell/65 lg:block">
              <p>StrongPath article</p>
              <p className="mt-12">
                Evidence-oriented health education. Not medical advice or a substitute for care.
              </p>
            </aside>
            <div className="max-w-[780px]">
              {post.body ? (
                <PortableText value={post.body} components={portableTextComponents} />
              ) : (
                <p className="sp-body text-inkwell/85">This article is being prepared.</p>
              )}
            </div>
          </div>
          </div>
        </div>
      </article>
    </main>
  )
}
