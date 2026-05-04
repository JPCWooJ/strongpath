# agent-os/

Canonical governance files for the JCVC portfolio and StrongPath vertical agents.

This directory is the source of truth. Drive and OneDrive copies are deprecated. Claude.ai project folder copies are caches — when they disagree with this directory, this directory wins.

## Structure

```
portfolio/                   Portfolio-tier files (apply to every vertical)
  ABOUT_ME.md
  ACTIVE_VERTICALS.md
  AGENT_RULES.md
  BEST_PRACTICES.md
  COMMANDS_BACKLOG.md

strongpath/
  governance/                Tier 3 vertical governance
    PROJECT_INSTRUCTIONS.md  Read this first in every chat
    WORKSTREAM_STATUS.md
    STACK.md
    METRICS.md

  brand/                     Brand Ambassador outputs
    BRAND.md
    PERSONAS.md
    brand-references.md

  seo/                       SEO Strategist outputs
    CONTENT_PLAN.md
    PUBLISHING_PLAN.md
    PRODUCT_CONCEPTS_BACKLOG.md

  operations/                Chief of Staff and CTO operational files
    CODE_BACKLOG.md
    WORKSTREAM_CTO.md
```

## How agents use this

- **Claude Code sessions** read directly from this directory in the working tree.
- **Claude.ai workstream chats** read from the project folder cache; refresh from this directory when canonical files change.
- **Updates** are made by the responsible workstream (Brand Ambassador updates `brand/`, SEO updates `seo/`, etc.), committed with a clear message, and pushed to `main`.

## Migrated

Migrated from OneDrive `JCVC/StrongPath/` on 2026-05-04. OneDrive copies are stale.

When the JCVC portfolio adds Vertical 2, `portfolio/` files stay here, and a sibling `vertical2/` folder is added next to `strongpath/`. Or `agent-os/` graduates to its own repo at that point — decision deferred until then.
