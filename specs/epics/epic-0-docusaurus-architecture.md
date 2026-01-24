# Epic 0: Docusaurus 技术架构

## 概述
**Epic ID**: Epic-0  
**标题**: 基于 Docusaurus 的文档站点技术架构  
**状态**: ✅ Done (已完成)  
**优先级**: 基础设施  
**创建日期**: 2026-01-24  
**完成日期**: 2026-01-24

## 目标
建立基于 Docusaurus v2 的现代化静态文档站点，支持 Websoft9 公司手册的内容管理、多语言支持和高效的文档维护工作流。

## 技术架构

### 核心技术栈
- **框架**: Docusaurus v2.4.1
- **运行时**: Node.js >=16.14
- **包管理**: Yarn
- **UI 框架**: React 17.0.2
- **内容格式**: Markdown/MDX
- **主题**: Docusaurus Classic Preset

### 关键特性
1. **内容增强**
   - 标准 Markdown 语法支持
   - MDX 富语法扩展
   - Mermaid 图表渲染（`@docusaurus/theme-mermaid`）

2. **国际化**
   - 默认语言: 中文 (zh)
   - 支持多语言切换
   - i18n 翻译管道

3. **开发体验**
   - 热重载开发服务器
   - 本地预览（端口 3002）
   - 静态站点生成

4. **部署配置**
   - 目标: GitHub Pages
   - 组织: Websoft9
   - 仓库: handbook
   - URL: https://handbook.websoft9.com

### 目录结构
```
/docs           # 文档内容
  /backoffice   # 后勤运营
  /company      # 公司治理
  /martech      # 营销技术
  /operation    # 运营管理
  /people       # 人力资源
  /product      # 产品管理
  /sales        # 销售管理
/src            # 源代码组件
/static         # 静态资源
/_bmad          # BMad Method AI 框架集成
```

### 集成点
- **BMad Method**: AI 驱动的内容生成框架
- **GitHub**: 版本控制和协作编辑
- **Webpack**: 自定义模块解析（Cytoscape 别名配置）

## 技术约束
- Node.js 版本要求 >=16.14
- 链接断开警告模式（非阻断构建）
- 浏览器兼容性: 现代浏览器（>0.5% 市场份额）

## 依赖关系
- 无前置依赖（基础设施 Epic）
- 后续所有内容相关 Epic 依赖此架构

## User Stories

### Story 0.1: Update Docusaurus to Latest Version

**作为**技术负责人  
**我想要**将 Docusaurus 升级到最新稳定版本  
**以便**利用最新功能、安全补丁和性能优化

**验收标准：**
- [x] 检查当前 Docusaurus 版本（v2.4.1）
- [x] 研究最新稳定版本及其重大变更
- [x] 更新 package.json 中的依赖版本
- [x] 执行升级命令并解决依赖冲突
- [x] 验证所有现有功能正常工作（Mermaid、i18n、MDX）
- [x] 测试开发服务器和生产构建
- [x] 更新相关文档反映版本变化

**技术要求：**
- 使用 Yarn 进行包管理
- 遵循 Docusaurus 官方升级指南
- 保持向后兼容性
- 确保 Node.js >=16.14 兼容性

**依赖关系：**
- 无前置依赖
- 基础设施变更可能影响后续内容开发

**状态**: ✅ Done

---

### Story 0.2: Implement Local Search for Docusaurus

**作为**文档用户  
**我想要**在 Websoft9 Handbook 站点中使用本地搜索功能  
**以便**快速找到需要的内容，无需依赖外部服务，并且支持中文搜索

**验收标准：**
- [x] 安装 `@easyops-cn/docusaurus-search-local` 最新稳定版本 (v0.52.2+)
- [x] 在 `docusaurus.config.js` 中正确配置主题
- [x] 启用中英文双语搜索支持 (`language: ["en", "zh"]`)
- [x] 索引所有 docs 文档，不索引 blog，启用哈希缓存
- [x] 搜索功能验证：搜索框、快捷键、中英文搜索、结果高亮
- [x] 开发服务器和生产构建均成功
- [x] 搜索索引文件大小合理 (<2MB)

**技术要求：**
- 使用 `@easyops-cn/docusaurus-search-local` 插件（中文优化）
- 完全离线本地搜索，无需外部服务
- 与 Docusaurus v3.9.2 完全兼容
- 不破坏现有 Mermaid 和 Webpack 配置

**依赖关系：**
- 依赖 Story 0.1（Docusaurus v3.9.2 升级完成）

**状态**: ✅ Done

---

### Story 0.4: Implement Markdown Documentation Validation

**作为**文档维护者  
**我想要**自动验证 Markdown 文档的语法错误、断链和编译兼容性  
**以便**确保所有文档成功编译并提供可靠的用户体验，内容可访问无误

**验收标准：**
- [x] 实现 Markdown 语法检查（markdownlint 或类似工具）
- [x] 验证所有内部链接的正确性（相对路径、锚点链接）
- [x] 检查外部链接的可达性（可选但推荐）
- [x] 确保文档与 Docusaurus 编译兼容（MDX、Mermaid、frontmatter）
- [x] 集成到 CI/CD 工作流（npm 脚本、pre-commit hook 或 GitHub Actions）
- [x] 提供清晰的使用说明和配置文档

**技术要求：**
- 使用 `markdownlint-cli` 进行语法检查
- 使用 `markdown-link-check` 或类似工具验证链接
- 配置规则兼容 Docusaurus/MDX 语法（允许 HTML、JSX、frontmatter）
- 支持中文文档验证（UTF-8 编码）
- 处理 i18n 多语言目录结构
- 生成清晰的错误报告（文件路径、行号、错误类型）

**依赖关系：**
- 依赖 Story 0.1（Docusaurus v3.9.2 升级完成）
- 可与 Story 0.2、0.3 并行实施

**状态**: ✅ Done

---

### Story 0.3: Implement Internationalization (i18n) for Chinese and English

**作为**内容管理员  
**我想要**配置 Docusaurus 站点支持中文简体和英文双语  
**以便**国内员工使用中文，国际团队成员可以切换到英文版本

**验收标准：**
- [x] 在 `docusaurus.config.js` 中配置 i18n：默认 `zh`，支持 `['zh', 'en']`
- [x] 导航栏添加语言下拉切换器
- [x] 创建 `i18n/en/` 目录结构
- [x] 生成并翻译主题和插件的 JSON 文件
- [x] 至少翻译 1-2 个示例文档到英文
- [x] 中英文站点都能成功构建和访问
- [x] 语言切换功能正常工作

**技术要求：**
- 使用 Docusaurus 内置 i18n 系统（无需额外插件）
- 中文简体为默认语言（主要用户群）
- 英文版本支持国际团队成员
- 渐进式翻译策略：先搭建基础设施，逐步翻译内容
- 与本地搜索插件兼容（如已实施 Story 0.2）

**依赖关系：**
- 依赖 Story 0.1（Docusaurus v3.9.2 升级完成）
- 与 Story 0.2（本地搜索）可并行或顺序实施

**状态**: ✅ Done

---

### Story 0.5: Implement Makefile Automation for Project Commands

**作为**开发者/维护者  
**我想要**有一个 Makefile 提供所有常用项目操作的标准化命令  
**以便**团队成员无需记忆复杂的 npm/yarn 命令即可轻松执行任务，且 CI/CD 流程有统一接口

**验收标准：**
- [x] 提供核心开发命令（install, dev/start, build, serve, clean）
- [x] 集成文档验证命令（validate, validate-md, validate-links, validate-quick）
- [x] 支持 BMad Method 工作流（bmad-install, bmad-status, help-bmad）
- [x] 提供部署命令（deploy）
- [x] 实现工具命令（help, check, version）
- [x] 提供清晰的帮助系统（`make help` 显示所有命令及说明）
- [x] 跨平台兼容（Linux/macOS/WSL）

**技术要求：**
- 使用 `.PHONY` 声明非文件目标
- 实现自文档化帮助系统（从注释自动生成）
- 包装 package.json 中的 npm/yarn 脚本
- 提供配置变量（PORT, HOST 等）
- 错误处理和依赖检查
- 与 Story 0.4 验证工具集成
- 简化 BMad 框架安装和使用

**依赖关系：**
- 依赖 Story 0.1（Docusaurus v3.9.2 基础）
- 集成 Story 0.4（验证脚本，可选）
- 独立实现，可与其他 story 并行

**状态**: ✅ Done

---

### Story 0.6: CI/CD Pipeline for Documentation

**作为**团队成员  
**我想要**自动化的持续集成和部署流水线  
**以便**代码合并前自动检测问题，合并后自动发布到生产环境

**验收标准：**
- [x] 创建 `.github/workflows/ci.yml` - PR 触发 CI 检查
- [x] CI 调用 `make validate` 运行所有验证（Markdown 语法、链接检查、构建测试）
- [x] CI 状态检查必须通过才允许合并到 main 分支
- [x] CD 使用 `make build` 生成静态文件并部署到 Cloudflare Pages（基于 `.github/workflows/cd.yml`）
- [x] 工作流运行时间合理（CI < 3分钟）
- [x] 失败时提供清晰的错误信息

**技术要求：**
- **最佳实践**：CI/CD 通过调用 Makefile 命令实现，不在 workflow 中直接写构建逻辑
- 本地环境和 CI 环境行为完全一致（都使用 `make` 命令）
- GitHub Actions 只负责触发时机和环境准备，具体逻辑在 Makefile
- 依赖缓存加速构建（`actions/cache` 缓存 `node_modules`）

**依赖关系：**
- 依赖 Story 0.5（Makefile 自动化）
- 依赖 Story 0.4（验证工具集成）

**状态**: ✅ Done

---

## 验收标准
- [x] Docusaurus 站点可本地运行
- [x] 支持 Markdown 和 MDX 格式
- [x] Mermaid 图表正常渲染
- [x] 多语言切换功能可用
- [x] 静态构建成功生成
- [x] 部署至 GitHub Pages

## 相关文档
- [Docusaurus 官方文档](https://docusaurus.io/)
- [项目 README](../../README.md)
- [配置文件](../../docusaurus.config.js)

---
*维护者: PM Agent (John) & SM Agent (Bob)*  
*创建日期: 2026-01-24*  
*完成日期: 2026-01-24*  
*最后更新: 2026-01-24*
