import type { Metadata } from 'next'
import { EmailForm } from '../EmailForm'

export const metadata: Metadata = {
  title: 'Get Practical Strength Guidance — StrongPath',
  description: 'Receive careful notes on strength, muscle loss, recovery, and helping a parent begin.',
  robots: { index: false, follow: false },
}

export default function WaitlistPage() {
  return (
    <main className="max-w-xl mx-auto px-6 py-24 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Get practical strength guidance.</h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-10">
        Receive careful notes on muscle loss, strength training, recovery, protein, and helping a
        parent begin without pressure.
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
