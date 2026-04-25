'use client'

import dynamic from 'next/dynamic'
import config from '../../../sanity.config'

// ssr: false ensures the Sanity Studio bundle (which calls createContext at
// module init) is never executed server-side during build or SSR.
const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
)

export function StudioWrapper() {
  return <NextStudio config={config} />
}
