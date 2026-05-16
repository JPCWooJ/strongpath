# GTM Execution Pipeline

## Purpose

Define StrongPath's publication and GTM execution control system.

Objectives:

- remove founder as operational bottleneck
- preserve strategic control
- preserve editorial quality
- make workflow state explicit
- route approvals by risk
- support automation without autonomous chaos

Operating principle:

- Agents prepare.
- Systems route.
- Founder decides only where judgment materially matters.

## 1. Single Source Of Truth

Canonical governance:

- GitHub `docs/governance/`

Operational mirror:

- Drive copies for backup and access

Rules:

- GitHub is canonical.
- Drive mirrors GitHub.
- One operational tracker holds current state.
- One item has one owner and one next action.
- Do not create parallel governance.
- Do not let Drive drift from Git.

## 2. Execution Priority Rules

Resolve execution tradeoffs in this order:

1. Trust before reach.
2. Editorial quality before speed.
3. Distribution before optimization.
4. Publication consistency before cadence expansion.
5. Repeatability before scale.
6. Operational stability before automation expansion.
7. Approved patterns before new experiments.
8. Clear ownership before parallel execution.

Rule:

- If a faster path creates ambiguity, use the clearer path.

## 3. Ownership Model

Editorial Systems Agent owns:

- article readiness
- sequencing
- internal links
- CTA packaging
- metadata readiness
- editorial risk review

GTM Agent owns:

- distribution plan
- Beehiiv draft
- X package
- Postiz schedule
- KPI loop
- weekly review

CTO owns:

- website publishing
- CMS automation
- integrations
- analytics/tracking
- deployment verification
- technical regression prevention

Founder owns:

- strategic judgment
- defined approvals
- major overrides

## 4. Operating Modes

Mode determines workflow intensity and founder involvement.

### Normal Publishing Mode

Use for routine articles using approved patterns.

Rules:

- Agents route work forward.
- Founder review only if approval rules trigger.
- Recurring approved packages can auto-route.

### Launch Mode

Use for major public launches, new positioning, or coordinated campaigns.

Rules:

- Founder approval required for sequencing and final distribution package.
- GTM Agent owns launch checklist.
- CTO verifies production readiness.
- No unscheduled channel execution.

### Experiment Mode

Use for new distribution formats, cadence tests, channel tests, or automation tests.

Rules:

- Define variable before execution.
- Founder approval required for new strategic experiments.
- Routine low-risk experiments may proceed under approved patterns.
- Track result and decision.

### High-Risk Review Mode

Use for sensitive claims, medical risk, reputational risk, legal/compliance risk, or positioning uncertainty.

Rules:

- Stop auto-routing.
- Editorial Systems Agent prepares issue summary.
- Founder approval required.
- CTO executes only after decision.

## 5. Pipeline States

Every article or campaign must have one current state.

States:

- Intake
- Editorial Review
- Ready for Founder Review
- Approved
- Scheduled
- Published
- Distributed
- Under Review
- Archived

State visibility required:

- current state
- current owner
- next action
- approval needed: yes/no
- blocker, if any

## 6. State Transition Logic

Valid transitions:

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

Who can move state:

- Editorial Systems Agent: Intake, Editorial Review, Ready for Founder Review, Approved for routine editorial patterns.
- GTM Agent: Scheduled, Distributed, Under Review for GTM performance review.
- CTO: Published after technical verification.
- Founder: Approved for strategic, sensitive, launch, or high-risk items.

Invalid transitions:

- Intake -> Published
- Editorial Review -> Scheduled without approval path
- Ready for Founder Review -> Scheduled
- Approved -> Distributed before Published
- Scheduled -> Archived without owner note
- Published -> Archived before distribution review

Escalation triggers:

- unclear owner
- missing next action
- blocked more than 24 hours without reason
- sensitive claim detected
- launch timing conflict
- automation failure
- duplicate state records
- founder approval requested without prepared package

## 7. Approval Compression

Founder reviews packages, not workflows.

Rules:

- Bundle related decisions when possible.
- Present recommendation, risk, and approve/decline choice.
- Do not ask founder to inspect raw process state.
- Recurring approved patterns auto-route forward.
- Routine low-risk articles can bypass founder review.
- Founder review is reserved for material judgment.

Founder review required:

- new positioning
- sensitive claims
- major strategic shifts
- new distribution experiments
- major launch moments
- high-risk editorial judgment
- first use of a new operating pattern

Founder review not required:

- routine articles following approved patterns
- metadata packaging
- internal link recommendations
- CTA packaging within approved patterns
- Beehiiv draft preparation
- X package preparation
- Postiz preparation
- KPI collection
- weekly reporting
- execution of approved patterns

## 8. Article Intake From Drive

Inputs:

- article draft
- source notes
- citations or evidence links
- intended audience
- target publishing window
- related StrongPath coverage

Editorial Systems Agent actions:

- confirm access
- classify article type
- identify target reader
- identify evidence requirements
- identify missing source material
- identify internal links
- identify CTA fit
- set state

Output:

- intake note
- owner
- current state
- blocker
- next action

SLA:

- same day when submitted during business hours.

## 9. Editorial Readiness Review

Editorial Systems Agent reviews:

- headline clarity
- claim support
- evidence quality
- structure
- reader relevance
- tone alignment
- CTA fit
- internal links
- metadata readiness
- health-claim risk

Outcomes:

- Approved pattern; proceed
- Ready for founder review
- Needs agent revision
- Blocked

Rules:

- Agents prepare revisions before founder review.
- Founder receives a decision package.
- Sensitive claims route to High-Risk Review Mode.

SLA:

- within 24 hours of intake when source material is available.

## 10. Publication Sequencing

Editorial Systems Agent determines:

- priority
- cluster fit
- internal link dependencies
- editorial calendar fit
- SEO or audience-formation role

GTM Agent determines:

- distribution timing
- newsletter timing
- X cadence
- founder amplification timing
- KPI expectations

Rules:

- No article publishes without distribution path.
- No distribution package proceeds without URL or publish time.
- Ready work cannot stall without blocker.

## 11. Website Publishing

CTO actions:

- publish to website or CMS
- verify rendering
- verify metadata
- verify social preview
- verify mobile layout
- verify internal links
- verify CTA placement
- verify analytics
- verify no draft or noindex state remains

Editorial Systems Agent actions:

- confirm page matches approved intent
- confirm links and CTA match package

Output:

- live URL
- verification note
- known issues
- state update

SLA:

- package ready within 24 hours of approval.

## 12. Beehiiv Newsletter

GTM Agent prepares:

- subject line
- preview text
- body
- article summary
- primary CTA
- secondary links
- send timing

Editorial Systems Agent checks:

- editorial fidelity
- evidence tone
- claim accuracy
- article alignment

Rules:

- Extend article value.
- Avoid hype.
- Avoid urgency tricks.
- Avoid generic marketing language.

Approval:

- founder approval required for final send unless recurring pattern is pre-approved.

## 13. X Distribution Package

GTM Agent uses `X_DISTRIBUTION_OPERATING_SYSTEM.md`.

Required package:

- primary X post
- 2-4 alternate angles
- founder amplification post
- likely-reply prompts
- target adjacency list
- posting window
- link placement recommendation
- KPI expectations

Rules:

- Every post stands alone.
- Prioritize qualified attention.
- Avoid engagement bait.
- Reframe rather than repost.
- First-hour engagement coverage required.

Approval:

- required for sensitive positioning, new experiments, launch moments, or first use of major package.
- not required for routine approved patterns.

SLA:

- ready within 24 hours of publication approval.

## 14. Postiz / Social Scheduling

GTM Agent prepares:

- approved post copy
- article URL
- media assets
- schedule
- founder amplification timing
- follow-up angles

CTO supports:

- Postiz setup
- account connections
- scheduling automation
- tracking parameters
- troubleshooting

Rules:

- Do not schedule unapproved sensitive content.
- Do not schedule duplicates.
- Do not schedule before article timing is confirmed.
- Preserve X cadence standards.

State path:

- Approved -> Scheduled -> Published -> Distributed

## 15. KPI Tracking

GTM Agent tracks:

- article sessions
- source attribution
- newsletter signups
- qualified X clicks
- Beehiiv opens and clicks
- saves/bookmarks
- credible replies
- relevant profile visits
- quiz starts
- affiliate clicks where applicable

CTO ensures:

- tracking works
- URLs are stable
- events are not duplicated
- analytics stay lightweight

Rules:

- Track learning signals.
- Do not optimize for vanity.
- Do not overbuild attribution.

References:

- `METRICS.md`
- `X_DISTRIBUTION_OPERATING_SYSTEM.md`

SLA:

- KPI review weekly.
- Major article first readout within 7 days of distribution.

## 16. Weekly Review Loop

GTM Agent prepares:

- articles published
- distribution completed
- strongest traffic sources
- newsletter performance
- X performance
- subscriber growth
- high-quality engagement
- conversion movement
- blockers
- next-week recommendations

Editorial Systems Agent contributes:

- sequencing recommendations
- internal link opportunities
- article update opportunities
- content gaps

CTO contributes:

- tracking issues
- integration issues
- automation opportunities
- implementation blockers

Founder checkpoint:

- approve priorities
- approve strategic changes
- approve major governance updates

SLA:

- prepared once per week before founder review.

## 17. Automation Governance

Automation may prepare, package, route, and report.

Human review required:

- article readiness classification
- sensitive claim routing
- final website publication verification
- Beehiiv send approval unless pre-approved pattern
- first use of new X package pattern
- launch sequence approval
- governance changes

Prohibited automation:

- autonomous publishing of unapproved articles
- autonomous newsletter sends
- autonomous sensitive-claim approval
- autonomous strategic sequencing changes
- autonomous governance edits
- autonomous expansion of cadence without approval

Audit rules:

- automation output must show source, owner, state, and next action.
- automated packages must be reviewable before execution.
- KPI automation must be checked weekly.
- failed automation must be visible in tracker.

Rollback rules:

- pause automation on repeated error
- revert to manual routing for affected stage
- document issue and owner
- resume only after verification

Escalate when:

- automation changes state incorrectly
- automation produces low-quality packages
- automation obscures approval status
- automation creates duplicate records
- automation publishes or schedules without approval

## 18. Automation Targets

Automate after workflow is stable.

Targets:

- article ingestion from Drive
- intake status generation
- metadata packaging
- internal link suggestion
- Beehiiv draft generation
- X package generation
- Postiz schedule preparation
- UTM/tracking creation
- KPI collection
- weekly report generation
- state tracking

Rule:

- Automate repeatable preparation before execution authority.

## 19. Execution SLAs

Default timing:

- Intake: same business day.
- Editorial review: within 24 hours.
- Sequence recommendation: within 24 hours of readiness.
- Website publishing package: within 24 hours of approval.
- Distribution package: within 24 hours of publication approval.
- Beehiiv draft: before scheduled send review.
- Postiz schedule: before launch window.
- First-hour X coverage: mandatory.
- KPI review: weekly.

Rule:

- Missed SLA requires blocker and next action.

## 20. State Visibility

Use one operational tracker.

Required fields:

- item name
- current state
- operating mode
- owner
- next action
- approval needed
- blocker
- target date
- live URL
- distribution status
- KPI readout status

Rules:

- No hidden workflow state.
- No side-channel approvals.
- No duplicate status locations.
- No item without owner.
- No owner without next action.

## 21. Failure Modes

Prevent:

- article published without distribution
- duplicate posting
- stale article backlog
- founder bottleneck reintroduced
- unclear approval state
- low-quality automation drift
- KPI blindness
- disconnected editorial and distribution timing
- untracked campaign performance
- Drive/Git governance drift
- autonomous publishing without approval

Corrective action:

- assign owner
- set state
- name blocker
- define next action
- escalate only if judgment materially matters

## 22. Operational Drift Prevention

Rules:

- No side-channel execution.
- No undocumented workflow.
- No duplicate approvals.
- No founder-as-default-project-manager.
- No invisible blockers.
- No untracked article state.
- No unowned distribution package.
- No governance updates outside Git.

If drift appears:

- stop affected workflow
- restore state in tracker
- assign owner
- document next action
- escalate only if decision authority is required

## 23. Standard Handoff Format

Every handoff includes:

```txt
STATUS
<pipeline state>

MODE
<operating mode>

OWNER
<agent or role>

REQUIRED ACTION
<single action>

APPROVAL NEEDED
<yes/no>

BLOCKER
<none or named blocker>

NEXT STEP
<single next step>
```

## 24. Operating Rules

- Agents prepare before founder review.
- Agents recommend; founder decides.
- Systems route work by state.
- One item, one state, one owner.
- Founder reviews packages, not workflows.
- Approved patterns auto-route forward.
- No article publishes without distribution path.
- No distribution package proceeds without KPI expectations.
- No automation obscures approval.
- No channel execution without owner.
- No duplicate governance standards.
- No growth activity degrades trust.

## Status

Status: Canonical

Owner: GTM / Editorial Operations

Scope: StrongPath Publication and GTM Execution Governance
