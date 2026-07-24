- source_spec: `docs/implementation-artifacts/spec-docusaurus-3-10-upgrade.md`
  summary: `prism-react-renderer` still at v1.3.5 — Docusaurus v3 requires v2.0+ (imports use v1 path `themes/github`)
  evidence: `package.json` line 30 declares `"prism-react-renderer": "^1.3.5"`, `docusaurus.config.js` uses v1 import path

- source_spec: `docs/implementation-artifacts/spec-docusaurus-3-10-upgrade.md`
  summary: Node.js `engines` field declares `>=16.14` — Docusaurus 3.9+ requires Node >= 20.0
  evidence: `package.json` line 52 `"node": ">=16.14"`

- source_spec: `docs/implementation-artifacts/spec-docusaurus-3-10-upgrade.md`
  summary: `@docusaurus/types` absent from devDependencies but imported by swizzled TypeScript components
  evidence: `src/theme/Navbar/index.tsx` and `src/theme/TOC/index.tsx` import from `@docusaurus/types`

- source_spec: `docs/implementation-artifacts/spec-docusaurus-3-10-upgrade.md`
  summary: No `tsconfig.json` exists despite TypeScript `.tsx` theme components
  evidence: `src/theme/Navbar/index.tsx`, `src/theme/TOC/index.tsx`

- source_spec: `docs/implementation-artifacts/spec-docusaurus-3-10-upgrade.md`
  summary: `markdown.mermaid: true` alongside `@docusaurus/theme-mermaid` theme may cause double-registration
  evidence: `docusaurus.config.js` has both `markdown.mermaid: true` and `@docusaurus/theme-mermaid` in themes array

- source_spec: `docs/implementation-artifacts/spec-docusaurus-3-10-upgrade.md`
  summary: `@docusaurus/module-type-aliases` was previously pinned to 2.2.0 (now corrected to 3.10.2) — confirmed no client code had stale v2 type imports
  evidence: `package.json` devDependencies was `"@docusaurus/module-type-aliases": "2.2.0"` before the fix
