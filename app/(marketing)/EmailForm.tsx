'use client'

import { useState } from 'react'

export function EmailForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        const data = await res.json()
        setErrorMsg(data?.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className={dark ? 'text-green-400 font-medium' : 'text-green-700 font-medium'}>
        You&apos;re on the list. We&apos;ll be in touch.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
      <label htmlFor="email-input" className="sr-only">
        Email address
      </label>
      <input
        id="email-input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className={`px-4 py-3 rounded text-base w-full sm:w-72 ${
          dark
            ? 'bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-gray-400'
            : 'bg-white text-gray-900 border border-gray-300 focus:outline-none focus:border-gray-500'
        }`}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`px-6 py-3 rounded text-base font-semibold transition-colors disabled:opacity-60 ${
          dark
            ? 'bg-white text-gray-900 hover:bg-gray-200'
            : 'bg-gray-900 text-white hover:bg-gray-700'
        }`}
      >
        {status === 'loading' ? 'Submitting…' : 'Notify me'}
      </button>
      {status === 'error' && (
        <p role="alert" className="text-red-400 text-sm mt-2 sm:col-span-2">
          {errorMsg}
        </p>
      )}
    </form>
  )
}
