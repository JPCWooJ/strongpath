<!--
OPERATIONAL CLASSIFICATION: ACTIVE OPERATIONAL REFERENCE
Implementation backlog. Not primary StrongPath governance. docs/governance/ wins on conflict.
-->

# CODE_BACKLOG.md

**StrongPath — Code Work Backlog for Claude Code Sessions**
Maintained by Chief of Staff • May 4, 2026
Authority: Active operational reference. CTO execution rules live in `docs/governance/CTO_AGENT_PROFILE.md` and `docs/governance/CODEX_EXECUTION_STANDARD.md`.
Owner: CTO Agent, with Chief of Staff owning cross-workstream sequencing.

---

## Source Status

This file is an active operational reference in the repo, not primary governance. Use it for code queue context. Use `docs/governance/` for authority, role boundaries, implementation standards, and conflict resolution.

---

## Purpose

The queue of code work to be executed by Claude Code sessions against the `JPCWooJ/strongpath` repo. Each item is scoped so that a fresh Claude Code session can read the item and begin execution without needing to re-derive context from chat history.

Claude Code is the implementation channel. This file is how approved strategy becomes code.

Keep backlog items short, scoped, and executable by a fresh Codex session.

---

## How to use this file

- Work the top item in **Active** unless the founder gives a newer instruction.
- Paste the item's **Brief** into a fresh Codex session at repo root.
- Move shipped items to **Done** with commit/PR reference.
- Capture follow-ups in **Parked** unless they are the next approved task.
- Keep new items short: context, brief, acceptance criteria, out of scope.

---

## 1. Standing rules for Claude Code sessions

Full execution rules live in `docs/governance/CODEX_EXECUTION_STANDARD.md`.

Minimum reminders:
- use Anthropic, never OpenAI
- preserve the book/product firewall
- keep Amazon tag `stron02-20`
- use feature branches and PR review
- never commit secrets

---

## 2. P0 / P1 / P2 / P3 legend

| Priority | Meaning | Examples |
|---|---|---|
| **P0** | Blocks Day 1 (first article publish). Must resolve before the first paid or meaningful organic traffic. | Repo scaffold, Anthropic API wiring, Sanity wiring to blog, Klaviyo wiring, Amazon tag verification |
| **P1** | Blocks a Phase 1 target (subscribers, traffic, affiliate revenue, indexed pages) but not Day 1 launch. | Author credibility section on homepage, quiz email gate, email form reliability |
| **P2** | Improves quality, SEO, or operations but doesn't block a Phase 1 target. | Additional blog posts beyond the 10 minimum, quiz question expansion, FAQ schema |
| **P3** | Nice-to-have. Deferred by default. | Visual polish, analytics drill-downs, optional integrations |

---

## 3. Active backlog

**Top of list = next to execute.** When starting a Claude Code session, work on the top item.

### 3.1 P0-07 — Quiz funnel implementation

**Priority:** P0
**Source:** `ACTIVE_VERTICALS.md` (Phase 1 funnel architecture); CTO state-of-tech check, May 1, 2026 (gap surfaced)
**Status:** Not started. Top Active code item after P0-06 was resolved for launch-blocking UI purposes.

**Context.** The quiz funnel was assumed live during workstream-engagement sequencing but does not exist in the repo and is not in any prior backlog. CTO surfaced the gap during the May 1 state-of-tech check. Quiz funnel is the load-bearing email-capture and segmentation mechanism for Phase 1 — without it, footer email capture is the only acquisition surface and Klaviyo segmentation has no source signal. Paid Media workstream cannot engage until this ships (alongside BP-04's 10-articles-live gate).

**Brief for Claude Code session:**
> Build the quiz funnel into a dedicated `/quiz` route. Scope: 5–8 questions designed to segment subscribers by Margaret-vs-David persona signals (per `PERSONAS.md`) plus readiness/urgency. Result page renders persona-matched copy and CTA. Submission writes to Klaviyo via the wired integration (P0-04) with persona segment as a custom property and quiz answers as event metadata. No A/B testing infrastructure in this version — single canonical quiz flow. Founder will provide the question set and result-page copy; do not author quiz content from scratch — Brand Ambassador owns that input.

**Acceptance criteria:**
- `/quiz` route renders the question flow, validates inputs, submits to Klaviyo on completion.
- Klaviyo receives the event with persona segment property and per-question metadata; verified in Klaviyo dashboard.
- Result page renders persona-matched copy correctly for each persona segment.
- Quiz design system matches the rest of the site per `DESIGN.md` (no orphan styling).
- Mobile and desktop tested; question flow works one-handed on iPhone 14.

**Out of scope.** Welcome email sequence triggered by quiz completion (Email Marketer, Phase 1). A/B testing of quiz variants (post Phase 1). Quiz analytics dashboards (Analytics & Growth workstream when stood up).

---

### 3.2 P2-01 — Avoid fabricated social proof metrics

**Priority:** P2
**Source:** `ACTIVE_VERTICALS.md` §Critical Fixes; `BP-07`
**Status:** Not started. Defensive item — prevents a pattern the archived repo had.

**Context.** The archived repo displayed fabricated counts ("10,000+ members") — both FTC risk and trust failure. Fresh repo should establish the `BP-07`-compliant pattern from commit #1: no number on-site unless it's verifiable from a real source of truth.

**Brief for Claude Code session:**
> Establish a documented convention in `docs/decisions.md`: no on-site reference to member count, community size, customer count, or similar social proof metric unless the number is real and verifiable from Klaviyo, Supabase, or another source of truth. When a count is desired in the layout but no real number exists, use `BP-07`-compliant alternatives: "Join founding members," "Be among the first," or process/research/authority credibility. Add a lint rule or CI check that flags any UI string matching the pattern `\d+[,.]?\d*\+? (member|user|customer|subscriber)` for human review before merge.

**Acceptance criteria:**
- Entry in `docs/decisions.md` documents the no-fabricated-metrics rule.
- Lint rule or CI check exists and flags the pattern above.
- Rule triggers on a deliberately-injected test case ("10,000+ members"), then is removed.

---

## 4. Done

*Items that have shipped. Kept for audit trail and so future agents can see what was done. Prune to a summary row annually.*

### 4.1 P0-00 — Scaffold the fresh `strongpath` repo

**Shipped:** Commit `083e45a` — "feat: initialize Next.js 14 + TypeScript 5 + Tailwind 3 scaffold (P0-00)"
**Follow-up commit:** `88290ee` — "chore: align model id to claude-sonnet-4-5 across repo (#1)"

Established Next.js 14 + TypeScript 5 + Tailwind 3 foundation. `CLAUDE.md`, `.claude/` scaffold, `docs/decisions.md`, `.gitignore`, `package.json`, `tsconfig.json`, `tailwind.config.ts` in place. Vercel deploy live on `main`.

---

### 4.2 P0-01 — Wire Anthropic Claude API

**Shipped:** Commit `f3f8a92` (PR #2) — "feat: wire Anthropic Claude API (P0-01)"

`@anthropic-ai/sdk` installed, `lib/ai.ts` wrapper following BP-05, `app/api/ai/test/route.ts` development verification route. `ANTHROPIC_API_KEY` documented in `.env.local.example`.

---

### 4.3 P0-02 — Wire Sanity to blog pages

**Shipped:** Commit `e8b0e13` (PR #3) — "feat: wire Sanity CMS to blog pages (P0-02)"
**Follow-up fixes:**
- `beca001` (PR #4) — "fix: add sanity packages to transpilePackages to resolve /studio 404"
- `eff101a` (PR #5) — "fix: resolve production build failure on /studio route"
- `1a9e2a1` (PR #6) — "fix: add basePath to sanity.config.ts to resolve 'Tool not found: studio'"

Sanity 3 schema, GROQ query helpers, `app/(marketing)/blog/` list and single-post routes. Sanity Studio mounted at `/studio` in same Next.js app. Test post round-trip verified.

---

### 4.4 P0-03 — Build minimal homepage with functional CTAs

**Shipped:** Commit `8c88fca` (PR #7) — "feat: minimal homepage with functional CTAs (P0-03)"

Homepage at `app/(marketing)/page.tsx` with hero, what-is-StrongPath block, credibility placeholder, footer email capture form. Tailwind utility classes only. Copy compliant with `BRAND.md` §9.1.

---

### 4.5 P0-04 — Wire email capture to Klaviyo

**Shipped:** Commit `754bded` (PR #8) — "feat: wire email capture to Klaviyo (P0-04)"
**Follow-up commit:** `ce96d4c` (PR #9) — "docs: log PowerShell BOM env var failure mode in decisions.md"

`lib/email.ts` Klaviyo integration. `/api/subscribe` route replaces P0-03 placeholder. `KLAVIYO_API_KEY` documented in `.env.local.example`. Source metadata captured per surface.

---

### 4.6 P0-05 — Verify Amazon Associates tag on all affiliate links

**Shipped:** Commit `6445876` (PR #10) — "feat: Amazon affiliate pattern — AmazonLink, FTCDisclosure, ESLint rule (P0-05)"

`<AmazonLink />` component with hardcoded `stron02-20` tag. `<FTCDisclosure />` component. ESLint rule enforces `<FTCDisclosure />` presence on pages using `<AmazonLink />`.

---

### 4.7 Governance normalization

**Shipped:** governance normalization pass, May 2026.

Active StrongPath governance is normalized under `docs/governance/`. `agent-os/` remains available for active operational references and legacy portfolio context. Not a code item per se — recorded here for audit trail since it shipped via the same repo PR mechanism.

---

### 4.8 P0-06 — Launch-blocking UI baseline

**Shipped:** Current commit — "Resolve P0-06 launch-blocking UI baseline"

P0-06 is resolved for launch-blocking purposes. The founder accepted the current homepage and article UI baseline as sufficient to move forward: homepage hierarchy, book authority treatment, article evidence visibility, restrained commerce modules, and related-reading presentation now meet the credibility threshold for the next operational step.

Further visual polish is no longer a P0 blocker. Handle remaining UI/UX improvements as later refinement work; do not treat the design system as perfect or final.

---

## 5. Parked

*Items that surfaced during planning or execution but are deferred. Revisit periodically — parked items that become urgent are promoted back into Active.*

### 5.1 P1-01 — Full author credibility section on homepage *(post-P0-06 follow-up)*

**Status:** Parked May 1, 2026; still parked after P0-06 resolved for launch-blocking purposes. If promoted later, scope as editorial/authority refinement, not as a launch-blocking UI design-system gate.

**Original brief preserved for reference** (do not execute as-is — execute the follow-up after P0-06):

> Upgrade the credibility placeholder from P0-03 to the full author and book section per `BP-06` and `BRAND.md` §5. Include: (a) book cover image for *Choosing the StrongPath: Reversing the Downward Spiral of Aging*, (b) all three co-authors credited — Fred Bartlit, Steven Droullard, Dr. Marni Boppart, ScD (University of Illinois Urbana-Champaign), (c) the "Amazon bestseller in Aging, Weight Training, Exercise, and Longevity" line, (d) an `<AmazonLink />` to the book.

**Note:** The original brief references `BRAND.md v4` §5 author parenthetical convention, which was retired in `BRAND.md` v6. The follow-up item must use v6 conventions: authors appear only as the small-type credit line below the title on the homepage book section, not in body copy or article-style attribution.

---

### 5.2 P3 — OneDrive non-`.md` asset cleanup *(decision pending: stay vs move to Drive)*

**Priority:** P3
**Source:** Chief of Staff session 16 (May 4, 2026); follow-on to the completed governance normalization into `docs/governance/`.
**Status:** Parked. Not blocking any Phase 1 target.

**Context.** Active StrongPath governance now lives in `docs/governance/`. Non-markdown assets remain outside the normalized governance set: book manuscript `.docx`, design reference images, brand assets (logos, photography, color swatches if any), any other binary references. Three options exist: (a) leave external assets where they are, (b) move to Google Drive for shared-link convenience and integration with Drive-based workflows, (c) commit a subset to the GitHub repo where appropriate (e.g., design references that should travel with the codebase). No urgency — assets are accessible where they sit.

**Decision needed before this becomes an actionable item:** which assets stay on OneDrive, which move to Drive, which go into the GitHub repo. Founder + Chief of Staff to resolve. Until then, this item is a placeholder and should not be picked up by a Claude Code session.

**When promoted to Active:** the brief will specify which assets move where, and the work itself is mostly file-management (not code). May not need a Claude Code session at all — could be a founder-direct OneDrive/Drive operation with Chief of Staff updating governing files (`AGENT_RULES.md` §Cloud Storage Access Patterns) afterward.

---

## 6. Template for new items

When adding a new item to the Active list, follow this template. Keep it short — one page maximum per item. Claude Code is good at figuring out the "how" if the "what" and "why" are clear.

```
### N.N [Priority]-[Number] — [Short imperative title]

**Priority:** P0 / P1 / P2 / P3
**Source:** Which file or workstream surfaced this
**Status:** Not started / In progress (link to PR or session) / Blocked (why) / Done

**Context.** 1-3 sentences. Why this matters. What breaks if it doesn't ship.

**Brief for Claude Code session:**
> The prompt a fresh Claude Code session pastes at the start. Scoped tight enough
> that the session can plan and execute without needing chat-history context.
> State goals and constraints, not step-by-step instructions.

**Acceptance criteria:**
- Specific, checkable in under 60 seconds
- Prefer grep / Lighthouse score / visible UI outcome over "it works"
- Tests pass, typecheck passes, lint passes (implicit — do not enumerate in the item)

**Out of scope.** What this item does NOT cover. Prevents scope creep.
```

---

## 7. Change log

| Date | Change | Session |
|---|---|---|
| April 21, 2026 | Initial version. Seeded with 5 P0 items + 1 P1 + 1 P2 pulled from `ACTIVE_VERTICALS.md` §Critical Fixes. Item template and standing rules for Claude Code sessions captured. | Chief of Staff session 1 (Flag 1) |
| April 21, 2026 (later) | Added scope and reusability context. | Chief of Staff session 1 (Flag 1 addendum) |
| April 22, 2026 | Major revision. Old `JPCWooJ/strongpath` hackathon repo archived as `strongpath-hackathon-archive`; fresh empty repo created at `JPCWooJ/strongpath`. §1 rule 5 corrected (branching: `main` + feature branches via PR, `team/ria` retired). All backlog items rewritten for fresh-repo context: P0-00 is now "Scaffold the fresh repo," P0-01 is "Wire Anthropic" (not "Replace OpenAI"), P0-03 is "Build minimal homepage" (not "Fix `/app` spinner" — no `/app` exists yet), P0-05 is prevention-first with `<AmazonLink />` component pattern, P2-01 is convention-setting. `ACTIVE_VERTICALS.md` still references the old repo structure and needs a follow-up edit. | Chief of Staff session 2 (Flag 6 prep) |
| May 1, 2026 | **Backlog refreshed to current repo state.** P0-00 through P0-05 moved from §3 Active to §4 Done with PR/commit references — all six items shipped to `main` between April 22 and May 1 in active Claude Code sessions on the founder's local machine. Active list now shows P1-01 (full author credibility) at top, followed by P2-01 (fabricated metrics convention). P1-01 unblocked: prior status said "Blocked on P0-03 and P0-05" — both now shipped. Owner line updated to note ownership transfer to CTO at end of CTO onboarding step 3. Prompted by Chief of Staff session 6 — CTO chat flagged the file was stale after founder confirmed active build in progress. | Chief of Staff session 6 |
| May 1, 2026 (later) | **Design re-sequencing.** Added P0-06 (design system implementation from a Refero spec validated by Brand Ambassador) and P0-07 (quiz funnel) at top of Active, ahead of all prior items. P1-01 (full author credibility section) moved to §5 Parked — its layout slot ships as part of P0-06, content fills the slot in a follow-up item once P0-06 closes. Original P1-01 brief preserved in Parked entry; note added flagging that the original brief references `BRAND.md v4` conventions retired in v6 and must be updated before execution. P2-01 (fabricated metrics convention) renumbered to §3.3, content unchanged. Prompted by founder review of the current shipped homepage as below the credibility threshold the brand requires; design quality gate added as a P0 that was not previously in the backlog. Quiz funnel surfaced as a parallel P0 gap during the same CTO state-of-tech check that prompted the re-sequencing. | Chief of Staff session 6 (latest) |
| May 4, 2026 | Historical note: GitHub markdown migration recorded as shipped via PR #11. §5.2 added — external non-markdown asset cleanup parked pending stay-vs-move decision. | Chief of Staff session 16 |
| May 27, 2026 | P0-06 moved from Active to Done as resolved for launch-blocking purposes after founder acceptance of the current homepage/article UI baseline. P0-07 moved to the top Active slot. Further visual polish is now later UI/UX refinement, not a P0 blocker. | Codex implementation session |

---

*This file is a working backlog. It updates whenever an item is added, prioritized, or shipped. Items shipped to `Done` are not archived — they stay in this file so the Day 90 retrospective can read the full build history in one place.*
