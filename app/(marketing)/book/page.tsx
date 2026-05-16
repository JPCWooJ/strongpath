import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AmazonLink } from '@/components/AmazonLink'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Choosing the StrongPath',
  description:
    'The book behind StrongPath: Choosing the StrongPath: Reversing the Downward Spiral of Aging.',
  path: '/book',
})

const bookCoverUrl =
  'https://books.google.com/books/content?id=gAxCDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'

export default function BookPage() {
  return (
    <main>
      <section className="border-b border-inkwell">
        <div className="sp-container grid gap-50 py-[72px] lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <div>
            <p className="sp-kicker mb-18 text-inkwell/70">The book behind StrongPath</p>
            <h1 className="font-display text-[54px] font-normal leading-[1] text-inkwell md:text-[82px]">
              Choosing the StrongPath
            </h1>
            <p className="mt-20 font-display text-[28px] font-normal leading-[1.12] text-inkwell md:text-[36px]">
              Reversing the Downward Spiral of Aging
            </p>
          </div>
          <div className="grid gap-30 md:grid-cols-[220px_1fr]">
            <Image
              src={bookCoverUrl}
              alt="Choosing the StrongPath book cover"
              width={220}
              height={330}
              className="w-full max-w-[220px] border border-inkwell bg-parchment"
              priority
            />
            <div>
              <p className="font-utility text-caption leading-caption text-inkwell/70">
                by Fred Bartlit, Steven Droullard, and Marni Boppart, ScD
              </p>
              <p className="sp-body mt-18 text-inkwell/85">
                StrongPath is built on the research foundation behind the book and extends that
                work through current, evidence-based publishing.
              </p>
              <p className="sp-body mt-18 text-inkwell/85">
                The book is a credibility anchor for the platform. Current third-party sources
                substantiate specific health claims in StrongPath articles.
              </p>
              <div className="mt-28 flex flex-col gap-12 sm:flex-row">
                <AmazonLink
                  asin="1626344760"
                  className="inline-flex justify-center border border-verdigris bg-verdigris px-22 py-12 font-body text-[18px] font-medium leading-none text-parchment transition-colors hover:border-inkwell hover:bg-transparent hover:text-inkwell"
                >
                  View on Amazon
                </AmazonLink>
                <Link
                  href="/blog/what-is-sarcopenia"
                  className="inline-flex justify-center border border-inkwell px-22 py-12 font-body text-[18px] font-medium leading-none text-inkwell transition-colors hover:bg-inkwell hover:text-parchment"
                >
                  Read the sarcopenia guide
                </Link>
              </div>
              <p className="mt-18 font-utility text-caption leading-caption text-inkwell/70">
                As an Amazon Associate, StrongPath may earn from qualifying purchases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
