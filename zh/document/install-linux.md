---
title: Linux 平台安装
lang: zh-CN
---

# Linux 平台安装

## 下载 袋鼠数据库工具
点击链接下载最新版的袋鼠数据库工具 [下载](../download)

## 在 Debian/Ubuntu 发行版上安装
先从官网下载 Debian/Ubuntu 支持的安装包(*.deb)，然后执行命令：
```bash
# For Ubuntu
sudo apt install kangaroo-max-3.92.1.230901-x86_64.deb

# For Debian
sudo dpkg -i kangaroo-max-3.92.1.230901-x86_64.deb
```

## 在 RHEL/CentOS/Fedora 发行版上安装
先从官网下载 RHEL/CentOS/Fedora 支持的安装包(*.rpm)，然后执行命令：
```bash
# For Fedora
sudo dnf install kangaroo-max-3.92.1.230901-x86_64.rpm

# For RHEL/CentOS
sudo yum install kangaroo-max-3.92.1.230901-x86_64.rpm
```

## 在 Arch Linux 发行版上安装
先从官网下载 Arch Linux 支持的安装包(*.pkg.tar.zst)，然后执行命令：
```bash
sudo pacman -U kangaroo-max-3.91.1.230901-1-x86_64.pkg.tar.zst
```

<Vssue :issue-id="5" :title="$title" />
