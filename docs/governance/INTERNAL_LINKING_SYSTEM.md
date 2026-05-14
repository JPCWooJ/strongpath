# INTERNAL_LINKING_SYSTEM.md

## Purpose

Canonical Layer 2 internal linking governance system for StrongPath.

This file defines how StrongPath uses internal links to guide readers, reinforce topical authority, preserve citation and commerce boundaries, prevent orphan pages, and support trust-first discovery pathways.

This is an editorial governance document. It does not define CMS implementation architecture, automated linking systems, backlink systems, analytics/reporting systems, or programmatic SEO workflows.

## Status

Status: First draft for review  
Layer: Layer 2 editorial systems  
Primary dependencies: `SEO_SYSTEMS.md`, `CITATION_STANDARD.md`, `CONTENT_QA.md`, `PERSONAS.md`  
Last updated: May 2026

## Governing References

This document inherits from:

1. `AGENT_RULES.md`
2. `CODEX_EXECUTION_STANDARD.md`
3. `BRAND.md`
4. `PERSONAS.md`
5. `PUBLISHING_PLAN.md`
6. `SEO_SYSTEMS.md`
7. `CITATION_STANDARD.md`
8. `CONTENT_QA.md`

When this file conflicts with `SEO_SYSTEMS.md`, `CITATION_STANDARD.md`, or `CONTENT_QA.md`, the stricter trust, claim, citation, or QA standard wins.

## 1. Core Principle

Internal links are editorial guidance.

They should help the reader answer:

- what should I understand next?
- what evidence supports this?
- what action is appropriate now?
- where does this topic fit inside StrongPath?

Do not add links only to manipulate ranking. A good internal link serves the reader first and authority flow second.

## 2. Pillar-To-Satellite Linking Rules

Pillar pages link to satellites when the satellite deepens a specific reader need.

Rules:

- link from pillar sections to the most relevant satellite, not every satellite
- place links where the reader naturally needs the next layer of detail
- use satellites to answer narrower execution, safety, persona, or FAQ questions
- avoid link lists that feel mechanical
- do not link to thin or unfinished pages as if they are complete

Pillars should make the cluster legible. They are not dumping grounds for every possible link.

## 3. Satellite-To-Pillar Rules

Every satellite must link back to its parent pillar.

Rules:

- link early enough that a reader can recover context
- use natural anchor text that describes the pillar
- link to the most relevant pillar, not the highest-value page by default
- do not force a satellite to link to multiple pillars unless it genuinely bridges topics

Common parent pillars:

- sarcopenia or age-related muscle loss
- resistance training for older adults
- protein for older adults
- caregiver guidance for aging parents
- the book page for credibility context

## 4. Contextual Linking Rules

Contextual links belong inside the sentence or paragraph where the next step is useful.

Use contextual links for:

- definitions
- mechanisms
- safety boundaries
- deeper evidence
- next-step execution
- persona-specific guidance
- book credibility context

Avoid:

- unrelated link insertion
- repeating the same link too often
- linking every keyword occurrence
- linking in a way that interrupts comprehension
- stacking multiple links in one sentence

If the link does not improve the reader's next decision, remove it.

## 5. Anchor Text Governance

Anchor text must be honest, specific, and claim-safe.

Good anchor text:

- describes the destination
- uses reader language
- stays narrower than the evidence
- avoids hype
- avoids medical promises

Bad anchor text:

- overclaims the destination
- uses "cure," "reverse," "prevent," or "guarantee" unsafely
- hides an affiliate or commerce destination
- implies a product outcome
- repeats exact-match keywords unnaturally

Examples:

```txt
Good: how resistance training helps older adults build strength
Good: what age-related muscle loss actually is
Good: how to help an aging parent start safely
Bad: reverse sarcopenia
Bad: prevent falls with this program
Bad: cure muscle loss
```

Anchor text is copy. It must pass `CONTENT_QA.md`.

## 6. Commerce-Link Separation

Commerce links must not be confused with educational or evidence links.

Rules:

- affiliate links support buying actions, not claims
- product links belong after the educational context
- commerce CTAs should not interrupt evidence sections
- affiliate links must not be the proof for a health claim
- product anchor text must describe the product or buying action, not an outcome

Safe patterns:

- evidence paragraph links to a study or pillar
- later buying section links to Amazon or product page
- CTA language makes the commercial action clear

Unsafe pattern:

- a health claim links directly to an affiliate product

## 7. Evidence-Link Separation

Evidence links support claims. Internal links guide navigation.

Rules:

- external evidence links go to sources
- internal links go to StrongPath explanatory or next-step pages
- do not use an internal page as the visible proof for a claim unless that page itself cites the evidence
- do not mix source links and affiliate links in the same claim sentence
- link to the source when the claim is specific and source visibility matters

When a reader would reasonably ask "says who?", provide or preserve the evidence path.

## 8. Persona-Driven Pathway Logic

Internal links should respect the reader's moment.

Margaret pathways:

- preserve peer-level respect
- move from problem awareness to mechanism to execution
- avoid "senior" or frailty framing directed at her
- offer a credible protocol before a product push

David pathways:

- reduce overwhelm
- lead with goodwill, not fear
- route to parent-safety and practical-start guidance
- avoid Crisis-moment detours outside scope

Dr. Chen pathways:

- surface citation discipline
- route to clinician-appropriate explanations
- avoid consumer urgency
- make limits and non-clinical posture visible

The same article may serve multiple personas, but the next link should fit the dominant reader moment.

## 9. Orphan-Page Prevention

No important page should stand alone.

Every canonical article or page should have:

- at least one incoming internal link from a relevant page
- at least one outgoing internal link to a relevant next step
- a clear parent, sibling, or destination relationship

Exceptions may exist for legal pages, utility pages, or deliberately isolated operational pages.

New articles should not be published without a planned incoming link path.

## 10. Crawl-Depth Discipline

Important pages should be reachable quickly through normal site paths.

Rules:

- pillar pages should be close to the blog index, homepage, or major navigation path
- satellites should be reachable through parent pillars and relevant siblings
- book page should remain easy to reach from authority and substantive-claim pages
- high-trust or high-commercial pages should not require deep clicking
- avoid burying useful articles behind only chronological archives

Crawl depth follows reader importance, not publication date.

## 11. Authority-Flow Logic

Internal links should reinforce StrongPath's authority model.

Authority flows toward:

- pillar pages
- the book page as credibility anchor
- high-quality execution pages
- caregiver pillar content
- evidence-heavy articles
- safe commercial pathways only after education

Authority should not flow primarily toward:

- thin pages
- premature commerce pages
- duplicate articles
- outdated pages
- unsafe claim territory

If a page does not deserve authority, improve it before routing authority to it.

## 12. Related-Content Rules

Related content should be curated, not generic.

Rules:

- show related articles by topic, persona, or next decision
- prefer 3-5 strong related links over broad lists
- do not show commerce links as neutral related reading
- do not recommend articles that contradict the reader's moment
- avoid repeating the same related block across every page

Related content should answer: "what is genuinely useful next?"

## 13. CTA Pathway Hierarchy

CTAs are links with higher stakes.

Default hierarchy:

1. education next step
2. quiz or assessment when relevant
3. book page for credibility/depth
4. program or product only when the reader has enough context
5. affiliate purchase only in clearly commercial or book-buying context

Rules:

- one primary CTA per article
- secondary CTA may support book or related education
- do not place a commerce CTA before trust is earned
- quiz CTAs must not imply diagnosis
- program CTAs must not imply clinical outcomes

The reader should never feel pushed faster than the evidence allows.

## 14. Book-Page Linking Rules

The book page is a credibility hub, not a claim substantiation source.

Link to the book page when:

- explaining StrongPath's origin
- surfacing category credibility
- routing readers to the book
- supporting the platform-as-second-edition framing
- giving readers a deeper authority asset

Do not link to the book page as proof for:

- current health claims
- product claims
- safety claims
- supplement claims
- medical or disease-adjacent assertions

Anchor text should usually be:

```txt
*Choosing the StrongPath*
the book behind StrongPath
the StrongPath book
```

Author names follow `BRAND.md` and `CITATION_STANDARD.md` restrictions.

## 15. Link Freshness And Maintenance Workflow

Links require periodic review.

Review internal links when:

- a pillar page is updated
- an article is revised after research or QA changes
- a URL changes
- a page is removed, deferred, or merged
- a new article creates a better next step
- a commerce or affiliate destination changes
- citation or claim governance changes

Maintenance checks:

- link resolves
- destination still matches anchor text
- destination is still current
- link still fits the reader moment
- affiliate and evidence separation still holds
- no orphan pages were created by edits

Fix broken or misleading links before publication when they are known.

## 16. Escalation Rules

Escalate when:

- proposed anchor text implies an unsupported claim
- link destination is commerce-sensitive
- evidence and affiliate links are difficult to separate
- a page would publish without incoming links
- a URL change affects authority flow
- a link would route David into Crisis-moment content
- a link would route Margaret into patronizing or "elderly" framing
- book-page links are being used as proof for health claims
- internal links create duplicate, circular, or confusing pathways
- related-content rules conflict with SEO pressure

Escalation output must state:

- source page
- destination page
- link or anchor at issue
- risk
- recommended decision: keep, revise anchor, move, replace, remove, defer

## 17. Operational Defaults

When uncertain:

- link for the reader's next best step
- preserve evidence and commerce separation
- use honest anchor text
- route satellites to pillars
- route pillars to useful satellites
- protect the book's credibility role
- avoid deep or orphaned pages
- choose fewer better links
- escalate link-risk before publishing

Internal linking should make StrongPath feel coherent, not engineered.

## Change Log

| Date | Change |
|---|---|
| May 2026 | First draft created as the initial Layer 2 internal linking governance system. |

