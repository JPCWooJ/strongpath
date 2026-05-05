# HANDOFF_FORMAT.md

Version: 2.1
Authority: Tier 1 portfolio

## Purpose

Required format for agent-to-agent handoffs across the portfolio.

Use a handoff when work crosses a session, workstream, or ownership boundary. Keep it short enough to read in 60 seconds.

## Location And Filename

Drive folder:

```text
JCVC / Agent-OS / handoffs /
```

Filename:

```text
YYYY-MM-DD_<sender>-to-<receiver>__<short-subject>.md
```

Use lowercase role tags and kebab-case subjects.

Read pattern: `Google Drive:download_file_content` + base64 decode `content`.

## Required Template

Use these sections exactly, in this order:

```md
# <Sender> to <Receiver>
**Date:** <YYYY-MM-DD>
**Subject:** <one line>
**Status:** <Shipped | In progress | Blocked | Urgent>

## 1. Substrate
## 2. Skills
## 3. Canonical Files
## 4. Last / Next
## 5. Open Items
## 6. Decisions
## 7. Recommendation
```

## Section Rules

### 1. Substrate

State:

- Repo
- Visibility
- Raw URL pattern
- Auth state
- Access changes since last handoff

Receiver fetches directly. Do not ask Jeff to paste URLs.

### 2. Skills

List required skills only:

| Skill | Trigger | Status |
|---|---|---|

Status values: `installed`, `pending install`, `retired`.

### 3. Canonical Files

List files in scope:

| File | Version | Notes |
|---|---|---|

Receiver checks cache freshness before using any listed file.

### 4. Last / Next

Two lines only:

- **Last:** one sentence.
- **Next:** one sentence.

### 5. Open Items

Only include owned work:

```md
- **Item.** One sentence. **Owner:** <role>. **When:** <trigger or date>.
```

Unowned backlog is omitted.

### 6. Decisions

List decisions that affect future work. One sentence each. If a canonical file must be updated, name it.

### 7. Recommendation

One paragraph covering:

- Primary next deliverable
- Founder prerequisite, if any
- Fallback if blocked

## Receiver Rules

- Read once, top to bottom, before acting.
- Reject if substrate fields are missing or unclear.
- Load required installed skills.
- Run cache freshness checks for files in section 3.
- Confirm in chat: last, next, open items, and any blocker.

## Rejection Criteria

Reject and request rewrite if:

- Required section missing
- Sections out of order
- Substrate missing repo, visibility, raw URL pattern, or auth state
- Canonical file lacks version
- Open item lacks owner
- Body exceeds roughly 600 words excluding the files table
