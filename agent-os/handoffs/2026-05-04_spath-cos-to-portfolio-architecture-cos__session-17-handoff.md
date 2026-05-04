# Chief of Staff → Chief of Staff (Portfolio Architecture) Handoff

**Date:** May 4, 2026
**From:** Session 16 (StrongPath Chief of Staff — cleanup pass)
**To:** Session 17 (Chief of Staff — Portfolio Architecture, fresh chat)
**Subject:** Design the four-tier portfolio architecture before any further migration work

---

## RESPONSE RULES (follow every turn)

- Short and to the point. No inner monologue. No rehashing.
- Lead with the recommendation. One question at a time.
- Full artifact delivery, not diffs.
- If you catch yourself writing a 4th paragraph, stop and cut it.
- Do not re-explain the migration. Do not apologize for past sessions.
- Recommend, don't ask which approach.

---

## Why a new session

Session 16 finished the OneDrive→GitHub `.md` cleanup pass for StrongPath. Four files updated and delivered to `/mnt/user-data/outputs/`:

- `WORKSTREAM_STATUS.md` — added Distribution block, new Flag 8 logging the migration, change log entry
- `CODE_BACKLOG.md` — added Distribution block, §4.7 Done entry for PR #11, §5.2 Parked entry for non-`.md` asset cleanup decision
- `PROJECT_INSTRUCTIONS.md` — added Distribution block, rewrote §Canonical Workspace as GitHub tree, added new standing decision (GitHub-canonical supersedes April OneDrive-canonical), updated Tier 1 source path
- `AGENT_RULES.md` — added Distribution block, rewrote §File and Folder System for GitHub, rewrote §Cloud Storage Access Patterns (GitHub canonical for `.md`, Drive reserved for non-`.md`, OneDrive read-only legacy with `.md` deprecated)

Each carries a Distribution block at top; founder is committing via Claude Code and re-uploading to project folders.

The next step is **not** a Camp FO migration. The founder correctly named the failure pattern: we've spent two days building org-chart structures that no agent has been briefed on, the architecture across tiers and substrates isn't fully designed, and rolling out one more migration before the design is done compounds the problem. **Architecture first, document, then roll out, then migrate.**

This session's cleanup work doesn't need to be redone — it's correct under any architecture that keeps `.md` on GitHub. But it should be revisited at the end of the architecture session to confirm the file paths and Distribution block language match the final design.

---

## The full scope of what needs designing

### The four-tier model

The founder articulated four tiers. Get the definitions exactly right before designing where they live:

- **Tier 1 — Universal.** Files common to every domain, every vertical, every agent. Examples: `AGENT_RULES.md`, `ABOUT_ME.md`, `HANDOFF_FORMAT.md`. Currently 5 files in `JPCWooJ/strongpath/agent-os/portfolio/` (which is structurally wrong — they're not eCommerce-domain files, they're portfolio-universal).
- **Tier 2 — Domain.** Files common to every vertical within one domain. Two domains exist: **eCommerce** (StrongPath is the active vertical; future eComm verticals will follow) and **Family Office** (Camp Family Office is the active vertical). Examples for eComm: `STACK.md`, `BEST_PRACTICES.md`, `ACTIVE_VERTICALS.md`, `VERTICAL_TEMPLATE.md`. Family Office Tier 2 files exist or will exist with a different shape (different stack, different best practices, different success metrics).
- **Tier 3 — Vertical.** Files specific to one vertical. Examples for StrongPath: `BRAND.md`, `PERSONAS.md`, `CONTENT_PLAN.md`, `WORKSTREAM_STATUS.md`. For Camp Family Office: a parallel set with different content and possibly different file names.
- **Tier 4 — Agent.** Files specific to one agent within a vertical. Examples: Brand Ambassador's working notes, SEO Strategist's keyword universe, Investment Advisor's portfolio-tracking docs. Many of these may not be `.md` files — see substrate question below.

### Multi-domain reality

eCommerce + Family Office are live now. More domains will follow (founder used the phrase "new ones yet to be named"). Architecture must accommodate domain N+1 cleanly without restructuring.

### The substrate question — `.md` vs non-`.md`

This is the critical addition the founder raised before transitioning. **GitHub is canonical for `.md`. But many artifacts are not `.md`.** Examples:

- **Investment Advisor month-end report** — Word doc or Google Doc, produced monthly, consumed by founder + advisors + family members, lives forever, requires a stable findable location
- **Book manuscript** — `.docx`, lives on OneDrive, accessed by content team
- **Brand assets** — logos, photography, color swatches, design reference images
- **Spreadsheets** — financial models, metrics dashboards, content calendars in `.xlsx`
- **PDFs** — reports, archived legal documents, third-party research papers
- **Presentations** — `.pptx` for investor decks, family meetings
- **Images** — screenshots, mockups, photography

These artifacts:
- Don't belong in Git (no diff value, large binaries, native-app editing required)
- Need a stable, indexable, shareable home
- Need a naming convention so agents and humans can find them
- Need access control (Family Office docs aren't readable by StrongPath agents)
- Need to be referenced from `.md` files (e.g. `WORKSTREAM_STATUS.md` for Camp FO references the latest month-end report path)

**Substrate options to evaluate:**

1. **OneDrive only** — current state for legacy assets. Microsoft 365 MCP is read-only.
2. **Google Drive only** — Drive MCP has read+write. Verified working pattern in `AGENT_RULES.md`.
3. **OneDrive + Google Drive split** — by file type, by domain, or by some other rule.
4. **GitHub for some non-`.md`** — design references that travel with code, brand color swatches consumed by the build, etc.

Avoid duplication. The founder was explicit: "We don't want duplication."

### What this session needs to produce

**Primary artifact: `REPO_ARCHITECTURE.md`.** Full document covering:

1. **Four-tier definitions** with examples per tier across both domains
2. **Repo mapping** — which tier lives in which repo, exact paths, why
3. **Substrate map** — `.md` location rules, non-`.md` location rules, when each is used, naming conventions
4. **Cross-tier references** — how a Tier 3 file references a Tier 1 file, how a `.md` file references a `.docx` artifact
5. **Update workflow** — who authors at each tier, how PRs flow, how Claude.ai project folders stay in sync, how non-`.md` updates are tracked
6. **Version control** — Git for `.md` (PR/squash-merge to main); for non-`.md`, designate per-substrate convention (Drive version history? OneDrive? File naming?)
7. **Archiving** — what gets archived, where, when. Tension to resolve: Git history archives `.md` automatically, but non-`.md` archives need a designated location.
8. **Onboarding playbook** — exact steps when a new domain launches, when a new vertical launches inside an existing domain, when a new agent stands up inside a vertical
9. **Access control** — which agents read which tiers, which agents write to which tiers, cross-vertical isolation (StrongPath agents shouldn't see Camp FO finances)
10. **Migration map** — current state to target state, ordered, with dependencies

**Secondary artifact (later session): `REPO_SOP.md`.** Distilled operational playbook every agent reads. Don't draft this until `REPO_ARCHITECTURE.md` is approved.

### What this session does NOT produce

- Camp FO migration. That comes after architecture is approved and SOP is written.
- Other agent briefings. That comes after SOP exists.
- Updates to the four StrongPath files I just shipped — they're correct under any sane architecture and will only be revisited if the final architecture changes file paths.

---

## Open questions for this session to resolve

These came up at the end of session 16 and should be posed fresh in session 17 with full architectural context. Don't try to answer them in the handoff — let session 17 work them through with the founder.

1. **Tier-to-repo mapping.** Four candidates were sketched in session 16; the founder added the substrate dimension before deciding. Re-pose with all dimensions.
2. **Should Tier 1 universal files move out of `JPCWooJ/strongpath/agent-os/portfolio/`** (where they currently live) into a dedicated repo? Currently they're co-located with StrongPath because StrongPath was the first vertical and the migration was opportunistic.
3. **Tier 4 (agent-specific files).** Should these be in Git at all, or are they primarily working-context files that live in chat history + Drive/OneDrive?
4. **Non-`.md` substrate primary.** OneDrive (Microsoft 365 MCP, read-only) or Google Drive (Drive MCP, read+write)? Founder leans toward consolidation, not split. The MCP capability difference may decide it.
5. **Investment Advisor month-end report — concrete worked example.** Use this as the test case: where does it live, how is it named, how does Camp FO Chief of Staff find the latest one, how do prior months get archived, who has access.
6. **Cross-repo file references.** If Tier 1 lives in `JPCWooJ/agent-os` and Tier 3 lives in `JPCWooJ/strongpath`, how does a StrongPath agent's project folder stay in sync with both? Does the founder upload from two repos? Is there a sync script?

---

## Founder context for the session

He spent two days building org-chart structures across the portfolio. He's tired of incremental migrations that don't fit a coherent design. The Camp FO migration was the trigger that made this visible — moving Camp FO without designing the cross-domain architecture would have created a second one-off pattern instead of a system.

He wants:
- The architecture designed correctly, once.
- Documented in `REPO_ARCHITECTURE.md`.
- An SOP distilled from it.
- All agents briefed on the SOP.
- Then — and only then — Camp FO and any other migration follows the SOP.

Be useful. Be brief. Don't recap session 16's work; this handoff already does. Start with the design conversation. Pose the structural questions one at a time. Produce `REPO_ARCHITECTURE.md` as a full artifact when the design is settled.

---

## Files that exist at session 17 start

**On GitHub** (`JPCWooJ/strongpath/agent-os/`):

- `portfolio/` — `ABOUT_ME.md`, `ACTIVE_VERTICALS.md`, `AGENT_RULES.md` (v: May 4 cleanup), `BEST_PRACTICES.md`, `COMMANDS_BACKLOG.md`
- `strongpath/governance/` — `PROJECT_INSTRUCTIONS.md` (v: May 4), `WORKSTREAM_STATUS.md` (v: May 4), `STACK.md`, `METRICS.md`
- `strongpath/brand/` — `BRAND.md`, `PERSONAS.md`, `brand-references.md`
- `strongpath/seo/` — `CONTENT_PLAN.md`, `PUBLISHING_PLAN.md`, `PRODUCT_CONCEPTS_BACKLOG.md`
- `strongpath/operations/` — `CODE_BACKLOG.md` (v: May 4), `WORKSTREAM_CTO.md`

**Pending commit** (in `/mnt/user-data/outputs/` from session 16): the four updated files above (`WORKSTREAM_STATUS.md`, `CODE_BACKLOG.md`, `PROJECT_INSTRUCTIONS.md`, `AGENT_RULES.md`). Founder commits via Claude Code and re-uploads to project folders. Session 17 should confirm this happened in its first turn.

**On OneDrive (legacy non-`.md`):** book manuscript, design references, brand assets. Stay-vs-move decision parked in `CODE_BACKLOG.md` §5.2.

**Camp Family Office:** canonical files location not yet determined — that's part of session 17's design work.
