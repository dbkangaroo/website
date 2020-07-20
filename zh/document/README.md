---
title: 使用文档
lang: zh-CN
---

# 袋鼠数据库工具使用文档
## 许可证
[袋鼠数据库工具许可证](license.md)

## 发布更新记录
[袋鼠数据库工具更新时间线](changelog.md)

## 常用问题列表
[常用问题列表](faq.md)

## 连接数据库
[建立一个数据库连接](connection.md)

## 创新新数据表
[表结构设计器](schema.md)

## 浏览并编辑数据
[数据内容浏览视图](datagrid.md)

## SQL 编程
[SQL 编辑查询视图](editor.md)


## 安装袋鼠数据库工具
Windows 版本袋鼠数据库工具具有完整的功能支持，且具有最佳用户体验：<br/>
[Windows 平台安装袋鼠数据库工具](install_windows.md)

Linux 版本袋鼠数据库工具具有完整的功能支持，安装很轻松：<br/>
[Linux 平台安装袋鼠数据库工具](install_linux.md)

MacOS 版本袋鼠数据库工具具有完整的功能支持，安装体验正在完善中:<br/>
[MacOS 平台安装袋鼠数据库工具](install_macos.md)

## 第三方依赖库
袋鼠数据库工具构建在 GLib / GTK3 / Libgda / Vala 基础上, Linux 平台上需要先安装他们, 详细的依赖库及版本列表如下:
```Text
posix
gio-2.0 > 2.64
glib-2.0 >= 2.64
gtk+-3.0 >= 3.24
gdk-pixbuf-2.0
gtksourceview-4
gee-0.8 > 0.20.0
json-glib-1.0
libsoup-2.4 >= 2.64
libssh2 >= 1.8
libxml-2.0 >= 2.9
openssl >= 1.1.0
libpeas-1.0 >= 1.20.0
libpeas-gtk-1.0 >= 1.20.0
libgda-5.0 >= 5.2.9
libgda-mysql
libgda-postgres
```

<Vssue :issue-id="2" :title="$title" />
