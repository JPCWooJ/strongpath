import type { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  className?: string
  variant?: 'default' | 'ruled' | 'narrow'
}

export function Section({ children, className = '', variant = 'default' }: SectionProps) {
  const variantClass =
    variant === 'ruled'
      ? 'border-y border-inkwell/30'
      : variant === 'narrow'
        ? 'py-60'
        : ''

  return <section className={`sp-section ${variantClass} ${className}`}>{children}</section>
}

export function EditorialContainer({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`sp-editorial ${className}`}>{children}</div>
}

export function SiteContainer({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`sp-container ${className}`}>{children}</div>
}
