# HANDOFF_FORMAT.md

**JCVC Portfolio — Handoff Message Format**
Version: 1.2
Last updated: May 5, 2026
Authority: Tier 1 (portfolio). Inherited by every JCVC vertical, every workstream, every agent.
Owner: Chief of Staff (originating workstream when authoring a handoff; this file maintained by Chief of Staff).

---

## Distribution

**Canonical home:** `JPCWooJ/strongpath` repo, `agent-os/portfolio/HANDOFF_FORMAT.md` (GitHub, public).

**After commit to `main`:** Founder must refresh every Claude.ai project folder that includes this file by re-uploading from the GitHub copy. The `/mnt/project/` cache is the previous version until that re-upload happens.

**OneDrive `.md` copies are deprecated and stale.** Do not read from OneDrive for any `.md` file.

**Drive copy at `JCVC / Agent-OS / HANDOFF_FORMAT.md` (file ID `11cF0pLrod4wcE5mb8apShm_8kprzSU2J`) is superseded by this GitHub canonical.** The Drive copy should be deleted or marked deprecated.

---

## 1. Purpose

A handoff is a structured markdown message a workstream produces when it has completed a body of work that another agent must act on. It is the closing counterpart to the opening session that consumes it.

This file defines the format of handoff messages. The medium (markdown) and the trigger conditions (when to author a handoff vs. a normal markdown message) are defined in `AGENT_RULES.md` §Agent-to-Agent Communication and §Handoffs. This file picks up from there and specifies the structure.

Two reasons this format exists:

1. **Token efficiency and parseability.** Structured markdown costs less attention to read than prose, scales across many workstreams, and gives every agent the same shape to expect. Agents parse headers, tables, and short bullets quickly; they slow down on prose with the same content.
2. **Discipline on the sender.** Authoring a handoff in this shape forces the workstream to separate *decision* from *files changed* from *what's blocked* from *what's next*. Loose prose lets all four blur together and creates downstream rework.

---

## 2. Format vs. delivery

The handoff is a markdown message. The medium it is delivered through is a separate question.

**Default delivery: pasted into chat.** Most handoffs go directly into the next chat as the opening message. No file save, no folder, no sync wait. The message *is* the handoff.

**Exception: saved as a `.md` file.** When (a) the handoff carries audit-trail value (will be re-read weeks or months later), (b) the receiver is an agent not currently in chat (need to leave a message for a future session), or (c) the founder explicitly wants a permanent record. See §6 for save conventions.

The format is identical in both cases. The same eight sections, the same ordering, the same empty-state strings. Format is the unit; delivery is downstream.

---

## 3. The format

Every handoff has these sections in this order. No exceptions, no rearranging. Section names, casing, and order are part of the contract.

### 3.1 Header

A four-line header at the top of the message:

```
# [Sending Workstream] → [Receiving Workstream] Handoff
**Date:** [ISO date, e.g. May 1, 2026]
**Subject:** [Short noun phrase. What this handoff is about. One line, ~60 chars max.]
**Status:** [Shipped / Blocked / Awaiting Review]
```

- `[Sending Workstream]` is the workstream that authored the work. `[Receiving Workstream]` is the primary recipient. If the handoff goes to multiple recipients, the primary owner of the next action is named here; secondary recipients go in §3.7 Unblocks.
- **Status** is one of three values:
  - **Shipped** — work is complete, recipient can act.
  - **Blocked** — work is paused on something the recipient must resolve before sender continues.
  - **Awaiting Review** — work is complete pending recipient sign-off; sender does not unpark until review returns.

### 3.2 Last thing done / Next thing to do

Required as the first two lines after the header, before the Decision section. Two lines, no preamble:

```
**Last thing done:** [One sentence. The body of work being shipped in this handoff.]
**Next thing to do:** [One sentence. The exact next action the recipient owns.]
```

These two lines make the handoff scannable in five seconds: an agent receiving a stack of three handoffs can read just the headers and these two lines and know what's on its plate before reading any further.

### 3.3 Decision

The substantive output of the handoff. What was decided, what was authored, what changed.

- **For decision-shipping handoffs** (Brand Ambassador → Chief of Staff after a `BRAND.md` revision): the decision itself, plus the framings or rules that codify it. 1-3 short paragraphs or a tight bulleted list.
- **For build-shipping handoffs** (CTO → Chief of Staff after a sprint): a paragraph describing what shipped, plus the architectural calls that matter to downstream workstreams.
- **For review-requesting handoffs** (Content Writer → Brand Ambassador for eunoia review): the artifact requiring review, what the sender is asking the reviewer to specifically check, and any context the reviewer needs to do the review.
- **For session-to-session handoffs** (Chief of Staff session N → Chief of Staff session N+1): the substantive decisions or work products from the closing session, in dense form. The receiver is the same role one chat reset later — assumes role context, does not need it re-explained.

Keep this section dense. No throat-clearing, no recap of what the workstream is. The recipient already knows.

### 3.4 Canonical state at handoff *(new in v1.2)*

A required table that gives the receiver the **cumulative state** of every canonical file relevant to the work it is about to do — not just the files this session touched.

The problem this section solves: a handoff that lists only the deltas from one session can leave the receiver unaware that prior sessions made major changes. The receiver then defaults to the `/mnt/project/` cache, which can be many sessions stale, and produces work based on a worldview that diverged from `main` weeks ago. This section closes that gap.

Format:

```
| File | Current version | Last touched | Notes |
|---|---|---|---|
| AGENT_RULES.md | May 4, 2026 (session 16) | session 16 | GitHub-canonical migration codified |
| HANDOFF_FORMAT.md | v1.1 | session 6 (late) | unchanged this session |
| WORKSTREAM_STATUS.md | session 16 | session 16 | Flag 8 added |
```

**Rules:**

1. **Every Tier 1 file appears in this table on every handoff**, regardless of whether the current session touched it. Tier 1 is small enough that the cost of listing it is trivial, and the receiver needs to know the cumulative state.
2. **Tier 2 and Tier 3 files appear when the receiver is likely to read or act on them.** The sender uses judgment. When in doubt, include — over-listing is cheap; under-listing is the failure mode this section exists to prevent.
3. **The Current version column shows what is currently committed to `main`** at the moment the handoff is authored. The sender confirms this by reading the live raw GitHub URL (or the canonical file's header) at handoff-write time, not by reading the `/mnt/project/` cache.
4. **The Last touched column names the session that last modified the file.** This lets the receiver tell at a glance which files have moved recently and which are stable. If unknown, write `unknown` rather than guessing.
5. **The Notes column is a one-line description of what changed last** or other context the receiver needs. If nothing notable, write `unchanged this session` or leave blank.
6. **If a file was modified by this session, the Notes column makes that explicit** — e.g. `updated this session: §3.4 added` rather than just naming the section in §3.6.

If no canonical files exist that the receiver needs to be aware of (rare), write `*No canonical files relevant to this handoff.*` rather than omitting the section.

### 3.5 Decision dependencies *(new in v1.2)*

A short paragraph or tight bullet list naming any decisions, framings, or commitments the receiver needs to know about that are **not yet** reflected in canonical files.

Example: a session that decided "GitHub will be canonical for `.md`" before any file was rewritten to reflect that decision. The decision is real and binding; canonical files have not caught up yet. The receiver needs to know.

If the canonical files are fully caught up to all in-flight decisions, write `*None — canonical files reflect all current decisions.*`

This section prevents the failure mode where a handoff says "files updated: BRAND.md v6" but a verbal decision made an hour earlier about how `BRAND.md` will be re-architected next session is not transmitted at all.

### 3.6 Files updated

A markdown table listing every canonical file changed *by this session's body of work specifically*. Two columns:

```
| File | Version |
|---|---|
| BRAND.md | v6 |
| PERSONAS.md | v4 |
```

- **File** column: the filename only (no path). The recipient knows where canonical files live.
- **Version** column: the new version number. If a file does not have a version line, use the date instead (e.g. `May 1, 2026`).
- If a file is *new* (didn't exist before this handoff), append `(new)` after the version: `v1.0 (new)`.
- If a file was *deprecated*, append `(retired)` and add a Notes column row explaining where its content moved.
- Order rows by Tier (portfolio first, eComm domain second, vertical third), then alphabetically within tier.

If no canonical files changed, write `*No canonical files updated.*` instead of leaving the section empty. Empty sections look like the agent forgot to fill them in.

**Note:** §3.4 (Canonical state) shows the cumulative state of all relevant files; §3.6 (Files updated) shows just this session's deltas. Both sections are required because they answer different questions: §3.4 says "what is true now," §3.6 says "what changed in this session."

### 3.7 Open backlog items

Items the body of work surfaced but did not resolve. The recipient or another workstream owns each one.

Format as a bulleted list. Each item names the owner explicitly:

```
- `keyword-universe.md` §9 still references author bio pages. **Owner:** SEO Strategist. **When:** next pass.
- Vercel build failing intermittently on `/studio` route. **Owner:** CTO. **When:** before Brief 1 publish.
```

- Use `**Owner:**` and `**When:**` exactly. The bold-italic pair is the contract — recipients grep for it.
- If there are no open items, write `*None.*` rather than omitting the section.

### 3.8 Unblocks

Which workstreams are now free to begin or resume work, and what specifically they can do. This is the section that turns the handoff into action across the portfolio.

Format as a bulleted list, one bullet per workstream unblocked:

```
- **Content Writer:** Briefs 1–10 v6-clean. Brief 10 next. Brief 7 needs eunoia review before publish.
- **SEO, Paid Media, Email, Community:** brand foundation stable, safe to engage.
- **CTO:** ready to scope CC-5 (analytics instrumentation) once CC-1 through CC-4 ship.
```

- The workstream name in bold, followed by a colon, followed by what they can now do.
- One bullet per workstream. If a workstream is *not* unblocked, do not list it — silence is the signal.
- If no workstreams are unblocked (rare), write `*No downstream workstreams unblocked by this handoff.*`

### 3.9 Recommendation

The sender's recommended next move for the recipient. One short paragraph or 1-3 short bullets.

This is not a request for permission. It is the sender — operating as the expert in their domain — telling the recipient what they think should happen next. The recipient still owns the call. But the sender has earned the right to recommend by virtue of having done the work.

Examples:

- "Engage the SEO Strategist next; the keyword universe blocks Content Writer's Briefs 11+ and isn't blocked on anything itself."
- "Run Brief 7 eunoia review before Week 3 publishing window. Schedule via founder."
- "Park GitHub MCP setup until Path A trust gate clears; current Path A flow is working."

If the sender has no recommendation, that itself is meaningful — write `*No recommendation; recipient's call.*` rather than omitting the section.

---

## 4. Authoring rules

These rules apply to every handoff an agent authors:

1. **Author in markdown.** The handoff is a markdown payload. Whether it gets pasted into chat or saved as a `.md` file is a delivery question (see §6).

2. **No prose padding.** No "I hope this is helpful," no "let me know if you have questions," no recap of what the sending workstream is. Every line earns its place.

3. **One handoff = one body of work.** If a workstream has shipped two unrelated things, author two handoffs. Bundling makes both harder to act on.

4. **No section omitted, no section reordered.** All eight structural sections — header, Last/Next pair, Decision, Canonical state at handoff, Decision dependencies, Files updated, Open backlog items, Unblocks, Recommendation — appear in every handoff. Sections that have nothing to report use the explicit empty-state strings defined above (`*None.*`, `*No canonical files updated.*`, `*None — canonical files reflect all current decisions.*`, etc.) rather than being deleted.

5. **Cite versions, not "the latest."** "BRAND.md v6" is permanent and audit-ready. "the latest BRAND.md" rots the moment someone bumps the version.

6. **Length follows from the work, not a cap.** A handoff is as long as the work requires and no longer. The structure prevents bloat — every section either contains substance or contains its empty-state string. Do not pad to look thorough; do not truncate to look terse.

7. **The sender authors the handoff. The receiver acknowledges.** Receiver's acknowledgment is a normal short markdown reply: what was logged, what's next, any clarifying questions. Receiver does not author a counter-handoff unless they themselves are shipping work back.

8. **Fill §3.4 from `main`, not from cache.** When authoring §3.4 Canonical state at handoff, the sender confirms current versions by reading the live GitHub raw URL or the canonical file headers at handoff-write time — not by reading `/mnt/project/`. The cache is a snapshot of an unknown moment; the receiver depends on §3.4 being current.

---

## 5. Receiving rules

When an agent receives a handoff:

1. **Read all sections in order.** Do not skim to Recommendation.
2. **Cross-check §3.4 against your `/mnt/project/` cache before any work.** For every file listed in §3.4, compare the version shown there to the version line in `/mnt/project/<filename>`. If they differ, your cache is stale and you must work from the live GitHub copy (request the raw URL from the founder, or read via Claude Code if available). This check is non-negotiable; it is the load-bearing protection against acting on stale state.
3. **Log it.** If you are Chief of Staff, update `WORKSTREAM_STATUS.md` to reflect the handoff (sender's row updated with what shipped, receiver's row updated with what's next, any unblocks reflected in the relevant rows). If you are a workstream, update your local status notes.
4. **Acknowledge in chat with the founder, not by counter-handoff.** Short reply: what you logged, what you're doing next, any clarifying questions.
5. **Carry the open backlog items forward.** Items in §3.7 with you as Owner are now yours. Add them to your queue or to the relevant backlog file (`CODE_BACKLOG.md`, `COMMANDS_BACKLOG.md`, etc.) within the same session.
6. **If the Recommendation conflicts with your read of the situation, push back.** The sender owns their domain expertise; you own yours. Disagreement gets resolved in chat with the founder, not silently overridden.

---

## 6. Delivery — paste vs. save

A handoff is delivered one of two ways. The format is identical; only the channel differs.

### 6.1 Pasted into chat (default)

Use when:
- The receiver is the next session of the same agent, or another agent currently in chat.
- The handoff is read once, immediately, and acted on.
- No audit-trail value (the next session of the same role does not need a permanent record of what the prior session decided — the canonical files carry that).

How:
- Copy the full markdown handoff.
- Paste into the new chat as the opening message.
- No file save, no folder, no sync wait.

This is the most common case for session-to-session handoffs within the same workstream and for cross-workstream handoffs delivered to a chat that is already open.

### 6.2 Saved as a `.md` file (exception)

Use when:
- The handoff carries audit-trail value (will be re-read weeks or months later).
- The receiver is an agent not currently in chat (need to leave a message for a future session that has not yet been opened).
- The founder explicitly wants a permanent record.
- A canonical file's change log alone does not capture enough context to reconstruct the decision later.

How:
- **Filename:** `YYYY-MM-DD_[sender]-to-[receiver]_[short-subject].md`. Example: `2026-05-01_brand-ambassador-to-chief-of-staff_brand-v6-ripple.md`. Lowercase, hyphens not underscores in the subject slug.
- **Save location:** vertical handoffs go to `JCVC / [Vertical] / [Workstream] / handoffs /`. Portfolio-level handoffs go to `JCVC / Agent OS / handoffs /`. Founder creates the `handoffs /` sub-folder the first time a workstream produces one.
- **Then deliver the same content to the receiver.** A saved file alone is not a handoff to an agent currently in chat — paste the markdown into the chat *as well as* saving it. The save is for posterity, not for delivery.

---

## 7. Examples

### 7.1 Decision-shipping handoff (Brand Ambassador → Chief of Staff)

```
# Brand Ambassador → Chief of Staff Handoff
**Date:** May 1, 2026
**Subject:** BRAND.md v6 ripple set complete
**Status:** Shipped

**Last thing done:** Codified the book-as-credibility-anchor decision into BRAND.md §5 and rippled it through five downstream files.
**Next thing to do:** Engage the next workstream per §Recommendation; log this handoff in WORKSTREAM_STATUS.md.

## Decision

Book is the credibility anchor for StrongPath. Authors are not. Author names appear only as the small-type credit line on the homepage book section, the Brief 10 book page, and inside the book cover image. Nowhere else.

Two framings codified in BRAND.md §5:
- **Platform-as-second-edition.** Book (2018) and platform (2026) are the same intellectual project in the form the medium calls for.
- **Founder relay.** Public language is "legacy": Bartlit and Droullard entrusted Jeff with carrying the path forward. Lives on the About page only.

## Canonical state at handoff

| File | Current version | Last touched | Notes |
|---|---|---|---|
| AGENT_RULES.md | May 1, 2026 | session 6 (latest) | Agent-to-Agent Communication Rule 6 added |
| HANDOFF_FORMAT.md | v1.1 | session 6 (late) | unchanged this session |
| ACTIVE_VERTICALS.md | Apr 22, 2026 | session 3 | unchanged this session |
| BEST_PRACTICES.md | Apr 20, 2026 | session 3 | unchanged this session |
| BRAND.md | v6 | session 6 | updated this session: §5 book-as-anchor decision |
| PERSONAS.md | v4 | session 6 | updated this session: author references removed |
| brand-references.md | v2 | session 6 | updated this session |
| CONTENT_PLAN.md | v3 | session 6 | updated this session |
| PUBLISHING_PLAN.md | v2 | session 6 | updated this session |

## Decision dependencies

*None — canonical files reflect all current decisions.*

## Files updated

| File | Version |
|---|---|
| BRAND.md | v6 |
| PERSONAS.md | v4 |
| brand-references.md | v2 |
| CONTENT_PLAN.md | v3 |
| PUBLISHING_PLAN.md | v2 |

## Open backlog items

- `keyword-universe.md` §9 still references author bio pages. **Owner:** SEO Strategist. **When:** next pass.

## Unblocks

- **Content Writer:** Briefs 1–10 v6-clean. Brief 10 next. Brief 7 needs eunoia review before publish.
- **SEO, Paid Media, Email, Community:** brand foundation stable, safe to engage.

## Recommendation

Engage SEO Strategist next; keyword universe blocks Content Writer Briefs 11+ and isn't blocked on anything itself. Schedule Brief 7 eunoia review before Week 3.
```

Delivery for this example: paste into the next Chief of Staff chat as the opening message. No file save needed — the canonical files (`BRAND.md`, `PERSONAS.md`, etc.) are the audit trail.

### 7.2 Session-to-session handoff (Chief of Staff session N → session N+1)

Same eight-section structure. The Canonical state at handoff section in §3.4 carries the same load: every Tier 1 file with current version, plus any Tier 2/3 files the next session will read.

Delivery: paste into the next Chief of Staff chat as the opening message. This is the most common handoff in the portfolio.

### 7.3 Build-shipping and review-requesting handoffs

Same structure. The Canonical state section reflects what is true on `main` at handoff-write time; the Files updated section shows what this session's work changed. Both are required.

---

## 8. Change log

| Date | Change | Session |
|---|---|---|
| May 1, 2026 | Initial version (v1.0). Authored after Brand Ambassador BRAND.md v6 handoff demonstrated the de facto template; founder approved formalizing it as a Tier 1 portfolio standard. | Chief of Staff session 6 (early) |
| May 1, 2026 (later) | v1.1. Reframed from "format of handoff *files*" to "format of handoff *messages*." The handoff is a markdown payload first; whether it lands in chat or in a file is a separate delivery question. New §2 (Format vs. delivery) sets up the distinction. New §5 (Delivery — paste vs. save) replaces what was implicit file-default behavior in v1.0. Default delivery is now paste-into-chat; file save is the exception. Authoring rules in §4 reworked to drop file-centric framing and emphasize the markdown-payload framing. Inheritance from `AGENT_RULES.md` §Agent-to-Agent Communication and §Handoffs made explicit in §1. New example §7.2 added for session-to-session handoffs (the most common case). Prompted by founder pushback in session 6 that the prior file-first framing created friction (OneDrive sync lag, redundant artifacts) without a corresponding benefit, and that markdown is the right medium for agent-to-agent communication regardless of whether it gets saved. | Chief of Staff session 6 (late) |
| May 4, 2026 | Migrated to GitHub canonical at `JPCWooJ/strongpath/agent-os/portfolio/HANDOFF_FORMAT.md`. Added Distribution block. Drive copy at `JCVC / Agent-OS / HANDOFF_FORMAT.md` (file ID `11cF0pLrod4wcE5mb8apShm_8kprzSU2J`) is now superseded. Content otherwise unchanged from v1.1. Prompted by Chief of Staff (Portfolio Architecture) Session 17 sync audit, which found this Tier 1 file was Drive-only and never migrated during the May 4 GitHub-canonical cleanup. | Chief of Staff (Portfolio Architecture) session 17 |
| May 5, 2026 | v1.2. Added §3.4 Canonical state at handoff — required cumulative-state table the receiver checks against its `/mnt/project/` cache before any work. Added §3.5 Decision dependencies — short section for in-flight decisions not yet reflected in canonical files. Renumbered Files updated, Open backlog items, Unblocks, and Recommendation accordingly. Updated §4 Authoring rules to require eight sections, not seven. Added §4 Rule 8: fill §3.4 from `main`, not from cache. Updated §5 Receiving rules with new Rule 2: cross-check §3.4 against the local cache before any work. Updated §7.1 example to show §3.4 in use. Renumbered §5 Delivery to §6, §6 Receiving to §5 (receiving rules logically precede delivery details). Prompted by Chief of Staff session 18, where the receiving CoS read a session-17 handoff that named only that session's deltas, defaulted to `/mnt/project/` cache, drafted a `WORKSTREAM_STATUS.md` update against a multi-session-stale cache, and produced a PR that would have overwritten current Flag 8 with a different one. Root cause: handoff format had no requirement to surface cumulative state, and no requirement on the receiver to verify cache freshness. This rule closes the gap. | Chief of Staff session 18 |

---

*This file is portfolio Tier 1. It applies to every vertical, every workstream, every agent. Updates require Chief of Staff authorship and founder approval, same as any Tier 1 file.*
