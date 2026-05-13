import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Research' },
  { href: '/waitlist', label: 'Waitlist' },
]

export function SiteHeader() {
  return (
    <header className="border-b border-inkwell/60 bg-parchment">
      <div className="sp-container border-b border-inkwell/18 py-8">
        <div className="flex flex-wrap items-center justify-between gap-x-28 gap-y-6 font-utility text-caption leading-caption text-inkwell/58">
          <p>Evidence-first strength publication</p>
          <p>Muscle loss / resistance training / healthy aging</p>
        </div>
      </div>
      <div className="sp-container flex min-h-[138px] flex-col justify-center gap-24 py-26 md:min-h-[152px] md:flex-row md:items-end md:justify-between md:py-30">
        <div className="relative isolate max-w-[780px] pb-3 pr-20">
          <span
            aria-hidden="true"
            className="absolute -left-14 top-5 -z-10 h-[58px] w-[calc(100%+28px)] border-l-[6px] border-verdigris bg-verdigris-wash/42 md:h-[76px]"
          />
          <Link
            href="/"
            className="font-display text-[50px] font-normal leading-none text-inkwell md:text-[68px]"
          >
            StrongPath
          </Link>
          <p className="mt-12 max-w-[580px] border-t border-inkwell/35 pt-7 font-utility text-[15px] leading-[1.28] text-inkwell/72">
            Strength, independence, and the research between them
          </p>
        </div>

        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap items-center gap-x-24 gap-y-12 border-t border-inkwell/18 pt-12 self-stretch md:self-end md:border-t-0 md:pt-0"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-transparent py-5 font-utility text-[15px] leading-none text-inkwell/66 transition-colors hover:border-inkwell/45 hover:text-inkwell focus-visible:border-inkwell"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
