# Architecture Decision Log

Significant technical decisions for the StrongPath repo. Each entry records what was decided, why, and what alternatives were considered. New entries go at the top.

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
