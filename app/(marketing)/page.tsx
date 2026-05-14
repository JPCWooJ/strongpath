import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AmazonLink } from '@/components/AmazonLink'
import { formatArticleDate } from '@/lib/articles'
import { featuredFlagshipArticles } from '@/lib/flagship-articles'
import { EmailForm } from './EmailForm'

export const metadata: Metadata = {
  title: 'StrongPath - Evidence-based strength for adults 55+',
  description:
    'StrongPath is an evidence-based strength platform for adults and families facing age-related muscle loss.',
  openGraph: {
    title: 'StrongPath - Evidence-based strength for adults 55+',
    description:
      'Research-grounded strength guidance for adults who want to preserve capacity, independence, and good days.',
    type: 'website',
  },
}

const adviceFailures = [
  ['Walk more', 'Walking matters. It does not train the muscles that help you rise, carry, climb, and recover.'],
  ['Be careful', 'Caution can protect people. Without a plan, it often teaches them to do less and less.'],
  ['Eat more protein', 'The direction is useful. Older adults need specifics: amount, timing, and how it supports training.'],
  ['Try some weights', 'The right instinct needs a sequence: start low, learn form, add load, recover, progress.'],
]

const readerPaths = [
  {
    label: 'For adults noticing change',
    title: 'The stairs are telling you something.',
    copy:
      'You are not broken. You are paying attention. StrongPath explains what age-related muscle loss is, what the research says, and how to begin without being treated like a beginner in life.',
  },
  {
    label: 'For adult children',
    title: 'You want your parent to keep more good days.',
    copy:
      'The aim is dignity, not pressure. We help families understand what strength protects and how to make the next conversation calmer, clearer, and more useful.',
  },
  {
    label: 'For careful readers',
    title: 'You want claims that can be checked.',
    copy:
      'StrongPath cites current research and named sources. The book gives the work its foundation; current evidence carries the specific claims we publish.',
  },
]

const evidenceSources = [
  'Peer-reviewed studies on sarcopenia, resistance training, protein metabolism, and recovery',
  'Named institutional sources including Harvard Health Publishing, Mayo Clinic, NIH, NIA, and ACSM',
  'Plain-language summaries that separate what research shows from what it does not yet prove',
]

const bookCoverUrl = '/images/choosing-the-strongpath-cover.jpg'

const evidenceStandards = [
  ['Name the condition', 'We write about age-related muscle loss, not vague decline.'],
  [
    'Separate signal from certainty',
    'Claims are framed around what research supports and what still needs care.',
  ],
  ['Respect the reader', 'Plain language, no fear tactics, no miracle language.'],
]

const discoveryTools = [
  {
    label: 'Read',
    title: 'The book that named the path',
    copy:
      'Start with the category-defining book, then use StrongPath to stay current as the research and recommendations evolve.',
    href: 'amazon',
  },
  {
    label: 'Learn',
    title: 'The muscle-loss briefing',
    copy:
      'Understand why age-related muscle loss changes capacity, recovery, and independence before choosing a program or product.',
    href: '/blog/why-muscle-loss-changes-everything-after-50',
  },
  {
    label: 'Compare',
    title: 'Product discovery, without hype',
    copy:
      'StrongPath will curate books, training tools, and practical supports through an evidence-first commerce lens.',
    href: '/waitlist',
  },
]

const topicalPathways = [
  ['Sarcopenia', '/blog/tags/sarcopenia'],
  ['Strength After 50', '/blog/tags/strength-after-50'],
  ['Healthy Aging', '/blog/tags/healthy-aging'],
  ['Resistance Training', '/blog/tags/resistance-training'],
  ['Research', '/blog/tags/research'],
]

const publishingTopics = [
  {
    title: 'What is sarcopenia?',
    copy: 'The plain-language guide to age-related muscle loss, why it is often missed, and what measurements matter.',
  },
  {
    title: 'Resistance training for older adults',
    copy: 'How to train strength safely and seriously, with progression that respects different starting points.',
  },
  {
    title: 'How to help aging parents stay strong',
    copy: 'A practical guide for families who want to support capacity without taking over.',
  },
  {
    title: 'Protein after 60',
    copy: 'What older adults need to know about protein, muscle repair, and training support.',
  },
  {
    title: 'How to start lifting weights at 60',
    copy: 'A careful first-step guide for people who want specifics, not motivation slogans.',
  },
]

const featuredArticles = featuredFlagshipArticles.map((article) => ({
  title: article.title,
  href: `/blog/${article.slug.current}`,
  excerpt: article.excerpt,
  category: article.category,
  publishedAt: article.publishedAt,
}))

const [leadArticle, ...secondaryArticles] = featuredArticles

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <section className="relative border-b border-inkwell">
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-sunbeam-gradient opacity-45" />
        <div className="sp-container relative pb-[54px] pt-[36px] md:pb-[68px] md:pt-[56px] lg:pb-[78px] lg:pt-[66px]">
          <div className="grid gap-18 md:grid-cols-[minmax(0,0.7fr)_minmax(230px,0.4fr)] md:items-center md:gap-38 lg:grid-cols-[minmax(0,0.78fr)_minmax(340px,0.56fr)] lg:gap-64">
            <div>
              <p className="sp-kicker mb-24 text-inkwell/60">
                Evidence-based strength after 55
              </p>
              <h1 className="max-w-[720px] font-display text-[46px] font-normal leading-[1.02] text-inkwell sm:text-[68px] lg:text-[88px]">
                Strength protects independence.
              </h1>
              <p className="mt-18 max-w-[570px] font-body text-[21px] font-normal leading-[1.54] text-inkwell/82 md:text-[23px] lg:mt-20">
                StrongPath helps adults and families understand age-related muscle loss, what
                current research shows, and how strength preserves ordinary freedom.
              </p>
              <div className="mt-26 flex max-w-[650px] flex-col gap-14 sm:flex-row sm:items-center sm:gap-20">
                <Link
                  href="/waitlist"
                  className="inline-flex w-full shrink-0 justify-center border border-inkwell/90 bg-inkwell px-30 py-[15px] font-body text-[17px] font-medium leading-none text-parchment transition-colors hover:bg-transparent hover:text-inkwell sm:w-auto"
                >
                  Take the Assessment
                </Link>
                <p className="max-w-[310px] border-l border-inkwell/22 pl-14 font-body text-[16px] leading-[1.45] text-inkwell/68">
                  For the stairs, the groceries, the visits, and the days that still feel like
                  yours.
                </p>
              </div>
            </div>

            <aside className="relative border-t border-inkwell/30 pt-18 md:max-w-none md:border-t-0 md:pl-8 md:pt-0 lg:pl-14">
              <div
                aria-hidden="true"
                className="absolute left-0 top-[-14px] hidden h-px w-[78%] bg-inkwell/28 md:block lg:w-[84%]"
              />
              <div className="relative grid grid-cols-[112px_minmax(0,1fr)] items-start gap-18 sm:grid-cols-[156px_minmax(0,1fr)] md:block">
                <div className="bg-parchment p-4 ring-1 ring-inkwell/52 md:ml-auto md:max-w-[238px] lg:max-w-[344px] lg:p-6">
                  <Image
                    src={bookCoverUrl}
                    alt="Choosing the StrongPath book cover"
                    width={333}
                    height={500}
                    sizes="(min-width: 1024px) 330px, (min-width: 768px) 238px, (min-width: 640px) 156px, 112px"
                    className="h-auto w-full max-w-[112px] bg-parchment sm:max-w-[156px] md:max-w-[238px] lg:max-w-[330px]"
                    priority
                  />
                </div>
                <div className="md:ml-auto md:mt-14 md:max-w-[238px] lg:mt-16 lg:max-w-[344px]">
                  <p className="font-utility text-[13px] leading-[1.38] text-inkwell/58">
                    Foundational authority
                  </p>
                  <p className="mt-8 max-w-[360px] font-body text-[18px] font-normal leading-[1.42] text-inkwell/82 md:text-[18px] lg:max-w-none lg:text-[20px]">
                    The category-defining book behind StrongPath. Amazon bestseller in Aging,
                    Weight Training, Exercise, and Longevity.
                  </p>
                  <p className="mt-14 border-t border-inkwell/18 pt-10 font-utility text-[13px] leading-[1.38] text-inkwell/60">
                    Built on the research foundation behind <em>Choosing the StrongPath</em>, with
                    current evidence carrying the claims we publish.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="learn-more" className="scroll-mt-28 border-b border-inkwell/70 bg-parchment">
        <div className="sp-container grid gap-0 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="border-b border-inkwell/45 py-[78px] lg:border-b-0 lg:border-r lg:pr-48">
            <p className="sp-kicker mb-18 text-inkwell/60">The problem</p>
            <h2 className="font-display text-[42px] font-normal leading-[1.04] md:text-[60px]">
              The first sign is usually ordinary.
            </h2>
          </div>
          <div className="py-[78px] lg:pl-48">
            <div className="grid gap-30">
              <p className="font-body text-[24px] font-normal leading-[1.52] text-inkwell/90">
                A stair gets longer. A chair gets lower. A grocery bag starts requiring two trips.
                A parent begins organizing the day around what feels safe.
              </p>
              <p className="sp-body text-inkwell/85">
                These are often signs of age-related muscle loss. The condition has a name:
                sarcopenia. It affects muscle, strength, function, balance, recovery, and the small
                freedoms that make a day feel normal.
              </p>
              <p className="sp-body text-inkwell/85">
                StrongPath is not about vague aging. It is about the measurable loss of muscle and
                strength, and the research-backed practices that help adults protect capacity over
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-inkwell/55 bg-[#f6f0df]/45">
        <div className="sp-container py-[92px]">
          <div className="grid gap-48 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="sp-kicker mb-18 text-inkwell/60">Why the usual advice falls short</p>
              <h2 className="font-display text-[40px] font-normal leading-[1.06] md:text-[56px]">
                Familiar advice is often too vague to use.
              </h2>
            </div>
            <div className="grid border-t border-inkwell/55">
              {adviceFailures.map(([title, copy]) => (
                <div
                  key={title}
                  className="grid gap-18 border-b border-inkwell/35 py-28 md:grid-cols-[0.36fr_0.64fr]"
                >
                  <h3 className="font-display text-[29px] font-normal leading-[1.1]">{title}</h3>
                  <p className="sp-body text-inkwell/85">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-inkwell/60">
        <div className="absolute inset-0 bg-sunbeam-gradient opacity-28" />
        <div className="sp-container relative py-[112px]">
          <div className="mx-auto max-w-[990px] text-center">
            <p className="sp-kicker mb-18 text-inkwell/60">What strength protects</p>
            <h2 className="font-display text-[48px] font-normal leading-none md:text-[74px]">
              Capacity is built in ordinary moments.
            </h2>
            <p className="mx-auto mt-30 max-w-[740px] font-body text-[23px] font-normal leading-[1.56] text-inkwell/84">
              Getting out of a chair. Carrying groceries. Traveling with confidence. Visiting
              family without planning around every step. Strength protects independence because it
              protects the actions independence depends on.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-inkwell/55 bg-parchment">
        <div className="sp-container py-[96px]">
          <div className="grid gap-48 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="sp-kicker mb-18 text-inkwell/60">Who this is for</p>
              <h2 className="font-display text-[42px] font-normal leading-[1.05] md:text-[60px]">
                Two readers often arrive at the same page.
              </h2>
            </div>
            <div className="grid border-t border-inkwell/55">
              {readerPaths.map((pathway) => (
                <article
                  key={pathway.label}
                  className="grid gap-18 border-b border-inkwell/35 py-34 md:grid-cols-[0.32fr_0.68fr]"
                >
                  <p className="font-utility text-[13px] leading-[1.38] text-inkwell/58">
                    {pathway.label}
                  </p>
                  <div>
                    <h3 className="font-display text-[34px] font-normal leading-[1.06]">
                      {pathway.title}
                    </h3>
                    <p className="sp-body mt-18 text-inkwell/85">{pathway.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-inkwell/60 bg-verdigris-wash/26">
        <div className="sp-container grid gap-0 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="border-b border-inkwell/45 py-[92px] lg:border-b-0 lg:border-r lg:pr-48">
            <p className="sp-kicker mb-18 text-inkwell/60">The evidence standard</p>
            <h2 className="font-display text-[44px] font-normal leading-[1.03] md:text-[64px]">
              The book is the foundation. Current research does the substantiating.
            </h2>
            <p className="mt-24 max-w-[520px] sp-body text-inkwell/80">
              StrongPath earns attention by making claims checkable, practical, and calm.
            </p>
          </div>
          <div className="py-[92px] lg:pl-48">
            <p className="font-body text-[24px] font-normal leading-[1.5] text-inkwell/90">
              StrongPath publishes for readers who want confidence without salesmanship.
            </p>
            <div className="mt-34 grid border-t border-inkwell/50 md:grid-cols-3">
              {evidenceStandards.map(([title, copy]) => (
                <article
                  key={title}
                  className="border-b border-inkwell/35 py-[26px] md:border-r md:border-inkwell/35 md:px-18 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <h3 className="font-display text-[28px] font-normal leading-[1.08]">{title}</h3>
                  <p className="mt-12 font-body text-[18px] leading-[1.55] text-inkwell/82">{copy}</p>
                </article>
              ))}
            </div>
            <div className="mt-34 grid border-t border-inkwell/50">
              {evidenceSources.map((source) => (
                <p key={source} className="border-b border-inkwell/35 py-20 sp-body text-inkwell/85">
                  {source}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-inkwell/55 bg-[#f7f1e4]/55">
        <div className="sp-container py-[104px]">
          <div className="grid gap-[56px] lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="sp-kicker mb-18 text-inkwell/60">Start here</p>
              <h2 className="font-display text-[46px] font-normal leading-[1.03] md:text-[68px]">
                What we publish first.
              </h2>
              <p className="sp-body mt-24 text-inkwell/85">
                The first StrongPath guides answer the questions that matter before a program,
                purchase, or promise: what is happening, what works, how to start, and how to help
                someone you love begin.
              </p>
            </div>
            <div className="grid border-t border-inkwell/55">
              {publishingTopics.map((topic, index) => (
                <article
                  key={topic.title}
                  className="grid gap-18 border-b border-inkwell/35 py-28 md:grid-cols-[64px_1fr]"
                >
                  <p className="border-l-[6px] border-verdigris pl-12 font-utility text-[13px] leading-[1.38] text-inkwell/56">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <div>
                    <h3 className="font-display text-[29px] font-normal leading-[1.1]">
                      {topic.title}
                    </h3>
                    <p className="sp-body mt-8 text-inkwell/85">{topic.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-inkwell/60 bg-verdigris-wash/24">
        <div className="sp-container py-[108px]">
          <div className="grid gap-[56px] lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="sp-kicker mb-18 text-inkwell/60">Product discovery</p>
              <h2 className="font-display text-[46px] font-normal leading-[1.03] md:text-[68px]">
                Commerce attached to trust.
              </h2>
              <p className="sp-body mt-24 text-inkwell/85">
                StrongPath will recommend tools only when they help readers understand, begin, or
                sustain evidence-based strength work. The editorial standard comes first.
              </p>
            </div>
            <div className="grid border-t border-inkwell/50 md:grid-cols-3">
              {discoveryTools.map((item) => (
                <article
                  key={item.title}
                  className="flex min-h-[320px] flex-col justify-between border-b border-inkwell/35 py-30 md:border-r md:border-inkwell/35 md:px-22 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <div>
                    <p className="font-utility text-[13px] leading-[1.38] text-verdigris">
                      {item.label}
                    </p>
                    <h3 className="mt-18 font-display text-[31px] font-normal leading-[1.05] text-inkwell">
                      {item.title}
                    </h3>
                    <p className="mt-18 font-body text-[18px] leading-[1.55] text-inkwell/82">
                      {item.copy}
                    </p>
                  </div>
                  {item.href === 'amazon' ? (
                    <AmazonLink
                      asin="1626344760"
                      className="mt-24 inline-flex justify-center border border-inkwell px-18 py-10 font-body text-[16px] font-medium leading-none text-inkwell transition-colors hover:bg-inkwell hover:text-parchment"
                    >
                      View the book
                    </AmazonLink>
                  ) : (
                    <Link
                      href={item.href}
                      className="mt-24 inline-flex justify-center border border-inkwell px-18 py-10 font-body text-[16px] font-medium leading-none text-inkwell transition-colors hover:bg-inkwell hover:text-parchment"
                    >
                      Open pathway
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="scroll-mt-28 border-b border-inkwell/55 bg-parchment">
        <div className="sp-container py-[110px]">
          <div className="grid gap-[58px] lg:grid-cols-[0.38fr_0.62fr]">
            <div>
              <p className="sp-kicker mb-18 text-inkwell/60">Now publishing</p>
              <h2 className="font-display text-[42px] font-normal leading-[1.05] md:text-[60px]">
                The first StrongPath essays are live.
              </h2>
              <p className="sp-body mt-24 text-inkwell/85">
                These starter articles establish the editorial spine of the publication: muscle
                loss, strength, evidence, and the practical meaning of healthy aging.
              </p>
              <div className="mt-32 flex flex-wrap gap-x-10 gap-y-8">
                {topicalPathways.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="border border-inkwell/28 px-11 py-7 font-utility text-[13px] leading-none text-inkwell/66 transition-colors hover:border-inkwell hover:bg-inkwell hover:text-parchment"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid border-t border-inkwell/60 lg:grid-cols-[1.08fr_0.92fr]">
              {leadArticle && (
                <article className="border-b border-inkwell/35 py-36 lg:border-r lg:border-inkwell/30 lg:pr-34">
                  <p className="mb-18 font-utility text-[13px] leading-none text-inkwell/58">
                    Featured essay
                  </p>
                  <div className="flex flex-wrap gap-x-12 gap-y-4 font-utility text-[13px] leading-[1.38] text-inkwell/54">
                    {leadArticle.category && <p>{leadArticle.category}</p>}
                    {leadArticle.publishedAt && <p>{formatArticleDate(leadArticle.publishedAt)}</p>}
                  </div>
                  <Link href={leadArticle.href} className="group mt-18 block">
                    <h3 className="font-display text-[42px] font-normal leading-[1.01] text-inkwell group-hover:underline md:text-[54px]">
                      {leadArticle.title}
                    </h3>
                  </Link>
                  {leadArticle.excerpt && (
                    <p className="mt-20 font-body text-[22px] font-normal leading-[1.52] text-inkwell/84">
                      {leadArticle.excerpt}
                    </p>
                  )}
                </article>
              )}
              <div className="grid lg:pl-30">
                <p className="border-b border-inkwell/30 py-18 font-utility text-[13px] leading-none text-inkwell/58 lg:pl-0">
                  Further reading
                </p>
                {secondaryArticles.map((article) => (
                  <article key={article.href} className="border-b border-inkwell/30 py-26">
                    <div className="flex flex-wrap gap-x-12 gap-y-4 font-utility text-[13px] leading-[1.38] text-inkwell/54">
                      {article.category && <p>{article.category}</p>}
                      {article.publishedAt && <p>{formatArticleDate(article.publishedAt)}</p>}
                    </div>
                    <Link href={article.href} className="group mt-12 block">
                      <h3 className="font-display text-[30px] font-normal leading-[1.08] text-inkwell group-hover:underline md:text-[36px]">
                        {article.title}
                      </h3>
                    </Link>
                    {article.excerpt && (
                      <p className="sp-body mt-14 text-inkwell/85">{article.excerpt}</p>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#f6f0df]/45">
        <div className="absolute inset-x-0 top-0 h-[24rem] bg-sunbeam-gradient opacity-32" />
        <div className="sp-container relative py-[112px]">
          <div className="mx-auto max-w-[840px] border-y border-inkwell/45 py-48 text-center">
            <p className="sp-kicker mb-18 text-inkwell/60">Stay close</p>
            <h2 className="font-display text-[46px] font-normal leading-[1.03] md:text-[68px]">
              Receive the first guides.
            </h2>
            <p className="mx-auto mt-30 max-w-[680px] sp-body text-inkwell/85">
              Get the first articles as they publish: sarcopenia, resistance training, protein,
              recovery, and how families can help a parent begin without pressure.
            </p>
            <div className="mt-30">
              <EmailForm source="homepage_substance_translation" />
            </div>
            <p className="mx-auto mt-30 max-w-[620px] font-utility text-[13px] leading-[1.45] text-inkwell/62">
              Educational content only. StrongPath does not diagnose, treat, cure, or replace care
              from your physician, physical therapist, or other qualified professional.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
