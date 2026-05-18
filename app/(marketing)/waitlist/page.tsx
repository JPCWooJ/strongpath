import type { Metadata } from 'next'
import { EmailForm } from '../EmailForm'

export const metadata: Metadata = {
  title: 'Join the Waitlist — StrongPath',
  description: 'Get practical notes from StrongPath when they are ready.',
  robots: { index: false, follow: false },
}

export default function WaitlistPage() {
  return (
    <main className="max-w-xl mx-auto px-6 py-24 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Join the waitlist.</h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-10">
        Get practical notes on muscle loss, lifting, protein, recovery, and helping a parent begin
        without pressure.
      </p>

      <EmailForm source="waitlist" />

      <p className="text-sm text-gray-400 italic leading-relaxed mt-12">
        This content is for informational and educational purposes only. It does not constitute
        medical advice and is not a substitute for professional medical consultation. Always consult
        your physician before beginning any new exercise or supplement program.
      </p>
    </main>
  )
}
