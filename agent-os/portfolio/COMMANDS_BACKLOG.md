# COMMANDS_BACKLOG.md

**StrongPath — Slash Commands and Reusable Prompts Backlog**
Maintained by Chief of Staff • April 21, 2026
Status: Legacy operational backlog, not active StrongPath governance.
Authority: `docs/governance/` wins on conflict. Use `CODEX_EXECUTION_STANDARD.md` and `.claude/commands/` for active implementation-command behavior.
Owner: Chief of Staff / CTO coordination.

---

## Purpose

Holding pen for repeated workflows that may become slash commands in `.claude/commands/*.md` or reusable prompt templates.

This file is a backlog, not a roadmap. Items here are candidates. Flag 6 will determine which get built first.

**When items here get activated.** Flag 6 will select the highest-leverage items to author as actual slash commands or prompt templates. Activation criteria: (a) the workflow is repeated enough times to save meaningful tokens/time, (b) the workflow is stable enough that codifying it won't cause drift, (c) the output quality is consistent enough that a template captures the pattern.

**Scope tag on every entry.** Each entry is tagged `[portfolio]` or `[vertical]`:

- **`[portfolio]`** — the workflow generalizes across every eCommerce vertical in the portfolio. The entry itself (shape, trigger, workflow description) transfers to vertical #2 with only light editing. Example: `/lighthouse` runs against `BP-10` thresholds, which are portfolio-wide.
- **`[vertical]`** — the workflow is specific to StrongPath — it depends on StrongPath's personas, brand vocabulary, authority asset, or other StrongPath-unique context. The entry does not transfer to vertical #2 without substantive rewriting. Example: the Eunoia test is a StrongPath concept; the persona-voice check uses Margaret/David/Chen.

The tags are historical planning aids, not active governance or a required future split.

**What this file is not.** A commitment to build every item. A complete list — new items arrive as they emerge from workstream sessions.

---

## How to use this file

- Entries are captured in the order they surface. Order is not priority.
- Each entry includes: the workflow, the trigger context, the target environment (Claude Code vs. Claude.ai), and a confidence tag on whether it should be built.
- When an entry is activated into a real slash command or prompt template, note the activation date and location.

---

## 1. Claude Code candidates *(slash commands in `strongpath/.claude/commands/`)*

Commands for the `strongpath` repo. Live at `strongpath/.claude/commands/<name>.md` and invoke from any Claude Code session with `/<name>`.

### Entry CC-1 `[portfolio]` — `/lighthouse` — run Lighthouse CI and report scores inline

**Trigger context:** Before any PR merge. After any substantial UI change.
**Workflow:** Run the Lighthouse CI script. Parse the output. Report Performance / SEO / Accessibility / Best Practices scores. If any score is below the `BP-10` thresholds (Performance ≥85, SEO ≥95, Accessibility ≥90), surface the specific failing audits.
**Why it's a command:** Run 50+ times in Phase 1 — every PR, every article publish, every homepage tweak.
**Confidence:** **High.** Clear, repeated, checkable workflow.

### Entry CC-2 `[vertical]` — `/brand-check` — validate repo strings against BRAND.md

**Trigger context:** After editing any UI component with user-facing copy. Before a PR that touches strings.
**Workflow:** Scan modified `.ts`, `.tsx`, `.md` files for the forbidden-word list in `BRAND.md` §3.3 ("miracle," "reverses" outside italicized book titles, "transform," "breakthrough," etc.). Surface hits. Require the founder to confirm or fix before proceeding.
**Why it's a command:** Every UI change risks introducing off-brand copy. A 2-second grep replaces a manual review.
**Confidence:** **High.** Brand discipline enforced at the code layer.

### Entry CC-3 `[portfolio]` — `/affiliate-tag-audit` — verify every Amazon link uses the correct Associate tag

**Trigger context:** Before any deploy. As part of the pre-launch checklist (`BP-13`).
**Workflow:** `grep -rn "amazon.com" .` across the repo. Confirm every match includes `?tag=<vertical-associate-tag>` or `&tag=<vertical-associate-tag>`. Report any miss. For StrongPath, the tag is `stron02-20` (per `BRAND.md` v4 §11). For future verticals, the tag value is set in the vertical's BRAND or stack documentation.
**Why it's a command:** FTC risk if tags are wrong, lost revenue if tags are missing. Worth a command that runs in 1 second.
**Confidence:** **High.** Closes a compliance gap cheaply.

### Entry CC-4 `[portfolio]` — `/disclaimer-check` — verify medical disclaimer and FTC affiliate disclosure on health pages

**Trigger context:** After creating or editing any page in `app/(marketing)/blog/`, `app/(marketing)/shop/`, or `app/(marketing)/programs/`.
**Workflow:** Confirm the `BP-04` medical disclaimer is present on health content pages. Confirm the FTC affiliate disclosure is above the fold (not in footer) on any page with affiliate links. Report misses.
**Why it's a command:** Compliance scales poorly without automation. Manual review misses edge cases.
**Confidence:** **High.** Pairs with `/affiliate-tag-audit` as a pre-deploy compliance suite.

### Entry CC-5 `[portfolio]` — `/sanity-test-post` — verify Sanity→blog pipeline end-to-end

**Trigger context:** After wiring Sanity (P0-02 from `CODE_BACKLOG.md`). Then on any change to the blog pages or Sanity schema.
**Workflow:** Create a test post in Sanity Studio with a known title. Fetch the post via GROQ. Render the blog page. Confirm the post appears. Delete the test post.
**Why it's a command:** The CMS-to-page pipeline is the most common silent failure mode. A 30-second command is cheap insurance.
**Confidence:** **Calibrated.** High value after wiring; mild complexity to author. Build after P0-02 ships, not before.

### Entry CC-6 `[portfolio]` — `/pre-launch` — run the full BP-13 pre-launch checklist

**Trigger context:** Before Day 1 (first article publish). Before any subsequent material launch (paid media start, programs launch, membership launch).
**Workflow:** Orchestrator command that runs `/lighthouse`, `/brand-check`, `/affiliate-tag-audit`, `/disclaimer-check`, `/sanity-test-post`, plus navigation / link / analytics / uptime checks per `BP-13`. Reports a pass/fail per item and summarizes.
**Why it's a command:** `BP-13` is a 20-item checklist. Running it manually takes 45+ minutes; automated runs in 2.
**Confidence:** **High.** Build only after CC-1 through CC-5 exist — composable orchestrator pattern.

---

## 2. Claude.ai candidates *(reusable prompt templates)*

Prompts for workstream chats (Brand Ambassador, SEO Strategist, Content Writer, etc.). These don't have a Claude.ai native "slash command" equivalent — they live as template files that the founder copy-pastes into the relevant chat to invoke. Storage location TBD: either per-workstream OneDrive sub-folders, or a central `PROMPT_LIBRARY.md` at `StrongPath/`.

### Entry CA-1 `[portfolio]` — Article brand review

**Target chat:** Brand Ambassador.
**Trigger context:** Every article draft produced by Content Writer. Run before founder review.
**Workflow:** The prompt loads `BRAND.md` v4 §3, §5, §9, §10 as context. Pastes the draft. Returns a structured review: voice check / tone check / authority check / positioning check / legal check / visual check — per the `BRAND.md` §10 rubric.
**Why it's a template:** Run 12+ times in Phase 1 (once per article, minimum). The rubric is stable. The review quality is higher when the full rubric runs every time vs. being paraphrased each session.
**Confidence:** **High.**

### Entry CA-2 `[vertical]` — Eunoia test for David-facing copy

**Target chat:** Brand Ambassador.
**Trigger context:** Any David-facing copy — Brief 7, Brief 4, Brief 8, any email in the David segment, any ad creative for the caregiver persona.
**Workflow:** The prompt loads `PERSONAS.md` §Persona 2 (David) and `BRAND.md` §4.2 tone guidance. Pastes the copy. Returns: does this read as goodwill-leading, or does it read as fear-leading? Specific sentences flagged. Suggested rewrites for anything that fails.
**Why it's a template:** Per `PERSONAS.md` standing decision, every David-facing asset runs through this test. Hand-writing the prompt each time risks inconsistency.
**Confidence:** **High.**

### Entry CA-3 `[portfolio]` — FTC/FDA claim review at the sentence level

**Target chat:** Any workstream producing health-adjacent copy (Content Writer, Email Marketer, Paid Media Buyer).
**Trigger context:** Every draft of an article, email, or ad that makes any claim touching sarcopenia, muscle loss, strength outcomes, aging, or recovery.
**Workflow:** The prompt loads the `ftc-fda-claim-review` skill as context. Pastes the draft. Returns sentence-level review: red-flag verbs flagged, hedge hierarchy applied, book/product firewall checked, disclaimers verified. Returns rewrites for any failures.
**Why it's a template:** `ftc-fda-claim-review` is already a skill, but invoking it consistently across workstreams requires a standardized prompt. This template wraps the skill invocation.
**Confidence:** **High.**

### Entry CA-4 `[portfolio]` — Weekly metrics review

**Target chat:** SEO Strategist (Phase 1) → Analytics & Growth (once stood up).
**Trigger context:** Monday morning, every week, starting Week 1.
**Workflow:** The prompt loads `METRICS.md` §3 (dashboard specifications) and §4 (review cadence). Prompts the chat to run the 45-60 minute review: scorecard, this week's publish, what changed / what didn't. Output is a new entry appended to `METRICS.md` §7 running log.
**Why it's a template:** Per `METRICS.md` standing decision, the review happens every week for 13 weeks. 13 runs of a standardized review, same shape every time.
**Confidence:** **High.**

### Entry CA-5 `[portfolio]` — Canonical file authorship kickoff

**Target chat:** Any workstream producing or updating a canonical `.md` file.
**Trigger context:** Any time a canonical file needs a material update (new section, policy change, rule revision).
**Workflow:** The prompt loads `AGENT_RULES.md` §Canonical File Authorship and §File Reference Convention. States the proposed change. Produces the full replacement file per the rule (never diffs, never snippets). Includes a change log entry. Flags the save locations (OneDrive + Claude.ai project folder).
**Why it's a template:** This file's propagation discipline is exactly the governance gap Flag 4 will address. A template enforces the right shape every time.
**Confidence:** **High.**

### Entry CA-6 `[portfolio]` — Article SEO brief expansion

**Target chat:** SEO Strategist.
**Trigger context:** When a new brief needs to be added to `CONTENT_PLAN.md` beyond the initial 10.
**Workflow:** The prompt loads `CONTENT_PLAN.md`'s brief structure (a 13-section pattern per brief) and `keyword-universe.md`. Pastes the target cluster or keyword. Returns a fully-formed brief matching the existing structure.
**Why it's a template:** Each brief is ~1,000 words of structured output. The shape is stable; the content varies. Template locks in the shape.
**Confidence:** **Calibrated.** High value once Phase 1 expands beyond 10 articles; lower value until then.

### Entry CA-7 `[vertical]` — Persona-voice check

**Target chat:** Brand Ambassador or Content Writer.
**Trigger context:** Any asset where the founder or another workstream suspects the voice has drifted from persona-verbatim language.
**Workflow:** The prompt loads `PERSONAS.md` and `BRAND.md` §4. Pastes the asset. Returns: does this use the persona's actual vocabulary from the "Their Words, Not Ours" section? Specific phrases highlighted. Suggested rewrites that push toward verbatim persona language.
**Why it's a template:** Voice drift is the most common failure mode in content production. A standardized check catches it early.
**Confidence:** **Calibrated.** Useful when it's useful; not routine enough to run on every draft.

---

## 3. Future exploration — not yet prioritized

Items that surface as possible commands but need more evidence before committing.

- **`/skill-audit`** — verify skills are being triggered correctly. Per Thariq's guidance: measure skill usage with a PreToolUse hook to find under-triggering skills.
- **Subagent pattern for draft review** — one Claude drafts, a second Claude reviews in fresh context. Per Boris Cherny's "test-time compute" guidance. Revisit when founder review throughput becomes a bottleneck.
- **`/compliance-suite`** — composable command that chains `/brand-check`, `/disclaimer-check`, `/affiliate-tag-audit`, and the Eunoia test into a single pre-publish gate. Probably the right shape once the individual pieces exist.
- **Automated weekly changelog** — a scheduled command (Boris Cherny's `/loop`) that reads GSC, GA4, Klaviyo, Amazon Associates, and appends a structured entry to `METRICS.md` §7. Requires MCP coverage that doesn't yet exist (GA4, Klaviyo). Revisit when those MCP servers ship.

---

## 4. Activation Log

When an entry is activated into a real slash command or prompt template, record the date and where the active work lives.

| Entry | Activated | Decision | Active location |
|---|---|---|---|
| — | — | *No entries activated yet. Flag 6 will select the first batch.* | — |

---

## 5. Change log

| Date | Change | Session |
|---|---|---|
| April 21, 2026 | Initial version. Seeded with 6 Claude Code slash command candidates and 7 Claude.ai prompt template candidates. Activation deferred to Flag 6. | Chief of Staff session 1 (Flag 1) |
| April 21, 2026 (later) | Added `[portfolio]` / `[vertical]` scope tags to every entry. 10 entries tagged `[portfolio]` and 3 entries tagged `[vertical]`. Tags are historical planning aids only. | Chief of Staff session 1 (Flag 1 addendum) |

---

*This file is a holding pen. Entries here do not compete with Phase 1 execution. When Flag 6 begins, this file becomes active — its highest-confidence entries get authored first.*
