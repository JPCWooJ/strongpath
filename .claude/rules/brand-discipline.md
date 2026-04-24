# brand-discipline.md

**Claude Code rule file. Loaded at the start of every session on the `strongpath` repo.**

Enforces copy and language rules from `BRAND.md`. When writing any user-facing string — UI text, email templates, error messages, meta descriptions, alt text, button labels, page copy — apply these rules before committing. Copy that violates these rules must not ship.

Full rules and rationale live in `BRAND.md` (OneDrive). This file is the enforcement surface; `BRAND.md` is the source of truth. If a rule here conflicts with `BRAND.md`, `BRAND.md` wins — flag the conflict to the founder.

---

## 1. Forbidden words in StrongPath's own voice

These words never appear in user-facing copy produced by StrongPath. They appear only inside direct quotations from third parties or inside the italicized book title.

- **"miracle"** — implies guaranteed outcomes. FTC risk.
- **"breakthrough"** — hype word, overused in wellness marketing, undermines the evidence-based positioning.
- **"cure"** — structure-function claim. FDA risk.
- **"hack"** — wellness-influencer register. Wrong audience, wrong authority.
- **"transform"** — vague promise language. Replace with specific, verifiable outcomes.
- **"anti-aging"** — FDA-scrutinized category. StrongPath is about strength, not aging reversal.
- **"fountain of youth"** — cliché that undermines credibility.

**"Reverse" and "reversing"** are special. They appear only inside the italicized book title *Choosing the StrongPath: Reversing the Downward Spiral of Aging*. Never in StrongPath's own voice describing what StrongPath, its products, or its content do. Research claims attach to the book; product claims attach to the product; never mix them.

---

## 2. Hedge every claim

If copy makes a claim about outcomes, benefits, or effects, hedge it. Never use absolute language.

- Use: "research suggests," "studies show," "may help," "is associated with," "can support."
- Never: "cures," "treats," "prevents," "guarantees," "will make you," "reverses."

This applies to body copy, headlines, email subject lines, CTAs, meta descriptions, and alt text. A hedged claim is a defensible claim.

---

## 3. The book/product firewall

The book (*Choosing the StrongPath*, 2018) makes research-backed claims about aging and muscle loss. The StrongPath platform and its products do not make those same claims in their own voice.

- Research citations and outcome claims live in the book context — "the book argues," "the authors found," "research cited in the book shows."
- Product copy describes what the product *is* and *does*, not what outcomes it guarantees.
- When in doubt, attribute the claim to the book, not to StrongPath.

This firewall is why the site can discuss aging, muscle loss, and strength without incurring structure-function claim liability. Violating it collapses the firewall.

---

## 4. Canonical author and book citation format

First mention of the book on any page uses the full canonical format per `BRAND.md` §5:

> *Choosing the StrongPath: Reversing the Downward Spiral of Aging* (Fred Bartlit, Steven Droullard, Dr. Marni Boppart, ScD; 2018). Amazon bestseller in Aging, Weight Training, Exercise, and Longevity.

Subsequent mentions on the same page may abbreviate. Every mention of the book title uses italics.

**Dr. Marni Boppart** is referenced as **"co-author"** only. Her credential is ScD at University of Illinois Urbana-Champaign. She is never called "medical director," "current advisor," "consultant," or any language implying an active operational role with StrongPath. She co-authored the book in 2018; that is the full scope of the public relationship.

---

## 5. Medical disclaimer on health-adjacent pages

Any page containing exercise, supplement, nutrition, or health content includes this disclaimer verbatim:

> *This content is for informational and educational purposes only. It does not constitute medical advice and is not a substitute for professional medical consultation. Always consult your physician before beginning any new exercise or supplement program.*

The disclaimer appears on the page itself, not buried in the footer of the site. On long articles, it appears near the top and again near any specific recommendation.

---

## 6. FTC affiliate disclosure

Any page with affiliate links (Amazon or otherwise) includes an FTC-compliant disclosure above the fold — not in the footer. Use the `<FTCDisclosure />` component from `components/FTCDisclosure.tsx`. See `BEST_PRACTICES.md` §BP-13 for canonical language.

---

## 7. When in doubt

If a copy decision feels ambiguous, stop and flag it. Ask the founder. Copy that is "probably fine" but triggers a mental hesitation is usually the copy that later gets rewritten. The hesitation is the signal.
