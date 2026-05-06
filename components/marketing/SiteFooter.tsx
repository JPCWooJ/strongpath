import { FTCDisclosure } from '@/components/FTCDisclosure'

export function SiteFooter() {
  return (
    <footer className="border-t border-inkwell bg-parchment">
      <div className="sp-container grid gap-30 py-40 text-inkwell md:grid-cols-[1.12fr_0.88fr_0.88fr]">
        <div>
          <p className="font-display text-[32px] leading-none">StrongPath</p>
          <p className="mt-18 font-utility text-caption leading-caption text-inkwell/75">
            Evidence-based strength education for adults 55+, families, and clinicians.
          </p>
        </div>
        <div>
          <p className="font-display text-[22px] leading-none">Our standard</p>
          <p className="mt-18 font-utility text-caption leading-caption text-inkwell/75">
            Current research. Plain language. No miracle claims.
          </p>
        </div>
        <div>
          <p className="font-display text-[22px] leading-none">Notice</p>
          <p className="mt-18 font-utility text-caption leading-caption text-inkwell/75">
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
