---
title: 苹果系统 GTK 应用打包新思路
lang: zh-CN
sidebarDepth: 2
copyright:
  minLength: 32
---

# 苹果系统 GTK 应用打包新思路

## 背景介绍
好多苹果系统用户通过各种方式联系本人，期望提供正式的可直接安装使用的安装包(.dmg)；我非常愿意做这件事情，但又觉得困难重重，因为目前没有可供使用的物理机器、且接触使用苹果系统时间不长，对系统了解不够，恐遇到难以解决的问题。

多年的职业素养告诉我：面对它、解决它，事情会逐步得到解决的。

于是我集中精力投入这个事情，尝试了一个又一个的办法，经过8天的持续努力后，终于寻找到了最终解决办法，打包后的应用跑起来了。

## 前置条件和环境
本解决方案使用包管理工具 [Homebrew](https://brew.sh/) 来安装和管理应用需要的 GTK 及相关的第三方依赖库；

您需要安装 GTK、libgda、GtkSourceView4、Vala、GCC 编译器工具链等；

## 打包解决方案
### 梳理应用目录结构
为了顺利部署 GTK 应用，应用需要遵循 Linux 应用目录结构，也要遵循 Mac OS X 应用目录结构，组合形成最终的应用目录结构如下：
```
[Kangaroo.app]
    └─Contents
        ├─Info.plist
        ├─MacOS
        │  ├─launcher.sh
        │  └─<Real app>
        └─Resources
            ├─bin
            ├─etc
            │  └─gtk-3.0
            ├─include
            ├─lib
            │  ├─gdk-pixbuf-2.0
            │  │  └─2.10.0
            │  │      └─loaders
            │  ├─gio
            │  │  └─modules
            │  ├─girepository-1.0
            │  ├─gtk-3.0
            │  │  └─3.0.0
            │  │      ├─immodules
            │  │      └─printbackends
            │  ├─kangaroo
            │  │  └─plugins
            │  │      └─example
            │  ├─libgda-5.0
            │  │  └─providers
            │  ├─pkgconfig
            │  └─plugin
            └─share
                ├─appdata
                ├─applications
                ├─doc
                ├─fontconfig
                │  └─conf.avail
                ├─glib-2.0
                │  └─schemas
                ├─gtksourceview-4
                │  ├─language-specs
                │  └─styles
                ├─icons
                │  ├─Adwaita
                │  └─hicolor
                ├─licenses
                │  └─kangaroo
                ├─locale
                ├─themes
                │  ├─Default
                │  └─Mac
                └─vala
                    └─vapi
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


### 苹果应用关键组件
Mac OS X 应用程序有几个关键组件，他们是：
| 关键组件        | 说明           |
|:--------------:|----------------|
| GTK | GTK 库，例如 GTK / GDK / Pango / ... |
| launcher.sh | 应用启动脚本，用于设置环境变量，如多语言支持、 Gdk 图形插件 / GTK 输入和打印模块 / libgda 提供插件 / ... |
| 应用程序 | 您的应用程序 |
| Info.plist | 苹果应用字典文件，包含程序启动需要的配置信息，例如 GtkOSXLaunchScriptFile / CFBundleExecutable / CFBundleIconFiles |
| 图标文件 | 苹果应用图标文件(*.icns) |


### 准备应用资源
您应该在编译打包前提前准备好应用所需的资源，他们是：
1. 应用启动脚本：launcher.sh
2. 应用图标文件：image or .icns
3. 应用字典文件：Info.plist


### 部署应用为 Linux 应用格式
我们的打包思路的第一步是先在 Mac OS X 上部署为完整的 Linux 应用；

首先请编译并安装应用到指定目录（TARGETDIR）：
```bash
meson --prefix=$TARGETDIR --buildtype=release build
ninja -C "${PROJECTDIR}/build" install
```

然后分析应用及其依赖库，复制所有的依赖库文件到前面指定的安装目录（TARGETDIR），构建出一个独立并完整的 Linux 应用；
```bash
function lib_dependency_copy
{
  # 这个函数使用 otool 分析库依赖关系，然后复制所有依赖库到目标目录

  local target=$1
  local folder=$2

  libraries="$(otool -L $target | grep "/*.*dylib" -o | xargs)"
  for lib in $libraries; do
    if [[ '/usr/lib/' != ${lib:0:9} && '/System/Library/' != ${lib:0:16} ]]; then
      cp -n $lib $folder
    fi  
  done
}

function lib_dependency_analyze
{
  # 这个函数使用 otool 分析库依赖关系，
  # 逐个分析指定目录内的所有库，然后复制所有依赖库到目标目录

  local library_dir=$1
  local targets_dir=$2

  libraries="$(find $library_dir -name \*.dylib -o -name \*.so -type f)"
  for lib in $libraries; do
      lib_dependency_copy $lib $targets_dir
  done
}

# 复制应用依赖库到目标目录
echo -n "Copy app dependency library......"
cp -f "${PROJECTDIR}/build/src/kangaroo" "${TARGETDIR}/bin"
cp -f "${TARGETDIR}/lib/libkangaroo.dylib" "${TARGETDIR}/bin"
cp -f "${PROJECTDIR}/tools/mac_launcher.sh" "${TARGETDIR}/bin/launcher.sh"

lib_dependency_copy ${PROJECTDIR}/build/src/libkangaroo.dylib "${TARGETDIR}/bin"
lib_dependency_copy ${TARGETDIR}/bin/libglib-2.0.0.dylib "${TARGETDIR}/bin"
lib_dependency_copy ${TARGETDIR}/bin/libgtk-3.0.dylib "${TARGETDIR}/bin"
lib_dependency_copy ${TARGETDIR}/bin/libjson-glib-1.0.0.dylib "${TARGETDIR}/bin"
lib_dependency_copy ${TARGETDIR}/bin/libsoup-2.4.1.dylib "${TARGETDIR}/bin"
lib_dependency_copy ${TARGETDIR}/bin/libgtksourceview-4.0.dylib "${TARGETDIR}/bin"

cp -f /usr/local/lib/libgtkmacintegration-gtk3.2.dylib "${TARGETDIR}/bin"
cp -f /usr/local/lib/libgirepository-1.0.1.dylib "${TARGETDIR}/bin"
cp -f /usr/local/lib/librsvg-2.2.dylib "${TARGETDIR}/bin"
cp -f /usr/local/lib/libgthread-2.0.0.dylib "${TARGETDIR}/bin"
cp -f /usr/local/lib/libcroco-0.6.3.dylib "${TARGETDIR}/bin"
cp -f /usr/local/lib/p11-kit-proxy.dylib "${TARGETDIR}/bin"
cp -f /usr/local/lib/libgmpxx.4.dylib "${TARGETDIR}/bin"

lib_dependency_analyze ${TARGETDIR}/bin ${TARGETDIR}/bin
echo "[done]"
```


### 封装 Linux 应用为苹果应用
转换完整且独立的 Linux 应用为 Mac OS X 应用结构，只需要遵循 Mac OS X 应用目录结构调整即可；

**如何校验转换后的应用及依赖库是否是自包含和自我依赖的？**<br/>
目前还不能校验，需要完成下一阶段的工作解决库定位问题才能校验，否则会无法启动，依赖库路径也不相符；

<div>
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

### 更新应用及依赖库链接路径
经过几天的折腾，发现苹果系统上打包最重要的问题是在运行时如何解决库查找定位的问题，即以什么顺序查找依赖库、在哪里找到依赖库；经过查阅资料，发现有两种途径可以解决上述问题：
1. 使用库分析处理工具（otool and install_name_tool）来添加或替换库链接路径
```bash
# Gdk-pixbuf plugins
pixbuf_plugins="$(find $APP_LIB_DIR/gdk-pixbuf-2.0/2.10.0/loaders/ -name \*.dylib -o -name \*.so -type f)"
for pixbuf_plugin in $pixbuf_plugins; do
  lib_change_paths \
    @executable_path/../Resources/lib \
    $APP_LIB_DIR \
    $pixbuf_plugin
done

lib_change_paths \
  @executable_path/../Resources/lib \
  $APP_LIB_DIR \
  $APP_EXE_DIR/gdbus

lib_change_siblings $APP_LIB_DIR @loader_path
```

2. 使用环境变量来告诉加载库如何找到它需要的库
```bash
export DYLD_LIBRARY_PATH="$bundle_lib"
export XDG_CONFIG_DIRS="$bundle_etc"/xdg
export XDG_DATA_DIRS="$bundle_data"
export GTK_DATA_PREFIX="$bundle_res"
export GTK_EXE_PREFIX="$bundle_res"
export GTK_PATH="$bundle_res"

# PANGO_* is no longer needed for pango >= 1.38
export PANGO_RC_FILE="$bundle_etc/pango/pangorc"
export PANGO_SYSCONFDIR="$bundle_etc"
export PANGO_LIBDIR="$bundle_lib"

# Pixbuf plugins
export GDK_PIXBUF_MODULEDIR="$bundle_lib/gdk-pixbuf-2.0/2.10.0/loaders"
export GDK_PIXBUF_MODULE_FILE="$bundle_lib/gdk-pixbuf-2.0/2.10.0/loaders.cache"

# MySQL / MaridDB plugins
export LIBMYSQL_PLUGIN_DIR="$bundle_lib/plugin"
export LIBMYSQL_ENABLE_CLEARTEXT_PLUGIN=Y
```

### 验证应用是否打包成功(.app)
目前有两种方法可以帮助我们验证应用的完整性：<br/>
1. 启动并调试应用进行验证<br/>
`GTK_DEBUG_LAUNCHER=yes MyApp.app/Contents/MacOS/MyApp`<br/>
这个命令可以打印出详细的脚本步骤和输出，输出日志到控制台供分析查看；<br/><br/>
发现问题需要调试，可以执行下面的命令进入调试状态调试应用<br/>
`GTK_DEBUG_GDB=yes MyApp.app/Contents/MacOS/MyApp`

2. 使用动态库分析工具列出库的详细依赖库进行验证<br/>
`otool -L MyApp.app/Contents/MacOS/MyApp`<br/>
这个命令可以列出应用的详细依赖库及其链接库位置


### 创建DMG安装包（.dmg）
创建DMG安装包有非常多的工具，我选择了 [node-appdmg](https://github.com/LinusU/node-appdmg) 来创建DMG安装包，因为它提供了 JSON 配置文件且有详细的处理步骤和日志输出，用户体验比较好；
```json
{
    "title": "Kangaroo installer",
    "icon": "kangaroo.icns",
    "background": "kangaroo_dmg_background.png",
    "contents": [
      { "x": 448, "y": 170, "type": "link", "path": "/Applications" },
      { "x": 192, "y": 170, "type": "file", "path": "kangaroo.app" }
    ]
}
```

```bash
# make installer package
echo "make macos installer(.dmg)......"
cp "${PROJECTDIR}/tools/installers/dmg.json" kangaroo_dmg.json
cp "${PROJECTDIR}/data/assets/background.png" "${PROJECTDIR}/build/kangaroo_dmg_background.png"
appdmg kangaroo_dmg.json "kangaroo-${VERSION}-macos.dmg"
if [ $? -eq 0 ]; then
  echo "[done]"
  else
  echo "[failed]"
fi
```

<div>
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

## 打包脚本源代码
本着回馈社区、与 [GNOME](https://www.gnome.org/) 桌面共成长的良好愿景，在此把袋鼠数据库工具的完整打包脚本分享出来，供大家自由使用和分发；

[Info.plist](/sources/Info.plist)<br/>
[mac_launcher.sh](/sources/mac_launcher.sh)<br/>
[mac_app_path.sh](/sources/mac_app_path.sh)<br/>
[mac_app_pack.sh](/sources/mac_app_pack.sh)<br/>
[deploy_macos.sh](/sources/deploy_macos.sh)

## 参考资源
在寻找解决方案的过程中，从以下项目和资源中获得了灵感，有的甚至直接提取其源代码加以修改实现，详细列出供大家参考

[node-appdmg](https://github.com/LinusU/node-appdmg)<br/>
[oubiwann's appify.sh](https://gist.github.com/oubiwann/453744744da1141ccc542ff75b47e0cf)<br/>
[inkscape packaging: lib_.sh](https://gitlab.com/inkscape/inkscape/-/blob/master/packaging/macos/bash_d/lib_.sh)<br/>
[gtk-mac-bundler gtk3-launcher.sh](https://gitlab.gnome.org/GNOME/gtk-mac-bundler/-/blob/master/examples/gtk3-launcher.sh)
