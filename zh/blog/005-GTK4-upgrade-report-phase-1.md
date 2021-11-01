---
title: 袋鼠 GTK4 版升级报告（第一阶段）
lang: zh-CN
sidebarDepth: 2
copyright:
  minLength: 32
---

# 袋鼠 GTK4 版升级报告（第一阶段）
袋鼠数据库工具(基于 GTK3 开发) 已于 2021-10-29 日通过了基于 GTK4 框架及其依赖库的编译，整个升级过程耗时约6个星期，遇到了许多典型性的问题，觉得有分享价值，就总结提炼出来形成这个报告。

## 项目信息
我们先对项目做一个大概的预览，了解一下项目的基本情况，有助于加深对后面的内容的理解：
- 开发者: 1 人
- 开发机器: ThinkPad T450 + Windows 10
- 源码文件: 364（个）
- 界面定义文件: 23（个）
- 图标文件(SVG): 58（个）
- 操作熟练: 280（个）
- 支持平台: Windows, macOS, Linux

## 开发环境
袋鼠数据库工具的开发环境是基于 MSYS2 工具套件搭建的，IDE使用 VSCode，详细情况如下:<br/>
| 功能特性      | 工具名称             | 采用版本      |
|--------------|------------------|--------------|
| 包管理器      | pacman  | 6.0.1 |
| 编译器        | GCC + Vala | 10.3 / 0.54.2 |
| 终端          | mintty | 3.5.1 |
| 集成开发环境   | Visual Studio Code + Vala | 1.60 |
| 构建器        | meson + ninja | 0.58 |
| 安装包工具    | NSIS | 3.0.6 |
| 虚拟机       | VirtualBox | 6.1 |

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

袋鼠数据库工具 集成了很多第三方库，第三方库及其官网、版本明细如下：
| 功能特性      | 第三方库   | 采用版本      |
|--------------|-----------------------|--------------|
| 编译器     | [Vala](https://gitlab.gnome.org/GNOME/vala) | 0.54.2 |
| 基础库     | [GLib2](https://gitlab.gnome.org/GNOME/glib) | 2.68.1 |
| 界面框架   | [GTK3 --> GTK4](https://gitlab.gnome.org/GNOME/gtk) | 3.24.30 --> 4.4.0 |
| 界面适配库 | [libhandy](https://gitlab.gnome.org/GNOME/libhandy) --> [libadwaita](https://gitlab.gnome.org/GNOME/libhandy) | 1.4.0  --> 1.0.0 alpha2|
| 编辑器  | [GtkSourceView4 --> GtkSourceView5](https://gitlab.gnome.org/GNOME/gtksourceview) | 4.8.2 --> 5.2.0 |
| 地图          | [libshumate](https://gitlab.gnome.org/GNOME/libshumate) | unknown | 
| JSON         | [json-glib](https://gitlab.gnome.org/GNOME/json-glib) | 1.6.6 | 
| 数据库访问  | [libgda](https://gitlab.gnome.org/GNOME/libgda) | 6.0.0 |
| 容器    | [libgee](https://gitlab.gnome.org/GNOME/libgee) | 0.20.3 | 
| SSH          | [libssh2](https://github.com/libssh2/libssh2) | 1.9.0 |
| XML          | [libxml2](https://gitlab.gnome.org/GNOME/libxml2) | 2.9.12 |
| 加解密 | [OpenSSL](https://www.openssl.org/) | 1.1.1.k |
| 编码     | [uchardet](https://gitlab.freedesktop.org/uchardet/uchardet) | 0.0.7 |
| 插件支持       | [libpeas](https://gitlab.gnome.org/GNOME/libpeas) | 1.30.0 |
| 文件格式  | [libarchive](https://github.com/libarchive/libarchive) | 3.5.1 |
| HTTP         | [libsoup](https://gitlab.gnome.org/GNOME/libsoup) | 2.72.0 | 
| 模板     | [template-glib](https://gitlab.gnome.org/GNOME/template-glib) | 3.34.0 |



## GTK4 升级过程摘要
为实现GTK4版编译通过，先后对代码进行了5轮重构和问题修复，每一轮都产生并修复了大量问题，面对兼容性产生的巨大的工作量，一度想放弃升级到GTK4版，短暂停留后继续攻坚，终于通过了编译：
| 轮次   | 重构与修复重点                       | 问题数       |
|---------|------------------------------|--------------|
| 第一轮 | 1. 修复名字空间方面的问题<br/>2. 修复移除的API问题 | 400+ |
| 第二轮 | 1. 修复容器控件GtkContainer相关问题<br/>2. 修复唯一控件GtkBin相关问题 | 1720+ |
| 第三轮 | 1. 修复剪贴板相关问题<br/>2. 修复鼠标、键盘等输入事件问题  | 1454 |
| 第四轮 | 1. 修复GtkBuilder相关问题<br/>2. 修复界面定义相关问题 | 800+ |
| 第五轮 | 修复新增的 final 标记相关问题:<br/>GtkPaned<br/>GtkScrolledWindow<br/>GtkStack<br/>GtkOverlay<br/>GtkNotebook<br/>GtkTreeViewColumn<br/>Gtk.ComboBoxText<br/>Gtk.Assistant | 8 个控件类问题<br/>共 1430+ 个 |

通过持续6周的努力，最终迎来了袋鼠GTK4版编译通过（10/29/2021）, 欣喜若狂，立即执行编译通过的程序，有点丑有点不正常，很多功能无法正常使用，它宣示GTK4编译通过只是整个升级工作的万里长征第一步，还需许多的工作需要做。

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

## 关键问题分析和解决方案
现在我将把升级过程中的一些关键的、典型问题做一些列举分析并提供解决方案，或许对读者有一些帮助。

### 1. 容器控件 API
在 GTK4 中, 容器类 GtkContainer 已经被移除，新的控件体系允许每一个控件都能添加子控件，相应的API也有变化，一致性在减弱，未来也许会重新规范为一个接口类并集成到每一个控件中；GTK4版提供的容器 API 主要有: prepend/append/insert/remove:
| GTK3 API         | GTK4 API        | 升级推荐 |
|------------------|-----------------|-----------------------|
| add<br/>pack_start | prepend<br/> append | append    |
| pack_end         | insert_child_after | append |
| reorder_child    | reorder_child_after | reorder_child_after |
| foreach/get_children | get_first_child<br/>get_next_sibling<br/>get_prev_sibling<br/>get_last_child

### 2. 唯一子控件 API
在 GTK4 中, , 唯一子控件类GtkBin 已经被移除, 新的控件体系允许每一个控件都能添加子控件, 部分控件类提供了 child 属性来直接引用或设置它的唯一子控件，或者是第一个子控件；

### 3. 剪贴板 API
在 GTK3 中, 我们可以使用下面的代码获取或者检测剪贴板中的图片:
```vala
Gtk.Clipboard clipboard = Gtk.Clipboard.get(Gdk.SELECTION_CLIPBOARD);
Pixbuf? pixbuf = clipboard.wait_for_image();
```

GTK4 中的完成同样功能的代码是这样子的:
```vala
Pixbuf? pixbuf = null;
Value value = GLib.Value(typeof(Pixbuf));
Gdk.Clipboard clipboard = this.get_clipboard();
if (clipboard.content.get_value(ref value)) {
    pixbuf = (Pixbuf)value.get_boxed();
}
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

### 4. 用户输入（鼠标点击和键盘输入)
简单粗暴的直接分享一些关于用户输入的参考代码，用于快速更新 GTK3 中的用户输入事件代码：
```vala
treeview.key_press_event.connect(key_press_handler);
treeview.key_release_event.connect(key_release_handler);

treeview.button_press_event.connect(button_press_handler);
treeview.button_release_event.connect(button_release_handler);

treeview.motion_notify_event.connect(mouse_move_handler);
treeview.enter_notify_event.connect(mouse_enter_handler);
treeview.leave_notify_event.connect(mouse_leave_handler);

treeview.scroll_event.connect(scroll_event_handler);

treeview.focus_in_event.connect(focus_enter_event_handler);
treeview.focus_out_event.connect(focus_leave_event_handler);
```

```vala
var key_input_event = new Gtk.EventControllerKey();
key_input_event.key_pressed.connect(key_press_handler);
key_input_event.key_released.connect(key_release_handler);
treeview.add_controller(key_input_event);

var mouse_button_event = new Gtk.GestureClick();
mouse_button_event.pressed.connect(button_press_handler);
mouse_button_event.released.connect(button_release_handler);
treeview.add_controller(mouse_button_event);

var mouse_motion_event = new Gtk.EventControllerMotion();
mouse_motion_event.motion.connect(mouse_move_handler);
mouse_motion_event.enter.connect(mouse_enter_handler);
mouse_motion_event.leave.connect(mouse_leave_handler);
treeview.add_controller(mouse_motion_event);

var view_scroll_event = new Gtk.EventControllerScroll();
view_scroll_event.scroll.connect(scroll_event_handler);
treeview.add_controller(view_scroll_event);

var view_focus_event = new Gtk.EventControllerFocus();
view_focus_event.enter.connect(focus_enter_event_handler);
view_focus_event.leave.connect(focus_leave_event_handler);
treeview.add_controller(view_focus_event);
```

### 5. GtkBuilder 和 界面定义文件
下面的命令行可以直接升级更新GTK3定义的界面定义文件（*.ui):
```bash
gtk-builder-tool simplify --3to4 --replace <filename.ui>
```

如果只想查看升级更新后的界面定义文件内容而不更新文件，可以去掉参数 `--replace`，如下所示：
```bash
gtk-builder-tool simplify --3to4 <filename.ui>
```