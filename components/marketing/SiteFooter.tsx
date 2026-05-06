export function SiteFooter() {
  return (
    <footer className="border-t border-inkwell bg-parchment">
      <div className="sp-container grid gap-30 py-40 text-inkwell md:grid-cols-[1.12fr_0.88fr_0.88fr]">
        <div>
          <p className="font-display text-[32px] leading-none">StrongPath</p>
          <p className="mt-18 font-utility text-caption leading-caption text-inkwell/75">
            Evidence-based strength education for adults 55+, families, and clinicians evaluating
            serious patient-facing resources.
          </p>
        </div>
        <div>
          <p className="font-display text-[22px] leading-none">Editorial standard</p>
          <p className="mt-18 font-utility text-caption leading-caption text-inkwell/75">
            Current research, named sources, modest claims, and no performative health marketing.
          </p>
        </div>
        <div>
          <p className="font-display text-[22px] leading-none">Medical notice</p>
          <p className="mt-18 font-utility text-caption leading-caption text-inkwell/75">
            Informational and educational only. Consult your physician before beginning any new
            exercise or supplement program.
          </p>
        </div>
      </div>
    </footer>
  )
}
