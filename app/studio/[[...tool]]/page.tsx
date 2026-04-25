import type { Metadata, Viewport } from 'next'
import { StudioWrapper } from './StudioWrapper'

// Hardcoded — avoids importing next-sanity/studio on the server,
// which calls createContext at module init and breaks the production build.
export const metadata: Metadata = {
  title: 'Sanity Studio — StrongPath',
  robots: { index: false, follow: false },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const dynamic = 'force-dynamic'

export default function StudioPage() {
  return <StudioWrapper />
}
