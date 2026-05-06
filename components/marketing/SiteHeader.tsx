import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Research' },
  { href: '/waitlist', label: 'Waitlist' },
]

export function SiteHeader() {
  return (
    <header className="border-b border-inkwell/30 bg-parchment/90">
      <div className="sp-container flex min-h-[76px] items-center justify-between gap-30 py-12">
        <Link href="/" className="font-display text-[22px] font-normal leading-none text-inkwell">
          StrongPath
        </Link>

        <nav aria-label="Primary navigation" className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-links border border-transparent px-14 py-8 font-display text-[16px] font-normal leading-none text-inkwell transition-colors hover:border-inkwell focus-visible:border-inkwell"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
