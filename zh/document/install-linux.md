---
title: Linux 平台安装
lang: zh-CN
---

# Linux 平台安装

## 下载 袋鼠数据库工具
点击链接下载最新版的袋鼠数据库工具 [下载](../download)

## 在 Ubuntu 发行版上安装
下面的安装脚本预设您的系统已经默认安装了核心组件 GLib / GTK4 / GDK-Pixbuf :
1. 安装第三方依赖库
```bash
sudo apt install libadwaita-1-0 libgtksourceview-5-0 libpeas-1.0-0 
sudo apt install libxml2 libgee-0.8 libsoup-3.0 libjson-glib-1.0 libssh2-1 openssl 
sudo apt install libuchardet libarchive13 libqrencode4
sudo apt install sqlite3 mysql-client mariadb-client libpq5
sudo apt install unixodbc libsqliteodbc odbc-mariadb odbc-postgresql
```
2. 解压缩便携式安装包到指定目录
```bash
tar -xvf <Kangaroo-......tar.gz>
```

## 在 Fedora 发行版上安装
下面的安装脚本预设您的系统已经默认安装了核心组件 GLib / GTK4 / GDK-Pixbuf :
1. 安装第三方依赖库
```bash
sudo dnf install libadwaita gtksourceview5 libpeas
sudo dnf install libgee json-glib libsoup3 libxml2 libssh2 openssl
sudo dnf install libuchardet libarchive qrencode-libs
sudo dnf install sqlite mysql mariadb postgresql
sudo dnf install unixODBC sqliteodbc mysql-connector-odbc mariadb-connector-odbc postgresql-odbc
```
2. 解压缩便携式安装包到指定目录
```bash
tar -xvf <Kangaroo-......tar.gz>
```

## 在 RHEL/CentOS 发行版上安装
下面的安装脚本预设您的系统已经默认安装了核心组件 GLib / GTK4 / GDK-Pixbuf :
```bash
sudo yum install gtksourceview5 libadwaita libpeas
sudo yum install libxml2 libgee json-glib libsoup libssh2 openssl
sudo yum install libuchardet libarchive qrencode-libs
sudo yum install sqlite mysql mariadb postgresql
sudo yum install unixODBC sqliteodbc mysql-connector-odbc mariadb-connector-odbc postgresql-odbc
```
2. 解压缩便携式安装包到指定目录
```bash
tar -xvf <Kangaroo-......tar.gz>
```

## 在 ArchLinux 发行版上安装
ArchLinux 发行版提供了两种安装方式：安装程序 和 手工安装，您可以根据您的需要选择安装。

### 安装程序
1. 执行命令完成安装: `pacman -U <package>`
2. 检查应用中心是否存在袋鼠数据库工具图标

### 手工安装
下面的安装脚本预设您的系统已经默认安装了核心组件 GLib / GTK4 / GDK-Pixbuf :
```bash
sudo pacman -Syu
sudo pacman -S gtksourceview5 libadwaita libpeas 
sudo pacman -S libxml2 libgee json-glib libsoup3 libssh2 openssl
sudo pacman -S libuchardet libarchive qrencode
sudo pacman -S sqlite mysql-clients mariadb-clients postgresql-libs
sudo pacman -S unixodbc sqliteodbc myodbc mariadb-connector-odbc psqlodbc
```
ODBC 驱动候选安装：`msodbcsql oracle-instantclient-odbc`

2. 解压缩便携式安装包到指定目录
```bash
tar -xvf <Kangaroo-......tar.gz>
```

<Vssue :issue-id="5" :title="$title" />
