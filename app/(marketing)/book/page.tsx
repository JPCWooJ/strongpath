import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AmazonLink } from '@/components/AmazonLink'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Choosing the StrongPath',
  description:
    'The book behind StrongPath: Choosing the StrongPath: Reversing the Downward Spiral of Aging, and the publication path built from its research foundation.',
  path: '/book',
})

const bookCoverUrl = '/images/choosing-the-strongpath-cover.jpg'

const readingPath = [
  {
    title: 'What Is Sarcopenia?',
    copy: 'Start with the change many people notice before they have a name for it: chairs, stairs, grip, balance, and slower recovery.',
    href: '/blog/what-is-sarcopenia',
  },
  {
    title: 'Resistance Training for Older Adults',
    copy: 'See how resistance training supports the ordinary movements people want to keep: standing, carrying, climbing, and traveling.',
    href: '/blog/resistance-training-older-adults',
  },
  {
    title: 'How to Help Aging Parents Stay Strong',
    copy: 'Use the family guide when love is the reason for the search, and pressure would only make the conversation harder.',
    href: '/blog/help-aging-parents-stay-strong',
  },
]

export default function BookPage() {
  return (
    <main className="bg-parchment">
      <section className="border-b border-[#2E6171]/24 bg-[#FAF8F5]">
        <div className="sp-container grid gap-28 py-32 md:py-48 lg:grid-cols-[minmax(0,0.58fr)_minmax(300px,0.42fr)] lg:gap-48 lg:items-start">
          <div className="max-w-[780px]">
            <p className="font-utility text-[13px] leading-none text-[#2E6171]">The book behind StrongPath</p>
            <h1 className="mt-12 font-display text-[50px] font-normal leading-[1.01] text-[#0B2545] md:text-[76px] md:leading-[0.98]">
              Choosing the StrongPath
            </h1>
            <p className="mt-14 max-w-[660px] font-display text-[27px] font-normal leading-[1.12] text-[#0B2545]/86 md:text-[36px]">
              Reversing the Downward Spiral of Aging
            </p>
            <p className="mt-18 max-w-[690px] font-body text-[18px] leading-[1.58] text-[#1A1D24]/78 md:text-[21px]">
              StrongPath carries the book&apos;s work forward with current publishing on muscle loss,
              strength, recovery, protein, and the ordinary work of staying capable after 50.
            </p>
            <p className="mt-14 font-utility text-[13px] leading-[1.45] text-[#1A1D24]/58">
              by Fred Bartlit, Steven Droullard, and Marni Boppart, ScD
            </p>
            <div className="mt-22 flex flex-col gap-10 sm:flex-row">
              <AmazonLink
                asin="1626344760"
                className="inline-flex min-h-[44px] items-center justify-center bg-[#0B2545] px-18 py-11 font-body text-[16px] font-medium leading-none text-parchment transition-colors hover:bg-[#16385f]"
              >
                View on Amazon
              </AmazonLink>
              <Link
                href="/blog/what-is-sarcopenia"
                className="inline-flex min-h-[44px] items-center justify-center border border-[#2E6171]/45 px-18 py-11 font-body text-[16px] font-medium leading-none text-[#0B2545] transition-colors hover:border-[#0B2545]"
              >
                Read the sarcopenia guide
              </Link>
            </div>
            <p className="mt-14 font-utility text-[13px] leading-[1.45] text-[#1A1D24]/58">
              As an Amazon Associate, StrongPath may earn from qualifying purchases.
            </p>
          </div>

          <Image
            src={bookCoverUrl}
            alt="Choosing the StrongPath book cover"
            width={333}
            height={500}
            sizes="(min-width: 1024px) 333px, 220px"
            className="w-full max-w-[250px] border border-[#2E6171]/24 bg-parchment md:max-w-[300px] lg:justify-self-end"
            priority
          />
        </div>
      </section>

      <section className="border-b border-[#2E6171]/24">
        <div className="sp-container grid gap-18 py-30 md:py-42 lg:grid-cols-[0.34fr_0.66fr] lg:gap-36">
          <div>
            <p className="font-utility text-[13px] leading-none text-[#2E6171]">Where the work began</p>
            <h2 className="mt-10 font-display text-[34px] font-normal leading-[1.06] text-[#0B2545] md:text-[48px]">
              The book is the starting point. The articles carry it forward.
            </h2>
          </div>
          <div className="max-w-[720px] space-y-14 font-body text-[18px] leading-[1.62] text-[#1A1D24]/80">
            <p>
              The book gives StrongPath its founding frame: muscle loss is consequential, strength
              can be trained, and guidance should stay close to real life: stairs, bags, chairs,
              travel, family, and the work of keeping good days possible.
            </p>
            <p>
              StrongPath articles use current third-party sources for specific health claims. The
              book remains the starting point, not a substitute for present-day evidence, clinician
              judgment, or individualized care.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#2E6171]/24 bg-[#FAF8F5]">
        <div className="sp-container py-30 md:py-42">
          <div className="flex flex-col justify-between gap-12 border-b border-[#2E6171]/28 pb-16 md:flex-row md:items-end">
            <div>
              <p className="font-utility text-[13px] leading-none text-[#2E6171]">Reading path</p>
              <h2 className="mt-10 font-display text-[34px] font-normal leading-[1.06] text-[#0B2545] md:text-[48px]">
                Where to go next
              </h2>
            </div>
            <Link
              href="/blog"
              className="w-fit border-b border-[#B8860B] pb-3 font-utility text-[13px] leading-none text-[#0B2545] transition-colors hover:text-[#2E6171]"
            >
              Browse all articles
            </Link>
          </div>

          <div className="divide-y divide-[#2E6171]/22">
            {readingPath.map((item) => (
              <article key={item.href} className="grid gap-8 py-17 md:grid-cols-[0.34fr_0.66fr] md:gap-24 md:py-20">
                <Link href={item.href} className="group">
                  <h3 className="font-display text-[28px] font-normal leading-[1.08] text-[#0B2545] group-hover:underline md:text-[36px]">
                    {item.title}
                  </h3>
                </Link>
                <p className="font-body text-[17px] leading-[1.58] text-[#1A1D24]/76 md:text-[18px]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
