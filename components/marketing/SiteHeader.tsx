import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Research' },
  { href: '/waitlist', label: 'Waitlist' },
]

export function SiteHeader() {
  return (
    <header className="border-b border-inkwell bg-parchment">
      <div className="sp-container flex min-h-[96px] flex-col justify-center gap-18 py-18 md:flex-row md:items-end md:justify-between">
        <div>
          <Link href="/" className="font-display text-[42px] font-normal leading-none text-inkwell md:text-[54px]">
            StrongPath
          </Link>
          <p className="mt-8 font-utility text-caption leading-caption text-inkwell/70">
            Strength, independence, and the research between them.
          </p>
        </div>

        <nav aria-label="Primary navigation" className="flex items-center gap-8 self-start md:self-end">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-links border border-transparent px-14 py-8 font-body text-[16px] font-medium leading-none text-inkwell transition-colors hover:border-inkwell focus-visible:border-inkwell"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
