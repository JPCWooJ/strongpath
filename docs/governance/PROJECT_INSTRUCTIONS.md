# PROJECT INSTRUCTIONS — StrongPath (Vertical 1)

**Read this first. Every chat in this project starts here.**

This project is the home of StrongPath, the first active vertical in the JCVC portfolio. All vertical-specific work — brand, content, SEO, email, paid media, analytics, community — lives here. This project does not replace the universal or domain-level playbooks; it inherits from them.

---

## The Inheritance Chain

Three tiers of context apply to every chat in this project. Read them in this order.

| Tier | Source | What It Governs |
|------|--------|-----------------|
| 1 — Universal | "Agent Operating System" project + `JPCWooJ/claude-playbook` repo | How Jeff operates, agent rules, MCP setup — applies to every JCVC project |
| 2 — Domain | "eCommerce" project (`STACK.md`, `BEST_PRACTICES.md`, `ACTIVE_VERTICALS.md`, `VERTICAL_TEMPLATE.md`) | Technology stack, operational best practices, portfolio-level decisions — applies to every eCommerce vertical |
| 3 — Vertical | This project's files (`BRAND.md`, `PERSONAS.md`, `brand-references.md`, `PRODUCT_CONCEPTS_BACKLOG.md`, `DESIGN.md`, `CONTENT_PLAN.md`, `PUBLISHING_PLAN.md`, `METRICS.md`, `WORKSTREAM_STATUS.md`, `WORKSTREAM_CTO.md`, `CODE_BACKLOG.md`, `COMMANDS_BACKLOG.md`, and planned future deliverables: `EMAIL_SEQUENCES.md`, `PAID_MEDIA.md`) | StrongPath-specific standing decisions — applies only to StrongPath |
| 4 — Repo | `JPCWooJ/strongpath/docs/` | Implementation-level decisions readable by Claude Code only |

**Rule:** When Tier 3 is silent, Tier 2 governs. When Tier 2 is silent, Tier 1 governs. Never override a higher tier silently — flag the contradiction and propose updating the relevant file.

---

## What This Vertical Is

**Topic:** Sarcopenia — age-related muscle loss affecting 30%+ of adults over 60.

**Authority asset:** *Choosing the StrongPath* — Amazon bestseller in Aging, Weight Training, Exercise, and Longevity. Co-authored by Fred Bartlit and Steven Droullard (the original founders and authors of record; Jeff now owns all rights and is the operator), with Dr. Marni Boppart, ScD (exercise physiology, University of Illinois Urbana-Champaign) as a published co-author and cited research source. Dr. Boppart is passive in Phase 1. A medical advisor role is open for Phase 2.

**The book's role is credibility, not source material.** *Choosing the StrongPath* establishes the brand's right to speak in the sarcopenia category by virtue of its bestseller status and credentialed co-authors. It is not a source document for article content. The manuscript is dated; the authors are not active in the business; and the book/product firewall in `BRAND.md` §9.1 already separates education (the book) from commerce (the product). Content is sourced from current peer-reviewed research and credible clinical guidance — see §Standing Decisions below.

**Site:** https://strongpath.vercel.app (test deployment, built on Next.js 14, Supabase, Sanity, Vercel per canonical stack). *Note: this URL currently resolves to the archived hackathon build. Once the fresh `JPCWooJ/strongpath` repo (created April 22, 2026) deploys via P0-00, this reference updates.*

**GitHub:** https://github.com/JPCWooJ/strongpath (fresh repo created April 22, 2026; hackathon build archived as `JPCWooJ/strongpath-hackathon-archive`)

**Target customer:**
- **Primary end user:** Adults 50-75, especially 55-72, beginning to notice physical decline.
- **Primary purchaser:** Adult children aged 45-60 buying for aging parents. This is a strategic unlock — the message to the purchaser is different from the message to the end user.
- **Tertiary:** Allied health professionals (PTs, OTs, geriatric RNs) who recommend resources.

See `PERSONAS.md` for the full persona definitions, including the three-moment David model (Before / Crisis / After) and the Proactive Caregiver (Margaret) persona.

**Revenue model (launch sequence):** Amazon affiliate (Day 1) → Email capture (Day 1) → Digital products ($49 / $129) → Membership → Supplements (Phase 2).

**Phase 1 targets (90 days from launch):**
- First affiliate dollar within 45-60 days
- 1,200 email subscribers by Day 90
- 4,000 organic sessions by Day 90
- $400-600 cumulative affiliate revenue by Day 90
- 45+ indexed pages in Google Search Console

**Phase 1 budget:** <$5,000 cash outlay. Bootstrap discipline. The larger $280-350K Year 1 plan in `ACTIVE_VERTICALS.md` unlocks only after Phase 1 targets are hit.

---

## Workstream Model — Chats Are Functions

This project operates on a **workstream-per-chat** model. Each chat in this project is a dedicated, long-running collaboration with a specific function of the business. The chat itself becomes the institutional memory for that function.

**Planned workstreams (chats):**

| Chat Name | Role | Produces |
|-----------|------|----------|
| Brand Ambassador | Brand voice, positioning, messaging, brand reviews | `BRAND.md`, `PERSONAS.md`, `brand-references.md`, `PRODUCT_CONCEPTS_BACKLOG.md`, brand reviews of copy and creative |
| SEO Strategist | Keyword research, content briefs, internal linking, GSC analysis | `CONTENT_PLAN.md`, article briefs |
| Content Writer | Blog drafts, pillar page, satellite posts | Finished drafts for founder review and Sanity entry |
| Email Marketer | Klaviyo flows, broadcast calendar, welcome series, nurture | `EMAIL_SEQUENCES.md`, email copy |
| Paid Media Buyer | Meta and Google campaigns, creative testing, budget allocation | `PAID_MEDIA.md`, campaign briefs and reports |
| Analytics & Growth | GA4, Clarity, funnel analysis, weekly metrics review | Weekly reports, funnel insights, A/B test recommendations |
| Community Manager | Facebook groups, Reddit, LinkedIn outreach to PTs and geriatricians | Outreach logs, community content calendar |
| Chief of Staff | Portfolio coordination, workstream status, file governance, sequencing, launch readiness | `WORKSTREAM_STATUS.md`, `CODE_BACKLOG.md`, `COMMANDS_BACKLOG.md`, sequencing decisions, canonical file updates |
| Claude Code *(implementation channel)* | Executes scoped code tasks from `CODE_BACKLOG.md` against the `JPCWooJ/strongpath` repo | Commits, deployed builds, third-party integrations (Sanity, Klaviyo, Stripe, Sentry, Amazon Associates) |

**Claude Code operates differently from the Claude.ai workstream chats.** The Claude.ai chats are long-running conversations where institutional memory accumulates in the chat itself. Claude Code sessions are short, task-scoped, and fresh-context — each `claude` invocation is effectively a new session against the repo. Memory lives in the repo files (`strongpath/CLAUDE.md`, `strongpath/.claude/rules/`, `strongpath/docs/`), not in chat history. For this reason Claude Code is described as an **implementation channel** rather than a strategic workstream: tasks are defined elsewhere (by the Chief of Staff chat via `CODE_BACKLOG.md`) and shipped by Claude Code. Claude Code does not itself produce strategy, opinions, or canonical governing files — it implements what the rest of the portfolio decides needs to happen.

**Evolution path:** Each chat starts as a Claude conversation. As its patterns stabilize, its system prompt and operating rules get extracted into a skill. Once the skill has proven value, it can be wired to MCP tools and run semi-autonomously. This is how we transition from human-operated chats to agent-operated workflows.

---

## Canonical Governance Workspace — GitHub Repo

Active StrongPath governance lives in this repo under `docs/governance/`.

```
docs/governance/
├── AGENT_RULES.md
├── CODEX_EXECUTION_STANDARD.md
├── BRAND.md
├── DESIGN.md
├── PERSONAS.md
├── PROJECT_INSTRUCTIONS.md
├── PUBLISHING_PLAN.md
├── keyword-universe.md
├── PRODUCT_CONCEPTS_BACKLOG.md
├── CTO_AGENT_PROFILE.md
├── CHIEF_OF_STAFF_AGENT_PROFILE.md
└── UIUX_AGENT_PROFILE.md
```

**Rules:**
- `docs/governance/` is authoritative for StrongPath governance.
- `archive/governance/` is historical and non-authoritative.
- `agent-os/` contains active operational references and legacy portfolio context, not the primary StrongPath governance authority.
- Non-markdown assets may live outside the repo as supporting reference material, but markdown governance is read from `docs/governance/`.

---

## How to Work in This Project

### When starting a new chat
1. Confirm the chat's workstream (brand, SEO, content, email, paid, analytics, community).
2. Read the universal and domain-level files first (Tier 1 and Tier 2).
3. Read the vertical-level files (Tier 3) that apply to the workstream — at minimum, `BRAND.md` and `PERSONAS.md`.
4. Confirm the session goal before producing anything.
5. Search past conversations in this project before re-deriving decisions.

### When making recommendations
- Lead with a recommendation, not a menu. Jeff wants decisions, not options.
- Tag confidence on significant recommendations: **High** (defer by default), **Calibrated** (tradeoffs exist, here's the call), **Outside my range** (specialist domain, route to expert).
- Flag FTC, FDA, and medical-claim implications immediately. Sarcopenia is medical-adjacent; everything we publish is reviewed through that lens.
- If a decision contradicts a higher tier, name the contradiction and propose the fix, do not silently deviate.

### When producing deliverables
- Substantial deliverables go in files, not in chat responses.
- Jeff prefers `.docx` format for founder review, then `.md` format for the canonical version read by other workstream chats. Produce both when appropriate.
- Copy, email drafts, and brand reviews go inline in chat.
- Strategy documents, content plans, and persona research that become canonical governance go in `docs/governance/`.
- Active operational references may remain in `agent-os/` when they are backlog, workstream, or content-planning aids.

### When updating project files
- Draft or patch the scoped governance file directly in the repo when instructed.
- Archive prior governance versions under `archive/governance/` when normalization or replacement is required.
- Note the date and source of the update.
- Never silently change a standing decision.

---

## Standing Decisions — Do Not Re-Debate These

Inherited from Tier 2 (eCommerce domain), restated here for clarity:

| Decision | Rationale |
|----------|-----------|
| Anthropic Claude API, never OpenAI | BP-01, platform decision |
| Next.js 14 + Supabase + Sanity + Vercel | Canonical stack, STACK.md |
| Klaviyo for marketing email, never Mailchimp/ConvertKit | BP-02, highest-ROI eCommerce tool |
| Content before paid traffic | BP-04, 10 posts minimum before ads |
| No fabricated social proof | BP-07, FTC risk |
| Quiz gates email before results | BP-03, funnel pivot point |
| Author credibility above the fold | BP-06, the moat must be visible |

StrongPath-specific standing decisions:

| Decision | Source | Date |
|----------|--------|------|
| Book title spelled *Choosing the StrongPath* (one word, capital S and P) | GTM v2 review | April 2026 |
| Bootstrap Phase 1 cap: <$5,000 cash until Day 90 targets hit | GTM v2 review | April 2026 |
| Superseded workspace note: OneDrive `/StrongPath/[Workstream Name]/` was the original workspace. Active governance now lives in `docs/governance/`. | Brand Ambassador session 1; superseded by governance normalization | April 2026; superseded May 2026 |
| Fred Bartlit and Steven Droullard are founding authors of record and Jeff's co-founders. Not active in operations. All rights transferred to Jeff. | Brand Ambassador session 1 | April 2026 |
| Dr. Marni Boppart, ScD is a published co-author of the book and a cited research source. She is passive in Phase 1 and not an active brand authority. Never described as "medical director" or active advisor. | Brand Ambassador session 1 | April 2026 |
| Jeff is the public founder face; not a clinician. He is the translator between the research and the reader. | Brand Ambassador session 1 | April 2026 |
| Medical advisor role open for Phase 2 (re-engage Dr. Boppart or hire new advisor when income permits). | Brand Ambassador session 1 | April 2026 |
| Bestseller claim: *Choosing the StrongPath* is an "Amazon bestseller in Aging, Weight Training, Exercise, and Longevity." Not #1 — that is a goal, not a claim. | Brand Ambassador session 1 | April 2026 |
| Book/product firewall: claims attach to the book (education), not to the product (commerce). | Brand Ambassador session 1 | April 2026 |
| "When in doubt, underpromise." Brands that underpromise and cite sources earn the reader. | Brand Ambassador session 1 | April 2026 |
| Third-party sourcing policy: cite credible sources by name; do not pay for quotable experts in Phase 1. | Brand Ambassador session 1 | April 2026 |
| Never put Fred Bartlit or Steven Droullard on camera for new content. Honor as founding authors; do not ask them to perform. | Brand Ambassador session 1 | April 2026 |
| Jeff sits inside the Proactive Caregiver (Margaret) persona — he is not external to it. The adult-child-of-aging-parent framing is the founder's own lived frame, not a demographic he observes from outside. | Brand Ambassador session 2 | April 2026 |
| David (the end user) is modeled across three moments: Before (pre-decline, resistant), Crisis (post-event, acute), After (post-crisis, recovering). **Crisis is out-of-scope for StrongPath Phase 1 content** — we meet David Before (prevention-curious) and After (rebuilding). Crisis belongs to rehab, clinicians, and acute care providers. | Brand Ambassador session 2 | April 2026 |
| Eunoia test applied to all David-facing copy: the copy must demonstrate goodwill toward David's dignity, autonomy, and intelligence. Failure mode to avoid: copy that treats David as a problem to be solved rather than a person to be met. | Brand Ambassador session 2 | April 2026 |
| `PRODUCT_CONCEPTS_BACKLOG.md` is the canonical holding file for product ideas generated during brand and persona work. Items in the backlog are not commitments — they are candidates for future prioritization. | Brand Ambassador session 2 | April 2026 |
| **The book *Choosing the StrongPath* is a credibility asset, not a source document.** Cite the book once per article where credibility is earned (typically the author bio line or a single reference supporting the authority position) — not as a recurring source. Source article content from current peer-reviewed research, credible clinical guidance, and Dr. Marni Boppart's published work where relevant, per the third-party sourcing policy above. If an idea in the book remains scientifically current, cite the underlying research the book drew from, not the book itself. **If the manuscript and newer research disagree, newer research wins.** This applies to every article, email, ad, and long-form asset the portfolio produces. | Chief of Staff session 4 (relayed to Content Writer) | April 22, 2026 |

---

## The Tone of This Project

Direct. Evidence-based. Every recommendation gets tied to a target persona, a funnel stage, or a measured outcome. Brand tone on external-facing copy: serious, direct, hopeful — in that priority order (per BRAND.md section 2). Never fear-based. Never miracle-cure. Always cite mechanisms (resistance training + protein + recovery) and reference the book's research foundation where applicable.

For David-facing copy specifically: apply the eunoia test. The copy must meet David where he is in the Before or After moment — with respect for his dignity, autonomy, and intelligence. Margaret-facing copy can be more direct about stakes because she is the proactive purchaser; David-facing copy earns the read by demonstrating goodwill first.

---

## Change Log

| Date | Change | Session |
|---|---|---|
| April 18, 2026 | Initial version. | — |
| April 19, 2026 | Added session 2 standing decisions: Jeff inside Margaret persona; David three-moment model (Before / Crisis-out-of-scope / After); eunoia test for David-facing copy; `PRODUCT_CONCEPTS_BACKLOG.md` as canonical backlog. Added `PERSONAS.md` and `PRODUCT_CONCEPTS_BACKLOG.md` to Tier 3 inheritance row and to the shared-brand-files list in the workspace structure. Updated "When updating project files" section to reference `AGENT_RULES.md` Canonical File Authorship rule. Added tone guidance for David-facing copy. | Brand Ambassador session 2 (closing) |
| April 21, 2026 | Tier 3 inheritance row cleaned up. Removed `QUIZ.md`, `GTM_V2.md`, `LESSONS_LEARNED.md` — confirmed not written; `QUIZ.md` lives in code rather than prose, `GTM.md` content is distributed across `PROJECT_INSTRUCTIONS.md` + `PUBLISHING_PLAN.md` + `METRICS.md`, and lessons learned already have homes in `BEST_PRACTICES.md` §BP-14 and `ACTIVE_VERTICALS.md`. Added `PUBLISHING_PLAN.md`, `METRICS.md`, `WORKSTREAM_STATUS.md` — these exist and are actively read by workstream chats. Kept `EMAIL_SEQUENCES.md` and `PAID_MEDIA.md` with a "planned" label. Extended the workspace structure diagram and the shared-canonical-files rule to match. | Chief of Staff session 1 |
| April 21, 2026 (later) | Added Chief of Staff and Claude Code as workstreams in the Workstream Model table. Added paragraph explaining Claude Code's different shape — implementation channel rather than strategic workstream; memory lives in repo files (`strongpath/CLAUDE.md`, `.claude/rules/`, `docs/`) rather than chat history; task definition is owned by Chief of Staff via `CODE_BACKLOG.md`. Added `CODE_BACKLOG.md` and `COMMANDS_BACKLOG.md` to the Tier 3 inheritance row, the workspace structure diagram, and the shared-canonical-files rule. Prompted by Chief of Staff best-practices research against community and Anthropic-official resources. | Chief of Staff session 1 (Flag 1) |
| April 22, 2026 | Added new standing decision to §Standing Decisions: the book *Choosing the StrongPath* is a credibility asset, not a source document. Articles cite the book once for authority; content is sourced from current peer-reviewed research, credible clinical guidance, and Dr. Boppart's published work. Newer research wins when the manuscript and current research disagree. Added a matching paragraph to §What This Vertical Is clarifying the book's role. Updated §Site note acknowledging that `strongpath.vercel.app` currently points to the archived hackathon build and will update after P0-00 ships. Updated §GitHub reference to reflect the fresh repo. Updated §When updating project files to reference the generalized File Authorship and Delivery rule in `AGENT_RULES.md` (replaces the prior Canonical File Authorship reference). Prompted by Content Writer session where Jeff clarified the book's role and asked the decision to propagate portfolio-wide. | Chief of Staff session 4 |
| April 22, 2026 (later) | No functional change — Claude Code already enumerated as the 9th row in §Workstream Model (added April 21 per Flag 1). Confirmed Claude Code's row is correct and complete; no revision needed. Separately confirmed this file's description matches current reality: 8 Claude.ai workstreams + 1 Claude Code implementation channel. | Chief of Staff session 4 |
| May 1, 2026 | Tier 3 inheritance row updated. Added `DESIGN.md` (new vertical-level file, owned by Brand Ambassador in Phase 1, consumed by CTO via `CODE_BACKLOG.md` P0-06 — strategic visual direction lives in `BRAND.md` §6, tactical implementation tokens live in `DESIGN.md`). Added `WORKSTREAM_CTO.md` (added to project files in session 6 — was previously omitted from this row). | Chief of Staff session 6 |

---

*Last updated: April 22, 2026 (Chief of Staff session 4). Update this file when StrongPath's scope, priorities, or working methods change significantly.*
