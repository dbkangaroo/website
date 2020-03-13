---
title: How to deploy GTK based app on windows?(Updated)
lang: en-US
sidebarDepth: 2
---

# How to deploy GTK based app on windows?(Updated at 03/15/2020)

## Background
Since developing SQL client tool Kangaroo, I met the major trouble is how to deploy Kangaroo app to user, then searched all of solutions from internet, finally, I found a great article [GTK+3 Installation Tutorial for Windows](http://www.tarnyko.net/repo/gtk3_build_system/tutorial/gtk3_tutorial.htm), it provides clear guide to deploy GTK based app, so the honor belongs to the author of article.

## Precondition
The app must be compiled and executed in environment: [MSYS2](https://www.msys2.org/)

## Solution
### Prepare app directory structure
To deploy GTK based app, the app must follow the directory structure like linux:
```
[App Home]
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

### Copy dependent libraries of app
__List of GTK dependencies__
GTK depends on several libraries:
+ GLib
+ cairo
+ Pango
+ ATK
+ gdk-pixbuf

To run GTK programs you will also need:
+ gettext-runtime
+ fontconfig
+ freetype
+ expat
+ libpng
+ zlib

__How to get the file list and copy them to target dir?__

the solution is a series of linux commands combination like this:
```bash
ldd "${SOURCEDIR}/build/src/kangaroo.exe" | grep '\/mingw64\/bin\/.*dll' -o | xargs -I{} cp -f "{}" "${TARGETDIR}/bin/"
```

__Done the commands above is all right?   No!!!__

Some components in the GTK framework have plugins like gdk-pixbuf / libgda, so we must use the commands to copy them one by one.
```bash
ldd /mingw64/bin/libpq.dll | grep '\/mingw64\/bin\/.*dll' -o | xargs -I{} cp -f "{}" "${TARGETDIR}/bin/"
```


### Copy app resource file
+ /etc
  - /gtk-3.0/settings.ini : applications-wide settings.
  - *: miscellaneous files.

+ /lib
  - /gdk-pixbuf-2.0 : GDK-Pixbuf modules. SVG support.
  - /gtk-3.0 : GTK+-IM modules.
  - /pango : Pango modules.
  - *: import libraries, headers, pkg-config files... only needed for development.

+ /share
  - /doc : license and copyleft.
  - /gtk-3.0 : resource files for gtk3-demo program.
  - /gtk-doc : documentation in HTML format.
  - /icons : icon themes, used by gtk3-demo and gtk3-widget-factory.
  - /locale : localization files. Internationalized text support.
  - /themes : graphical themes.
  - *: miscellaneous files.

### Validae the runtime dependency view
execute the app under user ENV and the app under dev ENV, compare the runtime dependency view, check the count of dll file and dll file name. make sure they are same.

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

### Full source code
```bash
#!/usr/bin/env sh

#
# Copyright(C) 2018-2019 taozuhong(https://github.com/taozuhong)
# Important:
#   These functions are a part of the Kangaroo tool suite;
#   copyright taozuhong. 2018, 2019.  All rights reserved.
#
# Author:    taozuhong
# Created:   1.8.2019
#
SOURCEDIR="$( cd "$(dirname "$0")/../" ; pwd -P )"
TARGETDIR="${SOURCEDIR}/build/windows"
VERSION="0.7.2.$(date +%y%m%d)"

# check target directory exist and make it
echo -n "Check and make target directory......"
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
echo "[done]"

# copy app dependency library to target dir
echo -n "Copy app dependency library......"
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
echo "[done]"

# copy GDBus/Helper and dependencies files
echo -n "Copy GDBus/Helper and dependencies......"
cp -f $MSYSTEM_PREFIX/bin/gdbus.exe "${TARGETDIR}/bin/"
ldd $MSYSTEM_PREFIX/bin/gdbus.exe | grep "$MSYSTEM_PREFIX\/bin\/.*dll" -o | xargs -I{} cp -f "{}" "${TARGETDIR}/bin/"
cp -f $MSYSTEM_PREFIX/bin/gspawn-win64-helper.exe "${TARGETDIR}/bin/"
ldd $MSYSTEM_PREFIX/bin/gspawn-win64-helper.exe | grep "$MSYSTEM_PREFIX\/bin\/.*dll" -o | xargs -I{} cp -f "{}" "${TARGETDIR}/bin/"
echo "[done]"

# libgda providers required library(MySQL/PostgreSQL/JDBC/...)
echo -n "Copy database client library for libgda......"
cp -f $MSYSTEM_PREFIX/bin/libpq.dll "${TARGETDIR}/bin/"
cp -f $MSYSTEM_PREFIX/bin/mariadb.dll "${TARGETDIR}/bin/"
ldd $MSYSTEM_PREFIX/bin/libpq.dll | grep "$MSYSTEM_PREFIX\/bin\/.*dll" -o | xargs -I{} cp -f "{}" "${TARGETDIR}/bin/"
ldd $MSYSTEM_PREFIX/bin/mariadb.dll | grep "$MSYSTEM_PREFIX\/bin\/.*dll" -o | xargs -I{} cp -f "{}" "${TARGETDIR}/bin/"
if [ -d "${SOURCEDIR}/libs/plugin" ]; then
  cp -rf "${SOURCEDIR}/libs/plugin" "${TARGETDIR}/lib"
fi
echo "[done]"

# copy GTK runtime dependencies resource
echo -n "Copy GTK runtime resource......"
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
echo "[done]"

# download license file: LGPL-3.0
echo -n "Downloading the remote license file......"
if [ ! -f "${TARGETDIR}/share/doc/lgpl-3.0.txt" ]; then
  curl "https://www.gnu.org/licenses/lgpl-3.0.txt" -o "${TARGETDIR}/share/doc/lgpl-3.0.txt"
fi
if [ -f "${TARGETDIR}/share/doc/lgpl-3.0.txt" ]; then
  echo "[done]"
else
  echo "[failed]"
fi
```

