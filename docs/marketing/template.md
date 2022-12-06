---
sidebar_position: 6
---

# 商品表现力

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

### English

#### Title

简单明了，避免知识产权风险。  

```
Free and Open Source Cloud ERP
```

#### Short Description

Websoft9 镜像短描述 + 应用短描述。应用短描述来自官方首页（从首屏区、底部、SEO Description 等获取）

```
Pre-configured, Cloud-native, secure, one-click to deploy ERPNext on AWS/Azure. ERPNext is... 
```

#### Long Description

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

#### Highlights for AWS{#highlights}

Azure 平台不需要本项内容

``` 
* Pre-configured, one-click to deploy on AWS EC2
* Application running on Docker, upgade so easy
* Paid image, free professional support for your business
```
