# Architecture Decision Log

Significant technical decisions for the StrongPath repo. Each entry records what was decided, why, and what alternatives were considered. New entries go at the top.

---

## 2026-04-22 — Replace hackathon archive with fresh repo

**Status:** Accepted
**Backlog item:** P0-00

**Decision:** Archive the original `JPCWooJ/strongpath` hackathon build as `JPCWooJ/strongpath-hackathon-archive` (read-only) and start a new `JPCWooJ/strongpath` repo from scratch rather than migrating or refactoring the existing codebase.

**Rationale:** The hackathon build was built under time pressure with a different set of goals and constraints. It used the OpenAI SDK instead of Anthropic (a violation of the canonical stack), had no consistent architecture — API routes, components, and content were intermixed without the wrapper-library pattern required by `stack-compliance.md` — and contained hardcoded post content in `.tsx` files that should live in Sanity CMS. Attempting to migrate that codebase would mean inheriting its structural debt into every subsequent backlog item. Starting fresh from the canonical stack (`CLAUDE.md` §2) gives every downstream item — Sanity wiring, Supabase auth, Klaviyo email capture, Stripe payments — a clean, compliant foundation to build on. The archive remains available for reference if any specific logic from the hackathon build proves worth adapting.

**Alternatives considered:** Incremental refactor of the hackathon build. Rejected because the AI provider swap (OpenAI → Anthropic), the routing architecture change (Pages Router patterns → App Router), and the content strategy change (hardcoded → Sanity) would have touched nearly every file anyway — a fresh start is lower-risk than a surgical migration at this stage of the project.

---
