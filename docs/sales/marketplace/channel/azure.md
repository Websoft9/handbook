---
sidebar_position: 1
---

# Azure

## 开通账号

开通 Azure 的 Marketplace ，需先使用企业邮箱先注册成为[合作伙伴](https://learn.microsoft.com/zh-cn/partner-center/)，然后在合作伙伴中申请 Marketplace 功能。具体流程如下：

1. 使用企业注册合作伙伴
2. 登录合作伙伴门户，验证企业域名和实名制认证（过程中如果被拒绝后，需要发工单请求支持，认证时间可能会长达40天）
3. 点击门户中用户图标，配置 Payout 和 tax 项
4. 开通 Marketplace

> Tax 重点在于填写 w9 表格（建议 FireFox 浏览器）。企业微盘中也存储了一份填写过的 w-9 模板

##### 增加 w9 表格的时候选择保税豁免吗？
不选择

##### 银行信息填写的时 Checking 与 Saving 有什么区别？
Checking 相当于中国的活期，Saving 有取款次数限制。所以一般选择 Checking

##### 如果注册后无法登录，怎么办？
请给Microsoft发送工单，他们的工作人员会通过邮件非常耐心的帮您处理问题

##### 什么是业务位置（Location）？
Partner Center 支持一个总公司下，增设多个分公司账号，每个分公司被称之为 Location

## 组织架构

* One Commercial Partner 是Microsoft的一个部门，让每个合作伙伴都可以直接联系一个伙伴专员，快速获得业务、账号、市场推广等各方面的支持。
* Legal 权利极大，可以针对合规性存在重大的问题的服务商进行严格的惩罚，比如：直接删除账号

## 合规管理

Azure 对合规性要求极其严格，超过3次以上的知识产权投诉就会导致账号被封

## 商品管理

### 发布

在 Azure 上发布商品，主要步骤如下（以镜像产品为例）：

1. 准备好符合[要求](https://docs.azure.cn/zh-cn/articles/azure-marketplace/imageguide#3-%E4%BA%A7%E5%93%81%E9%95%9C%E5%83%8F%E8%A6%81%E6%B1%82)的镜像，并获取到镜像 VDH 的 SAS URL
   ```
   https://catech123.blob.core.windows.net/vhds/TestRGVM2.vhd?st=2018-05-06T07%3A00%3A00Z&se=2019-08-02T07%3A00%3A00Z&sp=rl&sv=2017-04-17&sr=c&sig=wnEw9RfVKeSmVgqDfsDvC9IHhis4x0fc9Hu%2FW4yvBxk%3D
   ```
2. 创建商品（Offer）和 计划（Plan），将 VHD 的 URL 填写到 Plan 中
3. 提交并等待审批完成

> VHD 的所属账号与商品管理账号不需要一致

### 变更

变更的工作包括：商品信息变更、增删 Plan、改价等。具体以参考一下文档：

* [更新商业市场中的现有产品/服务](https://learn.microsoft.com/zh-cn/azure/marketplace/update-existing-offer)
* [更改销售中商业市场产品/服务的价格](https://learn.microsoft.com/zh-cn/azure/marketplace/price-changes)

下面列出几个非常关键的信息：  

* 免费不可以变成收费 
* 商品涨价发布后 [90 天生效](https://learn.microsoft.com/zh-cn/azure/marketplace/price-changes#plan-a-price-change)
* 删除 Plan 已有客户继续付费，但会导致客户无法重新部署（基于自定义镜像创建 VM 也不可以），故一般不允许删除 Plan

## 订单促进

### 客户

Azure 上有几种客户来源：  

* Enterprise (EA) 开发/测试订阅：组织客户（企业账号）
* Cloud Solustion Provider (CSP)：总代销售，例如：英迈、SYNNEX、佳杰、神州数码、联强
* pay as you Go：个人客户
* GTM：微软联合销售客户，单子最大。类似华为严选

### 优惠


### 试用
*  Free Try：通过商品设置即可让客户最低一个月的免费试用
* Test Drive：客户直接免费使用软件，云资源由服务商承担 

### 分销
### Co-Sell
### 激励
### 搜索优化

目前站内搜索实验有以下结论：

##### 有效搜索区域：

- Offer Name
- Offer Description
- Plan Description

##### 有效信息展示区域：

- Plan Name：列出主要组件，如数据库+可视化工具；软件+运行环境

##### 无效搜索区域：

- Plan Name
- Plan Summary
- Search result summary
- Short description

------

##### 初步结论：

短数字效率高，单词空格有效率高，单词与文字空格优于不空格
虽然不空格的短版本排列方式会使产品独一显示，但对转化率的影响不大。参考竞品，建议遵照国外用户的输入习惯来进行排列设置

##### 初步优化：
- offer描述里，组件版本**空格**展示至小数点后一位：如“PHP 7.4, Apache 2.4"
- plan描述里，组件**空格**展示详细版本: 如”PHP 7.4.19, Apache 2.4.46, MySQL 5.7.34"
- 环境类产品的plan name, **不空格**展示主要组件：如”PHP7.4.19, Apache2.4, MySQL5.7 on CentOS7.9"
- 数据库类产品的plan name，**不空格**展示含可视化组件：如”MySQL5.7.34, phpMyAdmin5.1 on CentOS7.9"


## 常见问题

#### Azure 有哪些 Linux 发行版？

与 Azure [官方合作](https://learn.microsoft.com/en-us/azure/virtual-machines/linux/endorsed-distros#platform-image-partners)的发行版包括：

- 开源：Ubuntu, Debian, AlmaLinux, Oracle Linux
- 付费：Red Hat, SUSE, Ubuntu Pro

