---
sidebar_position: 1
---

# 商品表现力

商品的表现力主要集中在商品的信息、规格和定价等几个方面，其中商品信息是客户与我们的最主要接触面：

* 从公司全局角度看：提高订单量，提高订单单价，降低客户错误购买率
* 从运营管理角度看：提高商品被发现几率，提高用户阅读量，提高用户点击订阅意愿

## 通用原则

如下的通用原则至关重要：

### 术语

* 商品：云市场中具有单独页面产品信息体，有的云称之为 Offer
* 规格：又被称之为 SKU 或 发行版，它是商品为满足用户不同用户的需求而派生的子集，例如：MySQL 5.6
* 版本：它是开发者的角度考虑，与 SKU 不是一个概念，例如： MySQL 5.6.20

### 合规要求

在国际云市场上，合规性是首要准则，不可以出现任何与合规性冲突的内容。合规性主要包括：

- 开源License
- 商标
- 广告法
- 隐私策略
- 用户许可协议
- 特殊禁令（例如：美国的实体清单）

### 易维护

易维护可以降低成本，也可以减少错误。这个方面的考量有：

* 不可修改的**固定字段**要慎重，尽快保证它可以适应各种变化
* 商品详情中组件的版本号要精简，保证在更新 SKU 时它不需更改

### 平台内搜索

平台内的客户会通过搜索找到我们的产品，因此如何可以被搜索到是非常重要的考量因素。  

* 控制台搜索展现机会 > 云市场前台页面展现机会
* 版本号需要在搜索结果中出现以便于客户判断
* 同一产品，需准备应对客户可能的各种搜索词。例如：SQL Server, sqlserver, mssql
* Azure 和 华为云 SKU 可以被单独检索，故 SKU 名称和描述需要纳入考虑
* 阿里云将商品外部流量作为检索推荐的指标，即强者愈强

### 多商品多规格

一个产品可能由于下面几种情况会产生多商品或多规格：  

* 多发行版（例如：MySQL 社区版 5.7, MySQL 企业版 8.0） 
* 多应用组合满足用户场景（例如：WordPress + MinIO, NextCloud + ONLYOFFICEDocs）
* 应用差异设置满足用户场景（例如：WordPress 多站点）

注意几个原则：

* 操作系统的差异不允许作为多商品出现
* 差异较大的场景必须以多商品出现，并采用不同的商品名
* 在规格支持比较友好的平台上可以多上不同的操作系统


## 商品信息范式

下面是商品信息的范式，但商品信息维护在 Contentful 中。


### Title

商品标题需要考量的因素包括：简洁、重点突出、便于用户检索、易维护、定位客户心智、合规 

中文的标题在合规性上，更为宽松一些。一般采用【商标 + 产品类型】的模式：

```
WordPress 企业建站平台
Neo4j 图引擎数据库
Odoo 开源企业 ERP/CRM
```

英文标题相对于中文需要更为慎重，原因是：

* **语法**：on, for 等介词的运用，以及词语的先后顺序会导致含义不同
* **合规**：英文标题中一般不允许出现其他公司的商标，即使使用也非常有讲究

```
# Websoft9
# Have two options, the short one is for Azure
Websoft9 Applications Hosting Platform
Websoft9 App Platform


# Application and not refer Websoft9
GitLab CE on AWS — Preconfigured, Hardened, Ready in Minutes

# Application and refer Websoft9

<App Trademark> on <Cloud Platform> Self-Hosted <Catalog> with Websoft9 Console
Odoo on AWS - Self-Hosted ERP with Websoft9 Console
PostgreSQL on AWS - Self-Hosted Database with Websoft9 Console
GitLab on AWS - Self-Hosted DevOps tool with Websoft9 Console
```


### Summary

Summary 通常是不超过 10 个字（单词）的介绍。

* 在 Azure 平台被称之为 **Search results summary**
* 在 AWS 被称之为 **Short summary**
* Alibaba Cloud 被称之为 **Short Description**

```
# 中文
开机即用 Odoo19/18/17/16 镜像，内置 Websoft9 自助管理面板，版本持续迭代，专家团队提供从运维支撑，可响应自定义配置需求，省去应用维护负担

# English
Deploy Odoo on AWS through Websoft9 Console with AMI or CloudFormation. Choose Odoo 15 to 19, manage domains, SSL, and databases from a web UI, and keep your stack current with GitOps-based upgrades.

Odoo 15–19, preconfigured & hardened. Official packages, no forks. Web console for SSL, proxy, backup and monitoring. One-click upgrades with rollback. No lock-in.
```

### Long summary

此项在不同的云平台的项目名分别为：

* Azure 被称之为：Long summary

中文与 English 的模式化略有差异：

- 中文 = 模式化开头 + 应用介绍 +模式化结尾

   ```
   本产品是由 Websoft9 出品的 Akeneo 云原生应用，即买即用。Akeneo 是开源的 PIM 系统，可帮助商家和品牌提高产品数据质量并简化产品目录管理。订阅此产品，您可以获得升级、变更、维护、救援等免费的技术支持服务。
   ```

- English = 模式化子标题 + 应用介绍 + 已包含支持费用

   ```
   Pre-configured, web-based, cloud-native, secure, one-click to deploy InfluxDB with Websoft9 Applications Hosting Platform on AWS. InfluxDB is... The price of this product includes charges for Websoft9 support.
   ```

### Highlights

特征在某些平台又被成为产品两点，英文表达为 Highlights。

模式化的亮点包括：

``` 
# 中文

- 搭载应用运维管理面板，支持多应用、个性配置、备份升级、计划任务、域名访问、自动证书签发、安全加固、性能优化 
- 基于 Docker 容器化部署，应用可迁移，无供应商锁定 
- 配套专家技术支撑，上手简单易维护，使用开源软件也有保障

# English

- Official packages, no forks, migrate anytime.
- Web console for SSL, proxy, backup, containers and monitoring — no CLI needed.
- One-click upgrades with rollback, low-maintenance by design.

```

> 另外，针对于产品本身的亮点，也可以增加 1-2 条

### Description

#### 中文

注意事项：

* 模式化中的 [] 项表示包含链接
* 链接处理：【立即购买】链接到页内锚点；【在线文档】选择在新窗口中打开；【××云安全组设置】链接到官方文档
* 嵌入图片：垂直间距10，左对齐
* 禁止插入联系电话、微信、文档之外的外链；
* 无授权，不得显示第三方 Logo
* 定价指南仅免费商品需要

模式化范例：

```
镜像基于 Odoo 官方原生版本构建（Odoo 19/18/17/16/15 多个版本可选），内置 Websoft9 可视化应用管理面板，集成自研运维与 AI 工具集。支持应用启停、升级、日志查看、域名配置、SSL 自动签发、备份监控，覆盖部署、安全、备份、高可用全生命周期，企业场景一键部署。

![](https://netmarket.oss-cn-hangzhou.aliyuncs.com/product/ab1dcebd71d84ea68e918e8b415d355epng.png)

组件

Odoo,PostgreSQL, pgAdmin, GitLab, Metabase, Docker, Websoft9 自助管理面板（内置 Nginx 与各类运维工具）

费用说明

Odoo 开源免费。本镜像内置 Websoft9 可视化管理面板与全套运维工具集，为付费镜像。购买后除镜像程序外，还可获得专业技术团队支持，包含持续功能迭代、人工技术协助与故障处置，应用运维无需您独自排障。

使用步骤

本镜像内置可视化初始化页面，浏览器访问 服务器 IP:9000 即可开始配置。无需登录服务器、无需额外获取密码，操作便捷。

端口

- 80/443: 域名访问（HTTP/HTTPS）
- 9000: 面板控制台端口
- 9001: IP 直连应用端口

在线文档

Odoo 镜像手册

关于 Odoo

Odoo 是一个 面向全球用户的开源ERP/CRM软件，它被用于 ERP/财税/后勤 CRM/分销/订单 供应链/采购/生产/物流 战略/合规/人事 客服/售后/支持 产品生命周期 市场营销 企业建站 项目/任务/流程 运营与供应链数字化 内容营销技术 等场景。Odoo是面向全球用户的开源ERP/CRM软件，它有强大而灵活的系统架构，产品迭代速度非常快，用户可模块化修改、升级、新增功能。

关于 Websoft9

Websoft9（微聚云）专注开源应用工程化落地，深耕云原生应用自动化运维。基于开源官方原版打造企业级镜像，自研 Web 自助管理面板及运维工具集，覆盖部署、安全加固、监控备份、版本迭代全流程。产品上架全球主流公有云，依托专业团队提供运维支撑，帮助企业低成本、自主可控搭建开源业务系统.
```

#### English

注意事项：

* AWS 平台中不需要 **Why use Websoft9 Image?** 因为它有 [Highlights](#highlights)
* 代理商发布的镜像（例如：VMLAB）时，Why... 描述中需要澄清与 Websoft9 的关系

```
Launch a fully-configured {App Name} in minutes — {core value: e.g. replace TeamViewer / AnyDesk with infrastructure you own}. No command line, no {biggest pricing pain: e.g. per-device license fees}.

## Included Components

{core components of the app, e.g. Odoo}, Docker + Docker Compose, Nginx, Websoft9 management console with ops toolset (monitoring, backups, security hardening)

The built-in app store lets you one-click deploy related applications, including {3–5 apps commonly paired with this app}, and others you may need.

## What You Pay For

{App Name} is free and open source. This paid image bundles the **management console, operations toolset, and technical support** — so you never debug alone.

## Quick Start

1. Launch your instance with this image
2. Open `http://<server-ip>:9000` in a browser and follow the wizard
3. {final step: e.g. Share the auto-generated client download link with your team}

## Ports

- 80 / 443: domain access, HTTPS
- 9000: Websoft9 management console
- 9001: access your application console
- {app-specific ports}: {purpose}

## Use Cases

{3–5 use cases of this app}

## Instance Requirements

CPU no less than 2 cores, memory no less than 2 GB ({recommended RAM} GB recommended)

## About {App Name}

{What the app is, its open-source credibility (stars / ranking), key capabilities, and the core reason to self-host it — data sovereignty, cost, or vendor risk. Link to official site.}

## About Websoft9

Websoft9 productionizes open-source software on public clouds: official upstream releases, wrapped with our self-developed management panel, ops toolset, and expert support — so businesses can adopt open source with confidence.

## Support

Fault handling, upgrade guidance, configuration help, and optimization advice — included with the image.

**Trademark Statement**

{App Name} is a product of {upstream vendor / foundation}. This image is provided by Websoft9, which is not affiliated with, and does not endorse, this product.

```



### Usage Instructions

适用于云平台用户的快速指引，但平台没有 **Usage** 承载标签页时，需插入到详情页

```
Once the instance is running, enter the http://Public DNS:9000 provided by AWS into your browser. You will then see the Websoft9 Console.   

And refer to the following steps to get started:

1. Use SSH to connect your AWS EC2 by user `ubuntu`
2. Run command 'sudo usermod -aG docker ubuntu && sudo passwd ubuntu' to set password and permisson for this user
3. Use your EC2 username 'ubuntu' and password to log in Websoft9 Console. 
4. Go to the "App Store" in the Websoft9 Console and install InfluxDB with a one-click.
5. Once installation is complete, go to "My Apps" to get the port, access url and credentials of InfluxDB
```

### SEO

SEO 用于平台站外的流量来源。如果运用恰当，被搜索的几率也比较大。
SEO 分为关键词和描述两部分内容。目前每个应用都在主数据中维护。  

### 资质证书

对于非开源软件，尽可能附上 **代理证书** 或 **其他知识产权申明文件**

### 案例

提供客户 Logo  墙

### 视频

- 原始录制的视频存储在：**微盘 > Media > 视频** 目录
- English 视频已经发布到：[vimeo](https://vimeo.com/1073835776/1fcc683b71)

### EULA

尽量使用云平台提供的 EULA，目前我们已经使用 Azure, AWS 官方均提供了标准的 EULA。  

平台为提供 EULA 的，使用我们[自己维护的协议](https://drive.weixin.qq.com/s?k=AEYAzAcRAA4tVvlzvP)

### 订阅ID

Azure 独有的指标。用于上架前自测，所以一般填写自身可使用的云资源订阅 ID，它通过【成本管理+计费】中获取

### 隐私条款

直接引用链接：https://support.websoft9.com/docs/legal/privacy.html

### 商品 ID

直接使用应用的 ID，例如：gitlab。如果应用 ID 被占用，可以使用 w9gitlab 这种格式。

### 商品版本号

仅华为云有此选项。它的值=主应用版本号，例如 MySQL 商品的版本号：5.7.19

### 可视化地址

可视化管理地址的 **URL:Port/page.html**

### 标签

参考 Contentful 并结合平台实际

### 类目

参考 Contentful 并结合平台实际

### 开源申明

上传一个 **商品名称-license.doc** 的附件，其中的内容为主要组件的开源 License 链接地址。

> 建议优化成附上 Websoft9 文档中的 Licenses 页面 

## Media 设计范式

### Logo

为了确保商标合规，我们统一采用 Websoft9 的 Logo 作为商品的 Logo

### 图片

商品尽可能添加演示图片，图片可以从文档中寻找，也可以从应用官方网站中寻找，甚至截图

### 视频

商品尽可能添加演示视频。视频可以从应用官方获取，也可以通过 Canva 自行创建。

自创的视频只需在模板中添加 5-8 个产品截图，不要做其他工作，降低维护难度。  

### 尺寸对照表

| 云     | 图标                                      | 图片       | 视频缩略图 |
| ------ | ----------------------------------------- | ---------- | ---- |
| Azure  | 48 x 48  \| 90 x 90 \| 216 x 216 三个规格 | 1280 x 720 |  1280 x 720 png    |
| AWS    | 不限                                      | 不限       |      |
| 阿里云 | 不限                                      | 不限       |      |
| 华为云 | 不限                                      | 不限       |      |
| 腾讯云 | 不限                                      | 不限       |      |
| 京东云 | 不限                                      | 不限       |      |
| 其他   | 不限                                      | 不限       |      |



## SKU 信息范式

### SKU ID （版本号）

- 有的云被成为 **版本 ID** 或 **版本号** 或 **Plan ID**
- 有的可以修改，有的不可以修改

根据平台的特征进行个性化表示：

* AWS：SKU ID 会在搜索列表页呈现，且后续不可被替换，故需要有营销和版本识别效果。范例：`GitLab 8.0-Ubuntu22.04` or `MySQL5.6/8.0 on Ubuntu22.04`
* Azure：SKU ID 不会显示给用户，且后续可以被替换，故可以抽象描述。范例：`wordpress-websoft9-ubuntu`
* 阿里云：SKU ID 会在搜索列表页呈现，且后续不可被替换，故需要有营销和版本识别效果。范例：`GitLab 8.0-Ubuntu22.04`


### SKU 标题

突出主应用版本和操作系统版本。

* AWS 对应的是 Version Title, Azure 对应的是 Plan Name。统一表示为：
  
   ```
   WordPress 6.6/latest with Websoft9 Hosting Platform on Debian12
   ```

### SKU 摘要（版本简介）

AWS, Azure Plan summary 突出 SKU 组件的描述。统一表示为：

```
WordPress 6.6/latest, MySQL/MariaDB/PostgreSQL, phpMyAdmin, Websoft9 2.1.15 on Debian12
```

> 此项在阿里云中仅内部查看，用户看不到。 


### SKU 说明

突出 SKU 的价值

* AWS 此项名为 Release Notes, Azure 为 Plan description

```
One-click deployment of WordPress 6.6/latest with Websoft9 Applications Hosting Platform which provide console for application management, OS is Debian12 and has charges associated with it for Websoft9 support.
```

## 技术规格范式

### 操作系统

一般为 Linux 或 Windows

### 操作系统供应商

Ubuntu

### 操作系统名称

Ubuntu Server 22.04 LTS

### AWS arn

```
arn:aws:iam::797851739507:role/Marketplace_ingest
```

### 服务器推荐配置

以最低配置作为首选推荐，然后以此为基础，增加 2-3 款更高配置。

#### Azure

Azure 平台选择机器型号有一定的考究，首先研究官方的文档：[型号大全](https://learn.microsoft.com/zh-cn/azure/virtual-machines/sizes)、[价格](https://azure.microsoft.com/zh-cn/pricing/details/virtual-machines/linux/)

选型原则：内存优先 > 热门 >性价比，从满足运行环境的最小配置服务器起选3个

| **类别** | **机型** | **CUP** | **GB**                 |
| -------- | -------- | ------- | ---------------------- |
|          | B1S      | 1       | 1                      |
|          | DS1_v2   | 1       | 3.5(适用于1核2G最低配) |
|          | B2s      | 2       | 4                      |
|          | D2as_v4  | 2       | 8                      |
|          | E2as_v4  | 2       | 16                     |
|          | D4s_v3   | 4       | 16                     |
|          | E4as_v4  | 4       | 32                     |
|          | D8s_v3   | 8       | 32                     |
|          | E8as_v4  | 8       | 64                     |

* B1s 1c1g
* DS1_v2 1c3.5g (适用于1核2G最低配)
* B2s 2c4g
* D2as_v4 2c8g
* E2as_v4 2c16g
* D4s_v3 4c16g
* E4as_v4 4c32g
* D8s_v3 8c32g
* E8as_v4 8c64g


### 发布区域

选择所有机房的地域，确保不放过一个销售机会。

AWS 注意：除 us-gov-east-1 GovCloud East 和 us-gov-west-1 GovCloud West 外，全部选择

### 试用

尽可能给产品提供免费试用的机会，以符合云平台的流量倾向政策。  

* 阿里云：首月 0 元
* AWS：接受官方的试用策略（5天）

### 开放端口

- **HTTP port**: 90
- **HTTPS port**: 443
- **Websoft9 Console**: 9000
- **Application Ports**: 9001-9010
- 特殊应用的其他端口

### 磁盘

默认不需要增加数据盘

### 镜像版本号

主应用的真实版本号，例如：3.7.10

### 镜像地址(ID)

* Azure: SAS URL
* 其他云：直接关联镜像 ID

### 安全检查报告

目前仅腾讯云需要此项。检查报告模板已经存储在微信网盘中。 

## 售后服务范式

### 在线文档

首先应用文档 URL 作为商品的文档。

* 文档名称-中文：GitLab 在线文档
 * 文档名称-英文：Gitlab Administrator Guide
* 文档链接-中文：https:// support.websoft9.com/docs/gitlab
* 文档链接-英文：https://support.websoft9.com/en/docs/gitlab

### PDF 文档

部分云平台需要提供 PDF 附件的文档，且其中的内容单页会受到审查：

* 不允许在线文档之外的链接
* 不允许二维码

拷贝下面的 Markdown 源码到 **Typora**，导出 PDF 文件。  

```
|                        文档版本：v2.0                        |
| :----------------------------------------------------------: |
| <br /><br /><br /><br /><br /><br /><br /><br /><br />![Websoft9 多应用托管平台](https://websoft9.github.io/handbook/sales/images/websoft9-logo.svg)<br /><br />  开源软件自托管平台，提升团队90%生产力<br /><br /><br /><br /><br /><br />**在线文档**：https://support.websoft9.com/docs/<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> |

```

### 联系方式

```
# 中文
服务时间：7x8小时
服务热线：0731-89572759  
手机（微信同号）：13786149601
手机（微信同号）：13922410386
服务邮箱：help@websoft9.com

# English
Time: 7x9 hours (GMT+8:00)
Email: help@websoft9.com
```

### 售后范围

```
全方位的技术支持与专业咨询，包括：故障支持、系统异常分析、配置指导、优化建议、备份与升级指南、选型建议等
```

### 退款说明

AWS 需提供 Refund and Cancelation Policy 的文字：  

```
Annual Subscriptions: Refunds are allowed if you are canceling a subscription to purchase a new subscription from Websoft9 at the same or higher rate.   

Hourly Subscriptions: We do not currently support refunds, but you can cancel at any time.
```

## 附加

### 知识产权限制

部分开源软件对商标和 License 使用非常严格，发布商品时需特别注意：

- Moodle，对商标使用非常严格
- MongoDB, 对商标使用非常严格
- Elastic，对商品和产品分发使用非常严格
- n8n 不允许分发
- arangodb 似乎不允许分发
- Zabbix，对商标使用非常严格
- Alfresco，对商标和软件归属使用非常严格
