import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock, PortableTextComponents } from '@portabletext/react'
import type { Post } from '@/lib/sanity'
import type { ArticleMeta } from '@/lib/articles'
import { formatArticleDate, normalizeTag } from '@/lib/articles'

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-36 border-t border-inkwell/24 pt-18 font-display text-[32px] font-normal leading-[1.08] text-inkwell md:mt-46 md:pt-22 md:text-[42px]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-32 font-display text-[27px] font-normal leading-[1.16] text-inkwell md:text-[32px]">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-16 font-body text-[18px] leading-[1.66] text-inkwell/88 md:text-[20px] md:leading-[1.7]">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-38 border-l-4 border-verdigris bg-[#f7f1e4] px-18 py-20 font-display text-[28px] leading-[1.16] text-inkwell md:my-48 md:px-24 md:text-[38px]">
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

  const body = post.body
  const legacyRenderedSections = new Set(['read next', 'next step', 'references', 'sources referenced'])
  const retainedHeadings = new Set(['medical note'])

  return body.filter((block, index) => {
    const currentHeading =
      'style' in block && block.style === 'h2'
        ? getPlainBlockText(block).trim().toLowerCase()
        : null

    if (currentHeading && legacyRenderedSections.has(currentHeading)) return false

    const previousHeading = [...body]
      .slice(0, index)
      .reverse()
      .find((candidate) => 'style' in candidate && candidate.style === 'h2')

    if (!previousHeading) return true

    const sectionHeading = getPlainBlockText(previousHeading).trim().toLowerCase()
    if (retainedHeadings.has(sectionHeading)) return true

    return !legacyRenderedSections.has(sectionHeading)
  })
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
    <figure className="relative overflow-hidden border border-parchment/28 bg-parchment text-inkwell shadow-[18px_18px_0_rgba(255,184,1,0.18)]">
      <div className="grid md:grid-cols-[0.72fr_0.28fr]">
        <div className="relative min-h-[360px] overflow-hidden md:min-h-[540px]">
          <Image
            src="/images/sarcopenia-functional-field.svg"
            alt="Editorial illustration of stairs, a chair, and strength markers representing sarcopenia as loss of function"
            width={1400}
            height={980}
            unoptimized
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-activated-black/28 via-activated-black/0 to-transparent" />
        </div>
        <div className="grid border-t border-inkwell/25 md:border-l md:border-t-0">
          {[
            ['01', 'Strength', 'The first signal in modern consensus language.'],
            ['02', 'Muscle', 'The structure that confirms what function is already telling us.'],
            ['03', 'Function', 'The part readers feel in stairs, chairs, bags, and recovery.'],
          ].map(([number, label, copy]) => (
            <div key={label} className="border-b border-inkwell/25 p-16 last:border-b-0 md:p-18">
              <p className="font-utility text-[12px] leading-none text-verdigris">{number}</p>
              <p className="mt-10 font-display text-[28px] leading-none text-inkwell md:text-[32px]">
                {label}
              </p>
              <p className="mt-10 font-utility text-[13px] leading-[1.45] text-inkwell/68">
                {copy}
              </p>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="border-t border-inkwell/25 px-14 py-8 font-utility text-[12px] leading-[1.35] text-inkwell/55">
        Local editorial illustration. Used to frame sarcopenia through functional strength, not fear.
      </figcaption>
    </figure>
  )
}

function KeyTakeaways() {
  const takeaways = [
    'Sarcopenia is about strength, muscle, and function, not appearance alone.',
    'Early signs often show up in stairs, chairs, luggage, walking speed, grip, and recovery.',
    'The evidence-based response is practical: progressive resistance training, adequate protein, recovery, and the right level of guidance.',
  ]

  return (
    <section className="my-30 border-y border-inkwell bg-[#f7f1e4] py-18 md:my-38 md:py-22">
      <div className="flex items-baseline justify-between gap-16">
        <p className="font-utility text-caption leading-caption text-inkwell/58">In this guide</p>
        <p className="hidden font-utility text-[12px] leading-none text-inkwell/45 md:block">
          strength / muscle / function
        </p>
      </div>
      <div className="mt-16 grid gap-0 border-t border-inkwell/24 md:grid-cols-3">
        {takeaways.map((takeaway, index) => (
          <div
            key={takeaway}
            className="grid grid-cols-[34px_1fr] gap-12 border-b border-inkwell/24 py-14 last:border-b-0 md:block md:border-b-0 md:border-r md:px-18 md:last:border-r-0"
          >
            <p className="font-display text-[28px] leading-none text-verdigris md:text-[34px]">
              {index + 1}
            </p>
            <p className="font-body text-[17px] leading-[1.5] text-inkwell/86 md:mt-12">
              {takeaway}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function EvidenceBreak() {
  return (
    <section className="my-34 border-y border-inkwell py-18 md:my-44 md:py-22">
      <div className="grid md:grid-cols-[0.38fr_0.62fr]">
        <div className="bg-inkwell p-20 text-parchment md:p-24">
          <p className="font-utility text-caption leading-caption text-parchment/62">
            Source-adjacent note
          </p>
          <p className="mt-16 font-display text-[60px] leading-[0.9] text-sunbeam md:text-[76px]">
            2
          </p>
          <p className="mt-8 font-body text-[17px] leading-[1.45] text-parchment/76">
            CDC guidance for adults 65+ includes muscle-strengthening activity at least two days a
            week.
          </p>
        </div>
        <div className="border-t border-inkwell bg-parchment p-20 md:border-l md:border-t-0 md:p-24">
          <p className="font-utility text-caption leading-caption text-inkwell/62">
            Editorial meaning
          </p>
          <p className="mt-16 max-w-[520px] font-display text-[32px] leading-[1.06] text-inkwell md:text-[44px]">
            Walking can support health. Strength has to be trained.
          </p>
          <p className="mt-14 font-body text-[18px] leading-[1.58] text-inkwell/78">
            The distinction gives the reader a useful next frame without turning the article into a
            prescription.
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
    <section className="my-34 bg-[#f7f1e4] md:my-44">
      <div className="grid border-y border-inkwell md:grid-cols-[0.42fr_0.58fr]">
        <div className="border-b border-inkwell p-18 md:border-b-0 md:border-r md:p-22">
          <p className="font-utility text-caption leading-caption text-inkwell/60">
            Visual thesis
          </p>
          <p className="mt-12 font-display text-[32px] leading-[1.06] text-inkwell md:text-[40px]">
            Sarcopenia is not one measurement. It is a loss of margin.
          </p>
        </div>
        <div className="grid">
          {[
            ['Strength', 'the body can produce force'],
            ['Muscle', 'the tissue is still available'],
            ['Function', 'daily life still has room'],
          ].map(([term, role]) => (
            <div
              key={term}
              className="grid grid-cols-[0.34fr_0.66fr] border-b border-inkwell last:border-b-0"
            >
              <p className="bg-verdigris px-14 py-13 font-display text-[26px] leading-none text-parchment md:px-18 md:text-[32px]">
                {term}
              </p>
              <p className="px-14 py-14 font-body text-[17px] leading-[1.4] text-inkwell/78 md:px-18">
                {role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureDivider() {
  return (
    <figure className="my-34 md:my-44">
      <div className="relative overflow-hidden border-y border-inkwell bg-activated-black">
        <Image
          src="/images/choosing-the-strongpath-cover.jpg"
          alt="Cover of Choosing the StrongPath"
          width={333}
          height={500}
          unoptimized
          className="ml-auto h-[300px] w-full max-w-[360px] object-contain p-24 opacity-[0.92] md:h-[420px] md:p-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82),rgba(0,0,0,0.42),rgba(0,0,0,0.08))]" />
        <div className="absolute bottom-0 left-0 max-w-[520px] p-18 md:p-24">
          <p className="font-utility text-caption leading-caption text-parchment/62">Authority object</p>
          <p className="mt-10 font-display text-[34px] leading-[1.02] text-parchment md:text-[48px]">
            The book anchors credibility. Current research carries the claims.
          </p>
        </div>
      </div>
      <figcaption className="mt-8 font-utility text-[12px] leading-[1.35] text-inkwell/50">
        The cover is treated as an authority object, not as substantiation for medical claims.
      </figcaption>
    </figure>
  )
}

function FunctionFieldNotes() {
  return (
    <section className="my-34 grid border-y border-inkwell md:my-44 md:grid-cols-[0.5fr_0.5fr]">
      <div className="bg-verdigris p-20 text-parchment md:p-24">
        <p className="font-utility text-caption leading-caption text-parchment/62">Field notes</p>
        <p className="mt-14 font-display text-[36px] leading-[1.04] md:text-[48px]">
          Sarcopenia often arrives as substitutions.
        </p>
      </div>
      <div className="grid divide-y divide-inkwell/24 bg-[#f7f1e4]">
        {['The handrail gets used more.', 'The chair with arms becomes preferred.', 'The hill disappears from the route.', 'The parent says, "I am just tired today."'].map(
          (note) => (
            <p key={note} className="p-16 font-body text-[18px] leading-[1.48] text-inkwell/82 md:p-18">
              {note}
            </p>
          )
        )}
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
                <h1 className="mt-22 max-w-[880px] font-display text-[46px] font-normal leading-[0.98] text-parchment md:text-[82px] md:leading-[0.94] lg:text-[100px]">
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
                  {enhanced && <FunctionFieldNotes />}
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
