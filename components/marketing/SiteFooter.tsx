import { FTCDisclosure } from '@/components/FTCDisclosure'

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/55 bg-navy text-paper">
      <div className="sp-container grid gap-30 py-44 md:grid-cols-[1.12fr_0.88fr_0.88fr]">
        <div>
          <p className="font-display text-[42px] leading-none">StrongPath</p>
          <p className="mt-18 font-utility text-caption leading-caption text-paper/75">
            Evidence-based strength education for adults 55+, families, and clinicians.
          </p>
        </div>
        <div>
          <p className="font-display text-[24px] leading-none text-paper">Our standard</p>
          <p className="mt-18 font-utility text-caption leading-caption text-paper/75">
            Current research. Plain language. No miracle claims.
          </p>
        </div>
        <div>
          <p className="font-display text-[24px] leading-none text-paper">Notice</p>
          <p className="mt-18 font-utility text-caption leading-caption text-paper/75">
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
