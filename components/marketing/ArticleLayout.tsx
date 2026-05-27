import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import type { PortableTextComponents } from '@portabletext/react'
import type { Post } from '@/lib/sanity'
import type { ArticleMeta } from '@/lib/articles'
import { formatArticleDate, normalizeTag } from '@/lib/articles'

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="border-t border-[#2E6171]/24 pt-16 font-display font-normal text-[#0B2545]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="border-l-2 border-[#B8860B] pl-10 font-display font-normal text-[#0B2545]">
        {children}
      </h3>
    ),
    normal: ({ children }) => <p>{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-y border-[#2E6171]/24 border-l-4 border-l-[#B8860B] bg-[#FAF8F5] px-16 py-16 font-display font-normal not-italic leading-[1.35] text-[#0B2545] md:px-18">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
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

function isResistanceTrainingArticle(post: Post) {
  return post.slug.current === 'resistance-training-older-adults'
}

function isProteinArticle(post: Post) {
  return post.slug.current === 'protein-for-older-adults'
}

function isCaregivingArticle(post: Post) {
  return post.slug.current === 'help-aging-parents-stay-strong'
}

function isLiftingWeightsArticle(post: Post) {
  return post.slug.current === 'how-to-start-lifting-weights-at-60'
}

function isBalanceMobilityArticle(post: Post) {
  return post.slug.current === 'balance-and-mobility-after-50'
}

function getCommerceCtaIndex(post: Post, body?: Post['body']) {
  if (!body) return -1

  if (isResistanceTrainingArticle(post)) {
    return body.findIndex((block) =>
      getPlainBlockText(block).startsWith('For older adults, that is not vanity.')
    )
  }

  if (isProteinArticle(post)) {
    return body.findIndex((block) =>
      getPlainBlockText(block).startsWith('StrongPath treats protein as part of the strength system')
    )
  }

  if (isCaregivingArticle(post)) {
    return body.findIndex((block) =>
      getPlainBlockText(block).startsWith('The goal is not to win an argument about aging.')
    )
  }

  if (isLiftingWeightsArticle(post)) {
    return body.findIndex((block) =>
      getPlainBlockText(block).startsWith('The goal is usable strength:')
    )
  }

  if (isBalanceMobilityArticle(post)) {
    return body.findIndex((block) =>
      getPlainBlockText(block).startsWith('Balance and mobility after 50 are not a side path')
    )
  }

  return -1
}

type CommerceModule = {
  heading: string
  body: string
  href: string
  items: Array<{ label: string; imageUrl: string }>
}

function getCommerceModule(post: Post): CommerceModule | null {
  if (isResistanceTrainingArticle(post)) {
    return {
      heading: 'Start with the basics',
      body:
        'We keep a short list of simple starter equipment for resistance training after 50: bands, a mat, and manageable dumbbells.',
      href: 'https://www.amazon.com/shop/stron02/list/3I5YGXSRXAGNC?ref_=aipsflist',
      items: [
        {
          label: 'Resistance bands',
          imageUrl: 'https://m.media-amazon.com/images/I/71Dw6U5ZNVL._AC_SL1500_.jpg',
        },
        {
          label: 'Exercise mat',
          imageUrl: 'https://m.media-amazon.com/images/I/81Y26toqdTL._AC_SL1500_.jpg',
        },
        {
          label: 'Dumbbells',
          imageUrl: 'https://m.media-amazon.com/images/I/61vh3p7XXUL._AC_SL1500_.jpg',
        },
      ],
    }
  }

  if (isProteinArticle(post)) {
    return {
      heading: 'Protein and recovery basics',
      body:
        'Protein is easier to improve when the setup is simple. This list includes practical basics for measuring portions, mixing protein, and supporting consistency after 50.',
      href: 'https://www.amazon.com/shop/stron02/list/3SO11BB9FLK24?ref_=aip_sf_list_spv_ons_mixed_d',
      items: [
        {
          label: 'Food scale',
          imageUrl: 'https://m.media-amazon.com/images/I/91YrLTBnMcL._SL1500_.jpg',
        },
        {
          label: 'Whey protein',
          imageUrl: 'https://m.media-amazon.com/images/I/71aEQamI-aL._AC_SL1500_.jpg',
        },
        {
          label: 'Unflavored whey',
          imageUrl: 'https://m.media-amazon.com/images/I/71U0ZXt4lFL._AC_SL1500_.jpg',
        },
        {
          label: 'Shaker bottle',
          imageUrl: 'https://m.media-amazon.com/images/I/71iiyCEpDmL._AC_SL1500_.jpg',
        },
      ],
    }
  }

  if (isCaregivingArticle(post)) {
    return {
      heading: 'Help them start simply',
      body:
        'Supporting an aging parent is easier when the first step feels manageable. This list includes simple equipment for gentle movement, grip work, stretching, and at-home strength.',
      href: 'https://www.amazon.com/shop/stron02/list/1R83PY59K8IQF?ref_=aip_sf_list_spv_ons_mixed_d',
      items: [
        {
          label: 'Chair exercise guide',
          imageUrl: 'https://m.media-amazon.com/images/I/71u6OgLdxxL._AC_SL1500_.jpg',
        },
        {
          label: 'Grip strengthener',
          imageUrl: 'https://m.media-amazon.com/images/I/712DtOtiLnL._AC_SL1500_.jpg',
        },
        {
          label: 'Exercise mat',
          imageUrl: 'https://m.media-amazon.com/images/I/71eYq88bbSL._AC_SL1500_.jpg',
        },
        {
          label: 'Resistance bands',
          imageUrl: 'https://m.media-amazon.com/images/I/71Dw6U5ZNVL._AC_SL1500_.jpg',
        },
      ],
    }
  }

  if (isLiftingWeightsArticle(post)) {
    return {
      heading: 'Start with the basics',
      body:
        'We keep a short list of simple starter equipment for strength training after 50: resistance bands, a comfortable mat, and manageable dumbbells.',
      href: 'https://www.amazon.com/shop/stron02/list/3I5YGXSRXAGNC?ref_=aipsflist',
      items: [
        {
          label: 'Resistance bands',
          imageUrl: 'https://m.media-amazon.com/images/I/71Dw6U5ZNVL._AC_SL1500_.jpg',
        },
        {
          label: 'Exercise mat',
          imageUrl: 'https://m.media-amazon.com/images/I/81Y26toqdTL._AC_SL1500_.jpg',
        },
        {
          label: 'Dumbbells',
          imageUrl: 'https://m.media-amazon.com/images/I/61vh3p7XXUL._AC_SL1500_.jpg',
        },
      ],
    }
  }

  if (isBalanceMobilityArticle(post)) {
    return {
      heading: 'Balance and mobility basics',
      body:
        'We keep a short list of practical supports for balance, mobility, stretching, and recovery practice after 50.',
      href: 'https://www.amazon.com/shop/stron02/list/SIMAOLZ5IIZI?ref_=aip_sf_list_spv_ons_mixed_d',
      items: [
        {
          label: 'Balance pad',
          imageUrl: 'https://m.media-amazon.com/images/I/618vhCUg+pL._AC_SL1500_.jpg',
        },
        {
          label: 'Yoga blocks',
          imageUrl: 'https://m.media-amazon.com/images/I/61ni0epHWFL._AC_SL1500_.jpg',
        },
        {
          label: 'Foam roller',
          imageUrl: 'https://m.media-amazon.com/images/I/61-NGQxfxHL._AC_SL1500_.jpg',
        },
        {
          label: 'Stretching strap',
          imageUrl: 'https://m.media-amazon.com/images/I/71+I0Ft-CJL._AC_SL1500_.jpg',
        },
      ],
    }
  }

  return null
}

function ArticleCommerceCta({ module }: { module: CommerceModule }) {
  return (
    <aside className="not-prose my-24 border-y border-[#2E6171]/30 bg-[#FAF8F5] py-16 md:my-30 md:py-18">
      <div className="grid gap-14 md:grid-cols-[minmax(0,1fr)_220px] md:items-start md:gap-18">
        <div>
          <p className="font-utility text-[12px] uppercase leading-none text-[#5A6472]">
            Editorial resource
          </p>
          <h2 className="mt-8 font-display text-[28px] font-normal leading-[1.1] text-[#0B2545] md:text-[34px]">
            {module.heading}
          </h2>
          <p className="mt-9 font-body text-[17px] leading-[1.58] text-[#1A1D24]/78 md:text-[18px]">
            {module.body}
          </p>
          <a
            href={module.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-12 inline-flex min-h-[42px] items-center justify-center border border-[#0B2545]/70 bg-warm-white px-14 py-10 font-body text-[15px] font-medium leading-none text-[#0B2545] transition-colors hover:bg-[#0B2545] hover:text-warm-white"
          >
            View the list
          </a>
        </div>
        <ul className="grid gap-7 border-t border-[#2E6171]/20 pt-10 md:border-t-0 md:pt-0">
          {module.items.map((item) => (
            <li
              key={item.label}
              className="border-l-2 border-[#B8860B]/70 bg-warm-white py-7 pl-9 pr-8 font-utility text-[13px] font-medium leading-[1.25] text-[#0B2545]"
            >
              <span>
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-12 border-t border-[#2E6171]/20 pt-10 font-utility text-[12px] leading-[1.4] text-[#5A6472]">
        StrongPath may earn from qualifying Amazon purchases.
      </p>
    </aside>
  )
}

function HeaderSources({ post }: { post: Post }) {
  if (!post.sources?.length) return null

  const publications = Array.from(new Set(post.sources.map((source) => source.publication).filter(Boolean)))

  return (
    <aside className="mt-18 border-y border-[#2E6171]/24 py-12 md:mt-22 md:max-w-[720px]">
      <p className="font-utility text-[12px] uppercase leading-none text-[#5A6472]">
        Evidence used in this article
      </p>
      <p className="mt-8 font-body text-[16px] leading-[1.5] text-[#1A1D24]/76 md:text-[17px]">
        {post.sources.length} source{post.sources.length === 1 ? '' : 's'} reviewed
        {publications.length > 0 ? `, including ${publications.slice(0, 3).join(', ')}` : ''}.
      </p>
    </aside>
  )
}

function KeyTakeaways() {
  const takeaways = [
    'Sarcopenia is about strength, muscle, and function, not appearance alone.',
    'Early signs often show up in stairs, chairs, luggage, walking speed, grip, and recovery.',
    'The next step is usually simple: the right lifting, enough protein, recovery, and a safe place to begin.',
  ]

  return (
    <section className="mb-24 border-l-4 border-[#B8860B] bg-[#FAF8F5] px-16 py-16 md:mb-30 md:px-20 md:py-18">
      <p className="font-utility text-[12px] uppercase leading-none text-[#5A6472]">Key takeaways</p>
      <ul className="mt-14 space-y-8">
        {takeaways.map((takeaway) => (
          <li key={takeaway} className="font-body text-[17px] leading-[1.5] text-[#1A1D24]/86">
            {takeaway}
          </li>
        ))}
      </ul>
    </section>
  )
}

function EvidenceBox() {
  return (
    <section className="my-30 border border-[#2E6171]/34 bg-muted-teal/10 px-16 py-16 md:my-36 md:px-20 md:py-18">
      <p className="font-utility text-[12px] uppercase leading-none text-[#5A6472]">What the evidence says</p>
      <p className="mt-10 font-display text-[24px] leading-[1.18] text-[#0B2545] md:text-[28px]">
        Strength and function matter, not muscle size alone.
      </p>
      <p className="mt-10 font-body text-[17px] leading-[1.58] text-[#1A1D24]/78 md:text-[18px]">
        The goal is practical strength: standing, climbing, carrying, recovering, and keeping more
        good days in reach.
      </p>
    </section>
  )
}

function EditorialSources({ post }: { post: Post }) {
  if (!post.sources?.length) return null

  return (
    <section aria-labelledby="article-sources" className="mt-38 border border-[#2E6171]/28 bg-[#FAF8F5] p-16 md:p-20">
      <p className="font-utility text-[12px] uppercase leading-none text-[#5A6472]">Evidence</p>
      <h2
        id="article-sources"
        className="mt-10 font-display text-[30px] font-normal leading-[1.15] text-[#0B2545] md:text-[34px]"
      >
        Sources reviewed
      </h2>
      <div className="mt-18 border-t border-[#2E6171]/35">
        {post.sources.map((source) => (
          <div
            key={`${source.title}-${source.publication}`}
            className="grid gap-8 border-b border-[#2E6171]/25 py-13 last:border-b-0 md:grid-cols-[0.7fr_0.3fr]"
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
    <section aria-labelledby="related-reading" className="mt-38 border-t border-[#2E6171]/32 pt-18">
      <p className="font-utility text-[12px] uppercase leading-none text-[#5A6472]">Curated next reads</p>
      <h2
        id="related-reading"
        className="mt-10 font-display text-[30px] font-normal leading-[1.15] text-[#0B2545] md:text-[34px]"
      >
        Keep going from here
      </h2>
      <div className="mt-20 grid border-t border-[#2E6171]/35">
        {articles.slice(0, 4).map((article, index) => (
          <article
            key={article.href}
            className="grid gap-10 border-b border-[#2E6171]/25 py-16 md:grid-cols-[42px_112px_minmax(0,1fr)] md:gap-14"
          >
            <p className="font-utility text-[13px] leading-none text-[#2E6171]">
              {String(index + 1).padStart(2, '0')}
            </p>
            {article.image && (
              <Link href={article.href} className="group block">
                <Image
                  src={article.image.src}
                  alt={article.image.alt}
                  width={300}
                  height={220}
                  className="aspect-[16/10] w-full border border-[#2E6171]/18 object-cover transition-opacity group-hover:opacity-90 md:aspect-[5/4]"
                  style={{ objectPosition: article.image.objectPosition }}
                />
              </Link>
            )}
            <div>
              <div className="font-utility text-[13px] leading-[1.35] text-[#5A6472]">
                {article.category && <p>{article.category}</p>}
              </div>
              <Link href={article.href} className="group">
                <h3 className="mt-8 font-display text-[25px] font-normal leading-[1.12] text-[#0B2545] group-hover:underline md:text-[28px]">
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
  relatedArticles = [],
}: {
  post: Post
  relatedArticles?: ArticleMeta[]
}) {
  const publishedAt = formatArticleDate(post.publishedAt)
  const updatedAt = formatArticleDate(post.updatedAt)
  const articleBody = getArticleBody(post)
  const renderedArticleBody = articleBody ?? []
  const enhanced = isSarcopeniaArticle(post)
  const heroImage = post.heroImage
  const commerceModule = getCommerceModule(post)
  const commerceCtaIndex = commerceModule ? getCommerceCtaIndex(post, renderedArticleBody) : -1
  const articleBodyBeforeCta =
    commerceCtaIndex >= 0
      ? renderedArticleBody.slice(0, commerceCtaIndex + 1)
      : renderedArticleBody
  const articleBodyAfterCta =
    commerceCtaIndex >= 0 ? renderedArticleBody.slice(commerceCtaIndex + 1) : []

  return (
    <main className="bg-warm-white">
      <article>
        <header className="border-b border-[#2E6171]/24 bg-[#FAF8F5]">
          <div className="sp-container py-26 md:py-34">
            <div className="max-w-[900px]">
              <div className="flex flex-wrap gap-x-12 gap-y-6 font-utility text-[13px] leading-[1.2] text-[#5A6472]">
                {post.category && <p>{post.category}</p>}
                {publishedAt && <p>{publishedAt}</p>}
                {updatedAt && updatedAt !== publishedAt && <p>Updated {updatedAt}</p>}
              </div>
              <h1 className="mt-16 max-w-[760px] font-display text-[44px] font-normal leading-[1.03] text-[#0B2545] md:text-[66px] md:leading-[0.99]">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="mt-14 max-w-[720px] font-body text-[18px] leading-[1.52] text-[#1A1D24]/76 md:text-[21px]">
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
              <HeaderSources post={post} />
            </div>
            {heroImage && (
              <figure className="mt-20 overflow-hidden border border-[#2E6171]/24 bg-warm-white md:mt-24">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={1600}
                  height={1067}
                  priority
                  className="aspect-[16/9] w-full object-cover object-center md:aspect-[2.35/1]"
                  style={{ objectPosition: heroImage.objectPosition }}
                />
                <figcaption className="border-t border-[#2E6171]/20 px-12 py-8 font-utility text-[12px] leading-[1.35] text-[#5A6472]">
                  {heroImage.caption && <span>{heroImage.caption} </span>}
                  {heroImage.credit}. Source:{' '}
                  <a href={heroImage.sourceUrl} className="underline underline-offset-4">
                    Pexels
                  </a>
                  . License:{' '}
                  <a href={heroImage.licenseUrl} className="underline underline-offset-4">
                    Pexels License
                  </a>
                  .
                </figcaption>
              </figure>
            )}
          </div>
        </header>

        <div className="sp-container py-22 md:py-30">
          <div className="mx-auto max-w-[680px]">
            <div>
              {enhanced && <KeyTakeaways />}
              {articleBody ? (
                <div className="prose prose-lg max-w-none font-body prose-headings:font-display prose-headings:font-normal prose-headings:text-[#0B2545] prose-h2:mb-3 prose-h2:mt-9 prose-h2:text-[29px] prose-h2:leading-[1.17] prose-h3:mt-7 prose-h3:text-[23px] prose-p:my-3 prose-p:text-[18px] prose-p:leading-[1.64] prose-p:text-[#1A1D24]/88 prose-a:text-[#0B2545] prose-a:decoration-[#B8860B] prose-a:underline-offset-4 prose-ul:my-4 prose-li:my-1 prose-li:text-[#1A1D24]/88 prose-strong:text-[#0B2545] md:prose-h2:mt-10 md:prose-h2:text-[33px] md:prose-h3:text-[27px] md:prose-p:text-[19px] md:prose-p:leading-[1.66]">
                  <PortableText value={articleBodyBeforeCta} components={portableTextComponents} />
                  {commerceModule && commerceCtaIndex >= 0 && (
                    <ArticleCommerceCta module={commerceModule} />
                  )}
                  {articleBodyAfterCta && articleBodyAfterCta.length > 0 && (
                    <PortableText value={articleBodyAfterCta} components={portableTextComponents} />
                  )}
                </div>
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
