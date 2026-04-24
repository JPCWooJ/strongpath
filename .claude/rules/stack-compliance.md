# stack-compliance.md

**Claude Code rule file. Loaded at the start of every session on the `strongpath` repo.**

Enforces the canonical tech stack from `STACK.md`. Stack choices are portfolio-wide decisions, not per-project preferences. Adding a new dependency, swapping a library, or introducing a competing tool requires a written entry in `docs/decisions.md` and explicit founder approval.

Full stack rationale lives in `STACK.md` (OneDrive). This file is the enforcement surface.

---

## 1. The approved stack

Use these and only these for the layers they cover:

| Layer | Approved tool | Notes |
|---|---|---|
| Framework | **Next.js 14 App Router + TypeScript 5** | App Router, not Pages Router. Strict mode on. |
| Styling | **Tailwind CSS 3** | Utility classes only. No custom CSS files. No CSS-in-JS. |
| CMS | **Sanity 3** | GROQ queries live in `lib/sanity.ts`. |
| Database + Auth | **Supabase** | Single client in `lib/supabase.ts`. |
| AI | **Anthropic Claude API** (`@anthropic-ai/sdk`) | Model: `claude-sonnet-4-20250514`. Wrapper in `lib/ai.ts`. |
| Email — transactional | **Resend** | Wrapper in `lib/email.ts`. |
| Email — marketing | **Klaviyo** | Same `lib/email.ts` file, separate functions. |
| Payments | **Stripe** | Wrapper in `lib/stripe.ts`. |
| Errors | **Sentry** | Auto-configured via Sentry's Next.js integration. |
| Analytics | **GA4 + Vercel Analytics** | Both, via `lib/analytics.ts`. |
| Hosting | **Vercel** | Production deploys from `main`. |

---

## 2. Explicitly forbidden

These come up often enough to call out by name:

- **OpenAI SDK (`openai` package).** Never. The platform AI provider is Anthropic. If you see an OpenAI import anywhere in the repo, remove it and use `lib/ai.ts` instead.
- **Mailchimp, ConvertKit, ActiveCampaign, Beehiiv, Substack.** Marketing email is Klaviyo only.
- **Auth0, Clerk, NextAuth.** Auth is Supabase.
- **MongoDB, Firebase, Prisma+Postgres direct.** Database is Supabase (Postgres underneath).
- **styled-components, Emotion, CSS Modules, SCSS.** Styling is Tailwind utility classes only.
- **Pages Router (`pages/` directory).** App Router (`app/` directory) only.
- **JavaScript (`.js`, `.jsx`).** TypeScript only. Every new file is `.ts` or `.tsx`.

---

## 3. Adding a new dependency

Before running `npm install <anything>`:

1. Check if one of the approved tools already covers the need. Most of the time, it does.
2. If the new dependency is small, well-maintained, and covers a clear gap (utilities like `date-fns`, `zod`, `clsx`), it's usually fine — but still document it in `docs/decisions.md` with a one-line reason.
3. If the new dependency competes with or replaces an approved tool (a different AI SDK, a different email client, a different CMS), **stop.** Do not install. Ask the founder. This is a stack decision, not an implementation choice.
4. When adding any dependency, prefer the smallest, most actively-maintained option. Check last publish date, weekly downloads, and open issue count before installing.

---

## 4. The library wrapper pattern

Every third-party service integration goes through a single wrapper file in `lib/`, not scattered imports across route handlers and components. This is how we keep vendor swaps manageable and testing sane.

- `lib/ai.ts` — all Anthropic Claude API calls.
- `lib/sanity.ts` — all Sanity GROQ queries.
- `lib/supabase.ts` — all Supabase client usage.
- `lib/email.ts` — all Resend and Klaviyo calls.
- `lib/stripe.ts` — all Stripe API calls.
- `lib/analytics.ts` — all GA4 and Vercel Analytics calls.

If a file outside `lib/` imports directly from an SDK (e.g., `import Anthropic from '@anthropic-ai/sdk'` inside a route handler), that's a stack-compliance violation — move the logic into the wrapper and import from the wrapper.

See `BEST_PRACTICES.md` §BP-05 for the wrapper pattern template.

---

## 5. Environment variables

Every secret lives in `.env.local` (local) and Vercel environment variables (production). Never in code, never in commit history, never in chat transcripts. Add every required env var to `.env.local.example` with an empty value so onboarding is documented.

If you encounter a hardcoded key or URL in source code, stop and flag it. Do not "just fix it" without flagging — the question of whether the key has been exposed is more important than the fix.

---

## 6. When the stack is wrong for the task

Sometimes the canonical stack genuinely doesn't fit a task. When that happens:

1. Say so explicitly. Don't silently install a competing tool.
2. Write a proposed alternative in the plan (plan mode is default — this is part of the plan).
3. The founder decides. If approved, the decision goes in `docs/decisions.md` with the reasoning.
4. If not approved, find a way to solve the problem with the approved stack.

Stack deviations are allowed. Silent stack deviations are not.
