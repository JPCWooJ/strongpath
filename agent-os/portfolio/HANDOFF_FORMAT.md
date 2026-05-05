# HANDOFF_FORMAT.md

Version: 2.0
Last updated: May 5, 2026
Authority: Tier 1 (portfolio). Inherited by every JCVC vertical, every workstream, every agent.

---

## What this file is

The required format for every agent-to-agent handoff in the JCVC portfolio. Sections are fixed and ordered. A handoff missing a section, or with sections out of order, is rejected by the receiver — they request a rewrite before doing any work.

Handoffs live in Drive at `JCVC / Agent-OS / handoffs /`. Filename: `YYYY-MM-DD_<sender>-to-<receiver>__<short-subject>.md`.

## Required sections

Every handoff has these seven sections, in this order, with these exact headers. No additions before §1. No reordering.

```
# <Sender> → <Receiver>
**Date:** <YYYY-MM-DD>
**Subject:** <one line>
**Status:** <Shipped | In progress | Blocked | Urgent>

## 1. Substrate access
## 2. Skills installed
## 3. Canonical state at handoff
## 4. Last thing done / next thing to do
## 5. Open backlog items
## 6. Decisions made this session
## 7. Recommendation
```

## Section contents

### §1. Substrate access

Tells the receiver where source-of-truth files live and how to read them. Required fields:

- **Repo:** URL (e.g. `github.com/JPCWooJ/strongpath`)
- **Visibility:** public or private
- **Raw URL pattern:** the exact pattern the receiver uses to fetch any canonical file (e.g. `raw.githubusercontent.com/JPCWooJ/strongpath/refs/heads/main/agent-os/<path>/<filename>.md`)
- **Auth state:** none (public) | token required | other
- **Access changes since last handoff:** any change to repo visibility, path conventions, or fetch protocol since the last handoff to this receiver. If none, write "none."

The receiver fetches directly using the raw URL pattern via `web_fetch`. The receiver does not ask the founder to paste URLs.

### §2. Skills installed

Lists every skill the receiver should have loaded and what triggers it. Required fields per skill:

- **Name:** skill name (e.g. `canonical-md-io`)
- **Trigger:** the conditions that load it (e.g. "session start when canonical files are in scope")
- **Status:** installed | pending install | retired

If a new skill was packaged this session and the founder has not installed it yet, list it under "pending install" and name the file path of the `.skill` artifact.

### §3. Canonical state at handoff

A table covering every canonical file in scope. Required columns:

| File | Current version | Last touched | Notes |

- **Current version** is the version-line value (e.g. `v6`, `May 5, 2026`).
- **Last touched** is the session number that last modified it.
- **Notes** flag stale-cache risk, open issues, or recent decisions affecting the file.

Files unchanged for many sessions are still listed. The table is cumulative, not delta.

Receiver runs the cache freshness check on every file in this table before any work. The check: read the version line from `/mnt/project/<filename>`, `web_fetch` the same line from the raw URL pattern in §1, compare. Match → use cache. Mismatch → use fetched version, tell the founder.

### §4. Last thing done / next thing to do

Two lines. Not paragraphs.

- **Last thing done:** what shipped this session, in one sentence.
- **Next thing to do:** the single next action the receiver takes, in one sentence.

If the receiver opens the handoff and reads only these two lines, they should know what to do.

### §5. Open backlog items

Every item carries an owner and a when. Format:

- **Item.** One sentence. **Owner:** <role>. **When:** <trigger condition or session>.

If an item has no owner, it does not belong here — it belongs in the workstream that owns it, or it gets dropped. Backlog without ownership is noise.

### §6. Decisions made this session

Decisions that change how future sessions operate. Each decision is one to three sentences. No rationale unless the rationale is itself a future-load-bearing fact.

If a decision changes a canonical file but the file has not yet been updated, name the file and flag the dependency. The next session's first job is closing that gap.

### §7. Recommendation

The sender's recommendation for what the next session does. Includes:

- The next session's primary deliverable
- Any prerequisite the founder must complete first (install a skill, refresh a cache)
- The fallback if the primary deliverable can't start

One paragraph. Not a multi-option menu unless the sender genuinely cannot recommend.

## Receiver rules

The receiver reads the handoff once, top to bottom, before any other action.

1. **Verify §1 substrate access** — confirm the receiver can fetch the raw URL pattern via `web_fetch`. If the URL pattern is missing, repo visibility unstated, or auth state unclear, **reject the handoff**. Reply to the sender (or the founder, if the sender's chat is closed) with one line: "Handoff rejected — §1 incomplete. Need <field>."
2. **Confirm §2 skills loaded** — every skill marked "installed" should already be triggering for the receiver. Any "pending install" skill must be installed by the founder before the receiver acts on work that depends on it.
3. **Run cache freshness check on every file in §3** before reading any canonical file. Read the cache version line, `web_fetch` the live version line, compare. One tool call per file. No founder interaction required.
4. **Read §4–§7 in order.** Skim is not allowed. If the recommendation cites a backlog item, the receiver verifies the item is in §5 with a clear owner.
5. **Confirm what was read in chat** before proposing scope. The confirmation lists the receiver's understanding of §4 (last/next) and §5 (open items) so the founder can correct misreads before work starts.

## Rejection criteria

A handoff is rejected and rewritten if any of the following are true:

- A required section is missing
- Sections are out of order
- §1 is missing repo URL, visibility, or raw URL pattern
- §3 has files without versions or last-touched session
- §5 has items without owners
- The handoff exceeds ~600 words excluding the §3 table

Rejection is mechanical. Receivers do not interpret around format failures.

## Length target

A complete handoff reads in 60 seconds. Excluding the §3 table, total body is roughly 400–600 words. If a section needs more, it probably belongs in a canonical file the handoff references.

## Filename and location

```
JCVC / Agent-OS / handoffs / YYYY-MM-DD_<sender>-to-<receiver>__<short-subject>.md
```

`<sender>` and `<receiver>` use lowercase role tags: `spath-cos`, `cto`, `spath-content`, `spath-brand`, `spath-cw`, etc. `<short-subject>` is kebab-case, three to six words.

Saved to Drive in the handoffs folder. Read pattern: `Google Drive:download_file_content` + base64 decode the `content` field. Do not use `read_file_content` — it corrupts markdown.
