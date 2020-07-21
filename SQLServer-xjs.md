# SQLServer-xjs.md

任务名称：SQLServer   
安装文档：https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-red-hat?view=sql-server-ver15  
支持平台：Linux | Windows  

任务提交者：xjs

## 介绍

SQL Server是一个可扩展的、高性能的、为分布式客户机/服务器计算所设计的数据库管理系统，提供了基于事务的企业级信息管理系统方案。

## 环境要求
 
* 服务器配置：不低于1核
* 内存配置：不低于2G

## 安装说明

下面基于CentOS的安装平台，进行安装说明。

官方建议必须有一台CentOS 7.3-7.8或8.0-8.2计算机，且内存至少为2 GB，如果以前安装过SQL Server的CTP或RC版本，则在执行这些步骤之前，必须首先删除旧的存储库。有关更多信息，请参阅[为SQL Server 2017和2019配置Linux存储库](/https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-change-repo?view=sql-server-ver15&pivots=ld2-rhel)。


### CentOS

```shell

#安装python2环境
alternatives --config python
yum install python2
yum install compat-openssl10
alternatives --config python

# 下载Microsoft SQL Server 2019存储库配置文件：
curl -o /etc/yum.repos.d/mssql-server.repo https://packages.microsoft.com/config/rhel/7/mssql-server-2019.repo

# msssql-server-2019.repo配置：
name=packages-microsoft-com-mssql-server-2019
baseurl=https://packages.microsoft.com/rhel/7/mssql-server-2019/
enabled=1
gpgcheck=1
gpgkey=https://packages.microsoft.com/keys/microsoft.asc

# 安装、启动
yum install -y mssql-server
/opt/mssql/bin/mssql-conf setup

#验证服务运行状态
systemctl status mssql-server

#防火墙配置规则（此处实验虚机未开启防火墙）
firewall-cmd --zone=public --add-port=1433/tcp --permanent
firewall-cmd --reload

```


## 配置说明

安装完成后，查看服务运行正常即可
```shell
[root@localhost ~]#systemctl status mssql-server
● mssql-server.service - Microsoft SQL Server Database Engine
   Loaded: loaded (/usr/lib/systemd/system/mssql-server.service; enabled; vendor preset: disabled)
   Active: active (running) since Tue 2020-07-21 03:28:10 EDT; 3h 46min ago
     Docs: https://docs.microsoft.com/en-us/sql/linux
 Main PID: 2058 (sqlservr)
   CGroup: /system.slice/mssql-server.service
           ├─2058 /opt/mssql/bin/sqlservr
           └─2083 /opt/mssql/bin/sqlservr

Jul 21 03:28:16 localhost.localdomain sqlservr[2058]: 2020-07-21 03:28:16.13 spid9s      9 transactions rolled forward in data...uired.
Jul 21 03:28:16 localhost.localdomain sqlservr[2058]: 2020-07-21 03:28:16.19 spid9s      0 transactions rolled back in databas...uired.
Jul 21 03:28:16 localhost.localdomain sqlservr[2058]: 2020-07-21 03:28:16.22 spid11s     Clearing tempdb database.
Jul 21 03:28:17 localhost.localdomain sqlservr[2058]: 2020-07-21 03:28:17.09 spid11s     [2]. Feature Status: PVS: 0. CTR: 0. ...te: 1.
Jul 21 03:28:17 localhost.localdomain sqlservr[2058]: 2020-07-21 03:28:17.09 spid11s     Starting up database 'tempdb'.
Jul 21 03:28:17 localhost.localdomain sqlservr[2058]: 2020-07-21 03:28:17.37 spid11s     The tempdb database has 2 data file(s).
Jul 21 03:28:17 localhost.localdomain sqlservr[2058]: 2020-07-21 03:28:17.37 spid26s     The Service Broker endpoint is in dis...state.
Jul 21 03:28:17 localhost.localdomain sqlservr[2058]: 2020-07-21 03:28:17.38 spid26s     The Database Mirroring endpoint is in...state.
Jul 21 03:28:17 localhost.localdomain sqlservr[2058]: 2020-07-21 03:28:17.40 spid26s     Service Broker manager has started.
Jul 21 03:28:17 localhost.localdomain sqlservr[2058]: 2020-07-21 03:28:17.40 spid9s      Recovery is complete. This is an info...uired.
Hint: Some lines were ellipsized, use -l to show in full.
```

## 安装命令行工具

```shell
###安装sqlcmd工具
curl -o /etc/yum.repos.d/msprod.repo https://packages.microsoft.com/config/rhel/7/prod.repo
yum remove unixODBC-utf16 unixODBC-utf16-devel
yum install -y mssql-tools unixODBC-devel

###添加环境变量
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bash_profile
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc
source ~/.bashrc

###本地连接
sqlcmd -S localhost -U SA -P '1234Qwer'       #显示>1则成功

```

# 其他
```
### 路径

* 程序路径：/var/opt/mssql
* 日志路径：/var/opt/mssql/log
* 配置文件路径：/var/opt/mssql/mssql.conf

#### 数据库密码
账户：SA
密码：1234Qwer

### 版本号
rpm -qa|grep mssql
mssql-tools-17.5.2.1-1.x86_64
mssql-server-15.0.4043.16-4.x86_64


### 端口号
本项目需要开启的端口号：
| item      | port  |
| --------- | ----- |
| sqlserver | 1433 |


