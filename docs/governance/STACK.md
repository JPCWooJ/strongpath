# STACK.md

Status: Canonical StrongPath tech stack
Last updated: May 2026

## Purpose

This file is the authoritative record of the tooling installed and connected for StrongPath engineering work. It lists what is verified, what is observed but unvalidated, and what is deliberately not yet reconciled.

Verification rule: an entry appears here only when its presence has been directly inspected. Tool "success" claims are not evidence.

## Repository

- GitHub repo: `JPCWooJ/strongpath` (the StrongPath publication and platform repo — distinct from any prior RIA-path repo)
- Default branch: `main`
- Origin: `github.com/JPCWooJ/strongpath`
- Access from the local machine: authenticated `gh` CLI (account `JPCWooJ`, scopes `repo` + `workflow`)
- No GitHub MCP server installed — `gh` CLI is sufficient and a server would be redundant.

## Claude Code plugins (user scope, verified installed and enabled)

- `document-skills` (official, anthropics/claude-plugins-official)
- `code-review` (official, anthropics/claude-plugins-official) — installed and enabled, currently DORMANT (not wired as a PR gate)
- `typescript-lsp` (official, anthropics/claude-plugins-official)
- `vercel` (from `vercel@claude-plugins-official`) — plugin installed; its MCP server requires authentication before use

All adopted under the CTO authority rule for official Anthropic plugins (no founder approval required).

## Not installed

The following are referenced in older or scattered documents but are NOT installed in the current toolchain:

- Context7
- Sentry
- Supabase
- Any GitHub MCP server (intentional — covered by `gh` CLI)

The archived `archive/governance/STACK.md` shows some of these as "Connected" or "auth on first use." That archive is non-authoritative and stale; this file supersedes it.

## Claude.ai connectors (observed, NOT CTO-validated)

These connectors have been observed available in Claude.ai sessions but have not been validated by the CTO Agent against actual task execution. Treat as informational only until validated:

- Google Drive
- Figma
- Microsoft 365
- Intuit QuickBooks
- FMP (Financial Modeling Prep)
- Financial Datasets
- Tavily
- Netlify (observed failed)
- Gmail (requires authentication)
- Google Calendar (requires authentication)
- Others may be present session-to-session

Validation of any of these is a separate goal and not in scope for this file.

## To reconcile (deliberately left out of the verified set)

The following sources mention stack/MCP content but have not been validated against the live toolchain. They are listed here so they are not forgotten, and so this file does not silently inherit unverified claims:

- `agent-os/portfolio/ACTIVE_VERTICALS.md`
- `agent-os/portfolio/BEST_PRACTICES.md`
- `agent-os/portfolio/COMMANDS_BACKLOG.md`
- `agent-os/portfolio/DISAGREEMENTS.md`
- `.claude/rules/stack-compliance.md`

Reconciling these is a separate later goal.

## Stale copies (do not use)

- `archive/governance/STACK.md` — archived, non-authoritative, stale
- Drive `STACK.md` (in canonical governance folder) — pre-dates this file, stale

Retiring these is a separate later goal.

## Authoring rules

- This file is canonical. The authoritative copy lives at `docs/governance/STACK.md` in the `JPCWooJ/strongpath` repo, default branch `main`.
- Workflow for changes: CTO drafts → founder approves the draft → Claude Code edits, commits, pushes, and opens a PR in one pass → CTO reviews the resulting GitHub artifact.
- No self-merge to `main` without founder approval.
- Add an entry only when it has been directly verified. Move unverified claims to "To reconcile" first.

## Change log

- May 2026 — Initial canonical version. Created on branch `chore/stack-md-mcp-correction` as the proof-of-toolchain run for the Codex→Claude Code migration. Supersedes `archive/governance/STACK.md`.
