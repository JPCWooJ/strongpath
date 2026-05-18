import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AmazonLink } from '@/components/AmazonLink'
import { formatArticleDate } from '@/lib/articles'
import { featuredFlagshipArticles } from '@/lib/flagship-articles'
import { buildMetadata } from '@/lib/seo'
import { EmailForm } from './EmailForm'

export const metadata: Metadata = buildMetadata({
  title: 'Strength for life after 50',
  description:
    'Practical help for adults and families who want strength for stairs, travel, recovery, and the people they love.',
  path: '/',
})

const bookCoverUrl = '/images/choosing-the-strongpath-cover.jpg'

const homepageExcerptOverrides: Record<string, string> = {
  'what-is-sarcopenia':
    'Muscle loss often shows up first in ordinary places: chairs, stairs, jars, luggage, and slower recovery.',
  'help-aging-parents-stay-strong':
    'How to help a parent have more good days without making them feel managed, pressured, or diminished.',
  'resistance-training-older-adults':
    'What lifting means when the goal is standing up, carrying groceries, walking farther, and recovering better.',
  'protein-for-older-adults':
    'How protein fits into strength and recovery without turning food into a sales pitch.',
  'how-to-start-lifting-weights-at-60':
    'A practical first-month frame for lifting at 60 with the right challenge, recovery, and common sense.',
}

const articleUseCases: Record<string, string> = {
  'what-is-sarcopenia':
    'For the moment when stairs, chairs, luggage, or recovery start to feel different.',
  'help-aging-parents-stay-strong':
    'For adult children who want to help without making a parent feel managed.',
  'resistance-training-older-adults':
    'For anyone walking more but still noticing strength, balance, or recovery changing.',
  'protein-for-older-adults':
    'For readers trying to connect food, training, and muscle without supplement hype.',
  'how-to-start-lifting-weights-at-60':
    'For the first week when lifting needs to feel specific, safe, and possible.',
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
    title: "I'm noticing weakness",
    copy: 'Stairs feel longer. Groceries feel heavier. Getting up from a low chair takes more thought than it used to.',
    href: '/blog/what-is-sarcopenia',
    action: 'Start with sarcopenia',
  },
  {
    title: 'I want to help a parent',
    copy: 'A parent is walking less, recovering more slowly, or quietly skipping things they used to enjoy.',
    href: '/blog/help-aging-parents-stay-strong',
    action: 'Read the caregiver guide',
  },
  {
    title: 'I want to know what helps',
    copy: 'Walking, protein, lifting, recovery: the hard part is knowing what matters first.',
    href: '/blog/resistance-training-older-adults',
    action: 'Read the lifting guide',
  },
]

const nextSteps = [
  {
    title: 'Start with the book',
    copy: 'Use the book to understand why strength matters for travel, family, work, and ordinary freedom.',
    action: 'Buy on Amazon',
    href: 'amazon',
  },
  {
    title: 'Read the sarcopenia guide',
    copy: 'See why the first signs matter before stairs, balance, recovery, or confidence narrow further.',
    action: 'Read the guide',
    href: '/blog/what-is-sarcopenia',
  },
  {
    title: 'Get practical notes',
    copy: 'Get notes on muscle loss, protein, recovery, and helping a parent begin without making it a fight.',
    action: 'Get practical notes',
    href: '/waitlist',
  },
]

const trustSignals = [
  {
    title: 'Book first',
    copy: 'The book gives readers a serious place to start before StrongPath asks them to buy anything else.',
  },
  {
    title: 'Careful sources',
    copy: 'Health claims should be easy to check. Readers should not have to take them on faith.',
  },
  {
    title: 'No big promises',
    copy: 'No age-reversal promises. No fear. No claim stronger than the evidence supports.',
  },
]

const topics = [
  ['Sarcopenia', '/blog/tags/sarcopenia'],
  ['Strength After 50', '/blog/tags/strength-after-50'],
  ['Resistance Training', '/blog/tags/resistance-training'],
  ['Healthy Aging', '/blog/tags/healthy-aging'],
  ['Caregiving', '/blog/tags/caregiving'],
]

function ArticleMeta({
  publishedAt,
  readingMinutes,
  tone = 'dark',
}: {
  publishedAt?: string
  readingMinutes?: number
  tone?: 'dark' | 'light'
}) {
  const date = formatArticleDate(publishedAt)
  const color = tone === 'light' ? 'text-parchment/62' : 'text-[#5A6472]'

  return (
    <div className={`flex flex-wrap gap-x-10 gap-y-4 font-utility text-[13px] leading-[1.35] ${color}`}>
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
    <main className="bg-parchment">
      <section className="border-b border-[#2E6171]/24 bg-[#FAF8F5]">
        <div className="sp-container grid gap-26 py-24 md:py-36 lg:grid-cols-[minmax(0,1fr)_330px] lg:gap-44">
          <div className="max-w-[820px]">
            <h1 className="font-display text-[48px] font-normal leading-[1.01] text-[#0B2545] md:text-[76px] md:leading-[0.98]">
              Stay strong for the life you still want to live.
            </h1>
            <p className="mt-16 max-w-[690px] font-body text-[18px] leading-[1.55] text-[#1A1D24]/80 md:text-[22px]">
              Stairs. Groceries. Chairs. Travel. Walks with family. StrongPath helps adults and
              families understand what changes with age, what is worth doing, and how to begin.
            </p>
            <div className="mt-18 flex flex-col gap-10 sm:flex-row sm:items-center">
              <Link
                href="/blog/what-is-sarcopenia"
                className="inline-flex min-h-[44px] items-center justify-center bg-[#0B2545] px-18 py-11 font-body text-[16px] font-medium leading-none text-parchment transition-colors hover:bg-[#16385f]"
              >
                Read the sarcopenia guide
              </Link>
              <Link
                href="/blog"
                className="inline-flex min-h-[44px] items-center justify-center border border-[#2E6171]/45 px-18 py-11 font-body text-[16px] font-medium leading-none text-[#0B2545] transition-colors hover:border-[#0B2545]"
              >
                Browse articles
              </Link>
            </div>
          </div>

          <aside className="border border-[#2E6171]/28 bg-parchment p-14 md:p-16">
            <p className="font-utility text-[13px] leading-none text-[#2E6171]">Amazon bestseller</p>
            <div className="mt-12 grid grid-cols-[88px_1fr] gap-12 lg:grid-cols-1">
              <Image
                src={bookCoverUrl}
                alt="Choosing the StrongPath book cover"
                width={333}
                height={500}
                sizes="(min-width: 1024px) 230px, 88px"
                className="h-auto w-full border border-[#2E6171]/18 bg-[#FAF8F5] lg:max-w-[230px]"
                priority
              />
              <div>
                <p className="font-display text-[27px] leading-[1.06] text-[#0B2545]">
                  Choosing the StrongPath
                </p>
                <p className="mt-8 font-body text-[15px] leading-[1.48] text-[#1A1D24]/72">
                  Amazon bestseller in Aging, Weight Training, Exercise, and Longevity.
                </p>
                <AmazonLink
                  asin="1626344760"
                  className="mt-12 inline-flex min-h-[40px] items-center border-b border-[#B8860B] pb-3 font-utility text-[13px] leading-none text-[#0B2545] transition-colors hover:text-[#2E6171]"
                >
                  Buy on Amazon
                </AmazonLink>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-[#2E6171]/24">
        <div className="sp-container py-28 md:py-40">
          <div className="grid gap-14 md:grid-cols-[0.32fr_0.68fr] md:gap-28">
            <div>
              <p className="font-utility text-[13px] leading-none text-[#2E6171]">Start here</p>
              <h2 className="mt-10 font-display text-[34px] font-normal leading-[1.06] text-[#0B2545] md:text-[46px]">
                Start with the moment you are living.
              </h2>
            </div>
            <div className="divide-y divide-[#2E6171]/22 border-y border-[#2E6171]/25">
              {startingPoints.map((item) => (
                <article key={item.title} className="grid gap-8 py-16 md:grid-cols-[0.36fr_0.64fr] md:gap-18 md:py-18">
                  <h3 className="font-display text-[27px] font-normal leading-[1.08] text-[#0B2545] md:text-[31px]">
                    {item.title}
                  </h3>
                  <div>
                    <p className="font-body text-[16px] leading-[1.52] text-[#1A1D24]/76 md:text-[17px]">
                      {item.copy}
                    </p>
                    <Link
                      href={item.href}
                      className="mt-10 inline-flex border-b border-[#B8860B] pb-3 font-utility text-[13px] leading-none text-[#0B2545] transition-colors hover:text-[#2E6171]"
                    >
                      {item.action}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B2545] text-parchment">
        <div className="sp-container py-30 md:py-44">
          {featuredGuide && (
            <article className="grid gap-18 md:grid-cols-[0.3fr_0.7fr] md:gap-32">
              <div>
                <p className="font-utility text-[13px] leading-none text-[#dfe5dc]">Featured guide</p>
                <div className="mt-12">
                  <ArticleMeta
                    publishedAt={featuredGuide.publishedAt}
                    readingMinutes={featuredGuide.readingMinutes}
                    tone="light"
                  />
                </div>
                {featuredGuide.useCase && (
                  <p className="mt-14 border-l border-[#B8860B] pl-12 font-body text-[16px] leading-[1.5] text-parchment/74 md:text-[18px]">
                    {featuredGuide.useCase}
                  </p>
                )}
              </div>
              <div>
                <Link href={featuredGuide.href} className="group">
                  <h2 className="max-w-[820px] font-display text-[42px] font-normal leading-[1.03] text-parchment group-hover:underline md:text-[68px] md:leading-[1]">
                    {featuredGuide.title}
                  </h2>
                </Link>
                {featuredGuide.excerpt && (
                  <p className="mt-14 max-w-[720px] font-body text-[18px] leading-[1.55] text-parchment/74 md:text-[21px]">
                    {featuredGuide.excerpt}
                  </p>
                )}
                <Link
                  href={featuredGuide.href}
                  className="mt-18 inline-flex min-h-[42px] items-center bg-parchment px-18 py-10 font-body text-[16px] font-medium leading-none text-[#0B2545] transition-colors hover:bg-[#FAF8F5]"
                >
                  Read the guide
                </Link>
              </div>
            </article>
          )}
        </div>
      </section>

      <section className="border-b border-[#2E6171]/24">
        <div className="sp-container py-30 md:py-42">
          <div className="flex flex-col justify-between gap-12 border-b border-[#2E6171]/28 pb-16 md:flex-row md:items-end">
            <div>
              <p className="font-utility text-[13px] leading-none text-[#2E6171]">Latest guides</p>
              <h2 className="mt-10 font-display text-[34px] font-normal leading-[1.06] text-[#0B2545] md:text-[48px]">
                Read next
              </h2>
            </div>
            <Link
              href="/blog"
              className="w-fit border-b border-[#B8860B] pb-3 font-utility text-[13px] leading-none text-[#0B2545] transition-colors hover:text-[#2E6171]"
            >
              View all articles
            </Link>
          </div>

          <div className="divide-y divide-[#2E6171]/22">
            {supportingGuides.map((article) => (
              <article key={article.href} className="grid gap-10 py-18 md:grid-cols-[0.25fr_0.75fr] md:gap-24 md:py-22">
                <ArticleMeta publishedAt={article.publishedAt} readingMinutes={article.readingMinutes} />
                <div>
                  <Link href={article.href} className="group">
                    <h3 className="max-w-[760px] font-display text-[30px] font-normal leading-[1.08] text-[#0B2545] group-hover:underline md:text-[40px]">
                      {article.title}
                    </h3>
                  </Link>
                  {article.excerpt && (
                    <p className="mt-10 max-w-[690px] font-body text-[17px] leading-[1.55] text-[#1A1D24]/76 md:text-[18px]">
                      {article.excerpt}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#2E6171]/24 bg-[#FAF8F5]">
        <div className="sp-container grid gap-20 py-30 md:py-42 lg:grid-cols-[0.38fr_0.62fr] lg:gap-34">
          <div>
            <p className="font-utility text-[13px] leading-none text-[#2E6171]">Why trust it</p>
              <h2 className="mt-10 font-display text-[34px] font-normal leading-[1.06] text-[#0B2545] md:text-[48px]">
                Serious help does not need big promises.
              </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {trustSignals.map((item) => (
              <article key={item.title} className="border-t border-[#2E6171]/28 pt-12">
                <h3 className="font-display text-[27px] font-normal leading-[1.08] text-[#0B2545]">
                  {item.title}
                </h3>
                <p className="mt-8 font-body text-[16px] leading-[1.52] text-[#1A1D24]/74">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#2E6171]/24">
        <div className="sp-container py-30 md:py-42">
          <div className="grid gap-18 md:grid-cols-[0.32fr_0.68fr] md:gap-28">
            <div>
              <p className="font-utility text-[13px] leading-none text-[#2E6171]">Recommended next steps</p>
              <h2 className="mt-10 font-display text-[34px] font-normal leading-[1.06] text-[#0B2545] md:text-[48px]">
                What to do next
              </h2>
            </div>
            <div className="grid gap-12 md:grid-cols-3">
              {nextSteps.map((item) => (
                <article key={item.title} className="border border-[#2E6171]/24 bg-[#FAF8F5] p-16">
                  <h3 className="font-display text-[27px] font-normal leading-[1.08] text-[#0B2545]">
                    {item.title}
                  </h3>
                  <p className="mt-9 font-body text-[16px] leading-[1.52] text-[#1A1D24]/74">
                    {item.copy}
                  </p>
                  <CommerceLink
                    href={item.href}
                    action={item.action}
                    className="mt-14 inline-flex border-b border-[#B8860B] pb-3 font-utility text-[13px] leading-none text-[#0B2545] transition-colors hover:text-[#2E6171]"
                  />
                </article>
              ))}
            </div>
          </div>

          <div className="mt-22 flex flex-wrap gap-8 border-t border-[#2E6171]/24 pt-16">
            {topics.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="border border-[#2E6171]/30 px-10 py-6 font-utility text-[13px] leading-none text-[#1A1D24]/68 transition-colors hover:border-[#0B2545] hover:text-[#0B2545]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B2545] text-parchment">
        <div className="sp-container py-34 md:py-48">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="font-display text-[38px] font-normal leading-[1.05] text-parchment md:text-[58px]">
              Get clearer about what helps.
            </h2>
            <p className="mx-auto mt-14 max-w-[620px] font-body text-[17px] leading-[1.55] text-parchment/74 md:text-[19px]">
              Get notes on muscle loss, protein, recovery, equipment, supplements, and helping a
              parent begin without making it a fight.
            </p>
            <div className="mx-auto mt-20 max-w-[560px] md:mt-24">
              <EmailForm source="homepage_publication_baseline" />
            </div>
            <p className="mx-auto mt-16 max-w-[620px] font-utility text-[13px] leading-[1.45] text-parchment/52">
              Educational content only. StrongPath does not diagnose, treat, cure, or replace care
              from your physician, physical therapist, or other qualified professional.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
