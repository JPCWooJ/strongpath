# StrongPath MVP 1 Implementation Plan

Status: Implementation Plan  
Product: StrongPath Starter Plan Generator  
Source: docs/product/STRONGPATH_PHASE_2_MVP_CONCEPT_BRIEF.md

## 1. Recommended Implementation Path

Build a web-first starter-plan route inside the existing Next.js marketing app.

- One route: `/starter-plan`
- One client-side intake/results flow
- Static typed config for plan rules
- Existing Klaviyo subscribe API for email capture
- Existing article routes for related reading
- Existing Amazon link component for equipment links

No auth. No dashboard. No database. No subscriptions. No wearable integration. No imported external repo code for MVP 1.

## 2. Existing StrongPath Code To Reuse

- `app/(marketing)/layout.tsx`: marketing shell
- `components/marketing/SiteHeader.tsx`: site navigation
- `components/marketing/SiteFooter.tsx`: footer
- `app/(marketing)/EmailForm.tsx`: email-capture behavior reference
- `app/api/subscribe/route.ts`: subscribe endpoint
- `lib/email.ts`: Klaviyo list subscription and source attribution
- `components/AmazonLink.tsx`: Amazon affiliate link wrapper
- `lib/articles.ts`: article URL/meta helpers
- `lib/flagship-articles.ts`: current article inventory

## 3. External Repo Patterns To Reference

- **Workout.cool:** exercise taxonomy, plan/session structure, progression logic, equipment mapping
- **GeriLife Caregiving:** caregiver dignity language, shared activity/progress framing
- **HeyForm:** conversational intake, conditional logic, low-friction question flow

Reference patterns only. Do not import external repo code unless a later CTO review explicitly approves it.

## 4. Minimum Typed Data / Config Model

```ts
type PlanPath = 'myself' | 'parent'

type AgeRange = '50-59' | '60-69' | '70-74' | '75-plus'
type Baseline = 'inactive' | 'walking' | 'some-strength'
type Confidence = 'low' | 'medium' | 'high'
type EquipmentAccess = 'none' | 'bands' | 'dumbbells'
type Goal = 'start' | 'stairs' | 'carry' | 'parent-support'

type IntakeAnswers = {
  path: PlanPath
  ageRange: AgeRange
  baseline: Baseline
  confidence: Confidence
  equipment: EquipmentAccess
  goal: Goal
  safetyFlag: boolean
}

type EquipmentLink = {
  label: string
  asin: string
}

type StarterPlan = {
  level: string
  summary: string
  preview: string
  sessions: Array<{
    day: string
    focus: string
    exercises: string[]
    note: string
  }>
  articles: Array<{
    title: string
    href: string
  }>
  equipment: EquipmentLink[]
  disclaimer: string
}
```

Config files should define:

- exercise categories
- starter plan templates
- recommendation rules
- safety routing rules
- article mappings
- equipment mappings
- disclaimer copy

## 5. Proposed Files / Components

- `app/(marketing)/starter-plan/page.tsx`
- `app/(marketing)/starter-plan/StarterPlanGenerator.tsx`
- `app/(marketing)/starter-plan/starter-plan-config.ts`
- `app/(marketing)/starter-plan/starter-plan-types.ts`

Component shape:

- `PathStep`
- `IntakeStep`
- `PreviewResult`
- `EmailCaptureGate`
- `FullPlanResult`
- `RelatedArticles`
- `EquipmentLinks`

Keep components local until reuse is proven.

## 6. Build Sequence

1. Add typed config and recommendation rules.
2. Add `/starter-plan` route.
3. Build path selection: myself / my parent.
4. Build 5-7 question intake with conditional copy.
5. Generate preview client-side from static config.
6. Capture email through existing `/api/subscribe` endpoint with source `starter-plan-generator`.
7. Reveal full 2-week plan after successful capture.
8. Render related article links.
9. Render Amazon equipment links through `AmazonLink`.
10. Add safety/disclaimer routing for higher-risk users.
11. Run `npm run typecheck`, `npm run lint`, and `npm run build`.

## 7. Risks / Blockers

- Editorial must approve safe exercise categories and plan language before launch.
- Amazon ASINs must be selected for equipment mappings.
- Existing subscribe endpoint only stores `source`; deeper segmentation would require a small Klaviyo property extension.
- Parent-path copy must preserve dignity and avoid surveillance/compliance framing.
- Safety routing must avoid diagnosis, treatment, prevention, or fall-prevention claims.
- External repos are pattern references only; importing code would add review/licensing overhead.

## 8. First Build Task For Codex

Build the MVP 1 prototype route at `/starter-plan` using static typed config, no auth, no database, and existing email/Amazon/article infrastructure.

Acceptance criteria:

- User can choose myself / my parent.
- User can complete 5-7 question intake.
- User sees useful preview before email capture.
- Email capture uses existing subscribe API.
- Successful capture reveals full 2-week starter plan.
- Full plan includes related StrongPath articles.
- Full plan includes relevant Amazon equipment links using `AmazonLink`.
- Higher-risk answers show conservative guidance and consult physician/PT language.
- No auth, dashboard, database, subscriptions, wearables, or imported external repo code.
