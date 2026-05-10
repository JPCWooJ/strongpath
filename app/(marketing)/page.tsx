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

// Authentic cover source: Google Books listing for ISBN 9781626344761.
// https://books.google.com/books/about/Choosing_the_StrongPath.html?id=a3MftAEACAAJ
const bookCoverUrl =
  'https://books.google.com/books/content?id=a3MftAEACAAJ&printsec=frontcover&img=1&zoom=0&source=gbs_api'

const authoritySignals = [
  ['Publication', 'Evidence-first articles for adults 55+ and the families helping them.'],
  ['Book', 'The research foundation behind Choosing the StrongPath.'],
  ['Tools', 'A growing platform for putting strength into practice.'],
]

const bookNotes = [
  'Amazon bestseller in Aging, Weight Training, Exercise, and Longevity',
  'Written with Marni Boppart, ScD, alongside Fred Bartlit and Steven Droullard',
  "The source text for StrongPath's strength-first approach to aging",
]

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
      <section className="border-b border-navy bg-parchment">
        <div className="sp-container py-[72px] md:py-[108px]">
          <div className="grid border-y border-navy/35 md:grid-cols-3">
            {authoritySignals.map(([label, copy]) => (
              <div
                key={label}
                className="border-b border-navy/35 py-16 md:border-b-0 md:border-r md:px-18 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <p className="font-utility text-caption leading-caption text-inkwell/62">{label}</p>
                <p className="mt-8 max-w-[320px] font-body text-[17px] font-medium leading-[1.35] text-navy/90 sm:max-w-none sm:text-[18px]">
                  {copy}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-60 pt-60 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
            <div>
              <p className="sp-kicker mb-18 text-inkwell/70">Strength after 55</p>
              <h1 className="max-w-[1040px] break-words font-display text-[46px] font-normal leading-[0.94] text-navy sm:text-[78px] lg:text-[104px]">
                Muscle loss is the problem. Strength is the path.
              </h1>
              <p className="mt-34 max-w-[780px] font-body text-[22px] font-medium leading-[1.5] text-inkwell/88 md:text-[24px]">
                StrongPath is an evidence-based strength platform for adults who want to preserve
                capacity, independence, and good days. The work is built on the research foundation
                behind <em>Choosing the StrongPath: Reversing the Downward Spiral of Aging</em> and
                kept current through the research we publish now.
              </p>
              <div className="mt-34 flex flex-col gap-12 sm:flex-row">
                <Link
                  href="/waitlist"
                  className="inline-flex justify-center border border-navy bg-navy px-24 py-14 font-body text-[18px] font-medium leading-none text-paper transition-colors hover:border-gold hover:bg-paper hover:text-navy"
                >
                  Join Waitlist
                </Link>
                <Link
                  href="#learn-more"
                  className="inline-flex justify-center border border-gold px-24 py-14 font-body text-[18px] font-medium leading-none text-navy transition-colors hover:bg-navy hover:text-paper"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <aside className="bg-parchment lg:mt-12">
              <div className="border border-navy/25 bg-paper p-18 md:p-24">
                <div className="border border-navy/30 bg-parchment p-22 md:p-30">
                  <div className="flex flex-wrap items-center justify-center gap-10 md:justify-start">
                    <p className="font-utility text-caption leading-caption text-inkwell/65">
                      Book authority
                    </p>
                    <p className="border border-gold px-10 py-4 font-utility text-caption leading-caption text-navy">
                      Amazon bestseller
                    </p>
                  </div>
                  <div className="mt-26 border border-navy/35 bg-paper px-18 py-24 md:px-30 md:py-34">
                    <div className="mx-auto max-w-[310px] border border-navy/20 bg-parchment p-12 md:max-w-[340px] md:p-16">
                      <Image
                        src={bookCoverUrl}
                        alt="Choosing the StrongPath book cover"
                        width={640}
                        height={960}
                        className="mx-auto h-auto w-full border border-navy/25 bg-parchment"
                        priority
                      />
                    </div>
                  </div>
                  <p className="mt-22 text-center font-display text-[28px] font-normal leading-[1.08] text-navy md:text-left md:text-[34px]">
                    <em>Choosing the StrongPath: Reversing the Downward Spiral of Aging</em>
                  </p>
                  <p className="mt-12 text-center font-utility text-caption leading-caption text-inkwell/72 md:text-left">
                    by Fred Bartlit, Steven Droullard, and Marni Boppart, ScD (2018)
                  </p>
                  <div className="mt-24 grid border-t border-navy/30">
                    {bookNotes.map((note) => (
                      <p
                        key={note}
                        className="border-b border-navy/30 py-12 font-utility text-caption leading-caption text-inkwell/76"
                      >
                        {note}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-18 border-l-[6px] border-gold pl-18 font-body text-[19px] leading-[1.48] text-inkwell/85">
                The book named the work. StrongPath extends it into a current website, a growing
                publishing system, and future tools that help people put strength into practice.
              </p>
              <div className="mt-24 flex flex-col gap-12 sm:flex-row">
                <AmazonLink
                  asin="1626344760"
                  className="inline-flex justify-center border border-gold px-18 py-10 font-body text-[17px] font-medium leading-none text-navy transition-colors hover:bg-navy hover:text-paper"
                >
                  View the book
                </AmazonLink>
                <Link
                  href="/waitlist"
                  className="inline-flex justify-center border border-gold px-18 py-10 font-body text-[17px] font-medium leading-none text-navy transition-colors hover:bg-navy hover:text-paper"
                >
                  Receive the guides
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="learn-more" className="scroll-mt-28 border-b border-navy/35 bg-paper">
        <div className="sp-container grid gap-0 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="border-b border-inkwell py-60 lg:border-b-0 lg:border-r lg:pr-40">
            <p className="sp-kicker mb-18 text-inkwell/70">The problem</p>
            <h2 className="font-display text-[44px] font-normal leading-[1.08] md:text-[64px]">
              The first sign is usually ordinary.
            </h2>
          </div>
          <div className="py-60 lg:pl-40">
            <div className="grid gap-30">
              <p className="font-body text-[26px] font-medium leading-[1.42] text-inkwell">
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

      <section className="border-b border-navy/35 bg-parchment">
        <div className="sp-container py-60">
          <div className="grid gap-40 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="sp-kicker mb-18 text-inkwell/70">Why the usual advice falls short</p>
              <h2 className="font-display text-[42px] font-normal leading-[1.1] md:text-[58px]">
                Familiar advice is often too vague to use.
              </h2>
            </div>
            <div className="grid border-t border-inkwell">
              {adviceFailures.map(([title, copy]) => (
                <div
                  key={title}
                  className="grid gap-18 border-b border-inkwell py-24 md:grid-cols-[0.36fr_0.64fr]"
                >
                  <h3 className="font-display text-[30px] font-normal leading-[1.12]">{title}</h3>
                  <p className="sp-body text-inkwell/85">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-navy/35 bg-navy text-paper">
        <div className="sp-container py-[84px]">
          <div className="mx-auto max-w-[990px] text-center">
            <p className="sp-kicker mb-18 text-gold-soft">What strength protects</p>
            <h2 className="font-display text-[50px] font-normal leading-[1.04] text-paper md:text-[78px]">
              Capacity is built in ordinary moments.
            </h2>
            <p className="mx-auto mt-30 max-w-[780px] font-body text-[24px] font-medium leading-[1.48] text-paper/82">
              Getting out of a chair. Carrying groceries. Traveling with confidence. Visiting
              family without planning around every step. Strength protects independence because it
              protects the actions independence depends on.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-navy/35 bg-parchment">
        <div className="sp-container py-60">
          <div className="grid gap-40 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="sp-kicker mb-18 text-inkwell/70">Who this is for</p>
              <h2 className="font-display text-[44px] font-normal leading-[1.08] md:text-[64px]">
                Two readers often arrive at the same page.
              </h2>
            </div>
            <div className="grid border-t border-inkwell">
              {readerPaths.map((pathway) => (
                <article
                  key={pathway.label}
                  className="grid gap-18 border-b border-inkwell py-30 md:grid-cols-[0.32fr_0.68fr]"
                >
                  <p className="font-utility text-caption leading-caption text-inkwell/65">
                    {pathway.label}
                  </p>
                  <div>
                    <h3 className="font-display text-[38px] font-normal leading-[1.08]">
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

      <section className="border-b border-navy/35 bg-paper">
        <div className="sp-container grid gap-0 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="border-b border-inkwell py-70 lg:border-b-0 lg:border-r lg:pr-40">
            <p className="sp-kicker mb-18 text-inkwell/70">The evidence standard</p>
            <h2 className="font-display text-[46px] font-normal leading-[1.04] md:text-[68px]">
              The book is the foundation. Current research does the substantiating.
            </h2>
            <p className="mt-24 max-w-[520px] sp-body text-inkwell/80">
              StrongPath earns attention by making claims checkable, practical, and calm.
            </p>
          </div>
          <div className="py-70 lg:pl-40">
            <p className="font-body text-[26px] font-medium leading-[1.42] text-inkwell">
              StrongPath publishes for readers who want confidence without salesmanship.
            </p>
            <div className="mt-30 grid border-t border-inkwell md:grid-cols-3">
              {evidenceStandards.map(([title, copy]) => (
                <article
                  key={title}
                  className="border-b border-inkwell py-22 md:border-r md:px-18 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <h3 className="font-display text-[30px] font-normal leading-[1.08]">{title}</h3>
                  <p className="mt-12 font-body text-[18px] leading-[1.5] text-inkwell/82">{copy}</p>
                </article>
              ))}
            </div>
            <div className="mt-30 grid border-t border-inkwell">
              {evidenceSources.map((source) => (
                <p key={source} className="border-b border-inkwell py-18 sp-body text-inkwell/85">
                  {source}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-navy/35 bg-parchment">
        <div className="sp-container py-[76px]">
          <div className="grid gap-50 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="sp-kicker mb-18 text-inkwell/70">Start here</p>
              <h2 className="font-display text-[48px] font-normal leading-[1.05] md:text-[72px]">
                What we publish first.
              </h2>
              <p className="sp-body mt-24 text-inkwell/85">
                The first StrongPath guides answer the questions that matter before a program,
                purchase, or promise: what is happening, what works, how to start, and how to help
                someone you love begin.
              </p>
            </div>
            <div className="grid border-t border-inkwell">
              {publishingTopics.map((topic, index) => (
                <article
                  key={topic.title}
                  className="grid gap-18 border-b border-inkwell py-24 md:grid-cols-[64px_1fr]"
                >
                  <p className="border-l-[6px] border-gold pl-12 font-utility text-caption leading-caption text-inkwell/60">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <div>
                    <h3 className="font-display text-[30px] font-normal leading-[1.12]">
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

      <section className="border-b border-navy/35 bg-paper">
        <div className="sp-container py-[76px]">
          <div className="grid gap-50 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="sp-kicker mb-18 text-inkwell/70">Product discovery</p>
              <h2 className="font-display text-[48px] font-normal leading-[1.05] md:text-[72px]">
                Commerce attached to trust.
              </h2>
              <p className="sp-body mt-24 text-inkwell/85">
                StrongPath will recommend tools only when they help readers understand, begin, or
                sustain evidence-based strength work. The editorial standard comes first.
              </p>
            </div>
            <div className="grid border-t border-inkwell md:grid-cols-3">
              {discoveryTools.map((item) => (
                <article
                  key={item.title}
                  className="flex min-h-[300px] flex-col justify-between border-b border-inkwell py-24 md:border-r md:px-18 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <div>
                    <p className="font-utility text-caption leading-caption text-gold">
                      {item.label}
                    </p>
                    <h3 className="mt-18 font-display text-[34px] font-normal leading-[1.04] text-inkwell">
                      {item.title}
                    </h3>
                    <p className="mt-18 font-body text-[18px] leading-[1.5] text-inkwell/82">
                      {item.copy}
                    </p>
                  </div>
                  {item.href === 'amazon' ? (
                    <AmazonLink
                      asin="1626344760"
                      className="mt-24 inline-flex justify-center border border-gold px-18 py-10 font-body text-[17px] font-medium leading-none text-navy transition-colors hover:bg-navy hover:text-paper"
                    >
                      View the book
                    </AmazonLink>
                  ) : (
                    <Link
                      href={item.href}
                      className="mt-24 inline-flex justify-center border border-gold px-18 py-10 font-body text-[17px] font-medium leading-none text-navy transition-colors hover:bg-navy hover:text-paper"
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

      <section className="border-b border-navy/35 bg-parchment">
        <div className="sp-container py-[72px]">
          <div className="grid gap-40 lg:grid-cols-[0.4fr_0.6fr]">
            <div>
              <p className="sp-kicker mb-18 text-inkwell/70">Now publishing</p>
              <h2 className="font-display text-[44px] font-normal leading-[1.08] md:text-[64px]">
                The first StrongPath essays are live.
              </h2>
              <p className="sp-body mt-24 text-inkwell/85">
                These starter articles establish the editorial spine of the publication: muscle
                loss, strength, evidence, and the practical meaning of healthy aging.
              </p>
              <div className="mt-30 flex flex-wrap gap-10">
                {topicalPathways.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="border border-gold/70 px-12 py-8 font-utility text-caption leading-none text-navy transition-colors hover:border-navy hover:bg-navy hover:text-paper"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid border-t border-inkwell lg:grid-cols-[1.12fr_0.88fr]">
              {leadArticle && (
                <article className="border-b border-inkwell py-28 lg:border-r lg:pr-30">
                  <div className="flex flex-wrap gap-x-12 gap-y-4 font-utility text-caption leading-caption text-inkwell/65">
                    {leadArticle.category && <p>{leadArticle.category}</p>}
                    {leadArticle.publishedAt && <p>{formatArticleDate(leadArticle.publishedAt)}</p>}
                  </div>
                  <Link href={leadArticle.href} className="group mt-18 block">
                    <h3 className="font-display text-[44px] font-normal leading-[1.02] text-inkwell group-hover:underline md:text-[58px]">
                      {leadArticle.title}
                    </h3>
                  </Link>
                  {leadArticle.excerpt && (
                    <p className="mt-20 font-body text-[23px] font-medium leading-[1.48] text-inkwell/85">
                      {leadArticle.excerpt}
                    </p>
                  )}
                </article>
              )}
              <div className="grid lg:pl-30">
                {secondaryArticles.map((article) => (
                  <article key={article.href} className="border-b border-inkwell py-24">
                    <div className="flex flex-wrap gap-x-12 gap-y-4 font-utility text-caption leading-caption text-inkwell/65">
                      {article.category && <p>{article.category}</p>}
                      {article.publishedAt && <p>{formatArticleDate(article.publishedAt)}</p>}
                    </div>
                    <Link href={article.href} className="group mt-12 block">
                      <h3 className="font-display text-[32px] font-normal leading-[1.08] text-inkwell group-hover:underline md:text-[38px]">
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

      <section className="bg-paper">
        <div className="sp-container py-[84px]">
          <div className="mx-auto max-w-[840px] border-y border-navy/35 py-40 text-center">
            <p className="sp-kicker mb-18 text-inkwell/70">Stay close</p>
            <h2 className="font-display text-[48px] font-normal leading-[1.06] md:text-[72px]">
              Receive the first guides.
            </h2>
            <p className="mx-auto mt-30 max-w-[680px] sp-body text-inkwell/85">
              Get the first articles as they publish: sarcopenia, resistance training, protein,
              recovery, and how families can help a parent begin without pressure.
            </p>
            <div className="mt-30">
              <EmailForm source="homepage_substance_translation" />
            </div>
            <p className="mx-auto mt-30 max-w-[620px] font-utility text-caption leading-caption text-inkwell/70">
              Educational content only. StrongPath does not diagnose, treat, cure, or replace care
              from your physician, physical therapist, or other qualified professional.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
