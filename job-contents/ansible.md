如果您对自动化运维很感兴趣、进行了系统化学习，并具备以下几种能力，欢迎加入websoft9自动化团队，一起推动websoft9开源社区的进步发展与活跃。  

* 熟练的Linux命令操作以及Shell编程能力
* 基于调研文档结果，快速实现安装配置的能力
* 团队协作能力

---

## 内容和规范

### 架构要求

为了保持层次结构的清晰、并增加可重用性，通过roles引用来组织playbook，template.yml剧本引入例：
 > 详细请参照[Ansible模板](https://github.com/Websoft9/ansible-template.git)

```
  roles:
    - {role: role_common, tags: "role_common"}  
    - {role: role_cloud, tags: "role_cloud"}  
    - {role: role_jdk, tags: "role_jdk"}  
    - {role: rabbitmq, tags: "rabbitmq"}
    - {role: role_preend, tags: "preend"}
    - {role: role_end, tags: "role_end"}
```

#### 共通组件roles

共通组件引入时，都用role_作为前缀，在requirements.yml进行定义，通过Ansible Galaxy进行安装。

```
- src: http://github.com/websoft9/role_common
- src: http://github.com/websoft9/role_cloud
- src: http://github.com/websoft9/role_docker
- src: http://github.com/websoft9/role_mysql
- src: http://github.com/websoft9/role_mongodb
- src: http://github.com/websoft9/role_nginx  
- src: http://github.com/websoft9/role_init
- src: http://github.com/websoft9/role_preend
- src: http://github.com/websoft9/role_end
```

使用共通组件可极大的增加代码重用率，减少代码错误，增加产品规范性。所以在开发一款新的产品时，必须先寻找共通组件是否存在，避免重复开发。
到目前为止，共通组件一共有42个，我们把它分成以下几类方便开发者使用：

通用类（所有项目都必须引用）
  - role_end
  - role_cloud
  - role_common
  - role_preend

密码随机化
  - role_init

web服务器以及辅助工具
  - role_apache
  - role_caddy
  - role_nginx
  - role_jetty
  - role_tomcat
  - role_uwsgi
  - role_haproxy
  - role_varnish

websoft9向导（一般开发环境类项目需要引用）
  - role_9panel

开发语言以及环境类
  - role_jdk
  - role_lamp
  - role_lnmp
  - role_php
  - role_nodejs
  - role_python
  - role_ruby

docker工具
  - role_docker

消息中间件
  - role_kafka
  - role_rabbitmq

关系型数据库
  - role_mysql
  - role_mariadb
  - role_postgresql
  - role_sqlite
  - role_oracledb

Nosql数据库
  - role_elasticsearch
  - role_mongodb
  - role_rethinkdb
  - role_neo4j

缓存数据库
  - role_redis
  - role_memcached

其他
  - role_inotify_watch
  - role_os
  - role_passenger
  - role_runtime
  - role_template
  - role_tomcat-nginx
  - role_tools
  - role_wkhtmltopdf

#### 应用roles

应用roles位于ansible项目的roles下，一般含有如下目录：

  - defaults
  - files
  - handles
  - meta
  - tasks
  - template

### Ansible编码规范

Ansible编码规范会随着产品的增多和底层理解的加深不断丰富。
 > 详细请参照[Ansible导图](https://websoft9.yuque.com/docs/share/37450a02-2317-4af3-8947-e7280e3aca9d?#《Ansible开发规范（导图）》)、[Ansible规范说明](https://websoft9.yuque.com/docs/share/23916957-6088-4c66-b424-6292ca353355?#《Ansible开发规范说明》) 、[Ansible使用示例](https://support.websoft9.com/docs/ansible/zh/solution-sample.html)

## 如何快速开始一个符合开发规范的项目？

新开发项目时，首先从根据[模板](https://github.com/Websoft9/ansible-template.git)创建一个新的项目，然后根据Ansible开发规范修改后开发。

 > 详细请参照[Ansible化手册](https://websoft9.yuque.com/docs/share/a1638f0d-0d19-4fd2-94dd-2add837e5194?#《网久项目ansible化手册》)