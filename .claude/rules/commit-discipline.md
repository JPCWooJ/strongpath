# commit-discipline.md

**Claude Code rule file. Loaded at the start of every session on the `strongpath` repo.**

Enforces branching, commit cadence, and secrets hygiene. Violations of these rules produce the kinds of problems that are expensive to undo: secrets in git history, broken `main`, Vercel deploying untested code, lost work because commits were too large to bisect.

---

## 1. Branching

`main` is the production branch and the default branch on GitHub. Vercel auto-deploys from `main`. Every push to `main` goes live.

**Never commit directly to `main`.** Not for "tiny" fixes. Not for "just a typo." Not ever.

All work happens on short-lived feature branches:

- `feature/<short-description>` for new capability — e.g., `feature/klaviyo-wiring`.
- `fix/<short-description>` for bug fixes — e.g., `fix/homepage-mobile-layout`.
- `chore/<short-description>` for non-functional changes — e.g., `chore/update-deps`.

Keep branch names short, lowercase, hyphenated. No slashes beyond the single prefix slash.

**Branch lifecycle:**
1. Branch from `main` at the start of work: `git checkout main && git pull && git checkout -b feature/<name>`.
2. Commit often as work progresses (see §2).
3. Push and open a PR to `main` when the acceptance criteria are met.
4. After the founder reviews and merges, delete the branch locally and on GitHub.

Branches are short-lived. If a branch is more than a week old, something is wrong — either the scope is too big (split it) or the work stalled (close the PR and start over).

---

## 2. Commit frequency

Commit at least once per logical unit of work. A logical unit is: one file created, one bug fixed, one feature function added, one test passing. Not "the whole session's work at the end."

Frequent commits give the founder:
- A readable history that explains *why* a change happened, not just *what* changed.
- The ability to revert a single bad commit without losing the rest of the session's work.
- Clear diffs the founder can skim during PR review.

**Bad:** One commit titled "implemented klaviyo wiring" with 11 files changed.
**Good:** Six commits — "add Klaviyo client to lib/email.ts," "add POST /api/subscribe route," "wire footer form to API route," "add source metadata to submissions," "add error handling for failed submissions," "add .env.local.example entry for KLAVIYO_API_KEY."

Commit messages: imperative mood, lowercase, under 72 characters for the subject line. Body optional but helpful when the *why* isn't obvious from the diff.

---

## 3. Secrets hygiene

The number one rule: **no secrets in git, ever.**

A secret is any API key, access token, service credential, database connection string with embedded password, OAuth client secret, webhook signing secret, or anything else that would let a third party impersonate the project or access data they shouldn't.

**Before every commit that touches environment configuration:**

1. Run `git status` and read every file listed. If any `.env*` file other than `.env.local.example` is listed, stop.
2. Confirm `.env`, `.env.local`, `.env.production`, `.env.development` are all in `.gitignore`. The `.env.local.example` file (empty values, committed) is the only env file that belongs in git.
3. If a real key ever gets committed — even in a branch, even unmerged — it is compromised. Rotate the key immediately and tell the founder. Do not try to "clean it from history" as a substitute for rotation.

**In code:** secrets are read via `process.env.VARIABLE_NAME`, never hardcoded, never in comments, never in test fixtures.

**In chat:** never paste a real key into a Claude Code session or any chat. Placeholder values only (`sk-ant-xxx`, `klaviyo_xxx`).

---

## 4. PR hygiene

Every PR to `main`:

- Targets `main`, not another feature branch.
- Has a title that reads like a change log entry — "add Klaviyo wiring to email capture forms," not "WIP" or "updates."
- Has a description that references the `CODE_BACKLOG.md` item it implements (e.g., "Implements P0-04").
- Has the acceptance criteria from the backlog item copy-pasted into the PR description as a checklist, with each item checked.
- Passes all CI checks (typecheck, lint, tests, Lighthouse if configured) before merge.
- Deletes the feature branch after merge.

Small PRs merge faster and have fewer bugs. A PR touching 20+ files is usually two PRs pretending to be one.

---

## 5. What to do when you break `main`

It happens. When it does:

1. Stop. Do not push more changes to "fix it forward."
2. Tell the founder immediately.
3. If a revert PR is the right move, open one. A revert is a valid PR.
4. Root-cause afterward, not during. The goal in the moment is a working `main`, not understanding why it broke.

Broken `main` means Vercel is deploying broken code to production. Every minute `main` is broken is a minute the site may be broken for users. Treat it with corresponding urgency.
