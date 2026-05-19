import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { StarterPlanGenerator } from './StarterPlanGenerator'

export const metadata: Metadata = buildMetadata({
  title: 'StrongPath Starter Plan Generator',
  description:
    'Answer a short intake and get a conservative 2-week educational strength starter plan for yourself or a parent.',
  path: '/starter-plan',
})

export default function StarterPlanPage() {
  return (
    <main className="bg-parchment">
      <section className="border-b border-[#2E6171]/24 bg-[#FAF8F5]">
        <div className="sp-container py-24 md:py-36">
          <p className="font-utility text-[13px] leading-none text-[#2E6171]">StrongPath Starter Plan</p>
          <h1 className="mt-10 max-w-[920px] font-display text-[48px] font-normal leading-[1.01] text-[#0B2545] md:text-[74px] md:leading-[0.98]">
            Get a simple 2-week strength starting point.
          </h1>
          <p className="mt-16 max-w-[700px] font-body text-[18px] leading-[1.55] text-[#1A1D24]/80 md:text-[21px]">
            Answer a short intake for yourself or a parent. You will see a useful preview first,
            then unlock a conservative educational starter plan with related StrongPath articles
            and equipment suggestions.
          </p>
        </div>
      </section>

      <section className="sp-container py-24 md:py-34">
        <StarterPlanGenerator />
      </section>
    </main>
  )
}
