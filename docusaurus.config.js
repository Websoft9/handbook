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
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Websoft9', // Usually your GitHub org/user name.
  projectName: 'handbook', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
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
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
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
