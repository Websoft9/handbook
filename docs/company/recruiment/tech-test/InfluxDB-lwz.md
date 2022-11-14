## InfluxDB

任务名称：InfluxDB

下载地址：https://dl.influxdata.com/influxdb/releases/influxdb2-2.0.3.x86_64.rpm

支持平台：Debian/Ubuntu家族｜RHEL/CentOS家族｜Mac OS家族｜Docker

任务提交者：梁文智

## 介绍

InfluxDB是一个由InfluxData开发的开源时序型数据。它由Go写成，着力于高性能地查询与存储时序型数据。InfluxDB被广泛应用于存储系统的监控数据，IoT行业的实时数据等场景。

## 环境要求

+ 程序语言：Go
+ 数据库：无
+ 服务器配置：不低于1核

## 安装说明

在Centos7.7上安装

```bash
# 上传influxdb2-2.0.3.x86_64.rpm二进制包
rz 
# 安装
rpm -ivh influxdb2-2.0.3.x86_64.rpm

```

## 配置说明

安装后，需要进行如下配置

```bash
# 启动服务
systemctl start influxdb
# 关闭服务
systemctl stop influxdb
# 服务开机自启动
systemctl enable influxdb
# 禁止服务开机自启动
systemctl disable influxdb
# 查看服务状态
systemctl status influxdb 
# 查看服务开启后，相关进程信息
ps  aux | grep -i influxdb
# 查看服务监听的端口信息(注：如果没有netstat命令，需要安装net-tools包)
netstat -tulnp |grep -i influxdb
```

## 使用说明

* 日志轮替配置文件：/etc/logrotate.d/influxdb
* 客户端工具：/usr/bin/influx
* 服务器端守护进程：/usr/bin/influxd
* 启动脚本：/usr/lib/influxdb/scripts/influxdb.service
* 服务关闭或启动等的脚本：/usr/lib/influxdb/scripts/init.sh

## 版本号

```bash
# 查看客户端版本
influx version 
# 查看服务器的版本
influxd version
```

## 端口号

本项目开启的端口号

| proto | port     |
| ----- | -------- |
| tcp6  | 8806     |
| tcp   | 随机端口 |

## 其他信息

* 查看服务器的状态：influx ping

* 通过浏览器访问：http://192.168.239.128:8086/

<img src="C:\Users\WinnerLamp\AppData\Roaming\Typora\typora-user-images\image-20210126120928795.png" alt="image-20210126120928795" style="zoom:33%;" />