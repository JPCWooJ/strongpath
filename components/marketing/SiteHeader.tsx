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
    <header className="border-b border-near-black/50 bg-warm-white">
      <div className="sp-container border-b border-near-black/16 py-4">
        <div className="flex flex-wrap items-center justify-between gap-x-28 gap-y-6 font-utility text-caption leading-caption text-near-black/62">
          <p>Strength for family, freedom, and daily life</p>
          <p>For adults, families, and clinicians</p>
        </div>
      </div>
      <div className="sp-container grid min-h-[104px] gap-12 py-12 md:min-h-[118px] md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-18 md:py-14">
        <div className="max-w-[780px] border-l-[5px] border-muted-teal pl-10 md:pl-12">
          <Link
            href="/"
            className="block font-display text-[44px] font-normal leading-none text-near-black md:text-[62px]"
          >
            StrongPath
          </Link>
          <p className="mt-5 max-w-[620px] border-t border-near-black/34 pt-5 font-utility text-[15px] font-medium leading-[1.25] text-near-black/78">
            Stay strong for the people you love and the days you want to keep.
          </p>
        </div>

        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap items-center gap-x-14 gap-y-8 border-t border-near-black/18 pt-8 md:self-end md:border-t-0 md:pt-0"
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
