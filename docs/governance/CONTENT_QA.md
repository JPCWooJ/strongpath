# CONTENT_QA.md

## Purpose

Canonical Layer 2 editorial QA and review workflow for StrongPath.

This file defines how articles and editorial assets are reviewed before publication: claim verification, citation checks, persona alignment, brand/tone review, commerce firewall review, SEO safety, escalation, readiness states, revision workflow, and founder review gates.

This is an editorial systems document. It does not define CMS implementation systems, automation architecture, publishing calendars, or analytics systems.

## Status

Status: First draft for review  
Layer: Layer 2 editorial systems  
Primary dependencies: `CITATION_STANDARD.md`, `RESEARCH_SYSTEMS.md`  
Last updated: May 2026

## Governing References

This document inherits from:

1. `AGENT_RULES.md`
2. `CODEX_EXECUTION_STANDARD.md`
3. `BRAND.md`
4. `PERSONAS.md`
5. `PUBLISHING_PLAN.md`
6. `keyword-universe.md`
7. `CITATION_STANDARD.md`
8. `RESEARCH_SYSTEMS.md`

When this file conflicts with `CITATION_STANDARD.md` on citations, sources, claims, or outbound links, `CITATION_STANDARD.md` wins.

When this file conflicts with `RESEARCH_SYSTEMS.md` on research packets, evidence extraction, or claim validation, `RESEARCH_SYSTEMS.md` wins.

## 1. Core Principle

Editorial QA protects reader trust before publication.

QA does not rewrite the article from scratch. QA verifies that the article is:

- accurate
- substantiated
- brand-aligned
- persona-aware
- commerce-safe
- medically and legally conservative
- ready for founder review or publication

If QA cannot verify a claim, the claim is revised, sourced, escalated, or cut.

## 2. Pre-Publish Review Workflow

Canonical sequence:

1. confirm article packet or brief exists
2. verify claim support
3. verify citations and outbound links
4. check persona alignment
5. check tone and brand posture
6. check book/product firewall
7. check SEO safety
8. check medical/legal escalation triggers
9. assign readiness state
10. route for revision, founder review, or publication

Do not send an article to founder review while known evidence, claim, or brand issues remain unresolved.

## 3. Claim Verification Checks

Review every substantive claim.

Check:

- claim is directly supported by a source
- claim is not stronger than the source
- quantitative claims have a specific source
- safety claims have clinical or institutional support
- mechanism claims are explained accurately
- old landmark studies are named as older
- current-practice claims use current sources
- unsupported claims are rewritten or cut

Claim status options:

- Verified
- Verified with hedge
- Needs source
- Needs rewrite
- Cut
- Escalate

No article is ready while a substantive claim is marked `Needs source`, `Needs rewrite`, `Cut`, or `Escalate`.

## 4. Citation Verification Checks

Citation checks follow `CITATION_STANDARD.md`.

Check:

- every major health or factual claim has a citation
- citation class matches the claim
- source link resolves
- source title, author or institution, and year are identifiable
- cited source supports the exact claim
- citation is close enough to the claim to be clear
- reference list is present when required
- institutional sources are named clearly
- affiliate links are separated from evidence links
- the book is not used as substantiation for current health claims

If the citation is weak but the claim is useful, route back to research for stronger support.

## 5. Persona Alignment Checks

Every article must identify its primary reader.

Check:

- primary persona is clear
- emotional posture matches the persona
- David-facing copy reads as goodwill, not fear
- Margaret-facing copy is peer-level and never patronizing
- Dr. Chen-facing copy is clinically respectful and citation-visible
- terms like "senior" and "elderly" follow persona rules
- reader objections are answered without overexplaining
- CTA framing fits the reader's moment

Persona drift is a revision issue, not a polish issue.

## 6. Tone And Brand Checks

Brand checks follow `BRAND.md`.

Check:

- serious, direct, hopeful, in that order
- specialist, not salesman
- mechanisms, not miracles
- no forbidden hype language
- no "anti-aging" frame
- no "reverse" or "reversing" outside the italicized book title
- no cure, treatment, guarantee, or transformation promises
- no talking down to the reader
- no filler or generic wellness language where specifics are needed
- underpromising posture is preserved

If the copy sounds like a supplement brand, influencer post, or generic wellness site, it fails QA.

## 7. Commerce Firewall Checks

Commerce checks follow the book/product firewall in `CITATION_STANDARD.md`.

Check:

- research claims do not attach to products
- product claims describe format, contents, use, or educational purpose only
- affiliate recommendations do not imply clinical outcomes
- Amazon affiliate links use the approved tag when present
- affiliate disclosure is present where required
- evidence links and affiliate links are separated
- the book is credibility, not proof for product outcomes
- quiz, program, or product language does not imply diagnosis or treatment

If commerce language depends on research authority to close the sale, revise.

## 8. SEO Safety Checks

SEO safety prevents search demand from overriding claim discipline.

Check:

- target keyword does not force unsafe claim language
- "prevent" keywords are framed educationally when needed
- "reverse" keywords are not echoed in StrongPath voice
- disease-adjacent terms are hedged
- metadata does not make stronger claims than body copy
- headings do not overclaim for ranking
- internal anchor text does not create unsafe implication
- excluded keyword rules from `keyword-universe.md` are respected

SEO may shape structure. It does not authorize unsupported claims.

## 9. Medical And Legal Escalation Triggers

Escalate before publication when the article includes:

- disease treatment, prevention, reversal, or recovery language
- fall-prevention claims
- post-fall, post-surgery, hospitalization, frailty, or contraindication content
- supplement claims
- safety advice for deconditioned or medically complex adults
- clinician-visible claims without clinical-grade support
- product or affiliate claims adjacent to health outcomes
- testimonials or outcome language
- claims based on stale or conflicting sources
- implied medical advisor, clinician, scientist, or active author involvement
- book use outside permitted credibility or historical context

Escalation output must state:

- issue
- affected passage
- risk type
- recommended action: approve, hedge, source, rewrite, cut, defer

## 10. Article Readiness States

Use one readiness state at a time.

| State | Meaning | Next Action |
|---|---|---|
| Draft | Article exists but has not passed QA. | Complete QA checks. |
| Research Needed | Claims require stronger source support. | Return to research. |
| Revision Needed | Evidence may exist, but copy fails claim, persona, brand, commerce, or SEO safety checks. | Return to writer. |
| Escalation Needed | Medical, legal, governance, or brand risk is unresolved. | Escalate before further review. |
| Founder Review Ready | QA checks passed; founder judgment is the next gate. | Send to founder. |
| Publish Ready | Founder gate cleared and no blocking QA issues remain. | Publish through normal workflow. |
| Deferred | Topic or claim is not ready for Phase 1 or current governance. | Park with reason. |

Do not mark an article `Founder Review Ready` if unresolved QA issues remain.

## 11. Reviewer Responsibilities

Reviewer responsibilities are narrow and explicit.

### Research Reviewer

- verifies sources
- checks claim support
- flags freshness issues
- confirms research packet boundaries

### Editorial Reviewer

- checks structure, clarity, reader fit, and revision needs
- confirms unsupported claims are removed or narrowed
- keeps the draft implementation-ready

### Brand Reviewer

- checks tone, persona, authority framing, book usage, and prohibited language
- applies `BRAND.md` and `PERSONAS.md`

### Commerce Reviewer

- checks affiliate, product, quiz, and program language
- enforces evidence/commerce separation

### Founder

- gives final strategic, editorial, and judgment approval when required
- resolves decisions that governance cannot resolve

One reviewer may perform multiple roles, but the checks remain distinct.

## 12. Revision Workflow

Revision requests must be specific.

Each revision note should include:

- issue
- location
- rule or standard violated
- required change
- readiness impact

Preferred revision labels:

- Source
- Claim
- Citation
- Persona
- Brand
- Commerce
- SEO safety
- Escalation

After revision, rerun only the affected QA checks unless the article changed substantially.

## 13. Founder Review Gates

Founder review is required when:

- article is a pillar article
- article carries major authority positioning
- article is David-facing and emotionally sensitive
- article is commerce-sensitive
- article involves medical/legal escalation territory
- article introduces new product, quiz, program, or affiliate framing
- article changes book, founder, author, or platform-as-second-edition language
- reviewer judgment remains divided

Founder review should receive:

- article draft
- readiness state
- unresolved questions, if any
- high-risk claims, if any
- commerce notes, if any
- recommended decision

Do not send founder a vague "please review" request when QA already knows the decision needed.

## 14. Final Pre-Publish Checklist

Before publication, confirm:

- readiness state is `Publish Ready`
- claims are verified or hedged
- citations are verified
- source links resolve
- persona alignment passes
- tone and brand pass
- commerce firewall passes
- SEO safety passes
- escalation items are resolved
- founder gate is complete when required

If any item fails, the article is not publish ready.

## 15. Operational Defaults

When uncertain:

- slow the claim, not the workflow
- underpromise
- cite stronger sources
- preserve the reader's trust
- separate evidence from commerce
- route unclear evidence back to research
- escalate medical or legal risk
- ask founder only for the decision founder must make

QA quality is measured by clean decisions and fewer avoidable founder-review loops.

## Change Log

| Date | Change |
|---|---|
| May 2026 | First draft created as the initial Layer 2 editorial QA and review workflow. |

