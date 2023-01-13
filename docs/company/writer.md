---
sidebar_position: 1
---

# 如何写作？

管理是组织和指导人类各种实践活动的行为。企业管理者需要广博的知识，能够对战略做出判断，并分解具体的执行任务。同时，企业管理者又需要关注“人”这个最重要的因素，充分用好人、管好人。  

管理者如何让企业行动一致，如何让优秀人才的思想火花充分碰撞？

人类千百年实践证明，对企业**管理哲学**的不断总结和优化才是企业的制胜法宝，是企业的高效率运作的关键。

Websoft9 任何一个管理者，都必须具备卓越的写作能力，能够非常清楚的表述自己的管理哲学、工作范围、OKR 分解等核心知识。

## Handbook 内容范围

* 不要做重复劳动，学会大量使用链接
* 每个主管维护自己所属的文档
* 不要有产品指南或产品说明的详情，只能是链接到对应的产品文档 
* 操作说明和指引直接插入链接，而不是拷贝粘贴内容
* 简明扼要的概括业务流程
* 重点是定义规范和总结工作哲学、方法、流程，不要把过程通过它来管理
* 客户开票信息和联系信息不允许必须存放到客户成功系统，不允许在文档中公开

本文档的表现形态主要有四种类型：

- 最佳实践总结
- 场景化的工作标准指南
- 制度与文书索引
- 工具索引

感谢所有为此文档贡献实践智慧的同学们！

## 协作

从开发团队到营销组织，每个人都需要协作关于数字内容。内容应接受大量潜在贡献者。开放贡献可以通过使用可合并的来实现 文件格式和分布式版本控制。GitLab 的使命是让每个人都可以在所有数字内容上进行协作，以便人们可以 有效合作，更快取得更好的结果。

## 知识管理科学

管理学中经历与提升员工生产率的管理理论有两种：

* 泰勒为代表的标准化和管理控制作业理论，他将员工为“经济人”
* 德鲁克为代表的知识管理理论，他将员工为“知识人”，降低对员工的控制反而提升员工的创造能力。

知识学院派大师：德鲁克、波兰尼、野中郁次郎、卡尔.斯威比、伯克利等

知识实践派大师：马克思、列宁、毛泽东、任正非等

知识管理咨询公司：行者互联（吴庆海）

知名的著作有：《信念：冲破低迷状态，实现业绩跃迁》《创造知识的方法论》《创造知识的企业：领先企业持续创新的动力》《创造知识的实践》《创新的本质》《知识创造管理：适应未来组织发展的管理新模式》《全球知识共创》《商业模式创新实践：如何将知识转化为价值》《人类知识的原则》

知名的知识实践著作：《寻乌调研》

知识有关的奖项有：最具创新力知识型组织（MIKE）

知识有关的会议有：创新与知识管理国际会议(iKM2020)

知名的知识管理模型有：SECI模型、知识场、信念管理（MBB，区别于目标管理）

知识创造的推进模式：自上往下、自下往上、自中向上而向下

## 英文礼仪

工作中会频繁使用英文，那么英文中需要注意的礼仪显得比较重要。  

```
# 感谢（开头）
Thank you for your prompt reply. 
Thank you for getting back to me.
Thank you for providing the requested information.
Thank you for all your assistance.
I truly appreciate your help in resolving the problem/ handling queries.
Thank you for feedback. ( 对方指出问题，提出建议）
Many thanks for ...

# 感谢（结尾）
Thank you for your attention to this matter.
Thank you again for everything you've done.
Thanks a lot!
Thanks for your help. 
I really appreciate it.　
I'm truly grateful for your help.　
Your help is greatly appreciated.　
Your prompt reply is much appreciated.
I'd like to express my gratitude.
Thanks a lot in advance.

# 请求帮助
I have some questions and would appreciate a lot if you could give some hints on them
I would be grateful if you 
I would appreciate if you 
I am sorry to bother you but 
I'm afraid it was a bother for you to do this.

# 确认（check）
If there is anything else wrong, please point out. 
We are always willing to take your advice. 

# 公开提问（适用论坛，Google群组等公开场合）
I would appreciate if anyone can clear my doubt or suggest proper place to ask this question.
```

## 代码定义图表

通过在 Markdown 代码块中使用 [Mermaid](https://www.yuque.com/yuqueyonghuoq8pl1/zkt9s3/bqmgeo) （[中文指南](https://www.yuque.com/yuque/gpvawt/mermaid)）来渲染图表：甘特图、思维导图、饼图、流程图、类图、状态图等。

### 方向控制

- `graph`或`graph TB`或`graph TD`：从上往下
- `graph BT`：从下往上
- `graph LR`：从左往右
- `graph RL`：从右往左

### 范例

* 流程图

````
```mermaid
graph LR
    A[Start] --> B{Is it?};
    B -- Yes --> C[OK];
    C --> D[Rethink];
    D --> B;
    B -- No ----> E[End];
```
````

* 思维导图

````
```mermaid
graph LR;
    A-->B;
    B-->B.1;
    B-->B.2;
    A-->C;
    C-->C.1;
    C-->C.2;
```
````

* 饼图
````
```mermaid
pie
    title 为什么 Websoft9 这么好？
    "产品体验" : 50
    "知识库" : 30
    "支持与服务" : 20
```
````


## 请求合并

文档的更新需要通过合并请求实现，即只要是合理的增删改查，都可以接受。


