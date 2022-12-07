---
sidebar_position: 60
---

# FAQ

#### Q: 各平台的服务器名称？
阿里云 / Alibaba Cloud - **ECS** ( Elastic Compute Service )
腾讯云 / Tencent Cloud - **CVM** ( Cloud Virtual Machine )
华为云 / HUAWEI Cloud - **ECS** ( Elastic Cloud Server )
AWS - **EC2** ( Elastic Compute Cloud )
Azure - **VM** ( virtual machines )

#### Q: 各平台的轻量应用服务器名称？
阿里云 / Alibaba Cloud - [**Simple Application Server**](https://help.aliyun.com/document_detail/58612.html?)
腾讯云 - [**Lighthouse**](https://cloud.tencent.com/document/product/1207/49819)
华为云 / HUAWEI Cloud - [**云耀云服务器 / HECS**](https://support.huaweicloud.com/productdesc-hecs/hecs_01_0001.html)** ** ( Hyper Elastic Cloud Server )
AWS - [**Lightsail**](https://aws.amazon.com/lightsail/)

#### Q: 各平台的轻量应用服务器可以订阅市场镜像吗？
阿里云 / Alibaba Cloud - **NO**
腾讯云 - **NO**
华为云 / HUAWEI Cloud - **YES & NO ** ( 只能订阅服务商提供的轻量级应用，该应用不公开销售 )

#### Q: 各平台的镜像制作机在哪？
阿里云  / Alibaba Cloud / 腾讯云 / 华为云 / HUAWEI Cloud - **香港**
AWS - **US East (N. Virginia)**

#### Q: 镜像制作好后，接入区域在哪？
阿里云  - **华东1（杭州）**
腾讯云  - **上海**
华为云  - **北京四**
AWS - **US East (N. Virginia)**
Alibaba Cloud - **HongKong**
HUAWEI Cloud - **HongKong**

#### Q: 镜像资源存储区域在哪？
阿里云  - **华北3（张家口）**
腾讯云  - **北京**
华为云  - **即接入区**
AWS - **无**
Alibaba Cloud - **无**
HUAWEI Cloud - **无**

#### Q: 镜像上架版本命名规则？
常规：软件名称 + 版本号（保留两个小数点）+ 带版本号系统名：**Seafile8.0.4-AmazonLinux2**
特殊：

- 因平台问题，需要重做，与既有版本一致，则再加.0：**Seafile8.0.4.0-AmazonLinux2**
- 平台有字数限制，则省略操作系统版本号/操作系统：**Seafile8.0.4-AmazonLinux**
- 运行环境不同，则需显示：**Seafile8.0.4-LAMP-AmazonLinux2**

#### Q: 各平台镜像跨区域复制有什么特点？
**阿里云**  - 单个镜像单次只能复制至一个区域，时间取决于镜像文件大小、网络传输速度、并发任务的排队数量。
**腾讯云**  - 单个镜像最多支持一次性复制到10个地域
**华为云**  - 单个镜像单次只能复制至一个区域，且需选择一个[IAM委托](https://support.huaweicloud.com/ims_faq/ims_faq_0042.html)，用于执行镜像的跨区域复制
**Alibaba Cloud** - 同阿里云
**HUAWEI Cloud** - 不支持中国大陆和非中国大陆（亚太、非洲、欧洲等）区域之间相互复制，目前不支持，每个用户只能同时跨区域复制5个镜像

#### Q: 平台产品创建前，应做的数据准备工作有哪些？
**国内平台** - 将图标及视频文件保存至本地，华为云另准备产品文档链接PDF文件及License链接doc文件
**HUAWEI Cloud** - 需要先将镜像跨区域复制至四个区域：HK, BKK, SG, JHB
**AWS** - 通过 "Assets" - "Amazon Machine Image" - "Add AMI" 将镜像共享至平台；上传LOGO文件至OSS
**Azure** - 两种方式：

- 通过winscp连接服务器，在putty里运行命令获取镜像VHD链接
- 将镜像分享至平台

#### Q: 商品命名有什么要求？
**国内平台** - 中文描述+应用名称（+运行环境）
例：企业建站系统 WordPress（LAMP）
**注**: 华为云平台品名不能超过76字符

**AWS** - 应用名称+版本分类+运行系统
例：ONLYOFFICE Community Edition（Amazon Linux）或  HAProxy Community on Ubuntu
**注**: 运行环境的表达方式取决于字数多少。字数多用（），字数少则用on。国外平台由于版本及商标协议的原因，必须先弄明白该产品名称是否能正常写入标题。

**Azure**

- _Offer ID_ - 小写，不要空格小数点，不可更改。纯品名，展示在商品市场URL最后面，例：wordpress
- _Alias_ - 与name一致，便于后台管理，例：WP CMS
- _Offer Name_ - 注意合规，不需系统名，例：WP CMS

#### Q: 商品版本/SKU的命名规则是什么？
**阿里云 / Alibaba Cloud** - V+版本号+运行系统
例：V5.6.2 - CentOS7.9
**注：**字数有限制的情况下，应保持详细版本号，减少空格，甚至不显示系统版本

**腾讯云** - v+版本号
例：v5.6.2
**注：**字数有限制的情况下，应保持详细版本号，减少空格

**华为云** - 产品英文名_版本号
例：WordPress59_Discuz34_LAMP
**注：**由于华为云平台限制，SKU命名元素只能用英文/数字/下划线，在保持产品名称及版本号的基础上，初步省略小数点及空格；字数不超过76字符

**HUAWEI Cloud** - 产品名+版本号+运行系统
例：WordPress 5.6.2 (LAMP)

**AWS** - 产品名+版本号+运行系统
例：WordPress 5.6.2 -LAMP - Amazon Linux 2

**Azure**

-  _**Plan ID**_ - 用于管理员后台维护，小写，不要空格小数点，不可更改。根据产品可替代性选择命名方式： 
   -  如采用同一Plan下替换VHD，则纯产品名+运行系统，例：grafana-centos 
   -  如需保留多个Plan，则产品大版本+运行系统，例：mysql57-centos 
-  _**Name**_ - 用于管理员后台维护，与Plan ID同页面设置，不可更改。命名分两种情况： 
   - 只更新VHD的产品，不需要带版本。例：Grafana on CentOS
   - 增加plan的产品，需要带小数点一位后版本。例：MySQL 5.7 on CentOS
-  _**Plan Name**_ - 用于前端显示。命名分两种情况： 
   -  产品具体版本+运行系统版本，例： Grafana 7.1.5 on CentOS 7.9 
   -  Runtime系列产品，请体现主要组件，以便增加曝光率，例：PHP7.2,MySQL5.7,Apache on CentOS7.9

#### Q: 版本简介怎样写？
**国内平台** - 主组件具体版本 + 其他组件小数点后一位版本 on 带版本号操作系统
例：WordPress 5.6.2, PHP 7.4, MySQL 5.7, Apache 2.4, Redis 5.0, Docker 20.10, phpMyAdmin on CentOS7.9
**注：**字数有限制的情况下，应保持详细版本号及主要组件版本号，次要组件版本号可省略

**AWS** - 不需要

**Azure**

-  _**Plan Sammury**_ - 有字数限制，应用详细版本+组件小数点一位后版本+运行系统(版本视限制添加)
例：WordPress5.7, Apache2.4,PHP7.4,MySQL5.7,phpMyAdmin5.1,Redis5.0,Docker20.10 on CentOS7.9 
-  _**Plan Description**_ - 应用详细版本+组件详细版本+运行系统
例：WordPress 5.7, Apache 2.4.46,PHP 7.4.19,MySQL 5.7.34,phpMyAdmin 5.1.0,Redis 5.0.9,Docker 20.10.2 on CentOS7.9 

#### Q: 选择哪些售卖地域？
**阿里云 / 华为云 / Alibaba Cloud** - 选择全部区域
**腾讯云 **- 除【雅加达】及【圣保罗】之外的全部区域
**HUAWEI Cloud** - 目前只支持四个区域：HK香港，BKK曼谷，SG新加坡，JHB约翰内斯堡
**AWS** - 除 us-gov-east-1 GovCloud East 和 us-gov-west-1 GovCloud West 外，全选
**Azure** - 除 China 外，全选（如果为BYOL/free产品，可以选择China）

#### Q: 怎样设置该商品的服务器限制条件？
**阿里云 / Alibaba Cloud** - 根据产品要求限制最低配置核数及内存，只有高于此要求的服务器在市场能看到该产品
**腾讯云** - 无此设置
**华为云 / HUAWEI Cloud** - 根据产品要求的最低配置推荐核数、内存及系统盘大小
**AWS** - 根据产品要求，排除不符合最低配置的云服务器型号，常规推荐 t2 medium（2C4G），勾选make available for all future instance types
**Azure** - 在Recommended VM sizes里选择3个，根据产品要求参考[服务器型号表](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes)，常规推荐以下三款：
D2s Standard v3，D4s Standard v3，F4s Standard v2

#### Q: 商品图片的尺寸及大小要求？
**阿里云 / Alibaba Cloud** - 240 x 240px, ≤2M，PNG格式 （原为：200 x 150px）
**腾讯云** - 390 x 260px, ≤2M，PNG格式
**华为云 / HUAWEI Cloud** - 120 x 120px, ≤5M，PNG格式
**AWS** - 所有产品LOGO均换为Websoft9品牌logo，240 x 240px，PNG格式
**Azure** - 216 x 216px - 350 x 350px之间，PNG格式

**注：**腾讯云单独制作；建议LOGO源文件尺寸宽240x240px，以便在此基础上匹配各平台需求；国内外平台两套图标：国内为厂商图标，国外为重构图标

#### Q: 商品截图的尺寸及大小要求？
**阿里云** - 图文混排模式：800px宽；单独上传至截图区：≤1M，PNG格式
**腾讯云** - 图文混排模式：无要求，PNG格式
**华为云** - 单独上传至截图区：800 x 600px, ≤5M，PNG格式。产品授权证书上传至此
**HUAWEI Cloud** - 不能插图
**Alibaba Cloud** - 图文混排，830px宽，PNG格式
**AWS** - 不能插图
**Azure** - 单独上传至截图区：1280 x 720px，PNG格式

**注：**建议截图源文件尺寸宽1440px，以便在此基础上匹配各平台需求

#### Q: 商品视频的大小及格式要求？
**阿里云** - MP4格式, <50M
**腾讯云** - 不需要
**华为云** - MP4（H264） / MOV格式，1280 x 720px，<200M
**HUAWEI Cloud** - 不需要
**Alibaba Cloud** - 不需要
**AWS** - 只需LINK
**Azure** - 需提供缩略图(PNG)：1280x720，仅接受Youtub及Vimeo链接，必须是指向视频页面的直接链接，不能是跳转链接

#### Q: 商品使用指南的格式要求？
**国内平台** - 上传PDF文件
**国外平台** - 提供产品文档链接

#### Q: 商品数据元素（图片、视频、pdf文件）的命名要求？
**图标** - 品名-平台-websoft9.png
**图片** - 品名-页面-websoft9.png
**视频** - 品名-平台-websoft9.mp4
**文档** - 品名-websoft9.pdf

#### Q: 产品简介的格式要求？

**国内平台** - 由websoft9提供的+**应用名称**，预装了+**详细主要组件版本**，可在云服务器上一键部署。一句话简洁突出产品特色

例：由Websoft9提供的WordPress镜像环境，预装了官方下载的Wordpress5.7, PHP7.4, MySQL5.7, Apache等组件，可在云服务器上一键部署，并能一键升级到官方当前版本，主题和插件任意升级。WordPress是面向全球用户的CMS，功能全面

**Azure / Alibaba** - Pre-configured, customizable, secure, one-click to deploy **应用名称** on **平台**。**一句话简洁突出产品特色**

例：Pre-configured, customizable, secure, one-click to deploy WordPress on AWS. WordPress is open source software you can use to create a beautiful website, blog, or app

**AWS** - 同Azure，最后需增加：**This product has charges associated with it for Websoft9 support.**

例：Pre-configured, customizable, secure, one-click to deploy WordPress on AWS. WordPress is open source software you can use to create a beautiful website, blog, or app. This product has charges associated with it for Websoft9 support.

#### Q: 产品详情的格式要求？
**阿里云详情格式**

-  产品介绍 
-  组件 - 应用详细版本+其他组件带小数点一位后版本 on 运行系统 
-  最低配置 - 参考Github的相关ansible项目说明 
-  面向对象 
-  应用场景 
-  试用 - （官方演示地址+）立即购买链接及按量计费模式提醒 
-  使用指南 - 参考文档“初始化安装”章节，说明怎样访问产品及安全组端口，平台安全组设置文档链接 
-  在线文档 - 文档链接 
-  售后支持 - 售后条款链接，自助免费支持（官网链接）及收费人工支持（平台相关服务产品链接） 
-  合作案例 - 图片，图像信息填写固定URL，以便之后一对多修改
**注：**阿里云平台产品详情区域图片固定800px宽度，上下20px等距，左对齐 

**腾讯云详情格式**

-  产品说明 
-  产品截图 - 上传图片，无尺寸大小限制，但建议图片统一宽度（1440px）以便之后管理 
-  功能特征 
-  组件 - 应用详细版本+其他组件带小数点一位后版本 on 运行系统 
-  最低配置 - 参考Github的相关ansible项目说明 
-  面向对象 
-  应用场景 
-  试用 - 立即购买链接及按量计费模式提醒 
-  使用指南 - 参考文档“初始化安装”章节，说明怎样访问产品及安全组端口，平台安全组设置文档链接 
-  在线文档 - 文档链接 
-  售后支持 - 自助免费支持说明，及收费人工支持（平台相关服务产品链接）
**注：**腾讯云平台不支持外网链接 

**华为云详情格式**

-  产品说明 
-  组件 - 应用详细版本+其他组件带小数点一位后版本 on 运行系统 
-  最低配置 - 参考Github的相关ansible项目说明 
-  面向对象 
-  应用场景 
-  试用 - 按量购买提醒 
-  使用指南 - 参考文档“初始化安装”章节，说明怎样访问产品及安全组端口 
-  在线文档 - 文档链接 
-  常见问题
**注：**华为云平台产品详情区不支持图片及链接 

**Alibaba Cloud**

-  product introduction - 产品介绍 
-  product screenshot - 产品截图 
-  Image Components - 应用详细版本+其他组件带小数点一位后版本 on 运行系统 
-  ECS requirements - 参考Github的相关ansible项目说明 
-  Applicable Scene 
-  Quick Start - 参考文档“初始化安装”章节，说明怎样访问产品及安全组端口，以及产品文档链接 
-  Why use Websoft9 Image? 
-  Intellectual Property Statement - 商标声明及开源协议，及联系方式
**注：**Alibaba Cloud平台产品详情区域图片固定830px宽度，上下20px等距，左对齐 

**HUAWEI Cloud**

-  product introduction - 产品介绍 
-  Image Components - 应用详细版本+其他组件带小数点一位后版本 on 运行系统 
-  ECS requirements - 参考Github的相关ansible项目说明 
-  Applicable Scene 
-  Why use Websoft9 Image? 
-  Intellectual Property Statement - 商标声明及开源协议，及联系方式
**注：**HUAWEI Cloud平台字数有5000限制，不支持图片及链接，目前为单独区域上传带文档链接PDF文件。(计划）增加Quick Start章节 

**Azure**

-  product introduction - 产品介绍，首句应为：This product integrated + **软件名** which is + **主要功能**
-  Image Components -  
   -  单Plan：最新应用版本 +其他组件（均为带一位小数点版本) on 运行系统 
   -  多Plan：则产品大版本合集+其他组件 on 运行系统，例：Odoo 13 / Odoo 12 / Odoo 11，.... on Ubuntu 20.04 
-  VM requirements - 参考Github的相关ansible项目说明 
-  Applicable Scene 
-  Why use Websoft9 Image? 
-  Intellectual Property Statement - 商标声明及开源协议，及联系方式
**注：**Azure平台支持HTML语言，注意在小节标题前后加

**AWS**

-  product introduction - 产品介绍 ，首两句应为：This is a repackaged + **软件名** with professional support for your business.**主要功能**.
-  Image Components - 应用版本 +其他组件（均为带一位小数点版本) on 运行系统 
-  EC2 requirements - 参考Github的相关ansible项目说明 
-  Applicable Scene 
-  Disclaimer 
-  Why use Websoft9 Image? 
-  Intellectual Property Statement - 商标声明及开源协议，及联系方式
**注：**AWS平台限制1500字符，注意不要输入中文标点符号，否则系统检测不通过 

#### Q: 商品搜索关键词怎样设置？
**阿里云** - 产品,类别功能,一键部署,websoft9。将关键词嵌入标题及副标题，更提高搜索效率
**腾讯云** - 在”产品标签“处设置，最多5个：产品,类别,功能,websoft9,网久
**华为云** -
**Alibaba Cloud** - 最多30个字符，逗号分隔，卖家名称、产品名称和所有类别。将关键词嵌入标题及描述，搜索效率高于单独设置。
**HUAWEI Cloud** - 最少3个关键词，最多45个字符：产品,类别功能,一键部署,卖家名称
**AWS** - 最多250个字符，开放字段，逗号分隔，卖家名、产品名和所有类别将自动添加为搜索关键字
**Azure** - 关键词设置区域：品名，摘要，说明，详细描述，视频，截屏

#### Q: 平台商品计费方式及注意点？
**A. 按量付费+包年包月**
阿里云 - 按量价格不可改，包年包月价格可变，已选方式不能删减，只能增添
华为云 - 价格均可改动，但计费方式不可变
腾讯云 - 价格与模式均不可改
Alibaba Cloud - 价格均不可改，已选方式不能删减，只能增添
HUAWEI Cloud - 价格均可改动，但计费方式不可变

**B. 按量付费+包年**
AWS - 价格均可改动，审核后，有90天过渡期

**C. 按量付费**
Azure - 可改动，对现有用户在审核发布90天后的首月第一天生效

#### Q: 商品最终用户协议怎么选择？
**国内平台** - 复制拷贝 镜像产品 或 服务产品 的最终用户协议
**Alibaba Cloud / HUAWEI Cloud** - 提供EULA链接：[End User Licence Agreement](https://support.websoft9.com/docs/legal/eula)
**AWS** - 选择平台提供的官方标准EULA
**Azure** - 选择平台提供的官方标准EULA, 服务商可以添加十条修正条款

#### Q: 用户隐私协议？
链接：[Privacy Policy](https://support.websoft9.com/docs/legal/privacy)

#### Q: 商品提交审核后，可以取消吗？
**阿里云 / Alibaba Cloud** - 服务商后台不可取消，可与平台对接人员申请驳回，再次提交镜像需重新命名
**华为云** - 可取消
**腾讯云** - 可取消
**HUAWEI Cloud** - 不可取消
**AWS** - 可在提交之后短时间内取消
**Azure** - 可取消。注意：重新提交时，必须更改SKU版本号及VHD链接

#### Q: 后台显示商品已审核完成，接下来要怎样做确保上架成功？

-  前台是否能搜索到该产品 
-  前台显示信息是否准确 
-  区域发布是否完整 
-  购买价格是否正确 

#### Q: 产品怎样保存/修改草稿？
**阿里云  / Alibaba Cloud** - 新产品需点击”下一步“才能保存，已上架产品不能保存草稿。注意：再次打开草稿会要求重新关联镜像
**腾讯云** - 点击”保存“即可
**华为云 / HUAWEI Cloud** - 会自动保存，注意：已上架产品的草稿不能删除，再次打开草稿会要求重新推荐服务器型号
**AWS** - 点击”save“或”next“都可以保存，在Requests history列明，注意：该平台保存期为6个月，时间从最初创建之日开始计算
**Azure** - 点击”save draft“保存，注意：VHD地址有时间限制，超过一周请重新生成
