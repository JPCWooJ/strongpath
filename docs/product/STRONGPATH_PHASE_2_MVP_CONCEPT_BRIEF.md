# StrongPath Phase 2 MVP Build Brief

Status: Build Brief  
Immediate product: StrongPath Starter Plan Generator  
Source seed: docs/governance/PRODUCT_CONCEPTS_BACKLOG.md

## 1. Thesis
StrongPath should move from evidence-based strength content into a simple product that helps adults start.
MVP 1 is a web-first educational protocol engine:
- simple intake
- personalized recommendations
- 2-week starter plan
- related StrongPath articles
- relevant Amazon equipment links/lists
Not a fitness app. Not clinical software. Not a tracker.
## 2. Phase 1 Foundation
Phase 1 created the launch base:
- credible public website
- published strength and aging articles
- Amazon affiliate commerce modules
- X and Beehiiv distribution
- Google Search standards in GTM governance
- early audience and revenue testing
## 3. Core Wedge
Strength and independence behaviors made visible, supported, and reinforced.
MVP 1 focuses on the first behavior: starting.
## 4. MVP 1 Product Decision
Ship first: **StrongPath Starter Plan Generator**.
MVP 1 includes two paths in one flow:
- for myself
- for my parent
One engine. Two entry contexts. Same safety, content, and commerce rules.
## 5. MVP 1 Flow
1. User chooses path: myself / my parent.
2. User completes 5-7 question intake.
3. User sees useful preview.
4. Email/contact capture unlocks full 2-week starter plan.
5. Plan includes related StrongPath articles.
6. Plan includes relevant Amazon equipment links/lists.
No account required.
## 6. Intake
Keep intake short and low-friction.
Questions should cover:
- user path
- approximate age range
- current strength/activity baseline
- confidence or starting comfort
- equipment access
- primary goal
- safety flag / consult prompt
Age alone is not exclusion. Adults 75+ can receive conservative, age-appropriate recommendations.
## 7. Results Preview
Show value before capture.
Preview should include:
- starting-level summary
- conservative recommendation direction
- first step
- educational-not-medical framing
- related StrongPath article path
- limited equipment preview
Then ask for email/contact to unlock the full plan.
Trust before conversion.
## 8. Full 2-Week Plan
Full plan should include:
- simple 2-week structure
- recommended exercise categories
- session frequency
- first-session guidance
- progression cue
- safety/disclaimer block
- related StrongPath articles
- relevant Amazon equipment links/lists
Public language: personalized recommendations, not AI-generated plans.
## 9. Parent Path
The parent path is MVP 1, not a separate product.
It generates an educational starter plan the adult child can share with a parent.
UX rules:
- dignity-preserving language
- encouragement-first framing
- no surveillance language
- no compliance/control framing
- parent remains the person with agency
## 10. Safety Boundaries
Recommendations are educational, not medical prescriptions.
No:
- diagnosis
- treatment claims
- prevention claims
- RPM-style monitoring
- replacement of physician/PT judgment
Higher-risk users receive conservative recommendations plus consult physician/PT language.
Exclude from MVP 1:
- rehab protocols
- disease-specific plans
- fall-prevention claims
- post-surgery/post-fall recovery plans
- high-risk balance drills
- HIIT
- heavy barbell or kettlebell work
## 11. Reuse-First Build Principle
Do not build from scratch unless necessary.
Reuse/reference:
- **Workout.cool:** quiz/intake, exercise taxonomy, workout-plan structure, session/plan logic, equipment mapping
- **GeriLife Caregiving:** caregiver/family visibility concepts, shared activity/progress framing
- **Awesome Wearables Health Monitoring:** future wearables/integration reference only
Do not inherit:
- generic fitness positioning
- heavy app architecture
- broad subscription complexity
- unnecessary auth layers
- social/workout-tracker behaviors
- device dependency
## 12. MVP Sequence
MVP 1: Starter Plan Generator. Ship first.
MVP 2: Caregiver/parent-support flow using same engine. Only after MVP 1 learning.
MVP 3: Good Days Loop / family visibility. Only after MVP 1 and MVP 2 learning. Keep it light: simple weekly summary, warm tone, no dashboard-heavy metrics.
## 13. Out Of Scope For MVP 1
- heavy auth
- member accounts
- saved history
- complex dashboards
- notification system
- native app
- wearable integrations
- facility dashboard
- clinical workflow
- subscriptions
- expensive video library
MVP 1 is web-first.
## 14. Next Execution Sequence
1. CTO identifies fastest reuse-first build path.
2. Editorial provides safe plan templates and language.
3. UI/UX defines quiz/results flow.
4. GTM defines launch test and email/Amazon conversion path.
5. Codex builds MVP 1 prototype.
## 15. MVP 1 Implementation Path
Fastest path: add a web-first `/starter-plan` route inside the existing Next.js marketing app. Use static typed config, existing email capture, existing article routes, and existing Amazon affiliate link handling. No auth, database, dashboard, subscriptions, wearables, or external repo code.

Reuse existing StrongPath code:
- `app/(marketing)/layout.tsx`
- `app/(marketing)/EmailForm.tsx`
- `app/api/subscribe/route.ts`
- `lib/email.ts`
- `components/AmazonLink.tsx`
- `lib/articles.ts`
- `lib/flagship-articles.ts`

Minimum typed config:
- `PlanPath`: `myself | parent`
- `IntakeAnswers`: path, age range, baseline, confidence, equipment, goal, safety flag
- `StarterPlan`: level, summary, preview, sessions, articles, equipment, disclaimer

Likely files:
- `app/(marketing)/starter-plan/page.tsx`
- `app/(marketing)/starter-plan/StarterPlanGenerator.tsx`
- `app/(marketing)/starter-plan/starter-plan-config.ts`
- `app/(marketing)/starter-plan/starter-plan-types.ts`

Build sequence:
1. Add typed config and recommendation rules.
2. Add `/starter-plan` route.
3. Build path selection and 5-7 question intake.
4. Generate preview client-side.
5. Capture email through existing `/api/subscribe` with source `starter-plan-generator`.
6. Reveal full 2-week plan after capture.
7. Render related articles and Amazon equipment links.
8. Add safety/disclaimer routing.
9. Run typecheck, lint, and build.

Risks/blockers:
- Editorial must approve exercise categories and plan language.
- Amazon ASINs must be selected.
- Deeper Klaviyo segmentation would require a small profile-property extension.
- Parent-path copy must avoid surveillance/compliance framing.
- External repos remain pattern references only.

First Codex build task: build the `/starter-plan` MVP 1 prototype using static typed config, existing subscribe API, related article links, and `AmazonLink`.
