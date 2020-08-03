---
title: 如何快速有效部署GTK应用程序到Windows平台？(08/03/2020 更新)
lang: zh-CN
sidebarDepth: 2
---

# 如何快速有效部署GTK应用程序到Windows平台？(08/03/2020 更新)

## 背景介绍
自从启动开发 __袋鼠数据库工具__ 以来，我遇到的最大困难就是如何打包 __袋鼠数据库工具__ 应用给用户，经借用强大的谷歌寻找解决方案，最终寻找到了一位日本友人分享的文章[Windows平台 GTK+3 安装包教程](http://www.tarnyko.net/repo/gtk3_build_system/tutorial/gtk3_tutorial.htm)，文章提供了一份最清晰的 Windows 平台 GTK3 应用部署目录结构，一切问题迎刃而解，所以成功部署 GTK 应用的荣耀应该属于该文章作者。

## 前置条件
文本所介绍的 GTK 应用打包教程基于构建环境 [MSYS2](https://www.msys2.org/)，请提前准备好构建环境。

## 解决方案
### 准备应用目录结构
为了成功部署 GTK 应用，应用的最终安装目录结构必须参考 Linux 系统目录结构，目录结构如下：
```
[安装目录]
    ├─bin
    ├─etc
    │  └─gtk-3.0
    ├─lib
    └─share
        ├─doc
        ├─glib-2.0
        │  └─schemas
        ├─icons
        │  ├─Adwaita
        │  └─hicolor
        ├─locale
        └─themes
            ├─Default
            ├─MS-Windows
            └─Windows10
```

<div>
    <script2 type="text/javascript" async="true" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    <ins class="adsbygoogle"
        style="display:block; text-align:center;"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3975819313740938"
        data-ad-slot="6760827895"></ins>
    <script2 type="text/javascript">
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script2>
</div>

### 复制第三方依赖库
__List of GTK dependencies__
GTK 框架依赖的第三方库:
+ GLib
+ cairo
+ Pango
+ ATK
+ gdk-pixbuf

为了启动 GTK 应用，您也需要如下第三方库：
+ gettext-runtime
+ fontconfig
+ freetype
+ expat
+ libpng
+ zlib

__如何获取依赖库列表并复制到打包目录？__

解决方案就是一系列 Linux 命令工具组合，详细如下：
```bash
ldd "${SOURCEDIR}/build/src/kangaroo.exe" | grep '\/mingw64\/bin\/.*dll' -o | xargs -I{} cp -f "{}" "${TARGETDIR}/bin/"
```

__执行完上述命令就够了吗？ 不够!!!__

GTK 框架中一些地三方依赖库，比如 gdk-pixbuf / libgda，通过插件扩展的方式实现其功能，所以我们必须找出它们来，并把它们的插件文件和依赖库都找到并复制到打包目录：
```bash
ldd /mingw64/bin/libpq.dll | grep '\/mingw64\/bin\/.*dll' -o | xargs -I{} cp -f "{}" "${TARGETDIR}/bin/"
```

### 复制应用资源文件
+ /etc
  - /gtk-3.0/settings.ini : 应用级别的配置文件
  - *: 其它未列出的文件

+ /lib
  - /gdk-pixbuf-2.0 : GDK-Pixbuf 模块： SVG 支持库
  - /gtk-3.0 : GTK+-IM 模块
  - /pango : Pango 模块
  - *: 扩展开发需要导入的库、头文件、pkg-config(*.pc)配置文件等... 仅用于开发用途

+ /share
  - /doc : 应用文档，如许可证和版权协议等
  - /gtk-3.0 : GTK3 相关的资源文件（gkt3-demo）
  - /gtk-doc : gtk-doc 生存的网页文档
  - /icons : 框架和应用的图标文件
  - /locale : 框架和应用的本地化文件（用于支持多语言）
  - /themes : 架和应用的样式文件
  - *: 其它未列出的文件

### 通过运行时依赖视图比较打包完整性
在全功能模式下，分别在用户环境和测试环境启动应用，用工具 [Process Explorer](https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer) 查看运行时依赖视图（加载的DLL清单），对比依赖库数量是否一致，通过比较打包目录内的dll查漏补缺；

<div>
    <script2 type="text/javascript" async="true" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    <ins class="adsbygoogle"
        style="display:block; text-align:center;"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3975819313740938"
        data-ad-slot="6760827895"></ins>
    <script2 type="text/javascript">
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script2>
</div>

### 袋鼠数据库的完整打包脚本，可微调直接复用
```bash
#!/usr/bin/env sh

#
# Copyright(C) 2018-2020 taozuhong(https://github.com/taozuhong)
# Important:
#   These functions are a part of the Kangaroo tool suite;
#   copyright taozuhong. 2018-2020.  All rights reserved.
#
# Author:    taozuhong
# Created:   1.8.2019
#
SOURCEDIR="$( cd "$(dirname "$0")/../" ; pwd -P )"
TARGETDIR="${SOURCEDIR}/build/windows"
VERSION="0.7.2.$(date +%y%m%d)"

# 检查并创建打包目录
echo -n "检查并创建打包目录......"
if [ ! -d "$TARGETDIR" ]; then
  mkdir $TARGETDIR
  mkdir "${TARGETDIR}/bin/"
  mkdir "${TARGETDIR}/lib/"
  mkdir -p "${TARGETDIR}/share/glib-2.0/schemas"
  mkdir "${TARGETDIR}/share/doc"
  mkdir "${TARGETDIR}/share/themes"
  mkdir "${TARGETDIR}/etc/"
else 
  if [ ! -d "${TARGETDIR}/bin" ]; then
    mkdir "${TARGETDIR}/bin/"
  fi

  if [ ! -d "${TARGETDIR}/lib" ]; then
    mkdir "${TARGETDIR}/lib/"
  fi

  if [ ! -d "${TARGETDIR}/share" ]; then
    mkdir -p "${TARGETDIR}/share/glib-2.0/schemas"
    mkdir "${TARGETDIR}/share/"
    mkdir "${TARGETDIR}/share/doc"
    mkdir "${TARGETDIR}/share/themes"
  fi

  if [ ! -d "${TARGETDIR}/etc" ]; then
    mkdir "${TARGETDIR}/etc/"
  fi
fi
echo "[完成]"

# 复制应用第三方依赖库
echo -n "复制应用第三方依赖库......"
ldd "${SOURCEDIR}/build/src/kangaroo.exe" | grep "$MSYSTEM_PREFIX\/bin\/.*dll" -o | xargs -I{} cp -f "{}" "${TARGETDIR}/bin/"
ldd $MSYSTEM_PREFIX/bin/libjson-glib-1.0-0.dll | grep "$MSYSTEM_PREFIX\/bin\/.*dll" -o | xargs -I{} cp -f "{}" "${TARGETDIR}/bin/"
ldd $MSYSTEM_PREFIX/bin/libsoup-2.4-1.dll | grep "$MSYSTEM_PREFIX\/bin\/.*dll" -o | xargs -I{} cp -f "{}" "${TARGETDIR}/bin/"
ldd $MSYSTEM_PREFIX/bin/libgtksourceview-4-0.dll | grep "$MSYSTEM_PREFIX\/bin\/.*dll" -o | xargs -I{} cp -f "{}" "${TARGETDIR}/bin/"

cp -f "${SOURCEDIR}/build/src/kangaroo.exe" "${TARGETDIR}/bin/"
cp -f "${SOURCEDIR}/data/assets/kangaroo.ico" "${TARGETDIR}/bin/"
cp -f $MSYSTEM_PREFIX/bin/librsvg-2-2.dll "${TARGETDIR}/bin/"
cp -f $MSYSTEM_PREFIX/bin/libgthread-2.0-0.dll "${TARGETDIR}/bin/"
cp -f $MSYSTEM_PREFIX/bin/libcroco-0.6-3.dll "${TARGETDIR}/bin/"
cp -f $MSYSTEM_PREFIX/bin/libtasn1-6.dll "${TARGETDIR}/bin/"
cp -f $MSYSTEM_PREFIX/bin/libproxy-1.dll "${TARGETDIR}/bin/"
cp -f $MSYSTEM_PREFIX/bin/libp11-kit-0.dll "${TARGETDIR}/bin/"
cp -f $MSYSTEM_PREFIX/bin/libnettle-7.dll "${TARGETDIR}/bin/"
cp -f $MSYSTEM_PREFIX/bin/libhogweed-5.dll "${TARGETDIR}/bin/"
cp -f $MSYSTEM_PREFIX/bin/libgnutls-30.dll "${TARGETDIR}/bin/"
cp -f $MSYSTEM_PREFIX/bin/libgmp-10.dll "${TARGETDIR}/bin/"
echo "[完成]"

# 复制 GDBus/Helper 及其依赖库
echo -n "复制 GDBus/Helper 及其依赖库......"
cp -f $MSYSTEM_PREFIX/bin/gdbus.exe "${TARGETDIR}/bin/"
ldd $MSYSTEM_PREFIX/bin/gdbus.exe | grep "$MSYSTEM_PREFIX\/bin\/.*dll" -o | xargs -I{} cp -f "{}" "${TARGETDIR}/bin/"
cp -f $MSYSTEM_PREFIX/bin/gspawn-win64-helper.exe "${TARGETDIR}/bin/"
ldd $MSYSTEM_PREFIX/bin/gspawn-win64-helper.exe | grep "$MSYSTEM_PREFIX\/bin\/.*dll" -o | xargs -I{} cp -f "{}" "${TARGETDIR}/bin/"
echo "[完成]"

# 复制 libgda / 提供者及其依赖库(MySQL/PostgreSQL/JDBC/...)
echo -n "复制 libgda / 提供者及其依赖库......"
cp -f $MSYSTEM_PREFIX/bin/libpq.dll "${TARGETDIR}/bin/"
cp -f $MSYSTEM_PREFIX/bin/mariadb.dll "${TARGETDIR}/bin/"
ldd $MSYSTEM_PREFIX/bin/libpq.dll | grep "$MSYSTEM_PREFIX\/bin\/.*dll" -o | xargs -I{} cp -f "{}" "${TARGETDIR}/bin/"
ldd $MSYSTEM_PREFIX/bin/mariadb.dll | grep "$MSYSTEM_PREFIX\/bin\/.*dll" -o | xargs -I{} cp -f "{}" "${TARGETDIR}/bin/"
if [ -d "${SOURCEDIR}/libs/plugin" ]; then
  cp -rf "${SOURCEDIR}/libs/plugin" "${TARGETDIR}/lib"
fi
echo "[完成]"

# 复制 GTK 运行时依赖资源
echo -n "复制 GTK 运行时依赖资源......"
cp -rf $MSYSTEM_PREFIX/lib/gdk-pixbuf-2.0 "${TARGETDIR}/lib/"
cp -rf $MSYSTEM_PREFIX/lib/libgda-5.0 "${TARGETDIR}/lib/"
cp -rf $MSYSTEM_PREFIX/lib/gio "${TARGETDIR}/lib/"
cp -rf $MSYSTEM_PREFIX/etc/gtk-3.0 "${TARGETDIR}/etc/"
cp -rf $MSYSTEM_PREFIX/share/icons "${TARGETDIR}/share/"
cp -rf $MSYSTEM_PREFIX/share/locale "${TARGETDIR}/share/"
cp -rf $MSYSTEM_PREFIX/share/gtksourceview-4 "${TARGETDIR}/share/"
glib-compile-schemas $MSYSTEM_PREFIX/share/glib-2.0/schemas
cp -f $MSYSTEM_PREFIX/share/glib-2.0/schemas/gschema* "${TARGETDIR}/share/glib-2.0/schemas"
cp -rf $MSYSTEM_PREFIX/share/themes/Default "${TARGETDIR}/share/themes/"
cp -rf $MSYSTEM_PREFIX/share/themes/MS-Windows "${TARGETDIR}/share/themes/"
find "${TARGETDIR}/lib" -type f -path '*.dll.a' -exec rm '{}' \;
echo "[完成]"

# 下载许可证文件: LGPL-3.0
echo -n "下载许可证文件......"
if [ ! -f "${TARGETDIR}/share/doc/lgpl-3.0.txt" ]; then
  curl "https://www.gnu.org/licenses/lgpl-3.0.txt" -o "${TARGETDIR}/share/doc/lgpl-3.0.txt"
fi
if [ -f "${TARGETDIR}/share/doc/lgpl-3.0.txt" ]; then
  echo "[完成]"
else
  echo "[失败]"
fi
```

