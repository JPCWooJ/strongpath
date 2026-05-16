import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock, PortableTextComponents } from '@portabletext/react'
import type { Post } from '@/lib/sanity'
import type { ArticleMeta } from '@/lib/articles'
import { formatArticleDate, normalizeTag } from '@/lib/articles'

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-60 border-t border-inkwell/24 pt-28 font-display text-[36px] font-normal leading-[1.08] text-inkwell md:mt-72 md:pt-34 md:text-[48px]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-36 font-display text-[28px] font-normal leading-[1.14] text-inkwell md:text-[34px]">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-20 font-body text-[19px] leading-[1.72] text-inkwell/86 md:text-[20px] md:leading-[1.78]">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-44 border-y border-sunbeam/70 py-24 font-display text-[32px] leading-[1.12] text-inkwell md:text-[42px]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-22 list-disc space-y-10 pl-24 font-body text-[19px] leading-[1.65] text-inkwell/88 md:text-[20px]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-22 list-decimal space-y-10 pl-24 font-body text-[19px] leading-[1.65] text-inkwell/88 md:text-[20px]">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '#'
      return (
        <a href={href} className="text-inkwell underline decoration-sunbeam underline-offset-4">
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

function isSarcopeniaArticle(post: Post) {
  return post.slug.current === 'what-is-sarcopenia'
}

function splitBodyForEditorialBreak(body?: PortableTextBlock[]) {
  if (!body?.length) return { before: [] as PortableTextBlock[], after: [] as PortableTextBlock[] }

  const h2Indexes = body.reduce<number[]>((indexes, block, index) => {
    if ('style' in block && block.style === 'h2') indexes.push(index)
    return indexes
  }, [])
  const splitIndex = h2Indexes[3] ?? Math.ceil(body.length * 0.55)

  return {
    before: body.slice(0, splitIndex),
    after: body.slice(splitIndex),
  }
}

function SarcopeniaHeroVisual() {
  return (
    <div
      role="img"
      aria-label="Editorial illustration showing strength, muscle, and function as connected measures."
      className="relative overflow-hidden border border-inkwell bg-[#f7f1e4]"
    >
      <div className="absolute inset-x-0 top-0 h-28 bg-sunbeam-gradient opacity-55" />
      <div className="grid min-h-[430px] grid-rows-[1fr_auto] p-18 md:min-h-[520px] md:p-24">
        <div className="relative border border-inkwell bg-parchment p-18">
          <div className="absolute left-18 top-18 font-utility text-[12px] uppercase leading-none text-inkwell/54">
            Function over appearance
          </div>
          <div className="absolute bottom-18 left-18 right-18 grid grid-cols-3 items-end gap-12">
            {[
              ['Strength', '92%'],
              ['Muscle', '68%'],
              ['Function', '82%'],
            ].map(([label, height]) => (
              <div key={label} className="grid gap-8">
                <div className="flex h-56 items-end border border-inkwell/45 bg-verdigris-wash/70 md:h-72">
                  <div className="w-full bg-verdigris" style={{ height }} />
                </div>
                <p className="font-utility text-[12px] leading-none text-inkwell/62">{label}</p>
              </div>
            ))}
          </div>
          <div className="absolute left-1/2 top-[44%] h-32 w-32 -translate-x-1/2 rounded-full border border-inkwell bg-sunbeam/80" />
          <div className="absolute left-1/2 top-[52%] h-32 w-px -translate-x-1/2 bg-inkwell" />
          <div className="absolute left-[calc(50%-38px)] top-[58%] h-px w-76 bg-inkwell" />
          <div className="absolute left-[calc(50%-28px)] top-[64%] h-60 w-px rotate-[18deg] bg-inkwell" />
          <div className="absolute left-[calc(50%+28px)] top-[64%] h-60 w-px rotate-[-18deg] bg-inkwell" />
        </div>

        <div className="grid border-x border-b border-inkwell md:grid-cols-3">
          {[
            ['Primary signal', 'Low strength'],
            ['Confirmation', 'Muscle quantity'],
            ['Severity clue', 'Physical performance'],
          ].map(([label, value]) => (
            <div key={label} className="border-t border-inkwell p-14 md:border-r md:last:border-r-0">
              <p className="font-utility text-[12px] leading-none text-inkwell/54">{label}</p>
              <p className="mt-8 font-display text-[25px] leading-[1] text-inkwell">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function KeyTakeaways() {
  const takeaways = [
    'Sarcopenia is about strength, muscle, and function, not appearance alone.',
    'Early signs often show up in stairs, chairs, luggage, walking speed, grip, and recovery.',
    'The evidence-based response is practical: progressive resistance training, adequate protein, recovery, and the right level of guidance.',
  ]

  return (
    <section className="my-44 border border-inkwell bg-[#f7f1e4] p-18 md:p-24">
      <p className="font-utility text-caption leading-caption text-inkwell/62">Key takeaways</p>
      <div className="mt-18 grid gap-14">
        {takeaways.map((takeaway, index) => (
          <div key={takeaway} className="grid grid-cols-[34px_1fr] gap-12 border-t border-inkwell/28 pt-14">
            <p className="font-display text-[28px] leading-none text-verdigris">{index + 1}</p>
            <p className="font-body text-[18px] leading-[1.5] text-inkwell/86">{takeaway}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function EvidenceBreak() {
  return (
    <section className="my-54 grid gap-14 md:grid-cols-[0.42fr_0.58fr] md:gap-18">
      <div className="border border-inkwell bg-inkwell p-18 text-parchment md:p-22">
        <p className="font-utility text-caption leading-caption text-parchment/62">What the research shows</p>
        <p className="mt-18 font-display text-[46px] leading-[0.94] text-parchment md:text-[58px]">
          2 days
        </p>
        <p className="mt-10 font-body text-[17px] leading-[1.45] text-parchment/76">
          CDC guidance for adults 65+ includes muscle-strengthening activity at least two days a week.
        </p>
      </div>
      <div className="border border-inkwell bg-verdigris-wash/65 p-18 md:p-22">
        <p className="font-utility text-caption leading-caption text-inkwell/62">Why this matters</p>
        <p className="mt-18 font-display text-[32px] leading-[1.06] text-inkwell md:text-[42px]">
          Walking can support health. Strength has to be trained.
        </p>
        <p className="mt-14 font-body text-[18px] leading-[1.58] text-inkwell/78">
          That distinction keeps the article practical without turning it into a prescription.
        </p>
      </div>
    </section>
  )
}

function EditorialRail({ post }: { post: Post }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 space-y-18">
        <div className="border-r border-inkwell pr-28 font-utility text-caption leading-caption text-inkwell/65">
          <p>StrongPath article</p>
          <p className="mt-12">
            Evidence-oriented health education. Not medical advice or a substitute for care.
          </p>
        </div>
        {isSarcopeniaArticle(post) && (
          <div className="border border-inkwell bg-parchment p-16">
            <p className="font-utility text-caption leading-caption text-inkwell/60">Evidence lens</p>
            <p className="mt-12 font-display text-[30px] leading-[1.04] text-inkwell">
              Strength first. Size second. Function always.
            </p>
          </div>
        )}
      </div>
    </aside>
  )
}

function EditorialSources({ post }: { post: Post }) {
  if (!post.sources?.length) return null

  return (
    <section aria-labelledby="article-sources" className="mt-64 border-t border-inkwell pt-26">
      <p className="font-utility text-caption leading-caption text-inkwell/65">Sources</p>
      <h2
        id="article-sources"
        className="mt-10 font-display text-[32px] font-normal leading-[1.1] text-inkwell md:text-[38px]"
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
                  className="font-body text-[18px] font-medium leading-[1.35] text-inkwell underline decoration-sunbeam underline-offset-4"
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
    <section aria-labelledby="related-reading" className="mt-64 border-t border-inkwell pt-26">
      <p className="font-utility text-caption leading-caption text-inkwell/65">Continue reading</p>
      <h2
        id="related-reading"
        className="mt-10 font-display text-[32px] font-normal leading-[1.1] text-inkwell md:text-[38px]"
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
    <section className="mt-64 border border-inkwell bg-inkwell p-22 text-parchment md:p-28">
      <p className="font-utility text-caption leading-caption text-parchment/62">Stay close</p>
      <h2 className="mt-10 font-display text-[34px] font-normal leading-[1.06] text-parchment md:text-[42px]">
        Receive the next StrongPath guides.
      </h2>
      <p className="mt-14 max-w-[620px] font-body text-[18px] leading-[1.55] text-parchment/76">
        Evidence-first articles on strength, muscle loss, recovery, and helping a parent begin
        without pressure.
      </p>
      <Link
        href="/waitlist"
        className="mt-22 inline-block border border-parchment px-16 py-12 font-utility text-caption leading-none text-parchment transition-colors hover:bg-parchment hover:text-inkwell"
      >
        Get practical guidance
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
  const enhanced = isSarcopeniaArticle(post)
  const { before, after } = splitBodyForEditorialBreak(articleBody)

  return (
    <main>
      <article>
        <header className="border-b border-inkwell bg-parchment">
          <div className="sp-container py-48 md:py-70">
            <div className="grid gap-34 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.62fr)] lg:items-end">
              <div>
                <div className="flex flex-wrap gap-x-12 gap-y-6 font-utility text-caption leading-caption text-inkwell/62">
                  {post.category && <p>{post.category}</p>}
                  {publishedAt && <p>{publishedAt}</p>}
                  {updatedAt && updatedAt !== publishedAt && <p>Updated {updatedAt}</p>}
                  {readingMinutes && <p>{readingMinutes} min read</p>}
                </div>
                <h1 className="mt-24 max-w-[980px] font-display text-[54px] font-normal leading-[0.94] text-inkwell md:text-[88px] lg:text-[104px]">
                  {post.title}
                </h1>
                {post.excerpt && (
                  <p className="mt-24 max-w-[760px] font-body text-[21px] font-medium leading-[1.48] text-inkwell/84 md:text-[25px] md:leading-[1.44]">
                    {post.excerpt}
                  </p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-24 flex flex-wrap gap-8">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tags/${normalizeTag(tag)}`}
                        className="border border-inkwell/35 px-9 py-5 font-utility text-caption leading-caption text-inkwell/68 transition-colors hover:border-inkwell hover:text-inkwell"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {enhanced ? (
                <SarcopeniaHeroVisual />
              ) : (
                <div className="border border-inkwell bg-verdigris-wash/60 p-22">
                  <p className="font-utility text-caption leading-caption text-inkwell/62">StrongPath guide</p>
                  <p className="mt-18 font-display text-[42px] leading-[1.02] text-inkwell">
                    Evidence first. Plain language. No miracle claims.
                  </p>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="sp-container py-46 md:py-68">
          <div className="grid gap-40 lg:grid-cols-[220px_minmax(0,740px)_minmax(160px,1fr)]">
            <EditorialRail post={post} />
            <div className="max-w-[740px]">
              <div className="border-y border-inkwell py-18 font-utility text-caption leading-caption text-inkwell/70">
                StrongPath separates book credibility from claim substantiation. The book anchors
                the work; current research carries specific health claims.
              </div>
              {enhanced && <KeyTakeaways />}
              {articleBody ? (
                <>
                  <PortableText value={before} components={portableTextComponents} />
                  {enhanced && <EvidenceBreak />}
                  {after.length > 0 && (
                    <PortableText value={after} components={portableTextComponents} />
                  )}
                </>
              ) : (
                <p className="font-body text-[19px] leading-[1.72] text-inkwell/85">
                  This article is being prepared.
                </p>
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
