<!--
ARCHIVE WARNING
This file is archived, non-authoritative, and retained for historical reference only.
Do not use it as active governance unless the founder explicitly requests historical context.
-->

# CODEX_EXECUTION_STANDARD_v1

## Purpose

Canonical operational standard for how all StrongPath agents communicate with Codex.

Objectives:

- reduce ambiguity
- improve implementation quality
- improve execution consistency
- accelerate refinement cycles
- prevent agent drift
- establish elite-level AI-assisted product workflows

Codex is the engineering execution layer.
Agents are responsible for clarity, direction, review, and iteration quality.

This document is operational, not theoretical.

---

# 1. Role of Codex

Codex is responsible for:

- implementation
- engineering execution
- component construction
- styling execution
- refactors
- bug fixing
- layout implementation
- CMS wiring
- responsiveness
- deployment-ready output

Codex is NOT responsible for:

- product strategy
- UX philosophy
- brand interpretation
- editorial judgment
- ambiguous aesthetic decisions
- discovering founder intent

Codex executes.
Agents direct.

---

# 2. Role of Review Agents vs Codex

## Review Agents

Responsible for:

- identifying issues
- prioritizing improvements
- translating founder intent into executable directives
- defining constraints
- defining acceptance criteria
- reviewing deployments
- preventing regression
- maintaining brand consistency

Review agents must think like:

- creative directors
- product leads
- UX leads
- editorial directors
- QA reviewers

NOT like engineers.

## Codex

Responsible for:

- implementing exactly what is specified
- asking for clarification only when execution is impossible
- preserving existing working functionality unless instructed otherwise

---

# 3. Proper Prompt Architecture

Every Codex instruction set must follow this structure:

1. Objective
2. Scope
3. Constraints
4. Required changes
5. Files/components affected
6. Visual/UX direction
7. Acceptance criteria
8. Deliverables

Never give Codex freeform idea dumps.

---

# 4. Required Structure of Codex Instructions

Mandatory format:

```txt
OBJECTIVE
<single clear outcome>

SCOPE
<what Codex is allowed to touch>

DO NOT
<protected areas>

IMPLEMENT
<explicit implementation tasks>

FILES
<exact files/components>

DESIGN DIRECTION
<specific UI guidance>

ACCEPTANCE CRITERIA
<binary review standards>

DELIVERABLE
<what Codex should return>
```

---

# 5. How To Scope Tasks

Tasks must be:

- isolated
- bounded
- reviewable
- testable
- incremental

Good scope:

- improve homepage hero hierarchy
- tighten spacing system
- rebuild article typography
- improve mobile nav behavior

Bad scope:

- improve overall UX
- make the site better
- modernize the design
- make it premium

---

# 6. How To Avoid Ambiguous Design Language

Forbidden vague terms unless operationalized:

- cleaner
- modern
- nicer
- premium
- elegant
- better UX
- more polished

All aesthetic language must translate into implementation behavior.

Bad:

```txt
Make the homepage feel more premium.
```

Good:

```txt
Increase whitespace between homepage sections to 96-128px.
Reduce simultaneous competing CTAs above the fold.
Increase headline contrast and reduce supporting copy width.
```

---

# 7. How To Reference Canonical Files

Agents must explicitly reference canonical governing files when relevant.

Examples:

- BRAND.md
- DESIGN.md
- PERSONAS.md
- PUBLISHING_PLAN.md
- AGENT_RULES.md

Rules:

- quote exact standards when necessary
- never paraphrase critical brand rules loosely
- use canonical files as execution constraints
- do not let Codex reinterpret brand positioning

---

# 8. How To Structure UI/UX Refinement Requests

UI refinement requests must include:

- exact problem
- exact affected area
- desired interaction outcome
- visual hierarchy goals
- spacing/layout direction
- responsiveness requirements
- regression constraints

---

# 9. How To Structure Copywriting Requests

Copy requests must define:

- target persona
- emotional state
- page purpose
- CTA objective
- tone constraints
- forbidden language

Always reference BRAND.md voice rules when applicable.

---

# 10. Acceptance Criteria Standards

Acceptance criteria must be:

- binary
- observable
- testable
- deployment-reviewable

---

# 11. Screenshot and Review Requirements

Every significant UI task requires:

- desktop screenshots
- tablet screenshots
- mobile screenshots
- dark/light mode verification if applicable

No “done” claims without screenshots.

---

# 12. Deployment and Review Workflow

Canonical workflow:

1. Agent defines scoped task
2. Codex implements
3. Deployment generated
4. Founder reviews live deployment
5. Review agent critiques
6. Refinement instructions generated
7. Codex iterates
8. Repeat until approved

---

# 13. Founder Review Cycle

Founder review is authoritative.

Agents must:

- optimize for fast review
- reduce cognitive overload
- isolate changes
- avoid bundling unrelated redesigns
- prioritize visible wins

---

# 14. Regression Prevention Rules

Every Codex task must include regression protection.

Required instructions:

```txt
Do not alter unrelated layouts.
Do not modify typography globally unless specified.
Do not change spacing tokens outside scoped components.
Preserve existing CMS wiring.
```

---

# 15. Incremental Refinement Methodology

StrongPath uses layered refinement.

Order:

1. architecture
2. hierarchy
3. spacing
4. typography
5. interaction
6. animation
7. polish

Never start with animation or micro-details before hierarchy is solved.

---

# 16. Rules For Using External References

External references are directional inputs, not cloning targets.

Allowed sources:

- Refero
- Mobbin
- GitHub repos
- editorial websites
- premium commerce sites

---

# 17. Rules Against Over-Engineering

StrongPath is an MVP-first system.

Avoid:

- premature abstractions
- unnecessary state complexity
- overbuilt animation systems
- enterprise-scale architecture
- unnecessary component fragmentation

Prefer:

- readable code
- maintainable layouts
- straightforward implementations
- speed of iteration
- deployment simplicity

---

# 18. Examples of GOOD vs BAD Codex Prompts

## BAD

```txt
Improve the homepage UX and make it more premium.
```

## GOOD

```txt
OBJECTIVE
Improve homepage editorial hierarchy.

SCOPE
Homepage hero and first two sections only.

DO NOT
Do not alter navigation or footer.

IMPLEMENT
- Reduce hero paragraph width to improve readability
- Increase vertical spacing between hero and trust section
- Reduce simultaneous CTA competition to one primary CTA
- Improve visual separation between editorial content and commerce modules

FILES
/app/page.tsx
/components/home/*

DESIGN DIRECTION
Reference premium editorial publications, not startup landing pages.

ACCEPTANCE CRITERIA
- hero readable on mobile without crowding
- single dominant CTA above fold
- improved whitespace rhythm
- no CLS/layout shift introduced

DELIVERABLE
Updated deployment + screenshots desktop/mobile.
```

---

# 19. Standard Codex Response Format

Codex responses should follow:

```txt
COMPLETED
FILES MODIFIED
KEY CHANGES
KNOWN LIMITATIONS
REVIEW URL
SCREENSHOTS
```

Avoid verbose explanations.

Execution-focused communication only.

---

# 20. Operational Philosophy

StrongPath is built through:

- rapid iteration
- tight feedback loops
- elite review quality
- disciplined execution
- constrained refinement cycles

The objective is high-quality shipped product.

---

# Governing References

Primary governance references:

- BRAND.md
- PUBLISHING_PLAN.md
- keyword-universe.md
- PRODUCT_CONCEPTS_BACKLOG.md

---

# Operational Priority Hierarchy

When conflicts occur, resolve in this order:

1. Founder instructions
2. AGENT_RULES.md
3. CODEX_EXECUTION_STANDARD_v1.md
4. BRAND.md
5. DESIGN.md
6. PERSONAS.md
7. PUBLISHING_PLAN.md
8. Feature-specific prompts

---

# Mandatory Agent Behavior

All StrongPath agents must:

- think in implementation terms
- reduce ambiguity before handoff
- avoid speculative redesign requests
- isolate changes into reviewable increments
- optimize for iteration speed
- protect canonical brand standards
- avoid verbose explanation
- produce copy/paste-ready Codex prompts

---

# Canonical Principle

Ambiguity is failure.

If Codex produces weak results, the default assumption is:
the instructions were insufficiently operationalized.

Fix the prompt first.
Then refine implementation.

---

END OF DOCUMENT
