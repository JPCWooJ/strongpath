# /affiliate-tag-audit

Audit every Amazon link in the `strongpath` repo. Confirm each carries the canonical Amazon Associates tag. Report misses. Do not auto-fix — surface hits so the founder can review each one.

## The canonical tag

**StrongPath Amazon Associates tag: `stron02-20`.**

Every Amazon link on the StrongPath site must include this tag as a URL parameter. Missing tag = lost affiliate revenue. Wrong tag = revenue attributed to someone else's account.

Valid tag formats in a URL:
- `?tag=stron02-20` (first parameter)
- `&tag=stron02-20` (subsequent parameter)

## What to check

1. **Find every Amazon link.** Run `grep -rn "amazon\.com" . --include="*.ts" --include="*.tsx" --include="*.md" --include="*.mdx" --include="*.json" --exclude-dir=node_modules --exclude-dir=.next --exclude-dir=.git`.

2. **For each hit, verify the tag.** A valid hit contains `tag=stron02-20` as a URL parameter. Flag any Amazon link that:
   - Is missing a tag parameter entirely.
   - Uses a different tag value (e.g., `tag=strongpath-20`, `tag=brandname-20`, `tag=<anything else>`).
   - Has the tag misformatted (typo, trailing whitespace, extra characters).

3. **Check for the `<AmazonLink />` component.** If `components/AmazonLink.tsx` exists, confirm the tag is hardcoded inside it (not passed as a prop). If Amazon links exist anywhere as raw `<a href="amazon.com...">` tags instead of going through `<AmazonLink />`, flag those as architecture violations. `agent-os/portfolio/BEST_PRACTICES.md` is an active operational reference; `docs/governance/` wins on conflicts.

4. **Check for FTC disclosure on affiliate pages.** For each page that contains an Amazon link, confirm an FTC affiliate disclosure appears on that page. The disclosure should use the `<FTCDisclosure />` component (per P0-05 in the backlog). Disclosure placement has an unresolved policy conflict between older above-the-fold guidance and founder review direction favoring restrained footer treatment; flag placement questions before changing implementation.

## How to report

Structure the report as three sections:

**Section 1 — Tag violations.** Every Amazon link missing the tag or using a wrong tag. Format: file path, line number, offending URL, what's wrong, suggested fix.

**Section 2 — Architecture violations.** Every raw Amazon link that should go through `<AmazonLink />`. Same format.

**Section 3 — FTC disclosure gaps.** Every page with Amazon links but no above-the-fold FTC disclosure. Format: page route, what's missing.

If any section is empty, state that explicitly ("No tag violations found.").

## What this command does NOT do

- Does not modify files. Surface-only.
- Does not verify that the `stron02-20` tag is actually registered to this project in Amazon Associates — that's an account-level check the founder does in the Amazon Associates dashboard.
- Does not check non-Amazon affiliate links (if other affiliate programs are added later, this command will need updating).
