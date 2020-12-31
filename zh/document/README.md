---
title: 使用文档
lang: zh-CN
---

# 袋鼠数据库工具使用文档
这里是所有用户文档的集中入口，您可以从这里查找您需要的文档，如果没有您需要的文档，您可以在项目缺陷库中提交请求，我们会第一时间更新、补充和完善文档；也欢迎您为袋鼠贡献文档；

## 许可证
[袋鼠数据库工具许可证](license.md)

## 功能特性
[完整功能清单](feature-matrix.md)

## 发布更新记录
[袋鼠数据库工具更新时间线](changelog.md)

## 常用问题列表
[常用问题列表](faq.md)

## 连接数据库
[建立一个数据库连接](connection.md)

## 新建数据表
[表对象设计器](schema.md)

## 数据编辑器
[数据浏览及编辑视图](datagrid.md)

## 查询分析器
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
libhandy-1 >= 1.1
openssl >= 1.1.0
libpeas-1.0 >= 1.20.0
libpeas-gtk-1.0 >= 1.20.0
libgda-5.0 >= 5.2.9
libgda-mysql
libgda-postgres
```

<Vssue :issue-id="2" :title="$title" />
