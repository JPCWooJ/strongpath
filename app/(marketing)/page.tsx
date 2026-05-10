import type { Metadata } from 'next'
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
        <div className="absolute inset-x-0 top-0 h-[44rem] bg-sunbeam-gradient opacity-80" />
        <div className="sp-container relative py-[72px] md:py-[108px]">
          <div className="grid gap-40 border-y border-inkwell py-18 md:grid-cols-[0.74fr_1.26fr] md:items-center">
            <p className="font-utility text-caption leading-caption text-inkwell/70">
              Evidence-based strength platform
            </p>
            <p className="font-utility text-caption leading-caption text-inkwell/70 md:text-right">
              For adults who refuse to accept muscle loss as inevitable, and for families helping
              someone they love.
            </p>
          </div>

          <div className="grid gap-60 pt-60 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
            <div>
              <p className="sp-kicker mb-18 text-inkwell/70">Strength after 55</p>
              <h1 className="max-w-[960px] font-display text-[56px] font-normal leading-[0.98] text-inkwell sm:text-[78px] lg:text-[104px]">
                Muscle loss is the problem. Strength is the path.
              </h1>
              <p className="mt-34 max-w-[780px] font-body text-[24px] font-medium leading-[1.48] text-inkwell/86">
                StrongPath is an evidence-based strength platform for adults who want to preserve
                capacity, independence, and good days. The work is built on the research foundation
                behind <em>Choosing the StrongPath: Reversing the Downward Spiral of Aging</em> and
                kept current through the research we publish now.
              </p>
              <div className="mt-34 flex flex-col gap-12 sm:flex-row">
                <Link
                  href="/waitlist"
                  className="inline-flex justify-center border border-verdigris bg-verdigris px-24 py-14 font-body text-[18px] font-medium leading-none text-parchment transition-colors hover:border-inkwell hover:bg-transparent hover:text-inkwell"
                >
                  Join Waitlist
                </Link>
                <Link
                  href="#learn-more"
                  className="inline-flex justify-center border border-inkwell px-24 py-14 font-body text-[18px] font-medium leading-none text-inkwell transition-colors hover:bg-inkwell hover:text-parchment"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <aside className="border border-inkwell bg-parchment p-18 lg:mt-20">
              <div className="border border-inkwell p-24 md:p-30">
                <div className="flex flex-wrap items-center gap-10">
                  <p className="font-utility text-caption leading-caption text-inkwell/65">
                    The book behind the work
                  </p>
                  <p className="border border-gold px-10 py-4 font-utility text-caption leading-caption text-gold">
                    Amazon bestseller
                  </p>
                </div>
                <div className="mt-30 flex min-h-[410px] flex-col justify-between border border-inkwell p-24">
                  <div>
                    <p className="font-display text-[50px] font-normal leading-[0.98] text-inkwell">
                      Choosing the StrongPath
                    </p>
                    <p className="mt-18 font-display text-[26px] font-normal leading-[1.16] text-inkwell">
                      Reversing the Downward Spiral of Aging
                    </p>
                  </div>
                  <div>
                    <p className="font-utility text-caption leading-caption text-inkwell/75">
                      by Fred Bartlit, Steven Droullard, and Marni Boppart, ScD (2018)
                    </p>
                    <p className="mt-12 font-body text-[17px] leading-body text-inkwell/85">
                      Amazon bestseller in Aging, Weight Training, Exercise, and Longevity.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-18 font-body text-[18px] leading-body text-inkwell/85">
                The book named the work. StrongPath extends it into a current website, a growing
                publishing system, and future tools that help people put strength into practice.
              </p>
              <div className="mt-24 flex flex-col gap-12 sm:flex-row">
                <AmazonLink
                  asin="1626344760"
                  className="inline-flex justify-center border border-inkwell px-18 py-10 font-body text-[17px] font-medium leading-none text-inkwell transition-colors hover:bg-inkwell hover:text-parchment"
                >
                  View the book
                </AmazonLink>
                <Link
                  href="/waitlist"
                  className="inline-flex justify-center border border-inkwell px-18 py-10 font-body text-[17px] font-medium leading-none text-inkwell transition-colors hover:bg-inkwell hover:text-parchment"
                >
                  Receive the guides
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="learn-more" className="scroll-mt-28 border-b border-inkwell">
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

      <section className="border-b border-inkwell">
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

      <section className="relative border-b border-inkwell">
        <div className="absolute inset-0 bg-sunbeam-gradient opacity-40" />
        <div className="sp-container relative py-[84px]">
          <div className="mx-auto max-w-[990px] text-center">
            <p className="sp-kicker mb-18 text-inkwell/70">What strength protects</p>
            <h2 className="font-display text-[50px] font-normal leading-[1.04] md:text-[78px]">
              Capacity is built in ordinary moments.
            </h2>
            <p className="mx-auto mt-30 max-w-[780px] font-body text-[24px] font-medium leading-[1.48] text-inkwell/85">
              Getting out of a chair. Carrying groceries. Traveling with confidence. Visiting
              family without planning around every step. Strength protects independence because it
              protects the actions independence depends on.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-inkwell">
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

      <section className="border-b border-inkwell">
        <div className="sp-container grid gap-0 lg:grid-cols-[1fr_1fr]">
          <div className="border-b border-inkwell py-60 lg:border-b-0 lg:border-r lg:pr-40">
            <p className="sp-kicker mb-18 text-inkwell/70">The evidence standard</p>
            <h2 className="font-display text-[42px] font-normal leading-[1.08] md:text-[62px]">
              The book is the foundation. Current research does the substantiating.
            </h2>
          </div>
          <div className="py-60 lg:pl-40">
            <p className="font-body text-[26px] font-medium leading-[1.42] text-inkwell">
              StrongPath publishes for readers who want confidence without salesmanship.
            </p>
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

      <section className="border-b border-inkwell">
        <div className="sp-container py-60">
          <div className="grid gap-40 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="sp-kicker mb-18 text-inkwell/70">Start here</p>
              <h2 className="font-display text-[44px] font-normal leading-[1.08] md:text-[64px]">
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
                  className="grid gap-18 border-b border-inkwell py-22 md:grid-cols-[52px_1fr]"
                >
                  <p className="font-utility text-caption leading-caption text-inkwell/60">
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

      <section className="border-b border-inkwell">
        <div className="sp-container py-[72px]">
          <div className="grid gap-40 lg:grid-cols-[0.42fr_0.58fr]">
            <div>
              <p className="sp-kicker mb-18 text-inkwell/70">Now publishing</p>
              <h2 className="font-display text-[44px] font-normal leading-[1.08] md:text-[64px]">
                The first StrongPath essays are live.
              </h2>
              <p className="sp-body mt-24 text-inkwell/85">
                These starter articles establish the editorial spine of the publication: muscle
                loss, strength, evidence, and the practical meaning of healthy aging.
              </p>
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

      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-[24rem] bg-sunbeam-gradient opacity-45" />
        <div className="sp-container relative py-[84px]">
          <div className="mx-auto max-w-[840px] border-y border-inkwell py-40 text-center">
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
