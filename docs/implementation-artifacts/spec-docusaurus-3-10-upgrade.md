---
title: '升级 Docusaurus 到 3.10'
type: 'chore'
created: '2026-07-24'
status: 'done'
review_loop_iteration: 0
followup_review_recommended: false
context: []
warnings: []
baseline_revision: 'b1af5b89f2bd61defe063b0885a254261af38a06'
final_revision: '4a7123692d65746130bb91257973ac6ca8c3b1f5'
---

<intent-contract>

## Intent

**Problem:** 项目使用 Docusaurus 3.9.2，需要升级到 3.10.x（最新稳定版 3.10.2）。

**Approach:** 将 `package.json` 中所有 `@docusaurus/*` 包从 3.9.2 批量升级到 3.10.2，同时将 `@docusaurus/module-type-aliases` devDependency 从 2.2.0 对齐到 3.10.2。3.9→3.10 是 semver minor 升级，无 breaking changes。更新 lockfile 并执行完整构建验证。

## Boundaries & Constraints

**Always:**
- 所有 @docusaurus/\* 包锁定在精确版本 3.10.2（无 ^ 前缀）
- `@docusaurus/module-type-aliases` 版本必须与 core 对齐
- 执行 `yarn build` 完整构建验证
- 不启用任何 `future.v4` 标志

**Block If:**
- 构建失败或出现任何类型错误
- Swizzled 主题组件（Footer、Navbar、TOC）出现运行时错误
- 出现未知的配置兼容性问题

**Never:**
- 升级无关依赖（Carbon、React 等）
- 启用 Docusaurus v4 future flags
- 修改 docusaurus.config.js、sidebars.js 或 babel.config.js
- 重命名 .md 文件为 .mdx

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| 干净安装 | `yarn install` 全量安装 | 无错误完成，lockfile 更新 | 检查 yarn.lock 正确生成 |
| 开发服务器 | `yarn start` | Docusaurus 启动无错误 | 检查启动日志 |
| 完整构建 | `yarn build` | 构建成功，生成 build/ 目录 | 检查构建日志和退出码 |
| Markdown 校验 | `yarn validate:md` | 通过 | 检查退出码 |

</intent-contract>

## Code Map

- `package.json` -- Docusaurus 版本声明和构建脚本
- `yarn.lock` -- 由 yarn install 自动更新的依赖锁定文件
- `docusaurus.config.js` -- 核心配置（无需修改，保持不变）
- `babel.config.js` -- Babel 预设（无需修改）
- `sidebars.js` -- 侧边栏生成器（无需修改）
- `src/theme/Footer/index.js` -- Swizzled Footer 包装器
- `src/theme/Navbar/index.tsx` -- Swizzled Navbar 包装器
- `src/theme/TOC/index.tsx` -- Swizzled TOC 包装器
- `src/css/custom.css` -- 自定义 Infima 变量
- `src/css/carbon-custom.css` -- IBM Carbon 设计系统集成

## Tasks & Acceptance

**Execution:**
- [x] `package.json` -- 将 @docusaurus/core、@docusaurus/preset-classic、@docusaurus/theme-mermaid 从 3.9.2 更新为 3.10.2，将 @docusaurus/module-type-aliases 从 2.2.0 更新为 3.10.2 -- 版本升级
- [x] 执行 `yarn install` -- 安装更新的依赖并重新生成 yarn.lock -- 获取新版本
- [x] 执行 `yarn build` -- 完整生产构建 -- 验证无编译/运行时错误

**Acceptance Criteria:**
- Given `package.json` 使用 3.10.2，when `yarn install`，then 所有 @docusaurus 包确认为 3.10.2
- Given 全新安装的 3.10.2，when `yarn build`，then 构建成功退出码为 0，且 build/ 目录已填充
- Given 3.10.2 构建，when 开发服务器启动，then 站点在所有页面路由上（zh 和 en）均正常运行

## Verification

**Commands:**
- `yarn install --frozen-lockfile` -- 预期：无错误
- `yarn build` -- 预期：退出码 0，生成 build/
- `yarn validate:md` -- 预期：退出码 0 或仅有预先存在的 lint 警告
- `npx docusaurus --version` -- 预期：3.10.2

## Review Triage Log

### 2026-07-24 — Review pass
- intent_gap: 0
- bad_spec: 0
- patch: 0
- defer: 6 (low 6)
- reject: 15 (all speculative edge cases not caused by this diff)
- addressed_findings:
  - none
