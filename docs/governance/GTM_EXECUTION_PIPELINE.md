# GTM Execution Pipeline

## Purpose

Canonical control system for StrongPath publication and GTM execution.

Objectives:

- remove founder as workflow manager
- preserve strategic approval
- make state visible
- route work by risk
- prevent automation chaos

Operating principle:

- Agents prepare.
- Systems route.
- Founder decides only where judgment matters.

## 1. Source Of Truth

- GitHub `docs/governance/` is canonical.
- Drive is backup/mirror.
- One operational tracker holds current state.
- One item has one state, one owner, one next action.

No parallel governance.
No hidden status.
No Drive/Git drift.

## 2. Priorities

Resolve tradeoffs in order:

1. Trust before reach.
2. Editorial quality before speed.
3. Distribution before optimization.
4. Consistency before cadence expansion.
5. Repeatability before scale.
6. Stability before automation expansion.
7. Approved patterns before experiments.
8. Ownership before parallel work.

## Search Visibility Standard

Google Search optimization is a required quality layer in the StrongPath publication and distribution workflow. It is not a separate governance lane.

SEO exists to help Google discover, understand, and present StrongPath’s people-first content. It must never override editorial quality, brand trust, evidence standards, or reader usefulness.

Search-targeted content must:

- serve a defined StrongPath audience: Margaret, David, or a future founder-approved audience
- satisfy the reader’s actual intent
- provide non-commodity value, not thin summary content
- demonstrate authority through sourcing, specificity, and StrongPath’s editorial point of view
- preserve the brand voice: serious, direct, hopeful
- support the reader’s next action without creating an aggressive funnel

Health and YMYL-sensitive content requires:

- current third-party sourcing
- conservative claim language
- medical disclaimer where applicable
- clear distinction between education and medical advice
- no unsupported treatment, cure, prevention, reversal, or guarantee claims

Before publishing, search-relevant pages must confirm:

- crawlable URL
- crawlable internal links
- unique title
- useful meta description
- canonical URL
- no accidental noindex
- sitemap inclusion for strategic pages
- visible DOM text for key content
- mobile-readable page experience
- no broken primary CTA or core internal links

Prohibited:

- keyword stuffing
- doorway pages
- shadow domains
- deceptive redirects
- link schemes
- inauthentic mentions
- fake freshness/date changes
- scaled AI content without unique value
- pages created primarily to rank rather than serve readers

## 3. Owners

Editorial Systems Agent:

- readiness
- sequencing
- links
- CTA package
- metadata
- editorial risk

GTM Agent:

- distribution plan
- Beehiiv draft
- X package
- Postiz schedule
- KPI loop
- weekly review

CTO:

- website publishing
- CMS/integrations
- tracking
- deployment verification
- automation reliability

Founder:

- strategic judgment
- sensitive approvals
- major overrides

## 4. Operating Modes

Normal Publishing:

- routine approved patterns
- agents route forward
- founder review only on trigger

Launch:

- major launch, new positioning, coordinated campaign
- founder approves sequence and final package
- GTM owns launch checklist
- CTO verifies production readiness

Experiment:

- new format, channel, cadence, or automation
- define variable first
- founder approves strategic experiments
- track result and decision

High-Risk Review:

- sensitive claim, medical risk, reputational risk, legal/compliance risk, positioning uncertainty
- stop auto-routing
- prepare issue package
- founder approval required

## 5. States

Allowed states:

- Intake
- Editorial Review
- Ready for Founder Review
- Approved
- Scheduled
- Published
- Distributed
- Under Review
- Archived

Required fields:

- item
- state
- mode
- owner
- next action
- approval needed
- blocker
- target date
- URL/status
- KPI status

## 6. State Transitions

Valid:

- Intake -> Editorial Review
- Editorial Review -> Approved
- Editorial Review -> Ready for Founder Review
- Editorial Review -> Under Review
- Ready for Founder Review -> Approved
- Ready for Founder Review -> Under Review
- Approved -> Scheduled
- Approved -> Published
- Scheduled -> Published
- Published -> Distributed
- Distributed -> Under Review
- Under Review -> Approved
- Under Review -> Archived
- Distributed -> Archived

State authority:

- Editorial Systems Agent: Intake, Editorial Review, Ready for Founder Review, routine Approved.
- GTM Agent: Scheduled, Distributed, GTM Under Review.
- CTO: Published after verification.
- Founder: Approved for strategic, sensitive, launch, or high-risk items.

Invalid:

- Intake -> Published
- Editorial Review -> Scheduled
- Ready for Founder Review -> Scheduled
- Approved -> Distributed before Published
- Published -> Archived before distribution review

Escalate:

- unclear owner
- missing next action
- blocker > 24h
- sensitive claim
- launch timing conflict
- automation failure
- duplicate state records
- founder approval requested without package

## 7. Approval Routing

Founder reviews packages, not workflows.

Founder review required:

- new positioning
- sensitive claims
- major strategic shift
- new distribution experiment
- launch moment
- high-risk judgment
- first use of new operating pattern

Founder review not required:

- routine approved patterns
- metadata
- internal links
- CTA packaging within pattern
- Beehiiv draft preparation
- X package preparation
- Postiz preparation
- KPI collection
- weekly reporting
- execution of approved patterns

Rules:

- bundle decisions when possible
- present recommendation + risk + approve/decline
- auto-route recurring approved patterns

## 8. Pipeline

### Intake

Input:

- draft
- sources
- citations
- audience
- target window
- related coverage

Editorial Systems Agent:

- confirm access
- classify type
- identify reader
- identify evidence gaps
- identify links
- identify CTA
- set state

SLA:

- same business day

### Editorial Review

Check:

- headline
- claims
- evidence
- structure
- reader relevance
- tone
- CTA
- links
- metadata
- health-claim risk

Outcomes:

- approved pattern; proceed
- ready for founder review
- needs agent revision
- blocked

SLA:

- within 24h when source material is available

### Sequencing

Editorial Systems Agent:

- priority
- cluster fit
- link dependencies
- calendar fit

GTM Agent:

- distribution timing
- newsletter timing
- X cadence
- founder amplification
- KPI expectations

Rules:

- no article without distribution path
- no distribution without URL or publish time
- no stalled work without blocker

### Website Publishing

CTO verifies:

- rendering
- metadata
- social preview
- mobile layout
- links
- CTA
- analytics
- no draft/noindex

Output:

- live URL
- verification note
- known issues
- state update

SLA:

- publishing package within 24h of approval

### Beehiiv

GTM Agent prepares:

- subject
- preview text
- body
- summary
- CTA
- send timing

Editorial Systems Agent checks:

- fidelity
- tone
- claims
- article alignment

Approval:

- founder approval for final send unless recurring pattern is pre-approved

### X / Social

GTM Agent prepares:

- primary X post
- 2-4 alternate angles
- founder amplification post
- reply prompts
- adjacency targets
- posting window
- link placement
- KPI expectations
- Postiz schedule

Rules:

- use `docs/growth/STRONGPATH_X_DISTRIBUTION_PLAYBOOK.md`
- every post stands alone
- first-hour X coverage required
- no duplicate scheduling
- no unapproved sensitive content

SLA:

- package within 24h of publication approval

### KPI Review

GTM Agent tracks:

- article sessions
- source attribution
- newsletter signups
- qualified X clicks
- Beehiiv opens/clicks
- saves/bookmarks
- credible replies
- relevant profile visits
- quiz starts
- affiliate clicks where applicable

CTO ensures:

- stable URLs
- working tracking
- no duplicate events

SLA:

- weekly KPI review
- major article readout within 7 days

## 9. Weekly Review

GTM Agent prepares:

- published articles
- completed distribution
- strongest sources
- newsletter performance
- X performance
- subscriber growth
- high-quality engagement
- conversion movement
- blockers
- next-week recommendations

Editorial Systems Agent contributes:

- sequence updates
- link opportunities
- article updates
- content gaps

CTO contributes:

- tracking issues
- integration issues
- automation opportunities
- implementation blockers

Founder approves:

- next priorities
- strategic changes
- major governance changes

## 10. Automation Governance

Automation may:

- prepare
- package
- route
- report

Human review required:

- readiness classification
- sensitive claim routing
- final website verification
- Beehiiv send unless pre-approved
- first use of new X pattern
- launch sequence
- governance changes

Prohibited automation:

- unapproved article publishing
- autonomous newsletter sends
- sensitive-claim approval
- strategic sequencing changes
- governance edits
- cadence expansion

Audit:

- output shows source, owner, state, next action
- packages are reviewable before execution
- KPI automation checked weekly
- failures visible in tracker

Rollback:

- pause on repeated error
- revert affected stage to manual routing
- assign owner
- resume only after verification

## 11. Automation Targets

Automate after workflow stability:

- Drive ingestion
- intake status
- metadata package
- link suggestions
- Beehiiv draft
- X package
- Postiz preparation
- UTM creation
- KPI collection
- weekly report
- state tracking

Rule:

- automate preparation before execution authority

## 12. SLAs

- Intake: same business day.
- Editorial review: 24h.
- Sequence recommendation: 24h after readiness.
- Website package: 24h after approval.
- Distribution package: 24h after publication approval.
- Beehiiv draft: before send review.
- Postiz schedule: before launch window.
- First-hour X coverage: mandatory.
- KPI review: weekly.

Missed SLA requires blocker + next action.

## 13. Failure Modes

Prevent:

- article without distribution
- duplicate posting
- stale backlog
- founder as project manager
- unclear approval state
- automation drift
- KPI blindness
- disconnected editorial/distribution timing
- untracked performance
- governance drift
- autonomous publishing without approval

Correct:

- assign owner
- set state
- name blocker
- define next action
- escalate only when judgment matters

## 14. Drift Prevention

No:

- side-channel execution
- undocumented workflow
- duplicate approvals
- invisible blockers
- untracked article state
- unowned distribution package
- governance updates outside Git

If drift appears:

- stop affected workflow
- restore tracker state
- assign owner
- document next action
- escalate only if authority is required

## 15. Handoff Format

```txt
STATUS
<pipeline state>

MODE
<operating mode>

OWNER
<agent or role>

ACTION
<single action>

APPROVAL
<yes/no>

BLOCKER
<none or named blocker>

NEXT
<single next step>
```

## 16. Invariants

- Agents prepare before founder review.
- Founder reviews packages, not workflows.
- Approved patterns auto-route.
- One item, one state, one owner.
- No article without distribution path.
- No distribution without KPI expectations.
- No automation obscures approval.
- No channel execution without owner.
- No growth activity degrades trust.

## Status

Status: Canonical

Owner: GTM / Editorial Operations

Scope: StrongPath Publication and GTM Execution Governance
