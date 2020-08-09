# SQL Server Linux 2019 install note

任务名称：SQLServer2019<br/>
安装配置：<https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-ubuntu?view=sql-server-ver15&viewFallbackFrom=sql-server-2016><br/>
支持平台： ubuntu | Debian家族 | RHEL家族 | Windows | Kubernetes |Docker  
记录日期：2020-8-9

任务提交者：何波

## 介绍

SQLServer是由微软开发的一款关系数据库管理系统，拥有图形化用户界面，操作更加直观、简单，有丰富的编程接口，且支持将数据发布到web页面

## 环境要求

* 设备：一台阿里云ESC服务器 
* 服务器配置：不低于1核2GB内存
* 操作系统：Centos 7,Ubuntu 18.04
* 数据库：SQL Server Linux 2019

## 安装说明

官方声明先决条件必须为一台RHEL 7或以上，ubuntu16.04或以上的计算机，且内存不得小于2GB，也可以创建虚拟机进行安装，在RHEL8中SQLServer2019有一些指令指向RHEL8 repository，必须先安装python2

下面基于不同的安装平台，分别进行安装说明。

### CentOS

```shell
# 添加mssql-server软件包的yum源
sudo curl -o /etc/yum.repos.d/mssql-server.repo https://packages.microsoft.com/config/rhel/7/mssql-server-2019.repo
	#不同的操作系统需要注意链接路径，建议通过浏览器打开此链接并选择适合自己系统的文档安装
	#Centos能够使用rhel的文档安装

# 安装
sudo yum install -y mssql-server
	#安装此软件包之前建议先更新一下yum，此软件包的依赖包可通过阿里云或腾讯云的Centos-Base  

# 初始化SQL Server
sudo /opt/mssql/bin/mssql-conf setup
	#此处选择 3 (Express版本)
	#Yes 接受许可条目
	#设置 SA 管理员密码

# 查看SQL Server运行状态
sudo systemctl status mssql-server

# 防火墙说明
sudo firewall-cmd --zone=public --add-port=1433/tcp --permanent
sudo firewall-cmd --reload
	#在阿里云或腾讯云上购买的云主机默认关闭了SELinux和firewall，所以无需对防火墙进行操作，如果是针对本地主机则需要通过以上命令开放端口或关闭防火墙

# 安装SQL Server命令行工具
sudo curl -o /etc/yum.repos.d/msprod.repo https://packages.microsoft.com/config/rhel/7/prod.repo
	#下载repo包  
	#若要创建数据库，需要连接一个可以在SQL Server上运行Transact-SQL语句的工具

sudo yum remove unixODBC-utf16 unixODBC-utf16-devel
	#若安装过mssql-tool工具，则需要先删除较旧的unixODBC包，若没有安装过mssql-tool，则可跳过此步骤

sudo yum install -y mssql-tools unixODBC-devel
	# 安装软件包和驱动程序

echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bash_profile
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc
source ~/.bashrc
	#配置PATH环境变量
```

### Ubuntu

```shell
# Ubuntu安装步骤大致与Centos安装步骤相似，注解可参照Centos的安装
# 导入GPG秘钥
curl -s https://packagecloud.io/install/repositories/rabbitmq/rabbitmq-server/script.deb.sh | sudo bash

# 添加repo源
sudo add-apt-repository "$(wget -qO- https://packages.microsoft.com/config/ubuntu/18.04/mssql-server-2019.list)"
	#此处注意根据系统版本更改连接路径
	#add-apt-repository 命令被包含在 software-properties-common 软件包中
	#若提示 software-properties-common 不可用，可尝试更新一下repo源，此处采用阿里云的repo源

# 安装mssql-server软件包
sudo apt-get update
sudo apt-get install -y mssql-server

# 初始化SQL Server
sudo /opt/mssql/bin/mssql-conf setup
	#此处选择 3 (Express版本)
	#Yes 接受许可条目
	#设置 SA 管理员密码 

# 查看mssql-server服务状态
systemctl status mssql-server

# 防火墙
ufw allow 1433
	#可选择关闭防火墙或执行以上命令开放端口  


# 安装SQL Server命令行工具  
curl https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -
	# 导入GPG秘钥

curl https://packages.microsoft.com/config/ubuntu/18.04/prod.list | sudo tee /etc/apt/sources.list.d/msprod.list
	# 添加repo源

sudo apt-get update 
sudo apt-get install mssql-tools unixodbc-dev
	# 安装mssql-tool工具和驱动程序
	# 若以前安装过mssql-server则需要先卸载旧版本的软件包

echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bash_profile
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc
source ~/.bashrc
	# 设置环境变量
```

## 创建和查询数据
以下步骤用于测试本地数据库的正常使用
```shell
# 连接数据库
sqlcmd -S localhost -U SA -P '<YourPassword>'
	#-S：指定服务器地址
	#-U：指定登录数据库的用户
	#-P：用户密码
	#正常登录后应进入sqlcmd的提示符"1>"

# 创建并查看数据库
1> CREATE DATABASE testdb	        #创建数据库
2> SELECT NAME FROM sys.Databases	#查看所有数据库
3> GO		                        #执行上面两条命令

# 插入数据
1> USE testdb		                                                #切换到testdb数据库
2> CREATE TABLE inventory (id INT, name NVARCHAR(50), quantity INT)	#创建新表inventory
3> INSERT INTO inventory VALUES (1, 'banana', 150);	                #插入数据
4> GO		                                                        #执行以上命令

# 查询数据
1> SELECT * FROM inventory;	#索引inventory表中的所有数据
2> GO		                #执行命令

# 退出sqlcmd
1> QUIT
```

### 其他配置
#### 从Windows连接
远程连接SQL Server时需确保服务器的IP地址及确保打开了TCP端口1433
有关在Windows上运行但连接到Linux上的SQL Server的其他工具，请参阅： 
* [SQL Server管理Studio (SSMS)](https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-manage-ssms?view=sql-server-ver15)
* [Windows PowerShell](https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-manage-powershell?view=sql-server-ver15)
* [SQL Server数据工具（SSDT）](https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-develop-use-ssdt?view=sql-server-ver15)

#### 其他部署方案
- [升级](https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-setup?view=sql-server-ver15#upgrade):在Linux上升级SQL Server现有安装
- [卸载](https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-setup?view=sql-server-ver15#uninstall):在Linux上卸载SQL Server
- [无人值守安装](https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-setup?view=sql-server-ver15#unattended):自动化安装
- [离线安装](https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-setup?view=sql-server-ver15#offline):手动下载软件包进行离线安装
