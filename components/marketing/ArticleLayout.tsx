import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import type { PortableTextComponents } from '@portabletext/react'
import type { Post } from '@/lib/sanity'
import type { ArticleMeta } from '@/lib/articles'
import { formatArticleDate, normalizeTag } from '@/lib/articles'

const SARCOPENIA_HERO_IMAGE = {
  src: '/images/articles/sarcopenia-hero-resistance-training.jpg',
  alt: 'Older adults doing resistance-band strength work in a gym',
  credit: 'Photo by Yan Krukau on Pexels',
  sourceUrl: 'https://www.pexels.com/photo/elderly-people-working-out-at-the-gym-6815699/',
  licenseUrl: 'https://www.pexels.com/license/',
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-38 border-t border-[#2E6171]/30 pt-18 font-display text-[29px] font-normal leading-[1.16] text-[#0B2545] md:mt-46 md:text-[34px]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-26 font-display text-[24px] font-normal leading-[1.2] text-[#0B2545] md:text-[28px]">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-14 font-body text-[18px] leading-[1.65] text-[#1A1D24]/88 md:text-[19px] md:leading-[1.68]">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-28 border-l-4 border-[#B8860B] bg-[#FAF8F5] px-18 py-18 font-display text-[25px] leading-[1.2] text-[#0B2545] md:my-34 md:px-24 md:text-[31px]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-16 list-disc space-y-7 pl-24 font-body text-[18px] leading-[1.6] text-[#1A1D24]/88 md:text-[19px]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-16 list-decimal space-y-7 pl-24 font-body text-[18px] leading-[1.6] text-[#1A1D24]/88 md:text-[19px]">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '#'
      return (
        <a href={href} className="text-[#0B2545] underline decoration-[#B8860B] underline-offset-4">
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

function KeyTakeaways() {
  const takeaways = [
    'Sarcopenia is about strength, muscle, and function, not appearance alone.',
    'Early signs often show up in stairs, chairs, luggage, walking speed, grip, and recovery.',
    'The practical response is progressive resistance training, adequate protein, recovery, and the right level of guidance.',
  ]

  return (
    <section className="mb-30 border-l-4 border-[#B8860B] bg-[#FAF8F5] px-18 py-18 md:mb-38 md:px-24 md:py-22">
      <p className="font-utility text-[12px] uppercase leading-none text-[#5A6472]">Key takeaways</p>
      <ul className="mt-14 space-y-8">
        {takeaways.map((takeaway) => (
          <li key={takeaway} className="font-body text-[17px] leading-[1.52] text-[#1A1D24]/86">
            {takeaway}
          </li>
        ))}
      </ul>
    </section>
  )
}

function EvidenceBox() {
  return (
    <section className="my-34 border border-[#2E6171]/45 bg-[#dfe5dc]/70 px-18 py-18 md:my-42 md:px-24 md:py-22">
      <p className="font-utility text-[12px] uppercase leading-none text-[#5A6472]">Evidence note</p>
      <p className="mt-12 font-display text-[28px] leading-[1.16] text-[#0B2545] md:text-[32px]">
        Current consensus puts strength and function near the center.
      </p>
      <p className="mt-12 font-body text-[17px] leading-[1.6] text-[#1A1D24]/78 md:text-[18px]">
        StrongPath treats the book as the credibility anchor and current third-party research as
        the substantiation layer for specific health claims.
      </p>
    </section>
  )
}

function EditorialSources({ post }: { post: Post }) {
  if (!post.sources?.length) return null

  return (
    <section aria-labelledby="article-sources" className="mt-46 border-t border-[#2E6171]/35 pt-22">
      <p className="font-utility text-[12px] uppercase leading-none text-[#5A6472]">Sources</p>
      <h2
        id="article-sources"
        className="mt-10 font-display text-[30px] font-normal leading-[1.15] text-[#0B2545] md:text-[34px]"
      >
        Editorial source record
      </h2>
      <div className="mt-20 border-t border-[#2E6171]/35">
        {post.sources.map((source) => (
          <div
            key={`${source.title}-${source.publication}`}
            className="grid gap-8 border-b border-[#2E6171]/25 py-14 md:grid-cols-[0.7fr_0.3fr]"
          >
            <div>
              {source.href ? (
                <a
                  href={source.href}
                  className="font-body text-[17px] font-medium leading-[1.35] text-[#0B2545] underline decoration-[#B8860B] underline-offset-4"
                >
                  {source.title}
                </a>
              ) : (
                <p className="font-body text-[17px] font-medium leading-[1.35] text-[#0B2545]">
                  {source.title}
                </p>
              )}
            </div>
            <p className="font-utility text-[13px] leading-[1.35] text-[#5A6472]">
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
    <section aria-labelledby="related-reading" className="mt-46 border-t border-[#2E6171]/35 pt-22">
      <p className="font-utility text-[12px] uppercase leading-none text-[#5A6472]">Continue reading</p>
      <h2
        id="related-reading"
        className="mt-10 font-display text-[30px] font-normal leading-[1.15] text-[#0B2545] md:text-[34px]"
      >
        Related reading
      </h2>
      <div className="mt-20 grid border-t border-[#2E6171]/35">
        {articles.slice(0, 4).map((article) => (
          <article
            key={article.href}
            className="grid gap-8 border-b border-[#2E6171]/25 py-16 md:grid-cols-[0.25fr_0.75fr]"
          >
            <div className="font-utility text-[13px] leading-[1.35] text-[#5A6472]">
              {article.category && <p>{article.category}</p>}
              {article.readingMinutes && <p className="mt-6">{article.readingMinutes} min read</p>}
            </div>
            <div>
              <Link href={article.href} className="group">
                <h3 className="font-display text-[25px] font-normal leading-[1.12] text-[#0B2545] group-hover:underline md:text-[28px]">
                  {article.title}
                </h3>
              </Link>
              {article.description && (
                <p className="mt-8 font-utility text-[13px] leading-[1.45] text-[#1A1D24]/65">
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

  return (
    <main className="bg-parchment">
      <article>
        <header className="border-b border-[#2E6171]/25 bg-[#FAF8F5]">
          <div className="sp-container py-28 md:py-38">
            <div className="max-w-[900px]">
              <div className="flex flex-wrap gap-x-12 gap-y-6 font-utility text-[13px] leading-[1.2] text-[#5A6472]">
                {post.category && <p>{post.category}</p>}
                {publishedAt && <p>{publishedAt}</p>}
                {updatedAt && updatedAt !== publishedAt && <p>Updated {updatedAt}</p>}
                {readingMinutes && <p>{readingMinutes} min read</p>}
              </div>
              <h1 className="mt-18 max-w-[760px] font-display text-[48px] font-normal leading-[1.02] text-[#0B2545] md:text-[72px] md:leading-[0.98]">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="mt-18 max-w-[720px] font-body text-[19px] leading-[1.5] text-[#1A1D24]/76 md:text-[22px]">
                  {post.excerpt}
                </p>
              )}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-20 flex flex-wrap gap-8">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tags/${normalizeTag(tag)}`}
                      className="border border-[#2E6171]/35 px-9 py-5 font-utility text-[13px] leading-none text-[#0B2545] transition-colors hover:border-[#0B2545]"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {enhanced && (
              <figure className="mt-24 overflow-hidden border border-[#2E6171]/25 bg-parchment md:mt-28">
                <Image
                  src={SARCOPENIA_HERO_IMAGE.src}
                  alt={SARCOPENIA_HERO_IMAGE.alt}
                  width={1600}
                  height={1067}
                  priority
                  className="aspect-[16/9] w-full object-cover object-center md:aspect-[2.35/1]"
                />
                <figcaption className="border-t border-[#2E6171]/20 px-12 py-8 font-utility text-[12px] leading-[1.35] text-[#5A6472]">
                  {SARCOPENIA_HERO_IMAGE.credit}. Source:{' '}
                  <a href={SARCOPENIA_HERO_IMAGE.sourceUrl} className="underline underline-offset-4">
                    Pexels
                  </a>
                  . License:{' '}
                  <a href={SARCOPENIA_HERO_IMAGE.licenseUrl} className="underline underline-offset-4">
                    Pexels License
                  </a>
                  .
                </figcaption>
              </figure>
            )}
          </div>
        </header>

        <div className="sp-container py-26 md:py-34">
          <div className="mx-auto max-w-[700px]">
            <div>
              {enhanced && <KeyTakeaways />}
              {articleBody ? (
                <PortableText value={articleBody} components={portableTextComponents} />
              ) : (
                <p className="font-body text-[18px] leading-[1.68] text-[#1A1D24]/85">
                  This article is being prepared.
                </p>
              )}
              {enhanced && <EvidenceBox />}
              <EditorialSources post={post} />
              <RelatedReading articles={relatedArticles} />
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
