---
sidebar_position: 6
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


## 平台搜索考量

平台内的客户会通过搜索找到我们的产品，因此如何可以被搜索到是非常重要的考量因素。  

* 控制台搜索重要性 > 云市场前台页面
* 版本号需要在搜索结果中出现
* 同一产品，需适用客户可能的各种搜索词。例如：SQL Server, sqlserver, mssql
* Azure 和 华为云 SKU 可以被单独检索，故 SKU 名称和描述需要纳入考虑
* 



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


### 一句话

```
Pre-configured, Cloud-native, secure, one-click to deploy ERPNext on AWS/Azure.
```

### 短描述

一句话 + 应用短描述。应用短描述来自官方首页（从首屏区、底部、SEO Description 等获取）

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

### 特征 {#highlights}

特征在某些平台又被成为产品两点，英文表达为 Highlights。

``` 
* Pre-configured, one-click to deploy on AWS EC2
* Application running on Docker, upgade so easy
* Paid image, free professional support for your business
```

## 评价

客户成功团队可以主动邀请客户给与我们好评。客户说，评价怎么写？没关系，不需要客户思考，从下面复制即可：  

```
good
nice
that is good!
安装方便，服务稳定，集成环境一键安装，还有好多必要组件，可以快速部署环境，超赞。
安装很快，好用
安装了数据库的可视化管理工具，真方便
安装完就能用
宝塔神器，好用
不错，是否可以在线更新？
不错，希望提供更多的免费主题包
超级好用，镜像速度快，一键安装，快速搭建服务器面板，系统稳定，操作方便，服务快捷！
店家的响应速度够快
方便好用
非常好，帮我解决的了大问题
非常热心，非常专业，非常认真负责，非常迅速
服务不错，客服很耐心！赞一个！
服务非常好，有个小问题，联系客服，马上给我解决了，效率非常高
杠杠的
还不错
还是这个好，自己折腾好久
好评
好用！
很不错
很方便，搞坏了，初始化就行
很好
很好 谢谢
很赞！很满意
可以
客服热情，沟通快速高效
能导出PDF，实用
能多2个主题吗
强烈推荐，  即使过了很久需要技术支持，也依然很热情
亲测好用
人工服务很快
软件的安装部署确实挺麻烦，这个镜像很实用
商家服务很好，很细心，谢谢
十分专业
实用方便
使用方便，操作良好，提供的文档nice
挺好的
完美
完美，真的开机就能用
网久还是懂用户需求的
文档做的真的不错，有专题有向导
无敌面板，稳定好用
五星
五星好评
响应速度快，真正解决了建站小白遇到的各种服务器问题
小哥哥的服务也不错
小姐姐的服务也挺专业
谢谢，好用
一键搞定
一直用你家的环境和网站，稳定，服务也精准到位！很棒
已经配好了onlyoffice，直接可以预览编辑文档，老板用心
用了你们两个镜像，都不错
运行很流畅
在线客服很及时
赞
掌声
这个好
这是第三次使用他们的服务，  后面还要继续用， 原因简单，就是有求必应
真不错
真给力
```

