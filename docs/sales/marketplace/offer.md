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

中文的标题在合规性上，更为宽松一些。一般采用【产品一句话介绍 + 商标 + 发行版】的模式：

```
企业级电商系统 Mangeto
图引擎数据库 Neo4j
云原生关系型数据库 MySQL5.6
```

英文标题相对于中文需要更为慎重，原因是：

* **语法**：on, for 等介词的运用，以及词语的先后顺序会导致含义不同
* **合规**：英文标题中一般不允许出现其他公司的商标，即使使用也非常有讲究

```
# 未包含商标的名称
Free and Open Source Cloud ERP


# For 一般用适用于：组件 for 产品商标，类别(带有特征) for 产品商标。这种方式下产品商标是形容词。
Websoft9 Applications Hosting Platform for InfluxDB® 
Websoft9 Self-Hosting PaaS for InfluxDB
Websoft9 Self-Hosting Platform for InfluxDB
Websoft9 Applications Hosting Platform for InfluxDB
Websoft9 Self-Hosting PaaS for Web Runtime 
Websoft9 Self-Hosting PaaS for Web Runtime 


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

> stack,deployment 等词汇更像是我们提供的技术副产品，platform, system 看起来更像商品原生性。


### 子标题

子标题通常是不超过 10 个字（单词）的介绍。

* 在 Azure 平台被称之为 **Search results summary**
* 在 AWS 被称之为 **Short summary **

```
Pre-configured, web-based, cloud-native, secure, one-click to deploy InfluxDB with Websoft9 Applications Hosting Platform on AWS.
```

### 描述

此项在不同的云平台的项目名分别为：

* Azure 被称之为：Long summary
* 阿里云 被称之为：产品简介

中文与 English 的模式化略有差异：

- 中文 = 模式化开头 + 应用介绍 +模式化结尾

   ```
   本产品是由 Websoft9 出品的 Akeneo 云原生应用，即买即用。Akeneo 是开源的 PIM 系统，可帮助商家和品牌提高产品数据质量并简化产品目录管理。订阅此产品，您可以获得升级、变更、维护、救援等免费的技术支持服务。
   ```

- English = 模式化子标题 + 应用介绍 + 已包含支持费用

   ```
   Pre-configured, web-based, cloud-native, secure, one-click to deploy InfluxDB with Websoft9 Applications Hosting Platform on AWS. InfluxDB is... The price of this product includes charges for Websoft9 support.
   ```

> 应用介绍来自官方首页（从首屏区、底部、SEO Description 等获取）

### 详情

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
本产品是由 Websoft9 出品的 Akeneo 云原生应用，即买即用 + 产品官方介绍

# 组件：

Redmine 4.2.8, MySQL 5.7, Nginx 1.22, phpMyAdmin 5.2, Docker 20.10 on Ubuntu 22.04

版权申明

Elastic Stack 中的各个组件遵循 ELv2 协议，此协议允许最终用户免费使用，但不允许云分发。故本镜像仅包含 Elastic Stack 所需的运行环境以及自动化安装脚本以满足合规性，用户可根据文档自行下载后安装使用。

版本约束

Oracle Database XE 对安装主机的规模和 CPU 数量不作限制（每台计算机一个数据库），但 XE 将最多存储 11GB 的用户数据，最多使用 1GB 内存，使用主机上的一个 CPU。

# 最低配置：

1核2G

# 嵌入 1-3 张图片

# 面向对象：

站长，设计，开发者，运维，产品经理，企业...

# 应用场景：

数据分析，自动化，企业内容营销...

# 试用：

要充分试用，请点击[立即购买]（其中云服务器的付费方式选择“按量”），试用完成后释放服务器即停止计费

# 定价指南：

本镜像当前免费，若启用收费我们会提前进行通知，详情参见本商品《云市场商品服务协议》

# 快速指南：

应用安装到云服务器后，本地浏览器访问页面：http://ECS公网IP。
若无法访问，请检查安全组端口80与9090是否打开，参考：[阿里云安全组设置]

# 在线文档：

[WordPress 云原生在线文档]
 
# 常见问题

1. 已有服务器，怎么使用ERPNext镜像？
登录云控制台，对服务器进行【切换操作系统】操作，切换过程中在【市场镜像】搜索 erpnext
2. 服务器购买方式是使用【推荐配置】还是【自定义云主机】？
推荐配置仅供参考，建议通过【自定义云主机】购买服务器
```

#### English

注意事项：

* AWS 平台中不需要 **Why use Websoft9 Image?** 因为它有 [Highlights](#highlights)
* 代理商发布的镜像（例如：VMLAB）时，Why... 描述中需要澄清与 Websoft9 的关系

```

This is a cloud-native InfluxDB® Open Source Edition runtime on the Websoft9 Applications Hosting Platform. It is always up-to-date, secure, and ready to use right out of the box with business support from Websoft9.

InfluxDB® is the most popular open source database for developers managing time series data. Unlock real-time insights from time series data at any scale in any environment – in the cloud, on-prem, or at the edge.

Websoft9 is a lightweight, self-hosting PaaS that allows you to deploy multiple applications on your own cloud infrastructure. It employs a GitOps approach and includes an integrated app store that supports one-click deployment of over 200 template applications, as well as the ability to deploy custom applications. Users have complete autonomy, ensuring that applications can be easily configured and continuously deployed even after they are live. Additionally, the web-based interface allows users to effortlessly perform tasks such as domain binding, HTTPS setup, access control, and status monitoring.

# Included Components

InfluxDB® Open Source Edition 2.7/latest, Docker, Websoft9 v2.1.5

# Trademark Statement

InfluxDB® is a trademark registered by InfluxData,which is not affiliated with, and does not endorse, this product

# Use Cases

Time Series Database, IoT Monitoring and Analytics, Network Monitoring, SaaS Operational Monitoring, Application Performance Monitoring (APM)

# Ready-to-use related applications

This product enables users to deploy additional applications related to InfluxDB® with a one-click, including Grafana, Prometheus, Elasticsearch, Kibana, Apache Kafka. Zabbix, Node-RED, and others you may need.

# EC2 requirements:
CPU no less than 2 core, Memory no less than 4G.

```

### 特征亮点 {#highlights}

特征在某些平台又被成为产品两点，英文表达为 Highlights。

模式化的亮点包括：

``` 
# 中文

● 已完成预配置、密码初始化，购买后即可自主使用
● 基于 Docker 的云原生架构，便于产品升级、版本变更、卸载以及安装更多应用
● 提供免费的技术支持 

# English

* Docker-based, easy to deploy and upgrade
* Console panel for installing and managing multiple applications on a single instance
* One-click deployment of over 200 template applications from the console
```

非模式的亮点需增加到模式化亮点的之前：
```
● 绿色开源，无任何商用限制
● Redmine可以方便地在线安装多个插件，比如：图形报表、导出xls、统计分析等
● 可以灵活的自定义多个信息，包括：自定义字段、邮件通知、Bug管理流程、查询字段、报表字段等
```

如果平台可以嵌入 HTML 元素，可以适当排版或插入下面的图片
![](https://libs.websoft9.com/Websoft9/ui/design/service_w800.jpg)

### Usage Instructions

适用于云平台用户的快速指引，但平台没有 **Usage** 承载标签页时，需插入到详情页

```
Once the instance is running, enter the public DNS:9000 provided by AWS into your browser. You will then see the Websoft9 Console.   

And refer to the following steps to get started:

1. Connect your EC2 and set password by command 'sudo passwd' for your user
2. Use your EC2 username 'ubuntu' and password to log in Websoft9 Console. 
3. Go to the "App Store" in the Websoft9 Console and install InfluxDB with a one-click.
4. Once installation is complete, go to "My Apps" to get the port, access url and credentials of InfluxDB
```

### SEO

SEO 用于平台站外的流量来源。如果运用恰当，被搜索的几率也比较大。
SEO 分为关键词和描述两部分内容。目前每个应用都在主数据中维护。  

### 资质证书

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

有的云被成为 版本 ID 或 版本号，有的可以修改，有的不可以修改。

以主应用的完整版本号作为商品版本号的起始，以操作系统作为结尾。具体信息亮的多少需要根据云平台可承载而定：

* AWS：Kafka 2.8.1 - Ubuntu 22.04 或 GitLab 8.0 - Jenkins6.0 -Ubuntu22.04
* Azure：仅供程序使用，一旦设定便不可更改
* 阿里云：V5.2.9-Ubuntu22.04 （控制台搜索可以显示完整，云市场商品详情页面只显示9个字符）
* 华为云：


### SKU 标题

突出主应用版本和操作系统版本。

* AWS 此项名为 Version Title

```
HAProxy Community 1.7 on Ubuntu 22.04
```

### SKU 摘要（版本简介）

突出 SKU 组件的描述。

```
WordPress 5.9, Nginx 1.20, PHP 7.4, MySQL 5.7, phpMyAdmin 5.1, Redis 5.0, Docker on CentOS 7.9
```

此项在阿里云中仅内部查看，用户看不到。 


### SKU 说明

突出 SKU 的价值

* AWS 此项名为 Release Notes

```
This plan integrates HAProxy Community 1.7, and has charges associated with it for VMLab support.
```

### SKU 使用指南

AWS 中被称之为 Usage Instructions，它怎么写？

```
Usage instructions should take a customer from the 1-click launch, all the way through using the product. This includes any configuration or special steps needed to get the application running. For example:

1. Launch the product via 1-click.
2. Access the application via web browser at https:/Public_DNS/index.html.
3. Login using the username admin and the EC2 instance ID as the password.
```

基于上面的模板，我们提供了三种可能的写法：  

```
无Web界面：
Launch the product via 1-click, connect EC2 using the username  'ubuntu'. product configuration and administrator refer to: https://support.websoft9.com/docs/kafka

有Web界面：
Launch the product via 1-click, access the application via  web browser at http://Public_DNS/ and set the administrator password by youself, then login GitLab using the username root and password you set. Product configuration and administrator refer to: https://support.websoft9.com/docs/gitlab

有Web界面+获取密码：
Launch the product via 1-click, connect EC2 using the username  'ubuntu' and get MySQL's credentials by command 'sudo cat /credentials/password.txt', then access the GUI tool phpMyAdmin via web browser at  http://Public_DNS:9090. Product configuration and administrator refer to: https://support.websoft9.com/docs/mysql
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
* AWS：接受官方的试用策略

### 开放端口

80 和 443 是必选项，其他端口参考应用文档

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

如果云平台不支持在线文档，请使用[在线文档指引 PDF 单页](https://drive.weixin.qq.com/s?k=AEYAzAcRAA4bVAxHKY)

单页会受到审查：

* 不允许在线文档之外的链接
* 不允许二维码

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

## 其他

### AWS arn
```
arn:aws:iam::797851739507:role/Marketplace_ingest
```




