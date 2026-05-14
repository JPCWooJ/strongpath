# ARTICLE_SCORING_RUBRIC.md

## Purpose

Canonical Layer 2 article evaluation and scoring framework for StrongPath.

This file defines how StrongPath evaluates article quality before publication or revision: evidence, citations, persona alignment, brand/tone, SEO, internal linking, commerce firewall, readability, authority-building, thresholds, escalation, and reviewer calibration.

This is an editorial governance document. It does not define analytics systems, CMS implementation systems, ML/AI scoring architecture, publishing KPI systems, or enterprise editorial bureaucracy.

## Status

Status: First draft for review  
Layer: Layer 2 editorial systems  
Primary dependencies: `CITATION_STANDARD.md`, `RESEARCH_SYSTEMS.md`, `CONTENT_QA.md`, `SEO_SYSTEMS.md`, `INTERNAL_LINKING_SYSTEM.md`  
Last updated: May 2026

## Governing References

This document inherits from:

1. `AGENT_RULES.md`
2. `CODEX_EXECUTION_STANDARD.md`
3. `BRAND.md`
4. `PERSONAS.md`
5. `CITATION_STANDARD.md`
6. `RESEARCH_SYSTEMS.md`
7. `CONTENT_QA.md`
8. `SEO_SYSTEMS.md`
9. `INTERNAL_LINKING_SYSTEM.md`

When scoring conflicts with governance, governance wins. A high score cannot override a hard-stop violation.

## 1. Core Principle

The rubric exists to make editorial judgment consistent.

It does not replace judgment. It forces reviewers to name what is strong, what is weak, what must be revised, and what must escalate.

Score the article the reader will experience, not the effort behind it.

## 2. Weighted Scoring Model

Score each article on a 100-point scale.

| Category | Weight |
|---|---:|
| Evidence quality | 15 |
| Citation discipline | 15 |
| Persona alignment | 10 |
| Brand/tone | 10 |
| SEO quality | 10 |
| Internal-linking quality | 10 |
| Commerce firewall | 10 |
| Readability/usability | 10 |
| Authority-building | 10 |
| Total | 100 |

Use whole numbers. Do not use decimals.

## 3. Evidence Quality Scoring

Weight: 15 points.

Score:

- 13-15: Claims are well supported by strong, current, appropriate sources; limitations are preserved.
- 10-12: Evidence is generally strong; minor source gaps or freshness issues remain.
- 7-9: Evidence supports the topic but several claims need stronger sourcing or narrower wording.
- 1-6: Evidence is weak, stale, indirect, or incomplete.
- 0: Major claims are unsupported.

Automatic cap: if a major health claim lacks source support, total article score cannot exceed 74.

## 4. Citation Discipline Scoring

Weight: 15 points.

Score:

- 13-15: Citations are visible, correctly classified, close to claims, current where needed, and clearly separated from commerce.
- 10-12: Citations are mostly correct; minor placement, formatting, or freshness issues remain.
- 7-9: Citations exist but are uneven, hard to map to claims, or too sparse for the article type.
- 1-6: Citations are weak, vague, stale, missing, or over-reliant on inappropriate sources.
- 0: The article uses citations in a misleading way.

Automatic hard stop: the book is used as substantiation for current health claims.

## 5. Persona Alignment Scoring

Weight: 10 points.

Score:

- 9-10: Primary persona and moment are clear; language, objections, and next steps match the reader.
- 7-8: Persona fit is mostly clear; minor tone or pathway drift remains.
- 5-6: Article serves the topic but not a clearly defined reader.
- 1-4: Persona language is generic, mismatched, or emotionally wrong.
- 0: Article actively violates persona rules.

David-facing fear framing, Margaret-facing patronizing language, or clinician-facing unsupported claims require revision.

## 6. Brand/Tone Scoring

Weight: 10 points.

Score:

- 9-10: Serious, direct, hopeful; specialist not salesman; mechanisms not miracles.
- 7-8: Mostly brand-aligned; minor generic or over-explained passages remain.
- 5-6: Understandable but generic; could belong to many wellness brands.
- 1-4: Hype, filler, fear, or commercial tone weakens trust.
- 0: Forbidden brand language or promise structure appears.

Hard stop: "reverse" or "reversing" appears outside the italicized book title as a StrongPath claim.

## 7. SEO Quality Scoring

Weight: 10 points.

Score:

- 9-10: Search intent is clear, keyword usage is natural, hierarchy supports discovery, and metadata is claim-safe.
- 7-8: SEO structure is sound; minor metadata, heading, or intent refinements remain.
- 5-6: Topic is findable but search intent or keyword targeting is loose.
- 1-4: SEO choices distort the article or push unsafe phrasing.
- 0: SEO strategy violates claim, brand, or persona governance.

Search demand never increases a score if it weakens trust.

## 8. Internal-Linking Quality Scoring

Weight: 10 points.

Score:

- 9-10: Links create a clear reader pathway; anchors are honest; evidence, commerce, book, and CTA links are separated.
- 7-8: Linking is useful; minor anchor or placement improvements remain.
- 5-6: Basic links exist but pathways are underdeveloped or generic.
- 1-4: Links are sparse, mechanical, misleading, or poorly placed.
- 0: Article creates orphan risk or uses unsafe anchor text.

Any commerce link used as evidence requires revision.

## 9. Commerce-Firewall Scoring

Weight: 10 points.

Score:

- 9-10: Research, product, affiliate, book, and CTA claims are cleanly separated.
- 7-8: Firewall mostly holds; minor CTA or affiliate language needs tightening.
- 5-6: Commerce is present but somewhat too close to evidence or claims.
- 1-4: Product or affiliate language leans on research claims.
- 0: Article makes unsafe product, affiliate, supplement, or quiz claims.

Hard stop: product language implies diagnosis, treatment, prevention, reversal, or clinical outcome.

## 10. Readability/Usability Scoring

Weight: 10 points.

Score:

- 9-10: Clear structure, strong scanability, useful headings, low friction, and practical next steps.
- 7-8: Generally readable; minor structure, repetition, or clarity issues remain.
- 5-6: Understandable but dense, repetitive, or slow to answer the reader.
- 1-4: Hard to scan, overlong, vague, or disorganized.
- 0: Reader cannot reliably understand the article's answer.

Readable does not mean simplistic. StrongPath writes for intelligent readers.

## 11. Authority-Building Scoring

Weight: 10 points.

Score:

- 9-10: Article strengthens topical authority, citation record, book credibility, and reader trust.
- 7-8: Article contributes to a cluster but could better reinforce authority or pathways.
- 5-6: Useful standalone article with limited authority contribution.
- 1-4: Thin, duplicative, or weakly connected to StrongPath's authority model.
- 0: Article undermines authority through overclaiming, weak sourcing, or brand drift.

Authority is built by quality, not publication volume.

## 12. Publish-Threshold Rules

An article may be marked `Publish Ready` only if:

- total score is 85 or higher
- no hard-stop violations exist
- evidence quality is 12 or higher
- citation discipline is 12 or higher
- commerce firewall is 8 or higher
- all escalations are resolved
- founder gate is complete when required

For pillar articles, recommended publish threshold is 90 or higher.

## 13. Revision-Threshold Rules

Use score bands:

| Score | State | Action |
|---:|---|---|
| 90-100 | Strong publish candidate | Publish if no hard stops and required gates are complete. |
| 85-89 | Publish candidate | Minor revision or founder review may clear. |
| 75-84 | Revision needed | Revise targeted weaknesses before publication. |
| 60-74 | Major revision needed | Return to writer and/or research. |
| Below 60 | Rebuild or defer | Do not patch lightly; reassess article brief. |

If a category scores 0, the article cannot publish regardless of total score.

## 14. Escalation Thresholds

Escalate when:

- any hard-stop violation appears
- evidence quality is below 10 on a health article
- citation discipline is below 10 on a substantive article
- commerce firewall is below 8 on a commerce-sensitive article
- SEO quality is below 6 because of unsafe keyword pressure
- internal linking score is 0 due to orphan or unsafe anchor risk
- reviewers disagree by 10 or more total points
- article introduces new book, founder, author, product, quiz, or program framing

Escalation output must state the blocking issue and recommended action.

## 15. Reviewer Calibration Rules

Reviewers should score consistently.

Rules:

- score against governance, not taste
- cite the rule behind major deductions
- do not reward effort, length, or novelty by itself
- do not penalize concise articles for being concise
- compare pillar articles to pillar expectations
- compare satellites to their narrower job
- resolve large reviewer gaps before founder review

Calibration question:

> Would another reviewer, using the same governance files, understand this score?

## 16. Rubric Usage Workflow

Use the rubric after article QA, not before basic readiness.

Workflow:

1. confirm article has passed initial `CONTENT_QA.md` checks
2. score all nine categories
3. note hard-stop violations
4. identify lowest two scoring categories
5. assign readiness state
6. write revision notes, if needed
7. escalate if thresholds require it
8. send to founder only when founder decision is needed

Rubric output format:

```txt
TOTAL SCORE
<0-100>

CATEGORY SCORES
Evidence:
Citation:
Persona:
Brand/Tone:
SEO:
Internal Linking:
Commerce Firewall:
Readability:
Authority:

READINESS STATE
<state>

BLOCKERS
<hard stops or escalations>

REVISION PRIORITIES
<top 1-3 fixes>
```

## 17. Operational Defaults

When uncertain:

- score lower and explain why
- preserve hard-stop rules
- revise claims before polishing prose
- fix evidence before SEO
- fix commerce separation before CTAs
- route unclear issues to escalation

The rubric should make decisions faster, not make review heavier.

## Change Log

| Date | Change |
|---|---|
| May 2026 | First draft created as the initial Layer 2 article evaluation and scoring framework. |

