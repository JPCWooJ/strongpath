import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Research' },
  { href: '/waitlist', label: 'Waitlist' },
]

export function SiteHeader() {
  return (
    <header className="border-b border-inkwell bg-parchment">
      <div className="sp-container border-b border-inkwell/35 py-8">
        <div className="flex flex-wrap items-center justify-between gap-8 font-utility text-caption leading-caption text-inkwell/65">
          <p>Evidence-first strength publication</p>
          <p>Muscle loss / resistance training / healthy aging</p>
        </div>
      </div>
      <div className="sp-container flex min-h-[108px] flex-col justify-center gap-18 py-18 md:flex-row md:items-end md:justify-between">
        <Link href="/" className="group">
          <p className="font-display text-[46px] font-normal leading-none text-inkwell md:text-[62px]">
            StrongPath
          </p>
          <p className="mt-8 max-w-[460px] font-utility text-caption leading-caption text-inkwell/70">
            Strength, independence, and the research between them.
          </p>
        </Link>

        <nav aria-label="Primary navigation" className="flex items-center gap-8 self-start md:self-end">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-transparent px-4 py-8 font-utility text-caption leading-caption text-inkwell/75 transition-colors hover:border-inkwell hover:text-inkwell focus-visible:border-inkwell"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
