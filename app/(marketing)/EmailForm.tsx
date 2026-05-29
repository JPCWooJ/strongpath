'use client'

import { useState } from 'react'

export function EmailForm({ dark = false, source = 'unknown' }: { dark?: boolean; source?: string }) {
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
      <p className={`font-body text-[17px] font-medium leading-body ${dark ? 'text-[#f0ebdd]' : 'text-near-black'}`}>
        You&apos;re on the list. We&apos;ll be in touch.
      </p>
    )
  }

  if (dark) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col items-stretch gap-8 sm:flex-row sm:items-center sm:justify-center">
        <label htmlFor="email-input-dark" className="sr-only">
          Email address
        </label>
        <input
          id="email-input-dark"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="w-full rounded-[40px] border border-[#f0ebdd] bg-[#f0ebdd] px-16 py-12 font-utility text-[16px] font-medium leading-none text-[#302f2c] placeholder:text-[#302f2c]/60 focus:outline-none sm:w-auto sm:min-w-[280px]"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-[40px] border-0 bg-[#ffb801] px-24 py-12 font-utility text-[16px] font-semibold leading-none text-[#302f2c] transition-colors hover:bg-[#e5a501] disabled:opacity-60"
        >
          {status === 'loading' ? 'Submitting...' : 'Notify me'}
        </button>
        {status === 'error' && (
          <p role="alert" className="mt-2 font-utility text-caption leading-caption text-[#f0ebdd]/80 sm:col-span-2">
            {errorMsg}
          </p>
        )}
      </form>
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
        className="w-full border border-near-black bg-transparent px-18 py-10 font-body text-[17px] font-medium leading-none text-near-black placeholder:text-near-black/60 focus:outline-none sm:w-72"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="border border-near-black bg-transparent px-18 py-10 font-body text-[16px] font-medium leading-none text-near-black transition-colors hover:bg-near-black hover:text-warm-white disabled:opacity-60"
      >
        {status === 'loading' ? 'Submitting...' : 'Notify me'}
      </button>
      {status === 'error' && (
        <p role="alert" className="mt-2 font-utility text-caption leading-caption text-near-black sm:col-span-2">
          {errorMsg}
        </p>
      )}
    </form>
  )
}
