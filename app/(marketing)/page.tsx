import type { Metadata } from 'next'
import Link from 'next/link'
import { AmazonLink } from '@/components/AmazonLink'
import { FTCDisclosure } from '@/components/FTCDisclosure'
import { EmailForm } from './EmailForm'

export const metadata: Metadata = {
  title: 'StrongPath - The strength publication for adults 55+',
  description:
    'StrongPath is an evidence-based strength platform for adults and families who refuse to treat muscle loss as inevitable.',
  openGraph: {
    title: 'StrongPath - The strength publication for adults 55+',
    description:
      'An institutional, research-grounded strength platform built from the authority of Choosing the StrongPath.',
    type: 'website',
  },
}

const evidenceNotes = [
  {
    label: 'Problem',
    title: 'Sarcopenia and dynapenia',
    copy:
      'The muscle-mass and strength-loss patterns behind stairs, groceries, balance, recovery, and independence.',
  },
  {
    label: 'Mechanism',
    title: 'Resistance, protein, recovery',
    copy:
      'The recurring research triad: progressive loading, adequate nutrition, and enough recovery to adapt.',
  },
  {
    label: 'Standard',
    title: 'Current sources over borrowed authority',
    copy:
      'The book gives StrongPath its category proof. Current articles cite current research directly.',
  },
]

const adviceFailures = [
  ['Walk more', 'Useful, but insufficient for preserving strength. Walking does not create the same progressive loading signal.'],
  ['Be careful', 'Often true, rarely actionable. Caution without protocol leaves people weaker and less confident.'],
  ['Eat more protein', 'Directionally right, but too vague for a reader trying to make a weekly plan.'],
  ['Try some weights', 'The right instinct, missing the sequence: start, load, recover, progress, repeat.'],
]

const pathways = [
  {
    label: 'For Margaret',
    title: 'You have noticed the stairs.',
    copy:
      'You are not broken. You are paying attention. StrongPath begins where the usual advice stops: with the research on what preserves capacity after 55.',
  },
  {
    label: 'For David',
    title: 'You want your parent to have more good days.',
    copy:
      'Not out of panic. Out of goodwill. The right resource should reduce the family’s cognitive load, protect a parent’s dignity, and offer a path that can actually be followed.',
  },
  {
    label: 'For Dr. Chen',
    title: 'You need a resource you can inspect.',
    copy:
      'A patient-facing platform should make modest claims, show its sources, disclose its commercial links, and never pretend to replace clinical care.',
  },
]

const publishingAnchors = [
  'What age-related muscle loss actually is',
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
                StrongPath / evidence-based strength / adults 55+ / families / clinical readers
              </p>
              <p className="font-utility text-caption leading-caption text-inkwell/70 md:text-right">
                Built from the category authority of{' '}
                <em>Choosing the StrongPath: Reversing the Downward Spiral of Aging</em>
              </p>
            </div>

            <div className="grid gap-60 pt-60 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <p className="sp-kicker mb-18 text-inkwell/70">The strength publication for the next decade of aging</p>
                <h1 className="max-w-[920px] font-display text-[58px] font-normal leading-[0.98] text-inkwell sm:text-[78px] lg:text-[104px]">
                  The research is clear. The execution has been missing.
                </h1>
                <p className="mt-40 max-w-[760px] font-body text-[22px] font-medium leading-[1.42] text-inkwell/85">
                  StrongPath is the evidence-based strength platform for adults who refuse to
                  accept muscle loss as inevitable, and for families trying to help a parent stay
                  capable without turning care into pressure.
                </p>
              </div>

              <aside className="border border-inkwell bg-parchment p-18 lg:mt-20">
                <div className="border border-inkwell p-24 md:p-30">
                  <p className="font-utility text-caption leading-caption text-inkwell/65">Authority object</p>
                  <div className="mt-30 min-h-[390px] border border-inkwell p-24 flex flex-col justify-between">
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
                  The book establishes StrongPath&apos;s right to speak. The platform earns that right
                  every week by publishing current, sourced, practical guidance.
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
                    Follow the research
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
                The first sign is often not medical. It is ordinary.
              </h2>
            </div>
            <div className="py-60 lg:pl-40">
              <div className="grid gap-30">
                <p className="font-body text-[24px] font-medium leading-[1.38] text-inkwell">
                  A stair gets longer. A chair gets lower. A grocery bag starts requiring two
                  trips. A parent begins organizing the day around what feels safe.
                </p>
                <p className="sp-body text-inkwell/85">
                  Those moments are easy to dismiss because they arrive quietly. StrongPath treats
                  them as data. Not panic, not fate, and not a reason to buy whatever the internet
                  is selling this month. A signal that the strength conversation needs to become
                  specific.
                </p>
                <p className="sp-body text-inkwell/85">
                  Our reader is intelligent, skeptical, and already tired of being told to “stay
                  active.” They need the missing middle: the research translated into a protocol
                  they can understand, discuss with a clinician, and begin carefully.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-inkwell">
          <div className="sp-container py-60">
            <div className="grid gap-40 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="sp-kicker mb-18 text-inkwell/70">Why ordinary advice fails</p>
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
              <p className="sp-kicker mb-18 text-inkwell/70">The StrongPath standard</p>
              <h2 className="font-display text-[50px] font-normal leading-[1.04] md:text-[78px]">
                Book credibility first. Current evidence everywhere after.
              </h2>
              <p className="mx-auto mt-30 max-w-[760px] font-body text-[21px] font-medium leading-[1.45] text-inkwell/85">
                <em>Choosing the StrongPath: Reversing the Downward Spiral of Aging</em> is the
                category proof. It is not a substitute for current sourcing. The homepage says that
                plainly because a serious health publication should not hide how its authority
                works.
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
                <p className="sp-kicker mb-18 text-inkwell/70">Reader pathways</p>
                <h2 className="font-display text-[44px] font-normal leading-[1.08] md:text-[64px]">
                  Three readers. One standard of proof.
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
              <p className="sp-kicker mb-18 text-inkwell/70">Caregiver frame</p>
              <h2 className="font-display text-[42px] font-normal leading-[1.08] md:text-[62px]">
                The ask is not “fix my parent.” The ask is “help them keep more good days.”
              </h2>
            </div>
            <div className="py-60 lg:pl-40">
              <p className="font-body text-[24px] font-medium leading-[1.38] text-inkwell">
                The caregiver reader is not shopping from fear. He is acting from goodwill.
              </p>
              <p className="sp-body mt-24 text-inkwell/85">
                StrongPath should feel like something he can put in a parent&apos;s hands without
                insulting their dignity. Direct enough to be useful. Warm enough to be received.
                Serious enough that a skeptical family member, physician, or physical therapist can
                inspect it without embarrassment.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-inkwell">
          <div className="sp-container py-60">
            <div className="grid gap-40 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="sp-kicker mb-18 text-inkwell/70">The first editorial map</p>
                <h2 className="font-display text-[44px] font-normal leading-[1.08] md:text-[64px]">
                  The library starts where trust is built.
                </h2>
                <p className="sp-body mt-24 text-inkwell/85">
                  The first StrongPath articles follow the existing publishing architecture:
                  problem, execution, caregiver guidance, nutrition, and the book page as authority
                  hub.
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
              <p className="sp-kicker mb-18 text-inkwell/70">Follow the work</p>
              <h2 className="font-display text-[48px] font-normal leading-[1.06] md:text-[72px]">
                Join before the library opens.
              </h2>
              <p className="mx-auto mt-30 max-w-[680px] sp-body text-inkwell/85">
                Get the first articles as they publish: muscle loss, resistance training, protein,
                recovery, and how families can help a parent begin without pressure.
              </p>
              <div className="mt-30">
                <EmailForm source="homepage_editorial_escalation" />
              </div>
              <p className="mx-auto mt-30 max-w-[620px] font-utility text-caption leading-caption text-inkwell/70">
                Educational content only. StrongPath does not diagnose, treat, cure, or replace
                care from your physician, physical therapist, or other qualified professional.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
