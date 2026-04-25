import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  let email: string | undefined

  try {
    const body = await request.json()
    email = body?.email
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
  }

  // Placeholder — real Klaviyo wiring ships in P0-04
  console.log('[subscribe] Email received:', email)

  return NextResponse.json({ success: true })
}
