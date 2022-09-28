---
title: ODBC 驱动程序
lang: zh-CN
---

# ODBC 驱动程序

## 免费的 ODBC 驱动程序
提供一些常见的第三方 ODBC 驱动程序及下载链接
| ODBC 组件           | Windows               | Linux                 | macOS                 |
|-----------------    |-----------------------|-----------------------|-----------------------|
| ODBC Driver Manager | 系统自带               | [UnixODBC](http://www.unixodbc.org/) / [iODBC](http://www.iodbc.org/dataspace/doc/iodbc/wiki/iodbcWiki/Downloads) | [UnixODBC](http://www.unixodbc.org/) / [iODBC](http://www.iodbc.org/dataspace/doc/iodbc/wiki/iodbcWiki/Downloads) |
| Access 2010         | [官方站](https://www.microsoft.com/en-us/download/confirmation.aspx?id=13255&6B49FDFB-8E5B-4B07-BC31-15695C5A2143=1) | [LibMDBODBC](https://github.com/mdbtools/mdbtools) | [LibMDBODBC](https://github.com/mdbtools/mdbtools) |
| Access 2016         | [官方站](https://www.microsoft.com/en-us/download/confirmation.aspx?id=54920&6B49FDFB-8E5B-4B07-BC31-15695C5A2143=1) | [LibMDBODBC](https://github.com/mdbtools/mdbtools) | [LibMDBODBC](https://github.com/mdbtools/mdbtools) |
| SQLite (x86-64)     | [服务器1](https://kangaroo.awaysoft.com/downloads/odbc/sqlite-odbc-x64.exe) [服务器2](https://d4.injdk.cn/dbkangaroo/odbc/sqlite-odbc-x64.exe) [官方站](http://www.ch-werner.de/sqliteodbc/sqliteodbc_w64.exe) | [SQLite ODBC](https://github.com/softace/sqliteodbc) | [SQLite ODBC](https://github.com/softace/sqliteodbc) |
| MySQL (x86-64)      | [服务器1](https://kangaroo.awaysoft.com/downloads/odbc/mysql-odbc-x64.msi) [服务器2](https://d4.injdk.cn/dbkangaroo/odbc/mysql-odbc-x64.msi) [官方站](https://dev.mysql.com/downloads/connector/odbc/) | [官方站](https://dev.mysql.com/downloads/connector/odbc/) | [官方站](https://dev.mysql.com/downloads/connector/odbc/) |
| MariaDB (x86-64)    | [服务器1](https://kangaroo.awaysoft.com/downloads/odbc/mariadb-odbc-x64.msi) [服务器2](https://d4.injdk.cn/dbkangaroo/odbc/mariadb-odbc-x64.msi) [官方站](https://mariadb.com/downloads/connectors/connectors-data-access/odbc-connector/) | [官方站](https://mariadb.com/downloads/connectors/connectors-data-access/odbc-connector/) | [官方站](https://mariadb.com/downloads/connectors/connectors-data-access/odbc-connector/) |
| PostgreSQL (x86-64) | [服务器1](https://kangaroo.awaysoft.com/downloads/odbc/postgresql-odbc-x64.msi) [服务器2](https://d4.injdk.cn/dbkangaroo/odbc/postgresql-odbc-x64.msi) [官方站](https://ftp.postgresql.org/pub/odbc/versions/msi/psqlodbc_13_02_0000-x64.zip) | [官方站](https://www.postgresql.org/ftp/odbc/versions/) | [官方站](https://www.postgresql.org/ftp/odbc/versions/) |
| SQL Server          | [官方站](https://download.microsoft.com/download/1/a/4/1a4a49b8-9fe6-4237-be0d-a6b8f2d559b5/en-US/18.0.1.1/x64/msodbcsql.msi) | [官方站](https://docs.microsoft.com/en-us/sql/connect/odbc/linux-mac/installing-the-microsoft-odbc-driver-for-sql-server)| [官方站](https://docs.microsoft.com/en-us/sql/connect/odbc/linux-mac/install-microsoft-odbc-driver-sql-server-macos?view=sql-server-ver16) |
| Oracle              | [官方站](https://www.oracle.com/database/technologies/dotnet-odacdeploy-downloads.html) | | |

[UnixODBC 驱动列表](http://www.unixodbc.org/drivers.html)

## 收费的 ODBC 驱动程序
[Easysoft ODBC Drivers](https://www.easysoft.com/products/data_access/index.html#odbc-drivers)<br/>
[CData Software ODBC Drivers](https://www.cdata.com/odbc/)<br/>
[Devart ODBC Drivers](https://www.devart.com/odbc/)

## UnixODBC / iODBC 安装与配置
1. 安装 UnixODBC / iODBC
```bash
yum install -y <unixodbc | iodbc>
yum install mysql-connector-odbc mariadb-connector-odbc pgodbc <ODBC driver package>
```

2. 配置 ODBC 驱动程序<br/>
配置文件默认路径: `/etc/odbcinst.ini`, ODBC 驱动配置模板如下：
```
[DRIVER_NAME]
  Description = 驱动程序简介
  Driver = 驱动程序库完整路径
  Setup = 驱动程序配置模块完整路径
```
配置完成后, 您可以使用命令列出所有已安装的驱动程序： `odbcinst -q -d`

3. 系统数据源配置<br/>
配置文件默认路径： `/etc/odbc.ini`, ODBC 数据源配置模板如下：
```
[my_datasource]
Driver = DRIVER_NAME
Description = 数据源简介
ServerPort = myoobserver:8888
TargetDSN = mytargetdsn
LogonUser = server_username
LogonAuth = password_for_LogonUser
```
ODBC 数据源配置最重要的注意事项是数据源中的驱动(Driver)必需保持和驱动配置文件（odbcinst.ini）中的驱动名(DRIVER_NAME)一致。

3. 文件数据源配置<br/>
配置文件默认路径： `/etc/ODBCDataSources`, ODBC 数据源配置模板如前所示；

5. 用户独享数据源配置<br/>
配置文件默认路径： `/home/auser/.odbc.ini`, ODBC 数据源配置模板如前所示；

最后，您可以使用命令行列出所有已配置好的数据源: `odbcinst -q -s`