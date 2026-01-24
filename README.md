
![logo-cn](./static/img/websoft9.svg)

# Handbook

This website is built using [Docusaurus v3.9.2](https://docusaurus.io/), a modern static website generator.

## Requirements

- Node.js >= 18.0
- Yarn 1.22+
- Platform: Linux or macOS (Windows users must use WSL2)

## Quick Start (Using Makefile - Recommended)

The project includes a Makefile for simplified command execution:

```bash
# First-time setup
git clone https://github.com/Websoft9/handbook
cd handbook
make check-versions  # Verify system requirements
make install         # Install dependencies

# Development
make start                        # Start dev server (default: port 3002, locale zh)
make start PORT=3003 LOCALE=en    # Custom port and locale

# Validation
make validate-quick   # Fast validation before commit
make validate-md      # Markdown linting only
make validate         # Full validation (markdown + build)

# Production
make build           # Build production site
make serve           # Serve production site locally

# Utilities
make clean           # Clean build artifacts
make check           # Comprehensive health check
make version         # Show version information
make help            # Show all available commands
```

## Manual Commands (Using Yarn/NPM directly)

```
# Install
git clone https://github.com/Websoft9/handbook
cd handbook
yarn install

# Development 
npm run start -- -h 0.0.0.0 -p 3002          # Start Chinese site (default)
npm run start -- -h 0.0.0.0 -p 3002 -l en     # Start English site

# Build
yarn build                                    # Build all languages
npm run serve -- -h 0.0.0.0 -p 3002          # Serve production site

# Internationalization (i18n)
yarn run write-translations -- --locale en    # Generate English translation files
# Translation files will be created in: i18n/en/
# - docusaurus-theme-classic/: UI translations (navbar, footer)
# - docusaurus-plugin-content-docs/current/: Document translations
# - code.json: React component translations

# Upgrade Docusaurus 
yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest
```

## Documentation Validation

The project includes automated validation tools to ensure documentation quality:


### What Gets Validated

1. **Markdown Linting** (`yarn validate:md`)
   - Checks basic Markdown syntax
   - Ensures consistent formatting
   - Validates code block formatting
   - Configuration: `.markdownlint.json`

2. **Build Validation** (`yarn validate:build`)
   - Verifies all internal links work correctly
   - Validates MDX syntax compatibility
   - Checks frontmatter YAML structure
   - Ensures Mermaid diagrams are valid
   - Tests complete Docusaurus build process

### Configuration Files

- `.markdownlint.json` - Markdown linting rules (relaxed for existing content)
- `.markdown-link-check.json` - Link validation configuration

### Common Issues and Fixes

**Issue: Broken internal links**
- Fix: Update relative paths to match actual file locations
- Example: `./wrong-path` → `./correct-path`

**Issue: Invalid MDX syntax**
- Fix: Ensure JSX components are properly closed
- Fix: Check for unescaped special characters in JSX context

**Issue: Frontmatter errors**
- Fix: Ensure YAML frontmatter is valid
- Fix: Check for proper indentation and quotes

### Best Practices

1. Run `make validate-quick` before committing changes
2. Run `make validate` before pushing to ensure full compatibility
3. Fix any errors reported by validation tools
4. Broken link warnings (not errors) can be addressed gradually

## Internationalization (i18n)

The site supports multiple languages using Docusaurus built-in i18n features:

**Supported Languages:**
- Chinese (Simplified) - `zh` (default)
- English - `en`

**Directory Structure:**
```
docs/                          # Default language (Chinese) documents
i18n/en/                       # English translations
├── code.json                  # React component translations
├── docusaurus-theme-classic/
│   ├── navbar.json           # Navigation bar translations
│   └── footer.json           # Footer translations
└── docusaurus-plugin-content-docs/current/
    ├── intro.md              # Translated documents
    └── company/about.md
```

**Adding New Translations:**
1. Generate translation files: `yarn run write-translations -- --locale en`
2. Translate JSON files in `i18n/en/docusaurus-theme-classic/`
3. Create translated markdown files in `i18n/en/docusaurus-plugin-content-docs/current/`
4. Build and test: `yarn build`

**Language Switching:**
- Users can switch languages using the dropdown in the navigation bar
- URLs: Chinese at `/`, English at `/en/`
- Untranslated content automatically falls back to Chinese

## Markdown

* 在标准 Markdown 基础上，支持 [Mermaid](https://docusaurus.io/zh-CN/docs/markdown-features/diagrams) 来渲染图表
* 部分文档采用 Markdown 富语法（mdx）
