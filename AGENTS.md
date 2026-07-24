# AGENTS.md — Websoft9 Handbook

Docusaurus 3.10.2 docs site. Deploy target: Cloudflare Pages at `https://handbook.websoft9.com`.

- Use `make`, not raw `yarn`/`npm`
- `make start` defaults to port `3002` and locale `zh`; use `make start PORT=3003 LOCALE=en` for English preview
- `make validate-quick` is the fast local check; `make validate` is the real gate used by CI
- There is no test framework, ESLint, or Prettier here; successful Docusaurus build is the real verification step
- Broken links are `warn`, so build success does not mean links are clean
- `.markdownlint.json` disables most markdownlint rules; do not assume strict markdown formatting
- Main content lives in `docs/`; default authoring locale is Chinese
- English translations live in `i18n/en/`
- Sidebar is filesystem-driven via `sidebars.js`; ordering mostly comes from each folder's `_category_.yml`
- `src/theme/` contains thin theme wrappers; this repo is mostly content, not app code
- Search is local via `@easyops-cn/docusaurus-search-local` with `en` + `zh`
- This repo has two agent systems: BMad in `_bmad/` and OpenCode in `.opencode/` plus `.agents/skills/`; do not mix their conventions
- CI/CD truth is in `.github/workflows/`: PRs run validation, `main` deploys to Cloudflare Pages
- `extract_pdf*.js` are one-off utilities, not part of normal build or validation
