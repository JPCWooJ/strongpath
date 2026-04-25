import { NextRequest, NextResponse } from 'next/server'
import { subscribeToList, KlaviyoError } from '@/lib/email'

export async function POST(request: NextRequest) {
  let email: string | undefined
  let source: string | undefined

  try {
    const body = await request.json()
    email = body?.email
    source = body?.source
  } catch {
    return NextResponse.json({ error: 'Valid email required.' }, { status: 400 })
  }

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required.' }, { status: 400 })
  }

  try {
    await subscribeToList({ email, source })
    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof Error && err.message.includes('is not set')) {
      console.error('[subscribe] Configuration error:', err.message)
      return NextResponse.json(
        { error: 'Service configuration error. Please contact support.' },
        { status: 500 },
      )
    }
    if (err instanceof KlaviyoError) {
      console.error('[subscribe] Klaviyo error:', err.message)
    } else {
      console.error(
        '[subscribe] Network error:',
        err instanceof Error ? err.message : String(err),
      )
    }
    return NextResponse.json(
      { error: 'Unable to subscribe at this time. Please try again.' },
      { status: 502 },
    )
  }
}
