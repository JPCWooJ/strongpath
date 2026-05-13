# verification.md

**Claude Code rule file. Loaded at the start of every session on the `strongpath` repo.**

Enforces the difference between "I wrote the code" and "the code works." Every session ends with work that has been verified, or with an honest flag that it couldn't be verified. Nothing ships on "should work" or "probably fine."

This file is a Claude Code enforcement aid. Active StrongPath governance lives in `docs/governance/`.

---

## 1. Plan mode is the default

For any task beyond a trivial edit — anything touching more than one file, anything that creates a file, anything that installs a dependency, anything that changes a route or API contract — use plan mode.

Plan mode means: produce a written plan before execution. The plan lists (a) every file to create or modify, (b) every dependency to install, (c) the expected commit sequence, (d) the acceptance criteria from the backlog item, (e) any open questions or ambiguities the founder needs to resolve before work starts.

Present the plan to the founder. Wait for approval. Then execute.

**Why:** The founder is a sophisticated non-coder. The plan is how the founder exercises judgment over what gets built. Skipping plan mode removes the founder from the decision loop and turns Claude Code into an unreviewed agent — which is not the operating model.

**Trivial edit exception:** fixing an obvious typo in a comment, updating a single string constant the founder explicitly named, reverting a single commit the founder asked to revert. If it's genuinely one line and the intent is unambiguous, plan mode is unnecessary. When in doubt, use plan mode.

---

## 2. Challenge your own plan

After writing a plan and before presenting it, ask: **"What would make this wrong?"**

- What assumption am I making about the existing code that I haven't verified?
- What edge case am I not handling?
- What does the acceptance criterion actually say, and does my plan actually meet it — or does it meet a close-but-different version I invented?
- What's the simplest thing that could go wrong, and am I guarding against it?

If this pass surfaces a real risk, update the plan before presenting it. Don't ship a plan you already suspect has a flaw.

---

## 3. The verification gates

Before declaring a task complete, run every check that applies to what changed:

```bash
npm run typecheck     # TypeScript must pass — no `any` workarounds to silence errors
npm run lint          # ESLint must pass — no disabled rules to pass lint
npm test              # Tests must pass when applicable
```

These are gates, not suggestions. A task with a typecheck error is not done. A task that passes typecheck only because `// @ts-ignore` was added to hide the error is not done — it's worse than not done, because it hides the problem in the commit history.

---

## 4. Specific verifications by task type

Different kinds of work need different proofs. Match the verification to the task:

- **UI changes.** Lighthouse scores on the changed page: Performance ≥85, SEO ≥95, Accessibility ≥90. Visual check on desktop (1440×900) and mobile (iPhone 14) viewport sizes.
- **Sanity / blog changes.** Create a test post in Sanity Studio; confirm it appears on the live blog within 60 seconds of save. "The code looks right" is not verification.
- **Klaviyo / email capture changes.** Submit a test email (`test+<timestamp>@example.com`); confirm it appears in the Klaviyo dashboard within 60 seconds with correct source metadata.
- **Amazon affiliate links.** `grep -rn "amazon.com"` to confirm every link carries `?tag=stron02-20`. Click one in the browser and confirm it resolves with the tag intact.
- **API routes.** Call the route with a test payload (curl or the dev server). Confirm the response is the expected shape. Confirm failures return useful error messages, not 500s.
- **Environment variables.** Confirm the new var is in `.env.local.example` with an empty value. Confirm `.env.local` is in `.gitignore`. Confirm the code reads via `process.env.VAR_NAME`, not hardcoded.

---

## 5. What "I can't verify" looks like

Sometimes a verification requires access or capability the session doesn't have: a credential, a dashboard login, a manual test in a real browser session, a production environment the session can't reach.

When that happens: **say so explicitly.** In the session summary, list every acceptance criterion that could not be verified from inside the repo, and what the founder needs to do to verify it.

Do not declare a task done on the strength of "the code should work." That's not a claim, it's a hope. The founder makes decisions based on what the session confirmed — and needs to know the difference between "I verified this" and "I wrote this and it compiled."

---

## 6. The done bar

A task is done when:

1. The code is written and committed on a feature branch.
2. Every acceptance criterion from the backlog item has been verified (or explicitly flagged as unverifiable, with instructions for the founder).
3. The PR is open against `main` with the acceptance criteria as a checklist.
4. Typecheck, lint, and tests pass.
5. The session summary states what was done, what was verified, what the founder still needs to verify manually, and any follow-ups that surfaced.

Anything short of that is in-progress, not done.
