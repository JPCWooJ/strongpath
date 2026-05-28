import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AmazonLink } from '@/components/AmazonLink'
import { formatArticleDate } from '@/lib/articles'
import { featuredFlagshipArticles } from '@/lib/flagship-articles'
import { buildMetadata } from '@/lib/seo'
import { EmailForm } from './EmailForm'

export const metadata: Metadata = buildMetadata({
  title: 'StrongPath - Strength for life after 50',
  description:
    'Practical strength guidance for adults after 50 and the families helping them stay strong, active, and independent longer.',
  path: '/',
})

const bookCoverUrl = '/images/choosing-the-strongpath-cover.jpg'

const homepageExcerptOverrides: Record<string, string> = {
  'what-is-sarcopenia':
    'Most families do not learn the word until weakness has already changed daily life. Stairs get harder. Chairs feel lower. Groceries feel heavier. A parent stops taking walks. We call it getting older, but often there is something more specific happening: age-related loss of muscle, strength, and function.',
  'help-aging-parents-stay-strong':
    'How to help a parent stay strong without making them feel managed, pressured, or diminished.',
  'resistance-training-older-adults':
    'What strength training means when the goal is standing up, carrying groceries, climbing stairs, walking farther, and recovering better.',
  'protein-for-older-adults':
    'How protein supports strength and recovery without turning food into a sales pitch.',
  'how-to-start-lifting-weights-at-60':
    'A practical first-month guide for lifting at 60 with the right challenge, recovery, and common sense.',
  'balance-and-mobility-after-50':
    'Balance and mobility are part of daily strength: stairs, uneven ground, getting up and down, reaching, carrying, and recovering position.',
}

const homepageTitleOverrides: Record<string, string> = {
  'what-is-sarcopenia': 'Sarcopenia may be the most common disease no one has ever heard of.',
}

const articleUseCases: Record<string, string> = {
  'what-is-sarcopenia':
    'Sarcopenia may be the most common disease no one has ever heard of.',
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
  title: homepageTitleOverrides[article.slug.current] ?? article.title,
  href: `/blog/${article.slug.current}`,
  excerpt: homepageExcerptOverrides[article.slug.current] ?? article.excerpt,
  useCase: articleUseCases[article.slug.current],
  category: article.category,
  publishedAt: article.publishedAt,
  image: article.heroImage,
}))

const [featuredGuide, ...supportingGuides] = featuredArticles

const startingPoints = [
  {
    title: 'I want to stay independent.',
    copy: 'For adults noticing that stairs, chairs, groceries, jars, balance, or recovery feel different.',
    href: '/blog/what-is-sarcopenia',
    action: 'Start with sarcopenia',
  },
  {
    title: 'I want to help a parent.',
    copy: 'For adult children and families who notice the walks getting shorter, the stairs taking longer, or the chair becoming harder to get out of.',
    href: '/blog/help-aging-parents-stay-strong',
    action: 'Help a parent begin',
  },
]

const nextSteps = [
  {
    title: 'Understand the problem.',
    copy: 'Start with the article on sarcopenia and learn why muscle, strength, and independence are connected.',
    action: 'Read the article',
    href: '/blog/what-is-sarcopenia',
  },
  {
    title: 'Help a parent begin.',
    copy: 'Use the caregiver guide to start the conversation without pressure, shame, or fear.',
    action: 'Read the guide',
    href: '/blog/help-aging-parents-stay-strong',
  },
  {
    title: 'Stay on the path.',
    copy: 'Get practical notes on strength, protein, recovery, and helping a parent take the first step.',
    action: 'Get the notes',
    href: '/waitlist',
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
  tone = 'dark',
}: {
  publishedAt?: string
  tone?: 'dark' | 'light'
}) {
  const date = formatArticleDate(publishedAt)
  const color = tone === 'light' ? 'text-warm-white/62' : 'text-[#5A6472]'

  return (
    <div className={`flex flex-wrap gap-x-10 gap-y-4 font-utility text-[13px] leading-[1.35] ${color}`}>
      {date && <p>{date}</p>}
    </div>
  )
}

function IndependenceIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="13" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="M6 46c0-9.9 8.1-18 18-18s18 8.1 18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CaregivingIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="14" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M1 44c0-7.1 5.8-13 13-13s13 5.8 13 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="13" r="5.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 44c0-6.6 5.4-12 12-12s12 5.4 12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function HomePage() {
  return (
    <main className="bg-warm-white">
      <section className="border-b border-[#2E6171]/24 bg-[#FAF8F5]">
        <div className="sp-container pb-8 pt-12 md:pb-14 md:pt-[90px]">
          <div className="grid gap-16 border-y border-[#2E6171]/24 py-10 md:gap-20 md:py-72 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start lg:gap-28">

            <div>
              <h1 className="font-display text-[42px] font-normal leading-[1.01] text-[#0B2545] md:text-[74px] md:leading-[0.98]">
                Strength for the family, freedom, and life you want to keep.
              </h1>

              <p className="mt-30 max-w-[690px] font-body text-[17px] leading-[1.5] text-[#1A1D24]/80 md:text-[22px] md:leading-[1.55]">
                Resistance training, adequate protein, and recovery — the research-backed path to
                staying strong as you age.
              </p>

              <div className="mt-30">
                <Link
                  href="/blog/what-is-sarcopenia"
                  className="inline-flex min-h-[46px] items-center justify-center bg-[#0B2545] px-18 py-11 font-body text-[16px] font-medium leading-none text-warm-white transition-colors hover:bg-[#16385f]"
                >
                  Learn about sarcopenia
                </Link>
                <div className="mt-12">
                  <Link
                    href="/blog"
                    className="font-utility text-[14px] leading-none text-[#1A1D24] decoration-[#1A1D24]/40 underline-offset-4 hover:underline"
                  >
                    Browse all articles
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-18 inline-flex items-center gap-8 rounded-[40px] bg-[var(--color-navy-pill)] py-10 pl-14 pr-16">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#ffb801" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <div>
                  <p className="font-utility text-[14px] font-medium uppercase leading-none tracking-[0.08em] text-[#f0ebdd]">
                    Amazon Bestseller
                  </p>
                  <p className="mt-4 font-utility text-[11px] leading-none text-[#f0ebdd]/80">
                    Aging · Weight Training · Exercise · Longevity
                  </p>
                </div>
              </div>
              <Link href="/book" className="block">
                <Image
                  src={bookCoverUrl}
                  alt="Choosing the StrongPath book cover"
                  width={333}
                  height={500}
                  sizes="(min-width: 1024px) 280px, 160px"
                  className="h-auto w-[160px] border border-[#2E6171]/18 bg-[#FAF8F5] lg:w-full"
                  priority
                />
              </Link>
              <p className="mt-8 font-utility text-[13px] leading-[1.45] text-[#1A1D24]/72">
                <em>Choosing the StrongPath: Reversing the Downward Spiral of Aging</em>{' '}
                by Fred Bartlit, Steven Droullard, and Marni Boppart, ScD (2018)
              </p>
              <AmazonLink
                asin="1626344760"
                className="mt-18 inline-flex min-h-[46px] items-center justify-center bg-[#0B2545] px-18 py-11 font-body text-[16px] font-medium leading-none text-warm-white transition-colors hover:bg-[#16385f]"
              >
                Buy on Amazon
              </AmazonLink>
            </div>

          </div>
        </div>
      </section>

      <section className="border-b border-[#2E6171]/24">
        <div className="sp-container py-16 md:py-[120px]">
          <div className="grid gap-16 md:grid-cols-[0.34fr_0.66fr] md:gap-28">
            <div>
              <p className="font-utility text-[13px] leading-none text-[#2E6171]">Choose your StrongPath</p>
              <h2 className="mt-10 font-display text-[42px] font-normal leading-[1.01] text-[#0B2545] md:text-[74px] md:leading-[0.98]">
                Take the StrongPath, not the frail trail.
              </h2>
              <p className="mt-10 font-body text-[16px] leading-[1.52] text-[#1A1D24]/74">
                Most people arrive here through one of two doors: protecting their own
                independence, or helping someone they love act earlier.
              </p>
            </div>
            <div>
              <div className="grid gap-16 md:grid-cols-2">
                {startingPoints.map((item, index) => (
                  <article
                    key={item.title}
                    className="border border-[#2E6171]/26 bg-[#FAF8F5] p-20 md:p-28"
                  >
                    <div className="mb-20 text-near-black">
                      {index === 0 ? <IndependenceIcon /> : <CaregivingIcon />}
                    </div>
                    <h3 className="font-display text-[31px] font-normal leading-[1.06] text-[#0B2545] md:text-[36px]">
                      {item.title}
                    </h3>
                    <p className="mt-10 font-body text-[17px] leading-[1.52] text-[#1A1D24]/76 md:text-[18px]">
                      {item.copy}
                    </p>
                    <Link
                      href={item.href}
                      className="mt-16 inline-flex min-h-[46px] items-center justify-center bg-[#0B2545] px-18 py-11 font-body text-[16px] font-medium leading-none text-warm-white transition-colors hover:bg-[#16385f]"
                    >
                      {item.action}
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B2545] text-warm-white">
        <div className="sp-container py-20 md:py-[120px]">
          {featuredGuide && (
            <article className="grid gap-20 md:grid-cols-[0.43fr_0.57fr] md:items-start md:gap-32">
              {featuredGuide.image && (
                <Link href={featuredGuide.href} className="group block">
                  <Image
                    src={featuredGuide.image.src}
                    alt={featuredGuide.image.alt}
                    width={1000}
                    height={700}
                    priority
                    className="aspect-[4/3] w-full border border-warm-white/18 object-cover transition-opacity group-hover:opacity-90 md:aspect-[5/4]"
                    style={{ objectPosition: featuredGuide.image.objectPosition }}
                  />
                </Link>
              )}
              <div className="md:pt-2">
                <div>
                  <p className="font-utility text-[13px] leading-none text-warm-white/72">Start here</p>
                  <div className="mt-12">
                    <ArticleMeta
                      publishedAt={featuredGuide.publishedAt}
                      tone="light"
                    />
                  </div>
                  {featuredGuide.useCase && (
                    <p className="mt-14 border-l border-[#B8860B] pl-12 font-body text-[16px] leading-[1.5] text-warm-white/74 md:text-[18px]">
                      {featuredGuide.useCase}
                    </p>
                  )}
                </div>
                <div className="mt-16 md:mt-20">
                  <Link href={featuredGuide.href} className="group">
                    <h2 className="max-w-[820px] font-display text-[40px] font-normal leading-[1.03] text-warm-white group-hover:underline md:text-[62px] md:leading-[1]">
                      {featuredGuide.title}
                    </h2>
                  </Link>
                  {featuredGuide.excerpt && (
                    <p className="mt-14 max-w-[720px] font-body text-[18px] leading-[1.55] text-warm-white/74 md:text-[21px]">
                      {featuredGuide.excerpt}
                    </p>
                  )}
                  <Link
                    href={featuredGuide.href}
                    className="mt-18 inline-flex min-h-[42px] items-center bg-warm-white px-18 py-10 font-body text-[16px] font-medium leading-none text-[#0B2545] transition-colors hover:bg-[#FAF8F5]"
                  >
                    Understand sarcopenia
                  </Link>
                </div>
              </div>
            </article>
          )}
        </div>
      </section>

      <section className="border-b border-[#2E6171]/24">
        <div className="sp-container">
          <div className="grid gap-10 border-y border-[#2E6171]/24 py-[36px] md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <div>
              <p className="font-utility text-[13px] leading-none text-[#2E6171]">
                The path is practical.
              </p>
              <p className="mt-7 font-body text-[16px] leading-[1.5] text-[#1A1D24]/72 md:text-[17px]">
                Both paths start with the same foundation: resistance training, enough protein,
                recovery, and steady progression.
              </p>
            </div>
            <Link
              href="/blog/resistance-training-older-adults"
              className="inline-flex min-h-[36px] items-center border-b border-[#B8860B]/70 pb-3 font-utility text-[13px] leading-none text-[#0B2545] transition-colors hover:text-[#2E6171]"
            >
              Read the research
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#2E6171]/24">
        <div className="sp-container py-12 md:py-16">
          <div className="flex flex-col justify-between gap-12 border-b border-[#2E6171]/28 pb-16 md:flex-row md:items-end">
            <div>
              <p className="font-utility text-[13px] leading-none text-[#2E6171]">Latest articles</p>
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
              <article key={article.href} className="grid gap-12 py-18 md:grid-cols-[132px_minmax(0,1fr)] md:gap-20 md:py-22">
                {article.image && (
                  <Link href={article.href} className="group block">
                    <Image
                      src={article.image.src}
                      alt={article.image.alt}
                      width={420}
                      height={300}
                      className="aspect-[16/10] w-full border border-[#2E6171]/18 object-cover transition-opacity group-hover:opacity-90 md:aspect-[5/4]"
                      style={{ objectPosition: article.image.objectPosition }}
                    />
                  </Link>
                )}
                <div>
                  <ArticleMeta publishedAt={article.publishedAt} />
                  <Link href={article.href} className="group">
                    <h3 className="mt-8 max-w-[760px] font-display text-[29px] font-normal leading-[1.08] text-[#0B2545] group-hover:underline md:text-[38px]">
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

      <section className="border-b border-[#2E6171]/24">
        <div className="sp-container py-12 md:py-16">
          <div className="grid gap-18 md:grid-cols-[0.32fr_0.68fr] md:gap-28">
            <div>
              <p className="font-utility text-[13px] leading-none text-[#2E6171]">Choose your next step</p>
              <h2 className="mt-10 font-display text-[34px] font-normal leading-[1.06] text-[#0B2545] md:text-[48px]">
                Choose your next step.
              </h2>
            </div>
            <div className="grid gap-12 md:grid-cols-3">
              {nextSteps.map((item, index) => (
                <article key={item.title} className="border border-[#2E6171]/24 bg-[#FAF8F5] p-16">
                  <h3 className="font-display text-[27px] font-normal leading-[1.08] text-[#0B2545]">
                    {item.title}
                  </h3>
                  <p className="mt-9 font-body text-[16px] leading-[1.52] text-[#1A1D24]/74">
                    {item.copy}
                  </p>
                  {index === 0 ? (
                    <Link
                      href={item.href}
                      className="mt-14 inline-flex min-h-[42px] items-center bg-[#0B2545] px-16 py-10 font-body text-[15px] font-medium leading-none text-warm-white transition-colors hover:bg-[#16385f]"
                    >
                      {item.action}
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      className="mt-14 inline-flex border-b border-[#B8860B] pb-3 font-utility text-[13px] leading-none text-[#0B2545] transition-colors hover:text-[#2E6171]"
                    >
                      {item.action}
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-8 border-t border-[#2E6171]/24 pt-12">
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

      <section className="bg-[#0B2545] text-warm-white">
        <div className="sp-container py-14 md:py-20">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="font-display text-[38px] font-normal leading-[1.05] text-warm-white md:text-[58px]">
              Get clearer about what helps.
            </h2>
            <p className="mx-auto mt-14 max-w-[620px] font-body text-[17px] leading-[1.55] text-warm-white/74 md:text-[19px]">
              Practical notes on strength, protein, recovery, and helping a parent begin without
              pressure.
            </p>
            <div className="mx-auto mt-14 max-w-[560px] md:mt-16">
              <EmailForm source="homepage_publication_baseline" />
            </div>
            <p className="mx-auto mt-16 max-w-[620px] font-utility text-[13px] leading-[1.45] text-warm-white/52">
              Educational content only. StrongPath does not diagnose, treat, cure, or replace care
              from your physician, physical therapist, or other qualified professional.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
