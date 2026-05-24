# stack-compliance.md

**Claude Code rule file. Loaded at the start of every session on the `strongpath` repo.**

Enforces the approved StrongPath stack. Governance lives in `docs/governance/`; legacy stack context may exist in archived or operational references. Adding a new dependency, swapping a library, or introducing a competing tool requires a written entry in `docs/decisions.md` and explicit founder approval.

This file is the Claude Code enforcement surface and inherits from `docs/governance/`.

---

## 1. Active and approved stack

Use these active tools for the layers they cover:

### Active now

| Layer | Approved tool | Notes |
|---|---|---|
| Framework | **Next.js 14 App Router + TypeScript 5** | App Router, not Pages Router. Strict mode on. |
| Styling | **Tailwind CSS 3** | Utility classes only. No custom CSS files. No CSS-in-JS. |
| CMS | **Sanity 3** | GROQ queries live in `lib/sanity.ts`. |
| AI | **Anthropic Claude API** (`@anthropic-ai/sdk`) | Model: `claude-sonnet-4-5`. Wrapper in `lib/ai.ts`. |
| Email - marketing | **Klaviyo** | Wrapper in `lib/email.ts`. |
| Commerce | **Amazon Associates** | Affiliate links use `stron02-20`. |
| Analytics | **Vercel Analytics** | Active analytics package. |
| Hosting | **Vercel** | Production deploys from `main`. |

### Approved when needed

Approved for future use, but do not install until the scoped task requires them:

| Layer | Approved tool | Notes |
|---|---|---|
| Database + Auth | **Supabase** | Single client in `lib/supabase.ts` when introduced. |
| Email - transactional | **Resend** | Wrapper in `lib/email.ts` when introduced. |
| Payments | **Stripe** | Wrapper in `lib/stripe.ts` when introduced. |
| Errors | **Sentry** | Use Sentry's Next.js integration when introduced. |
| Analytics | **GA4** | Wrapper in `lib/analytics.ts` when introduced. |

Approved when needed does not mean install by default. Add these tools only when the scoped task requires them.

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
2. If the new dependency is small, well-maintained, and covers a clear gap (utilities like `date-fns`, `zod`, `clsx`), it's usually fine - but still document it in `docs/decisions.md` with a one-line reason.
3. If the new dependency competes with or replaces an approved tool (a different AI SDK, a different email client, a different CMS), **stop.** Do not install. Ask the founder. This is a stack decision, not an implementation choice.
4. When adding any dependency, prefer the smallest, most actively-maintained option. Check last publish date, weekly downloads, and open issue count before installing.

---

## 4. The library wrapper pattern

Every active third-party service integration goes through a single wrapper file in `lib/`, not scattered imports across route handlers and components. Future-approved tools require wrappers only when they are actually introduced.

- `lib/ai.ts` - all Anthropic Claude API calls.
- `lib/sanity.ts` - all Sanity GROQ queries.
- `lib/supabase.ts` - all Supabase client usage when Supabase is introduced.
- `lib/email.ts` - all Klaviyo calls, plus Resend when Resend is introduced.
- `lib/stripe.ts` - all Stripe API calls when Stripe is introduced.
- `lib/analytics.ts` - all Vercel Analytics calls, plus GA4 when GA4 is introduced.

If a file outside `lib/` imports directly from an SDK (e.g., `import Anthropic from '@anthropic-ai/sdk'` inside a route handler), that's a stack-compliance violation - move the logic into the wrapper and import from the wrapper.

See `BEST_PRACTICES.md` BP-05 for the wrapper pattern template.

---

## 5. Environment variables

Every secret lives in `.env.local` (local) and Vercel environment variables (production). Never in code, never in commit history, never in chat transcripts. Add every required env var to `.env.local.example` with an empty value so onboarding is documented.

If you encounter a hardcoded key or URL in source code, stop and flag it. Do not "just fix it" without flagging - the question of whether the key has been exposed is more important than the fix.

---

## 6. When the stack is wrong for the task

Sometimes the canonical stack genuinely doesn't fit a task. When that happens:

1. Say so explicitly. Don't silently install a competing tool.
2. Write a proposed alternative in the plan.
3. The founder decides. If approved, the decision goes in `docs/decisions.md` with the reasoning.
4. If not approved, find a way to solve the problem with the approved stack.

Stack deviations are allowed. Silent stack deviations are not.

---

## Change log

| Date | Change |
|---|---|
| April 24, 2026 | Updated model identifier from `claude-sonnet-4-20250514` to `claude-sonnet-4-5` to match STACK.md. Sonnet 4 retiring May 14, 2026. |
