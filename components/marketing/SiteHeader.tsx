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
    <header className="border-b border-inkwell/60 bg-parchment">
      <div className="sp-container border-b border-inkwell/18 py-4">
        <div className="flex flex-wrap items-center justify-between gap-x-28 gap-y-6 font-utility text-caption leading-caption text-inkwell/58">
          <p>Strength for family, freedom, and daily life</p>
          <p>For adults, families, and clinicians</p>
        </div>
      </div>
      <div className="sp-container flex min-h-[96px] flex-col justify-center gap-12 py-14 md:min-h-[104px] md:flex-row md:items-end md:justify-between md:py-16">
        <div className="relative isolate max-w-[780px] pb-2 pr-18">
          <span
            aria-hidden="true"
            className="absolute -left-14 top-3 -z-10 h-[46px] w-[calc(100%+28px)] border-l-[6px] border-verdigris bg-verdigris-wash/42 md:h-[58px]"
          />
          <Link
            href="/"
            className="font-display text-[42px] font-normal leading-none text-inkwell md:text-[56px]"
          >
            StrongPath
          </Link>
          <p className="mt-6 max-w-[580px] border-t border-inkwell/42 pt-5 font-utility text-[15px] font-medium leading-[1.22] text-inkwell/82">
            Stay strong for the people you love and the days you want to keep.
          </p>
        </div>

        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap items-center gap-x-16 gap-y-8 border-t border-inkwell/18 pt-8 self-stretch md:self-end md:border-t-0 md:pt-0"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.primary
                  ? 'inline-flex min-h-10 items-center justify-center border border-inkwell bg-inkwell px-18 py-10 font-utility text-[14px] font-medium leading-none text-parchment transition-colors hover:bg-transparent hover:text-inkwell focus-visible:bg-transparent focus-visible:text-inkwell'
                  : 'border-b border-transparent py-4 font-utility text-[14px] font-medium leading-none text-inkwell/78 transition-colors hover:border-inkwell/50 hover:text-inkwell focus-visible:border-inkwell'
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
