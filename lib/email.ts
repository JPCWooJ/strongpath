// Klaviyo v3 subscription endpoint.
// Despite the "bulk" naming, profile-subscription-bulk-create-jobs is the only
// active v3 endpoint for profile subscription with consent. POST /api/profile-subscriptions/
// returns 404. Empirically verified against revision 2026-04-15 on 2026-04-25.
// All Klaviyo calls go through this file — do not import fetch/Klaviyo elsewhere.
const KLAVIYO_API_URL =
  'https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/'
const KLAVIYO_REVISION = '2026-04-15'

export class KlaviyoError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message)
    this.name = 'KlaviyoError'
  }
}

export async function subscribeToList(opts: {
  email: string
  source?: string
}): Promise<void> {
  const apiKey = process.env.KLAVIYO_API_KEY
  const listId = process.env.KLAVIYO_LIST_ID

  if (!apiKey) throw new Error('KLAVIYO_API_KEY is not set')
  if (!listId) throw new Error('KLAVIYO_LIST_ID is not set')

  const payload = {
    data: {
      type: 'profile-subscription-bulk-create-job',
      attributes: {
        profiles: {
          data: [
            {
              type: 'profile',
              attributes: {
                email: opts.email,
                properties: {
                  source: opts.source ?? 'unknown',
                },
                subscriptions: {
                  email: {
                    marketing: {
                      consent: 'SUBSCRIBED',
                    },
                  },
                },
              },
            },
          ],
        },
      },
      relationships: {
        list: {
          data: {
            type: 'list',
            id: listId,
          },
        },
      },
    },
  }

  let response: Response
  try {
    response = await fetch(KLAVIYO_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Klaviyo-API-Key ${apiKey}`,
        'Content-Type': 'application/json',
        revision: KLAVIYO_REVISION,
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })
  } catch (err) {
    throw new Error(
      `Klaviyo network error: ${err instanceof Error ? err.message : String(err)}`,
    )
  }

  if (!response.ok) {
    let detail = ''
    try {
      const json = await response.json()
      detail = JSON.stringify(json?.errors?.[0] ?? json)
    } catch {
      detail = await response.text().catch(() => '')
    }
    throw new KlaviyoError(
      response.status,
      `Klaviyo API error ${response.status}: ${detail}`,
    )
  }
}
