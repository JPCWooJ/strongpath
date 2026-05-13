<!--
ARCHIVE WARNING
This file is archived, non-authoritative, and retained for historical reference only.
Do not use it as active governance unless the founder explicitly requests historical context.
-->

# METRICS.md

**StrongPath — 90-Day Metrics Targets, Dashboard, and Weekly Review**
Prepared by SEO Strategist • April 21, 2026
Authority: Tier 3 (vertical). Inherits from PROJECT_INSTRUCTIONS.md, BEST_PRACTICES.md (BP-10, BP-13), ACTIVE_VERTICALS.md.
Owner (Phase 1): SEO Strategist chat. Transitions to Analytics & Growth chat when that workstream stands up.

---

## Purpose

The single canonical file for Phase 1 metrics. Three jobs:

1. **Targets.** What we are aiming for at Day 30, Day 60, and Day 90.
2. **Dashboard.** What to measure, where it lives, how to read it.
3. **Weekly review.** The operational cadence for checking actuals against targets.

This file is separate from `PUBLISHING_PLAN.md` because the read-cadences differ: the publishing plan is reference (read as needed), metrics are operational (updated weekly). One file per read-cadence keeps both files useful.

## How to read this file

- **§1** — The target numbers. Day 30, Day 60, Day 90.
- **§2** — Why these targets. The reasoning and source.
- **§3** — The metrics dashboard. What to measure, what tool produces it, how to interpret.
- **§4** — Weekly review cadence. The operational rhythm.
- **§5** — Phase 2 go/no-go criteria.
- **§6** — What this file does NOT measure (and where those metrics live).
- **§7** — Change log.

---

## 1. The Target Numbers

All targets use the tool-agnostic "Day 1 = first article published" anchor per session 3 standing decision. Founder translates to real dates when Day 1 ships (expected May–June 2026).

### Primary targets (from PROJECT_INSTRUCTIONS.md "Phase 1 targets (90 days from launch)")

| Metric | Day 30 | Day 60 | Day 90 | Source |
|---|---|---|---|---|
| **Email subscribers** | 200 | 600 | **1,200** | Klaviyo dashboard |
| **Organic monthly sessions** | 400 | 1,500 | **4,000** | GA4 + GSC |
| **Cumulative affiliate revenue** | $0–50 | $150–300 | **$400–600** | Amazon Associates dashboard |
| **Indexed pages in Google** | 6 | 18 | **45+** | Google Search Console |
| **First affiliate dollar earned** | — | **By Day 45–60** | — | Amazon Associates |

### Supporting targets (derived from the primary targets)

| Metric | Day 30 | Day 60 | Day 90 | Source |
|---|---|---|---|---|
| **Articles published** | 4 | 7 | 11–12 | Sanity |
| **Total pages live (articles + book page + quiz + placeholders)** | ~12 | ~15 | ~18 | Site / GSC |
| **Quiz completion rate** (quiz starts → quiz completes) | n/a | 40%+ | 50%+ | Klaviyo + PostHog |
| **Email capture rate** (unique visitors → email subscribers) | 2% | 3% | 4%+ | Klaviyo / GA4 |
| **Book affiliate click-through rate** (sessions → Amazon clicks) | 1% | 2% | 3%+ | GA4 outbound + Amazon Associates |

### Technical targets (from BP-10, BP-13 and ongoing Lighthouse CI)

| Metric | Target | Source |
|---|---|---|
| **Lighthouse Performance** | ≥85 on every article | Lighthouse CI (every PR) |
| **Lighthouse SEO** | ≥95 on every article | Lighthouse CI |
| **Lighthouse Accessibility** | ≥90 on every article | Lighthouse CI |
| **Uptime** | 99%+ | UptimeRobot |
| **Sentry error rate** | <1% of sessions | Sentry |
| **Core Web Vitals (LCP, FID, CLS)** | All "Good" | GSC + Vercel Analytics |

---

## 2. Why These Targets

Each target is grounded, not aspirational. The reasoning for each:

### 1,200 email subscribers at Day 90

From PROJECT_INSTRUCTIONS.md, set as the Phase 1 milestone. The reasoning for 1,200 specifically: at a reasonable 40% open rate on the welcome sequence and a 3–5% conversion rate on the first digital product offer, 1,200 subscribers produces ~$2,000–3,000 in digital product revenue in the first post-Day-90 sale cycle. This is the minimum list size where email as a revenue channel is economically meaningful.

### 4,000 organic monthly sessions at Day 90

Matches PROJECT_INSTRUCTIONS.md. The reasoning: at a 4% email capture rate on organic traffic, 4,000 monthly sessions produces ~160 subscribers/month — the rate needed to keep the list growing after Day 90 without relying on paid acquisition. Organic is the sustainable channel; 4K/mo is where compound growth starts.

### $400–600 cumulative affiliate revenue at Day 90

From PROJECT_INSTRUCTIONS.md. Grounded in Amazon book-affiliate economics: average conversion rate of 4–8% on book-buying intent traffic; average commission of ~$0.50–1.00 per book; 800–1,200 book-buying clicks over 90 days producing $400–600 revenue. Low absolute number, but meaningful: it proves the affiliate model works and the Amazon Associates account is wired correctly. Zero revenue at Day 90 triggers an affiliate-integration audit.

### 45+ indexed pages at Day 90

From PROJECT_INSTRUCTIONS.md. Grounded in: 10–12 published articles + book page + homepage + about + ~10 placeholder pages (see PUBLISHING_PLAN.md §4) + ~10 satellite FAQ / test-specific pages that will naturally accrue + quiz + programs = 45 pages Google could index. Missing this target means Google isn't finding or isn't crawling the site correctly — a technical SEO issue that needs Sentry / GSC investigation.

### First affiliate dollar by Day 45–60

From PROJECT_INSTRUCTIONS.md. Sanity-check target. If Brief 1 (Sarcopenia Pillar, published Day 1) is earning no affiliate revenue by Day 60, something is broken: wrong tag, wrong affiliate link placement, article not indexing, article not ranking, or SERP analysis was wrong. A $1 earned is proof-of-plumbing; the exact amount doesn't matter.

---

## 3. The Metrics Dashboard

The metrics that need to be checked. Grouped by source, since one source = one login = one context switch for the founder doing the weekly review.

### Google Search Console (GSC)

**What to check weekly:**

- **Indexed page count.** Coverage report. Must grow by 1–2 pages/week to hit 45+ by Day 90. Any week with 0 new indexed pages after a publish is a flag.
- **Impressions (site-wide).** Total impressions across all queries. Should grow week-over-week.
- **Top queries.** Which search queries are driving impressions. Early indicator of which pillars are ranking.
- **Top pages.** Which articles are earning the most impressions. Confirms or refutes the SERP-analysis predictions from session 2.
- **Average position.** By query and by page. Articles ranking 40–60 need SEO attention; articles ranking 10–20 are the ones closest to a page-one breakthrough.
- **CTR (click-through rate).** Impressions → clicks ratio. Low CTR on a high-ranking query is a title or meta description problem — fixable without rewriting the article.

**What to check monthly:**

- **Backlinks report.** Any external sites linking to StrongPath. Zero at Day 30 is normal; zero at Day 90 is a signal that no one has noticed the site organically — an outreach gap.

### Google Analytics 4 (GA4)

**What to check weekly:**

- **Organic sessions (traffic from Google search).** The primary growth metric. Should grow week-over-week.
- **Total sessions.** Includes direct traffic, referral, email clicks. Context for organic.
- **Pages per session / average session duration.** Engagement. Low duration (<45 seconds) on a pillar means readers bounce — usually a content or load-speed issue.
- **Bounce rate.** Pillar articles should have bounce rates under 70% on organic. Above that is a content-match or load-speed problem.
- **Goal completions.** Quiz starts, quiz completions, book-affiliate clicks, program page views. These are the on-site conversion signals.

**What to check monthly:**

- **Audience demographics.** Age and gender skew. Matches our Margaret 55–72, mostly female, educated target? Or is traffic landing elsewhere? Early signal for whether paid media targeting (when it launches) should adjust.

### Klaviyo

**What to check weekly:**

- **Total subscribers.** Growth rate against Day 30 / Day 60 / Day 90 milestones.
- **Email capture sources.** Quiz vs. inline forms vs. footer signup. Which is driving growth? Almost always quiz dominates; if quiz doesn't dominate, funnel is broken.
- **Welcome sequence performance.** Open rates, click rates, unsubscribe rate. Industry benchmarks for wellness: 40–50% open rate, 3–5% click rate, <1% unsubscribe. Below those = subject line or content problem.
- **Unsubscribe rate.** Spike suggests list quality issue or content mismatch.

**What to check monthly:**

- **Churn.** How many subscribers are we losing month-over-month relative to growth?
- **Segment performance.** Margaret vs. David quiz answerers. Do they behave differently in email? (They should.)

### Amazon Associates

**What to check weekly:**

- **Clicks.** Total clicks to Amazon from the site.
- **Purchases.** Items ordered through our links.
- **Commission earned.** Dollar amount.
- **Conversion rate.** Clicks → purchases ratio. Amazon's book-buying CVR is typically 5–8%; lower suggests the book-affiliate link placement is wrong (e.g., readers click the link expecting something other than a book purchase).

**What to check monthly:**

- **Top-converting pages.** Which StrongPath articles drive the most Amazon clicks? Often not the articles you'd expect. Use this data in session 5+ to decide where to place additional affiliate links.

### Sentry

**What to check weekly:**

- **Error rate.** Target <1% of sessions. Spike = deploy broke something.
- **Top errors.** Any recurring error? Fix before it compounds.

### UptimeRobot

**What to check daily (automated email):**

- **Uptime status.** Any downtime in the past 24 hours? Target 99%+. Downtime over 5 minutes needs investigation.

### Vercel Analytics

**What to check weekly:**

- **Core Web Vitals.** LCP, FID, CLS. All should be in "Good" range. Red metrics are performance issues that hurt SEO rankings.
- **Top pages by traffic.** Sanity-check against GA4.

### PostHog (when activated per STACK.md, Month 2+)

**What to check weekly (after Month 2):**

- **Session recordings.** Watch 5–10 sessions per week, ideally spanning desktop and mobile. Look for hesitation points, rage clicks, abandoned quiz-starts. This is qualitative signal; it beats any dashboard number for "why is conversion low."
- **Funnel analysis.** Homepage → article → quiz-start → quiz-complete → email capture. Where does drop-off happen?

---

## 4. Weekly Review Cadence

The operational rhythm for checking actuals against targets. Not complicated; just consistent.

### The weekly metrics review — one hour, same day each week

Recommended: **Monday morning, 45–60 minutes.** Reasoning: the week's publish happens mid-week; Monday lets us see the previous week's full article performance + the current state of everything else. Sunday is too soon (week isn't closed); Thursday is too late (next publish is in motion).

### What happens in the review

**Part 1 — The scorecard (15 minutes).**

Look at the primary targets and supporting targets tables (§1). For each, answer: on track, at risk, or behind? No long analysis — just a status.

**Part 2 — The week's publish (15 minutes).**

- Is the new article live?
- Is it indexed in GSC within 7 days of publish?
- Does it have at least 1 GA4 session within 7 days?
- Are internal links wired correctly (per PUBLISHING_PLAN.md §4)?
- Any Sentry errors since the deploy?

**Part 3 — What changed, what didn't (15 minutes).**

One honest paragraph written at the end of each review and appended to the running log (§4 subsection below): "This week, X happened. Y didn't. Z was surprising. Decision for next week: [one action]."

### The running log

Kept at the bottom of this file (§ end). One paragraph per week. Over 13 weeks, this becomes a narrative of the launch that can be read in 15 minutes and informs the Day 90 retrospective.

Template:

```
**Week N (YYYY-MM-DD to YYYY-MM-DD):**
Subscribers: [start] → [end] (Δ [delta])
Sessions: [total last 7 days]
Indexed pages: [GSC total]
Affiliate revenue (cumulative): $[amount]
Articles published this week: [Brief N title]
What worked: [one line]
What didn't: [one line]
Decision for next week: [one line]
```

Do not skip weeks. Even a week where nothing noteworthy happened is signal — it establishes baseline.

### When to escalate beyond weekly

**Escalate to a same-day decision if any of:**

- Uptime drops below 99% for the week.
- Sentry error rate above 5% of sessions.
- GSC flags a manual action or crawl error.
- A week goes by with zero new indexed pages despite a publish.
- Subscribers grew zero for the week (not counting week 0 before quiz is live).

### The Day 30 / Day 60 / Day 90 milestone reviews

Three larger reviews that replace the normal weekly review on weeks 4, 8, and 13.

**Day 30 review (end of Week 4):** 2-hour session. Scorecard against Day 30 targets. If on track, proceed. If behind, identify the specific gap and decide whether it's a content-quality issue, a technical issue, or a timing issue.

**Day 60 review (end of Week 8):** 2-hour session. Same format. This is also the gate for mid-plan scope decisions — e.g., session 1 open question 1 (supplement keyword posture) needs answering by this point.

**Day 90 review (end of Week 13):** 4-hour session. The Phase 1 retrospective. Compare every actual against target. Answer: did Phase 1 succeed? What do we know now that we didn't at Day 0? What does Phase 2 look like given this data? (See §5 below for the Phase 2 go/no-go framework.)

---

## 5. Phase 2 Go / No-Go Criteria

Per ACTIVE_VERTICALS.md, Phase 2 unlocks only after Phase 1 targets are hit. The Day 90 retrospective is where the decision happens.

### Phase 2 go (all green) — pursue supplements, medical advisor hire, family-adherence app

All four primary targets met:

- Subscribers: ≥1,200
- Organic sessions: ≥4,000/mo (measured as the month preceding Day 90)
- Affiliate revenue: ≥$400 cumulative
- Indexed pages: ≥45

If all four are hit, Phase 2 planning begins immediately. The next vertical-level session (session 7 or 8) will scope Phase 2.

### Phase 2 wait (mixed signal) — extend Phase 1, don't retreat

Two or three primary targets met. Any combination of partial misses warrants 30–60 more days of Phase 1 work before Phase 2 planning. Specific diagnostic:

- **Hit subscribers, missed sessions:** Email is working but SEO is slow. Double down on content. Extend to 120-day Phase 1 instead of 90.
- **Hit sessions, missed subscribers:** SEO is working but email capture is broken. Quiz UX and welcome sequence need immediate review.
- **Hit both, missed revenue:** Affiliate plumbing or product fit. Audit the book-affiliate link placements; consider when to add the programs.
- **Hit traffic + revenue, missed indexed pages:** Probably a technical SEO issue — maybe a few pages are noindexed, or the sitemap isn't current. Fix within 2 weeks.

### Phase 2 no-go (all red) — Phase 1 retrospective, not Phase 2 launch

Zero or one primary target met. Not a failure — a data point. Day 90 retrospective becomes: what did we learn, what do we do next, and is the hypothesis that sarcopenia-content converts Margaret and David still valid? Re-plan rather than press forward.

### What Phase 2 go triggers (if all green)

- Medical advisor hire (BRAND.md §5 standing decision — Phase 2 priority; re-engage Dr. Boppart or hire new advisor).
- Supplement product roadmap (session 1 Q1 — supplement keyword posture decided; affiliate reviews live; own-brand roadmap begins).
- Family-adherence app concept (PRODUCT_CONCEPTS_BACKLOG.md Entry 1 — activated).
- Dr. Chen / clinician page (session 1 Q3 — active acquisition begins).
- Founder bio page + author bio pages (BRAND.md §5 hierarchy).

---

## 6. What This File Does NOT Measure

Clarity on scope. This file tracks Phase 1 Pre-Revenue KPIs. It does not track:

- **Programs revenue.** When digital programs launch (post-Day-90 per ACTIVE_VERTICALS.md), revenue metrics move to a future `REVENUE.md` or into Stripe dashboards. Not this file.
- **Paid media performance.** When Meta / Google Ads launch (post-BP-04 gate, likely Week 11+), paid media metrics belong in the Paid Media Buyer workstream's own file. ROAS, CPM, CAC don't live here.
- **Content performance deep-dive.** Article-by-article SEO performance (word count that ranked, headline A/B results, specific query-rank tracking) belongs in a future SEO session's own analysis, not here.
- **Community metrics.** Facebook group size, Reddit engagement, outreach response rates belong to the Community Manager workstream.
- **Founder-input metrics.** Time spent on review, hours of drafting needed, etc. This is for the founder's own operational tracking, not a dashboard.

This file measures Phase 1 customer-facing outcomes. Everything else goes in its own file under its own workstream.

---

## 7. Weekly Running Log (to be filled in starting Week 1)

*This section will be appended weekly starting the week Brief 1 publishes. The format is specified in §4 above.*

**Week 0 (Pre-publish):** Placeholder — week of P0 fixes and Content Writer chat stand-up. No metrics yet.

**Week 1:** *To be filled in when Brief 1 ships.*

**Week 2:** *To be filled in.*

*(Continues through Week 13.)*

---

## 8. Change log

| Date | Change | Session |
|---|---|---|
| April 21, 2026 | Initial version. Primary, supporting, and technical targets set for Day 30 / Day 60 / Day 90. Weekly review cadence defined (45–60 min, Monday morning). Phase 2 go/no-go framework specified. Running log template stood up for weekly population. | SEO Strategist session 3 |

---

*This file is the canonical Phase 1 metrics dashboard. It belongs to the SEO Strategist chat until the Analytics & Growth chat stands up — at which point this file transfers ownership and stays canonical.*
