import type { Metadata } from 'next'
import Link from 'next/link'
import { EmailForm } from './EmailForm'

export const metadata: Metadata = {
  title: 'StrongPath — Strength for life.',
  description:
    'An evidence-based strength platform for adults who refuse to accept muscle loss as inevitable.',
  openGraph: {
    title: 'StrongPath — Strength for life.',
    description:
      'An evidence-based strength platform for adults who refuse to accept muscle loss as inevitable.',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">StrongPath</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            StrongPath is an evidence-based strength platform for adults who refuse to accept muscle
            loss as inevitable. Built on the framework from{' '}
            <em>
              Choosing the StrongPath: Reversing the Downward Spiral of Aging
            </em>{' '}
            (Bartlit, Droullard, Boppart, 2018).
          </p>
          <Link
            href="/waitlist"
            className="inline-block bg-gray-900 text-white text-base font-semibold px-8 py-4 rounded hover:bg-gray-700 transition-colors"
          >
            Join the Waitlist
          </Link>
        </div>
      </header>

      <main>
        {/* What is StrongPath */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Built on evidence, not hype.</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            StrongPath is a strength platform for adults who take muscle health seriously. Research
            suggests that consistent resistance training may help maintain lean muscle mass and
            functional strength over time. It is not a quick fix — it is a long-term practice
            grounded in evidence.
          </p>
        </section>

        {/* Book credibility placeholder */}
        <section className="bg-gray-50 border-y border-gray-100">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Anchored in peer-reviewed research.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-2">
              <em>
                Choosing the StrongPath: Reversing the Downward Spiral of Aging
              </em>{' '}
              (Fred Bartlit, Steven Droullard, Dr. Marni Boppart, ScD; 2018)
            </p>
            <p className="text-base text-gray-500">
              An Amazon bestseller in Aging, Weight Training, Exercise, and Longevity.
            </p>
          </div>
        </section>

        {/* Medical disclaimer */}
        <section className="max-w-3xl mx-auto px-6 py-10">
          <p className="text-sm text-gray-500 italic leading-relaxed">
            This content is for informational and educational purposes only. It does not constitute
            medical advice and is not a substitute for professional medical consultation. Always
            consult your physician before beginning any new exercise or supplement program.
          </p>
        </section>

        {/* Footer email capture */}
        <section className="bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto px-6 py-16 text-center">
            <h2 className="text-2xl font-bold mb-2">Stay informed.</h2>
            <p className="text-gray-400 mb-8">Get updates when StrongPath launches.</p>
            <EmailForm />
          </div>
        </section>
      </main>
    </>
  )
}
