---
title: How to deploy GTK based app on Mac OS X?
lang: en-US
sidebarDepth: 2
---

# How to deploy GTK based app on Mac OS X?

## Background
Many friends ask me to provide the official installer package(.dmg) for Mac OS X, I do want to implement it. But there is a big stone on the way, because I don't have physical machine and landed OS X just a short time, have many dark hole on it.

Face it, solve it, things will be done, I think.

Tried again and again, 8 days later, found the right way finally.

## Precondition and environment
Using the package manager tool[Homebrew](https://brew.sh/) to install all app dependency libraries.

You need to install GTK、libgda、GtkSourceView4、Vala、GCC toolchain / etc.


## Solution
### Prepare app directory structure
To deploy GTK based app, the app must follow the structure of OS X bundle structure and Linux platform structure, and the final structure as follow:
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


### Key components of app bundler
There are some core components in the GTK app as follow:
| Key components | Comment        |
|:--------------:|----------------|
| GTK | GTK libraries like GTK / GDK / Pango / ... |
| launcher.sh | app start point script, set environments for app like gdk-pixbuf plugins / GTK input modules and print backends / libgda's providers / ... |
| Real app | your real app  |
| Info.plist | bundler package info list file, contain app entry point information, like GtkOSXLaunchScriptFile / CFBundleExecutable / CFBundleIconFiles |
| app.icns | app's icons |


### prepare app resource
Your should make app resources before start compiling and packing your app:
1. App script: launcher.sh
2. App icon(image or .icns)
3. Info.plist


### deploy your app as linux app
First, compile and install app to the target dir:
```bash
meson --prefix=$TARGETDIR --buildtype=release build
ninja -C "${PROJECTDIR}/build" install
```

Then copy all dependency libraries and resources to the target dir, make a full and standalone linux app.
```bash
function lib_dependency_copy
{
  # This function use otool to analyze library dependency.
  # then copy the dependency libraries to destination path

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
  # This function use otool to analyze library directory.
  # then copy the dependency libraries to destination path

  local library_dir=$1
  local targets_dir=$2

  libraries="$(find $library_dir -name \*.dylib -o -name \*.so -type f)"
  for lib in $libraries; do
      lib_dependency_copy $lib $targets_dir
  done
}

# copy app dependency library to target dir
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


### Bundle your app as OS X app
Convert the full linux app to Mac OS X .app structure, just make the structure folder and copy files.

**How to verify the app and dependency libraries are self-dependency?**<br/>
Can't verify so far, We must entry next step to solve the library locating problem.

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

### Update app and library link path
On the Mac OS X platform, the most important problem is the app how to find the library while running, We can solve this problem by two ways:
1. Using lib tool(otool and install_name_tool) to add or replace link path
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

2. Using environments to tell app or library to find its dependency libraries.
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

### Verify your app(.app)
There are two ways to verify the app:<br/>
1. Start and debug your app<br/>
`GTK_DEBUG_LAUNCHER=yes MyApp.app/Contents/MacOS/MyApp`<br/>
This will print out the steps performed by the launcher script before the application executable is started.<br/><br/>
To run the application under gdb:<br/>
`GTK_DEBUG_GDB=yes MyApp.app/Contents/MacOS/MyApp`

2. Using lib tool to list its dependency libraries<br/>
`otool -L MyApp.app/Contents/MacOS/MyApp`<br/>
this command will list all dependency libraries with full link path


### Create app package(.dmg)
There are many tool support make dmg package, I choose [node-appdmg](https://github.com/LinusU/node-appdmg) to create app package, because it using JSON configuration file and output step detail into console.
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

## Script source files
You can download the complete packaging tool script source files from here, welcome to use and share with your friends.

[Info.plist](/sources/Info.plist)<br/>
[mac_launcher.sh](/sources/mac_launcher.sh)<br/>
[mac_app_path.sh](/sources/mac_app_path.sh)<br/>
[mac_app_pack.sh](/sources/mac_app_pack.sh)<br/>
[deploy_macos.sh](/sources/deploy_macos.sh)

## Reference
There are many resources helped me to find the final solution, thank for you all, the major resources are:

[node-appdmg](https://github.com/LinusU/node-appdmg)<br/>
[oubiwann's appify.sh](https://gist.github.com/oubiwann/453744744da1141ccc542ff75b47e0cf)<br/>
[inkscape packaging: lib_.sh](https://gitlab.com/inkscape/inkscape/-/blob/master/packaging/macos/bash_d/lib_.sh)<br/>
[gtk-mac-bundler gtk3-launcher.sh](https://gitlab.gnome.org/GNOME/gtk-mac-bundler/-/blob/master/examples/gtk3-launcher.sh)
