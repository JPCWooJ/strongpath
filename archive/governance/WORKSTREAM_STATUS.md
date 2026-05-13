# WORKSTREAM_STATUS.md

**StrongPath — Workstream Portfolio Status**
Prepared by Chief of Staff • April 22, 2026 (initial); last updated May 4, 2026 (session 16)
Authority: Tier 3 (vertical). Inherits from AGENT_RULES.md, PROJECT_INSTRUCTIONS.md, BEST_PRACTICES.md, ACTIVE_VERTICALS.md.
Owner: Chief of Staff chat.

---

## Distribution

**Canonical home:** `JPCWooJ/strongpath` repo, `agent-os/strongpath/governance/WORKSTREAM_STATUS.md` (GitHub, public).

**After commit to `main`:** Founder must refresh the Claude.ai project folder by re-uploading from the GitHub copy. The `/mnt/project/` cache is the previous version until that re-upload happens.

**OneDrive `.md` copies are deprecated and stale.** Do not read from OneDrive for any `.md` file.

---

## Purpose

Single-page portfolio view of every workstream on StrongPath. Produced to answer three questions the founder needs answered before any launch sequencing is possible:

1. Which workstreams are stood up, which are not, and what's blocking the not-stood-up ones?
2. Which canonical file does each workstream own, which does each consume, and where are single-source-of-truth risks hiding?
3. What gates each workstream — what has to be true before it can ship anything useful?

This file updates after any workstream transition (stood up, produced a deliverable, blocked, closed). It is the Chief of Staff's canonical status surface.

---

## How to read this file

- **§1** — Status legend and column definitions.
- **§2** — The workstream roster, one row per workstream.
- **§3** — File ownership map. Which workstream owns each canonical file and which files each workstream reads.
- **§4** — Critical gates. The dependencies between workstreams that determine launch sequencing.
- **§5** — Chief of Staff flags. Things I notice that aren't in any other file and should be addressed.
- **§6** — Change log.

---

## 1. Status legend

| Status | Meaning |
|---|---|
| 🔴 Not stood up | Chat does not exist yet. No deliverables. |
| 🟡 Stood up, not producing | Chat exists but has not produced a canonical deliverable. |
| 🟢 Producing | Chat has produced at least one canonical deliverable; actively iterating. |
| 🟠 Blocked | Chat exists, but cannot make further progress until an upstream gate clears. |
| ⚪ Closed | Chat has completed its Phase 1 scope. Preserved for reference. No active work. |

**Confidence tags** on Chief of Staff flags: **H** (High — defer by default), **C** (Calibrated — tradeoffs, here's the call), **O** (Outside my range — specialist needed).

---

## 2. The workstream roster

### 2.1 Chief of Staff *(this chat)*

| Field | Value |
|---|---|
| **Status** | 🟢 Producing |
| **Owns** | `WORKSTREAM_STATUS.md` (this file), `CODE_BACKLOG.md`, `COMMANDS_BACKLOG.md` |
| **Consumes** | All Tier 1–3 governing files |
| **Produces** | Status views, sequencing recommendations, launch readiness audits, file governance oversight, tool-usage guidance, cross-workstream coordination, code work queue, reusable-command/prompt backlog |
| **Upstream gates** | None |
| **Downstream consumers** | Founder (directly). All other workstream chats (indirectly — this file is read when a workstream session starts and needs to know what else is in flight). Claude Code (reads `CODE_BACKLOG.md` at session start). |
| **Flags** | None — this chat is the flag surface for everything else |

### 2.2 Brand Ambassador

| Field | Value |
|---|---|
| **Status** | 🟢 Producing — Phase 1 deliverables complete through session 3; design-system validation is current in-flight work |
| **Owns** | `BRAND.md`, `PERSONAS.md`, `brand-references.md`, `PRODUCT_CONCEPTS_BACKLOG.md`, `DESIGN.md` (new — Phase 1, transfers to a future Design / Creative Director workstream when visual creative becomes recurring work, likely Phase 2) |
| **Consumes** | `AGENT_RULES.md`, `PROJECT_INSTRUCTIONS.md`, `BEST_PRACTICES.md`, the book manuscript |
| **Produces** | Brand voice + positioning + review rubric; personas; external style guide distillation; product concept backlog; eunoia reviews of David-facing copy (ongoing); validation of Refero design specs against `BRAND.md` §6 (new) |
| **Upstream gates** | None — this workstream operates on the authority asset directly |
| **Downstream consumers** | Every other vertical-facing workstream (SEO, Content, Email, Paid Media, Community); Claude Code (consumes `DESIGN.md` as input to P0-06 implementation) |
| **Flags** | (1) Eunoia review for Brief 7 is required before Brief 7 publishes (W3). Review has not been scheduled yet. **Gate risk (H).** (2) `BRAND.md` v6 §6 specifies strategic visual direction but no `DESIGN.md` exists yet for tactical implementation tokens. Brand Ambassador validates a Refero spec as `DESIGN.md` next session — gates P0-06. **In flight (H).** (3) `BRAND.md` §6 should add a §6.5 cross-reference hook pointing to `DESIGN.md` once that file exists. Light edit, owned by Brand Ambassador, not blocking P0-06. **Watch (C).** |

### 2.3 SEO Strategist

| Field | Value |
|---|---|
| **Status** | 🟢 Producing — Phase 1 deliverables complete through session 3 |
| **Owns** | `CONTENT_PLAN.md`, `PUBLISHING_PLAN.md`, `METRICS.md`, `keyword-universe.md` (lives in OneDrive SEO workstream folder, not in chat project) |
| **Consumes** | `BRAND.md v4`, `PERSONAS.md v2`, `BEST_PRACTICES.md` (BP-04, BP-06, BP-08), `PROJECT_INSTRUCTIONS.md`, `AGENT_RULES.md` |
| **Produces** | Keyword research, 10 article briefs, 13-week publishing calendar, internal link map, Phase 1 metrics dashboard and review cadence |
| **Upstream gates** | `BRAND.md` and `PERSONAS.md` canonical — cleared. |
| **Downstream consumers** | Content Writer (primary), Paid Media Buyer (Phase 1b), Analytics & Growth (transition of `METRICS.md` ownership) |
| **Flags** | `METRICS.md` ownership transitions to Analytics & Growth when that chat stands up — carry-forward responsibility flagged here so it doesn't drop. **Watch (H).** |

### 2.4 Content Writer

| Field | Value |
|---|---|
| **Status** | 🟡 Stood up, not producing — chat created, no draft yet; Sanity gate cleared but Brief 10 will publish into the post-P0-06 redesigned site |
| **Owns** | Finished article drafts (in Sanity); no canonical `.md` deliverable of its own |
| **Consumes** | `CONTENT_PLAN.md`, `PUBLISHING_PLAN.md`, `BRAND.md v6`, `PERSONAS.md`, the book manuscript, `BEST_PRACTICES.md` (BP-04, BP-08), `DESIGN.md` (when it exists — for understanding how article pages render) |
| **Produces** | Article drafts in Sanity CMS, one per week per `PUBLISHING_PLAN.md` calendar |
| **Upstream gates** | (1) Brief 1 handoff from SEO Strategist — cleared. (2) Sanity CMS wired to the blog — **cleared** May 1, 2026 per CTO state-of-tech check (P0-02 shipped, commit `e8b0e13`, PR #3, three follow-up fixes). (3) Book manuscript accessible at OneDrive path — needs verification. (4) **New (May 1):** P0-06 design system shipped before Brief 10 publishes — drafting can proceed in Sanity drafts during P0-06 work, but first publish should land into the redesigned site to avoid the "1992-looking" first impression problem the design re-sequencing is solving for. |
| **Downstream consumers** | Founder (review), Sanity (final destination), Paid Media Buyer (article creative), Email Marketer (article excerpts for email) |
| **Flags** | Drafting can run in parallel with P0-06; first publish waits for P0-06 to ship. Coordinated handoff between Chief of Staff (timing) and Content Writer (drafting cadence) keeps the queue building without leaking work. **Coordination item (C).** |

### 2.5 Claude Code *(formalized as a workstream Apr 22, 2026; CTO chat is the strategic surface)*

| Field | Value |
|---|---|
| **Status** | 🟢 Producing — P0-00 through P0-05 shipped to `main` between April 22 and May 1, 2026. Active queue: P0-06 (design system), P0-07 (quiz funnel), P2-01 (fabricated metrics convention) |
| **Owns** | `JPCWooJ/strongpath` repo (fresh repo, April 22, 2026); implementation-level docs in `strongpath/docs/`; CTO chat owns strategic technical input to `CODE_BACKLOG.md` |
| **Consumes** | All Tier 1–3 files (read directly from `agent-os/` in the repo); `STACK.md` as authoritative for tech decisions; `CODE_BACKLOG.md` at session start; `DESIGN.md` (new — gates P0-06) |
| **Produces** | Code commits, deployed builds, database migrations, third-party integrations (Sanity ✅, Klaviyo ✅, Stripe pending, Sentry pending, Amazon Associates ✅ structurally) |
| **Upstream gates** | P0-06 gated on `DESIGN.md` existing (Brand Ambassador validates Refero spec). P0-07 gated on P0-06 (quiz funnel slot ships as part of design system). |
| **Downstream consumers** | Content Writer (Sanity ✅), Email Marketer (Klaviyo ✅, but engagement waits on P0-06), Analytics & Growth (GA4 events firing — verify), Paid Media Buyer (homepage ✅ structurally, design system pending, quiz funnel pending) |
| **Flags** | (1) GitHub MCP setup parked until trust gate clears per `WORKSTREAM_CTO.md` §3.3. CTO operates from `CODE_BACKLOG.md` alone in the meantime. **Watch (H).** (2) P0-06 design system is the single largest gate in the portfolio right now. Every traffic-driving workstream (Email, Community, Paid Media) is downstream of it. **Gate (H).** (3) Quiz funnel was assumed live during prior sequencing; CTO state-of-tech check May 1 surfaced it as a gap and it's now P0-07. Paid Media's downstream gate accordingly extended. **Resolved gap (H).** (4) Live Amazon Associates dashboard verification — structural code shipped (P0-05); founder should do a manual click test against the Associates dashboard before treating affiliate revenue as fully verified. **Verification (C).** |

### 2.6 Email Marketer

| Field | Value |
|---|---|
| **Status** | 🔴 Not stood up — engagement re-sequenced May 1, 2026 to wait on P0-06 design system |
| **Owns** | `EMAIL_SEQUENCES.md` (planned, not yet created) |
| **Consumes** | `BRAND.md`, `PERSONAS.md`, `CONTENT_PLAN.md` (for article excerpt inputs), `BEST_PRACTICES.md` (BP-02, BP-03), `METRICS.md` (subscriber and engagement targets), `DESIGN.md` (when it exists — for email visual system alignment) |
| **Produces** | Welcome sequence (7 emails), broadcast calendar, segmentation rules, quiz-result email templates, Klaviyo flow definitions |
| **Upstream gates** | (1) Klaviyo wired in code — **cleared May 1, 2026** (P0-04 shipped, commit `754bded`, PR #8). (2) Quiz funnel live — **NOT cleared** (P0-07 in backlog, blocked on P0-06). (3) `BRAND.md` and `PERSONAS.md` — cleared. (4) **New (May 1):** P0-06 design system shipped — driving subscribers to a redesigned site is the right surface; engaging Email before the redesign means welcome sequences send subscribers to the current under-credibility homepage. |
| **Downstream consumers** | Paid Media Buyer (post-click email nurture), Analytics & Growth (email engagement metrics feed the dashboard) |
| **Flags** | This workstream was the cleanest engage-now option as of CTO state-of-tech (May 1) — Klaviyo wired, footer capture live, source metadata flowing. Founder review of homepage design quality re-sequenced engagement to wait on P0-06. Drafting (welcome sequence, segmentation rules, quiz-result email templates, broadcast calendar) can run in parallel with P0-06 if Email Marketer chat stands up early — or wait. **Recommendation when ready: stand up Email Marketer the session after P0-06 ships.** **Timing (C).** |

### 2.7 Paid Media Buyer

| Field | Value |
|---|---|
| **Status** | 🔴 Not stood up |
| **Owns** | `PAID_MEDIA.md` (planned, not yet created) |
| **Consumes** | `BRAND.md`, `PERSONAS.md`, `CONTENT_PLAN.md`, `METRICS.md`, `BEST_PRACTICES.md` (BP-04 gate, BP-10 observability), `DESIGN.md` (when it exists — for landing page visual consistency with paid creative) |
| **Produces** | Meta and Google ad campaigns, creative briefs, budget allocation, landing page variants, campaign performance reports |
| **Upstream gates** | (1) BP-04 gate — 10 articles live. Per `PUBLISHING_PLAN.md`, this clears end of Week 11. (2) **P0-06 design system shipped** (new, May 1). (3) **P0-07 quiz funnel shipped** (new, May 1 — was assumed live, surfaced as gap during CTO state-of-tech check). (4) Email capture funnel working end-to-end — owned by Email Marketer + Claude Code. (5) Conversion tracking wired — owned by Claude Code + Analytics & Growth. |
| **Downstream consumers** | Analytics & Growth (paid performance metrics) |
| **Flags** | Phase 1 budget cap is <$5K per `PROJECT_INSTRUCTIONS.md`. This workstream's first job is likely a small Meta test at Week 11–12, not a full launch. Calibrate expectations when the chat stands up. **Scope note (H).** |

### 2.8 Analytics & Growth

| Field | Value |
|---|---|
| **Status** | 🔴 Not stood up |
| **Owns** | Inherits `METRICS.md` ownership from SEO Strategist when stood up |
| **Consumes** | GA4, GSC, Klaviyo dashboards, Amazon Associates, Sentry, Vercel Analytics, PostHog; `METRICS.md` as the operating document |
| **Produces** | Weekly metrics reviews (per `METRICS.md` §4 cadence), funnel insights, A/B test recommendations, Day 30/60/90 milestone reviews |
| **Upstream gates** | (1) Live traffic — can only review what exists. Stand up Week 4–5 at earliest, aligned with the Day 30 milestone review. (2) All analytics tools wired — Klaviyo is the holdout, owned by Claude Code. |
| **Downstream consumers** | Founder (decision-grade data); every other workstream (performance feedback loops) |
| **Flags** | Standing this up too early (pre-Day 30) produces thin reviews. Standing it up too late (post-Day 60) means Phase 1 runs without proper review cadence for half the period. **Window: Week 4–5 is the right stand-up moment.** **Calibrated (C).** |

### 2.9 Community Manager

| Field | Value |
|---|---|
| **Status** | 🔴 Not stood up |
| **Owns** | Outreach logs, community content calendar (files TBD when chat stands up) |
| **Consumes** | `BRAND.md`, `PERSONAS.md` (especially Dr. Chen persona for clinician outreach), `CONTENT_PLAN.md` (for article-sharing in communities) |
| **Produces** | Facebook group engagement, Reddit presence, LinkedIn outreach to PTs and geriatricians, clinician-facing outreach scripts |
| **Upstream gates** | (1) At least 4–6 published articles to share and link to — clears around Week 4–6. (2) Clinician landing page decision (`PUBLISHING_PLAN.md` §6, Week 11 checkpoint). |
| **Downstream consumers** | SEO (backlinks from community engagement), Paid Media (social proof elements for ad creative) |
| **Flags** | The Dr. Chen persona is documented as Phase 2 priority per `PERSONAS.md` §Persona 3. Community Manager's clinician outreach is mostly Phase 2 work. **Recommendation: stand up around Week 6–8 with Phase 1 scope limited to consumer community (Margaret/David forums), defer clinician outreach to Phase 2.** **Calibrated (C).** |

---

## 3. File ownership map

The canonical files and which workstream owns, updates, and reads each.

**Canonical home for all `.md` files:** `JPCWooJ/strongpath` repo, `agent-os/` tree (since May 4, 2026 — see Flag 8). OneDrive `.md` copies are stale and deprecated. Project folder copies and any other location are caches.

| File | Owner | Read by | Tier |
|---|---|---|---|
| `ABOUT_ME.md` | Founder | All agents, all projects | 1 |
| `AGENT_RULES.md` | Founder + any workstream that triggers a rule revision | All agents, all projects | 1 |
| `STACK.md` | Founder + Claude Code | All verticals | 2 |
| `BEST_PRACTICES.md` | Founder + any workstream with lessons to log | All verticals | 2 |
| `ACTIVE_VERTICALS.md` | Founder + Chief of Staff | Portfolio-level; all workstreams for vertical identity | 2 |
| `PROJECT_INSTRUCTIONS.md` | Founder | Every StrongPath workstream | 3 |
| `BRAND.md` | Brand Ambassador | Every StrongPath vertical-facing workstream | 3 |
| `PERSONAS.md` | Brand Ambassador | Every StrongPath vertical-facing workstream | 3 |
| `brand-references.md` | Brand Ambassador | Content Writer, Email Marketer (primary); all for reference | 3 |
| `DESIGN.md` *(planned, May 1)* | Brand Ambassador (Phase 1; transfers to Design / Creative Director workstream in Phase 2) | Claude Code (primary, P0-06 input); Email Marketer, Paid Media (visual system reference) | 3 |
| `PRODUCT_CONCEPTS_BACKLOG.md` | Brand Ambassador | Founder; future Product workstream | 3 |
| `CONTENT_PLAN.md` | SEO Strategist | Content Writer (primary); Paid Media (reference) | 3 |
| `PUBLISHING_PLAN.md` | SEO Strategist | Content Writer (primary); all for sequencing | 3 |
| `METRICS.md` | SEO Strategist → Analytics & Growth (transition) | All workstreams for target context; Analytics & Growth operationally | 3 |
| `WORKSTREAM_STATUS.md` *(this file)* | Chief of Staff | All workstreams at session start; founder | 3 |
| `CODE_BACKLOG.md` | Chief of Staff | Claude Code sessions (at session start); founder | 3 |
| `COMMANDS_BACKLOG.md` | Chief of Staff | Every workstream that activates a command or prompt template; founder | 3 |
| `EMAIL_SEQUENCES.md` *(planned)* | Email Marketer | Email Marketer; Paid Media (post-click nurture reference) | 3 |
| `PAID_MEDIA.md` *(planned)* | Paid Media Buyer | Paid Media Buyer; Analytics & Growth | 3 |
| `keyword-universe.md` | SEO Strategist | SEO Strategist internal working file; lives in OneDrive not chat project | 3 (OneDrive only — non-`.md` rules apply) |

**Map completeness note (Apr 22, 2026 update):** The prior version of this section flagged `GTM.md`, `QUIZ.md`, and `LESSONS_LEARNED.md` as references in the inheritance chain with no ownership rows. Those files were formally removed from `PROJECT_INSTRUCTIONS.md` Tier 3 inheritance on April 21, 2026 (per `PROJECT_INSTRUCTIONS.md` change log) — confirmed not written: `QUIZ.md` lives in code rather than prose; `GTM.md` content is distributed across `PROJECT_INSTRUCTIONS.md` + `PUBLISHING_PLAN.md` + `METRICS.md`; lessons learned have homes in `BEST_PRACTICES.md` §BP-14 and `ACTIVE_VERTICALS.md`. The inheritance chain and this map are now consistent. Gap closed.

---

## 4. Critical gates — what sequences everything

The dependency graph between workstreams. Read from left to right: what has to clear before what can happen.

```
Brand Ambassador ✅ ─┐
                    ├─→ Content Writer drafting Brief 10 in Sanity (parallel)
SEO Strategist ✅ ──┘

Brand Ambassador validates DESIGN.md (Refero spec) ─┐
                                                    ├─→ P0-06 design system implementation
Claude Code (P0-00 → P0-05 ✅) ────────────────────┘    │
                                                        ├─→ Brief 10 publishes to redesigned site
                                                        ├─→ Email Marketer engages
                                                        ├─→ P0-07 quiz funnel ─→ Paid Media gate (1 of 3)
                                                        └─→ Follow-up: full credibility section content (was P1-01)

Sanity ✅ + DESIGN.md + first publish → Articles publishing cadence begins
Articles publishing + Klaviyo ✅ → Analytics & Growth stand up (Week 4–5 from first publish)
10 articles live + P0-07 + Email funnel working → Paid Media stand up (Week 11+ from first publish)
4–6 articles live → Community Manager stand up (Week 6–8 from first publish)
```

**The single-most-important gate (May 1):** **P0-06 design system implementation.** Three sub-gates clear it: (1) founder selects a Refero style, (2) Brand Ambassador validates against `BRAND.md` v6 §6 and signs off `DESIGN.md`, (3) Claude Code ships the implementation. Every traffic-driving workstream — Email Marketer, Community Manager, Paid Media — is downstream of this. Driving traffic to the current homepage wastes acquisition effort against a surface that does not signal authority.

**Second-most-important gate:** Content Writer producing Brief 10 in Sanity drafts. Sanity is wired (P0-02 ✅), so drafting can run fully in parallel with P0-06. First publish lands into the redesigned site; the drafted queue is ready when the design ships.

**Third-most-important gate:** P0-07 quiz funnel implementation. Surfaced as a gap during the May 1 CTO state-of-tech check — was assumed live but no backlog item existed. Now ships into the slot established by P0-06. Gates Paid Media engagement.

These three sequence everything else. Every other workstream is downstream.

---

## 5. Chief of Staff flags

### Flag 1 — Claude Code is not a named workstream, but it is the single largest gate in the portfolio

**Confidence: High.** *Resolved May 1, 2026 (session 6).*

`PROJECT_INSTRUCTIONS.md` Workstream Model previously listed seven workstreams omitting Claude Code. Resolved in session 6: Claude Code is now formalized as a workstream with the CTO chat as its strategic surface. `WORKSTREAM_CTO.md` codifies the operating model — Path A (founder couriers prompts to local Claude Code instance) is the current mode; Path B (GitHub MCP, direct repo access) parked behind a trust gate per §3.3. CTO operates from `CODE_BACKLOG.md` until the gate clears. P0-00 through P0-05 shipped to `main` between April 22 and May 1 under this model. Flag closed.

### Flag 2 — Three files referenced in the inheritance chain are not in the chat project

**Confidence: Calibrated.**

*Resolved April 21, 2026.* `PROJECT_INSTRUCTIONS.md` Tier 3 inheritance row was cleaned up in Chief of Staff session 1 — `QUIZ.md`, `GTM_V2.md`, and `LESSONS_LEARNED.md` were removed from the inheritance list after confirming they're not written as standalone files. `EMAIL_SEQUENCES.md` and `PAID_MEDIA.md` remain with a "planned" label. The map in §3 is consistent. Flag closed.

### Flag 3 — BP-12 in `BEST_PRACTICES.md` contradicts the current `AGENT_RULES.md` on archiving

**Confidence: High.**

`BEST_PRACTICES.md` §BP-12 specifies archiving to Google Drive (`Project File Archive / [Project Name] / folder`) and using `YYMMDD_FILENAME_vX.md` naming with version suffixes.

`AGENT_RULES.md` (April 20, 2026 update) supersedes this: archive path is `OneDrive / JCVC / Archive /` (flat), format is `YYMMDD_FILENAME.md` (no `_vN` suffix). The `AGENT_RULES.md` change log documents the supersession explicitly.

The contradiction is known and documented. But a future agent reading `BEST_PRACTICES.md` without also reading the `AGENT_RULES.md` change log will follow the wrong rule. `AGENT_RULES.md` is a universal (Tier 1) file and wins per the precedence rule, so behavior is probably correct — but the contradiction is latent confusion and should be cleaned up.

**Recommendation:** Update BP-12 in `BEST_PRACTICES.md` to match the current `AGENT_RULES.md` archiving convention. Small `.md` edit, takes minutes.

### Flag 4 — File governance — your stated first concern — has three specific risk surfaces

**Confidence: High.** *Resolved April 22, 2026. Superseded May 4, 2026 — see Flag 8.*

Five carry-forward items closed in Chief of Staff session 3:

1. **`JPCWooJ/claude-playbook` repo** — archived April 22, 2026. OneDrive remains canonical Tier 1 home. Do not revive; re-evaluate at Day 90 retrospective.
2. **`VERTICAL_TEMPLATE.md`** — remains in OneDrive `JCVC / eComm /` (correct location per four-folder rule). Tier 2 eComm Claude.ai project deferred until vertical #2 onboarding.
3. **`WORKSTREAM_STATUS.md` ownership map** — `CODE_BACKLOG.md` and `COMMANDS_BACKLOG.md` rows added to §3; Chief of Staff §2.1 row updated.
4. **GitHub-as-canonical-file-home migration** — deferred to Day 90 retrospective. **Superseded May 4, 2026:** completed early — see Flag 8.
5. **Four-folder rule discipline** — standing principle; codified in `AGENT_RULES.md` §File and Folder System. No file change needed.

Original risk surfaces (4a–4c) remain valid and are carried forward for future sessions:

- **Risk 4a:** Verbal/mental versioning drifts from file-level versioning. Fix: downstream inheritance headers reference canonical filenames only; Brand Ambassador notifies workstreams on material `BRAND.md` changes.
- **Risk 4b:** OneDrive and Claude.ai project can diverge. **Resolved by Flag 8** — GitHub is now canonical for `.md`; both OneDrive and the project folder are caches.
- **Risk 4c:** Workstream sub-folder discipline under `StrongPath /` not yet maintained. Fix: session-end "files saved where" artifact, enforced by Chief of Staff.

### Flag 5 — Tool literacy — your stated second concern — has a clear sequencing answer

**Confidence: High.** *Resolved April 22, 2026.*

- **Claude Code: engage now.** The P0 site fixes are its job. Chat stood up per Flag 1; `CODE_BACKLOG.md` seeded; P0-00 (scaffold) is next to execute.
- **Claude Work: not yet.** Week 4–5 conversation, aligned with Analytics & Growth stand up.
- **MCP servers: already configured.** `STACK.md` §MCP Infrastructure tracks live/pending; Chief of Staff monitors health.
- **Asana: disconnected April 22, 2026.** Confirmed unused. Removed from Claude.ai Connectors; removed from `STACK.md` Claude.ai MCP Servers table; added to "What Is NOT in the Stack" table. Sub-item closed.

All Flag 5 sub-items resolved. Flag closed.

### Flag 6 — Design quality is a P0 that was not previously in the backlog

**Confidence: High.** *New, May 1, 2026 (session 6).*

Founder review of the current shipped homepage (P0-03 ✅ structurally) determined visual quality is below the credibility threshold the brand requires — characterized as "1992-looking." Driving traffic to this surface via Email, Community, or Paid Media wastes acquisition effort against a site that does not signal authority. Re-sequencing the portfolio to ship a credible visual system before any further functional or traffic work.

Resolution path codified this session:

1. **Founder selects a Refero style** (or shortlist) from styles.refero.design — visual references that match StrongPath's editorial-not-athletic, navy/gold direction per `BRAND.md` v6 §6.
2. **Brand Ambassador validates the selected style against `BRAND.md` v6 §6** and signs off as `DESIGN.md`. Eunoia review applied to visual system, same way it's applied to copy.
3. **Claude Code ships P0-06** — implementation across homepage, blog list, blog single, book page. Includes layout placeholders for full credibility section (was P1-01, now folded in) and quiz funnel entry (P0-07 destination).
4. **Claude Code ships P0-07** — quiz funnel into the slot established by P0-06.

`DESIGN.md` ownership: Brand Ambassador in Phase 1; transfers to a future Design / Creative Director workstream when visual creative becomes recurring work (likely Phase 2, when Email Marketer custom email design and Paid Media creative variants start compounding). No standing Design workstream this session.

Engagement schedule for downstream workstreams (Email, Community, Paid Media) re-sequenced behind P0-06 — see updated §4 gate diagram. **Gate (H).**

### Flag 7 — DESIGN.md handoff to Brand Ambassador and BRAND.md §6.5 hook

**Confidence: Calibrated.** *New, May 1, 2026 (session 6).*

Two coordination items follow from Flag 6 and need explicit handoffs:

1. **Brand Ambassador handoff.** A markdown agent-to-agent message (per `AGENT_RULES.md` §Agent-to-Agent Communication) goes to the Brand Ambassador chat next session, framing the `DESIGN.md` validation work — what Refero is, where the chosen style URL will be provided, what `BRAND.md` v6 §6 sections to validate against, what the output `DESIGN.md` should contain (color tokens, typography tokens, spacing scale, component library, motion language), and the handoff target (Claude Code via P0-06). Owner: Chief of Staff (next session).

2. **`BRAND.md` §6.5 hook.** Once `DESIGN.md` exists, `BRAND.md` §6 should add a §6.5 cross-reference pointing to it — single short paragraph stating that strategic visual direction lives here in §6.1–§6.4 and tactical implementation tokens live in `DESIGN.md`. Owned by Brand Ambassador (file ownership), light edit, not blocking. Should land in the same session Brand Ambassador validates `DESIGN.md`. Chief of Staff flags it; Brand Ambassador executes.

Neither item blocks P0-06. Both prevent the latent confusion of `BRAND.md` and `DESIGN.md` drifting silently. **Coordination (C).**

### Flag 8 — GitHub is now canonical for `.md`; OneDrive `.md` copies deprecated

**Confidence: High.** *New, May 4, 2026 (session 15 outcome, logged session 16).*

Sessions 13–15 worked through the file-substrate question that had been parked since April 22 (Flag 4 carry-forward item 4). Outcome: the 17 canonical `.md` files now live in `JPCWooJ/strongpath` (public) under a new top-level `agent-os/` directory. PR #11 squash-merged to `main` on May 4, 2026. Drive is no longer in the picture for `.md`.

**Canonical state:**

- **GitHub** — `JPCWooJ/strongpath/agent-os/` is canonical for all 17 `.md` files. Structure: `portfolio/` (5 files), `strongpath/governance/` (4), `strongpath/brand/` (3), `strongpath/seo/` (3), `strongpath/operations/` (2), plus `agent-os/README.md`.
- **OneDrive `.md` copies** — stale; deprecated; will be deleted later. Do not read, do not write.
- **Claude.ai project folder (`/mnt/project/`)** — cache. Refreshed by re-uploading from GitHub copies after each canonical update.
- **Non-`.md` assets** (book manuscript `.docx`, design reference images, brand assets) — remain on OneDrive. Decision pending stay vs move to Drive — logged in `CODE_BACKLOG.md` for later resolution.

**Founder workflow:** VS Code + Claude Code in `C:\Users\Jeffrey\Dev\strongpath`. `gh auth login` complete; patch-apply / branch / push / PR / squash-merge flow rehearsed.

**Cross-workstream impact:** every workstream chat that previously read OneDrive `.md` paths now reads GitHub paths. `PROJECT_INSTRUCTIONS.md` updated this session to point all workstreams at GitHub as source of truth. `AGENT_RULES.md` §Cloud Storage Access Patterns updated as needed.

**Carry-forward:** `JPCWooJ/claude-playbook` repo still exists, unmaintained, flagged in memory; not in scope.

---

## 6. Change log

| Date | Change | Session |
|---|---|---|
| April 21, 2026 | Initial version. Workstream roster, file ownership map, critical gates, and five Chief of Staff flags established. | Chief of Staff session 1 |
| April 22, 2026 | §2.1 Chief of Staff row updated to reflect ownership of `CODE_BACKLOG.md` and `COMMANDS_BACKLOG.md`. §3 file ownership map: added rows for `CODE_BACKLOG.md` and `COMMANDS_BACKLOG.md`. §3 "Gaps I see in the map" paragraph replaced with "Map completeness note" documenting closure. §2.5 Claude Code row updated for fresh `JPCWooJ/strongpath` repo. §4 gates diagram updated. §5 Flag 2 closed. §5 Flag 3 archive path corrected. | Chief of Staff session 3 (Flag 4 open) |
| April 22, 2026 (later) | §5 Flag 4 closed — all five carry-forward items resolved (`claude-playbook` archived; `VERTICAL_TEMPLATE.md` stays in OneDrive; ownership map updated; GitHub migration deferred; four-folder discipline acknowledged). §5 Flag 5 closed — Asana disconnected and removed from `STACK.md`. Original Flag 4 risk surfaces (4a–4c) preserved as carry-forward for future sessions. | Chief of Staff session 3 (Flags 4 + 5 close-out) |
| May 1, 2026 | Major session 6 update. (1) §2.2 Brand Ambassador — added `DESIGN.md` ownership; added Refero validation as in-flight work; added flags for Brief 7 eunoia, in-flight design validation, and `BRAND.md` §6.5 hook. (2) §2.4 Content Writer — Sanity gate cleared per CTO state-of-tech; first publish now waits on P0-06 design system; drafting can run in parallel. (3) §2.5 Claude Code — full row update reflecting workstream formalization, P0-00 through P0-05 done, P0-06 + P0-07 + P2-01 active, GitHub MCP trust gate parked. (4) §2.6 Email Marketer — Klaviyo gate cleared; engagement re-sequenced behind P0-06 (was Week 5–6 by calendar, now post-P0-06). (5) §2.7 Paid Media — quiz funnel gap surfaced and now P0-07; gates list expanded. (6) §3 file ownership map — added `DESIGN.md` row. (7) §4 critical gates — diagram and prose rewritten; P0-06 design system is the new top-of-portfolio gate; Content Writer drafting and P0-07 quiz funnel sequenced behind it. (8) §5 Flag 1 closed (Claude Code formalized). (9) §5 Flag 6 added — design quality as P0. (10) §5 Flag 7 added — DESIGN.md handoff and BRAND.md §6.5 hook. Prompted by founder review of current homepage as below credibility threshold + CTO state-of-tech check that surfaced the quiz funnel as a gap. | Chief of Staff session 6 |
| May 4, 2026 | Header (canonical home), Distribution block, §2.5 Claude Code consumes line, §3 ownership-map preamble, Flag 4 supersession note, Risk 4b resolution, and new Flag 8 added — recording GitHub-canonical migration completed via PR #11 squash-merged to `main`. 17 canonical `.md` files now live in `JPCWooJ/strongpath/agent-os/`. OneDrive `.md` copies deprecated. Project folder is a cache. Non-`.md` assets remain on OneDrive pending stay-vs-move decision (logged in `CODE_BACKLOG.md`). | Chief of Staff session 16 |

---

*This file is the Chief of Staff's canonical portfolio view. It updates after any workstream transition (stood up, produced a deliverable, blocked, closed) or when a new flag emerges. It is read by every workstream chat at session start so each chat understands where it sits in the larger portfolio.*
