# agent-os/

Legacy context and operational reference files for the JCVC portfolio and StrongPath vertical.

This directory is not the active governance authority. StrongPath governance now lives in `docs/governance/`. When `agent-os/` conflicts with `docs/governance/`, `docs/governance/` wins.

## Structure

```
portfolio/                   Portfolio-tier files (apply to every vertical)
  ABOUT_ME.md
  ACTIVE_VERTICALS.md
  AGENT_RULES.md               Deprecated redirect to docs/governance/
  BEST_PRACTICES.md            Active operational reference
  COMMANDS_BACKLOG.md

strongpath/
  seo/                       SEO Strategist outputs
    CONTENT_PLAN.md            Active operational reference

  operations/                Chief of Staff and CTO operational files
    CODE_BACKLOG.md            Active operational reference

  brand/
    brand-references.md        Supporting reference, not active governance
```

## How agents use this

- **Claude Code sessions** read `docs/governance/` first.
- **Operational references** in this directory may inform backlog, content, and portfolio context.
- **Updates** to active governance belong in `docs/governance/`.

## Migrated

Earlier governance was migrated here from OneDrive on 2026-05-04. That governance has since been normalized into `docs/governance/`, archived, or replaced by operational references.

Future portfolio structure decisions should be made against `docs/governance/` first.
