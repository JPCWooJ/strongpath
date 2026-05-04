# BEST_PRACTICES.md — AI Agent eCommerce Playbook

**Version:** 1.3  
**Origin:** Derived from StrongPath build — comparison of Grok (hackathon build) vs. Claude (strategic build)  
**Purpose:** Operational rules for every AI agent building any vertical in this portfolio  
**Last updated:** April 21, 2026

---

## How to Read This Document

Every best practice is tagged:
- 🔁 **Universal** — applies to every vertical without exception
- ⚙️ **Health/Wellness** — applies to health, fitness, supplement, or medical-adjacent verticals
- 🎯 **StrongPath-specific** — noted for context, does not generalize

Read the Universal practices first. Then read the category-specific ones for your vertical type.

---

## BP-01: The Canonical Stack is Fixed 🔁

Do not reinvent the technology stack. See `STACK.md` for the complete, authoritative list. Every vertical uses the same foundation. Consistency across verticals is what enables one operator to run dozens of sites.

**The one decision that matters most:** Use **Anthropic Claude API**, not OpenAI. This is not a preference — it is a platform decision. Claude's reasoning quality, health claim sensitivity, and native tool-use architecture are materially better for this use case. The AI advisor is a core product feature, not a chatbot bolted on.

---

## BP-02: Revenue Streams — Launch in This Order 🔁

Deploy revenue streams in this sequence. Do not skip ahead. Earlier stages fund later ones and validate demand before adding complexity.

```
Stage 1 — Day 1:      Amazon affiliate links
Stage 2 — Day 1:      Email list capture (this IS the business)
Stage 3 — Week 2-4:   Digital products (ebook, PDF guide, workbook)
Stage 4 — Month 2:    Membership / subscription
Stage 5 — Month 3+:   Online courses (high AOV, high production cost)
Stage 6 — Month 4+:   Physical products or supplements
```

**Why this order matters:** Physical products introduce COGS, inventory, fulfillment, and regulatory complexity. A vertical that goes straight to supplements before proving digital product-market fit will consume all operational capacity before achieving profitability.

**The email list is the most valuable asset at every stage.** A list of 50,000 engaged subscribers for a health vertical is worth more than 50,000 monthly visitors. Capture email on every page. The quiz is the primary capture mechanism.

---

## BP-03: The Conversion Funnel — Build This Exactly 🔁

Every vertical implements this funnel in order. Do not launch without it.

```
1. TRAFFIC        → SEO articles, paid ads, social, PR
        ↓
2. FREE TOOL      → Quiz, calculator, risk assessment, or self-test
        ↓
3. EMAIL GATE     → Capture email BEFORE showing quiz results
        ↓
4. RESULT         → Personalized score + specific product/program recommendation
        ↓
5. LEAD MAGNET    → Free PDF guide, ebook, or cheat sheet delivered by email
        ↓
6. NURTURE        → 7-email automated sequence (days 1, 2, 3, 5, 7, 10, 14)
        ↓
7. OFFER          → First paid product (digital, lowest price point)
        ↓
8. UPSELL         → Higher tier, bundle, or membership
```

**The quiz is the pivot point of the entire funnel.** A quiz with fewer than 5 questions and no email gate before results is a broken funnel. Requirements:
- 5-7 questions minimum
- Email capture screen between last question and results
- Results are AI-personalized based on answers (not static)
- Each result maps to a specific product or program in the catalog
- Results page includes a soft CTA, not a hard sell

---

## BP-04: Content Strategy — SEO Before Paid Traffic 🔁

Do not spend money on paid acquisition until organic content is in place. SEO content requirements before any paid traffic campaigns:

**Minimum viable content for launch:**
- 10 long-form articles, 1,500 words minimum each
- Each article targets one specific search query (e.g., "how to prevent sarcopenia", "best protein for muscle loss over 60")
- All articles in Sanity CMS — never hardcoded in page components
- Each article must have: unique meta title, meta description under 160 chars, OG image, at least 2 internal links, one CTA to the free quiz
- Publish cadence: 2 articles per week in months 1-3

**Content that works for health/wellness verticals (⚙️):**
- "What is [condition]?" — high volume, builds awareness
- "Best [treatment/exercise/supplement] for [condition]" — commercial intent
- "[Condition] in [demographic]" — targets the exact audience
- "How to [achieve outcome] after [age]" — aspiration-based, high conversion
- "Signs you might have [condition]" — self-diagnosis, drives quiz completions

**Every health article requires this disclaimer (⚙️):**
> *This content is for informational and educational purposes only. It does not constitute medical advice and is not a substitute for professional medical consultation. Always consult your physician before beginning any new exercise or supplement program.*

---

## BP-05: AI Feature Implementation 🔁

The AI advisor is a core product feature, not optional. It must be live at launch. A site without the AI advisor is missing its primary differentiation from static content sites.

**Minimum AI features for Phase 1:**
1. **Product/Program Advisor** — conversational interface that recommends programs or products based on user goals and current situation
2. **Quiz result personalization** — AI generates a unique summary paragraph based on each user's specific quiz answers
3. **Content Q&A** — users can ask questions about the article they are reading

**Claude API wrapper — use this pattern in `lib/ai.ts`:**

```typescript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

export async function getAdvisorResponse(
  userMessage: string,
  history: Array<{ role: 'user' | 'assistant'; content: string }>,
  systemPrompt: string
): Promise<string> {
  const response = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    system: systemPrompt,
    messages: [...history, { role: 'user', content: userMessage }],
  });

  return response.content[0].type === 'text'
    ? response.content[0].text
    : '';
}
```

**System prompt template for health/wellness verticals (⚙️) — fill in brackets:**

```
You are a knowledgeable wellness coach for [Brand Name], specializing in [condition/topic].
Your role is to help users understand [condition] and find the right program or products for their situation.

COMPLIANCE RULES — NEVER VIOLATE:
- You are a wellness educator, not a medical professional
- Never diagnose any condition or disease
- Never recommend stopping or changing prescription medications
- Never make claims that a product treats, cures, or prevents any disease
- Always recommend consulting a physician for medical concerns
- Use "may help," "research suggests," "some studies show" — never absolute claims

YOUR PERSONALITY:
- Warm, encouraging, and evidence-based
- Direct and specific — give real recommendations, not vague suggestions
- Acknowledge the user's situation before giving advice

OUR PROGRAMS:
[List each program with name, price, duration, and 1-sentence description]

OUR RECOMMENDED PRODUCTS:
[List each affiliate product with name, price, and why it's recommended]

When recommending products, be honest about the evidence. Acknowledge what research
shows and what it does not show. Users trust us because we are truthful.
```

---

## BP-06: Author and Founder Credibility — Surface It Prominently 🔁

For any vertical built on a book, existing brand, or expert founder, **credibility is the primary competitive moat.** It must appear above the fold or within the first scroll. This was the single biggest gap in the StrongPath Grok build — the #1 bestselling book and credentialed authors were invisible.

**Required credibility elements on every homepage:**
- Book cover image with a direct Amazon buy link (if a book exists)
- Author photo(s) — real, professional, not stock
- Specific credentials — degrees, titles, institutions — not vague descriptions like "our team of experts"
- At least one media mention with logo (even a local publication counts at launch)
- One specific, quantified testimonial ("I gained 6 lbs of muscle in 4 months" not "this changed my life")

**Credibility hierarchy — use what you have, in this order:**
1. Published book (especially Amazon bestseller rank)
2. Academic credentials (PhD, MD, RD, DPT)
3. Institutional affiliation (Harvard, Mayo Clinic, etc.)
4. Media coverage (WSJ, Forbes, major podcast appearances)
5. Research citations (peer-reviewed journals)
6. Community size (only use real numbers)

---

## BP-07: Social Proof Integrity — Never Fabricate Metrics 🔁

Displaying false member counts or testimonials is both an ethical issue and an FTC legal risk. It also backfires — users who click into a "community" of 10,000 members and find nothing lose trust permanently.

**Instead of fabricated scale, use:**
- **Process credibility:** "Programs designed with licensed physical therapists"
- **Research credibility:** "Based on protocols from 40+ peer-reviewed studies"  
- **Authority credibility:** "By the authors of the #1 Amazon bestselling book"
- **Aspirational framing:** "Built for adults who refuse to accept this as inevitable"
- **Early community framing:** "Join founding members" or "Be among the first"

Once real numbers exist, display them. Until then, credibility comes from expertise and evidence, not scale.

---

## BP-08: CMS Must Be Wired Before Launch 🔁

This mistake was made in the StrongPath Grok build: Sanity was configured as a dependency but the blog pages served hardcoded content, not Sanity content. This means a non-technical operator cannot update the site, and the CMS investment was wasted.

**Rule:** Blog pages must fetch from Sanity using GROQ queries. No blog content is ever hardcoded in a `.tsx` file.

**Standard GROQ query for blog index (`lib/sanity.ts`):**

```typescript
export const postsQuery = groq`
  *[_type == "post"] | order(date desc) {
    title,
    slug,
    description,
    date,
    author,
    category,
    keywords
  }
`;

export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    slug,
    description,
    date,
    author,
    category,
    keywords,
    content
  }
`;
```

**Verify CMS connection before launch:** Create one test post in Sanity Studio, confirm it appears on the live blog page. Do not declare the blog "done" until this is verified end-to-end.

---

## BP-09: No Broken CTAs at Launch 🔁

Every button and link on the site must resolve to a functional destination. A loading spinner, 404 page, or blank screen at a CTA destroys conversion and trust.

**Pre-launch link audit — check every CTA:**
- Hero buttons → functional page or section
- Nav links → functional pages
- "Open App" / "Launch App" → either a working app or a "coming soon" page with email capture
- "Join Community" → either a working community or a waitlist page
- Amazon product links → live Amazon listings with correct Associate tag
- Email subscribe forms → confirmation that Klaviyo/Resend receives the submission

**If a feature isn't ready:** Replace the CTA with a waitlist capture. "Join the waitlist" with an email form is always better than a broken link. It captures demand and builds the list simultaneously.

---

## BP-10: Observability from Day One 🔁

Wire all monitoring before the first user arrives. Discovering problems from user complaints is always worse than discovering them from your own monitoring.

**Required on every vertical at launch:**

| Tool | What to Verify |
|------|---------------|
| Sentry | Trigger a deliberate error in dev, confirm it appears in Sentry dashboard |
| GA4 | Load the homepage, confirm a page_view event appears in GA4 Real-Time |
| Vercel Analytics | Check Vercel dashboard after first deploy |
| UptimeRobot | Set up monitor on root domain, confirm email alert works |
| Lighthouse CI | Run on main branch, confirm scores meet thresholds |

**Lighthouse thresholds (enforced in CI):**
- Performance: ≥ 85
- SEO: ≥ 95  
- Accessibility: ≥ 90
- Best Practices: ≥ 90

---

## BP-11: MCP Tools — Agent Infrastructure 🔁

MCP (Model Context Protocol) servers give AI agents direct access to external tools and services. The agent-first operating model depends on these connections. Without them, every deployment, commit, and error investigation requires a human in the loop.

**Two environments serve different roles:**
- **Claude Code** — coding, deployment, infrastructure. Development MCP servers live here.
- **Claude.ai** — strategy, planning, content, project management. Productivity MCP servers live here.

See `STACK.md` → "MCP Infrastructure" section for the complete server inventory, connection status, installation commands, and gap analysis.

**Rules for MCP management:**
1. Every tool in the canonical stack should have a corresponding MCP server. If one doesn't exist, document the gap in `STACK.md`.
2. When an MCP server does not exist for a required tool, evaluate building a custom one with [fastmcp](https://github.com/jlowin/fastmcp).
3. When setting up a new development machine, run the installation commands from `STACK.md` before starting any vertical work.
4. MCP credentials (API tokens, access keys) should never be shared in chat or committed to repos. Use environment variables and secure storage.
5. Verify MCP connections with `claude mcp list` before starting a build session.

**Agent-first principle:** If a task requires a human to open a browser or terminal, that is a gap in the MCP toolchain. Document it and find a tool that closes the gap.

---

## BP-12: Document Version Control 🔁

Project files are the operating system for AI agents. They must always be current, unambiguous, and findable.

**Working files use simple names.** The current, authoritative version of any project file is always named simply: `STACK.md`, `BEST_PRACTICES.md`, `ACTIVE_VERTICALS.md`. No dates, no version numbers in the filename. Version context lives inside the file — in the header, change log, and section metadata. Agents always know where to find the current version. See `AGENT_RULES.md` §File Reference Convention for the full rule.

**Git handles version history for repos.** For files in GitHub repos (like `claude-playbook` and `strongpath`), every commit is timestamped and diffable. No manual versioning needed.

**Archiving mechanics live in `AGENT_RULES.md`.** `AGENT_RULES.md` §Archiving is the authoritative rule for archive location, filename format, and when to archive versus update in place. In summary:

- Archive location: `JCVC / Archive /` in OneDrive — a single flat portfolio-wide archive. No nested sub-folders by tier or project.
- Archive filename format: `YYMMDD_FILENAME.md` (no `_vN` suffix).
- Archive sparingly. The default is to update in place and let the change log inside the file document the history. Archive only when there is a real reason to preserve prior text (major restructure, legal/audit value, strategic pivot worth documenting verbatim).
- Only `.md` canonical files are archived. `.docx` is review-only and disposable per `AGENT_RULES.md` §File Formats.

**Producing updated files in a conversation:** Claude produces the full replacement `.md` file per `AGENT_RULES.md` §Canonical File Authorship. The founder reviews and saves as canonical. Filenames stay canonical — no `_UPDATED`, `_DRAFT`, or similar session-artifact suffixes. Version context lives inside the file (header and change log), not in the filename.

**The rule:** Agents always read `STACK.md`. If a prior version of `STACK.md` is worth preserving, it lives as `YYMMDD_STACK.md` in `JCVC / Archive /`. These two systems never cross.

---

## BP-13: Pre-Launch Checklist 🔁

Run this checklist before driving any traffic — paid or organic.

### Functional
- [ ] All navigation links resolve (no 404s, no loading spinners)
- [ ] Quiz captures email before showing results
- [ ] Klaviyo receives email submissions (check dashboard)
- [ ] Welcome email fires within 5 minutes of signup
- [ ] Amazon affiliate links use correct Associate tag (`brandname-20`)
- [ ] Stripe checkout works end-to-end in test mode
- [ ] AI advisor responds in under 3 seconds
- [ ] Mobile layout tested on iOS Safari and Android Chrome
- [ ] Blog fetches from Sanity (not hardcoded)

### Content  
- [ ] Minimum 10 blog posts live in Sanity
- [ ] Each post has unique meta title, meta description, OG image
- [ ] About page has real names, credentials, and photos
- [ ] Book cover and Amazon buy link visible on homepage (if applicable)
- [ ] Affiliate disclosure on every page containing Amazon links

### Technical
- [ ] Lighthouse: Performance ≥85, SEO ≥95, Accessibility ≥90
- [ ] Sentry verified with test error
- [ ] GA4 receiving page_view events
- [ ] UptimeRobot monitor active
- [ ] sitemap.xml auto-generating
- [ ] sitemap submitted to Google Search Console
- [ ] robots.txt confirmed not blocking crawlers

### Legal — Health Verticals (⚙️)
- [ ] Medical disclaimer on every page
- [ ] "These statements have not been evaluated by the FDA" on any supplement content
- [ ] FTC affiliate disclosure on every page with affiliate links
- [ ] Privacy policy covers: data collection, email marketing, AI interactions, cookies
- [ ] Terms of service live and linked in footer

---

## BP-14: Lessons from Production (Running Log) 🔁

This section is updated as real data comes in from live verticals. It is the most valuable section over time.

### StrongPath — Phase 1 (In Progress, April 2026)
- Site live at strongpath.vercel.app (Vercel test domain)
- Grok hackathon build confirmed correct stack choices (Next.js, Supabase, Sanity, Vercel)
- Critical gaps identified: app route broken, CMS not wired to blog, authors not visible, OpenAI used instead of Anthropic
- Fixes required before traffic: wire Sanity to blog, fix /app route, add author credibility section, replace OpenAI with Anthropic API

### MCP Toolchain — April 2026
- Evaluated 40 MCP servers against canonical stack; 17 relevant, 23 rejected (no Kubernetes, AWS, BigQuery, MongoDB, etc. — wrong scale and use case)
- Installed Tier 1 servers in Claude Code: Context7, GitHub (connected), Sentry (auth on first use), Vercel (failed — parked, use dashboard + CLI)
- Key discovery: Claude Code and Claude.ai maintain separate MCP configurations — development servers belong in Claude Code, productivity servers in Claude.ai
- Key gaps identified: no Sanity MCP, no Klaviyo MCP, no GA4 MCP — these represent points where agents cannot operate autonomously and require human dashboard access
- Security lesson: never share API tokens or Personal Access Tokens in chat messages. Regenerate immediately if exposed. Use Notepad or password manager as intermediary when constructing CLI commands with credentials.

*Add conversion data, CAC, LTV, and operational lessons here as they emerge.*

---

## Change Log

| Date | Change | Session |
|---|---|---|
| April 2026 | Initial version (v1.0). | StrongPath Grok vs. Claude build comparison |
| April 2026 | v1.1, v1.2 minor updates. (Historical — predate formal change log.) | — |
| April 21, 2026 | **v1.3.** Rewrote BP-12 to align with `AGENT_RULES.md` §Archiving (April 20, 2026 update). Archive location corrected to OneDrive flat archive (supersedes Google Drive path). Archive filename format corrected to `YYMMDD_FILENAME.md` (no `_vN` suffix). Removed the `_UPDATED` session artifact convention — conflicts with `AGENT_RULES.md` §File Reference Convention. Added pointer to `AGENT_RULES.md` as the authoritative rule for archiving mechanics; BP-12 no longer duplicates those mechanics, it references them. Added this change log section — the file previously had no standing change log. | Chief of Staff session 1 |

---

*This is a living document. When something new is learned in any vertical, add it here with the date and vertical name. The goal is that every agent starting a new vertical benefits from everything learned in all previous verticals.*
