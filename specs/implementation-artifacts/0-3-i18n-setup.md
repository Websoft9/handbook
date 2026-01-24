# Story 0.3: Implement Internationalization (i18n) for Chinese and English

**Status**: ready-for-dev

---

## Story

As a **内容管理员**,  
I want to **配置 Docusaurus 站点支持中文简体和英文双语**,  
so that **国内员工可以使用中文查看内容，国际团队成员可以切换到英文版本**。

## Prerequisites

- ✅ **Story 0.1**: Docusaurus v3.9.2 upgrade (REQUIRED)
- ⚪ **Story 0.2**: Local search (OPTIONAL - but will benefit from i18n if implemented)

## Acceptance Criteria

1. **i18n 配置**: 在 `docusaurus.config.js` 中正确配置多语言支持
   - 默认语言: 中文简体 (`zh`)
   - 支持语言: 中文简体 (`zh`)、英文 (`en`)
2. **语言切换器**: 导航栏添加语言下拉菜单
3. **目录结构**: 创建 `i18n/en/` 目录结构
4. **JSON 翻译文件**: 生成主题和插件的 JSON 翻译文件
5. **文档示例翻译**: 至少翻译 1-2 个示例文档到英文（验证流程）
6. **构建验证**: 
   - 中文站点构建成功 (`build/`)
   - 英文站点构建成功 (`build/en/`)
   - 两个语言版本都可访问
7. **语言切换测试**: 用户可以在两种语言之间无缝切换

## Tasks / Subtasks

- [ ] **Task 1**: 配置 i18n 基础设置 (AC: #1)
  - [ ] 修改 `docusaurus.config.js` 中的 `i18n` 配置
  - [ ] 设置 `defaultLocale: 'zh'`
  - [ ] 设置 `locales: ['zh', 'en']`
  - [ ] 配置 `localeConfigs` 指定语言方向和标签
  
- [ ] **Task 2**: 添加语言切换器到导航栏 (AC: #2)
  - [ ] 在 `themeConfig.navbar.items` 中添加 `localeDropdown` 类型项
  - [ ] 设置下拉菜单位置（建议 `position: 'right'`）
  - [ ] 验证语言切换器显示正确
  
- [ ] **Task 3**: 初始化翻译文件结构 (AC: #3, #4)
  - [ ] 运行 `npm run write-translations -- --locale en`
  - [ ] 检查生成的 `i18n/en/` 目录结构
  - [ ] 验证生成的 JSON 文件:
    - `code.json` (React 代码翻译)
    - `docusaurus-theme-classic/navbar.json`
    - `docusaurus-theme-classic/footer.json`
    - `docusaurus-plugin-content-docs/current.json`
  
- [ ] **Task 4**: 翻译主题和导航标签 (AC: #4)
  - [ ] 翻译 `navbar.json` 中的导航项
  - [ ] 翻译 `footer.json` 中的页脚内容
  - [ ] 翻译 `code.json` 中的常用文本标签
  
- [ ] **Task 5**: 创建英文文档示例 (AC: #5)
  - [ ] 创建 `i18n/en/docusaurus-plugin-content-docs/current/` 目录
  - [ ] 复制并翻译 `intro.md` 到英文
  - [ ] 可选：再翻译 1-2 个重要页面（如 company/about.md）
  - [ ] 验证英文版本内容显示正确
  
- [ ] **Task 6**: 测试和验证 (AC: #6, #7)
  - [ ] 启动中文开发服务器: `npm run start`
  - [ ] 启动英文开发服务器: `npm run start -- --locale en`
  - [ ] 测试语言切换器功能
  - [ ] 构建所有语言: `yarn build`
  - [ ] 验证 `build/` 和 `build/en/` 目录存在
  - [ ] 使用 `npm run serve` 测试生产版本
  
- [ ] **Task 7**: 文档和指南
  - [ ] 在 README.md 中添加 i18n 使用说明
  - [ ] 创建翻译贡献指南（如何添加新翻译）
  - [ ] 记录翻译工作流程

## Dev Notes

### Architecture Context

**Current Environment**:
- Framework: Docusaurus v3.9.2
- React: 18.3.1
- Node.js: >=18.0
- Package Manager: Yarn
- Current i18n Config: 单语言（`locales: ['zh']`，仅中文）
- Content: 全中文文档（7 个业务模块）

**Project Characteristics**:
- **主要用户**: 中国团队员工（95%）
- **次要用户**: 国际团队成员、英文用户（5%）
- **内容性质**: 企业内部运营手册
- **翻译策略**: 渐进式翻译，中文优先
- **文档量**: ~100+ 页面（全部翻译工作量大）

**i18n Strategy Decision**:
- 🎯 **阶段 1** (此 Story): 搭建 i18n 基础设施，翻译关键页面
- 🎯 **阶段 2** (未来): 逐步翻译更多内容，可能引入翻译工具
- 🎯 **阶段 3** (未来): 考虑社区贡献或自动翻译辅助

### Technical Requirements

**Docusaurus i18n Configuration**:

```javascript
// docusaurus.config.js
module.exports = {
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    localeConfigs: {
      zh: {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
        calendar: 'gregory',
        path: 'zh',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
    },
  },
  
  themeConfig: {
    navbar: {
      items: [
        // ... existing items
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
  },
};
```

**Key Commands**:

```bash
# 1. 生成英文翻译文件结构
npm run write-translations -- --locale en

# 2. 启动中文站点（默认）
npm run start

# 3. 启动英文站点
npm run start -- --locale en

# 4. 构建所有语言
yarn build

# 5. 构建单一语言
yarn build -- --locale en

# 6. 测试生产构建
npm run serve -- --host 0.0.0.0 --port 3002
```

**Expected Directory Structure**:

```
/data/cdl/handbook/
├── docs/                          # 默认中文文档
│   ├── intro.md
│   ├── backoffice/
│   ├── company/
│   └── ...
├── i18n/
│   └── en/                        # 英文翻译
│       ├── code.json              # React 代码翻译
│       ├── docusaurus-plugin-content-docs/
│       │   └── current/           # 当前版本文档翻译
│       │       ├── intro.md       # 翻译后的介绍页
│       │       ├── company/
│       │       └── ...
│       ├── docusaurus-theme-classic/
│       │   ├── navbar.json        # 导航栏翻译
│       │   └── footer.json        # 页脚翻译
│       └── docusaurus-search-local/  # 搜索插件翻译（仅当 Story 0.2 已实施时生成）
│           └── ...                   # write-translations 会自动检测并生成
└── build/                         # 构建输出
    ├── index.html                 # 中文站点（根路径）
    └── en/                        # 英文站点
        └── index.html
```

### Library & Framework Requirements

**Docusaurus i18n System**:
- ✅ Built-in support (无需额外插件)
- ✅ 与 Docusaurus v3.9.2 完全兼容
- ✅ 支持 React 18
- ✅ 与本地搜索插件兼容 (@easyops-cn/docusaurus-search-local)

**No Additional Dependencies Required**:
- i18n 功能是 Docusaurus 核心内置功能
- 不需要安装额外的包

**Translation File Formats**:
- **Markdown/MDX**: 文档内容整体翻译
- **JSON (Chrome i18n format)**: UI 标签、主题配置翻译
- **YAML/YML**: 插件数据文件翻译（如适用）

### File Structure Requirements

**Files to Modify**:
```
/data/cdl/handbook/
├── docusaurus.config.js          # 添加 i18n 配置和语言切换器
├── README.md                     # 更新说明文档（可选）
```

**Files to Create**:
```
/data/cdl/handbook/
└── i18n/en/                      # 英文翻译目录
    ├── code.json                 # 由 write-translations 生成
    ├── docusaurus-plugin-content-docs/
    │   ├── current.json          # 由 write-translations 生成
    │   └── current/              # 手动创建并翻译
    │       └── intro.md          # 翻译后的文档
    └── docusaurus-theme-classic/
        ├── navbar.json           # 由 write-translations 生成，需手动翻译
        └── footer.json           # 由 write-translations 生成，需手动翻译
```

**Files NOT to Touch**:
- `/docs` 目录（保持中文不变）
- 现有的 Webpack、Babel 配置
- `sidebars.js`（侧边栏结构在两种语言中保持一致）

### Testing Requirements

**Development Testing**:

```bash
# 测试 1: 中文站点（默认）
npm run start -- --host 0.0.0.0 --port 3002
# 访问: http://localhost:3002
# 验证: 内容为中文，语言切换器显示

# 测试 2: 英文站点
npm run start -- --locale en --host 0.0.0.0 --port 3002
# 访问: http://localhost:3002/en
# 验证: 已翻译内容显示英文，未翻译内容回退到中文

# 测试 3: 语言切换
# 在中文页面点击语言切换器 → 切换到英文
# 在英文页面点击语言切换器 → 切换回中文
# 验证: URL 正确变化，内容正确切换
```

**Production Build Testing**:

```bash
# 构建所有语言
yarn build

# 验证构建输出
ls -la build/        # 应包含中文站点文件
ls -la build/en/     # 应包含英文站点文件

# 测试生产构建
npm run serve -- --host 0.0.0.0 --port 3002

# 访问测试:
# - http://localhost:3002        → 中文站点
# - http://localhost:3002/en     → 英文站点
# - 语言切换器功能正常
```

**Translation Quality Tests**:

```bash
# 测试用例 1: 导航栏翻译
中文: "关于" | "公司" | "产品"
英文: "About" | "Company" | "Product"

# 测试用例 2: 页脚翻译
中文: "版权所有"
英文: "Copyright"

# 测试用例 3: 主题默认文本
中文: "下一页" | "上一页" | "编辑此页"
英文: "Next" | "Previous" | "Edit this page"

# 测试用例 4: intro.md 内容
中文: "关于" | "Websoft9 Handbook 是运营公司的指导手册"
英文: "About" | "Websoft9 Handbook is the operational guide"

# 测试用例 5: 搜索功能（如果已实施 Story 0.2）
中文搜索: "公司" → 返回中文结果
英文搜索: "company" → 返回英文结果（已翻译内容）
```

**Fallback Behavior Test**:
```bash
# 验证未翻译内容的回退行为
# 访问英文站点中未翻译的页面
# 预期: 显示原中文内容（Docusaurus 自动回退）
```

### Previous Story Intelligence

**从 Story 0.1 学到的经验**:
1. **配置文件修改**: 
   - 修改配置后必须重启开发服务器
   - 注意 Docusaurus v3 的配置变化
   
2. **MDX v3 兼容性**:
   - 翻译的 Markdown 文件也需遵守 MDX v3 规则
   - 注意 `<>` 字符在英文内容中的使用

**从 Story 0.2 学到的经验** (如果已实施):
1. **搜索插件集成**:
   - `@easyops-cn/docusaurus-search-local` 支持多语言
   - 已配置的 `language: ["en", "zh"]` 会自动支持两种语言搜索
   - 每个语言会有独立的搜索索引

2. **构建优化**:
   - 多语言构建时间会增加（每个语言一个完整 SPA）
   - 考虑 CI/CD 中的缓存策略

### Latest Technical Information

**Docusaurus v3.9.2 i18n Features**:
- ✅ **Built-in i18n system**: 核心功能，无需插件
- ✅ **SEO optimization**: 自动添加 `hreflang` meta 标签
- ✅ **Default translations**: 主题默认文本已有多语言支持
- ✅ **Flexible deployment**: 支持单域名和多域名部署
- ✅ **Hot reload**: 开发时支持热重载翻译文件

**Supported Languages by Default Theme**:
Docusaurus Classic Theme 已内置 70+ 语言的翻译，包括：
- ✅ 简体中文 (`zh-CN`)
- ✅ 英语 (`en`)
- ✅ 繁体中文 (`zh-TW`)
- ✅ 法语、德语、西班牙语等

**Translation Workflow Best Practices**:

1. **阶段式翻译策略** (推荐我们使用):
   ```
   Phase 1: i18n 基础设施 + 关键页面（intro, about）
   Phase 2: 核心模块（company, people, product）
   Phase 3: 其他模块（operation, sales, martech, backoffice）
   Phase 4: 持续更新和维护
   ```

2. **文件组织**:
   - 使用明确的文件夹结构
   - 保持与 `docs/` 相同的目录结构
   - 未翻译文件自动回退到默认语言

3. **版本控制**:
   - 翻译文件纳入 Git 版本控制
   - 可以使用 Git 分支管理不同语言的翻译进度
   - 未来可集成 Crowdin 等翻译平台（阶段 2/3）

**Integration with Existing Features**:

```javascript
// 如果已实施 Story 0.2 (本地搜索)
// @easyops-cn/docusaurus-search-local 配置已兼容 i18n
{
  hashed: true,
  language: ["en", "zh"],  // ✅ 已配置双语支持
  // ... 其他配置
}
// 每个语言会自动生成独立的搜索索引
```

**Common Pitfalls to Avoid**:

1. ❌ **不要**修改 `docs/` 中的原始中文文档
2. ❌ **不要**在 JSON 翻译文件中修改 `description` 字段（仅翻译 `message`）
3. ❌ **不要**翻译 Markdown 文件的 frontmatter 中的 `id`、`slug`、`sidebar_position` 等元数据
4. ❌ **不要**翻译内部链接路径（保持 `./company/about.md` 不变）
5. ✅ **务必**在翻译后测试所有链接是否正常
6. ✅ **务必**保持目录结构与原始文档一致

### Project Structure Notes

**Alignment with Unified Structure**:
- i18n 目录结构遵循 Docusaurus 官方规范
- 英文翻译镜像中文文档的模块结构
- 保持与现有 7 个业务模块的对应关系

**Scalability Considerations**:
- 当前方案支持轻松添加更多语言（如繁体中文、日语等）
- 翻译文件独立管理，便于外包或协作
- 可集成自动翻译工具（如 ChatGPT API）辅助翻译

**No Breaking Changes**:
- i18n 配置完全增量式
- 不影响现有中文内容和功能
- 可以渐进式翻译，无需一次完成所有翻译

### Translation Examples

**Example 1: intro.md (English Translation)**

```markdown
---
sidebar_position: 1
slug: /
---

# About

The Websoft9 Handbook is the operational guide for running the company and is part of our open-source values. This handbook is open to the public, and we welcome your suggestions through [Issues](https://github.com/Websoft9/handbook/issues).

Resources that complement the Handbook include:

- Internal Knowledge Base: Stored in [Enterprise WeChat WeDrive](https://work.weixin.qq.com/wework_admin/loginpage_wx?from=myhome)
- **[Digital Systems and Tools](./product/digtal)**: Supporting core business and data
- Empowerment Resource Library: [Think Tank](./company/resource/thinks) + [SaaS](./company/resource/tools) + [Crowdsourcing Platforms](./company/resource/outsource)

The Handbook is the crystallization of collective wisdom and appropriate management thinking and paradigms, so it needs to evolve with the times and avoid becoming rigid dogma.

Thank you to all contributors who have made this Handbook possible.
```

**Example 2: navbar.json Translation**

```json
{
  "title": {
    "message": "Websoft9 Handbook",
    "description": "The title in the navbar"
  },
  "item.label.提建议": {
    "message": "Suggestions",
    "description": "Navbar item with label 提建议"
  },
  "item.label.GitHub": {
    "message": "GitHub",
    "description": "Navbar item with label GitHub"
  }
}
```

### References

- 🔥 **[Docusaurus i18n Introduction](https://docusaurus.io/docs/i18n/introduction)** - 官方 i18n 介绍
- 🔥 **[Docusaurus i18n Tutorial](https://docusaurus.io/docs/i18n/tutorial)** - 详细配置教程
- 🔥 **[i18n Configuration API](https://docusaurus.io/docs/api/docusaurus-config#i18n)** - 配置参考
- **[Default Theme Translations](https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-translations/locales)** - 主题默认翻译
- **[Using Git for i18n](https://docusaurus.io/docs/i18n/git)** - Git 管理翻译流程
- **[Crowdin Integration](https://docusaurus.io/docs/i18n/crowdin)** - Crowdin 翻译平台集成（未来参考）
- [Source: Epic 0](../epics/epic-0-docusaurus-architecture.md)
- [Source: Story 0.1](./0-1-update-docusaurus.md)
- [Source: Story 0.2](./0-2-local-search.md)
- [Source: docusaurus.config.js](../../docusaurus.config.js)
- [Source: docs/intro.md](../../docs/intro.md)

---

## Dev Agent Record

### Agent Model Used
Claude Sonnet 4.5

### Implementation Log

**Date**: 2026-01-24

**Tasks Completed**:

1. **Task 1: 配置 i18n 基础设置** ✅
   - Modified `docusaurus.config.js` to add i18n configuration
   - Set `defaultLocale: 'zh'` and `locales: ['zh', 'en']`
   - Added `localeConfigs` for both Chinese and English

2. **Task 2: 添加语言切换器到导航栏** ✅
   - Added `localeDropdown` type item to `navbar.items`
   - Positioned at right side of navigation bar

3. **Task 3: 初始化翻译文件结构** ✅
   - Executed `npm run write-translations -- --locale en`
   - Generated translation files:
     - 82 translations in `code.json`
     - 4 translations in `navbar.json`
     - 14 translations in `footer.json`
     - 26 translations in `current.json`

4. **Task 4: 翻译主题和导航标签** ✅
   - Translated `navbar.json`: logo alt, 提建议 → Suggestions
   - Translated `footer.json`: 
     - Section titles: 我们的网站 → Our Websites, 效率工具 → Tools, 商业合作 → Business
     - Link labels: 官网 → Website, 支持与文档 → Support & Docs, etc.
     - Copyright notice translated

5. **Task 5: 创建英文文档示例** ✅
   - Created `i18n/en/docusaurus-plugin-content-docs/current/intro.md`
   - Created `i18n/en/docusaurus-plugin-content-docs/current/company/about.md`
   - Both documents fully translated with proper frontmatter

6. **Task 6: 测试和验证** ✅
   - Built all languages successfully: `yarn build`
   - Verified build outputs:
     - Chinese site: `build/` ✓
     - English site: `build/en/` ✓
   - Both language versions accessible
   - Build completed in 207.03s with only pre-existing broken link warnings

7. **Task 7: 文档和指南** ✅
   - Updated README.md with comprehensive i18n documentation:
     - Added i18n commands section with clear examples
     - Added "Internationalization (i18n)" section with:
       - Supported languages list
       - Directory structure documentation
       - Translation workflow guide
       - Language switching behavior

### Completion Notes

**All Acceptance Criteria Met**:
- ✅ AC #1: i18n configuration correctly added to `docusaurus.config.js`
- ✅ AC #2: Language switcher added to navigation bar
- ✅ AC #3: `i18n/en/` directory structure created
- ✅ AC #4: JSON translation files generated and translated
- ✅ AC #5: Sample documents translated (intro.md, company/about.md)
- ✅ AC #6: Build verification passed - both `build/` and `build/en/` exist
- ✅ AC #7: Language switching available via dropdown

**Quality Checks**:
- Build successful for both languages
- No new errors introduced (only pre-existing broken anchor warnings)
- Translation files properly formatted
- Documentation structure maintained in English version
- README.md comprehensively updated with i18n usage guide

**Translation Coverage**:
- UI elements: 100% (navbar, footer, code.json)
- Documentation: 2 sample pages translated as required
- Fallback behavior: Untranslated content correctly falls back to Chinese

**Known Warnings** (Pre-existing, not introduced by this story):
- Broken anchors in `/backoffice/legal/tob` and `/people/recruiment`
- These warnings existed before i18n implementation

### Files Modified

**Configuration Files**:
- `/data/cdl/handbook/docusaurus.config.js` - Added i18n configuration and locale dropdown

**Translation Files Created**:
- `/data/cdl/handbook/i18n/en/code.json` - Generated by write-translations
- `/data/cdl/handbook/i18n/en/docusaurus-theme-classic/navbar.json` - Generated and translated
- `/data/cdl/handbook/i18n/en/docusaurus-theme-classic/footer.json` - Generated and translated
- `/data/cdl/handbook/i18n/en/docusaurus-plugin-content-docs/current.json` - Generated by write-translations
- `/data/cdl/handbook/i18n/en/docusaurus-plugin-content-docs/current/intro.md` - Translated
- `/data/cdl/handbook/i18n/en/docusaurus-plugin-content-docs/current/company/about.md` - Translated

**Documentation Files**:
- `/data/cdl/handbook/README.md` - Added i18n usage documentation

**Build Outputs**:
- `/data/cdl/handbook/build/` - Chinese site (root)
- `/data/cdl/handbook/build/en/` - English site

**Total Files Modified**: 1
**Total Files Created**: 6 (+ build outputs)

---

**Created**: 2026-01-24  
**Story Key**: 0-3-i18n-setup  
**Epic**: Epic 0 - Docusaurus Technical Architecture  
**Prepared by**: SM Agent (Bob) with Ultimate Context Engine
