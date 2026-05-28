import { FTCDisclosure } from '@/components/FTCDisclosure'

export function SiteFooter() {
  return (
    <footer className="border-t border-near-black bg-warm-white">
      <div className="sp-container grid gap-30 py-40 text-near-black md:grid-cols-[1.12fr_0.88fr_0.88fr]">
        <div>
          <p className="inline-block rounded-links bg-[#302f2c] px-14 py-8 font-display text-[32px] leading-none text-[#f0ebdd]">
            StrongPath<sup className="text-[0.38em] align-super opacity-60">®</sup>
          </p>
          <p className="mt-18 font-utility text-caption leading-caption text-near-black/75">
            Practical strength guidance for adults, families, and clinicians who want people to
            stay strong, active, and independent longer.
          </p>
        </div>
        <div>
          <p className="font-display text-[22px] leading-none">For real life</p>
          <p className="mt-18 font-utility text-caption leading-caption text-near-black/75">
            Strength training, protein, recovery, and family conversations made easier to begin.
          </p>
        </div>
        <div>
          <p className="font-display text-[22px] leading-none">Notice</p>
          <p className="mt-18 font-utility text-caption leading-caption text-near-black/75">
            Informational and educational only. Consult your physician before beginning any new
            exercise or supplement program.
          </p>
          <div className="mt-12">
            <FTCDisclosure />
          </div>
        </div>
      </div>
    </footer>
  )
}
