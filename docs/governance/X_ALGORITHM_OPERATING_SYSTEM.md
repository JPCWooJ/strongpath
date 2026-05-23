# X Algorithm Operating System

## Purpose

Define a generic operating standard for earning durable X visibility.

This document translates public `xai-org/x-algorithm` mechanics into execution rules.

## 1. X Visibility Thesis

- X visibility comes from retrieval eligibility, predicted user value, and low negative-feedback risk.
- The system retrieves candidates, ranks them by predicted actions, filters unsafe/irrelevant items, and diversifies the feed.
- Relationship memory, topic consistency, and useful engagement compound distribution probability.
- Reach without qualified engagement is weak signal.

## 2. Retrieval

Sources:

- in-network: recent posts from followed accounts
- out-of-network: ML-retrieved posts from broader candidate corpora
- adjacent modules: cached posts, topic sources, prompts, ads, and follow recommendations

Rules:

- earn in-network visibility through follower relevance and account consistency
- earn out-of-network visibility through topic fit, engagement history, and credible network overlap
- build repeated interaction with the audience you want retrieved against
- keep content understandable without prior account context

## 3. Ranking

Ranking predicts user value from user context, action history, post features, author features, and candidate content.

The model predicts multiple actions, then combines them into a weighted score.

Positive predicted actions:

- favorite / like
- reply
- repost
- quote
- click
- profile click
- share
- dwell
- follow author
- photo expand / video quality view where relevant

Negative predicted actions:

- not interested
- mute author
- block author
- report

Rules:

- optimize for useful actions from the right audience
- avoid actions likely to create mute, block, report, or not-interested feedback
- treat profile clicks, dwell, replies, follows, and shares as stronger quality signals than casual likes

## 4. Filtering And Suppression

Candidates may be removed or reduced for:

- duplicates
- repeated reposts of the same content
- old posts
- previously seen or served posts
- viewer muted keywords
- muted or blocked authors
- author blocked viewer
- unavailable or unhydrated post data
- safety, spam, violence, gore, or policy filters
- duplicate branches of the same conversation
- ineligible gated content

Rules:

- do not repeat identical posts
- avoid stale copy-paste promotion
- avoid unsafe, spam-like, or policy-risk content
- preserve account trust before reach

## 5. Diversity And Freshness

The feed attenuates repeated author exposure and filters old or already-served candidates.

Rules:

- avoid bursts of similar posts
- space posts
- vary format and angle without drifting topics
- resurface ideas through new framing, not identical reposts
- keep cadence stable enough to preserve account consistency

## 6. Link Strategy

Links should extend value, not replace it.

Rules:

- never post a bare link
- make the post useful without the click
- place the link after context when possible
- use links for deeper proof, source, product, or next step
- avoid repetitive link-drop patterns

## 7. Reply Strategy

Replies are distribution assets.

Good replies:

- add evidence
- clarify a distinction
- answer a real question
- enter a credible conversation
- invite profile clicks or follows through usefulness

Bad replies:

- generic agreement
- dunking
- low-context debate
- self-promotion without relevance
- repeated link insertion

## 8. Cadence Discipline

Rules:

- post when the unit of value is strong
- use stable cadence, not spikes
- cover the first 30-60 minutes after important posts
- prioritize reply quality over posting quantity
- do not fill quota with weak posts

## 9. Experiments

Test one variable at a time:

- single post vs thread
- link in post vs reply
- text vs media
- opening structure
- posting window
- reply timing
- author/account source

Rules:

- define the variable before posting
- compare similar posts
- run multiple attempts before deciding
- keep trust constraints fixed
- retire experiments that earn reach without qualified engagement

## 10. KPI Hierarchy

Primary:

- qualified clicks
- credible replies
- profile clicks
- follows from target audience
- saves/bookmarks
- shares/reposts from credible accounts
- repeat engagement from relevant networks

Secondary:

- impressions
- likes
- follower growth
- broad reposts

Negative:

- not interested
- mutes
- blocks
- reports
- bad-faith replies
- low-trust follower growth

## 11. Prohibited Tactics

Do not:

- rage bait
- engagement farm
- manufacture controversy
- post misleading hooks
- chase broad virality
- spam replies
- duplicate posts
- overuse links
- buy engagement
- enter low-trust networks for reach
- optimize for metrics that damage trust

## Status

Status: Canonical

Owner: GTM / Distribution Operations

Scope: Generic X Algorithm Operating Standard
