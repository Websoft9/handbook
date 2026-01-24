
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
npm run start -- -h 0.0.0.0 -p 3002
npm run start -- -h 0.0.0.0 -p 3002 -l en

# Build
yarn build
npm run serve -- -h 0.0.0.0 -p 3002

# Create i18n language
yarn run write-translations -- --locale zh-cn

# Upgrade Docusaurus 
yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest
```

## Documentation Validation

The project includes automated validation tools to ensure documentation quality:

### Available Validation Commands

```bash
# Validate Markdown syntax and formatting
yarn validate:md

# Validate documentation build (checks links, MDX syntax, frontmatter)
yarn validate:build

# Run quick validation (Markdown only)
yarn validate:quick

# Run all validations (Markdown + Build)
yarn validate:all
```

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

1. Run `yarn validate:quick` before committing changes
2. Run `yarn validate:all` before pushing to ensure full compatibility
3. Fix any errors reported by validation tools
4. Broken link warnings (not errors) can be addressed gradually

## Markdown

* 在标准 Markdown 基础上，支持 [Mermaid](https://docusaurus.io/zh-CN/docs/markdown-features/diagrams) 来渲染图表
* 部分文档采用 Markdown 富语法（mdx）
