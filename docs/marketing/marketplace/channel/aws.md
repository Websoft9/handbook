---
sidebar_position: 2
---

# AWS

AWS 是云市场的发明者和先驱，引领这个领域快速发展。我们需要不断阅读：[官方文档](https://docs.aws.amazon.com/marketplace/index.html)。

## 开通账号

AWS Marketplace 只要符合[条件](https://aws.amazon.com/marketplace/management/tour/)，即可直接注册。    

Azure Partner 注册与AWS Marketplace 是两个不同的体系，目前我们通过 AWS（中国）已经注册成为全球合作伙伴。

> 银行账号地址必须与AWS账号的地址保持一致，否则无法通过付款

## 合规性

AWS 相对 Azure 来说，合规性管理宽松一些。但也必须严格考虑。

AWS云市场遵循 Digital Millennium Copyright Act (DMCA)。收到知识产权的投诉，参考：[DMCA 通知处理](https://aws.amazon.com/cn/premiumsupport/knowledge-center/dmca-counter-notice/)

## 商品管理

### 类型

AWS支持的产品类型包括镜像、容器、许可证、CloudFormation等多种。

* 容器类：所有相关的容器镜像必须上传到AWS镜像仓库，并获得审核通过方可开始[定价](https://docs.aws.amazon.com/marketplace/latest/userguide/pricing-container-products.html)。
* 许可证类：AWS Marketplace 买方还可以使用 AWS License Manager 跟踪从 Marketplace 获得的自带许可 (BYOL) 软件，并保留其所有许可证的整合视图。

### 发布

1. 准备好符合 [要求1](https://docs.aws.amazon.com/zh_cn/marketplace/latest/userguide/best-practices-for-building-your-amis.html) [要求2](https://docs.aws.amazon.com/zh_cn/marketplace/latest/userguide/aws-marketplace-listing-checklist.html) [要求3](https://docs.aws.amazon.com/zh_cn/marketplace/latest/userguide/product-and-ami-policies.html) 的镜像。 常见的要求：

   ```
AWS Marketplace 的源 AMI 必须在美国东部（弗吉尼亚北部）地区中提供。
AMI 必须使用 HVM 虚拟化。
AMI 必须使用 64 位架构。
AMI 必须是由 Amazon EBS 支持的 AMI。当前我们不支持由 Amazon S3 提供支持的 AMI。
AMI 必须使用受支持的文件系统才能通过 AMI 自助服务扫描。受支持的文件系统包括：Ext2、Ext3、Ext4、Xfs、Vfat、Lvm 和 NTFS。不支持加密的文件系统。
基于 Linux 的 AMI 必须锁定/禁用 root 登录，仅允许通过用户账户（非“root”）进行 sudo 访问。
AMI 不得包含授权密码或授权密钥。
AMI 不得使用默认密码访问用户界面。我们建议使用随机化处理，例如使用 instance_id。
   ```

2. 云市场后台，将镜像推送扫描（需填写操作系统[用户名](https://support.websoft9.com/docs/aws#username)）
3. 创建商品，关联镜像
4. 审核通过后，进入产品的“Request Status”点击“Approve”

> 发布商品的账号=镜像提供的账号

### 变更

变更的工作包括：商品或规格的隐藏、下架，下面具体列出操作流程

#### 信息修改

通过产品的【Request changes】会自动审核。而直接【Edit】产品会触发人工审核。

#### 商品隐藏

暂无此功能

#### 商品下架

【Unpublish product】操作即可，下架后需最少为老客户提供 90 天的支持。  

#### 商品删除

未知

#### 版本隐藏

未知

#### 版本下架


## 订单促进

### 改价

可自主改价，改价后 90 天生效。改价有异常，[AWS Marketplace Managed Catalog Operations (MCO)](https://aws.amazon.com/marketplace/management/contact-us/) 团队会进行干预。

### 分销

AWS Marketplace 有[独立的分销体系](https://aws.amazon.com/marketplace/partners/channel-programs)（区别于APN），它的分销体系包括：

● Consulting Partner Private Offers (CPPO)
● Solution Provider Private Offers (SPPO)

### 搜索优化


## 操作备忘 

### 客户数据

AWS提供客户数据，但需要自建S3作为客户资料的存储地，然后与云市场关联。

### 订阅记录

根据用户提供的12位ID号，在【云市场后台】>【Support】查询用户购买的商品

### 私人优惠

AWS的私人优惠（Offer）是一个有趣的功能，它给卖家以及分销商提供了针对用户的私密报价机会，可以加价也可以讲价。

### 退款

在【云市场后台】>【Support】中有 **Request refund	** 功能。

### 获取支持

AWS不提供任何邮件或电话支持服务，直接在云市场控制台的底部，点击【Contact Us】，提交工单


### FAQ

##### 子账号如何访问Billing？

1. 新建一个策略并命名为【BillingFullAccess】，并附加给子账号
2. 主账号访问[账单主页面](https://console.aws.amazon.com/billing/home#/account)，往下拉，勾选【激活 IAM 访问权限】

##### 营业地址为【中国】导致无法给 AWS 资源消耗付款？

解决方案：将 Websoft9 企业账号设置为默认付款方式
