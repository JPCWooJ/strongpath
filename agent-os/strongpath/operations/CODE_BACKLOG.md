# CODE_BACKLOG.md

**StrongPath — Code Work Backlog for Claude Code Sessions**
Maintained by Chief of Staff • May 1, 2026
Authority: Tier 3 (vertical). Inherits from `AGENT_RULES.md`, `PROJECT_INSTRUCTIONS.md`, `STACK.md`, `BEST_PRACTICES.md`, `ACTIVE_VERTICALS.md`.
Owner: Chief of Staff chat (transfers to CTO at end of CTO onboarding step 3).

---

## Purpose

The queue of code work to be executed by Claude Code sessions against the `JPCWooJ/strongpath` repo. Each item is scoped so that a fresh Claude Code session can read the item and begin execution without needing to re-derive context from chat history.

Claude Code is an implementation channel, not a strategic workstream (see `PROJECT_INSTRUCTIONS.md` §Workstream Model). This file is how strategy becomes code.

**On scope and reusability.** This file's *structure* is portfolio-generic — §1 standing rules for Claude Code sessions, §2 priority legend, and §6 item template all generalize across every eCommerce vertical. This file's *items* are StrongPath-specific. When vertical #2 onboards, the structure is a candidate for promotion to a Tier 2 `VERTICAL_TEMPLATE.md` section (or a dedicated `CODE_BACKLOG_TEMPLATE.md`) in the eCommerce domain. Each vertical then instances its own `CODE_BACKLOG.md` from the template with its own items. Not yet done — this is a 30-60 day item, triggered either by vertical #2 onboarding or by roughly two-thirds of StrongPath's current items shipping.

---

## How to use this file

### For the founder

1. Before opening a Claude Code session, read the item at the top of the **Active** list (§3).
2. Open a Claude Code session at the `strongpath` repo root: `cd ~/path/to/strongpath && claude`.
3. Paste the item's **Brief** into Claude Code as the session's opening prompt. Claude Code auto-loads `strongpath/CLAUDE.md` and `.claude/rules/` alongside your prompt.
4. When the item ships, move it from Active to Done (§4) and note the PR/commit reference.
5. If an item surfaces a new item during execution, capture it in Parked (§5) or Done-and-follow-ups — do not let it collide with the current item.

### For Chief of Staff (this chat)

1. New items arrive from: (a) other workstreams flagging dependencies, (b) `ACTIVE_VERTICALS.md` P0/P1/P2 lists, (c) observations during sessions, (d) founder direct request.
2. Write each item per the template in §6. The brief must be scoped tight enough that a fresh Claude Code session can execute it.
3. Prioritize: **P0** blocks Day 1, **P1** blocks Phase 1 targets, **P2** improves quality but doesn't block, **P3** nice-to-have.
4. Re-order the Active list whenever priority shifts. The top item is always the next one to execute.

### What an item is NOT

- Not a full technical spec. Claude Code does its own exploration.
- Not a prescription for how to solve the problem. State goals and constraints, not step-by-step instructions (per `AGENT_RULES.md` tone guidance — applies to briefing Claude Code too).
- Not open-ended. Every item has an acceptance criterion you can check in 60 seconds.

---

## 1. Standing rules for Claude Code sessions

These rules apply to every Claude Code session on this repo. They are encoded in `strongpath/CLAUDE.md` and in `.claude/rules/`, but also stated here so the founder can remind Claude Code when needed.

1. **Always use plan mode for anything beyond a trivial edit.** Per Boris Cherny / Anthropic official guidance. Plan mode produces a written plan the founder reviews before execution.

2. **Respect the canonical stack.** `STACK.md` is authoritative. Anthropic Claude API, never OpenAI. Next.js 14, Supabase, Sanity, Vercel, Klaviyo, Resend, Stripe, Sentry. Stack deviations require a written justification in `strongpath/docs/decisions.md`.

3. **Respect the book/product firewall in any user-facing code output.** Copy in code (UI strings, email templates, error messages) must follow `BRAND.md` §9.1. Research claims attach to the book, not the product. "Reverse" and "reversing" never appear in our own voice — only inside the italicized book title.

4. **Affiliate tag `stron02-20` on every Amazon link.** Non-negotiable. Per `BRAND.md` §11.

5. **Branching: `main` is production, short-lived feature branches via PR.** `main` is the default branch on GitHub and the branch Vercel deploys from. Never commit directly to `main`. Work on `feature/<short-description>` or `fix/<short-description>` branches, commit often, open a PR to `main`, merge after review, delete the feature branch.

6. **Commit often.** At least once per logical unit of work. Per Anthropic official guidance and community consensus.

7. **No secrets in code or chat.** Use `.env` files; confirm `.env` is gitignored before committing.

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

### 3.1 P0-06 — Implement design system from Refero spec

**Priority:** P0
**Source:** Founder directive (Chief of Staff session 6, May 1, 2026); `BRAND.md` §6 (Visual Direction) as authoritative input
**Status:** Not started. Blocked on (a) founder selecting a Refero style, (b) Brand Ambassador validating the selected style against `BRAND.md` v6 §6 and signing off on `DESIGN.md`. Both clear in upcoming sessions.

**Context.** P0-03 shipped a structurally complete homepage. The visual quality is "1992-looking" per founder review and is below the credibility threshold the brand requires. Driving traffic to this surface — via paid media, email subscribers, or affiliate links — wastes acquisition effort against a site that does not signal authority. Re-sequencing to ship a credible visual system before any further functional work, with placeholders for known future features (full credibility section, quiz funnel) so they slot in cleanly later. This item is the single largest gate in the portfolio right now: every downstream traffic-driving workstream depends on it.

**Brief for Claude Code session:**
> Implement the design system specified in `DESIGN.md` (Brand-Ambassador-validated Refero style) across the existing site. Scope: homepage, blog list, blog single-post, book page (Brief 10 destination), `/studio` route polish where it touches public surface. `DESIGN.md` is authoritative for tokens (color, typography, spacing, components, motion); `BRAND.md` §6 is authoritative for strategic visual direction (editorial-not-athletic, navy/gold palette anchor, white-space-as-credibility, one-primary-action-per-page). When `DESIGN.md` and `BRAND.md` §6 conflict, escalate to Brand Ambassador — do not silently resolve. Build placeholders for: (1) full author credibility section per `BP-06` and `BRAND.md` §5 — slot the book cover, three-author credit line, "Amazon bestseller" line, `<AmazonLink />` to the book; do not ship the placeholder text, ship the layout slot ready to receive real content in a follow-up; (2) quiz funnel entry point — hero or sub-hero CTA placement that links to a future `/quiz` route, with the route stubbed but not built. Implementation in the existing Next.js + Tailwind + shadcn/ui stack per `STACK.md`; do not introduce a new design framework.

**Acceptance criteria:**
- Homepage Lighthouse: Performance ≥85, SEO ≥95, Accessibility ≥90.
- Visual review: side-by-side screenshot of current homepage and new homepage, founder approves before merge.
- `BRAND.md` §6 rules verified — body copy ≥18px desktop / ≥17px mobile; serif headlines + Inter body; navy-dominant with gold-as-condiment; warm-white background not pure white.
- Forbidden imagery patterns absent (no posed "active senior" stock, no transformation photography, no pharmaceutical-ad aesthetic).
- Placeholders for full credibility section and quiz funnel entry are visible in the layout but clearly marked as placeholders (no fabricated content).
- All four pages (homepage, blog list, blog single, book page) ship together — no half-redesigned site.

**Out of scope.** Full credibility section content (P1-01, merged into the post-design follow-up). Quiz funnel logic (P0-07). Email sequence design (Email Marketer workstream, Phase 1). Paid media creative (Paid Media workstream, Phase 1b).

---

### 3.2 P0-07 — Quiz funnel implementation

**Priority:** P0
**Source:** `ACTIVE_VERTICALS.md` (Phase 1 funnel architecture); CTO state-of-tech check, May 1, 2026 (gap surfaced)
**Status:** Not started. Blocked on P0-06 — quiz entry point and `/quiz` route slot ship as part of the design system, then this item builds the actual flow into the slot.

**Context.** The quiz funnel was assumed live during workstream-engagement sequencing but does not exist in the repo and is not in any prior backlog. CTO surfaced the gap during the May 1 state-of-tech check. Quiz funnel is the load-bearing email-capture and segmentation mechanism for Phase 1 — without it, footer email capture is the only acquisition surface and Klaviyo segmentation has no source signal. Paid Media workstream cannot engage until this ships (alongside BP-04's 10-articles-live gate).

**Brief for Claude Code session:**
> Build the quiz funnel into the `/quiz` route slot established by P0-06. Scope: 5–8 questions designed to segment subscribers by Margaret-vs-David persona signals (per `PERSONAS.md`) plus readiness/urgency. Result page renders persona-matched copy and CTA. Submission writes to Klaviyo via the wired integration (P0-04) with persona segment as a custom property and quiz answers as event metadata. No A/B testing infrastructure in this version — single canonical quiz flow. Founder will provide the question set and result-page copy; do not author quiz content from scratch — Brand Ambassador owns that input.

**Acceptance criteria:**
- `/quiz` route renders the question flow, validates inputs, submits to Klaviyo on completion.
- Klaviyo receives the event with persona segment property and per-question metadata; verified in Klaviyo dashboard.
- Result page renders persona-matched copy correctly for each persona segment.
- Quiz design system matches the rest of the site per `DESIGN.md` (no orphan styling).
- Mobile and desktop tested; question flow works one-handed on iPhone 14.

**Out of scope.** Welcome email sequence triggered by quiz completion (Email Marketer, Phase 1). A/B testing of quiz variants (post Phase 1). Quiz analytics dashboards (Analytics & Growth workstream when stood up).

---

### 3.3 P2-01 — Avoid fabricated social proof metrics

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

## 5. Parked

*Items that surfaced during planning or execution but are deferred. Revisit periodically — parked items that become urgent are promoted back into Active.*

### 5.1 P1-01 — Full author credibility section on homepage *(merged into P0-06 + follow-up)*

**Status:** Parked May 1, 2026. Originally Active; superseded when P0-06 (design system implementation) entered the backlog. The credibility section is now built in two passes: (1) P0-06 ships the layout slot — the visual placeholder for the credibility section as part of the new design system; (2) a follow-up item (to be created when P0-06 closes) ships the actual content into the slot — book cover, three-author credit line, "Amazon bestseller" line, `<AmazonLink />` per `BP-06` and `BRAND.md` §5.

**Original brief preserved for reference** (do not execute as-is — execute the follow-up after P0-06):

> Upgrade the credibility placeholder from P0-03 to the full author and book section per `BP-06` and `BRAND.md` §5. Include: (a) book cover image for *Choosing the StrongPath: Reversing the Downward Spiral of Aging*, (b) all three co-authors credited — Fred Bartlit, Steven Droullard, Dr. Marni Boppart, ScD (University of Illinois Urbana-Champaign), (c) the "Amazon bestseller in Aging, Weight Training, Exercise, and Longevity" line, (d) an `<AmazonLink />` to the book.

**Note:** The original brief references `BRAND.md v4` §5 author parenthetical convention, which was retired in `BRAND.md` v6. The follow-up item must use v6 conventions: authors appear only as the small-type credit line below the title on the homepage book section, not in body copy or article-style attribution.

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
| April 21, 2026 (later) | Added "On scope and reusability" paragraph to §Purpose. Documents that this file's structure is portfolio-generic and is a candidate for promotion to a Tier 2 template when vertical #2 onboards. | Chief of Staff session 1 (Flag 1 addendum) |
| April 22, 2026 | Major revision. Old `JPCWooJ/strongpath` hackathon repo archived as `strongpath-hackathon-archive`; fresh empty repo created at `JPCWooJ/strongpath`. §1 rule 5 corrected (branching: `main` + feature branches via PR, `team/ria` retired). All backlog items rewritten for fresh-repo context: P0-00 is now "Scaffold the fresh repo," P0-01 is "Wire Anthropic" (not "Replace OpenAI"), P0-03 is "Build minimal homepage" (not "Fix `/app` spinner" — no `/app` exists yet), P0-05 is prevention-first with `<AmazonLink />` component pattern, P2-01 is convention-setting. `ACTIVE_VERTICALS.md` still references the old repo structure and needs a follow-up edit. | Chief of Staff session 2 (Flag 6 prep) |
| May 1, 2026 | **Backlog refreshed to current repo state.** P0-00 through P0-05 moved from §3 Active to §4 Done with PR/commit references — all six items shipped to `main` between April 22 and May 1 in active Claude Code sessions on the founder's local machine. Active list now shows P1-01 (full author credibility) at top, followed by P2-01 (fabricated metrics convention). P1-01 unblocked: prior status said "Blocked on P0-03 and P0-05" — both now shipped. Owner line updated to note ownership transfer to CTO at end of CTO onboarding step 3. Prompted by Chief of Staff session 6 — CTO chat flagged the file was stale after founder confirmed active build in progress. | Chief of Staff session 6 |
| May 1, 2026 (later) | **Design re-sequencing.** Added P0-06 (design system implementation from a Refero spec validated by Brand Ambassador) and P0-07 (quiz funnel) at top of Active, ahead of all prior items. P1-01 (full author credibility section) moved to §5 Parked — its layout slot ships as part of P0-06, content fills the slot in a follow-up item once P0-06 closes. Original P1-01 brief preserved in Parked entry; note added flagging that the original brief references `BRAND.md v4` conventions retired in v6 and must be updated before execution. P2-01 (fabricated metrics convention) renumbered to §3.3, content unchanged. Prompted by founder review of the current shipped homepage as below the credibility threshold the brand requires; design quality gate added as a P0 that was not previously in the backlog. Quiz funnel surfaced as a parallel P0 gap during the same CTO state-of-tech check that prompted the re-sequencing. | Chief of Staff session 6 (latest) |

---

*This file is a working backlog. It updates whenever an item is added, prioritized, or shipped. Items shipped to `Done` are not archived — they stay in this file so the Day 90 retrospective can read the full build history in one place.*
