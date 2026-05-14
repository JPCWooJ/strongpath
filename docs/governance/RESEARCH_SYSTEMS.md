# RESEARCH_SYSTEMS.md

## Purpose

Canonical Layer 2 research workflow system for StrongPath.

This file defines how research is sourced, intake-reviewed, extracted, validated, stored, tagged, and handed off into article production.

This is an editorial systems document. It does not define CMS implementation, AI automation architecture, SEO systems, or article QA systems.

## Status

Status: First draft for review  
Layer: Layer 2 editorial systems  
Primary dependency: `CITATION_STANDARD.md`  
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

When this file and `CITATION_STANDARD.md` disagree on evidence, citation, source, claim, or outbound-link handling, `CITATION_STANDARD.md` wins.

## 1. Core Principle

StrongPath research exists to support clear, defensible reader-facing claims.

Research is not collected for volume. It is collected to answer:

- what can we responsibly say?
- what source supports it?
- how strong is the evidence?
- what must we avoid saying?
- what should the writer receive?

If research does not improve claim discipline, reader trust, or article usefulness, it is not useful research.

## 2. Research Workflow Overview

Canonical sequence:

1. define the research question
2. identify required citation classes
3. source approved materials
4. intake and screen sources
5. extract evidence
6. validate claims
7. assemble research notes
8. build article research packet
9. hand off to article writer
10. escalate unresolved risk

Do not skip intake, extraction, or validation because a source looks credible.

## 3. Research Sourcing Workflow

Start with the article or asset need.

For each research assignment, define:

- working topic
- target reader or persona
- claim territory
- likely risk level
- citation classes needed
- known excluded claims
- deadline or publishing sequence dependency

Then source in this order:

1. current peer-reviewed reviews, meta-analyses, or guidelines
2. current peer-reviewed primary studies where needed
3. named institutional sources
4. landmark older studies
5. book or founder-history references only for historical or credibility context

For commerce-sensitive topics, source evidence before product language is drafted.

## 4. Approved Source Classes

Approved source classes follow `CITATION_STANDARD.md`.

| Class | Approved Use |
|---|---|
| Clinical | Safety, disease-adjacent, intervention, contraindication, post-fall, post-surgery, clinician-visible, or high-risk claims. |
| Institutional | Definitions, patient-facing explanations, public-health context, general safety guidance. |
| Consensus | Broad field position, current guidance, or claims that should not rest on one study. |
| Mechanism | Physiological explanation: resistance training, protein, recovery, progression, adaptation. |
| Historical | Landmark studies, category history, book context, StrongPath origin. |
| Commerce-sensitive | Product, program, affiliate, quiz, supplement, or recommendation-adjacent claims. |

Unapproved as evidence:

- AI-generated answers
- unsourced blogs
- influencer content
- supplement-brand claims
- retailer pages
- Amazon reviews
- Reddit or forum comments
- competitor marketing pages
- the book as proof for current health claims

These may inform audience awareness only when clearly labeled as non-evidence.

## 5. Research Intake Process

Every candidate source receives a short intake screen before use.

Minimum intake fields:

- source title
- author, institution, or publisher
- publication year or updated date
- source type
- citation class
- URL or DOI
- claim territory
- relevance score: high, medium, low
- risk score: low, moderate, high
- freshness status: current, landmark, stale, uncertain
- use decision: use, reserve, reject, escalate

Reject sources that:

- cannot be verified
- make stronger claims than StrongPath can repeat
- are primarily commercial
- have unclear authorship or institutional accountability
- conflict with stronger sources without explanation
- are too old for the claim they would support

## 6. Evidence Extraction Workflow

Extraction turns sources into usable editorial material.

For each approved source, extract:

- the exact finding or guidance
- the claim it can support
- the claim it cannot support
- population studied or addressed
- intervention or exposure, if relevant
- outcome measured
- limitations
- safety notes
- useful mechanism language
- citation class
- freshness status
- recommended article use

Do not extract only the strongest-sounding sentence. Extract the limits that keep the claim honest.

## 7. Source Freshness Rules

Research freshness follows claim risk.

Use current sources when the claim is:

- clinical
- safety-related
- supplement-related
- commerce-sensitive
- clinician-visible
- about current practice or consensus
- about post-fall, post-surgery, hospitalization, frailty, or contraindications

Older sources are allowed when:

- the source is a landmark study
- the article names it as older
- the claim is historical or evidence-history oriented
- current sources are used for present-day practice claims

Review or replace a source when:

- it is more than five years old and supports current guidance
- the source page has no visible update date
- newer evidence may change the claim
- the article is a pillar article
- the source supports a high-risk claim

Freshness is not a date-only decision. A 1994 landmark study can be valid historical evidence; a 2019 article can be stale if newer guidance changed the field.

## 8. Research Note Structure

Research notes must be short, structured, and handoff-ready.

Use this format:

```txt
SOURCE
Title:
Author / Institution:
Year / Updated:
URL / DOI:
Source type:
Citation class:
Freshness:
Risk:

USEFUL FINDING
<1-3 bullets>

SUPPORTED CLAIMS
<claims StrongPath can make>

UNSUPPORTED CLAIMS
<claims StrongPath must not make from this source>

LIMITS / CAUTIONS
<population, study design, safety, or interpretation limits>

ARTICLE USE
<where this belongs in the article or packet>
```

Do not hand off raw links without notes.

## 9. Claim Validation Workflow

Every claim moves through validation before article handoff.

Validation steps:

1. write the proposed claim in plain language
2. assign citation class
3. attach source or sources
4. check whether the source directly supports the claim
5. narrow the claim if needed
6. apply hedge language
7. check book/product firewall
8. check affiliate separation if commerce-sensitive
9. mark status

Claim statuses:

- Approved: source supports the claim as written
- Approved with hedge: claim is usable only with narrower language
- Needs stronger source: source is plausible but insufficient
- Rewrite: claim direction is usable, wording is not
- Cut: claim is unsupported or unsafe
- Escalate: governance, legal, medical, or brand risk

If the source does not support the exact claim, the claim is not validated.

## 10. Article Research Packet Structure

An article research packet is the bridge between research and writing.

Minimum packet structure:

```txt
ARTICLE
Working title:
Primary persona:
Content type:
Risk level:
Primary claim territory:

EVIDENCE SUMMARY
<5-10 bullets explaining what the research supports>

APPROVED CLAIMS
<claim + source + citation class + hedge if needed>

DO NOT CLAIM
<unsupported, unsafe, outdated, or commerce-sensitive overclaims>

SOURCE LIST
<approved sources with links, dates, and classes>

MECHANISMS TO EXPLAIN
<plain-language mechanism notes>

SAFETY / DISCLAIMER NOTES
<medical, clinical, or referral-to-clinician language>

BOOK / CREDIBILITY USE
<if and how the book may appear>

COMMERCE-SENSITIVE NOTES
<affiliate, product, quiz, or program boundaries>

WRITER HANDOFF
<what the writer should do with the research>
```

The packet is not an outline unless explicitly requested. It is the evidence boundary for the article.

## 11. Storage And Tagging Expectations

Research materials must be findable and reusable.

Each research note or packet should be tagged with:

- topic
- persona
- content type
- citation class
- risk level
- freshness status
- source type
- article or asset slug when known
- commerce-sensitive flag when applicable

Use stable names:

```txt
YYYY-MM-DD_topic_source-shortname_note.md
YYYY-MM-DD_article-topic_research-packet.md
```

Do not create duplicate authority files. Storage supports retrieval; governance lives in canonical GitHub files.

## 12. Research-To-Article Handoff Workflow

The handoff should reduce writer ambiguity.

Before handoff, confirm:

- packet has approved claims
- unsupported claims are listed
- source links are present
- citation classes are assigned
- source freshness is marked
- safety notes are visible
- commerce-sensitive boundaries are clear
- book use is limited to credibility or historical context

Handoff format:

1. what the article can safely say
2. what it must not say
3. strongest sources
4. required hedges
5. safety or disclaimer notes
6. commerce and affiliate boundaries
7. open escalations

The writer should not have to infer evidence boundaries from raw research.

## 13. Escalation Rules

Escalate before handoff when:

- sources conflict materially
- a claim may be medical, legal, FTC, FDA, or affiliate-risk sensitive
- a source is stale but no current replacement is available
- a product, quiz, supplement, or affiliate recommendation depends on research support
- the book is being used to support a current health claim
- a clinician-visible claim lacks clinical-grade support
- the topic involves post-fall, post-surgery, hospitalization, frailty, contraindications, or disease-adjacent language
- a claim cannot be validated without over-narrowing it
- source credibility is uncertain

Escalation output must state:

- claim at issue
- source at issue
- risk type
- recommended decision: approve, hedge, replace source, rewrite, cut, or defer

Do not quietly pass unresolved research risk to the writer.

## 14. Operational Defaults

When uncertain:

- use the stronger source
- narrow the claim
- preserve the limitation
- separate evidence from commerce
- treat the book as credibility, not substantiation
- prefer current consensus over isolated findings
- mark uncertainty explicitly
- escalate instead of improvising

Research quality is measured by how cleanly it lets StrongPath say less, better.

## Change Log

| Date | Change |
|---|---|
| May 2026 | First draft created as the initial Layer 2 research workflow system. |

