# PROJECT_INSTRUCTIONS.md

Status: Canonical StrongPath operating brief
Last updated: May 2026

## Purpose

This file gives agents the minimum standing context needed to work on StrongPath without re-deriving the business, reader, authority, and execution constraints.

`docs/governance/` is the active governance source. If this file conflicts with `docs/governance/README.md`, `AGENT_RULES.md`, role profiles, or lane-specific governance, use the more specific current file and flag the conflict.

## StrongPath

StrongPath is an evidence-based strength and sarcopenia platform for adults 50+ and adult children supporting aging parents.

Topic:
- sarcopenia
- age-related muscle loss
- strength, protein, recovery, independence, and healthspan after 50

Public posture:
- serious
- direct
- hopeful
- evidence-based
- never fear-led, miracle-cure, or hype-driven

Repository:
- GitHub: `JPCWooJ/strongpath`
- Active governance: `docs/governance/`
- Operational references: `agent-os/strongpath/seo/CONTENT_PLAN.md`, `agent-os/strongpath/operations/CODE_BACKLOG.md`, selected `agent-os/portfolio/` files

## Authority Position

StrongPath's authority asset is *Choosing the StrongPath*, an Amazon bestseller in Aging, Weight Training, Exercise, and Longevity.

Founding authors:
- Fred Bartlit
- Steven Droullard

Scientific contributor:
- Dr. Marni Boppart, ScD, published co-author and cited research source
- passive in Phase 1
- not described as active medical director or active advisor

Operator:
- Jeff Camp
- public founder face
- not a clinician
- translator between research and reader
- owns the rights and carries the work forward

Book rule:
- The book is credibility, not current health-claim substantiation.
- Article claims use current peer-reviewed research, credible clinical guidance, and relevant published work.
- If the book and newer evidence conflict, newer evidence wins.
- Cite the book for origin and authority, not as proof for current intervention claims.

## Readers

Primary end user:
- adults 50-75, especially 55-72
- beginning to notice physical decline, weakness, or loss of confidence
- addressed with dignity, autonomy, and goodwill

Primary purchaser:
- adult children aged 45-60 buying for or helping aging parents
- often motivated by love, concern, and practical responsibility
- message differs from end-user copy

Tertiary reader:
- allied health professionals
- PTs, OTs, geriatric RNs, clinicians, and serious health educators
- require visible citation discipline and restrained claims

Persona details live in `PERSONAS.md`. Brand voice and public framing live in `BRAND.md` and `COPY_GOVERNANCE_STANDARD.md`.

## Phase 1 Business Model

Launch sequence:
1. Amazon affiliate links
2. Email capture
3. Digital products at roughly `$49` and `$129`
4. Membership
5. Supplements only after Phase 1 proof and compliance readiness

Phase 1 constraints:
- bootstrap discipline
- less than `$5,000` cash outlay until Day 90 targets are hit
- content before paid traffic
- email list is the core business asset
- no fabricated social proof
- no commerce pressure near medical-adjacent claims

Phase 1 targets:
- first affiliate dollar within 45-60 days of launch
- 1,200 email subscribers by Day 90
- 4,000 organic sessions by Day 90
- `$400-600` cumulative affiliate revenue by Day 90
- 45+ indexed pages in Google Search Console

## Execution Rules

Default posture:
- bias toward execution
- keep changes scoped
- preserve trust before reach
- protect claim discipline
- avoid new process unless it removes more complexity than it adds

Before work:
- read the specific governance files relevant to the task
- use `docs/governance/README.md` for authority order
- read `BRAND.md`, `PERSONAS.md`, and `COPY_GOVERNANCE_STANDARD.md` for public-facing copy
- read `EDITORIAL_*` files for article/editorial systems
- read `GTM_*`, `METRICS.md`, and `X_DISTRIBUTION_OPERATING_SYSTEM.md` for distribution and growth
- read `CTO_AGENT_PROFILE.md` and `CODEX_EXECUTION_STANDARD.md` for engineering execution

When producing implementation work:
- write or patch the repo directly when instructed
- use `CODEX_EXECUTION_STANDARD.md` for scopes, acceptance criteria, verification, and returns
- do not modify app/UI/content code as part of governance cleanup
- do not alter secrets, DNS, billing, production env vars, or external accounts without explicit founder approval

When producing public copy:
- identify the primary reader
- avoid prohibited claim language
- separate evidence links from commerce links
- keep CTAs restrained and reader-appropriate
- cite current third-party sources for health, safety, intervention, supplement, protein, fall-risk, frailty, disease-adjacent, and quantitative claims

## Standing Decisions

Do not re-debate these without a clear reason:

| Decision | Operating Rule |
|---|---|
| Anthropic Claude API, not OpenAI | Platform decision for AI features. |
| Next.js, Supabase, Sanity, Vercel | Default technical foundation unless `docs/decisions.md` records a deviation. |
| Klaviyo for marketing email | Do not substitute Mailchimp or ConvertKit without explicit decision. |
| Content before paid traffic | Minimum credible content base before paid acquisition. |
| Quiz gates email before results | Quiz is an email-capture and personalization mechanism. |
| No fabricated social proof | Real numbers only. Use process and authority credibility until proof exists. |
| Author/book credibility visible early | The authority asset must be easy to see on core pages. |
| Book/product firewall | Education claims attach to evidence; product copy describes format, use, audience, and experience. |
| Underpromise | StrongPath earns trust by narrowing claims when evidence is incomplete. |
| David crisis moment is out of scope for Phase 1 | Crisis belongs to rehab, clinicians, and acute care. StrongPath serves Before and After moments. |
| Eunoia test for David-facing copy | Copy must show goodwill toward David's dignity, autonomy, and intelligence. |
| `PRODUCT_CONCEPTS_BACKLOG.md` is a holding file | Product ideas are candidates, not commitments. |

## Escalate

Escalate when:
- founder intent is unclear
- canonical governance conflicts
- medical, legal, FTC, FDA, supplement, affiliate, fall-risk, frailty, or disease-adjacent risk appears
- public founder, book, author, advisor, product, quiz, or platform framing changes
- evidence is stale, conflicting, or insufficient
- implementation risk touches production, credentials, DNS, billing, or external accounts
- scope expands beyond the approved task

Escalation format:

```txt
ISSUE
RISK
RECOMMENDATION
DECISION NEEDED
```

## Archive

Archived files in `archive/governance/` and `docs/governance/archive/` are historical only. Do not use them as active guidance unless the founder explicitly asks for historical context.

## Change Log

| Date | Change |
|---|---|
| April 18, 2026 | Initial StrongPath project instructions created. |
| April-May 2026 | Standing decisions added through brand, editorial, GTM, CTO, and governance normalization work. |
| May 2026 | Final compression pass: reduced to operating brief, removed obsolete workstream prose, old tier scaffolding, planned workflow documents, and stale Claude-specific process language. |
