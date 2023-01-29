---
sidebar_position: 2
---

# 业务经营

## 做什么？

业务开展过程中涉及相关的法律事务。

## 场景

### 合同管理

**模板化**  

任何由我们起草的合同，都必须从公司[**模板库**](https://drive.weixin.qq.com/s?k=AEYAzAcRAA4EBTvCNI)中提取，然后进行工作内容的修改后使用。对于没有模板可用的合同场景，请驱动公司先准备模板。

维护模板的注意事项：

1. 合同中必须把购买清单与法律条款进行分离
2. 法律条款不允许随意更改，且必须集中在指定的存储地进行维护
3. 优化合同模板的时候，必须进入修订模式，留下修订痕迹和批准，待讨论通过后接收新版本
   ![](./img/legal-template.png)

**命名**  

合同名称有业务名称，也有法律名称，需要根据合作方的意见共同敲定。范例：  

- 多云自动化部署框架协议
- 产学研合作框架协议书
- 云市场镜像项目合作协议

**纸质归档**  

不同类型的合同存放在不同的文件盒中，具体参考：[规范](./backoffice.md#paper)

### 第三方平台监管

- 严格遵守云平台的各种条款
- 中立看待云平台的产品，不允许给用户推荐云平台
- 云平台相关协议及时签订
- 保证金缴纳及管理
- 对口单位：平台法务、平台运营（小二）


### 商标事务

商标的目的是防止创业者或精准对手通过相近或滥用的“搭便车”行为，有其合理性。  

同时，我们需要掌握最基本的法则：  

* 商标和公司注册是两条线，相互不冲突
* 《马德里条约》用于批量向多个国家注册同一个商标（理解为商标（国家）注册团购），而不是商标互信
* TM 是TRADEMARK的缩写，并不一定是指已注册商标。而®是REGISTER的缩写，用在商标上是指已经成功注册商标的意思

#### 获取商标授权

1. 研究目标对象 License 和 商标的核心要素，并维护到对应的文档中
2. [Github](https://github.com/websoft9op/vendor/issues) 上领取或发布联系 Issue
2. 官网中寻找联系方式（法务、销售、合作伙伴、工单等频道），发送商务邮件（参考下面的范文）
3. 沟通过程关键事务会诊
4. 完成  Issue 中要求的归档等其他事务

下面是邮件范文：   

```
# 标题
Request permission to use "OpenCV" text Trademark. 

# 正文

Dear Sir or Madam,

This is Evelyn from Websoft9 which is a open source software company focus on DevOps automation.

We're a providing OpenCV automation deployment on GitHub, then we want to publish a paid product based OpenCV on Cloud Platform Marketplace（e.g AWS, Azure）like below

【Product name】：Machine vision runtime based on OpenCV
【Intellectual Property Statement in Product Overview】：The stack of this offer includes a wide range copies of open source and free software, but the Copyrights, Patents and Trademarks are legal protections for original owner.

● “OpenCV” is a trademark of Open CV and is protected by United States trademark law
● OpenCV is licensed under the Apache License Version 2.0.

We have read the Open CV's trademark policy and term, we know that in any manner likely to cause confusion among consumers or in any manner that disparages or discredits Open CV are not allowed. 

Websoft9 is a compliance company, we highly respect any of your intellectual property policies. I'd appreciate it if you could give clear reply about whether it's permissible to use your trademark above?  or other manners you think are allowed.

Thanks a lot in advance!

Best regards,

# 未回复邮件提醒

Hi Kenneth,
How are you? Hope everything is ok with you all along.

It has been a while since we start a consultation on 10, Aug. It is about license and ERPNext trademark use.
I guess things must have been hectic on your end, so I will just be brief. 
I'd recap our consultation.
1) We integrate ERPNext with other software required to run, like Ngnix and MariaDB, and automate the deployment for the integration. This integration solution is available as an open source project on GitHub. 
2）We also distribute image of the integration on platforms, like AWS, to offer one-click, pre-configured install solution for ERPNext to users. This is offered for a fee.
3) We use "ERPNext" to describe the solution, and name it as "ERPNext on Ubuntu"
We would appreciate it if you could give clear reply on whether it is permissible to do that. If what we have done is not in line with GPLv3 license and your trademark policy, do not hesitate to point out. We would correct it asap. 
More details could be found in the former discussion I added to the end.
Thanks a lot in advance.

Best regards,
Evelyn
```

#### 被投诉处理

一旦被投诉之后，需在 2 小时内给与积极的响应，接下来集体研究投诉的处理办法

下面是被投诉之后的回复邮件范文：  

```
Hi Dylan


Thank you for email, we have read Haproxy trademark policy and we have found that we have an inappropriate use.
First, we apologize for this matter, we highly respect your IP, we want to correct it until compliance as soon as possible.

We want to change product name to Software Load Balancer  which not include any HAProxy trademark, 
How do you think about this? or can you give me some suitable suggestion?

Look forward you reply

best regards,
```

#### 被侵权处理

我的知识产权被侵犯，可以侵权发生的平台投诉。涉及到更复杂的问题，可以联系外包律师团队。



### 开源 License

快速理解开源软件许可一些关键点：

* 开源许可不是法律规定，而更类似于合同条款，是在公益组织下约定成俗的一些规则
* 开源许可之间可能有冲突，导致使用多个软件作为组件之后，难以发布自身合规的开源许可


## IP 解读导图

- 内部知识产权体系建立，让知识产权成为竞争壁垒和经济杠杆
- 尊重他人的知识产权
- 实现开源代码和商标的合规使用（[Vendor repository](https://github.com/websoft9op/vendor/issues)）

### 商标

分析任何一个商标，有两个主要事项：

* 查重：[WIPO Globl Brand Database 全球商标查询数据库](https://www3.wipo.int/branddb/en)  
* 内部研究归档至：[商品解读清单](https://github.com/Websoft9/handbook/blob/main/docs/legal/_file/商标解读清单.md)  


```mermaid
	graph LR
	商标解构--> 商标组成
	商标组成--> 文字
	商标组成--> 图形
	商标解构--> 商标版本变更日志
	商标解构--> 衍生商标规则
	商标解构--> 商标列表
	商标解构--> 是否注册
	是否注册--> 是
	是否注册--> 否
	否--> TM
	否--> SM
	商标解构--> 条款
	条款--> 商标符号使用规则--> 作为公司全称或商品名出现时是否应在商标后面使用商标符号
	条款--> 使用时是否需要添加商标免责声明
	条款--> 使用是否需要捐赠
	条款--> 使用是否需要得到商标权利人的授权或许可
	条款--> 申请授权与许可的材料清单
	条款--> 是否需要联系商标权利人法务或者品牌总裁
	条款--> 使用是否需要在脚注或类似位置等合理易读的位置和大小进行商标权利人的说明
	条款--> 告知可能的侵权
	条款--> 商标权利人反对任何关于商标的不当使用对应的措施
	条款--> 商标条款与license中条款匹配或冲突
	商标解构--> 用途
	用途--> 域名
	用途--> 广告
	用途--> 服务商标
	用途--> 公司名称
	用途--> 标题或封面
	用途--> 会议与活动
	用途--> 出版物
	用途--> 商品名称或产品名称
	用途--> 学术论文或类似非盈利刊物
	用途--> 网站或其他软材料
	商标解构--> 允许使用
	允许使用--> 用作指向
	允许使用--> 合理使用
	允许使用--> Power-by
	允许使用--> 经批准的会议与活动
	允许使用--> 使用商标显示社区归属
	允许使用--> 使用商标显示社区归属
	允许使用--> 仅用于识别商品与服务的
	允许使用--> 得到授权与许可后进行使用
	允许使用--> 得到授权与许可后进行使用
	允许使用--> 非商业性的促进软件的传播与改进
	允许使用--> 不使用商标无法识别的产品或服务
	允许使用--> 始终使用商标作为修饰名词的形容词
	允许使用--> 分发已编译的未修改的源代码或未修改的可执行代码
	允许使用--> 可在已出版书籍的标题或封面中使用
	允许使用--> 使用商标时必须始终链接商标权利人域名
	允许使用--> 使用包括商标注册标志完整商标用于区分商品和服务
	允许使用--> 第三方提供的产品或服务是产品功能的超集
	允许使用--> 在商标第一次以文本形式出现时使用与每个商标相关的通用术语
	允许使用--> 侵权
	侵权--> 混淆
	侵权--> 模糊改变
	侵权--> 商标滥用
	侵权--> 创造组合标记
	侵权--> 虚假暗示或误导性陈述
	侵权--> 广告中使用
	侵权--> 营销口号或标语中使用
	侵权--> 促销产品中使用
	侵权--> 掩盖或隐藏自己的商标
	侵权--> 产品或服务名称中使用
	侵权--> 注册相似度极高的商标
	侵权--> 直观的将商标标识集成到其他商标中
	侵权--> 在将软件与另一软件程序结合在一起的产物中使用该软件商标
	侵权--> 以贬低或任何其他侵犯商标权利或违反相关法律的方式使用商标
	侵权--> 未经授权合并到徽标或产品设计中
	侵权--> 未经授权的营销环境中使用
	侵权--> 未经授权的出版物中使用
	侵权--> 篡改商标
	篡改商标--> 商标词性
	篡改商标--> 单复
	篡改商标--> 所有格
	篡改商标--> 语言
	篡改商标--> 缩写
	篡改商标--> 字体
	篡改商标--> 字母大小写
	篡改商标--> 视觉标识符号
	篡改商标--> 颜色
	篡改商标--> 尺寸比例
	篡改商标--> 尺寸比例
	侵权--> 不得将产品文字标记用作任何软件产品名称或服务名称或公司名称或商标或域名或logo的一部分
```

### License

License 解读过程中，涉及的材料包括：

* 全球主流开源许可汇总数据库：https://opensource.org/licenses/alphabetical  
* 内部研究归档至：[License 解读清单](https://github.com/Websoft9/handbook/blob/main/docs/legal/_file/License解读清单.md)  


```mermaid
	graph LR
	License解构--> 用途
	用途-->Use
	用途-->Reproduction
	用途-->Dstribution
	用途-->Derivative-Works
	用途-->propagate
	用途-->convey
	
	License解构--> 形式
	形式-->2.2小节
	形式-->库
	形式-->源代码
	形式-->目标代码
	形式-->任何形式
	形式-->二进制文件
	形式-->可执行文件
	形式-->系统库代码
	
	License解构--> 附件
	附件-->Notice文件
	附件-->License副本
	附件-->明显的申明
	附件-->免责/版权/专利/商标和出处申明
	附件-->非许可条款
	附件-->书面承诺
	附件-->A-list-of-conditions

	License解构--> 权利
	权利-->源码拥有者
	源码拥有者-->申明软件的版权
	权利-->源码贡献者
	源码贡献者-->可以选择提供技术支持或品质担保以换取收入
	源码贡献者-->可以合法地复制分发和修改该软件
	源码贡献者-->禁止任何人否定明确授予的权利
	源码贡献者-->自动获得来自初始授权人的授权
	源码贡献者-->使用权
	权利-->用户
	用户-->自动获得来自初始授权人的授权
	用户-->获得专利许可
	用户-->使用权

	License解构--> 义务
	义务-->拥有者
	拥有者-->尊重他人的自由
	拥有者-->给予同等权利
	义务-->贡献者
	贡献者-->任何专利都必须获得许可以供所有人免费使用或者完全未经许可
	贡献者-->转发完整副本
	贡献者-->保留完整明确的声明/修改印记
	贡献者-->进行署名标记
	贡献者-->出处权
	义务-->最终用户

	License解构--> 知识产权
	知识产权-->版权
	版权-->授权许可
	版权-->拒绝授权许可
	知识产权-->专利
	专利-->授权许可
	专利-->拒绝授权许可
	知识产权-->商标
	商标-->许可
	商标-->拒绝许可
	商标-->合理使用
	商标-->附件条件许可
	附件条件许可-->许可人事先明确许可
	附件条件许可-->明确的事先书面许可

	License解构--> 授权
	授权--> 条件
	授权--> 中止
	授权--> 恢复
	恢复--> 暂时
	恢复--> 永久
	授权--> 终止
	终止--> 实施明确授权外的行为
	授权--> 消灭

	License解构--> 责任承担
	责任承担--> 免责声明
	免责声明--> 无品质担保责任
	免责声明--> 知识产权侵权免责声明
	责任承担--> 责任范围
	责任范围--> 接受保修或附加责任
	责任承担--> 附件责任
	责任承担--> 承担方式
	承担方式--> 损害赔偿

	License解构--> 费用
	费用--> 免费
	费用--> 收费-允许商业用途

	License解构--> 关于诉讼
	关于诉讼--> 诉讼性质
	关于诉讼--> 管辖区
	关于诉讼--> 诉讼费用
	关于诉讼--> 法律冲突及解决方法

	License解构--> License兼容考虑
	License解构--> 是否允许原作品及其修改版以其他许可证进行发行
```

