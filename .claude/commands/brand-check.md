# /brand-check

Scan the `strongpath` repo for brand-discipline violations in user-facing copy. Report findings. Do not auto-fix — surface hits so the founder can review each one in context.

## What to check

1. **Forbidden words in StrongPath's own voice.** Scan all `.ts`, `.tsx`, `.md`, `.mdx`, and `.json` files (excluding `node_modules/`, `.next/`, `.git/`) for the following words appearing in user-facing strings:
   - `miracle`, `breakthrough`, `cure`, `hack`, `transform`, `anti-aging`, `fountain of youth`.
   - `reverse` and `reversing` — allowed only inside the italicized book title *Choosing the StrongPath: Reversing the Downward Spiral of Aging*. Flag every other occurrence.

2. **Unhedged outcome claims.** Look for absolute language in copy: `cures`, `treats`, `prevents`, `guarantees`, `will make you`, `reverses`. These must be replaced with hedged forms: `research suggests`, `studies show`, `may help`, `is associated with`, `can support`.

3. **Boppart credential misuse.** If `Boppart` appears anywhere, verify the surrounding context refers to her as `co-author` only. Flag any instance that uses `medical director`, `current advisor`, `consultant`, `clinical director`, or similar language implying an active operational role.

4. **Book citation format.** On pages that reference the book, confirm the first mention uses the canonical format per `docs/governance/BRAND.md` §5:
   > *Choosing the StrongPath: Reversing the Downward Spiral of Aging* (Fred Bartlit, Steven Droullard, Dr. Marni Boppart, ScD; 2018). Amazon bestseller in Aging, Weight Training, Exercise, and Longevity.
   Flag the first mention on each page if it deviates.

## How to report

For each finding:
- File path and line number.
- The offending string in context (1-2 lines around the hit).
- Which rule it violates.
- A suggested rewrite (do not commit the rewrite — suggest only).

Group findings by severity: **Blockers** (FTC/FDA risk — unhedged claims, "cure," "treats," "anti-aging"), **High** (forbidden words in our voice, Boppart credential misuse), **Medium** (citation format deviations).

## How to handle zero findings

If the scan comes up clean, say so explicitly. Do not fabricate findings to appear thorough.

## What this command does NOT do

- Does not modify files. Surface-only.
- Does not scan `.md` files in `docs/`, `.claude/`, or root-level governance files — those are internal, not user-facing copy.
- Does not replace human review. A passing `/brand-check` is necessary but not sufficient — the Brand Ambassador workstream still reviews substantive copy.
