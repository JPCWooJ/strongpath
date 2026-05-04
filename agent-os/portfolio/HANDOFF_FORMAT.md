# HANDOFF_FORMAT.md

**JCVC Portfolio — Handoff Message Format**
Version: 1.1
Last updated: May 1, 2026
Authority: Tier 1 (portfolio). Inherited by every JCVC vertical, every workstream, every agent.
Owner: Chief of Staff (originating workstream when authoring a handoff; this file maintained by Chief of Staff).

---

## Distribution

**Canonical home:** `JPCWooJ/strongpath` repo, `agent-os/portfolio/HANDOFF_FORMAT.md` (GitHub, public).

**After commit to `main`:** Founder must refresh every Claude.ai project folder that includes this file by re-uploading from the GitHub copy. The `/mnt/project/` cache is the previous version until that re-upload happens.

**OneDrive `.md` copies are deprecated and stale.** Do not read from OneDrive for any `.md` file.

**Drive copy at `JCVC / Agent-OS / HANDOFF_FORMAT.md` (file ID `11cF0pLrod4wcE5mb8apShm_8kprzSU2J`) is now superseded by this GitHub canonical.** The Drive copy should be deleted or marked deprecated after this migration is committed.

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

**Exception: saved as a `.md` file.** When (a) the handoff carries audit-trail value (will be re-read weeks or months later), (b) the receiver is an agent not currently in chat (need to leave a message for a future session), or (c) the founder explicitly wants a permanent record. See §5 for save conventions.

The format is identical in both cases. The same six sections, the same ordering, the same empty-state strings. Format is the unit; delivery is downstream.

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

- `[Sending Workstream]` is the workstream that authored the work. `[Receiving Workstream]` is the primary recipient. If the handoff goes to multiple recipients, the primary owner of the next action is named here; secondary recipients go in §3.6 Unblocks.
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

### 3.4 Files updated

A markdown table listing every canonical file changed by this body of work. Two columns:

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

### 3.5 Open backlog items

Items the body of work surfaced but did not resolve. The recipient or another workstream owns each one.

Format as a bulleted list. Each item names the owner explicitly:

```
- `keyword-universe.md` §9 still references author bio pages. **Owner:** SEO Strategist. **When:** next pass.
- Vercel build failing intermittently on `/studio` route. **Owner:** CTO. **When:** before Brief 1 publish.
```

- Use `**Owner:**` and `**When:**` exactly. The bold-italic pair is the contract — recipients grep for it.
- If there are no open items, write `*None.*` rather than omitting the section.

### 3.6 Unblocks

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

### 3.7 Recommendation

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

1. **Author in markdown.** The handoff is a markdown payload. Whether it gets pasted into chat or saved as a `.md` file is a delivery question (see §5).

2. **No prose padding.** No "I hope this is helpful," no "let me know if you have questions," no recap of what the sending workstream is. Every line earns its place.

3. **One handoff = one body of work.** If a workstream has shipped two unrelated things, author two handoffs. Bundling makes both harder to act on.

4. **No section omitted, no section reordered.** All seven structural sections (header, Last/Next pair, Decision, Files updated, Open backlog items, Unblocks, Recommendation) appear in every handoff. Sections that have nothing to report use the explicit empty-state strings defined above (`*None.*`, `*No canonical files updated.*`, etc.) rather than being deleted.

5. **Cite versions, not "the latest."** "BRAND.md v6" is permanent and audit-ready. "the latest BRAND.md" rots the moment someone bumps the version.

6. **Length follows from the work, not a cap.** A handoff is as long as the work requires and no longer. The structure prevents bloat — every section either contains substance or contains its empty-state string. Do not pad to look thorough; do not truncate to look terse.

7. **The sender authors the handoff. The receiver acknowledges.** Receiver's acknowledgment is a normal short markdown reply: what was logged, what's next, any clarifying questions. Receiver does not author a counter-handoff unless they themselves are shipping work back.

---

## 5. Delivery — paste vs. save

A handoff is delivered one of two ways. The format is identical; only the channel differs.

### 5.1 Pasted into chat (default)

Use when:
- The receiver is the next session of the same agent, or another agent currently in chat.
- The handoff is read once, immediately, and acted on.
- No audit-trail value (the next session of the same role does not need a permanent record of what the prior session decided — the canonical files carry that).

How:
- Copy the full markdown handoff.
- Paste into the new chat as the opening message.
- No file save, no folder, no sync wait.

This is the most common case for session-to-session handoffs within the same workstream and for cross-workstream handoffs delivered to a chat that is already open.

### 5.2 Saved as a `.md` file (exception)

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

## 6. Receiving rules

When an agent receives a handoff:

1. **Read all sections in order.** Do not skim to Recommendation.
2. **Log it.** If you are Chief of Staff, update `WORKSTREAM_STATUS.md` to reflect the handoff (sender's row updated with what shipped, receiver's row updated with what's next, any unblocks reflected in the relevant rows). If you are a workstream, update your local status notes.
3. **Acknowledge in chat with the founder, not by counter-handoff.** Short reply: what you logged, what you're doing next, any clarifying questions.
4. **Carry the open backlog items forward.** Items in §3.5 with you as Owner are now yours. Add them to your queue or to the relevant backlog file (`CODE_BACKLOG.md`, `COMMANDS_BACKLOG.md`, etc.) within the same session.
5. **If the Recommendation conflicts with your read of the situation, push back.** The sender owns their domain expertise; you own yours. Disagreement gets resolved in chat with the founder, not silently overridden.

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

```
# Chief of Staff → Chief of Staff Handoff
**Date:** [date]
**Subject:** Session [N] close — [short summary]
**Status:** Shipped

**Last thing done:** [substantive output from the closing session]
**Next thing to do:** [first action the next session takes]

## Decision

[dense summary of decisions made, problems solved, files shipped this session]

## Files updated

| File | Version |
|---|---|
| [files modified this session] | [version] |

## Open backlog items

[anything surfaced but not resolved, with owner and when]

## Unblocks

[which workstreams are now free to act, on what]

## Recommendation

[sender's call on what the next session does first]
```

Delivery: paste into the next Chief of Staff chat as the opening message. This is the most common handoff in the portfolio.

### 7.3 Build-shipping handoff (CTO → Chief of Staff, after first sprint)

```
# CTO → Chief of Staff Handoff
**Date:** [date]
**Subject:** First sprint (CC-1 to CC-4) shipped
**Status:** Shipped

**Last thing done:** CC-1 through CC-4 merged to main; trust gate criteria from WORKSTREAM_CTO.md §3.3 met.
**Next thing to do:** Approve GitHub MCP scoping; update CODE_BACKLOG.md to reflect shipped sprint.

## Decision

[architectural calls, what shipped, what was deferred]

## Files updated

| File | Version |
|---|---|
| CODE_BACKLOG.md | [date] |
| strongpath/CLAUDE.md | v1.1 |

## Open backlog items

- [items the sprint surfaced]

## Unblocks

- **Email Marketer:** Klaviyo flows can now be designed against working email capture.
- **Content Writer:** Brief 1 publishing pipeline confirmed working end-to-end.

## Recommendation

[sender's call on what's next]
```

Delivery: paste into the next Chief of Staff chat. May also save as a `.md` file if the trust gate clearance is a moment worth recording in the audit trail.

### 7.4 Review-requesting handoff (Content Writer → Brand Ambassador)

```
# Content Writer → Brand Ambassador Handoff
**Date:** [date]
**Subject:** Brief 7 draft, eunoia review requested
**Status:** Awaiting Review

**Last thing done:** Brief 7 draft complete; meets BRAND.md v6 voice rules and FTC compliance per ftc-fda-claim-review skill.
**Next thing to do:** Brand Ambassador eunoia review per BRAND.md §[X]; return with edits or sign-off.

## Decision

[what the article is, who it's for, what's at stake on review]

## Files updated

| File | Version |
|---|---|
| brief-7-[slug].md | v1 (new, draft) |

## Open backlog items

*None.*

## Unblocks

*Awaiting review; nothing unblocked yet.*

## Recommendation

Eunoia review focus: [specific framings the writer wants checked]. Sign-off allows Week 3 publish per PUBLISHING_PLAN.md.
```

Delivery: paste into the Brand Ambassador chat. The Brief 7 draft itself is a separate artifact and is delivered alongside (chat attachment or canonical file location).

---

## 8. Change log

| Date | Change | Session |
|---|---|---|
| May 1, 2026 | Initial version (v1.0). Authored after Brand Ambassador BRAND.md v6 handoff demonstrated the de facto template; founder approved formalizing it as a Tier 1 portfolio standard. | Chief of Staff session 6 (early) |
| May 1, 2026 (later) | v1.1. Reframed from "format of handoff *files*" to "format of handoff *messages*." The handoff is a markdown payload first; whether it lands in chat or in a file is a separate delivery question. New §2 (Format vs. delivery) sets up the distinction. New §5 (Delivery — paste vs. save) replaces what was implicit file-default behavior in v1.0. Default delivery is now paste-into-chat; file save is the exception. Authoring rules in §4 reworked to drop file-centric framing and emphasize the markdown-payload framing. Inheritance from `AGENT_RULES.md` §Agent-to-Agent Communication and §Handoffs made explicit in §1. New example §7.2 added for session-to-session handoffs (the most common case). Prompted by founder pushback in session 6 that the prior file-first framing created friction (OneDrive sync lag, redundant artifacts) without a corresponding benefit, and that markdown is the right medium for agent-to-agent communication regardless of whether it gets saved. | Chief of Staff session 6 (late) |
| May 4, 2026 | Migrated to GitHub canonical at `JPCWooJ/strongpath/agent-os/portfolio/HANDOFF_FORMAT.md`. Added Distribution block. Drive copy at `JCVC / Agent-OS / HANDOFF_FORMAT.md` (file ID `11cF0pLrod4wcE5mb8apShm_8kprzSU2J`) is now superseded. Content otherwise unchanged from v1.1. Prompted by Chief of Staff (Portfolio Architecture) Session 17 sync audit, which found this Tier 1 file was Drive-only and never migrated during the May 4 GitHub-canonical cleanup. | Chief of Staff (Portfolio Architecture) session 17 |

---

*This file is portfolio Tier 1. It applies to every vertical, every workstream, every agent. Updates require Chief of Staff authorship and founder approval, same as any Tier 1 file.*
