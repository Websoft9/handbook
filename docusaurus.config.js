// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Websoft9 Handbook',
  tagline: '共享创造力',
  url: 'https://handbook.websoft9.com',
  baseUrl: '/',
  onBrokenLinks: 'warn', 
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: [
    '@docusaurus/theme-mermaid',
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
        
        // 搜索栏位置
        searchBarPosition: "right",  // 与 GitHub 按钮保持一致
      }),
    ],
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Websoft9', // Usually your GitHub org/user name.
  projectName: 'handbook', // Usually your repo name.

  plugins: [
  function customWebpackConfigPlugin() {
    return {
      name: 'custom-webpack-config',
      configureWebpack() {
        return {
          resolve: {
            alias: {
              'cytoscape/dist/cytoscape.umd.js': require.resolve('cytoscape/dist/cytoscape.cjs.js'),
              'cytoscape/dist/cytoscape.cjs.js': require.resolve('cytoscape/dist/cytoscape.cjs.js'),
            },
            fallback: {
              'cytoscape': require.resolve('cytoscape'),
            }
          },
        };
      },
    };
  },
],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Websoft9/handbook/tree/main/',
        },
        blog: false,   
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Handbook',
        logo: {
          alt: 'Websoft9 公司运作指南',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/Websoft9/handbook/issues',
            label: '提建议',
            position: 'right',
          },
          {
            href: 'https://github.com/Websoft9/handbook',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '我们的网站',
            items: [
              {
                label: '官网',
                href: 'https://www.websoft9.com',
              },
              {
                label: '支持与文档',
                href: 'https://support.websoft9.com',
              },
              {
                label: '云市场',
                href: 'https://support.websoft9.com/docs/install/cloud',
              },
              {
                label: 'Github',
                href: 'https://https://github.com/Websoft9',
              },
              {
                label: '博客与资源',
                href: 'https://www.websoft9.com/resources',
              },

            ], 
          },
          {
            title: '效率工具',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: '商业合作',
            items: [
              {
                label: '软件分发',
                href:  'https://www.websoft9.com/services/business-process-outsourcing/cloud-distribution-for-isv',
              },
              {
                label: '部署应用',
                href: 'https://www.websoft9.com/apps',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 网久软件 备案：湘ICP备16009117号`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }, 
 
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4
      },
    }), 
};

module.exports = config;

