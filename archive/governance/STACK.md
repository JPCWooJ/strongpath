<!--
ARCHIVE WARNING
This file is archived, non-authoritative, and retained for historical reference only.
Do not use it as active governance unless the founder explicitly requests historical context.
-->

# STACK.md — Canonical Tech Stack

**Authority:** This document is the single source of truth for all technology decisions across all verticals.  
**Rule:** Deviating from this stack requires a written justification added to `decisions.md` in that vertical's `/docs/` folder.  
**Last updated:** April 22, 2026

---

## The Canonical Stack

| Layer | Tool | Version | Why |
|-------|------|---------|-----|
| **Framework** | Next.js (App Router) | 14.x | SSR/SSG for SEO, file-based routing, API routes built in |
| **Language** | TypeScript | 5.x | Type safety catches AI-generated bugs before runtime |
| **Styling** | Tailwind CSS | 3.x | Utility-first, consistent, no CSS conflicts |
| **Deployment** | Vercel | Latest | Zero-config, built-in analytics, edge functions, free tier generous |
| **Auth + Database** | Supabase | 2.x | Postgres + auth + storage + realtime under one free tier |
| **CMS** | Sanity | 3.x | Structured content, real-time, excellent Next.js integration |
| **AI** | Anthropic Claude API | claude-sonnet-4-20250514 | Quality, safety, native tool use, health claim nuance |
| **Email — Transactional** | Resend | Latest | Simple API, reliable delivery, affordable |
| **Email — Marketing** | Klaviyo | Latest | Behavioral flows, highest eCommerce ROI tool available |
| **Error Tracking** | Sentry | Latest | Industry standard, Next.js SDK built in |
| **Analytics — Traffic** | Google Analytics 4 | Latest | Standard, free, required for SEO feedback loop |
| **Analytics — Product** | Vercel Analytics | Built-in | Core Web Vitals, real-time, zero config |
| **Analytics — Behavior** | PostHog | Latest | Session replay, funnels, feature flags (add month 2) |
| **Payments** | Stripe | Latest | Universal, excellent docs, webhook handling straightforward |
| **Affiliate Revenue** | Amazon Associates | N/A | Zero-inventory Day 1 revenue. Tag format: `brandname-20` |
| **Uptime Monitoring** | UptimeRobot | Free tier | Alerts within 5 min of downtime |
| **CI/CD** | GitHub Actions + Lighthouse CI | Latest | SEO ≥95, Performance ≥85, Accessibility ≥90 enforced on every PR |
| **Feature Flags** | `lib/feature-flags.ts` (custom) | N/A | Toggle features in production without deploys |

---

## MCP Infrastructure — Agent Toolchain

MCP (Model Context Protocol) servers give AI agents direct access to external tools and services. This section defines the canonical MCP configuration for the portfolio. The agent-first operating model depends on these connections — without them, every deployment, commit, and error investigation requires a human in the loop.

**Two environments, different roles:**
- **Claude Code** — where coding, deployment, and infrastructure work happens. Development MCP servers live here.
- **Claude.ai** — where strategy, planning, content, and project management happen. Productivity MCP servers live here.

### Claude Code MCP Servers

These are configured in `~/.claude.json` and available to Claude Code in any project directory.

| Server | Status | Type | What It Enables |
|--------|--------|------|-----------------|
| **GitHub** | ✅ Connected | stdio (npm) | Commit code, create branches, manage PRs across all portfolio repos |
| **Context7** | ✅ Connected | stdio (npm) | Injects current library docs (Next.js, Supabase, Sanity, Stripe) into agent context — prevents hallucinated APIs |
| **Sentry** | ⚠️ Auth on first use | HTTP remote | Error monitoring, stack trace analysis, issue resolution |
| **Vercel** | 🔵 Parked | — | Connection failed April 2026; using Vercel dashboard + CLI. Revisit when `@vercel/mcp` stabilizes |
| **Supabase** | 🔴 Not yet added | — | Database inspection, schema verification, auth debugging. Add when starting P0 fixes |

**Installation commands (for reference when setting up a new machine):**
```bash
# Context7 — no credentials needed
claude mcp add context7 -- npx -y @upstash/context7-mcp@latest

# GitHub — requires Personal Access Token (Fine-grained, all repos, Contents/PRs/Issues R+W)
claude mcp add github -e GITHUB_PERSONAL_ACCESS_TOKEN=<token> -- npx -y @modelcontextprotocol/server-github

# Sentry — authenticates via browser on first use
claude mcp add sentry -t http https://mcp.sentry.dev/mcp

# Vercel — PARKED. Last attempted: npx -y @vercel/mcp@latest (failed on Windows)
# Supabase — TODO: claude mcp add supabase -e <credentials> -- npx -y @supabase/mcp
```

### Claude.ai MCP Servers (Connectors)

These are configured in Claude.ai Settings → Connectors and available in all Claude.ai conversations.

| Server | Status | What It Enables |
|--------|--------|-----------------|
| **Tavily** | ✅ Connected | AI-native web search, content research, competitor analysis |
| **Google Drive** | ✅ Connected | Access strategy docs, market research, shared files |
| **Gmail** | ⚠️ Needs auth | Email management (re-authenticate when needed) |
| **Google Calendar** | ⚠️ Needs auth | Scheduling (re-authenticate when needed) |
| **Microsoft 365** | ✅ Connected | SharePoint, Outlook, Teams integration |
| **Netlify** | ✅ Connected | Available but not primary — we deploy on Vercel |
| **Claude in Chrome** | ✅ Connected | Browser automation for testing CTAs, links, mobile layouts |

### MCP Gaps — Tools Without MCP Coverage

These tools in the canonical stack have no MCP server available. Agents cannot operate them autonomously — a human must use the dashboard.

| Tool | Gap Impact | Workaround | Resolution Path |
|------|-----------|------------|-----------------|
| **Sanity CMS** | Cannot create/update content via agent | Use Sanity Studio manually | Evaluate building custom MCP with fastmcp |
| **Klaviyo** | Cannot set up email flows or verify list growth via agent | Use Klaviyo dashboard manually | Monitor for official MCP release |
| **Google Analytics 4** | Cannot pull traffic data via agent | Use GA4 dashboard manually | Monitor for official MCP release |

**Rule:** When an MCP server does not exist for a tool in the canonical stack, document the gap in this table and evaluate building one with [fastmcp](https://github.com/jlowin/fastmcp). Gaps represent places where the agent-first model breaks down and human intervention is required.

---

## AI Layer — Critical Detail

**Always use Anthropic, never default to OpenAI.**

```typescript
// CORRECT
import Anthropic from '@anthropic-ai/sdk';
const client = new Anthropic(); // reads ANTHROPIC_API_KEY from env

// WRONG — do not use
import OpenAI from 'openai';
```

Model to use: `claude-sonnet-4-20250514`  
Max tokens: 1024 for advisor/chat, 4096 for content generation  
Always include a vertical-specific system prompt. See `BEST_PRACTICES.md` BP-05 for the template.

---

## Standard package.json Dependencies

```json
{
  "dependencies": {
    "@anthropic-ai/sdk": "latest",
    "@sanity/client": "latest",
    "@sanity/image-url": "latest",
    "@sentry/nextjs": "latest",
    "@supabase/supabase-js": "latest",
    "@vercel/analytics": "latest",
    "next": "14.x",
    "react": "^18",
    "react-dom": "^18",
    "resend": "latest",
    "sanity": "latest",
    "stripe": "latest"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10",
    "postcss": "^8",
    "tailwindcss": "^3",
    "typescript": "^5"
  }
}
```

---

## Standard .env.example

Copy this exactly for every new vertical. Replace values, never change key names.

```bash
# ── Supabase ────────────────────────────────────────
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# ── Anthropic AI (NOT OpenAI) ───────────────────────
ANTHROPIC_API_KEY=

# ── Sanity CMS ──────────────────────────────────────
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

# ── Email: Transactional ────────────────────────────
RESEND_API_KEY=

# ── Email: Marketing ────────────────────────────────
KLAVIYO_API_KEY=

# ── Analytics ───────────────────────────────────────
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# ── Error Tracking ──────────────────────────────────
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_ORG=
SENTRY_PROJECT=
SENTRY_AUTH_TOKEN=

# ── Payments ────────────────────────────────────────
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# ── Amazon Associates ───────────────────────────────
AMAZON_ASSOCIATES_TAG=                # Format: brandname-20

# ── Feature Flags ───────────────────────────────────
NEXT_PUBLIC_ENABLE_AI_ADVISOR=true
NEXT_PUBLIC_ENABLE_COMMUNITY=false
NEXT_PUBLIC_ENABLE_APP=false
```

---

## Canonical Folder Structure

```
/[vertical-name]/
├── app/                          # Next.js App Router
│   ├── (marketing)/              # Public-facing routes (no auth)
│   │   ├── page.tsx              # Homepage
│   │   ├── about/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx          # Blog index — fetches from Sanity
│   │   │   └── [slug]/page.tsx   # Individual post — fetches from Sanity
│   │   ├── shop/page.tsx
│   │   └── programs/page.tsx
│   ├── (app)/                    # Authenticated routes
│   │   ├── dashboard/page.tsx
│   │   ├── advisor/page.tsx      # AI advisor chat
│   │   └── program/page.tsx
│   └── api/                      # API routes
│       ├── ai/route.ts           # Claude API proxy
│       ├── email/route.ts        # Resend/Klaviyo
│       └── webhooks/
│           ├── stripe/route.ts
│           └── klaviyo/route.ts
├── components/
│   ├── ui/                       # Reusable primitives
│   ├── marketing/                # Homepage sections, pricing cards
│   └── app/                      # App-specific components
├── lib/
│   ├── supabase.ts               # Supabase client + typed helpers
│   ├── sanity.ts                 # Sanity client + GROQ queries
│   ├── ai.ts                     # Claude API wrapper
│   ├── email.ts                  # Resend + Klaviyo abstractions
│   ├── stripe.ts                 # Stripe helpers
│   ├── analytics.ts              # GA4 + PostHog event tracking
│   └── feature-flags.ts          # Feature toggle logic
├── content/                      # Sanity schema definitions
│   └── schemas/
│       ├── post.ts               # Blog post schema
│       └── product.ts            # Product/program schema
├── docs/                         # Strategy and decisions for THIS vertical
│   ├── market-analysis.md
│   ├── gtm-strategy.md
│   └── decisions.md              # Stack deviation justifications
└── public/
    ├── images/
    └── og/                       # Open Graph images per page
```

---

## What Is NOT in the Stack

These tools were evaluated and rejected. Do not introduce them without revisiting the decision log.

| Tool | Rejected For | Use Instead |
|------|-------------|-------------|
| OpenAI / GPT | Lower quality for health/wellness nuance, no default safety framing | Anthropic Claude |
| WordPress | No TypeScript, poor performance, plugin sprawl | Next.js + Sanity |
| Shopify headless | Adds complexity and cost before scale justifies it | Stripe + custom |
| Firebase | Postgres (Supabase) is superior for relational data | Supabase |
| SendGrid | Klaviyo does marketing email better; Resend does transactional better | Resend + Klaviyo |
| Webflow | No code control, hard to add AI features | Next.js |
| Bubble/no-code | Cannot support custom AI integrations at required depth | Next.js |
| Asana | Connected but unused for StrongPath task tracking; adds tool-surface noise without workflow integration | Removed Apr 22, 2026. No replacement — StrongPath workstreams coordinate via Claude.ai chats and OneDrive files. Re-evaluate if a task-management need emerges at Phase 2. |

---

## Change Log

| Date | Change |
|---|---|
| April 2026 | Initial version. |
| April 22, 2026 | Removed Asana from Claude.ai MCP Servers (Connectors) table. Added Asana to "What Is NOT in the Stack" table with rationale. Connected-but-unused per Chief of Staff audit; disconnected to reduce tool-surface noise. |

---

*Update this file when a stack decision changes. Add a row to the rejection table when a tool is evaluated and not chosen.*
