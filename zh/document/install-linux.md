---
title: Linux 平台安装
lang: zh-CN
---

# Linux 平台安装

## 下载 袋鼠数据库工具
点击链接下载最新版的袋鼠数据库工具 [下载](../download)


## 在 Ubuntu 发行版上安装
下面的安装脚本预设您的系统已经默认安装了核心组件 GLib / GTK 3.0
1. 安装第三方依赖库
```bash
sudo apt install libgtk-3-0
sudo apt install libgee-0.8
sudo apt install libsoup2.4
sudo apt install libjson-glib-1.0
sudo apt install libgda-5.0-4
sudo apt install libgda-5.0-mysql
sudo apt install libgda-5.0-postgtes
sudo apt install libgtksourceview-4-0
sudo apt install libwebkit2gtk-4.0
sudo apt install libssh2-1 openssl
```
2. 解压缩便携式安装包到指定目录
```bash
tar -xvf <Kangaroo-......tar.gz>
```


## 在 Fedaro 发行版上安装
下面的安装脚本预设您的系统已经默认安装了核心组件 GLib / GTK 3.0 :
1. 安装第三方依赖库
```bash
sudo dnf install gtk3 libgee json-glib libsoup
sudo dnf install libgda libgda-mysql libgda-postgres
sudo dnf install gtksourceview4 webkit2gtk3 libssh2 openssl
```
2. 解压缩便携式安装包到指定目录
```bash
tar -xvf <Kangaroo-......tar.gz>
```

## 在 RHEL/CentOS 发行版上安装
下面的安装脚本预设您的系统已经默认安装了核心组件 GLib / GTK 3.0 :
```bash
sudo yum install libgee json-glib libsoup
sudo yum install libgda libgda-mysql libgda-postgres 
sudo yum install gtksourceview4 webkit2gtk3 libssh2 openssl
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
下面的安装脚本预设您的系统已经默认安装了核心组件 GLib / GTK 3.0 :
```bash
sudo pacman -Syu
sudo pacman -S libgee json-glib libsoup
sudo pacman -S libgda libgda-mysql libgda-postgres 
sudo pacman -S gtksourceview4 webkit2gtk3 libssh2 openssl
```
2. 解压缩便携式安装包到指定目录
```bash
tar -xvf <Kangaroo-......tar.gz>
```

<Vssue :issue-id="5" :title="$title" />
