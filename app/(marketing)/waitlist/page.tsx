import type { Metadata } from 'next'
import { EmailForm } from '../EmailForm'

export const metadata: Metadata = {
  title: 'Join the Waitlist — StrongPath',
  description: 'Be the first to know when StrongPath launches.',
  robots: { index: false, follow: false },
}

export default function WaitlistPage() {
  return (
    <main className="bg-parchment">
      <section className="sp-container py-[84px]">
        <div className="mx-auto max-w-[760px] border-y border-navy/35 py-44 text-center">
          <p className="sp-kicker mb-18 text-gold">StrongPath waitlist</p>
          <h1 className="font-display text-[54px] font-normal leading-[0.98] text-navy md:text-[86px]">
            Receive the first guides.
          </h1>
          <p className="mx-auto mt-30 max-w-[640px] font-body text-[22px] font-medium leading-[1.48] text-inkwell/86">
            StrongPath is an evidence-based strength platform launching soon. Enter your email to
            receive the first articles and publication updates.
          </p>

          <div className="mt-34">
            <EmailForm source="waitlist" />
          </div>

          <p className="mx-auto mt-34 max-w-[620px] font-utility text-caption leading-caption text-inkwell/65">
            This content is for informational and educational purposes only. It does not constitute
            medical advice and is not a substitute for professional medical consultation. Always
            consult your physician before beginning any new exercise or supplement program.
          </p>
        </div>
      </section>
    </main>
  )
}
