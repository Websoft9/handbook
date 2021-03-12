# RabbitMQ Notes Template

任务名称：RabbitMQ-Server  
安装文档：https://www.rabbitmq.com/download.html  
配置文档：https://www.rabbitmq.com/admin-guide.html  
支持平台： Debian家族 | RHEL家族 | Windows | Kubernetes |Docker  

任务提交者：helin

## 介绍

RabbitMQ是一款开源的MQ系统，它包含RabbitMQ-Server和RabbitMQ-Client，服务器上运行的是RabbitMQ-Server

## 环境要求

* 程序语言：Java 
* 应用服务器：自带
* 数据库：无
* 依赖组件：Erlang
* 服务器配置：不低于1核1
* 其他：

## 安装说明

官方建议使用其自身提供的erlang和rabbitmq-server的仓库，不建议使用操作系统自带的仓库或其他第三方仓库。同时，官方提供了自动安装仓库的自动化脚本。

下面基于不同的安装平台，分别进行安装说明。

### CentOS

```shell
# 分别安装erlang源和rabbitmq-server源
curl -s https://packagecloud.io/install/repositories/rabbitmq/erlang/script.rpm.sh | sudo bash
curl -s https://packagecloud.io/install/repositories/rabbitmq/rabbitmq-server/script.rpm.sh | sudo bash

# 安装
yum install erlang rabbitmq-server -y
...
```

### Ubuntu

```shell
# 分别安装erlang源和rabbitmq-server源
curl -s https://packagecloud.io/install/repositories/rabbitmq/erlang/script.deb.sh | sudo bash
curl -s https://packagecloud.io/install/repositories/rabbitmq/rabbitmq-server/script.deb.sh | sudo bash

# 安装
sudo apt-get update -y
apt install erlang rabbitmq-server -y
...
```

## 配置说明

安装完成后，需要依次完成如下配置方可使用

### 基本配置

```shell
systemctl start rabbitmq-server
systemctl enable rabbitmq-server
rabbitmq-plugins enable rabbitmq_management
rabbitmqctl add_user admin admin
rabbitmqctl set_user_tags admin administrator
...
```

### 其他配置

* 如果项目有需启动进程，则需要自行编写Systemd服务以保证重启服务器后仍然可用

```
# Systemd 范例：
[Unit]
Description=Redmine
After=nginx.service
[Service]
Environment=RAILS_ENV=production
Type=simple
WorkingDirectory=/data/wwwroot/redmine
ExecStart=/usr/local/bin/puma -b tcp://127.0.0.1:9292 -e production 
User=redmine
[Install]
WantedBy=multi-user.target
```

* 列出需要增加的环境变量命令以及命令
```
# 环境变量
```
* 其他

## 使用说明

为了可以方便他人使用此安装方案，最少需要提供如下的信息：

### 路径

* 程序路径：/usr/lib/rabbitmq/lib/rabbitmq_server-*
* 日志路径：/var/log/rabbitmq  
* 配置文件路径：  
* 其他...

### 账号密码

#### 数据库密码

如果有数据库

* 数据库安装方式：包管理工具自带 or 自行安装
* 账号密码：

#### 后台账号

如果有后台账号

* 登录地址
* 账号密码
* 密码修改方案：最好是有命令行修改密码的方案


### 版本号

通过如下的命令获取主要组件的版本号: 

```
# Check RabbitMQ version
sudo rabbitmqctl status | grep RabbitMQ*

# Check Erlang version
ls /usr/lib64/erlang
```

### 端口号

本项目需要开启的端口号：

| item      | port  |
| --------- | ----- |
| lustering | 25672 |
| AMQP      | 5672  |
| http      | 15672 |

## 常见问题

#### 有没有管理控制台？

*http:// 公网 IP:15672* 即可访问控制台，系统默认存在一个无法通过外网访问的guest/guest账号

#### 有没有CLI工具？

有，通过 `rabbitmqctl` 查看工具的说明

## 日志

* 2020-04-14 完成CentOS安装研究
