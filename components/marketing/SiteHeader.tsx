import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Research' },
  { href: '/waitlist', label: 'Waitlist' },
]

export function SiteHeader() {
  return (
    <header className="border-b border-gold/55 bg-navy text-paper">
      <div className="sp-container border-b border-gold/30 py-8">
        <div className="flex flex-wrap items-center justify-between gap-8 font-utility text-[15px] font-medium leading-caption text-paper/86">
          <p>Strength that protects independence</p>
          <p>Research-led guidance for life after 55</p>
        </div>
      </div>
      <div className="sp-container flex min-h-[132px] flex-col justify-center gap-24 py-24 md:min-h-[142px] md:flex-row md:items-center md:justify-between">
        <div className="min-w-0 pb-2">
          <Link
            href="/"
            className="inline-flex max-w-full flex-col border border-gold/65 bg-parchment px-14 py-10 transition-colors hover:border-paper focus-visible:border-paper"
            aria-label="StrongPath home"
          >
            <Image
              src="/brand/strongpath-wordmark-blue.png"
              alt="StrongPath"
              width={650}
              height={178}
              priority
              className="h-auto w-[278px] sm:w-[344px] md:w-[388px]"
            />
            <span className="mt-7 h-px w-[88%] bg-[#00398e]/55" aria-hidden="true" />
          </Link>
          <p className="mt-10 max-w-[320px] font-utility text-[14px] leading-[1.3] text-paper/86 sm:max-w-[640px] sm:text-[17px]">
            Strength, independence, and the research between them
          </p>
        </div>

        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap items-center gap-10 self-start md:self-auto"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border border-paper/32 px-16 py-12 font-utility text-[15px] leading-none text-paper transition-colors hover:border-gold hover:bg-paper hover:text-navy focus-visible:border-gold sm:text-[16px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
