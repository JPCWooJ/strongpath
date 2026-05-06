import type { Metadata } from 'next'
import Link from 'next/link'
import { AmazonLink } from '@/components/AmazonLink'
import { FTCDisclosure } from '@/components/FTCDisclosure'
import { EmailForm } from './EmailForm'

export const metadata: Metadata = {
  title: 'StrongPath - Strength for adults 55+',
  description:
    'Evidence-based strength guidance for adults and families who want to preserve capacity, confidence, and independence.',
  openGraph: {
    title: 'StrongPath - Strength for adults 55+',
    description:
      'Evidence-based strength guidance for adults and families who want to preserve capacity, confidence, and independence.',
    type: 'website',
  },
}

const evidenceNotes = [
  {
    label: 'Strength',
    title: 'Muscle and capacity',
    copy: 'The quiet losses behind stairs, groceries, balance, recovery, and independence.',
  },
  {
    label: 'Practice',
    title: 'Training, protein, recovery',
    copy: 'The basic pattern is not mysterious. The challenge is making it specific enough to follow.',
  },
  {
    label: 'Trust',
    title: 'A serious tone',
    copy: 'No hype, no miracle language, no pressure. Just a careful case for strength.',
  },
]

const adviceFailures = [
  ['Walk more', 'Useful, but not enough to preserve strength on its own.'],
  ['Be careful', 'Often true, rarely actionable. Caution needs a path.'],
  ['Eat more protein', 'Directionally right, but too vague to become a plan.'],
  ['Try some weights', 'The right instinct, missing the sequence: start, load, recover, progress.'],
]

const pathways = [
  {
    label: 'For you',
    title: 'You have noticed the stairs.',
    copy:
      'You are not broken. You are paying attention. StrongPath begins with the question you are already asking: what actually works after 55?',
  },
  {
    label: 'For family',
    title: 'You want your parent to have more good days.',
    copy:
      'Not out of panic. Out of love. The right guidance should protect dignity and make the next conversation easier.',
  },
  {
    label: 'For clinicians',
    title: 'You need a resource you can trust.',
    copy:
      'StrongPath is written to be useful to patients and respectable to the clinicians who care for them.',
  },
]

const publishingAnchors = [
  'What muscle loss after 60 actually means',
  'Resistance training for older adults',
  'How to help aging parents stay strong',
  'How much protein adults over 60 need',
  'How to start lifting weights at 60',
]

export default function HomePage() {
  return (
    <>
      <FTCDisclosure />
      <main className="overflow-hidden">
      <section className="relative border-b border-inkwell">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-sunbeam-gradient opacity-80" />
        <div className="sp-container relative py-[72px] md:py-[108px]">
          <div className="grid gap-40 border-y border-inkwell py-18 md:grid-cols-[0.72fr_1.28fr] md:items-center">
            <p className="font-utility text-caption leading-caption text-inkwell/70">
              Evidence-based strength for adults 55+
            </p>
            <p className="font-utility text-caption leading-caption text-inkwell/70 md:text-right">
              For people who want to stay capable, and for families helping someone they love.
            </p>
          </div>

          <div className="grid gap-60 pt-60 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="sp-kicker mb-18 text-inkwell/70">A more serious way to age strong</p>
              <h1 className="max-w-[920px] font-display text-[58px] font-normal leading-[0.98] text-inkwell sm:text-[78px] lg:text-[104px]">
                Strength is not a youth project.
              </h1>
              <p className="mt-40 max-w-[740px] font-body text-[22px] font-medium leading-[1.42] text-inkwell/85">
                StrongPath helps adults preserve capacity, confidence, and independence with
                research-grounded guidance that respects the reader.
              </p>
            </div>

            <aside className="border border-inkwell bg-parchment p-18 lg:mt-20">
              <div className="border border-inkwell p-24 md:p-30">
                <p className="font-utility text-caption leading-caption text-inkwell/65">
                  The book behind the work
                </p>
                <div className="mt-30 flex min-h-[390px] flex-col justify-between border border-inkwell p-24">
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
                The work began with a book. StrongPath carries it forward as a practical resource
                for the years when strength starts to matter more.
              </p>
              <div className="mt-24 flex flex-col gap-12 sm:flex-row">
                <AmazonLink
                  asin="1626344760"
                  className="inline-flex justify-center border border-inkwell px-18 py-10 font-body text-[16px] font-medium leading-none text-inkwell transition-colors hover:bg-inkwell hover:text-parchment"
                >
                  View the book
                </AmazonLink>
                <Link
                  href="/waitlist"
                  className="inline-flex justify-center border border-inkwell px-18 py-10 font-body text-[16px] font-medium leading-none text-inkwell transition-colors hover:bg-inkwell hover:text-parchment"
                >
                  Join the list
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-inkwell">
        <div className="sp-container grid gap-0 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="border-b border-inkwell py-60 lg:border-b-0 lg:border-r lg:pr-40">
            <p className="sp-kicker mb-18 text-inkwell/70">The problem</p>
            <h2 className="font-display text-[44px] font-normal leading-[1.08] md:text-[64px]">
              The first sign is usually ordinary.
            </h2>
          </div>
          <div className="py-60 lg:pl-40">
            <div className="grid gap-30">
              <p className="font-body text-[24px] font-medium leading-[1.38] text-inkwell">
                A stair gets longer. A chair gets lower. A grocery bag starts requiring two trips.
                A parent begins organizing the day around what feels safe.
              </p>
              <p className="sp-body text-inkwell/85">
                These moments are easy to dismiss because they arrive quietly. They are not a
                verdict. They are a reason to get specific.
              </p>
              <p className="sp-body text-inkwell/85">
                Most people have already heard that they should stay active. What they need is
                better than a slogan: a clear explanation of what strength requires, and how to
                begin carefully.
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
                The advice is familiar. That is the problem.
              </h2>
            </div>
            <div className="grid border-t border-inkwell">
              {adviceFailures.map(([title, copy]) => (
                <div key={title} className="grid gap-18 border-b border-inkwell py-24 md:grid-cols-[0.36fr_0.64fr]">
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
          <div className="mx-auto max-w-[980px] text-center">
            <p className="sp-kicker mb-18 text-inkwell/70">What we believe</p>
            <h2 className="font-display text-[50px] font-normal leading-[1.04] md:text-[78px]">
              Serious health advice should feel calm.
            </h2>
            <p className="mx-auto mt-30 max-w-[720px] font-body text-[21px] font-medium leading-[1.45] text-inkwell/85">
              No urgency theater. No miracle claims. No language that makes capable adults feel
              diminished. Just a serious case for strength, written plainly.
            </p>
          </div>
          <div className="mt-60 grid gap-18 lg:grid-cols-3">
            {evidenceNotes.map((note) => (
              <article key={note.title} className="border border-inkwell bg-parchment p-24">
                <p className="font-utility text-caption leading-caption text-inkwell/65">{note.label}</p>
                <h3 className="mt-18 font-display text-[34px] font-normal leading-[1.1]">{note.title}</h3>
                <p className="sp-body mt-18 text-inkwell/85">{note.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-inkwell">
        <div className="sp-container py-60">
          <div className="grid gap-40 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="sp-kicker mb-18 text-inkwell/70">Who this is for</p>
              <h2 className="font-display text-[44px] font-normal leading-[1.08] md:text-[64px]">
                Different readers arrive with the same hope.
              </h2>
            </div>
            <div className="grid border-t border-inkwell">
              {pathways.map((pathway) => (
                <article key={pathway.label} className="grid gap-18 border-b border-inkwell py-30 md:grid-cols-[0.28fr_0.72fr]">
                  <p className="font-utility text-caption leading-caption text-inkwell/65">{pathway.label}</p>
                  <div>
                    <h3 className="font-display text-[38px] font-normal leading-[1.08]">{pathway.title}</h3>
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
            <p className="sp-kicker mb-18 text-inkwell/70">For families</p>
            <h2 className="font-display text-[42px] font-normal leading-[1.08] md:text-[62px]">
              The ask is not &ldquo;fix my parent.&rdquo; The ask is &ldquo;help them keep more good days.&rdquo;
            </h2>
          </div>
          <div className="py-60 lg:pl-40">
            <p className="font-body text-[24px] font-medium leading-[1.38] text-inkwell">
              The caregiver reader is not shopping from fear. He is acting from love.
            </p>
            <p className="sp-body mt-24 text-inkwell/85">
              The right guidance should protect a parent&apos;s dignity. It should make the next
              conversation easier, not heavier. It should help the family move from worry to a
              small, credible next step.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-inkwell">
        <div className="sp-container py-60">
          <div className="grid gap-40 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="sp-kicker mb-18 text-inkwell/70">Coming first</p>
              <h2 className="font-display text-[44px] font-normal leading-[1.08] md:text-[64px]">
                A practical library for strength after 55.
              </h2>
              <p className="sp-body mt-24 text-inkwell/85">
                The first StrongPath guides focus on the questions people ask first: what is
                happening, what works, how to start, and how to help someone you love begin.
              </p>
            </div>
            <div className="grid border-t border-inkwell">
              {publishingAnchors.map((anchor, index) => (
                <div key={anchor} className="grid grid-cols-[52px_1fr] border-b border-inkwell py-18">
                  <p className="font-utility text-caption leading-caption text-inkwell/60">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <p className="font-display text-[30px] font-normal leading-[1.12]">{anchor}</p>
                </div>
              ))}
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
              Get the first articles as they publish: muscle loss, resistance training, protein,
              recovery, and how families can help a parent begin without pressure.
            </p>
            <div className="mt-30">
              <EmailForm source="homepage_public_polish" />
            </div>
            <p className="mx-auto mt-30 max-w-[620px] font-utility text-caption leading-caption text-inkwell/70">
              Educational content only. StrongPath does not diagnose, treat, cure, or replace care
              from your physician, physical therapist, or other qualified professional.
            </p>
          </div>
        </div>
      </section>
      </main>
    </>
  )
}
