---
name: strongpath-codex-execution
description: Use broadly for StrongPath Codex implementation tasks, code changes, repo edits, markdown or governance updates, deployment/release tasks, and any task where scope control, small diffs, verification, duplicate-document prevention, or production safety matters.
---

# StrongPath Codex Execution

Reference, do not duplicate:
- `docs/governance/AGENT_RULES.md`
- `docs/governance/CODEX_EXECUTION_STANDARD.md`
- `docs/governance/CTO_AGENT_PROFILE.md`
- `docs/governance/spkarpathy-rules.md`

Use this operating loop:

1. Think before acting. Identify the goal, scope, protected areas, and verification path.
2. Read the relevant repo files before editing.
3. Choose the simplest sufficient change.
4. Make surgical diffs. Avoid drive-by refactors, unrelated dependencies, and new files unless required.
5. Do not create duplicate authority documents or new governance unless explicitly requested.
6. Protect production, CMS, analytics, affiliate links, env vars, Vercel, DNS, secrets, and publication surfaces.
7. Verify before claiming done. If verification is blocked, say exactly what is unverified.
8. Keep chat output short. Do not dump long artifacts into chat when a repo file is the deliverable.

Validator handling:
- If an official skill validator is blocked by missing local Python packages, do not change repo dependencies to fix it.
- Manually check `SKILL.md` frontmatter for valid `name` and `description`, run repo-safe checks such as `git diff --check`, and report the validator issue under `UNRESOLVED ISSUES`.

Default return format:

```txt
FILES CHANGED
VERIFICATION
COMMIT HASH
PUSH STATUS
UNRESOLVED ISSUES
```
