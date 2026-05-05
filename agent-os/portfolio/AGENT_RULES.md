# AGENT_RULES.md - Universal agent rules
Version: May 5, 2026
Authority: Tier 1 portfolio

## Canonical Substrate

- GitHub is canonical for `.md` files: `github.com/JPCWooJ/strongpath`.
- Canonical files live under `agent-os/`.
- Raw URL pattern: `https://raw.githubusercontent.com/JPCWooJ/strongpath/refs/heads/main/agent-os/<path>/<filename>.md`.
- Auth: none.
- Claude.ai project files are cache only. Refresh them from GitHub after commits.
- OneDrive `.md` copies are deprecated. Do not read or write them.
- Drive holds handoffs and non-`.md` assets.
- OneDrive may hold legacy non-`.md` assets when no newer canonical location exists.

## Operating Style

- Lead with the answer.
- Recommend a course of action. Do not offer menus unless the decision is genuinely open.
- Bias toward execution, then document what changed.
- Keep founder coordination low: fetch source files directly, write complete artifacts, and avoid asking Jeff to courier text.
- Ask only execution-gating questions. One question at a time.
- Push back when a request conflicts with canonical files, legal risk, security, or execution reality.

## Response Defaults

Use the shortest structure that answers the request:

| Request | Default response |
|---|---|
| Yes/no | One sentence |
| Fact | 1-3 sentences |
| Recommendation | Recommendation + one reason |
| Status | Done, flags, next |
| Diagnostic | Findings, recommendation, one question if needed, action |
| Substantial deliverable | File output, not long chat |

Rules:

- No preamble or postamble.
- Lists and tables beat long prose.
- If Jeff asks for depth, go deeper. Otherwise stay short.

## Markdown File Rules

- Keep stable filenames. Use `BRAND.md`, not `BRAND_v4.md`.
- Put version in the header, not the filename.
- Required header:

```md
# FILENAME.md - <one-line purpose>
Version: <date or vN>
Authority: <Tier 1 portfolio | Tier 2 domain | Tier 3 vertical>
```

- State rules, not origin stories.
- Do not keep change logs in canonical file bodies. Git tracks history.
- Delete duplicate rules and paragraphs that do not change behavior.
- Use `##` and `###` headings only.
- Use tables for parallel structure.
- Use code fences for commands and paths.
- Target a 5-minute read for Tier 1 files and shorter for lower tiers.

## File Access

### GitHub

- Read canonical `.md` from GitHub or the refreshed Claude.ai cache.
- Before relying on cache, compare the cached `Version:` line with the raw GitHub `Version:` line.
- If versions differ, use GitHub and tell Jeff the cache needs refresh.
- Write canonical `.md` changes through Git commits.

### Drive

- Use Drive for handoffs and non-`.md` assets.
- For Drive `.md` reads, use `download_file_content` and base64 decode the `content` field.
- Do not use Drive `read_file_content` for markdown.
- For Drive `.md` writes, use `create_file` with `disableConversionToGoogleType: true` and `contentMimeType: "text/markdown"`.

### OneDrive

- Do not use OneDrive for canonical `.md`.
- Use OneDrive only for legacy or non-`.md` assets when referenced by canonical files.
- The Microsoft 365 MCP is read-only.

## Handoffs

- Handoffs are structured `.md` messages for session-to-session or workstream-to-workstream transfer.
- Use `HANDOFF_FORMAT.md`.
- Sections are fixed and ordered.
- Handoffs live in Drive: `JCVC / Agent-OS / handoffs /`.
- Chat gets only a short pointer: what the file is, Drive path, file ID, and read pattern.

## Agent-To-Agent Messages

- Use markdown for substantive agent-to-agent communication.
- Use headers, lists, and tables.
- Keep chat brief when the founder is only routing a pointer.

## Skills

- At task start, check available skills.
- Load every matching `SKILL.md` before producing output.
- Project skills override portfolio skills.
- If a needed skill is missing, flag the gap.

## Decision, Risk, And Security

- Document decisions in the canonical file that governs future behavior.
- If a request conflicts with a canonical decision, say so and recommend the update needed.
- Flag legal, compliance, health-claim, financial, FTC, IP, privacy, and security risks immediately.
- Never share credentials, tokens, passwords, or secrets in chat.
- If a secret is exposed, instruct Jeff to revoke and regenerate it.

## Commit Flow For Canonical Markdown

Run from `~/Dev/strongpath`:

```bash
git checkout main
git pull origin main
git checkout -b update/<short-description>
git add agent-os/<path>/<filename>.md
git diff --cached --stat
git commit -m "<message>"
git push -u origin update/<short-description>
gh pr create --base main --title "<title>" --body "<body>"
gh pr merge <PR#> --squash
git checkout main
git pull origin main
git branch -d update/<short-description>
```

Before commit, inspect the staged diff. If the size does not match the intended scope, stop and investigate.

## Precedence

Domain rules live in their project files. Tier 1 rules win unless a lower-tier override is explicit and approved.
