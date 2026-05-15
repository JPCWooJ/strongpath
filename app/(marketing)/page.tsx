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
    'Book-led strength guidance for adults and families facing muscle loss after 50.',
  openGraph: {
    title: 'StrongPath - Evidence-based strength for adults 55+',
    description:
      'Start with muscle loss, strength, caregiving, and practical action after 50.',
    type: 'website',
  },
}

const bookCoverUrl = '/images/choosing-the-strongpath-cover.jpg'

const homepageExcerptOverrides: Record<string, string> = {
  'why-muscle-loss-changes-everything-after-50':
    'What changes when muscle loss starts showing up on stairs, with groceries, in chairs, balance, recovery, and confidence.',
  'the-strength-crisis-nobody-talks-about':
    'Why walking helps, where it falls short, and what strength training adds.',
  'what-actually-predicts-healthy-aging':
    'Grip strength, gait speed, and the simple tests that reveal more than vague aging advice.',
}

const articleUseCases: Record<string, string> = {
  'why-muscle-loss-changes-everything-after-50':
    'Use this if ordinary tasks have started to feel harder, slower, or less automatic.',
  'the-strength-crisis-nobody-talks-about':
    'Use this if you have been told to move more, but still do not know what to do about strength.',
  'what-actually-predicts-healthy-aging':
    'Use this if you want to know what doctors and researchers actually measure.',
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
    eyebrow: 'For your own strength',
    title: "I notice I'm getting weaker",
    pain: 'Stairs feel longer. Groceries feel heavier. Getting up from low chairs takes more thought than it used to.',
    promise: 'Learn what may be happening and what to do before daily tasks get harder.',
    href: '/blog/why-muscle-loss-changes-everything-after-50',
    action: 'Start with muscle loss',
  },
  {
    eyebrow: 'For a parent',
    title: 'I want to help a parent',
    pain: 'A parent is moving less, recovering more slowly, or avoiding things they used to do.',
    promise: 'Find words and next steps that respect your parent without ignoring what is changing.',
    href: '/waitlist',
    action: 'Get caregiver guidance',
  },
  {
    eyebrow: 'For careful decisions',
    title: 'What Do the Experts Say?',
    pain: 'Everyone says to walk, eat protein, and lift weights. The hard part is knowing what matters first.',
    promise: 'See what the evidence supports before choosing exercises, equipment, supplements, or a routine.',
    href: '/blog/the-strength-crisis-nobody-talks-about',
    action: 'Read the evidence guide',
  },
]

const nextSteps = [
  {
    title: 'Start with the book',
    copy: 'Use the book to understand what muscle loss can take away, and how training helps protect independence.',
    action: 'Buy on Amazon',
    href: 'amazon',
  },
  {
    title: 'Read the muscle-loss guide',
    copy: 'See why the first signs matter, before stairs, balance, recovery, or confidence change more.',
    action: 'Read the guide',
    href: '/blog/why-muscle-loss-changes-everything-after-50',
  },
  {
    title: 'Get practical notes',
    copy: 'Get notes on strength, muscle loss, protein, recovery, and helping a parent begin.',
    action: 'Get practical notes',
    href: '/waitlist',
  },
  {
    title: 'Choose with care',
    copy: 'Know what is useful, what can wait, and what is mostly noise before spending money.',
    action: 'Get the notes',
    href: '/waitlist',
  },
]

const trustSignals = [
  {
    title: 'Book first',
    copy: 'The book gives readers a serious place to start before any recommendation.',
  },
  {
    title: 'Current research',
    copy: 'Health claims should point to current research and named sources.',
  },
  {
    title: 'No miracle claims',
    copy: 'No age-reversal promises. No fear. No claim stronger than the evidence supports.',
  },
  {
    title: 'No supplement hype',
    copy: 'No powders, pills, or promises get treated as shortcuts around strength work.',
  },
]

const productPath = [
  {
    stage: 'Available now',
    title: 'Book',
    copy: 'A practical foundation for understanding muscle loss, training, and independence after 50.',
    href: 'amazon',
    action: 'Buy on Amazon',
  },
  {
    stage: 'Available now',
    title: 'Guides',
    copy: 'Plain guidance on muscle loss, strength, healthy aging, and practical decisions.',
    href: '/blog',
    action: 'Browse guides',
  },
  {
    stage: 'For a plan',
    title: 'Strength plans',
    copy: 'Ask better questions, avoid vague routines, and choose training that fits real life.',
    href: '/waitlist',
    action: 'Get practical notes',
  },
  {
    stage: 'For equipment',
    title: 'Tools',
    copy: 'Learn which training supports are worth attention, which can wait, and which are mostly distraction.',
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
  category,
  publishedAt,
  readingMinutes,
}: {
  category?: string
  publishedAt?: string
  readingMinutes?: number
}) {
  const date = formatArticleDate(publishedAt)

  return (
    <div className="flex flex-wrap gap-x-12 gap-y-4 font-utility text-[13px] leading-[1.35] text-parchment/64">
      {category && <p>{category}</p>}
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
        <div className="relative mx-auto grid w-[min(100%-36px,1180px)] gap-26 py-30 md:grid-cols-[minmax(0,1fr)_340px] md:items-center md:py-42 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-44">
          <div className="max-w-[800px]">
            <p className="sp-kicker mb-14 text-inkwell/60">
              Evidence-based strength after 50
            </p>
            <h1 className="font-display text-[50px] font-normal leading-[0.96] text-inkwell sm:text-[70px] lg:text-[86px]">
              Take the StrongPath not the frail trail.
            </h1>
            <p className="mt-20 max-w-[680px] font-body text-[20px] leading-[1.48] text-inkwell/82 md:text-[23px]">
              Muscle loss as we age can shrink your world, one staircase, suitcase, or slow
              recovery at a time. StrongPath helps you and your family stay strong enough to keep
              the life you want.
            </p>

            <div className="mt-24 grid max-w-[760px] gap-10 border-y border-inkwell/22 py-16 sm:grid-cols-3">
              <p className="font-body text-[16px] leading-[1.42] text-inkwell/76">
                For adults noticing strength loss.
              </p>
              <p className="font-body text-[16px] leading-[1.42] text-inkwell/76">
                For families helping a parent.
              </p>
              <p className="font-body text-[16px] leading-[1.42] text-inkwell/76">
                For careful readers who want evidence first.
              </p>
            </div>

            <div className="mt-26 flex flex-col gap-12 sm:flex-row sm:items-center">
              <Link
                href="#start-here"
                className="inline-flex justify-center bg-inkwell px-24 py-13 font-body text-[17px] font-medium leading-none text-parchment transition-colors hover:bg-inkwell/86"
              >
                Find your starting point
              </Link>
              <Link
                href="#featured-guide"
                className="inline-flex justify-center border border-inkwell/46 px-24 py-13 font-body text-[17px] font-medium leading-none text-inkwell transition-colors hover:bg-inkwell hover:text-parchment"
              >
                Read the muscle-loss guide
              </Link>
            </div>
          </div>

          <aside className="bg-inkwell p-18 text-parchment shadow-[0_22px_70px_rgba(48,47,44,0.22)]">
            <p className="text-center font-display text-[32px] font-normal leading-none text-parchment">
              Amazon Bestseller
            </p>
            <p className="mt-8 text-center font-utility text-[12px] leading-[1.35] text-parchment/62">
              Aging • Weight Training • Exercise • Longevity
            </p>
            <div className="mt-14 grid grid-cols-[116px_1fr] gap-16 sm:grid-cols-[150px_1fr] md:grid-cols-1">
              <div className="bg-parchment p-4">
                <Image
                  src={bookCoverUrl}
                  alt="Choosing the StrongPath book cover"
                  width={333}
                  height={500}
                  sizes="(min-width: 768px) 250px, 150px"
                  className="h-auto w-full md:mx-auto md:max-w-[250px]"
                  priority
                />
              </div>
              <div>
                <h2 className="font-display text-[30px] font-normal leading-[1.02] text-parchment md:mt-16">
                  When ordinary tasks start to change.
                </h2>
                <p className="mt-10 font-body text-[16px] leading-[1.5] text-parchment/74">
                  <cite>Choosing the StrongPath</cite> shows what changes with age, why muscle
                  matters, and how to begin training without guessing.
                </p>
                <AmazonLink
                  asin="1626344760"
                  className="mt-16 inline-flex bg-parchment px-18 py-10 font-body text-[15px] font-medium leading-none text-inkwell transition-colors hover:bg-parchment/86"
                >
                  Buy on Amazon
                </AmazonLink>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="start-here" className="scroll-mt-28 bg-[#f7f1e4]">
        <div className="sp-container py-54 md:py-72">
          <div className="grid gap-18 md:grid-cols-[0.58fr_0.42fr] md:items-end">
            <div>
              <p className="sp-kicker mb-12 text-inkwell/56">Find your starting point</p>
              <h2 className="font-display text-[42px] font-normal leading-[1.02] text-inkwell md:text-[64px]">
                Start today: Your First Step on the StrongPath
              </h2>
            </div>
            <p className="font-body text-[18px] leading-[1.5] text-inkwell/70">
              Start with your own strength, a parent&apos;s changing routine, or the advice you are
              trying to make sense of.
            </p>
          </div>

          <div className="mt-28 grid gap-14 lg:grid-cols-3">
            {startingPoints.map((item) => (
              <article key={item.title} className="bg-parchment p-22 shadow-[0_10px_36px_rgba(48,47,44,0.08)]">
                <p className="font-utility text-[13px] leading-none text-verdigris">{item.eyebrow}</p>
                <h3 className="mt-18 font-display text-[36px] font-normal leading-[1.02] text-inkwell">
                  {item.title}
                </h3>
                <p className="mt-14 font-body text-[18px] leading-[1.48] text-inkwell/80">
                  {item.pain}
                </p>
                <p className="mt-14 border-t border-inkwell/18 pt-14 font-body text-[17px] leading-[1.48] text-inkwell/68">
                  {item.promise}
                </p>
                <Link
                  href={item.href}
                  className="mt-22 inline-flex border-b border-inkwell/42 pb-3 font-utility text-[13px] font-medium leading-none text-inkwell/72 transition-colors hover:border-inkwell hover:text-inkwell"
                >
                  {item.action}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-guide" className="scroll-mt-28 bg-inkwell text-parchment">
        <div className="sp-container py-64 md:py-88">
          {featuredGuide && (
            <article className="grid gap-40 lg:grid-cols-[0.52fr_1.48fr] lg:items-start">
              <div>
                <p className="sp-kicker mb-18 text-parchment/58">
                  Start here if strength is changing
                </p>
                <ArticleMeta
                  category={featuredGuide.category}
                  publishedAt={featuredGuide.publishedAt}
                  readingMinutes={featuredGuide.readingMinutes}
                />
                {featuredGuide.useCase && (
                  <p className="mt-26 border-l border-parchment/34 pl-16 font-body text-[20px] leading-[1.52] text-parchment/78">
                    {featuredGuide.useCase}
                  </p>
                )}
              </div>

              <div>
                <Link href={featuredGuide.href} className="group block">
                  <h2 className="font-display text-[52px] font-normal leading-[0.98] text-parchment group-hover:underline md:text-[82px]">
                    {featuredGuide.title}
                  </h2>
                </Link>
                {featuredGuide.excerpt && (
                  <p className="mt-24 max-w-[780px] font-body text-[22px] leading-[1.5] text-parchment/78 md:text-[26px]">
                    {featuredGuide.excerpt}
                  </p>
                )}
                <Link
                  href={featuredGuide.href}
                  className="mt-30 inline-flex bg-parchment px-22 py-12 font-body text-[16px] font-medium leading-none text-inkwell transition-colors hover:bg-parchment/86"
                >
                  Read the guide
                </Link>
              </div>
            </article>
          )}

          {supportingGuides.length > 0 && (
            <div className="mt-46 grid gap-18 border-t border-parchment/22 pt-24 md:grid-cols-2">
              {supportingGuides.map((article) => (
                <article key={article.href} className="border-b border-parchment/18 pb-22">
                  <ArticleMeta
                    category={article.category}
                    publishedAt={article.publishedAt}
                    readingMinutes={article.readingMinutes}
                  />
                  <Link href={article.href} className="group mt-10 block">
                    <h3 className="font-display text-[34px] font-normal leading-[1.06] text-parchment group-hover:underline">
                      {article.title}
                    </h3>
                  </Link>
                  {article.useCase && (
                    <p className="mt-12 font-body text-[17px] leading-[1.48] text-parchment/66">
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
        <div className="sp-container py-58 md:py-76">
          <div className="grid gap-22 md:grid-cols-[0.52fr_0.48fr] md:items-end">
            <div>
              <p className="sp-kicker mb-12 text-inkwell/56">Recommended next steps</p>
              <h2 className="font-display text-[42px] font-normal leading-[1.03] text-inkwell md:text-[64px]">
                What to do next.
              </h2>
            </div>
            <p className="font-body text-[18px] leading-[1.5] text-inkwell/70">
              Read the guide, use the book for depth, and make the next choice less vague.
            </p>
          </div>

          <div className="mt-30 grid gap-14 md:grid-cols-2 lg:grid-cols-4">
            {nextSteps.map((item) => (
              <article key={item.title} className="bg-[#f7f1e4] p-20">
                <h3 className="font-display text-[32px] font-normal leading-[1.04] text-inkwell">
                  {item.title}
                </h3>
                <p className="mt-14 font-body text-[17px] leading-[1.5] text-inkwell/74">
                  {item.copy}
                </p>
                <CommerceLink
                  href={item.href}
                  action={item.action}
                  className="mt-20 inline-flex border-b border-inkwell/40 pb-3 font-utility text-[13px] font-medium leading-none text-inkwell/70 transition-colors hover:border-inkwell hover:text-inkwell"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f0df]">
        <div className="sp-container py-58 md:py-76">
          <div className="grid gap-30 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
            <div>
              <p className="sp-kicker mb-12 text-inkwell/56">Why trust it</p>
              <h2 className="font-display text-[42px] font-normal leading-[1.03] text-inkwell md:text-[62px]">
                Trust starts with restraint.
              </h2>
              <p className="mt-18 font-body text-[19px] leading-[1.5] text-inkwell/74">
                Useful recommendations start with clear evidence, careful language, and respect for
                what health guidance can and cannot promise.
              </p>
            </div>
            <div className="grid gap-12 sm:grid-cols-2">
              {trustSignals.map((item) => (
                <div key={item.title} className="bg-parchment p-18">
                  <h3 className="font-display text-[30px] font-normal leading-[1.05] text-inkwell">
                    {item.title}
                  </h3>
                  <p className="mt-9 font-body text-[17px] leading-[1.48] text-inkwell/72">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="sp-container py-58 md:py-76">
          <div className="flex flex-col justify-between gap-18 md:flex-row md:items-end">
            <div>
              <p className="sp-kicker mb-12 text-inkwell/56">Keep going</p>
              <h2 className="max-w-[760px] font-display text-[42px] font-normal leading-[1.03] text-inkwell md:text-[64px]">
                Find the guide, book, or next step that fits.
              </h2>
            </div>
            <div className="flex flex-wrap gap-8">
              {topics.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="border border-inkwell/24 px-12 py-8 font-utility text-[13px] leading-none text-inkwell/70 transition-colors hover:border-inkwell hover:text-inkwell"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-30 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            {productPath.map((item) => (
              <article key={item.title} className="bg-[#f7f1e4] p-18">
                <p className="font-utility text-[12px] leading-none text-verdigris">{item.stage}</p>
                <h3 className="mt-16 font-display text-[30px] font-normal leading-[1.04] text-inkwell">
                  {item.title}
                </h3>
                <p className="mt-12 font-body text-[16px] leading-[1.48] text-inkwell/72">
                  {item.copy}
                </p>
                <CommerceLink
                  href={item.href}
                  action={item.action}
                  className="mt-18 inline-flex border-b border-inkwell/40 pb-3 font-utility text-[13px] font-medium leading-none text-inkwell/70 transition-colors hover:border-inkwell hover:text-inkwell"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-inkwell text-parchment">
        <div className="sp-container py-58 md:py-76">
          <div className="mx-auto max-w-[880px] text-center">
            <p className="sp-kicker mb-14 text-parchment/58">Get practical strength guidance</p>
            <h2 className="font-display text-[44px] font-normal leading-[1.02] text-parchment md:text-[68px]">
              Know what to read, buy, and ignore.
            </h2>
            <p className="mx-auto mt-22 max-w-[680px] font-body text-[20px] leading-[1.5] text-parchment/74">
              Get careful notes on muscle loss, strength plans, protein, recovery, caregiver
              decisions, equipment, and supplement claims.
            </p>
            <div className="mx-auto mt-30 max-w-[560px]">
              <EmailForm source="homepage_commercial_rebuild" />
            </div>
            <p className="mx-auto mt-22 max-w-[620px] font-utility text-[13px] leading-[1.45] text-parchment/52">
              Educational content only. StrongPath does not diagnose, treat, cure, or replace care
              from your physician, physical therapist, or other qualified professional.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
