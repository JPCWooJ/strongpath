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
      <div className="sp-container flex min-h-[116px] flex-col justify-center gap-18 py-18 md:flex-row md:items-end md:justify-between">
        <Link href="/" className="group relative isolate inline-block pb-2 pr-24">
          <span
            aria-hidden="true"
            className="absolute -left-14 top-5 -z-10 h-[56px] w-[calc(100%+28px)] border-l-[6px] border-verdigris bg-verdigris-wash/55 md:h-[70px]"
          />
          <p className="font-display text-[46px] font-normal leading-none text-inkwell md:text-[62px]">
            StrongPath
          </p>
          <p className="mt-10 inline-block max-w-[560px] border-y border-inkwell/40 py-6 font-utility text-[15px] leading-[1.25] text-inkwell/78">
            Strength, independence, and the research between them
          </p>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap items-center gap-10 self-start md:self-end"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border border-inkwell/30 px-12 py-10 font-utility text-[15px] leading-none text-inkwell/82 transition-colors hover:border-inkwell hover:bg-inkwell hover:text-parchment focus-visible:border-inkwell"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
