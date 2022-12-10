---
sidebar_position: 1
---

# 商品表现力

商品的表现力主要集中在商品的信息、规格和定价等几个方面，其中商品信息是客户与我们的最主要接触面：

* 从公司全局角度看：提高订单量，提高订单单价，降低客户错误购买率
* 从运营管理角度看：提高商品被发现几率，提高用户阅读量，提高用户点击订阅意愿

## 术语

* 商品：云市场中具有单独页面产品信息体，有的云称之为 Offer
* 规格：又被称之为 SKU 或 发行版，它是商品为满足用户不同用户的需求而派生的子集，例如：MySQL 5.6
* 版本：它是开发者的角度考虑，与 SKU 不是一个概念，例如： MySQL 5.6.20

## 合规性

在国际云市场上，合规性是首要准则，不可以出现任何与合规性冲突的内容。合规性主要包括：

- 开源License
- 商标
- 广告法
- 隐私策略
- 用户许可协议
- 特殊禁令（例如：美国的实体清单）

## 易维护

易维护可以降低成本，也可以减少错误。这个方面的考量有：

* 不可修改的**固定字段**要慎重，尽快保证它可以适应各种变化
* 商品详情中组件的版本号要精简，保证在更新 SKU 时它不需更改

## 平台搜索考量

平台内的客户会通过搜索找到我们的产品，因此如何可以被搜索到是非常重要的考量因素。  

* 控制台搜索展现机会 > 云市场前台页面展现机会
* 版本号需要在搜索结果中出现以便于客户判断
* 同一产品，需准备应对客户可能的各种搜索词。例如：SQL Server, sqlserver, mssql
* Azure 和 华为云 SKU 可以被单独检索，故 SKU 名称和描述需要纳入考虑
* 阿里云将商品外部流量作为检索推荐的指标，即强者愈强

## 多商品多规格

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


### 标题

商品标题需要考量的因素包括：简洁、重点突出、便于用户检索、易维护、定位客户心智、合规 

中文的标题在合规性上，更为宽松一些。一般采用【产品一句话介绍 + 商标】的模式：

```
企业级电商系统 Mangeto
图引擎数据库 Neo4j
云原生关系型数据库 MySQL
```

英文标题相对于中文需要更为慎重，原因是：

* **语法**：on, for 等介词的运用，以及词语的先后顺序会导致含义不同
* **合规**：英文标题中一般不允许出现其他公司的商标，及时使用也非常有讲究

```
# 未包含商标的名称
Free and Open Source Cloud ERP


# For 一般用适用于：组件 for 产品商标，类别(带有特征) for 产品商标。这种方式下产品商标是形容词。
Web APPS runtime for PHP
Visual Machine Learning Stack for TensorFlow
Cloud Native Database for MySQL
Cloud Native MQ for Kafka
Cloud Database for MySQL
Log plugins for MySQL
Open Source GUI project for Ansible

# 错误的表达
Database for MySQL   有类别但没有特征
Digital Experience Platform for CMS  CMS 不是产品商标，没有意义
```

英文标题常见的词汇：

* stack
* deployment
* plugin/theme/extension
* runtime
* toolkit
* vm
* image
* 1-click package
* platform
* framework
* tool
* software
* system
* cloud-native
* box

> stack,deployment 等词汇更像是我们提供的技术副产品，platform, system 看起来更像商品原生性


### 子标题

子标题通常是不超过 10 个字（单词）的介绍。

* 在 Azure 平台被称之为 **Search results summary**
* 在 AWS 被称之为 **Short summary **

```
Pre-configured, Cloud-native, secure, one-click to deploy ERPNext on AWS/Azure.
```

### 描述

Azure 被称之为：Long summary。

一句话 + 应用介绍。应用介绍来自官方首页（从首屏区、底部、SEO Description 等获取）

```
Pre-configured, Cloud-native, secure, one-click to deploy ERPNext on AWS/Azure. ERPNext is... 
```

### 详情

* AWS 平台中不需要 **Why use Websoft9 Image?** 因为它需 [Highlights](#highlights)

```
This is a Cloud Native deployment solution for ERPNext powered by Websoft9. It always up-to-date, secure, and built to work right out of the box.  

ERPNext is the world's top 100% open source ERP which supports manufacturing, distribution, retail, trading, services, education, non profits and healthcare

Image Components: 

ERPNext 14/13/12, Nginx 1.22, MariaDB 10.6, phpMyAdmin, Docker 20.10

EC2 requirements: 

CPU no less than 2 core, Memory no less than 8G, Disk space no less than 60G 

Applicable Scene: 

CRM/HR/ERP for manufacturing, distribution, retail, trading, services, education, non profits and healthcare

Why use Websoft9 Image?

Websoft9 has a wide range of open source integrated solutions, from infrastructure, Containers, Databases, DevOps, to AI, Website application, and the IoT. 

These images are packaged by Websoft9 using industry best practices .They are opensoure,stable,reliable,easy to use,secure,continually updated. The images are not free, we think you need a partner who can provide a good product and timely support for your business. We can provide both of them for you.

Intellectual Property Statement: 

The stack of this offer includes a wide range copies of open source and free software, but the Copyrights, Patents and Trademarks are legal protections for original owner. 

- The brand name ERPNext and the logo are trademarks of Frappe Technologies Pvt. Ltd..
- The ERPNext code is licensed as GNU General Public License (v3) and the 

If you are aware of a breach of the any IP in this offer, please don't hesitate to contact us: legal@websoft9.com, we will correct it ASAP.
```

### 特征亮点 {#highlights}

特征在某些平台又被成为产品两点，英文表达为 Highlights。

``` 
* Pre-configured, one-click to deploy on AWS EC2
* Application running on Docker, upgade so easy
* Paid image, free professional support for your business
```

### SEO

SEO 用于平台站外的流量来源。如果运用恰当，被搜索的几率也比较大。
SEO 分为关键词和描述两部分内容。目前每个应用都在主数据中维护。  

### Logo

为了确保商标合规，我们统一采用 Websoft9 的 Logo 作为商品的 Logo

### 图片

商品尽可能添加演示图片，图片可以从文档中寻找，也可以从应用官方网站中寻找，甚至截图

### 视频

商品尽可能添加演示视频。视频可以从应用官方获取，也可以通过 Canva 自行创建。

自创的视频只需在模板中添加 5-8 个产品截图，不要做其他工作，降低维护难度。  

### 证书

对于非开源软件，尽可能附上 **代理证书** 或 **其他知识产权申明文件**

### 案例

提供客户 Logo  墙

### EULA

尽量使用云平台提供的 EULA，目前我们已经使用 Azure, AWS 官方均提供了标准的 EULA。  

平台为提供 EULA 的，使用我们[自己维护的协议](https://drive.weixin.qq.com/s?k=AEYAzAcRAA4tVvlzvP)

### 订阅ID

Azure 独有的指标。用于上架前自测，所以一般填写自身可使用的云资源订阅 ID，它通过【成本管理+计费】中获取

### 隐私条款

直接引用链接：https://support.websoft9.com/docs/legal/privacy.html

### 文档

首先应用文档 URL 作为商品的文档。如果云平台不支持链接，请使用[单页文档链接指引](https://drive.weixin.qq.com/s?k=AEYAzAcRAA4bVAxHKY)

* 文档名称-中文：GitLab 在线文档
 * 文档名称-英文：Gitlab Administrator Guide
* 文档链接-中文：https:// support.websoft9.com/docs/gitlab
* 文档链接-英文：https://support.websoft9.com/en/docs/gitlab

### 商品 ID

直接使用应用的 ID，例如：gitlab。如果应用 ID 被占用，可以使用 w9gitlab 这种格式。

### 商品版本号

以主应用的完整版本号作为商品版本号。例如：WordPress 商品的版本号为 V5.2.9

## SKU 信息范式

### SKU ID

有的云被成为 版本 ID 或 版本号，它一般是不可修改项。

### SKU 标题

突出主应用版本和操作系统版本

```
HAProxy Community 1.7 on Ubuntu 22.04
```

### SKU 摘要

突出 SKU 组件的描述。

```
WordPress 5.9, Nginx 1.20, PHP 7.4, MySQL 5.7, phpMyAdmin 5.1, Redis 5.0, Docker on CentOS 7.9
```

### SKU 说明

突出 SKU 的价值

```
This plan integrates HAProxy Community 1.7, and has charges associated with it for VMLab support.
```

## 技术规格范式

### 操作系统

一般为 Linux 或 Windows

### 操作系统供应商

Ubuntu

### 操作系统名称

Ubuntu Server 22.04 LTS

### 服务器推荐配置

以最低配置作为首选推荐，然后以此为基础，增加 2-3 款更高配置。

### 发布区域

选择所有机房的地域，确保不放过一个销售机会

### 试用

尽可能给产品提供免费试用的机会，以符合云平台的流量倾向政策。  

* 阿里云：首月 0 元
* AWS：接受官方的试用策略

### 开放端口

80 和 443 是必选项，其他端口参考应用文档

### 磁盘

默认不需要增加数据盘

### 镜像版本号

主应用的真实版本号，例如：3.7.10

### 镜像地址

Azure: SAS URL
其他云：直接关联镜像 ID





