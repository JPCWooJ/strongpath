import Link from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

type GhostLinkProps = {
  href: string
  children: ReactNode
  className?: string
}

export function GhostLink({ href, children, className = '' }: GhostLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-10 items-center justify-center border border-gold px-18 py-10 font-body text-[16px] font-medium leading-none text-navy transition-colors hover:bg-navy hover:text-paper focus-visible:bg-navy focus-visible:text-paper ${className}`}
    >
      {children}
    </Link>
  )
}

type GhostButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
}

export function GhostButton({ children, className = '', ...props }: GhostButtonProps) {
  return (
    <a
      className={`inline-flex min-h-10 items-center justify-center border border-gold px-18 py-10 font-body text-[16px] font-medium leading-none text-navy transition-colors hover:bg-navy hover:text-paper focus-visible:bg-navy focus-visible:text-paper ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
