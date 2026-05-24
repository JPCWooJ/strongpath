# Architecture Decision Log

Significant technical decisions for the StrongPath repo. Each entry records what was decided, why, and what alternatives were considered. New entries go at the top.

---

## 2026-05-24 — npm audit posture after Anthropic SDK patch

**Status:** Accepted

**Decision:** Treat the remaining npm audit findings as monitored framework/CMS migration inputs, not automatic fix targets.

**Details:**
- `@anthropic-ai/sdk` vulnerability was resolved by patch upgrade to `0.98.0`.
- Remaining npm audit issues are primarily tied to Next, `eslint-config-next`, Sanity, and `next-sanity` dependency chains.
- Do not run `npm audit fix` automatically.
- Next/eslint remediation appears to require semver-major upgrade and must be handled as a planned migration, not a drive-by fix.
- Sanity/next-sanity remediation path is unclear/major and must be handled carefully because Sanity Studio and blog CMS wiring are production-relevant.
- Current posture: monitor and defer major framework/CMS upgrades until there is a scoped CTO-approved migration task.
- Safe patches may be applied individually when they do not change framework/CMS major versions and verification passes.

---

## 2026-04-25 — FTC disclosure enforcement: ESLint rule (P0-05)

**Status:** Accepted
**Backlog item:** P0-05

**Decision:** Enforce that any page importing `AmazonLink` also imports `FTCDisclosure` via a custom ESLint rule (`local-rules/amazon-link-requires-ftc-disclosure`) implemented with `eslint-plugin-local-rules` and defined in `eslint-local-rules.js`.

**Alternatives considered:**
- **Runtime dev-mode warning (React context):** Would require a shared context provider just to pass a boolean between sibling components. Adds runtime overhead, misses violations in headless test runs, and requires the developer to actively notice a console message.
- **Shared layout wrapper:** Forces `FTCDisclosure` onto all marketing pages, even those without Amazon links. Wrong approach — the disclosure is required only when affiliate links are present.

**Why ESLint rule:** Static analysis at lint time is the most reliable layer. `npm run lint` runs in CI and locally before commits; a violation blocks the PR rather than waiting for a manual console check. The rule is file-scoped: if `AmazonLink` is imported in a file, `FTCDisclosure` must also be imported in the same file. This is sufficient for Phase 1's flat page architecture (all Amazon links appear directly in page files).

**Known limitation:** The rule does not catch the case where `AmazonLink` is in a deeply nested child component and `FTCDisclosure` is imported in a parent page. If the architecture grows more complex, revisit with an AST-based approach or a runtime Context check layered on top.

**Implementation:** `eslint-plugin-local-rules` (dev-only, ~1 KB) + `eslint-local-rules.js` at repo root. No npm plugin publishing required.

---

## 2026-04-25 — Vercel env vars must be set via REST API, not PowerShell pipe

**Status:** Accepted (operational rule)
**Backlog item:** P0-04 (discovered during Klaviyo wiring)

**Decision:** All Vercel environment variable values must be written via the Vercel REST API using explicit UTF-8 no-BOM encoding (`[System.Text.UTF8Encoding]::new($false)`). Never use PowerShell `echo $value | npx vercel env add` or any PowerShell pipe to set env var values.

**Rationale:** PowerShell 5.1 on Windows prepends a UTF-16 BOM (U+FEFF, character value 65279) to strings when they pass through the pipeline. The Vercel CLI stores the BOM as part of the value. When the value is later used in an HTTP `Authorization` header, Node.js's `fetch()` throws `Cannot convert argument to a ByteString because the character at index N has a value of 65279 which is greater than 255` — because HTTP header values must be pure Latin-1 (≤ 255). The error only manifests in production (Vercel Functions); local dev reads from `.env.local` which was written directly without a pipe and has no BOM.

**How to set Vercel env vars safely:**
```powershell
$utf8NoBom = [System.Text.UTF8Encoding]::new($false)
$json = '{"key":"VAR_NAME","value":"value","type":"encrypted","target":["production","preview","development"]}'
Invoke-RestMethod -Uri "https://api.vercel.com/v10/projects/$projectId/env?teamId=$teamId" `
  -Method POST -Headers $hdrs -Body ($utf8NoBom.GetBytes($json))
```

**Verify after setting:** Decrypt and check `[int][char]$val[0]` — must not be 65279.

---

## 2026-04-24 — Wire Sanity CMS to blog pages (P0-02)

**Status:** Accepted
**Backlog item:** P0-02

**Decision:** Embed Sanity Studio inside the Next.js app at `/studio` (via `app/studio/[[...tool]]/page.tsx` using `next-sanity`'s `<NextStudio>` component) rather than running it as a separate app in a `/sanity` folder. GROQ query helpers (`postsQuery`, `postQuery`) and the Sanity client live in `lib/sanity.ts` following the BP-05 wrapper pattern. Blog routes live in `app/(marketing)/blog/`. `next-sanity` pinned to v9 — v12+ requires Next.js 16, which is outside the current stack.

**Rationale:** A single-repo, single-Vercel-deployment setup is simpler to maintain at this stage than a split repo. The embedded Studio approach (`<NextStudio>`) is the `next-sanity` v9 recommended pattern for Next.js 14 App Router. Sanity's own auth (Google/GitHub) gates Studio access, so no additional auth layer is needed in Phase 1 — revisit before launch. A bare layout at `app/studio/layout.tsx` prevents root layout CSS from conflicting with Studio's own styles.

**Alternatives considered:** Separate `/sanity` folder with `sanity dev`. Rejected because it requires a second process, complicates Vercel deployment, and adds no benefit at current scale.

---

## 2026-04-24 — Wire Anthropic Claude API (P0-01)

**Status:** Accepted
**Backlog item:** P0-01

**Decision:** Install `@anthropic-ai/sdk` and wire it through a single wrapper at `lib/ai.ts`. Model pinned to `claude-sonnet-4-5`. `ANTHROPIC_API_KEY` read from `process.env`. A dev-only verification route ships at `app/api/ai/test/route.ts`, guarded to return 404 in production; it will be removed or auth-protected before launch.

**Rationale:** Follows BP-05 wrapper pattern (stack-compliance.md §4). All Claude API calls go through `lib/ai.ts`; no route handler or component imports `@anthropic-ai/sdk` directly. This keeps vendor surface area in one file, makes key rotation and model upgrades a single-file change, and satisfies the stack-compliance rule that forbids direct SDK imports outside `lib/`. `generateText()` defaults to `max_tokens: 1024` (advisor shape per STACK.md §AI Layer). Content-generation calls, when added, will get a separate function with `max_tokens: 4096`.

**Alternatives considered:** None — Anthropic is the mandated AI provider (CLAUDE.md §3). The wrapper-per-file pattern is also mandated; no alternatives were evaluated.

---

## 2026-04-22 — Replace hackathon archive with fresh repo

**Status:** Accepted
**Backlog item:** P0-00

**Decision:** Archive the original `JPCWooJ/strongpath` hackathon build as `JPCWooJ/strongpath-hackathon-archive` (read-only) and start a new `JPCWooJ/strongpath` repo from scratch rather than migrating or refactoring the existing codebase.

**Rationale:** The hackathon build was built under time pressure with a different set of goals and constraints. It used the OpenAI SDK instead of Anthropic (a violation of the canonical stack), had no consistent architecture — API routes, components, and content were intermixed without the wrapper-library pattern required by `stack-compliance.md` — and contained hardcoded post content in `.tsx` files that should live in Sanity CMS. Attempting to migrate that codebase would mean inheriting its structural debt into every subsequent backlog item. Starting fresh from the canonical stack (`CLAUDE.md` §2) gives every downstream item — Sanity wiring, Supabase auth, Klaviyo email capture, Stripe payments — a clean, compliant foundation to build on. The archive remains available for reference if any specific logic from the hackathon build proves worth adapting.

**Alternatives considered:** Incremental refactor of the hackathon build. Rejected because the AI provider swap (OpenAI → Anthropic), the routing architecture change (Pages Router patterns → App Router), and the content strategy change (hardcoded → Sanity) would have touched nearly every file anyway — a fresh start is lower-risk than a surgical migration at this stage of the project.

---
