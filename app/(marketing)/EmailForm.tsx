'use client'

import { useState } from 'react'

export function EmailForm({ source = 'unknown' }: { dark?: boolean; source?: string }) {
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
        body: JSON.stringify({ email, source }),
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
      <p className="font-body text-[17px] font-medium leading-body text-inkwell">
        You&apos;re on the list. We&apos;ll be in touch.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-12 sm:flex-row">
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
        className="w-full border border-inkwell bg-transparent px-18 py-10 font-body text-[17px] font-medium leading-none text-inkwell placeholder:text-inkwell/60 focus:outline-none sm:w-72"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="border border-inkwell bg-transparent px-18 py-10 font-body text-[16px] font-medium leading-none text-inkwell transition-colors hover:bg-inkwell hover:text-parchment disabled:opacity-60"
      >
        {status === 'loading' ? 'Submitting...' : 'Notify me'}
      </button>
      {status === 'error' && (
        <p role="alert" className="mt-2 font-utility text-caption leading-caption text-inkwell sm:col-span-2">
          {errorMsg}
        </p>
      )}
    </form>
  )
}
