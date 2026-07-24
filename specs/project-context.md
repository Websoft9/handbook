---
project_name: 'handbook'
user_name: 'Websoft9'
date: '2026-07-24'
sections_completed: ['technology_stack', 'language_rules', 'framework_rules', 'testing', 'code_quality', 'workflow', 'critical_rules']
status: 'complete'
rule_count: 28
optimized_for_llm: true
existing_patterns_found: 5
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

- **Runtime:** Node 24+, Yarn 1.x, Docusaurus 3.10.2
- **Core UI:** React 18.3.1, IBM Carbon (`@carbon/react` 1.99.0, `@carbon/styles` 1.65.0)
- **Docs tooling:** MDX 3, Mermaid theme, local search plugin (`@easyops-cn/docusaurus-search-local`)
- **Validation:** `make validate-quick` for local markdown checks, `make validate` for CI, `make build` for production build
- **Deployment:** GitHub Actions to Cloudflare Pages

## Critical Implementation Rules

### Language & Project Rules

- Config files are CommonJS; swizzled components are ES modules.
- Default authoring language is Chinese in `docs/`; English lives under `i18n/en/` and should be updated when behavior changes.
- Use `make`, not raw `yarn` or `npm`.
- Broken links are `warn`, so a successful build does not mean links are clean.

### Framework Rules (Docusaurus)

- This is a docs-only site: `routeBasePath: '/'`, `blog: false`, `trailingSlash: false`.
- Sidebar is filesystem-driven; ordering mostly comes from each folder's `_category_.yml`.
- `src/theme/` uses thin wrapper swizzles around `@theme-original/*`; keep that wrapper pattern for upgrades.
- CSS layering matters: `custom.css` first, then `carbon-custom.css`.
- Search and Mermaid are already wired in config; avoid replacing them unless the task requires it.

### Testing & Validation

- There is no test framework, ESLint, or Prettier here.
- The real quality gate is a successful Docusaurus build.
- CI runs `make validate` on PRs.

### Code Quality & Style

- Match the existing markdown and folder structure instead of normalizing style.
- Keep custom code minimal; most changes should stay in `docs/`, `i18n/en/`, `src/theme/`, or `src/css/`.
- Treat `extract_pdf*.js` as one-off utilities, not part of normal app behavior.

### Development Workflow

- Use `make start` for local preview. Default is port 3002 and locale `zh`; use `make start PORT=3003 LOCALE=en` for English preview.
- CI/CD truth lives in `.github/workflows/`.
- This repo contains both BMad and OpenCode agent systems; do not mix their conventions.

### Critical Don't-Miss Rules

- Do not add broad refactors or unrelated dependency upgrades to content changes.
- Do not enable `future.v4` flags or rename `.md` files just because Docusaurus recommends it.
- If you change navigation, locale behavior, or CSS wrappers, verify both zh and en builds still behave correctly.

---

## Usage Guidelines

**For AI Agents:**

- Read this file before implementing any code
- Follow ALL rules exactly as documented
- When in doubt, prefer the more restrictive option
- Update this file if new patterns emerge

**For Humans:**

- Keep this file lean and focused on agent needs
- Update only when stack, workflow, or recurring agent mistakes change
- Prefer editing or deleting stale rules over appending more rules

Last Updated: 2026-07-24
