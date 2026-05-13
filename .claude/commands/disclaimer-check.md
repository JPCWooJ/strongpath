# /disclaimer-check

Audit compliance-critical disclosures across the `strongpath` repo. Verify the medical disclaimer appears on health-adjacent pages and the FTC affiliate disclosure appears on pages with affiliate links. Report misses. Do not auto-fix.

## What to check

### 1. Medical disclaimer on health-adjacent pages

The canonical medical disclaimer text lives in `docs/governance/BRAND.md` and is embedded in `CLAUDE.md`:

> *This content is for informational and educational purposes only. It does not constitute medical advice and is not a substitute for professional medical consultation. Always consult your physician before beginning any new exercise or supplement program.*

**Pages that require this disclaimer:** any page in `app/(marketing)/blog/`, `app/(marketing)/programs/`, `app/(marketing)/shop/`, or any page whose content covers exercise, supplements, nutrition, muscle loss, strength, recovery, aging, or other health-adjacent topics.

**What to verify:**
- The disclaimer text is present on the page (verbatim or fetched from a shared component).
- On long articles, the disclaimer appears near the top of the content area — not only in the footer.
- If the disclaimer lives in a shared component (e.g., `<MedicalDisclaimer />`), confirm the component is imported and rendered on every health-adjacent page.

**What to flag:**
- Pages that cover health content but have no disclaimer at all.
- Pages where the disclaimer appears only in the site-wide footer, not in the content area.
- Pages where the disclaimer text has been modified or paraphrased (it must appear verbatim).

### 2. FTC affiliate disclosure on pages with affiliate links

Any page containing Amazon affiliate links (or any other affiliate links) must include an FTC-compliant disclosure. Use the `<FTCDisclosure />` component from `components/FTCDisclosure.tsx`. Disclosure placement has an unresolved policy conflict between older above-the-fold guidance and founder review direction favoring restrained footer treatment; flag placement questions before changing implementation.

**What to verify:**
- Every page containing an Amazon link (detected via `grep` for `amazon.com`) has `<FTCDisclosure />` rendered on that page.
- The `<FTCDisclosure />` component is rendered on affiliate-link pages.

**What to flag:**
- Pages with affiliate links but no `<FTCDisclosure />` rendered.
- Pages where disclosure placement appears inconsistent with the latest founder direction or active governance.

## How to report

Structure the report as two sections:

**Section 1 — Medical disclaimer gaps.** For each miss: page route, what's missing (no disclaimer / footer-only / text modified), suggested fix.

**Section 2 — FTC affiliate disclosure gaps.** For each miss: page route, what's missing (no disclosure component / below-the-fold placement / footer-only), suggested fix.

If a section is empty, state that explicitly.

## What this command does NOT do

- Does not modify files. Surface-only.
- Does not legally verify the disclaimer text meets all FTC or FDA requirements — that's a one-time legal review the founder arranges separately. This command enforces that the approved text appears where required.
- Does not check blog posts' *content* for claims compliance — that's `/brand-check` and the `ftc-fda-claim-review` skill.
