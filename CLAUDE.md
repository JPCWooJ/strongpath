# CLAUDE.md — StrongPath Repo

**You are working in the `strongpath` repo.** This file is loaded at the start of every Claude Code session here. It tells you what this codebase is, where things live, and the non-negotiable rules that apply.

**Version:** 1.3
**Last updated:** April 22, 2026
**Authority:** Repo execution guide. Inherits from `docs/governance/`, which is the active StrongPath governance source. If this file conflicts with `docs/governance/`, `docs/governance/` wins.

---

## 1. What this project is

**StrongPath.** An evidence-based strength platform for adults who refuse to accept muscle loss as inevitable. Anchored in an Amazon bestseller (*Choosing the StrongPath: Reversing the Downward Spiral of Aging*, 2018). Currently in Phase 1 pre-launch: content-first bootstrap, <$5K budget, 90-day targets of 1,200 email subscribers and 4,000 organic sessions.

**Branching.** `main` is the production branch and the default branch on GitHub. Vercel deploys from `main`. Do not commit directly to `main`. All work happens on short-lived feature branches named `feature/<short-description>` or `fix/<short-description>`, merged to `main` via PR after review. Delete feature branches after merge.

**Next work lives in `agent-os/strongpath/operations/CODE_BACKLOG.md`** as an active operational reference. Canonical governance lives in `docs/governance/`. The founder or Chief of Staff may paste active items into your session. Do not invent work; execute the brief.

---

## 2. Tech stack and repo map

| Layer | Tool | Where it lives |
|---|---|---|
| Framework | Next.js 14 App Router + TypeScript 5 | `app/`, `lib/`, `components/` |
| Styling | Tailwind CSS 3 | utility classes only, no custom CSS files |
| CMS | Sanity 3 | `content/schemas/`, fetched via GROQ in `lib/sanity.ts` |
| Database + Auth | Supabase | `lib/supabase.ts` |
| AI | **Anthropic Claude API, model `claude-sonnet-4-5`** | `lib/ai.ts` |
| Email — transactional | Resend | `lib/email.ts` |
| Email — marketing | Klaviyo | `lib/email.ts` |
| Payments | Stripe | `lib/stripe.ts` |
| Errors | Sentry | auto-configured |
| Analytics | GA4 + Vercel Analytics | `lib/analytics.ts` |

**Key routes.** Marketing pages live in `app/(marketing)/`. Authenticated app in `app/(app)/`. API routes in `app/api/`.

**Governance** lives in `docs/governance/`. **Strategy and decisions** for implementation history live in `docs/decisions.md`. Stack deviations require an entry there.

**Repo status.** This is a fresh repo (created April 22, 2026) replacing an earlier hackathon build (archived at `JPCWooJ/strongpath-hackathon-archive`). The archive is read-only and exists only for reference — do not mirror its patterns, dependencies, or architectural choices unless explicitly instructed.

**Rule files and commands.** Domain-specific enforcement lives in `.claude/rules/` (loaded per session): `brand-discipline.md`, `commit-discipline.md`, `stack-compliance.md`, `verification.md`. Reusable slash commands live in `.claude/commands/`: `/affiliate-tag-audit`, `/brand-check`, `/disclaimer-check`. Additional commands (`/lighthouse`, `/sanity-test-post`, `/pre-launch`) are parked in `COMMANDS_BACKLOG.md` and will activate when their prerequisites ship. The `.claude/hooks/` directory is deliberately empty in Phase 1; revisit after 5–10 sessions if failure modes emerge.

---

## 3. Non-negotiables

<important if="writing code that uses an AI API">
Use Anthropic Claude API. Never OpenAI. Model: `claude-sonnet-4-5`. The `@anthropic-ai/sdk` package. This is a platform decision, not a preference.
</important>

<important if="adding or editing a blog page or post display">
Fetch content from Sanity via GROQ in `lib/sanity.ts`. Never hardcode post content in `.tsx` files.
</important>

<important if="citing the book Choosing the StrongPath in any content, copy, or component">
The book is a **credibility asset, not a source document**. Cite the book once per article where credibility is earned — typically the author bio line or a single reference supporting the authority position — not as a recurring source. Source article content from current peer-reviewed research, credible clinical guidance, and Dr. Marni Boppart's published work where relevant. If an idea in the book remains scientifically current, cite the underlying research the book drew from, not the book itself. **If the manuscript and newer research disagree, newer research wins.** Per `PROJECT_INSTRUCTIONS.md` §Standing Decisions (April 22, 2026).
</important>

<important if="writing user-facing copy — UI strings, email templates, error messages, meta descriptions">
Forbidden words: "miracle," "breakthrough," "cure," "hack," "transform," "anti-aging," "fountain of youth." "Reverse" and "reversing" appear ONLY inside the italicized book title *Choosing the StrongPath: Reversing the Downward Spiral of Aging* — never in our own voice describing what StrongPath or StrongPath products do. If copy requires a claim, hedge it: "research suggests," "may help," "studies show." Never: "cures," "treats," "prevents," "guarantees." Full rules in `.claude/rules/brand-discipline.md`.
</important>

<important if="adding an Amazon affiliate link">
Every Amazon link uses tag `stron02-20`. Format: `?tag=stron02-20` or `&tag=stron02-20`. Use the `<AmazonLink />` component once it exists (shipping in P0-05). An FTC affiliate disclosure must appear above the fold on any page with affiliate links — not in the footer.
</important>

<important if="adding health, medical, or exercise-adjacent content to any page">
Include this medical disclaimer verbatim: *"This content is for informational and educational purposes only. It does not constitute medical advice and is not a substitute for professional medical consultation. Always consult your physician before beginning any new exercise or supplement program."*
</important>

<important if="committing code">
Never commit directly to `main`. Work on a short-lived feature branch (`feature/<short-description>` or `fix/<short-description>`), commit often — at least once per logical unit of work — and open a PR to `main` for review before merge. Delete the feature branch after merge. Never commit `.env` files or any secret. Verify `.env` is gitignored before any commit that touches environment configuration. Full rules in `.claude/rules/commit-discipline.md`.
</important>

---

## 4. How to verify your work

Before declaring a task complete, run the checks relevant to what you changed:

```bash
npm run typecheck     # TypeScript must pass
npm run lint          # ESLint must pass
npm test              # Tests must pass (when applicable)
```

For UI changes, verify Lighthouse scores meet thresholds: **Performance ≥85, SEO ≥95, Accessibility ≥90.** Thresholds are enforced by Lighthouse CI on every PR.

For Sanity or blog work, confirm end-to-end: a test post created in Sanity Studio appears on the live blog within 60 seconds of save.

For Klaviyo work, confirm a test form submission appears in the Klaviyo dashboard within 60 seconds.

**Plan mode is the default for anything beyond a trivial edit.** Produce a written plan the founder reviews before execution. Challenge your own plans — "what would make this wrong?" — before presenting them.

If you cannot verify your work from inside the repo (requires a dashboard, requires manual testing, requires a credential you don't have), say so explicitly. Do not declare done.

Full verification standards in `.claude/rules/verification.md`.

---

## 5. How work is reviewed

1. **Every plan is reviewed by the founder before execution.** Plan mode is always on for non-trivial work.
2. **Every commit lands on a feature branch and merges via PR.** The PR description references the `CODE_BACKLOG.md` item it implements and names what changed and why.
3. **Every item in `CODE_BACKLOG.md` has an acceptance criterion.** Verify against it before moving the item to Done.
4. **On significant items, a second Claude instance may review the plan as a staff engineer before execution.** Test-time compute: separate context windows produce better results.

---

## 6. Boundaries — what this repo does not own

- **Strategy.** Lives in `docs/governance/PROJECT_INSTRUCTIONS.md`, `docs/governance/BRAND.md`, `docs/governance/PERSONAS.md`, and the active operational `agent-os/strongpath/seo/CONTENT_PLAN.md`. Claude Code reads them; it does not author them unless explicitly scoped.
- **Brand voice.** Lives in `docs/governance/BRAND.md`; `agent-os/strongpath/brand/brand-references.md` is a supporting operational reference. Claude Code enforces voice in user-facing strings via `.claude/rules/brand-discipline.md`; it does not define voice.
- **Content drafts.** Article drafts live in Sanity CMS, authored by the Content Writer workstream. Claude Code wires Sanity to the blog; it does not write articles.
- **Marketing copy, email flows, paid media creative.** Owned by their respective workstream chats.

When a task drifts into any of these territories, stop and route the question back to the founder.

---

## 7. Change log

| Date | Version | Change |
|---|---|---|
| April 22, 2026 | 1.2 | Initial version. Authored for the fresh `JPCWooJ/strongpath` repo (created April 22, 2026, replacing archived hackathon build at `JPCWooJ/strongpath-hackathon-archive`). Branching model: `main` is production, feature branches via PR. Non-negotiables wrapped in `<important if="...">` tags per the Dex (HumanLayer) pattern. |
| April 22, 2026 (later) | 1.3 | Added explicit book-as-credibility-not-source rule to §3 non-negotiables — articles cite the book once for authority; content sourced from current peer-reviewed research; newer research wins when the manuscript and current research disagree. Added §5 (How work is reviewed) — founder reviews every plan; second-Claude staff engineer review as optional test-time compute pattern. Added §6 (Boundaries) — prevents scope creep into strategy, brand voice, content drafts, and marketing. Added rule-files and commands summary to §2. Updated header to declare version, date, and Tier 4 authority explicitly. |

---

*This file is governance for Claude Code sessions on this repo. Updates land via PR and get reviewed before merge. When a decision contradicts this file, flag the contradiction and propose updating this file — do not silently deviate.*
