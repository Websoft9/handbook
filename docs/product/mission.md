---
sidebar_position: 1
---

# 法则

产品法则又称为产品哲学，是指导产品开发的工作范式。  

## 核心法则

Websoft9 所需的产品法则与世界级产品组织所展示的[核心原则](https://about.gitlab.com/handbook/product/product-principles)没有什么区别：

1. **顶级的产品经理是一切的基础**。没有顶级的产品经理，就没有优秀的产品。顶级的产品经理是卓越的生活实践洞察者，也是艺术或科学的狂热爱好者。
2. **以客户的视角看问题**
...

## 工作流程

Websoft9 采用敏捷的开发流程，关键要素如下：

### 人员架构

每个产品设一个产品经理，以及配套的其他人员：

* PM（Product Manager）：负责业务与需求分析，以及为产品里程碑负责
* EM（Engineer Manager）：开发经理，主要负责将需求转换为开发任务，并负责开发团队
* QA（Quality Manager）：产品质量控制负责人
* TW（Technology Writer）：产品文档写作
* Dev（Developer）：前端/后端开发者，汇报给 EM

### 流程

* PM 起草整个产品的需求概要，并交团队讨论
* PM 将每一个需求进行用户场景化描述以及预期的结果分析，讨论后由 EM 转换为具体的开发 Issues
* QA 和 TW 根据开发 Issue 分别创建对应的 Issue 或 在 Issue 中增加相应的工作部分

> 开发 Issue 需要尽可能详细地描述要解决的问题或需实现的功能点，以及计划使用的技术方案

### 标签

使用 Github 管理项目中会涉及几个标签：

* Enhancement
* PRD
* Dev
* Documentation
* QA


## IPD

Websoft9 推崇并实践 IPD 思想：IPD（Integrated Product Development 集成产品开发）是一套以市场需求为核心，将产品开发看成一项投资，通过共享货架产品和跨部门的团队准确、快速、低成本、高质量地推出产品，是世界一流企业普遍采用的一套系统工具和策略。

集成产品开发（IPD）是区别于定制产品开发（一次性定制）和先技术再开发（闭门造车）的一种开发方案。

可以被称之集成产品开发的企业，具有如下的研发特点：

1. 产品基于市场需求，对财务成功负责
2. 技术研发和产品开发分离，异步进行
3. 有货架产品和平台产品，供开发时共享，实现快速开发、批量复制、流水线生产
4. 产品可以针对一个个细分领域，形成子产品（子版本）
5. 多产品可有组合，形成集成解决方案

研发驱动的企业，从如下两个角度分析商业模式：

### 商业模式



2B型企业的商业模式主要有4种，以华为公司的业务板块举例：



- 卖技术（T），例如：华为海思专利授权费
- 卖产品（P），例如：华为存储
- 卖业务解决方案（B），例如：华为平安城市解决方案
- 卖运营服务经营客户（C），例如华为云



服务运营不是我们传统意义上的技术支持服务（比如：安装服务、集成服务等只是一种产品附带的属性），而是一种以产品为核心，结合一种行业，形成的通用性服务。



例如：中国电信，汽车4S店，SaaS软件



其中，核心技术支撑产品，产品支撑解决方案，解决方案面向某个场景服务化就变成了运营服务。



**网久软件在云市场售卖镜像，即一种卖产品的商业模式；**

**网久软件自建云市场，客户可以方便的获取演示、自助购买，那我们便转型成为一种卖运营服务的模式。**



### 研发产出模式


研发即通常所说的R&D：

- R（Research）指研究，主要指技术开发，关注基础原理和技术路径
- D（Development）指产品开发，关注技术成果的产业化，关注产品成果和市场财务成功



研发对应的有六种产品模式



1. 基础研究：发现自然规律，原理性探索，例如：TD-SCDMA标准
2. 应用开发：将业界非成熟的应用技术变成成熟技术，例如：华为5G技术
3. 项目开发：基于单客户的一次性个性定制开发
4. 产品开发：细分客户群体，把应用开发转变成可以生产、可测试、可服务、可批量复制的模式
5. 解决方案：以产品为核心，也场景和行业作为对象，提供总体集成方案
6. 服务运营：以运营客户作为商业模式，提供一类标准化服务（可订阅最佳），例如：Saas软件



网久软件目前处于4的阶段，并往5,6推进

### 软件也是制造业

Websoft9不是内容创业，是产品创业，软件产品的生产与制造业是非常类似的，都会把“产品稳定、使用简单、价格合理。”当做核心的企业。



当前世界上有四种主流从制造业商业文化：



- 美国：由于美国早已转型成为金融和信息产业为的，传统制造业早已不受待见，此处不在分析。美国公司擅长商业运作，包括宣传、并购。
- 德国：德国制造业也被称为“众厂之厂”，是世界工厂的制造者，德国制造是质量的代名词。德国人淡泊名利，对生活要求不高，够用就行，正是这种文化，造就了其民族的“秩序感”。有句德国的谚语：“秩序是生命的一半”，秩序主义可以说从工厂到日常，涵盖了德国人生活的方方面面。德语“秩序”（Ordnung）一词，包含了整顿、整理、整齐、调理、规则、规章、次序、顺序、制度、安宁、秩序、纪律等等诸多的含义。这种秩序主义应用到德国制造，就主要表现为工业生产的流程主义，使得德国制造业表现出井然有序、浑然天成。自律下的宁静应该也是德国制造的一个核心关键词。德国的一大商业法则就是：可以有小公司、慢公司，但极少有差公司，绝没有假公司。
- 日本：日本制造业与德国有异曲同工之妙，精细化的生成，流程不断优化改造，细节持续迭代，造就了日本制造业“高质量”的代名词。不过与德国相比，日本制造业略显“小家子气”，以汽车制造业为例，日本汽车在内饰、噪音控制、组装严密性上享誉世界，而最先进的驾驶操作、发动机/变速箱上进步缓慢。如果，日本制造业似乎节节败退，这个与其民族缺乏“雄才大略”的人才，以及“谨小甚微”的国民集体主义性格是有关的。
- 中国：中国制造经历了三个阶段，第一个阶段是1950-1978年国有制造业，第二个阶段是1978年改革开放-2008年金融风暴这个事前，中国是以出口加工的外向型制作模式，血汗工厂大干猛干，质量残次不齐，但也积累了先进的制造流程。第三个阶段是2008年至今品牌（追求高质量），国内品牌逐渐走向海外市场，质量有大幅度提升，出现了华为、美的、三一等优秀的制作企业。中国人有句话叫“学以致用”，国人非常勤奋，也非常开放



当前世界有一种所谓跨行竞争”的现象，比如乐视汽车，本质上不是制造业，而是凌驾于之上的“资本”。我们有太多的快公司、假公司，而且越来越多的公司创始人开始直接出自资本市场、媒体等，跟制造几乎毫无关系的领域，公司一再强调估值、融资。这实则是在“宁静”上做不到。



Websoft9要坚决远离乐视这种不良文化现象，我们是在面向企业提供服务的领域谋求生存，我们所在的市场并不十分广大，但是对于我们的团队来说足矣，不是每个公司都要成为华为、阿里那样的巨型公司，我们做一个小而美的公司也是十分美好的。



总而言之，Websoft9需要学习各国制造业的文化，包括：



- 工程技术上以德国为标准，有秩序的、安静的专注于自身的领域，不断提升生产水平（工艺），做出高质量的产品
- 商业运作上以美国为学习对象，重视行业趋势、重视生态合作
- 用户体验上学习日本，全员参与用户体验的改善，保证每天一点进步
- 基础技术和研究上进一步突破（目前是空白）

## 怎么做？

### 相似产品

从相似产品中洞察用户需求，形成差异化竞争：  

* [Restack](https://www.restack.io/)
* [clever-cloud](https://www.clever-cloud.com/)
* https://www.harpoon.io/blog  可视化k8s，以及拖拽编排应用
* render
* Jelastic PaaS Lite Edition 是一个专用的平台即服务，自动安装在 DigitalOcean 之上，以加快应用程序部署、简化基础设施管理并降低托管成本。
* https://elest.io/ 可以将200+应用部署到指定的云平台（同时创建服务器）
* https://www.virtuozzo.com/  
* https://docs.porter.run/self-hosted/setup/local/    基于k8s的以应用为中心的 PaaS
* https://github.com/Yelp/paasta
* https://coolify.io/ 同上
* https://www.cloudron.io/ 
* https://www.casaos.io/  家庭云服务器操作系统（实际上就是docker应用管理）
* https://umbrel.com/家庭云服务器操作系统
* https://github.com/meienberger/runtipi /家庭云服务器操作系统
* coollabs.io 我们未来要做的一站式apps应用中心
* https://www.truenas.com/truenas-scale/  NAS+应用商店
* https://homelabos.com/docs/#analytics 同上
* Web 自托管平台评测 Cloudron vs YunoHost vs Sandstorm
* https://github.com/caprover/caprover  我们未来要做的一站式apps应用中心
* https://www.univention.com/downloads/ucs-online-demo/ 同上，占领德国教育行业
* https://www.softaculous.com/  同上
* https://yunohost.org/en/apps?q=%2Fapps 同上
* platform.sh 基于 K8s 的应用中心
* https://kubeapps.com/  Bitnami 基于 K8s 的应用中心
* Aptible 是一个基于 Docker 的平台即服务
* https://cycle.io/platform/ 托管的容器编排与监控软件
* https://hostman.com/  应用托管（通过平台买服务器，连接github项目，剩下的工作平台自动完成）
* https://dokku.com/docs/getting-started/installation/  基于容器的非常完整的部署与应用管理  CLI 程序  可惜不支持docker-compose
* https://github.com/tsuru/tsuru
* https://cloudify.co/
* https://www.hashicorp.com/products/nomad  与Kubernetes竞争的产品，更加轻量级
* DC/OS 与Kubernetes竞争的产品，更加轻量级
* OpenShift Kubernetes竞争的产品
* https://github.com/hashicorp/nomad  容器编排工具，提供可视化界面
* VMware Tanzu Community Edition 是一个功能齐全、易于管理的 Kubernetes 平台，适用于学习者和用户，尤其是在小规模或预生产环境中工作的学习者和用户
* https://mobyproject.org/# 容器组装
* Supabase is an open source Firebase alternative.
* Linux下常见的web运行环境和控制面板汇总：https://cloud.tencent.com/developer/article/1618907?from=information.detail.virtualmin
* 服务器面板(webops) Plesk 
* Hosting Panel: http://docs.ajenti.org/en/latest/man/install.html
* fastpanel   非常优秀的免费 PHP 面板，比宝塔更好
* ispconfig 服务器面板
* https://www.cloudpanel.io/  对php主流框架进行了很好的集成
* https://froxlor.org/  面板
* porter.dev
* Back4app
* Parse
* AWS Amplify
* Hoodie
* Cloudboost
* Usergrid
* https://www.cloudpanel.io/technology-stack/
* https://www.casadila.com/  托管型开源应用中心
* cyberpanel  PHP 面板
* https://qoddi.com/  托管型 PaaS
* qovery.com 托管型 PaaS
* CloudFoundry（阿里云web+基座）
* https://www.linode.com/  托管型 PaaS
* https://www.engineyard.com/ 托管型 PaaS
* https://jelastic.com/ 托管型 PaaS
* devilbox 基于docker的可视化运行环境
* mirantis  k8s 可视化管理
* https://github.com/coollabsio/coolify
* https://railway.app/
