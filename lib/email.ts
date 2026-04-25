// Klaviyo v3 endpoints — empirically verified 2026-04-25 against revision 2026-04-15:
//
//   POST /api/profile-subscription-bulk-create-jobs/
//     The only active v3 endpoint for subscribing a profile to a list with consent.
//     Despite the "bulk" naming, it handles single profiles.
//     /api/profile-subscriptions/ (the endpoint referenced in some docs) returns 404.
//     Limitation: does NOT accept arbitrary profile `properties` inline — those fields
//     are invalid on the nested profile object in this endpoint.
//
//   POST /api/profile-import/
//     Create-or-update profile. Accepts `properties` for custom attributes (201 new,
//     200 existing). Used as the second call to set source attribution.
//
// All Klaviyo calls go through this file — do not import fetch/Klaviyo elsewhere.

const KLAVIYO_BASE = 'https://a.klaviyo.com/api'
const KLAVIYO_REVISION = '2026-04-15'

function klaviyoHeaders(apiKey: string) {
  return {
    Authorization: `Klaviyo-API-Key ${apiKey}`,
    'Content-Type': 'application/json',
    revision: KLAVIYO_REVISION,
    Accept: 'application/json',
  }
}

export class KlaviyoError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message)
    this.name = 'KlaviyoError'
  }
}

async function throwOnKlaviyoError(response: Response, context: string): Promise<void> {
  if (response.ok) return
  let detail = ''
  try {
    const json = await response.json()
    detail = JSON.stringify(json?.errors?.[0] ?? json)
  } catch {
    detail = await response.text().catch(() => '')
  }
  throw new KlaviyoError(
    response.status,
    `Klaviyo ${context} error ${response.status}: ${detail}`,
  )
}

async function subscribeProfile(email: string, listId: string, apiKey: string): Promise<void> {
  let response: Response
  try {
    response = await fetch(`${KLAVIYO_BASE}/profile-subscription-bulk-create-jobs/`, {
      method: 'POST',
      headers: klaviyoHeaders(apiKey),
      body: JSON.stringify({
        data: {
          type: 'profile-subscription-bulk-create-job',
          attributes: {
            profiles: {
              data: [
                {
                  type: 'profile',
                  attributes: {
                    email,
                    subscriptions: {
                      email: { marketing: { consent: 'SUBSCRIBED' } },
                    },
                  },
                },
              ],
            },
          },
          relationships: {
            list: { data: { type: 'list', id: listId } },
          },
        },
      }),
    })
  } catch (err) {
    throw new Error(
      `Klaviyo network error (subscribe): ${err instanceof Error ? err.message : String(err)}`,
    )
  }
  await throwOnKlaviyoError(response, 'subscribe')
}

async function upsertProfileProperties(
  email: string,
  properties: Record<string, string>,
  apiKey: string,
): Promise<void> {
  const response = await fetch(`${KLAVIYO_BASE}/profile-import/`, {
    method: 'POST',
    headers: klaviyoHeaders(apiKey),
    body: JSON.stringify({
      data: {
        type: 'profile',
        attributes: { email, properties },
      },
    }),
  })
  await throwOnKlaviyoError(response, 'profile-import')
}

export async function subscribeToList(opts: {
  email: string
  source?: string
}): Promise<void> {
  const apiKey = process.env.KLAVIYO_API_KEY
  const listId = process.env.KLAVIYO_LIST_ID

  if (!apiKey) throw new Error('KLAVIYO_API_KEY is not set')
  if (!listId) throw new Error('KLAVIYO_LIST_ID is not set')

  // Primary: subscribe to list. Must succeed.
  await subscribeProfile(opts.email, listId, apiKey)

  // Secondary: set source property on profile. Best-effort — logs on failure
  // but does not roll back the subscription.
  if (opts.source) {
    try {
      await upsertProfileProperties(opts.email, { source: opts.source }, apiKey)
    } catch (err) {
      console.error(
        '[email] Failed to set profile properties:',
        err instanceof Error ? err.message : String(err),
      )
    }
  }
}
