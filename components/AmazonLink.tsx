import type { ReactNode } from 'react'

type Props = {
  asin: string
  children: ReactNode
  className?: string
}

// The stron02-20 tag is hardcoded here and nowhere else.
// Use this component for every Amazon link in the repo — never a raw <a href="amazon.com">.
export function AmazonLink({ asin, children, className }: Props) {
  return (
    <a
      href={`https://www.amazon.com/dp/${asin}?tag=stron02-20`}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={className}
    >
      {children}
    </a>
  )
}
