# CLAUDE.md - StrongPath Repo

Status: repo execution guide
Last updated: May 2026

You are working in `JPCWooJ/strongpath`.

Canonical governance lives in `docs/governance/`. For engineering execution, read:
- `docs/governance/CTO_AGENT_PROFILE.md`
- `docs/governance/CODEX_EXECUTION_STANDARD.md`

If this file conflicts with `docs/governance/`, `docs/governance/` wins.

## Project

StrongPath is an evidence-based strength platform for adults 50+ and adult children supporting aging parents.

Phase 1 is content-first and bootstrap-disciplined. The site is built on Next.js, Sanity, Vercel, Klaviyo, Amazon Associates, Stripe, Supabase, Sentry, and GA4/Vercel Analytics.

## Repo Map

- `app/` - Next.js App Router routes
- `components/` - shared UI
- `lib/` - service wrappers and integrations
- `content/schemas/` - Sanity schemas
- `docs/governance/` - canonical governance
- `docs/decisions.md` - architecture decision log
- `agent-os/strongpath/operations/CODE_BACKLOG.md` - active code queue
- `.claude/rules/` - local enforcement aids
- `.claude/commands/` - reusable checks

## Stack Rules

- Use Anthropic Claude API, never OpenAI.
- Keep AI calls behind `lib/ai.ts`.
- Fetch blog content from Sanity via GROQ in `lib/sanity.ts`; do not hardcode posts in TSX.
- Use Tailwind utilities; do not add custom CSS files unless explicitly scoped.
- Stack deviations require an entry in `docs/decisions.md`.

## Public-Surface Rules

- Follow `docs/governance/BRAND.md` and `docs/governance/COPY_GOVERNANCE_STANDARD.md` for public copy.
- The book *Choosing the StrongPath* is a credibility asset, not an article source document.
- Forbidden claim words include: "miracle," "breakthrough," "cure," "hack," "transform," "anti-aging," and "fountain of youth."
- Use "reverse" only inside the book title, never as StrongPath product language.
- Health claims must be hedged and sourced.
- Any health, medical, or exercise-adjacent content must include the approved medical disclaimer.
- Amazon links must use affiliate tag `stron02-20` and must have an above-fold FTC disclosure on pages where they appear.

## Execution

- Do not invent work. Execute the supplied brief or the top approved item in `CODE_BACKLOG.md`.
- Keep changes scoped and reviewable.
- Preserve CMS wiring, analytics, affiliate tags, disclosures, and existing routes unless the task explicitly changes them.
- Do not touch secrets, DNS, billing, Vercel project ownership, or production env vars without explicit founder approval.
- Use feature branches and PR review for code changes per `CODEX_EXECUTION_STANDARD.md`.

## Verification

Before declaring work complete, run the relevant checks:

```bash
npm run typecheck
npm run lint
npm test
```

Run `npm run build` when routing, config, deployment, or server behavior changes.

For UI changes, verify desktop and mobile. If a dashboard, credential, or external account blocks verification, state exactly what remains unverified.

## Response

Use the standard completion format:

```txt
FILES CHANGED
VERIFICATION
COMMIT / PR
UNRESOLVED ISSUES
```
