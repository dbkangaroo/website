---
title: MacOS 平台安装
lang: zh-CN
---

## 注意(需要您的帮助)
MacOS 版袋鼠数据库工具还未准备好，因为依赖库 libgda 5.2.9 的提供程序缺失的原因导致(MySQL / PostgreSQL / JDBC), libgda 内置的SQLite提供程序也会在执行SQL时奔溃......

libgda 需要您的帮助以提升质量，需要更多信息请参考项目官方网站 [libgda website](https://gitlab.gnome.org/GNOME/libgda)

## 下载袋鼠数据库工具
点击链接下载最新版的袋鼠数据库工具 [下载](../download)

## 安装袋鼠数据库工具
MacOS 平台提供了两种安装方式：安装程序 和 手工安装，您可以根据您的喜好安装；

### 安装程序
1. 在文件管理器中打开 DMG 安装器
2. 在显示的界面中拖动袋鼠图标到右边的应用图标上即可完成安装。
3. 检查应用中心是否存在袋鼠数据库工具图标


## 手工安装
1. 安装第三方依赖库
``` bash
brew install gtksourceview4 adwaita-icon-theme
brew install libgee libsoup json-glib libgda
brew install libxml2 libssh2 openssl
# brew install libgda-mysql libgda-postgtes libgda-jdbc
brew install mysql-connector-c mariadb-connector-c libpq
```

2. 解压缩便携式安装包到制定目录中
```bash
tar -xvf <Kangaroo-......tar.gz>
```

<Vssue :issue-id="6" :title="$title" />
