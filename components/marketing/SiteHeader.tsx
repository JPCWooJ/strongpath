import Link from 'next/link'

const navItems: Array<{ href: string; label: string; primary?: boolean }> = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Articles' },
  { href: '/blog/tags/sarcopenia', label: 'Sarcopenia' },
  { href: '/blog/tags/resistance-training', label: 'Strength' },
  { href: '/starter-plan', label: 'Join StrongPath', primary: true },
]

export function SiteHeader() {
  return (
    <header className="border-b border-near-black/60 bg-warm-white">
      <div className="sp-container flex min-h-[96px] flex-col justify-center gap-12 py-14 md:min-h-[104px] md:flex-row md:items-end md:justify-between md:py-16">
        <div className="max-w-[780px]">
          <Link
            href="/"
            className="inline-block rounded-links bg-[#302f2c] px-14 py-8 font-display text-[48px] font-semibold leading-none tracking-[-0.02em] text-[#f0ebdd] md:text-[64px]"
          >
            StrongPath<sup className="text-[0.38em] align-super opacity-60">®</sup>
          </Link>
        </div>

        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap items-center gap-x-16 gap-y-8 border-t border-near-black/18 pt-8 self-stretch md:self-end md:border-t-0 md:pt-0"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.primary
                  ? 'inline-flex min-h-10 items-center justify-center border border-near-black bg-near-black px-18 py-10 font-utility text-[14px] font-medium leading-none text-warm-white transition-colors hover:bg-transparent hover:text-near-black focus-visible:bg-transparent focus-visible:text-near-black'
                  : 'border-b border-transparent py-4 font-utility text-[14px] font-medium leading-none text-near-black/78 transition-colors hover:border-near-black/50 hover:text-near-black focus-visible:border-near-black'
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
