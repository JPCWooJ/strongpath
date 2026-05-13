# agent-os/

Operational reference files for the JCVC portfolio and StrongPath vertical.

This directory is not the active governance authority. StrongPath governance now lives in `docs/governance/`. When `agent-os/` conflicts with `docs/governance/`, `docs/governance/` wins.

## Structure

```
portfolio/                   Portfolio-tier files (apply to every vertical)
  ABOUT_ME.md
  ACTIVE_VERTICALS.md
  AGENT_RULES.md               Legacy portfolio context; not active StrongPath authority
  BEST_PRACTICES.md            Active operational reference
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
    CONTENT_PLAN.md            Active operational reference
    PUBLISHING_PLAN.md
    PRODUCT_CONCEPTS_BACKLOG.md

  operations/                Chief of Staff and CTO operational files
    CODE_BACKLOG.md            Active operational reference
    WORKSTREAM_CTO.md          Active operational reference
```

## How agents use this

- **Claude Code sessions** read `docs/governance/` first.
- **Operational references** in this directory may inform backlog, content, and workstream context.
- **Updates** to active governance belong in `docs/governance/`.

## Migrated

Earlier governance was migrated here from OneDrive on 2026-05-04. That governance has since been normalized into `docs/governance/`.

Future portfolio structure decisions should be made against `docs/governance/` first.
