# Copilot Instructions for Websoft9 Handbook

## Project Overview
This is a Docusaurus v2 documentation site for the Websoft9 company handbook, managed by the BMad Method AI agent framework. The site contains operational guides for various business functions (backoffice, company, martech, operation, people, product, sales) and is localized in Chinese.

## Architecture
- **Frontend**: Docusaurus static site generator with Mermaid diagram support
- **Content Management**: BMad Method framework generates documentation in `docs/` directory
- **Modules**: Core orchestration (`_bmad/core/`), Builder (`_bmad/bmb/`), Management (`_bmad/bmm/`), Creative Intelligence (`_bmad/cis/`)
- **Configuration**: YAML configs in `_bmad/` modules define agent behaviors, languages, and output paths

## Key Workflows
- **Setup**: Run `npx bmad-method@alpha install` to initialize the BMad framework
- **Development**: `npm run start -- --host 0.0.0.0 --port 3002` for local development
- **Build**: `yarn build` to generate static site
- **Content Generation**: BMad agents output to `docs/` (e.g., BMB creations to `docs/bmb-creations/`)
- **Agent Execution**: Use BMad Master agent (`_bmad/core/agents/bmad-master.md`) for orchestration

## Conventions
- **Languages**: Agent communication in Chinese (`communication_language: Chinese`), documentation output in English (`document_output_language: English`)
- **Agent Structure**: Agents defined in `.md` files with XML activation steps, persona, and menu systems
- **File Patterns**: Configs use `{project-root}` placeholders (e.g., `output_folder: "{project-root}/docs"`)
- **Localization**: Site defaults to `zh` locale, supports Mermaid in markdown
- **Dependencies**: Managed via Yarn, Node >=16.14 required

## Examples
- **Agent Activation**: Load `_bmad/core/config.yaml` immediately, set session variables like `{user_name}`, `{communication_language}`
- **Menu Handling**: Present numbered lists, execute on user selection (e.g., `[MH] Redisplay Menu Help`)
- **Content Output**: Agents generate structured markdown with frontmatter in designated output folders

## Integration Points
- **GitHub**: Edit links point to `https://github.com/Websoft9/handbook/tree/main/`
- **External Tools**: BMad Method integrates with GitHub Copilot for agent assistance
- **Deployment**: Configured for GitHub Pages under Websoft9 organization</content>
<parameter name="filePath">/data/cdl/handbook/.github/copilot-instructions.md