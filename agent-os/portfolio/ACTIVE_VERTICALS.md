<!--
OPERATIONAL CLASSIFICATION: ACTIVE OPERATIONAL REFERENCE
Portfolio status reference. Not primary StrongPath governance. docs/governance/ wins on conflict.
-->

# ACTIVE_VERTICALS.md — Vertical Registry

**Purpose:** Single source of truth for all active, in-progress, and planned verticals in the portfolio.  
**Update frequency:** After every significant milestone — launch, first revenue, first 1,000 subscribers, Phase 2 kickoff.  
**Last updated:** April 18, 2026

---

## Portfolio Summary

| Status | Count |
|--------|-------|
| Live (Phase 1) | 0 |
| In Development | 1 |
| Planned | 0 |
| **Total** | **1** |

**Cumulative portfolio revenue (MRR):** $0 (pre-revenue)  
**Total email subscribers across all verticals:** 0 (pre-launch)

---

## Vertical 1 — StrongPath

### Identity
| Field | Value |
|-------|-------|
| **Status** | 🟡 In Development |
| **Domain** | strongpath.com (Namecheap) |
| **Test URL** | https://strongpath.vercel.app |
| **GitHub** | https://github.com/JPCWooJ/strongpath (branch: team/ria) |
| **Vertical type** | Health / Fitness |
| **Topic** | Sarcopenia — age-related muscle loss |
| **Target customer** | Adults 50-75, their adult children (45-60) as purchasers |

### Authority Asset
| Field | Value |
|-------|-------|
| **Book** | *Choosing the StrongPath* |
| **Amazon rank** | Bestseller in Aging, Weight Training, Exercise, and Longevity (four categories). Not #1 — goal, not claim. |
| **Authors** | Fred Bartlit and Steven Droullard (founding authors; no active role) |
| **Co-author / scientific contributor** | Dr. Marni Boppart, ScD (Associate Professor of Kinesiology, University of Illinois Urbana-Champaign). Published co-author of the book. Passive in Phase 1. |
| **Founder / operator** | Jeff Camp. Co-founder with Bartlit and Droullard; now owns all rights and leads the platform. |
| **Medical advisor (active)** | None in Phase 1. Role open for Phase 2. |

### Revenue Model
| Stream | Status | Target (Year 1) |
|--------|--------|----------------|
| Amazon affiliate | ✅ Tag verified structurally (P0-05); runtime click verification pending | $70K |
| Email list | ✅ Footer capture wired to Klaviyo (P0-04); welcome sequence pending Email Marketer engagement | 50K subscribers |
| Digital programs | ✅ Pricing page live ($49 / $129) | $180K |
| Membership | 🔴 Not implemented | $120K |
| Supplements (Phase 2) | 🔴 Deferred | — |

**Year 1 Revenue Target:** $500K ARR  
**Budget:** $280-350K (ads 35%, content 25%, staff 30%, tech 10%)

### Tech Stack Audit
*Updated May 1, 2026 to reflect fresh `JPCWooJ/strongpath` repo state. Items shipped through P0-05 marked ✅. Status references the fresh repo, not the archived hackathon build.*

| Component | Status | Notes |
|-----------|--------|-------|
| Next.js 14 + TypeScript | ✅ | Scaffolded P0-00 |
| Tailwind CSS | ✅ | Scaffolded P0-00 |
| Vercel deployment | ✅ | Live |
| Supabase | ✅ | Configured, not fully wired |
| Sanity CMS | ✅ | Wired to blog list and single-post routes (P0-02). `/studio` mounted in same Next.js app. |
| Anthropic Claude API | ✅ | Wired (P0-01). OpenAI not present in fresh repo. |
| Resend | ✅ | Configured |
| Klaviyo | ✅ | Wired (P0-04). `/api/subscribe` route live with source metadata. |
| Sentry | ✅ | Configured |
| GA4 | ✅ | Configured |
| Vercel Analytics | ✅ | Built in |
| Lighthouse CI | ✅ | Configured |
| Feature flags | ✅ | `lib/feature-flags.ts` present |
| UptimeRobot | ✅ | Documented in `docs/uptime-monitoring.md` |

### Critical Fixes Required Before Traffic
*Updated May 1, 2026. Old fixes (1992-era hackathon build) superseded by fresh-repo P0-00 through P0-05. The current critical-fixes list is maintained in `agent-os/strongpath/operations/CODE_BACKLOG.md`. This table is a portfolio status summary, not active governance.*

| Priority | Fix | Status | Source |
|----------|-----|--------|--------|
| ✅ P0 | Repo scaffold, Anthropic wiring, Sanity wiring, homepage, Klaviyo wiring, Amazon Associates tag | Shipped April 22 – May 1, 2026 (P0-00 → P0-05) | `CODE_BACKLOG.md` §4 Done |
| 🔴 P0 | Implement design system from Brand-Ambassador-validated `DESIGN.md` | In flight (founder selecting Refero candidates; Brand Ambassador to evaluate) | `CODE_BACKLOG.md` §3.1 (P0-06) |
| 🔴 P0 | Quiz funnel implementation | Blocked on P0-06 (slot ships as part of design system) | `CODE_BACKLOG.md` §3.2 (P0-07) |
| 🟡 P2 | Defensive convention against fabricated social proof metrics | Active; defensive (no fabricated metrics shipped yet on fresh repo) | `CODE_BACKLOG.md` §3.3 (P2-01) |
| 🟡 — | Full author credibility section content (book cover, three-author credit line, bestseller line, `<AmazonLink />`) | Layout slot ships in P0-06; content fills slot in a follow-up item | `CODE_BACKLOG.md` §5.1 Parked |
| 🟡 — | Expand stub blog posts and add to 10 minimum | Owned by Content Writer + SEO Strategist; 13-week publishing calendar in `PUBLISHING_PLAN.md` | `PUBLISHING_PLAN.md` |

### Milestones
| Milestone | Target Date | Actual Date | Notes |
|-----------|-------------|-------------|-------|
| Site live (test) | April 2026 | April 2026 | Grok hackathon build |
| MCP agent toolchain configured | April 2026 | April 2026 | GitHub, Context7, Sentry connected in Claude Code |
| Brand foundation complete | April 2026 | April 2026 | BRAND.md v3 + brand-references.md canonical. Brand Ambassador session 1. |
| Personas defined | April 2026 | — | PERSONAS.md — Brand Ambassador session 2 |
| Critical fixes complete | May 2026 | — | |
| 10 blog posts live in Sanity | May 2026 | — | |
| Email list: 1,000 subscribers | June 2026 | — | |
| First affiliate revenue | June 2026 | — | |
| First digital product sale | July 2026 | — | |
| Email list: 10,000 subscribers | Sept 2026 | — | |
| Membership launch | Aug 2026 | — | |
| $500K ARR run rate | Dec 2026 | — | |
| Series A readiness | Q1 2027 | — | |

### Lessons Learned (Running Log)
*Add entries as real data and experience accumulate.*

| Date | Lesson | Source |
|------|---------|--------|
| April 2026 | Grok (hackathon AI) chose correct stack independently — confirms Next.js+Supabase+Sanity+Vercel is the right foundation | Grok/Claude comparison analysis |
| April 2026 | Grok defaulted to OpenAI — confirms AI agents need explicit instruction to use Anthropic | Same |
| April 2026 | Grok wired observability (Sentry, Lighthouse CI, feature flags, uptime) without being asked — this should be standard | Same |
| April 2026 | Content-first strategy not followed — blog launched with stubs, CMS not wired — never repeat | Same |
| April 2026 | The authority asset (book + authors) must be the FIRST thing specified in the agent brief, not an afterthought | Same |
| April 2026 | Claude Code and Claude.ai maintain separate MCP configurations — development servers (GitHub, Sentry, Vercel) belong in Claude Code; productivity servers (Asana, Drive, Tavily) belong in Claude.ai | MCP setup session |
| April 2026 | Evaluated 40 MCP servers; 17 relevant, 23 rejected. Key gaps: no Sanity MCP, no Klaviyo MCP, no GA4 MCP — agents cannot fully operate these tools autonomously | MCP evaluation |
| April 2026 | Vercel MCP failed to connect via both npm and HTTP methods on Windows — parked. Vercel dashboard + CLI sufficient for now | MCP setup session |
| April 2026 | Never share API tokens in chat. If exposed, regenerate immediately. Use Notepad or password manager as intermediary when building CLI commands with credentials | MCP setup session |
| April 2026 | Superseded workspace note: OneDrive was the original workspace for StrongPath workstreams. Active governance now lives in `docs/governance/`. | Brand Ambassador session 1; superseded May 2026 |
| April 2026 | Each workstream chat gets its own OneDrive sub-folder under `StrongPath/`. Shared brand files live at the root. Clean handoffs between workstreams require workspace separation. | Brand Ambassador session 1 |
| April 2026 | Session-per-deliverable pattern with structured handoff prompts saves significant tokens vs. extending one chat indefinitely. Pattern: finish deliverable → write handoff to next session → new chat reads canonical files rather than prior conversation. | Brand Ambassador session 1 |
| April 2026 | Founder style is "defer to expert on craft, ask good questions on process." Agents should tag confidence levels (High / Calibrated / Outside my range) so the founder knows where to push and where to defer. | Brand Ambassador session 1 |
| April 2026 | Brand authority must reflect current state, not historical state. The prior Grok build and early project files referenced Boppart as "medical face" and Bartlit as "legal counsel" — both outdated. Session 1 corrected to: Boppart as published book co-author (passive), Bartlit as founding author of record (not involved), Jeff as sole operator. | Brand Ambassador session 1 |

### Key Contacts
| Role | Name | Contact |
|------|------|---------|
| Founder / Operator | Jeff Camp | jeff@jcventurecap.com |
| Founding Author | Fred Bartlit | Retired from operations; honored as origin |
| Founding Author | Steven Droullard | Retired from operations; honored as origin |
| Book Co-author / Research source | Dr. Marni Boppart, ScD | Passive. Re-engage as paid advisor in Phase 2. |
| Active Medical Advisor | — | Role open. Fill in Phase 2. |

---

## Vertical 2 — [Next Vertical]

*Use `VERTICAL_TEMPLATE.md` to complete this entry before beginning development.*

### Vertical Selection Scorecard
Rate each criterion 1-5 before committing to a new vertical.

| Criterion | Score (1-5) | Notes |
|-----------|-------------|-------|
| Existing authority asset (book, brand, credentials) | | |
| Clear pain point with measurable search volume | | |
| Supplement / affiliate product potential | | |
| Digital product viability (can charge $49-$149) | | |
| No FDA / prescription drug entanglement | | |
| No dominant DTC brand in the space | | |
| **Total (30 max)** | | Proceed if ≥ 22 |

---

## Portfolio Governance

### Adding a New Vertical
1. Complete `VERTICAL_TEMPLATE.md` for the new vertical
2. Score it using the Vertical Selection Scorecard above (≥22 to proceed)
3. Add an entry to this file with Status: 🔵 Planned
4. Create a new GitHub repo using the canonical folder structure from `STACK.md`
5. Update Portfolio Summary table at the top of this file

### Updating an Existing Vertical
1. Update the relevant vertical's section when milestones are hit
2. Add lessons learned with date and source
3. Update Portfolio Summary MRR and subscriber counts monthly

### When a Vertical Reaches Phase 2
Add a "Phase 2" subsection covering:
- Supplement/physical product launch plan
- B2B/clinical referral program
- Series A readiness metrics
- Shared infrastructure decisions (monorepo migration, shared component library)

---

*This register is the portfolio's single source of truth. An investor, a new team member, or a new AI agent should be able to read this file and understand the entire portfolio's status in under 5 minutes.*

*May 1, 2026 update: Tech Stack Audit, Revenue Model status icons, and Critical Fixes table refreshed to reflect fresh `JPCWooJ/strongpath` repo state. Old hackathon-build P0s (broken `/app` route, OpenAI-not-Anthropic, hardcoded blog content, unwired Klaviyo) are no longer applicable — the fresh repo's P0-00 through P0-05 superseded the entire setup. Current critical fixes maintained in `CODE_BACKLOG.md`; design system implementation (P0-06) is the new top gate. Chief of Staff session 6.*
