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
    'Book-led help for adults and families who want to stay strong for travel, stairs, recovery, and the people they love.',
  openGraph: {
    title: 'StrongPath - Evidence-based strength for adults 55+',
    description:
      'Keep the strength for stairs, travel, caregiving, recovery, and the life you want after 50.',
    type: 'website',
  },
}

const bookCoverUrl = '/images/choosing-the-strongpath-cover.jpg'

const homepageExcerptOverrides: Record<string, string> = {
  'what-is-sarcopenia':
    'A plain-language guide to age-related muscle loss, why it is often missed, and what helps protect strength and function.',
  'why-muscle-loss-changes-everything-after-50':
    'What changes when muscle loss starts showing up on stairs, with groceries, in chairs, on trips, and in recovery.',
  'the-strength-crisis-nobody-talks-about':
    'Why walking helps, where it falls short, and what training adds when life asks more of your body.',
  'what-actually-predicts-healthy-aging':
    'The simple tests that help explain balance, confidence, and the ability to keep doing what you love.',
}

const articleUseCases: Record<string, string> = {
  'what-is-sarcopenia':
    'For the moment when stairs, chairs, luggage, or recovery start to feel different.',
  'why-muscle-loss-changes-everything-after-50':
    'For the moment when small tasks start taking more effort than they used to.',
  'the-strength-crisis-nobody-talks-about':
    'For anyone walking more but still feeling weaker.',
  'what-actually-predicts-healthy-aging':
    'For readers who want simple ways to understand what is changing.',
}

const featuredArticles = featuredFlagshipArticles.map((article) => ({
  title: article.title,
  href: `/blog/${article.slug.current}`,
  excerpt: homepageExcerptOverrides[article.slug.current] ?? article.excerpt,
  useCase: articleUseCases[article.slug.current],
  category: article.category,
  publishedAt: article.publishedAt,
  readingMinutes: article.estimatedReadingMinutes,
}))

const [featuredGuide, ...supportingGuides] = featuredArticles

const startingPoints = [
  {
    eyebrow: 'For your life',
    title: "I notice I'm getting weaker",
    pain: 'Stairs feel longer. Groceries feel heavier. Getting up from low chairs takes more thought than it used to.',
    promise: 'Learn what may be happening before trips, stairs, errands, and good days get smaller.',
    href: '/blog/what-is-sarcopenia',
    action: 'Start with sarcopenia',
  },
  {
    eyebrow: 'For a parent',
    title: 'I want to help a parent',
    pain: 'A parent is walking less, recovering more slowly, or saying no to things they used to enjoy.',
    promise: 'Find words and next steps that protect dignity without pretending nothing is changing.',
    href: '/waitlist',
    action: 'Get caregiver guidance',
  },
  {
    eyebrow: 'For careful decisions',
    title: 'What Do the Experts Say?',
    pain: 'Everyone says to walk, eat protein, and lift weights. The hard part is knowing what matters first.',
    promise: 'See what is worth doing before you spend time, money, or hope on the wrong thing.',
    href: '/blog/the-strength-crisis-nobody-talks-about',
    action: 'Read the evidence guide',
  },
]

const nextSteps = [
  {
    title: 'Start with the book',
    copy: 'Use the book to understand what muscle loss can take away, and how training helps protect the days you still want.',
    action: 'Buy on Amazon',
    href: 'amazon',
  },
  {
    title: 'Read the sarcopenia guide',
    copy: 'See why the first signs matter before stairs, balance, recovery, or confidence change more.',
    action: 'Read the guide',
    href: '/blog/what-is-sarcopenia',
  },
  {
    title: 'Get practical notes',
    copy: 'Get notes on muscle loss, protein, recovery, and helping a parent begin without pressure.',
    action: 'Get practical notes',
    href: '/waitlist',
  },
  {
    title: 'Choose with care',
    copy: 'Know what helps, what can wait, and what is mostly noise before spending money.',
    action: 'Get the notes',
    href: '/waitlist',
  },
]

const trustSignals = [
  {
    title: 'Book first',
    copy: 'The book gives readers a serious place to start before buying anything else.',
  },
  {
    title: 'Current research',
    copy: 'Health claims should be easy to check, not taken on faith.',
  },
  {
    title: 'No miracle claims',
    copy: 'No age-reversal promises. No fear. No claim stronger than the evidence supports.',
  },
  {
    title: 'No supplement hype',
    copy: 'No powders, pills, or promises get treated as shortcuts to a stronger life.',
  },
]

const productPath = [
  {
    stage: 'Available now',
    title: 'Book',
    copy: 'A practical starting point for keeping strength, confidence, and independence after 50.',
    href: 'amazon',
    action: 'Buy on Amazon',
  },
  {
    stage: 'Available now',
    title: 'Guides',
    copy: 'Plain guidance for stairs, balance, travel, recovery, and helping a parent start.',
    href: '/blog',
    action: 'Browse guides',
  },
  {
    stage: 'For a plan',
    title: 'Strength plans',
    copy: 'Avoid vague routines and choose training that fits your days, your body, and your family.',
    href: '/waitlist',
    action: 'Get practical notes',
  },
  {
    stage: 'For equipment',
    title: 'Tools',
    copy: 'Learn which training supports are worth attention, which can wait, and which mostly get in the way.',
    href: '/waitlist',
    action: 'Get tool guidance',
  },
  {
    stage: 'For caution',
    title: 'Supplements',
    copy: 'Read evidence-led notes before treating powders, pills, or promises as shortcuts.',
    href: '/waitlist',
    action: 'Get careful guidance',
  },
]

const topics = [
  ['Sarcopenia', '/blog/tags/sarcopenia'],
  ['Strength After 50', '/blog/tags/strength-after-50'],
  ['Resistance Training', '/blog/tags/resistance-training'],
  ['Healthy Aging', '/blog/tags/healthy-aging'],
  ['Caregiving', '/waitlist'],
]

function ArticleMeta({
  publishedAt,
  readingMinutes,
}: {
  publishedAt?: string
  readingMinutes?: number
}) {
  const date = formatArticleDate(publishedAt)

  return (
    <div className="flex flex-wrap gap-x-12 gap-y-4 font-utility text-[13px] leading-[1.35] text-parchment/64">
      {date && <p>{date}</p>}
      {readingMinutes && <p>{readingMinutes} min read</p>}
    </div>
  )
}

function CommerceLink({
  href,
  action,
  className,
}: {
  href: string
  action: string
  className: string
}) {
  if (href === 'amazon') {
    return (
      <AmazonLink asin="1626344760" className={className}>
        {action}
      </AmazonLink>
    )
  }

  return (
    <Link href={href} className={className}>
      {action}
    </Link>
  )
}

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <section className="relative bg-parchment">
        <div className="absolute inset-x-0 top-0 h-[360px] bg-sunbeam-gradient opacity-40" />
        <div className="relative mx-auto grid w-[min(100%-28px,1180px)] gap-18 py-22 md:w-[min(100%-36px,1180px)] md:grid-cols-[minmax(0,1fr)_340px] md:items-center md:gap-26 md:py-42 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-44">
          <div className="max-w-[800px]">
            <p className="sp-kicker mb-10 text-inkwell/60 md:mb-14">
              Stay strong for the life you want after 50
            </p>
            <h1 className="font-display text-[43px] font-normal leading-[0.98] text-inkwell sm:text-[60px] md:text-[70px] lg:text-[86px]">
              Take the StrongPath not the frail trail.
            </h1>
            <p className="mt-14 max-w-[680px] font-body text-[18px] leading-[1.43] text-inkwell/82 md:mt-20 md:text-[23px] md:leading-[1.48]">
              Muscle loss as we age can shrink your world, one staircase, suitcase, or slow
              recovery at a time. StrongPath helps you and your loved ones stay strong and live
              the life you want.
            </p>

            <div className="mt-16 hidden max-w-[760px] gap-8 border-y border-inkwell/22 py-12 sm:grid sm:grid-cols-3 md:mt-24 md:gap-10 md:py-16">
              <p className="font-body text-[15px] leading-[1.38] text-inkwell/76 md:text-[16px] md:leading-[1.42]">
                For adults noticing daily life getting harder.
              </p>
              <p className="font-body text-[15px] leading-[1.38] text-inkwell/76 md:text-[16px] md:leading-[1.42]">
                For families helping a parent.
              </p>
              <p className="font-body text-[15px] leading-[1.38] text-inkwell/76 md:text-[16px] md:leading-[1.42]">
                For careful readers tired of vague advice.
              </p>
            </div>

            <div className="mt-18 flex flex-col gap-10 sm:flex-row sm:items-center md:mt-26 md:gap-12">
              <Link
                href="#start-here"
                className="inline-flex min-h-[44px] items-center justify-center bg-inkwell px-20 py-12 font-body text-[16px] font-medium leading-none text-parchment transition-colors hover:bg-inkwell/86 md:px-24 md:py-13 md:text-[17px]"
              >
                Find your starting point
              </Link>
              <Link
                href="#featured-guide"
                className="inline-flex min-h-[44px] items-center justify-center border border-inkwell/46 px-20 py-12 font-body text-[16px] font-medium leading-none text-inkwell transition-colors hover:bg-inkwell hover:text-parchment md:px-24 md:py-13 md:text-[17px]"
              >
                Read the muscle-loss guide
              </Link>
            </div>
          </div>

          <aside className="bg-inkwell p-14 text-parchment shadow-[0_22px_70px_rgba(48,47,44,0.22)] md:p-18">
            <p className="text-center font-display text-[28px] font-normal leading-none text-parchment md:text-[32px]">
              Amazon Bestseller
            </p>
            <p className="mt-7 text-center font-utility text-[11px] leading-[1.35] text-parchment/62 md:mt-8 md:text-[12px]">
              Aging • Weight Training • Exercise • Longevity
            </p>
            <div className="mt-12 grid grid-cols-[96px_1fr] gap-12 sm:grid-cols-[150px_1fr] md:mt-14 md:grid-cols-1 md:gap-16">
              <div className="bg-parchment p-4">
                <Image
                  src={bookCoverUrl}
                  alt="Choosing the StrongPath book cover"
                  width={333}
                  height={500}
                  sizes="(min-width: 768px) 250px, (min-width: 640px) 150px, 96px"
                  className="h-auto w-full md:mx-auto md:max-w-[250px]"
                  priority
                />
              </div>
              <div>
                <h2 className="font-display text-[25px] font-normal leading-[1.03] text-parchment md:mt-16 md:text-[30px] md:leading-[1.02]">
                  When ordinary tasks start to change.
                </h2>
                <p className="mt-8 font-body text-[15px] leading-[1.42] text-parchment/74 md:mt-10 md:text-[16px] md:leading-[1.5]">
                  <cite>Choosing the StrongPath</cite> shows what changes with age, why muscle
                  matters, and how to start rebuilding confidence without guessing.
                </p>
                <AmazonLink
                  asin="1626344760"
                  className="mt-12 inline-flex min-h-[42px] items-center bg-parchment px-16 py-10 font-body text-[15px] font-medium leading-none text-inkwell transition-colors hover:bg-parchment/86 md:mt-16 md:px-18"
                >
                  Buy on Amazon
                </AmazonLink>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="start-here" className="scroll-mt-28 bg-[#f7f1e4]">
        <div className="sp-container py-42 md:py-72">
          <div className="grid gap-14 md:grid-cols-[0.58fr_0.42fr] md:items-end md:gap-18">
            <div>
              <p className="sp-kicker mb-12 text-inkwell/56">Find your starting point</p>
              <h2 className="font-display text-[36px] font-normal leading-[1.04] text-inkwell md:text-[64px] md:leading-[1.02]">
                Start today: Your First Step on the StrongPath
              </h2>
            </div>
            <p className="font-body text-[17px] leading-[1.46] text-inkwell/70 md:text-[18px] md:leading-[1.5]">
              Start with what you are seeing in your own life, in a parent&apos;s routine, or in the
              advice you are trying to sort out.
            </p>
          </div>

          <div className="mt-20 grid gap-12 md:mt-28 md:gap-14 lg:grid-cols-3">
            {startingPoints.map((item) => (
              <article key={item.title} className="bg-parchment p-18 shadow-[0_10px_36px_rgba(48,47,44,0.08)] md:p-22">
                <p className="font-utility text-[13px] leading-none text-verdigris">{item.eyebrow}</p>
                <h3 className="mt-14 font-display text-[30px] font-normal leading-[1.04] text-inkwell md:mt-18 md:text-[36px] md:leading-[1.02]">
                  {item.title}
                </h3>
                <p className="mt-10 font-body text-[16px] leading-[1.44] text-inkwell/80 md:mt-14 md:text-[18px] md:leading-[1.48]">
                  {item.pain}
                </p>
                <p className="mt-12 border-t border-inkwell/18 pt-12 font-body text-[16px] leading-[1.44] text-inkwell/68 md:mt-14 md:pt-14 md:text-[17px] md:leading-[1.48]">
                  {item.promise}
                </p>
                <Link
                  href={item.href}
                  className="mt-16 inline-flex min-h-[44px] items-center border-b border-inkwell/42 pb-3 font-utility text-[13px] font-medium leading-none text-inkwell/72 transition-colors hover:border-inkwell hover:text-inkwell md:mt-22"
                >
                  {item.action}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-guide" className="scroll-mt-28 bg-inkwell text-parchment">
        <div className="sp-container pb-34 pt-22 md:pb-40 md:pt-18">
          {featuredGuide && (
            <article className="grid gap-24 lg:grid-cols-[0.52fr_1.48fr] lg:items-start lg:gap-40">
              <div>
                <p className="sp-kicker mb-10 text-parchment/58 md:mb-18">
                  When stairs, trips, or recovery start to change
                </p>
                <ArticleMeta
                  publishedAt={featuredGuide.publishedAt}
                  readingMinutes={featuredGuide.readingMinutes}
                />
                {featuredGuide.useCase && (
                  <p className="mt-16 border-l border-parchment/34 pl-12 font-body text-[17px] leading-[1.46] text-parchment/78 md:mt-26 md:pl-16 md:text-[20px] md:leading-[1.52]">
                    {featuredGuide.useCase}
                  </p>
                )}
              </div>

              <div>
                <Link href={featuredGuide.href} className="group block">
                  <h2 className="font-display text-[40px] font-normal leading-[1.02] text-parchment group-hover:underline sm:text-[48px] md:text-[82px] md:leading-[0.98]">
                    {featuredGuide.title}
                  </h2>
                </Link>
                {featuredGuide.excerpt && (
                  <p className="mt-16 max-w-[780px] font-body text-[18px] leading-[1.46] text-parchment/78 md:mt-24 md:text-[26px] md:leading-[1.5]">
                    {featuredGuide.excerpt}
                  </p>
                )}
                <Link
                  href={featuredGuide.href}
                  className="mt-22 inline-flex min-h-[44px] items-center bg-parchment px-20 py-12 font-body text-[16px] font-medium leading-none text-inkwell transition-colors hover:bg-parchment/86 md:mt-30 md:px-22"
                >
                  Read the guide
                </Link>
              </div>
            </article>
          )}

          {supportingGuides.length > 0 && (
            <div className="mt-30 grid gap-16 border-t border-parchment/22 pt-18 md:mt-46 md:grid-cols-2 md:gap-18 md:pt-24">
              {supportingGuides.map((article) => (
                <article key={article.href} className="border-b border-parchment/18 pb-18 md:pb-22">
                  <ArticleMeta
                    publishedAt={article.publishedAt}
                    readingMinutes={article.readingMinutes}
                  />
                  <Link href={article.href} className="group mt-10 block">
                    <h3 className="font-display text-[28px] font-normal leading-[1.06] text-parchment group-hover:underline md:text-[34px]">
                      {article.title}
                    </h3>
                  </Link>
                  {article.useCase && (
                    <p className="mt-10 font-body text-[16px] leading-[1.44] text-parchment/66 md:mt-12 md:text-[17px] md:leading-[1.48]">
                      {article.useCase}
                    </p>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-parchment">
        <div className="sp-container py-44 md:py-76">
          <div className="grid gap-16 md:grid-cols-[0.52fr_0.48fr] md:items-end md:gap-22">
            <div>
              <p className="sp-kicker mb-12 text-inkwell/56">Recommended next steps</p>
              <h2 className="font-display text-[36px] font-normal leading-[1.04] text-inkwell md:text-[64px] md:leading-[1.03]">
                What to do next.
              </h2>
            </div>
            <p className="font-body text-[17px] leading-[1.46] text-inkwell/70 md:text-[18px] md:leading-[1.5]">
              Read the guide, use the book for depth, and make the next choice feel less like a
              guess.
            </p>
          </div>

          <div className="mt-22 grid gap-12 md:mt-30 md:grid-cols-2 md:gap-14 lg:grid-cols-4">
            {nextSteps.map((item) => (
              <article key={item.title} className="bg-[#f7f1e4] p-16 md:p-20">
                <h3 className="font-display text-[28px] font-normal leading-[1.04] text-inkwell md:text-[32px]">
                  {item.title}
                </h3>
                <p className="mt-10 font-body text-[16px] leading-[1.44] text-inkwell/74 md:mt-14 md:text-[17px] md:leading-[1.5]">
                  {item.copy}
                </p>
                <CommerceLink
                  href={item.href}
                  action={item.action}
                  className="mt-14 inline-flex min-h-[44px] items-center border-b border-inkwell/40 pb-3 font-utility text-[13px] font-medium leading-none text-inkwell/70 transition-colors hover:border-inkwell hover:text-inkwell md:mt-20"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f0df]">
        <div className="sp-container py-44 md:py-76">
          <div className="grid gap-22 md:gap-30 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
            <div>
              <p className="sp-kicker mb-12 text-inkwell/56">Why trust it</p>
              <h2 className="font-display text-[36px] font-normal leading-[1.04] text-inkwell md:text-[62px] md:leading-[1.03]">
                Trust starts with restraint.
              </h2>
              <p className="mt-14 font-body text-[17px] leading-[1.46] text-inkwell/74 md:mt-18 md:text-[19px] md:leading-[1.5]">
                You should not have to choose between doing nothing and believing every promise.
                StrongPath keeps the advice careful so the next step feels safer.
              </p>
            </div>
            <div className="grid gap-12 sm:grid-cols-2">
              {trustSignals.map((item) => (
                <div key={item.title} className="bg-parchment p-16 md:p-18">
                  <h3 className="font-display text-[27px] font-normal leading-[1.05] text-inkwell md:text-[30px]">
                    {item.title}
                  </h3>
                  <p className="mt-8 font-body text-[16px] leading-[1.44] text-inkwell/72 md:mt-9 md:text-[17px] md:leading-[1.48]">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="sp-container py-44 md:py-76">
          <div className="flex flex-col justify-between gap-16 md:flex-row md:items-end md:gap-18">
            <div>
              <p className="sp-kicker mb-12 text-inkwell/56">Keep going</p>
              <h2 className="max-w-[760px] font-display text-[36px] font-normal leading-[1.04] text-inkwell md:text-[64px] md:leading-[1.03]">
                Find the guide, book, or next step that fits.
              </h2>
            </div>
            <div className="flex flex-wrap gap-8">
              {topics.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="inline-flex min-h-[38px] items-center border border-inkwell/24 px-12 py-8 font-utility text-[13px] leading-none text-inkwell/70 transition-colors hover:border-inkwell hover:text-inkwell"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-22 grid gap-12 md:mt-30 md:grid-cols-2 lg:grid-cols-5">
            {productPath.map((item) => (
              <article key={item.title} className="bg-[#f7f1e4] p-16 md:p-18">
                <p className="font-utility text-[12px] leading-none text-verdigris">{item.stage}</p>
                <h3 className="mt-12 font-display text-[27px] font-normal leading-[1.04] text-inkwell md:mt-16 md:text-[30px]">
                  {item.title}
                </h3>
                <p className="mt-9 font-body text-[16px] leading-[1.44] text-inkwell/72 md:mt-12 md:leading-[1.48]">
                  {item.copy}
                </p>
                <CommerceLink
                  href={item.href}
                  action={item.action}
                  className="mt-14 inline-flex min-h-[44px] items-center border-b border-inkwell/40 pb-3 font-utility text-[13px] font-medium leading-none text-inkwell/70 transition-colors hover:border-inkwell hover:text-inkwell md:mt-18"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-inkwell text-parchment">
        <div className="sp-container py-44 md:py-76">
          <div className="mx-auto max-w-[880px] text-center">
            <p className="sp-kicker mb-14 text-parchment/58">Get practical strength guidance</p>
            <h2 className="font-display text-[38px] font-normal leading-[1.04] text-parchment md:text-[68px] md:leading-[1.02]">
              Know what to read, buy, and ignore.
            </h2>
            <p className="mx-auto mt-16 max-w-[680px] font-body text-[18px] leading-[1.46] text-parchment/74 md:mt-22 md:text-[20px] md:leading-[1.5]">
              Get notes on muscle loss, protein, recovery, equipment, supplements, and helping a
              parent start without pressure.
            </p>
            <div className="mx-auto mt-22 max-w-[560px] md:mt-30">
              <EmailForm source="homepage_commercial_rebuild" />
            </div>
            <p className="mx-auto mt-18 max-w-[620px] font-utility text-[13px] leading-[1.45] text-parchment/52 md:mt-22">
              Educational content only. StrongPath does not diagnose, treat, cure, or replace care
              from your physician, physical therapist, or other qualified professional.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
