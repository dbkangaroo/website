---
title: ODBC drivers
lang: en-US
---

# ODBC drivers

## Third-party ODBC drivers(free)
List some ODBC drivers and it's download link
| ODBC Components     | Windows               | Linux                 | macOS                 |
|-----------------    |-----------------------|-----------------------|-----------------------|
| ODBC Driver Manager | Built-in              | [UnixODBC](http://www.unixodbc.org/) / [iODBC](http://www.iodbc.org/dataspace/doc/iodbc/wiki/iodbcWiki/Downloads) | [UnixODBC](http://www.unixodbc.org/) / [iODBC](http://www.iodbc.org/dataspace/doc/iodbc/wiki/iodbcWiki/Downloads) |
| SQLite              | [x86-64](http://www.ch-werner.de/sqliteodbc/sqliteodbc_w64.exe) | | |
| MySQL               | [x86-64](https://cdn.mysql.com//Downloads/Connector-ODBC/8.0/mysql-connector-odbc-8.0.29-winx64.msi) | | |
| MariaDB             | [x86-64](https://storage.googleapis.com/downloads-cdn.mariadb.com/mariadb_server/10.8/10.8.3/winx64-packages/mariadb-10.8.3-winx64.msi) | | |
| PostgreSQL          | [x86-64](https://ftp.postgresql.org/pub/odbc/versions/msi/psqlodbc_13_02_0000-x64.zip) | | |
| SQL Server          | [x86-64](https://download.microsoft.com/download/1/a/4/1a4a49b8-9fe6-4237-be0d-a6b8f2d559b5/en-US/18.0.1.1/x64/msodbcsql.msi) | [x86-64](https://docs.microsoft.com/en-us/sql/connect/odbc/linux-mac/installing-the-microsoft-odbc-driver-for-sql-server)| [x86-64](https://docs.microsoft.com/en-us/sql/connect/odbc/linux-mac/install-microsoft-odbc-driver-sql-server-macos?view=sql-server-ver16) |
| Oracle              | [x86-64](https://www.oracle.com/database/technologies/dotnet-odacdeploy-downloads.html) | | |


## Third-party ODBC drivers(charged)
[Easysoft ODBC Drivers](https://www.easysoft.com/products/data_access/index.html#odbc-drivers)<br/>
[CData Software ODBC Drivers](https://www.cdata.com/odbc/)<br/>
[Devart ODBC Drivers](https://www.devart.com/odbc/)

## UnixODBC / iODBC install and setup
1. Install UnixODBC / iODBC
```bash
yum install -y <unixodbc | iodbc>
yum install mysql-connector-odbc mariadb-connector-odbc pgodbc <ODBC driver package>
```

2. Setup ODBC drivers<br/>
default path: `/etc/odbcinst.ini`, the ODBC driver template as follow:
```
[DRIVER_NAME]
  Description = description of the ODBC driver
  Driver = path_to_odbc_driver_shared_object
  Setup = path_to_driver_setup_shared_object
```
after that, You can list all installed ODBC drivers with: `odbcinst -q -d`

3. Setup system data sources<br/>
default path: `/etc/odbc.ini`, the data source template as follow
```
[my_datasource]
Driver = OOB
Description = description_of_data_source
ServerPort = myoobserver:8888
TargetDSN = mytargetdsn
LogonUser = server_username
LogonAuth = password_for_LogonUser
```
The most important is that the driver name in datasource should be same as the driver name in the file: `odbcinst.ini`

3. Setup file data sources<br/>
default path: `/etc/ODBCDataSources`, the syntax same as 

5. Setup user data sources<br/>
default path: `/home/auser/.odbc.ini`

finaly, You can list user and system data sources with:
`odbcinst -q -s`