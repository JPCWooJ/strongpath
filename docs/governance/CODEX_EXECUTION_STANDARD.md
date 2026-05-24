# CODEX_EXECUTION_STANDARD.md

Status: Canonical Codex execution standard
Last updated: May 2026

## Purpose

This file defines how StrongPath turns instructions into safe code changes.

Codex implements. The directing agent owns scope, constraints, acceptance criteria, and review quality.

## Codex Brief Format

Use this structure for non-trivial implementation work:

```txt
OBJECTIVE
<one outcome>

SCOPE
<allowed files, routes, components, systems>

DO NOT
<protected areas>

IMPLEMENT
<specific changes>

ACCEPTANCE CRITERIA
<binary checks>

DELIVERABLE
<files changed, verification, commit/PR/review URL, unresolved issues>
```

Keep the brief short. Remove anything that does not change implementation behavior.

Apply `spkarpathy-rules.md` to prompts, reports, markdown files, handoffs, workflow docs, and governance updates.

## Scope Rules

Good tasks are:
- isolated
- testable
- reversible
- reviewable in one sitting

Avoid:
- vague redesigns
- bundled refactors
- speculative abstractions
- new dependencies without need
- cross-workstream changes hidden inside code tasks

Translate subjective language into implementation behavior. Example: replace "make it more premium" with spacing, hierarchy, typography, CTA, and responsiveness requirements.

## Execution Rules

- Read the relevant files before editing.
- Preserve unrelated behavior.
- Match existing patterns before adding abstractions.
- Keep diffs small.
- Use typed, structured APIs where available.
- Do not handwrite content that belongs to editorial, brand, or GTM.
- Do not touch secrets.
- Do not alter DNS, Vercel project ownership, billing, or production env vars without explicit founder approval.
- Record material architecture or stack deviations in `docs/decisions.md`.

## Regression Protection

Every implementation task must protect:
- existing routes
- CMS wiring
- affiliate disclosures and tags
- analytics attribution
- responsive layouts
- accessibility
- public-facing claim discipline

Default protected instruction:

```txt
Do not alter unrelated layouts, copy, typography tokens, CMS wiring, analytics events, affiliate links, or deployment settings.
```

## Verification

Run the checks that match the change:
- `npm run typecheck`
- `npm run lint`
- tests when touched behavior has tests
- build when routing, config, or deployment behavior changes
- desktop/mobile verification for UI changes; screenshots only when needed for visual debugging, regression review, or when reviewers cannot reliably inspect the deployment directly

UI review should include desktop and mobile. Significant public UI changes should include a deploy preview or local browser verification.

If verification cannot be completed, say exactly what was not verified and why.

## Deployment Workflow

For code changes:
1. create or use a short-lived feature branch
2. implement the scoped task
3. verify locally
4. commit a focused diff
5. open PR or provide reviewable commit
6. merge only after review criteria pass

`main` is production. Do not commit directly to `main` unless the founder explicitly instructs an emergency path.

## Standard Return Format

```txt
FILES CHANGED
KEY CHANGES
VERIFICATION
COMMIT / PR
PUSH STATUS
UNRESOLVED ISSUES
```

No long process narrative.
