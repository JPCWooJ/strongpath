# Architecture Decision Log

Significant technical decisions for the StrongPath repo. Each entry records what was decided, why, and what alternatives were considered. New entries go at the top.

---

## 2026-04-24 — Wire Anthropic Claude API (P0-01)

**Status:** Accepted
**Backlog item:** P0-01

**Decision:** Install `@anthropic-ai/sdk` and wire it through a single wrapper at `lib/ai.ts`. Model pinned to `claude-sonnet-4-20250514`. `ANTHROPIC_API_KEY` read from `process.env`. A dev-only verification route ships at `app/api/ai/test/route.ts`, guarded to return 404 in production; it will be removed or auth-protected before launch.

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
