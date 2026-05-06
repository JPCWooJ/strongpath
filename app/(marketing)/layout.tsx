import { SiteFooter } from '@/components/marketing/SiteFooter'
import { SiteHeader } from '@/components/marketing/SiteHeader'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sp-page-shell">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )
}
