---
title: Kangaroo GTK4 upgrade report (Phase 1)
lang: en-US
sidebarDepth: 2
copyright:
  minLength: 32
---

# Kangaroo GTK4 upgrade report (Phase 1)
Kangaroo app(based on GTK3) has passed the compilation with GTK4 framework and its dependency libraries this week(10/29/2021), it cost me six weeks and met many troubles, so make a GTK4 upgrade report for sharing.

## Project information
__Project summary__
- Developers: 1
- Machine: ThinkPad T450 + Windows 10
- Vala source files: 364
- GtkBuild UI files: 23
- Action SVG files: 58
- Action built-in: 280
- Support platforms: Windows, macOS, Linux

## Development environment
Kangaroo's development environment is based on MSYS2 tool suite, the detail are as follow:<br/>
| Feature      | Tool             | Version      |
|--------------|------------------|--------------|
| Package manager | pacman  | 6.0.1 |
| Terminal     | mintty | 3.5.1 |
| IDE(Editor)  | Visual Studio Code + Vala | 1.60 |
| Build        | meson + ninja | 0.58 |
| Installer    | NSIS | 3.0.6 |
| Virtual VM   | VirtualBox | 6.1 |

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

Kangaroo app integrates with many third-party libraries, the third-party libraries detail as follow:
| Feature      | Third-party library   | Version      |
|--------------|-----------------------|--------------|
| Compiler     | [Vala](https://gitlab.gnome.org/GNOME/vala) | 0.54.2 |
| Platform     | [GLib2](https://gitlab.gnome.org/GNOME/glib) | 2.68.1 |
| GUI Toolkit  | [GTK3 --> GTK4](https://gitlab.gnome.org/GNOME/gtk) | 3.24.30 --> 4.4.0 |
| GUI adaptive | [libhandy](https://gitlab.gnome.org/GNOME/libhandy) --> [libadwaita](https://gitlab.gnome.org/GNOME/libhandy) | 1.4.0  --> 1.0.0 alpha2|
| Code editor  | [GtkSourceView4 --> GtkSourceView5](https://gitlab.gnome.org/GNOME/gtksourceview) | 4.8.2 --> 5.2.0 |
| Map          | [libshumate](https://gitlab.gnome.org/GNOME/libshumate) | unknown | 
| JSON         | [json-glib](https://gitlab.gnome.org/GNOME/json-glib) | 1.6.6 | 
| Data access  | [libgda](https://gitlab.gnome.org/GNOME/libgda) | 6.0.0 |
| Container    | [libgee](https://gitlab.gnome.org/GNOME/libgee) | 0.20.3 | 
| SSH          | [libssh2](https://github.com/libssh2/libssh2) | 1.9.0 |
| XML          | [libxml2](https://gitlab.gnome.org/GNOME/libxml2) | 2.9.12 |
| cryptography | [OpenSSL](https://www.openssl.org/) | 1.1.1.k |
| Encoding     | [uchardet](https://gitlab.freedesktop.org/uchardet/uchardet) | 0.0.7 |
| Plugin       | [libpeas](https://gitlab.gnome.org/GNOME/libpeas) | 1.30.0 |
| File format  | [libarchive](https://github.com/libarchive/libarchive) | 3.5.1 |
| HTTP         | [libsoup](https://gitlab.gnome.org/GNOME/libsoup) | 2.72.0 | 
| Template     | [template-glib](https://gitlab.gnome.org/GNOME/template-glib) | 3.34.0 |



## GTK4 upgrade summary
To pass the compilation, Kangaroo source code had been refactored five rounds, every round found many compile issues

| Round   | Action                       | Issues       |
|---------|------------------------------|--------------|
| round 1 | 1. Fixed namespace issues<br/>2. fixed missed API issues | 400+ |
| Round 2 | 1. Fixed GtkContainer API issues<br/>2. Fixed GtkBin widget issues | 1720+ |
| Round 3 | 1. Fixed clipboard API issues<br/>2. Fixed mouse and keyboard signal issues  | 1454 |
| Round 4 | 1. Fixed GtkBuilder issues<br/>2. Fixed UI module issues | 800+ |
| Round 5 | Fixed the final flag issues:<br/>GtkPaned<br/>GtkScrolledWindow<br/>GtkStack<br/>GtkOverlay<br/>GtkNotebook<br/>GtkTreeViewColumn<br/>Gtk.ComboBoxText<br/>Gtk.Assistant | 8 widget class issues<br/>about 1430+ issues |

Finally, the Kangaroo app GTK4 version had been compiled on 10/29/2021, then executed ASAP, a wired UI with many missed features shown on my face, Now, I know it's a big step to upgrade to the GTK4 version, and much more effort need to spend on it.

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

## Technical analysis and solution
Now we will share some important trouble and its solution, help newbies fix them quickly.

### 1. Container API
In the GTK4, GtkContainer class has been removed, all widgets can hold child widgets, its API replaced with a common APIs: prepend/append/insert/remove:
| GTK3 API         | GTK4 API        | Recommend for upgrade |
|------------------|-----------------|-----------------------|
| add<br/>pack_start | prepend<br/> append | append    |
| pack_end         | insert_child_after | append |
| reorder_child    | reorder_child_after | reorder_child_after |
| foreach/get_children | get_first_child<br/>get_next_sibling<br/>get_prev_sibling<br/>get_last_child

### 2. Bin widget API
In the GTK4, GtkBin class has been removed, all widgets can hold child widgets, if the widget hold one child, so it has a child property to reference that child widget.

### 3. Clipboard API
In the GTK3, we could use the follow code to get the image from clipboard:
```vala
Gtk.Clipboard clipboard = Gtk.Clipboard.get(Gdk.SELECTION_CLIPBOARD);
Pixbuf? pixbuf = clipboard.wait_for_image();
```

GTK4's equivalent code as follow:
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

### 4. User inputs(mouse and key)
Some useful Vala code snippets for upgrading mouse and key input signals in GTK3:
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

### 5. GtkBuilder UI files
the follow command could help you upgrade you UI file in-place:
```bash
gtk-builder-tool simplify --3to4 --replace <filename.ui>
```

you could try the following command if you want to just preview the content of the upgraded UI file, then the command will show content on screen:
```bash
gtk-builder-tool simplify --3to4 <filename.ui>
```