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
        <div className="relative isolate max-w-[780px] pb-2 pr-18">
          <span
            aria-hidden="true"
            className="absolute -left-14 top-3 -z-10 h-[46px] w-[calc(100%+28px)] border-l-[6px] border-muted-teal bg-muted-teal/42 md:h-[58px]"
          />
          <Link
            href="/"
            className="font-display text-[42px] font-normal leading-none text-near-black md:text-[56px]"
          >
            StrongPath
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
