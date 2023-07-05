
![logo-cn](https://user-images.githubusercontent.com/16741975/117620996-ad499b80-b1a3-11eb-865f-a633e4b7c725.png)

# Handbook

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## How do use it?

```
# Install
git clone https://github.com/Websoft9/handbook
cd handbook
yarn install

# Development 
npm run start -- --host 0.0.0.0  --port 3002
npm run start -- --host 0.0.0.0  --port 3002  --locale en

# Build
yarn build
npm run serve -- --host 0.0.0.0  --port 3002

# Create i18n language
yarn run write-translations -- --locale zh-cn

# Upgrade Docusaurus 
yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest
```


## Markdown

* 在标准 Markdown 基础上，支持 [Mermaid](https://docusaurus.io/zh-CN/docs/markdown-features/diagrams) 来渲染图表
* 部分文档采用 Markdown 富语法（mdx）
