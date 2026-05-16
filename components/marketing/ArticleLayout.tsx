import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock, PortableTextComponents } from '@portabletext/react'
import type { Post } from '@/lib/sanity'
import type { ArticleMeta } from '@/lib/articles'
import { formatArticleDate, normalizeTag } from '@/lib/articles'

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-56 border-t border-inkwell/24 pt-26 font-display text-[34px] font-normal leading-[1.08] text-inkwell md:mt-70 md:pt-32 md:text-[46px]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-36 font-display text-[28px] font-normal leading-[1.14] text-inkwell md:text-[34px]">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-20 font-body text-[19px] leading-[1.68] text-inkwell/86 md:text-[20px] md:leading-[1.74]">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-44 border-y border-sunbeam/70 bg-[#f7f1e4] px-18 py-24 font-display text-[30px] leading-[1.14] text-inkwell md:my-54 md:px-24 md:text-[40px]">
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
      aria-label="Editorial illustration showing sarcopenia as a relationship between strength, muscle, and physical function."
      className="relative overflow-hidden border border-parchment/28 bg-[#111513] shadow-[0_32px_90px_rgba(0,0,0,0.34)]"
    >
      <div className="absolute -right-20 -top-16 h-56 w-56 bg-sunbeam/82" />
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-verdigris/82 to-transparent" />
      <div className="absolute left-0 top-0 h-full w-18 bg-verdigris" />
      <div className="grid min-h-[400px] p-16 md:min-h-[520px] md:p-24">
        <div className="relative overflow-hidden border border-parchment/24 bg-[#202522]">
          <div className="absolute inset-0 opacity-80">
            <div className="absolute left-[18%] top-[18%] h-40 w-px bg-parchment/10" />
            <div className="absolute left-[42%] top-[10%] h-72 w-px bg-parchment/10" />
            <div className="absolute right-[18%] top-[20%] h-56 w-px bg-parchment/10" />
            <div className="absolute bottom-[30%] left-0 h-px w-full bg-parchment/10" />
          </div>

          <div className="relative z-10 grid h-full grid-rows-[auto_1fr_auto] p-18 md:p-24">
            <div className="flex items-start justify-between gap-12">
              <p className="max-w-[170px] font-utility text-[12px] uppercase leading-[1.2] text-parchment/58">
                Sarcopenia is not one measurement
              </p>
              <p className="border border-parchment/26 px-9 py-5 font-utility text-[12px] leading-none text-parchment/64">
                Function first
              </p>
            </div>

            <div className="relative my-24 min-h-[210px] md:my-32 md:min-h-[280px]">
              <div className="absolute left-1/2 top-1/2 h-122 w-122 -translate-x-1/2 -translate-y-1/2 rounded-full border border-parchment/18 bg-parchment/5 md:h-156 md:w-156" />
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sunbeam shadow-[0_0_44px_rgba(255,184,1,0.32)] md:h-92 md:w-92" />
              <div className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 bg-parchment/45" />
              <div className="absolute left-1/2 top-1/2 h-[72%] w-px -translate-y-1/2 bg-parchment/45" />
              <div className="absolute left-1/2 top-1/2 h-px w-[62%] -translate-x-1/2 rotate-45 bg-parchment/28" />
              <div className="absolute left-1/2 top-1/2 h-px w-[62%] -translate-x-1/2 -rotate-45 bg-parchment/28" />

              {[
                ['Strength', 'Primary signal', 'left-0 top-[12%]'],
                ['Muscle', 'Quantity + quality', 'right-0 top-[20%]'],
                ['Function', 'What life feels', 'left-[18%] bottom-0'],
              ].map(([label, note, position]) => (
                <div
                  key={label}
                  className={`absolute ${position} max-w-[138px] border border-parchment/24 bg-[#111513]/82 p-12 backdrop-blur-sm md:max-w-[158px]`}
                >
                  <p className="font-display text-[28px] leading-none text-parchment md:text-[34px]">
                    {label}
                  </p>
                  <p className="mt-8 font-utility text-[12px] leading-[1.3] text-parchment/58">{note}</p>
                </div>
              ))}
            </div>

            <div className="grid border-t border-parchment/24 pt-14 md:grid-cols-3">
              {[
                ['Low strength', 'primary'],
                ['Muscle quantity', 'confirmation'],
                ['Physical performance', 'severity clue'],
              ].map(([value, label]) => (
                <div key={value} className="border-b border-parchment/16 py-10 last:border-b-0 md:border-b-0 md:border-r md:px-12 md:py-0 md:first:pl-0 md:last:border-r-0">
                  <p className="font-display text-[24px] leading-[1.02] text-parchment md:text-[25px]">{value}</p>
                  <p className="mt-6 font-utility text-[12px] uppercase leading-none text-parchment/46">{label}</p>
                </div>
              ))}
            </div>
          </div>
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
    <section className="my-44 border border-inkwell bg-[#f7f1e4] md:my-54">
      <div className="border-b border-inkwell bg-verdigris px-18 py-14 text-parchment md:px-24">
        <p className="font-utility text-caption leading-caption text-parchment/72">Key takeaways</p>
      </div>
      <div className="grid gap-0 md:grid-cols-3">
        {takeaways.map((takeaway, index) => (
          <div
            key={takeaway}
            className="grid grid-cols-[34px_1fr] gap-12 border-b border-inkwell/28 p-18 last:border-b-0 md:block md:border-b-0 md:border-r md:p-20 md:last:border-r-0"
          >
            <p className="font-display text-[30px] leading-none text-verdigris md:text-[38px]">{index + 1}</p>
            <p className="font-body text-[17px] leading-[1.5] text-inkwell/86 md:mt-18">{takeaway}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function EvidenceBreak() {
  return (
    <section className="my-54 border-y border-inkwell py-18 md:my-64 md:py-24">
      <div className="grid gap-14 md:grid-cols-[0.38fr_0.62fr] md:gap-18">
      <div className="border border-inkwell bg-inkwell p-20 text-parchment md:p-24">
        <p className="font-utility text-caption leading-caption text-parchment/62">What the research shows</p>
        <p className="mt-18 font-display text-[56px] leading-[0.9] text-sunbeam md:text-[72px]">
          2 days
        </p>
        <p className="mt-10 font-body text-[17px] leading-[1.45] text-parchment/76">
          CDC guidance for adults 65+ includes muscle-strengthening activity at least two days a week.
        </p>
      </div>
      <div className="relative overflow-hidden border border-inkwell bg-[#f7f1e4] p-20 md:p-24">
        <div className="absolute right-0 top-0 h-full w-16 bg-verdigris" />
        <p className="font-utility text-caption leading-caption text-inkwell/62">Why this matters</p>
        <p className="mt-18 max-w-[520px] font-display text-[32px] leading-[1.06] text-inkwell md:text-[44px]">
          Walking can support health. Strength has to be trained.
        </p>
        <p className="mt-14 font-body text-[18px] leading-[1.58] text-inkwell/78">
          That distinction keeps the article practical without turning it into a prescription.
        </p>
      </div>
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

function MechanismStrip() {
  return (
    <section className="my-46 border border-inkwell bg-[#f7f1e4] md:my-58">
      <div className="grid md:grid-cols-[0.45fr_0.55fr]">
        <div className="border-b border-inkwell p-18 md:border-b-0 md:border-r md:p-22">
          <p className="font-utility text-caption leading-caption text-inkwell/60">Visual thesis</p>
          <p className="mt-12 font-display text-[32px] leading-[1.06] text-inkwell md:text-[40px]">
            The diagnosis becomes practical when strength, muscle, and function are read together.
          </p>
        </div>
        <div className="grid grid-cols-3">
          {[
            ['Strength', 'signal'],
            ['Muscle', 'structure'],
            ['Function', 'life'],
          ].map(([term, role]) => (
            <div key={term} className="border-r border-inkwell p-14 last:border-r-0 md:p-18">
              <div className="h-32 border border-inkwell bg-verdigris-wash">
                <div className="h-full bg-sunbeam" style={{ width: term === 'Muscle' ? '62%' : term === 'Function' ? '78%' : '88%' }} />
              </div>
              <p className="mt-14 font-display text-[25px] leading-none text-inkwell md:text-[30px]">{term}</p>
              <p className="mt-6 font-utility text-[12px] uppercase leading-none text-inkwell/52">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureDivider() {
  return (
    <section className="my-54 grid gap-0 border border-inkwell md:my-64 md:grid-cols-[0.34fr_0.66fr]">
      <div className="bg-verdigris p-18 text-parchment md:p-24">
        <p className="font-utility text-caption leading-caption text-parchment/64">The practical test</p>
        <p className="mt-16 font-display text-[36px] leading-[1] text-parchment md:text-[46px]">
          Stairs. Chairs. Grip. Recovery.
        </p>
      </div>
      <div className="grid bg-parchment md:grid-cols-4">
        {['Rise', 'Carry', 'Climb', 'Recover'].map((label, index) => (
          <div
            key={label}
            className="grid grid-cols-[44px_1fr] items-end border-t border-inkwell p-16 md:block md:border-l md:border-t-0 md:p-18"
          >
            <p className="font-display text-[34px] leading-none text-sunbeam md:text-[42px]">{index + 1}</p>
            <p className="font-utility text-caption leading-caption text-inkwell/70 md:mt-40">{label}</p>
          </div>
        ))}
      </div>
    </section>
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
        <header className="relative overflow-hidden border-b border-inkwell bg-inkwell text-parchment">
          <div className="absolute inset-x-0 top-0 h-[28rem] bg-sunbeam-gradient opacity-20" />
          <div className="absolute bottom-0 right-0 hidden h-full w-[38%] bg-verdigris/28 lg:block" />
          <div className="sp-container relative py-42 md:py-68">
            <div className="grid gap-30 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.62fr)] lg:items-center">
              <div>
                <div className="flex flex-wrap gap-x-12 gap-y-6 font-utility text-caption leading-caption text-parchment/62">
                  {post.category && <p>{post.category}</p>}
                  {publishedAt && <p>{publishedAt}</p>}
                  {updatedAt && updatedAt !== publishedAt && <p>Updated {updatedAt}</p>}
                  {readingMinutes && <p>{readingMinutes} min read</p>}
                </div>
                <h1 className="mt-22 max-w-[880px] font-display text-[52px] font-normal leading-[0.94] text-parchment md:text-[82px] lg:text-[100px]">
                  {post.title}
                </h1>
                {post.excerpt && (
                  <p className="mt-22 max-w-[720px] font-body text-[20px] font-medium leading-[1.5] text-parchment/78 md:text-[24px] md:leading-[1.44]">
                    {post.excerpt}
                  </p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-24 flex flex-wrap gap-8">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tags/${normalizeTag(tag)}`}
                        className="border border-parchment/30 px-9 py-5 font-utility text-caption leading-caption text-parchment/68 transition-colors hover:border-parchment hover:text-parchment"
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

        <div className="sp-container py-42 md:py-68">
          <div className="grid gap-40 lg:grid-cols-[220px_minmax(0,740px)_minmax(160px,1fr)]">
            <EditorialRail post={post} />
            <div className="max-w-[740px]">
              <div className="border-y border-inkwell bg-[#f7f1e4] px-16 py-18 font-utility text-caption leading-caption text-inkwell/70 md:px-18">
                StrongPath separates book credibility from claim substantiation. The book anchors
                the work; current research carries specific health claims.
              </div>
              {enhanced && <KeyTakeaways />}
              {articleBody ? (
                <>
                  <PortableText value={before} components={portableTextComponents} />
                  {enhanced && <MechanismStrip />}
                  {enhanced && <FeatureDivider />}
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
