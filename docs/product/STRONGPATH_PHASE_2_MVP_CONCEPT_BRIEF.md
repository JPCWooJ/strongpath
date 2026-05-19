# StrongPath Phase 2 MVP Concept Brief

Status: Working Draft  
Owner: Product / GTM / Cross-Agent Review  
Source seed: docs/governance/PRODUCT_CONCEPTS_BACKLOG.md  
Purpose: Define the Phase 2 MVP direction for cross-agent review.

## 1. Executive Thesis

StrongPath should evolve from an evidence-based strength content platform into a product that gives aging adults simple strength plans, makes progress visible to the people who care about them, and uses caregiver/family encouragement to reinforce adherence.

The product direction is not more content. It is the next layer of StrongPath: an educational protocol engine, personalized recommendation system, adherence-support layer, and commerce-assisted educational platform that helps readers translate credible strength guidance into visible, repeatable action.

## 2. Phase 1 Foundation

Phase 1 has created the working platform for this move:

- credible public website
- published content library
- Amazon affiliate commerce modules embedded in relevant articles
- X distribution and Beehiiv infrastructure
- Google Search guidance integrated into GTM governance
- early audience, email, and affiliate-revenue testing

## 3. Phase 2 Product Opportunity

Phase 2 moves StrongPath from content consumption to supported behavior:

- from reading to doing
- from advice to adherence
- from individual behavior to family-supported behavior
- from generic exercise guidance to strength and independence

The opportunity is to serve the person who needs the plan and the person who wants to help them follow through. This is especially important for the Proactive Caregiver persona: the adult child is often willing to pay for a credible path that helps a parent have more good days without relying on fear, guilt, or nagging.

## 4. Core Product Wedge

Strength and independence behaviors made visible, supported, and reinforced.

The MVP should preserve StrongPath's editorial-first positioning, calm/high-trust UX, and evidence-first framing. It should feel like a serious StrongPath protocol translated into action, not a generic exercise tracker, social training feed, or broad consumer platform.

This is not a clinical remote patient monitoring platform at MVP. It should not make medical, diagnostic, treatment, prevention, or monitoring claims.

This is not facility-management software at MVP. Facilities and professionals are a future support layer, not the first wedge.

## 5. User Roles and Value Creation

**Aging adult:** Receives a simple starting plan, clear next actions, confidence, dignity, and visible evidence of progress. The product should treat the user as capable, not frail.

**Adult child:** Sees that action is happening, feels useful, and can encourage without becoming the nag. The product should make goodwill easier to express.

**Caregiver / facility / professional support layer:** Sees participation and trends, where consent allows, and can help coordinate support. This layer should respect clinical boundaries and avoid implying that StrongPath replaces professional judgment.

## 6. MVP 1 - StrongPath Starter Plan Generator

The first MVP should be a lightweight educational protocol engine and personalized recommendation system for adults across the StrongPath audience, including adults 75+ when recommendations are age-appropriate and conservative. It should remain an editorial-first experience with calm UX, conservative claims, and a clear education-not-care boundary.

Core elements:

- quiz/intake covering age range, starting baseline, confidence, equipment access, goals, and basic safety flags
- 2-week starter plan with simple session structure
- personalized recommendations matched to starting level
- exercise recommendations framed as educational options, not prescriptions
- equipment recommendations tied to the plan
- email capture before or after results
- Amazon list integration for relevant equipment
- safety/disclaimer logic that routes higher-risk users to consult a physician, physical therapist, or qualified professional before starting

Higher-risk users should receive more conservative recommendations plus consult-a-physician-or-PT language. Age alone is not an exclusion criterion. Clinical/advisor review is not required before MVP 1, but all exercise content must pass StrongPath safety, brand, claim, and recommendation-language standards before use.

MVP account strategy:

- Phase 1: email capture, lightweight personalization, no heavy account system
- Phase 1.5 / Wave 2: optional lightweight member accounts, saved plans/history, and adherence tracking if conversion validates

External language should use "personalized recommendations." Do not market "AI-generated plans." Any AI orchestration remains an internal implementation detail only.

Success test: users complete the quiz, accept the plan as credible, provide an email address, and click through to equipment or follow-up content.

## 7. MVP 2 - Caregiver Plan Generator

The second MVP adapts the same recommendation engine for the adult child helping a parent. Caregiver-generated plans may be emailed or shared as educational workout plans, with language that preserves the parent's dignity and avoids medical, diagnostic, or treatment framing.

Core elements:

- adult child answers on behalf of a parent
- parent profile covering approximate age, baseline, motivation, environment, equipment, and support context
- simple starter plan that can be shared with the parent
- conversation script for introducing the plan respectfully
- caregiver guidance on encouragement, safety boundaries, and what not to say
- optional email to parent with consent-aware language
- caregiver follow-up sequence through Beehiiv or equivalent email infrastructure

Success test: adult children complete the flow, share the plan, and opt into follow-up because they believe the product helps them support a parent without creating pressure.

## 8. MVP 3 - Family Strength Loop

The third MVP turns the plan into a small accountability loop.

Core elements:

- parent completes or checks off a session
- adult child receives a simple update
- system drafts warm encouragement in the StrongPath voice, with caregiver approval before sending
- weekly Good Days Summary showing completed sessions and simple participation patterns
- family/caregiver visibility for invited participants only

The loop should feel warm, not surveillant. Visibility exists for support, encouragement, shared progress, and more good days. It should not frame the adult child as monitoring, controlling, or enforcing compliance.

Potential future integrations may leverage wearable/device telemetry, caregiver accountability workflows, and family adherence systems. These are strategically aligned but not MVP 1 requirements.

## 9. Future Product Layers

Future layers can be evaluated after manual demand is validated:

- exercise library with older-adult-appropriate movement categories and progressions
- progress tracking across plans, sessions, and adherence
- family dashboard for multi-person household accounts
- wearable integrations through Apple HealthKit, Google Fit, Samsung Health, Human API, and existing devices
- facility dashboards for group participation visibility
- clinical/professional adjacency with referral-safe education and appropriate disclaimers
- subscription tiers for individual, family, and professional/facility contexts

## 10. Repo Inspiration and Lessons

**PRODUCT_CONCEPTS_BACKLOG.md:** Origin seed. Entry 1, "Family-Networked Accountability App," frames the core opportunity: family as the adherence mechanism, with AI assisting rather than replacing human encouragement.

**Workout.cool:** Directional reference for selective lightweight fork/adaptation, not full fork/replatform. StrongPath should aggressively reuse exercise taxonomy, progression logic, movement database structures, onboarding/questionnaire flows, protocol assembly mechanics, and equipment mappings. StrongPath should not inherit heavy app architecture, generic exercise positioning, broad subscription complexity, unnecessary auth layers, or social/tracker behaviors. Workout.cool is a starting point, not authority; all exercise content must be filtered through StrongPath safety, brand, and claim standards.

**GeriLife:** Directional reference for making invisible activity visible through shared notes, family/caregiver visibility, and multi-stakeholder views. The lesson is that care coordination often starts by showing what happened.

**Awesome Wearables Health Monitoring:** Directional reference for future integration paths through Apple HealthKit, Google Fit, Samsung Health, Human API, existing wearables, activity tracking, recovery data, and private family reinforcement loops.

## 11. What We Should Keep

- exercise database model
- program/session/progress architecture
- quiz-to-plan generator
- family visibility loop
- encouragement-message drafting
- Good Days Tracker
- caregiver dashboard concept
- wearable integration as future layer
- subscription model

## 12. What We Should Avoid For MVP

- full clinical RPM positioning
- medical-device claims
- replacing PT/clinician judgment
- facility-management platform as first product
- generic consumer exercise positioning
- expensive video library before validation
- complex wearable integrations before manual demand validation
- heavy account system before conversion validates
- marketing internal AI orchestration as the product promise
- rehab protocols
- disease-specific plans
- fall-prevention claims
- post-surgery or post-fall recovery plans
- high-risk balance drills
- HIIT
- heavy barbell or kettlebell work

## 13. Key Open Questions For Agents

**CTO:**

- Can current stack support quiz -> plan -> email?
- What is the right selective lightweight fork/adaptation path from Workout.cool?
- What data/licensing risks exist?
- What is fastest prototype path without heavy accounts?

**Editorial Systems:**

- What exercise library is safe for older adults?
- What disclaimer and claim guardrails are required?
- What generated-plan language is allowed?
- How should recommendation framing align with BRAND.md guardrails?
- What exercise safety taxonomy is required?
- What recommendation-language rules govern plan outputs?
- What quiz safety routing determines conservative recommendations?
- What disclaimer blocks are required on quiz, plan, caregiver-share, and email surfaces?
- What evidence map supports exercise categories and recommendation rules?
- What plan-output template and caregiver share template are needed?

**UI/UX:**

- What is the simplest quiz/results flow?
- How do we make family visibility feel warm, not surveillant?
- What does the starter plan page look like?

**GTM:**

- What market test validates willingness to use/pay?
- What lead magnets and articles feed this?
- What conversion metrics matter?

**Chief of Staff:**

- How do we sequence without derailing Phase 1 publishing?
- Who owns MVP definition and agent review?

## 14. Recommended Next Step

Cross-agent review first. Then produce a narrower MVP requirements document only after comments are incorporated.

Compliance note: all MVP language should remain educational, non-diagnostic, and aligned with BRAND.md claim guardrails. StrongPath recommendations should not claim to diagnose, treat, prevent, monitor, or replace clinician judgment.
