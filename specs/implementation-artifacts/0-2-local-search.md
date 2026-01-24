# Story 0.2: Implement Local Search for Docusaurus

**Status**: ready-for-dev

---

## Story

As a **文档用户**,  
I want to **在 Websoft9 Handbook 站点中使用本地搜索功能**,  
so that **我可以快速找到需要的内容，无需依赖外部服务，并且支持中文搜索**。

## Acceptance Criteria

1. **插件安装**: 安装 `@easyops-cn/docusaurus-search-local` 最新稳定版本 (v0.52.2+)
2. **配置集成**: 在 `docusaurus.config.js` 中正确配置主题
3. **中文支持**: 启用中英文双语搜索支持 (`language: ["en", "zh"]`)
4. **索引配置**: 
   - 索引所有 docs 文档 (`indexDocs: true`)
   - 不索引 blog (`indexBlog: false` - 当前项目无博客)
   - 启用哈希缓存 (`hashed: true`)
5. **搜索功能验证**:
   - 搜索框出现在导航栏
   - 键盘快捷键 Cmd/Ctrl+K 可唤起搜索
   - 中文搜索词可正常返回结果
   - 英文搜索词可正常返回结果
   - 搜索结果高亮显示
6. **构建测试**: 开发服务器和生产构建均成功
7. **性能验证**: 搜索索引文件大小合理 (<2MB)

## Tasks / Subtasks

- [ ] **Task 1**: 安装搜索插件 (AC: #1)
  - [ ] 运行 `yarn add @easyops-cn/docusaurus-search-local`
  - [ ] 验证版本兼容性 (Docusaurus 3.9.2)
  
- [ ] **Task 2**: 配置 Docusaurus 主题 (AC: #2, #3, #4)
  - [ ] 在 `docusaurus.config.js` 的 `themes` 数组中添加配置
  - [ ] 设置 `language: ["en", "zh"]` 启用中英文支持
  - [ ] 设置 `hashed: true` 启用长期缓存
  - [ ] 配置 `indexDocs: true`, `indexBlog: false`
  - [ ] 设置 `docsRouteBasePath: "/"` (docs-only 模式)
  
- [ ] **Task 3**: 测试搜索功能 (AC: #5)
  - [ ] 启动开发服务器验证搜索框出现
  - [ ] 测试键盘快捷键 (Cmd+K / Ctrl+K)
  - [ ] 搜索中文关键词 (如 "公司", "产品", "人力资源")
  - [ ] 搜索英文关键词 (如 "Docusaurus", "BMad")
  - [ ] 验证搜索结果高亮和链接跳转
  
- [ ] **Task 4**: 构建和性能测试 (AC: #6, #7)
  - [ ] 运行 `yarn build` 验证生产构建成功
  - [ ] 检查生成的搜索索引文件大小
  - [ ] 测试搜索响应速度
  
- [ ] **Task 5**: 可选样式优化
  - [ ] 评估默认样式是否符合品牌风格
  - [ ] 如需要，在 `src/css/custom.css` 中自定义 CSS 变量

## Dev Notes

### Architecture Context

**Current Environment**:
- Framework: Docusaurus v3.9.2 (刚从 v2.4.1 升级)
- React: 18.3.1
- Node.js: >=18.0
- Package Manager: Yarn
- Docs Structure: Docs-only mode (`routeBasePath: "/"`)
- Default Language: 中文 (zh)
- Content Paths: `/docs` 目录下的 7 个业务模块

**Project Characteristics**:
- **内容类型**: 企业内部运营手册，全中文内容为主
- **文档结构**: 扁平化，按业务模块划分 (backoffice, company, martech, operation, people, product, sales)
- **用户场景**: 内部员工快速查找政策、流程、规范
- **无博客**: 项目中没有 blog 目录，无需索引博客内容

### Technical Requirements

**Target Plugin**:
```json
{
  "@easyops-cn/docusaurus-search-local": "^0.52.2"
}
```

**Why This Plugin**:
- ✅ **中文优化**: 专门优化了中文分词和搜索 (基于 nodejieba)
- ✅ **离线搜索**: 完全本地化，无需第三方服务或 API keys
- ✅ **Docusaurus v3 支持**: 官方支持 v3.9.2 (2025-12-01 更新)
- ✅ **免费开源**: MIT 许可，无使用限制
- ✅ **活跃维护**: 874 stars, 29 contributors, 111 releases
- ✅ **TypeScript**: 完整类型支持

**Installation Command**:
```bash
yarn add @easyops-cn/docusaurus-search-local
```

**Configuration (docusaurus.config.js)**:
```javascript
module.exports = {
  // ... existing config
  themes: [
    // ... existing themes (e.g., '@docusaurus/theme-mermaid')
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // 启用哈希缓存以支持长期缓存
        hashed: true,
        
        // 中英文双语支持（针对中文内容优化）
        language: ["en", "zh"],
        
        // 索引配置
        indexDocs: true,      // 索引所有文档
        indexBlog: false,     // 不索引博客（项目无博客）
        indexPages: false,    // 不索引独立页面
        
        // Docs-only 模式配置
        docsRouteBasePath: "/",  // 与 preset-classic 的 docs.routeBasePath 保持一致
        
        // 搜索结果配置
        searchResultLimits: 8,                    // 限制搜索结果数量
        searchResultContextMaxLength: 100,         // 增加上下文长度以更好显示中文
        
        // 高亮配置
        highlightSearchTermsOnTargetPage: true,   // 在目标页面高亮搜索词
        
        // 键盘快捷键（保持默认 Cmd/Ctrl+K）
        searchBarShortcut: true,
        searchBarShortcutKeymap: "mod+k",
        
        // 搜索栏位置
        searchBarPosition: "right",  // 与 GitHub 按钮保持一致
      }),
    ],
  ],
};
```

**Critical Integration Points**:
- **Webpack Config**: 不会与现有 Cytoscape 别名配置冲突
- **Mermaid Theme**: 与 `@docusaurus/theme-mermaid` 共存无问题
- **i18n Config**: 插件会自动识别 `i18n.defaultLocale: 'zh'`

### Library & Framework Requirements

**Dependency Compatibility**:
- Docusaurus: `>= 2.0.0-beta.18` ✅ (我们使用 3.9.2)
- React: `>= 17.0.0` ✅ (我们使用 18.3.1)
- Node.js: `>= 16.14` ✅

**No Breaking Changes**:
- 该插件以 theme 方式集成，不会覆盖或破坏现有配置
- 搜索功能是纯增量式添加

**Build Output**:
- 构建时会生成 `search-index.json` (或 `search-index-{hash}.json` if hashed)
- 文件位于 `build/` 目录
- 预期大小: 500KB - 2MB (取决于文档数量)

### File Structure Requirements

**Files to Modify**:
```
/data/cdl/handbook/
├── docusaurus.config.js          # 添加 themes 配置
├── package.json                  # 自动更新依赖
└── yarn.lock                     # 自动更新锁文件
```

**Files Generated (Build Time)**:
```
/data/cdl/handbook/build/
└── search-index-{hash}.json      # 搜索索引文件（构建时生成）
```

**Files NOT to Touch**:
- `/docs` 目录下的任何内容文件
- `src/css/custom.css` (除非需要自定义样式)
- `sidebars.js`
- `babel.config.js`

### Testing Requirements

**Development Server Test**:
```bash
npm run start -- --host 0.0.0.0 --port 3002

# 验证清单:
# 1. 搜索框出现在导航栏右侧
# 2. 点击搜索框或按 Cmd/Ctrl+K 唤起搜索模态框
# 3. 输入中文关键词（如 "财务"）能返回结果
# 4. 输入英文关键词（如 "BMad"）能返回结果
# 5. 搜索结果可点击跳转
# 6. 目标页面关键词被高亮显示
```

**Production Build Test**:
```bash
yarn build

# 验证清单:
# 1. 构建成功无错误
# 2. 检查 build/ 目录中的 search-index 文件存在
# 3. 搜索索引文件大小合理 (<2MB)
# 4. 运行 `npm run serve` 测试搜索功能
```

**Search Quality Tests**:
```bash
# 测试用例 1: 中文全词匹配
搜索: "公司治理" → 应返回 company/govern.md 相关内容

# 测试用例 2: 中文部分匹配
搜索: "薪酬" → 应返回 people/pay/ 目录相关内容

# 测试用例 3: 英文技术词汇
搜索: "Docusaurus" → 应返回 Epic 0 相关内容

# 测试用例 4: 混合搜索
搜索: "BMad Method" → 应返回相关 BMad 文档

# 测试用例 5: 模糊搜索
搜索: "martech" → 应返回营销技术相关页面
```

### Previous Story Intelligence

**从 Story 0.1 学到的经验**:

1. **MDX v3 严格性**: 
   - Docusaurus 3 使用 MDX v3，对 JSX 语法更严格
   - 需要注意内容中的 `<>` 字符可能被误解析为 JSX 标签
   - 搜索插件索引时应正确处理 MDX 内容

2. **依赖版本管理**:
   - 使用精确版本号以避免意外升级 (`"^0.52.2"` 而非 `"latest"`)
   - 使用 Yarn 而非 npm (项目标准)

3. **配置验证方法**:
   - 修改配置后务必重启开发服务器
   - 使用 `DEBUG=search-local:* yarn build` 可启用调试日志

4. **不要修改不相关的文件**:
   - 只修改必要的配置文件
   - 不要"顺手"调整其他配置

### Latest Technical Information

**Plugin Version: @easyops-cn/docusaurus-search-local v0.52.2** (2025-12-01)

**Recent Updates**:
- ✅ Updated Docusaurus to 3.9.2 (完美匹配我们的版本)
- ✅ Support React 19 (向后兼容 React 18)
- ✅ TypeScript 类型完善
- ✅ 性能优化和 bug 修复

**Key Features for Our Use Case**:
1. **中文分词**: 使用 nodejieba 进行智能中文分词
2. **双语索引**: 可同时索引中英文内容，分别应用不同的分词策略
3. **实时搜索**: 无需后端服务，纯前端搜索引擎
4. **结果高亮**: 自动在目标页面高亮搜索关键词
5. **键盘导航**: 完整的键盘快捷键支持

**Alternative Plugins Considered**:
- ❌ **Algolia DocSearch**: 需要申请，依赖外部服务，中文支持一般
- ❌ **docusaurus-plugin-lunr**: 不支持 Docusaurus v3
- ❌ **docusaurus-lunr-search**: 中文支持较弱
- ✅ **@easyops-cn/docusaurus-search-local**: 最适合我们的需求

**Known Issues & Workarounds**:
- 无已知问题影响我们的配置
- 如遇到 `Cannot mix different versions of joi schemas` 错误，确保使用 v0.52.2+ 版本

### Project Structure Notes

**Alignment with Unified Structure**:
- 插件会自动扫描 `/docs` 目录结构
- 支持我们当前的扁平化模块结构:
  ```
  docs/
  ├── backoffice/
  ├── company/
  ├── martech/
  ├── operation/
  ├── people/
  ├── product/
  └── sales/
  ```
- 搜索结果会显示完整路径，帮助用户定位内容

**No Structural Changes Required**:
- 不需要调整现有文档结构
- 不需要添加额外的元数据
- 插件会自动提取标题、内容、路径作为索引

### References

- 🔥 **[Docusaurus Search Documentation](https://docusaurus.io/docs/search)** - 官方搜索指南
- 🔥 **[@easyops-cn/docusaurus-search-local GitHub](https://github.com/easyops-cn/docusaurus-search-local)** - 插件仓库和文档
- 🔥 **[Live Demo](https://easyops-cn.github.io/docusaurus-search-local/)** - 插件在线演示
- **[Community Resources - Search Plugins](https://docusaurus.io/community/resources#search)** - 社区搜索插件列表
- [Source: Epic 0](../epics/epic-0-docusaurus-architecture.md)
- [Source: Story 0.1](./0-1-update-docusaurus.md)
- [Source: docusaurus.config.js](../../docusaurus.config.js)
- [Source: package.json](../../package.json)

---

## Dev Agent Record

### Agent Model Used
_待填写 - 将由 Dev Agent 在实施时填写_

### Implementation Log
_待填写 - 将由 Dev Agent 在实施时填写_

### Completion Notes
_待填写 - 将由 Dev Agent 在实施时填写_

### Files Modified
_待填写 - 将由 Dev Agent 在实施时填写_

---

**Created**: 2026-01-24  
**Story Key**: 0-2-local-search  
**Epic**: Epic 0 - Docusaurus Technical Architecture  
**Prepared by**: SM Agent (Bob) with Ultimate Context Engine
