// FTC-required affiliate disclosure. Render above the fold on every page that uses AmazonLink.
// Copy must match BRAND.md §11 — verify against that document before launch.
export function FTCDisclosure() {
  return (
    <div className="border-b border-inkwell/30 bg-parchment">
      <p className="sp-container py-8 text-left font-utility text-caption leading-caption text-inkwell/70">
        Affiliate disclosure: as an Amazon Associate, StrongPath earns from qualifying purchases at
        no additional cost to you.
      </p>
    </div>
  )
}
