# DISAGREEMENTS.md

**JCVC Portfolio — Disagreement Log**
Status: Legacy portfolio reference. Not active StrongPath governance.
Authority: `docs/governance/` wins for StrongPath.
Owner: Chief of Staff (this file maintained portfolio-wide).
Last updated: May 2, 2026

---

## Distribution

This file is retained for portfolio context only. It does not define StrongPath execution rules.

---

## 1. Purpose

This file is the first-class artifact for capturing disagreements between agents (or between an agent and the founder) that result in a decision. It exists because at scale, the agent-reviewing-agent pattern is the load-bearing mechanism that makes platform decisions trustworthy — and at n=2 today, it is producing high-signal pushback. At n=20, the same pattern can quietly degrade into consensus-by-majority unless disagreements are captured as a first-class artifact, not just resolutions.

The pattern: when one agent reviews another's work and pushes back, both positions are logged here, the resolution is named, and the decider is named. This makes disagreement legible across sessions and provides the audit trail for *why* decisions were made — not just *what* was decided.

## 2. Format

Each entry has a single shape:

```
## Entry [N] — [short-noun-phrase]

**Date:** [ISO date]
**Question:** [one-line framing of the disagreement]
**Sender:** [who raised the question or made the original call]
**Reviewer:** [who pushed back]

**Position A — [sender's position]:** [one paragraph]

**Position B — [reviewer's position]:** [one paragraph]

**Resolution:** [what was decided]
**Decided by:** [Jeff / agent name / both]
**Why this resolution:** [one or two sentences naming the deciding factor]
**Lesson, if any:** [optional — what propagates forward]
```

Authoring rules:
1. **Both positions get full air time.** The losing position is captured fairly, not strawmanned. If the loser later turns out to be right, this file is the audit trail that lets the platform reverse the call.
2. **Decisions older than six months without revisit get a status review.** Time changes circumstances; some old decisions become wrong without anyone noticing.
3. **Self-disagreements count.** When an agent catches its own mistake (e.g. tool not verified before declaring constraint), log it. The principle is the same: the *disagreement* is the artifact.
4. **No retroactive editing of resolutions.** If a decision is overturned, log a new entry referencing the old one. Never rewrite history.

## 3. Entries

### Entry 1 — Refresh-before-acting violation (Camp FO CoS self-correction)

**Date:** May 2, 2026
**Question:** Should an agent verify tool availability before declaring a capability constraint?
**Sender:** Camp FO Chief of Staff (made the original call: "OneDrive is read-only, GitHub MCP isn't available, Google Drive is legacy and unavailable")
**Reviewer:** Jeff Camp (caught the third claim; pointed at his actual Google Drive)

**Position A — Camp FO CoS original:** Earlier in the toolkit audit (Session 1), Google Drive was labeled "(legacy)" in handoff notes. Treated this as deprecated and skipped verification. When the OneDrive write question came up, surveyed only the Microsoft 365 MCP and the GitHub registry, declared both lacking, and pushed Jeff toward a 15-minute GitHub PAT setup as the only courier-elimination path.

**Position B — Jeff's correction:** Google Drive was a working substrate the entire time. The MCP was loaded, the tools (`create_file`, `list_recent_files`, `read_file_content`, `copy_file`) were available, and the Drive itself contained a fully-built March-era `Claude-AI-Founder /` operating system that aligned conceptually with the JCVC architecture being designed. Verification would have surfaced this in 30 seconds.

**Resolution:** The agent's confidence about tool unavailability does not substitute for verification. Refresh-before-acting (locked as principle #6 the same session) is non-negotiable for tool/capability claims. Verification is cheap; the cost of a wrong constraint claim is recommending unnecessary user work.

**Decided by:** Jeff (caught the error); Camp FO CoS (acknowledged and logged).

**Why this resolution:** Two violations of Refresh-before-acting in the same session — one against OneDrive write capability ("likely achievable today") and one against Google Drive availability ("legacy") — both stemming from the same root cause: trusting prior context as current. Naming the principle and immediately violating it would have rendered the principle empty. Logging it here forces the lesson to propagate.

**Lesson:** When an agent's response is about to include a phrase like "X is not available" or "Y is read-only," that sentence is a verification gate. Run the relevant tool call first. If it returns the expected error, the claim is verified. If it doesn't, the claim was wrong. This applies to all tool capabilities, all storage write paths, all MCP servers, all connector states.

---

## 4. Change log

| Date | Change | Session |
|---|---|---|
| May 2, 2026 | Initial version. File pattern established. First entry: Refresh-before-acting violation logged as self-correction. | Camp FO Chief of Staff Session 2 |
| May 4, 2026 | Migrated from Drive into the repo as a portfolio reference. | Chief of Staff (Portfolio Architecture) session 17 |

---

*This file is a legacy portfolio reference. For StrongPath, `docs/governance/` is authoritative.*
