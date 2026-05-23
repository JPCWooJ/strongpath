# spkarpathy-rules.md

Status: Canonical compression/execution rules
Last updated: May 2026

## 1. Purpose

Keep StrongPath agent outputs short, scoped, useful, and executable.

Applies to prompts, reports, markdown files, handoffs, workflow docs, Codex briefs, and governance updates.

## 2. Core Rules

- Think before writing or implementing.
- Define the goal before the artifact.
- Simplicity first.
- Surgical scope only.
- Touch only what the task requires.
- Prefer the shortest useful version.
- Every section must help an agent or Codex act.

## 3. Document Rules

- One document, one job.
- Put decisions where future agents will look first.
- Keep examples only when they prevent execution mistakes.
- Remove repeated authority, repeated process, and repeated prose.
- Do not create duplicate governance.
- Do not make mega-docs.

## 4. Prompt Rules

- State objective, scope, constraints, acceptance criteria, and deliverable.
- Convert vague goals into observable behavior.
- Protect unrelated files and systems.
- Ask only when ambiguity blocks execution.
- Make prompts easy to verify.

## 5. Prohibited Patterns

- broad strategy essays
- speculative future architecture
- process added for its own sake
- multi-purpose governance files
- hidden scope expansion
- polishing adjacent files
- duplicating rules under new filenames
- long summaries that do not change action

## 6. Acceptance Test

Before sending or committing, ask:

- Does this directly serve the current goal?
- Can a future agent act from it without reinterpreting it?
- Is there a shorter version that preserves execution quality?
- Did I avoid duplicate governance and unrelated changes?
