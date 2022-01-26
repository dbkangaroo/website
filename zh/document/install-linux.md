---
title: Linux 平台安装
lang: zh-CN
---

# Linux 平台安装

## 下载 袋鼠数据库工具
点击链接下载最新版的袋鼠数据库工具 [下载](../download)

::: danger 面向使用 1.9.1 以上版本的关键提示
因为 libgda 6.X 仍未发布稳定版本，所以需要我们手工完成 libgda 6.0 的编译和安装，步骤如下：
```bash
git clone https://gitlab.gnome.org/GNOME/libgda.git
meson --buildtype=release build
meson compile -C build
sudo meson install -C build
```
:::

::: danger 面向使用 1.91.1 版本的关键提示
袋鼠 1.91.1 编辑器使用了未发布的 GtkSoureView 5.4，体验该版本的用户需要自行编译和安装，步骤如下：
```bash
git clone https://gitlab.gnome.org/GNOME/gtksourceview.git
meson --buildtype=release build
meson compile -C build
sudo meson install -C build
```
:::

## 在 Ubuntu 发行版上安装
下面的安装脚本预设您的系统已经默认安装了核心组件 GLib / GTK 4.0
1. 安装第三方依赖库
```bash
sudo apt install libgtk-4-0 libgee-0.8 libsoup2.4 libjson-glib-1.0
sudo apt install libsqlite3-0 mysql-client mariadb-client libpq5
# sudo apt install libgda-5.0-4 libgda-5.0-mysql libgda-5.0-postgtes
sudo apt install libgtksourceview-5-0 libwebkit2gtk-4.0 libssh2-1 openssl 
sudo apt install libadwaita-1-0 libuchardet libarchive13 libpeas-1.0-0
```
2. 解压缩便携式安装包到指定目录
```bash
tar -xvf <Kangaroo-......tar.gz>
```


## 在 Fedora 发行版上安装
下面的安装脚本预设您的系统已经默认安装了核心组件 GLib / GTK 4.0 :
1. 安装第三方依赖库
```bash
sudo dnf install gtk4 libgee json-glib libsoup
sudo dnf install sqlite mysql mariadb postgresql
# sudo dnf install libgda libgda-mysql libgda-postgres
sudo dnf install gtksourceview5 webkit2gtk3 libssh2 openssl
sudo dnf install libadwaita libuchardet libarchive libpeas
```
2. 解压缩便携式安装包到指定目录
```bash
tar -xvf <Kangaroo-......tar.gz>
```

## 在 RHEL/CentOS 发行版上安装
下面的安装脚本预设您的系统已经默认安装了核心组件 GLib / GTK 4.0 :
```bash
sudo yum install libgee json-glib libsoup
sudo yum install sqlite mysql mariadb postgresql
# sudo yum install libgda libgda-mysql libgda-postgres
sudo yum install gtksourceview5 webkit2gtk3 libssh2 openssl
sudo yum install libadwaita libuchardet libarchive libpeas
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
下面的安装脚本预设您的系统已经默认安装了核心组件 GLib / GTK 4.0 :
```bash
sudo pacman -Syu
sudo pacman -S libgee json-glib libsoup
sudo pacman -S sqlite mysql++ mariadb-libs postgresql-libs
# sudo pacman -S libgda libgda-mysql libgda-postgres
sudo pacman -S gtksourceview5 webkit2gtk3 libssh2 openssl
sudo pacman -S libadwaita libuchardet libarchive libpeas
```
2. 解压缩便携式安装包到指定目录
```bash
tar -xvf <Kangaroo-......tar.gz>
```

<Vssue :issue-id="5" :title="$title" />
