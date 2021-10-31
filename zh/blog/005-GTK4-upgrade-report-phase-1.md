---
title: 袋鼠 GTK4 版升级报告（第一阶段）
lang: zh-CN
sidebarDepth: 2
copyright:
  minLength: 32
---

# GTK4 upgrade report (Phase 1)
Kangaroo app(based on GTK3) have passed the compilation with GTK4 framework and it's dependency libraries at this week(10/31/2021), it cost me six weeks, and met much troubles, so make a GTK4 upgrade report for shareing.

## Project information
__Project summary__
- Developers: 1
- Machine: ThinkPad T450 + Windows 10
- Time cost: 4/1/2019-10/31/2021
- Vala source files: 364
- GtkBuild UI files: 23
- Action SVG files: 58
- Action built-in: 280
- Support platforms: Windows, macOS, Linux

## Development environment
Kangaroo's development environment is based on MSYS2 tool suite, the detail as follow:<br/>
| Feature      | Tool             | Version      |
|--------------|------------------|--------------|
| Package manager | pacman  | 6.0.1 |
| Terminal     | mintty | 3.5.1 |
| IDE | Visual Studio Code | 1.60 |
| Build | meson + ninja | 0.58 |
| Packing | NSIS | 3.0.6 |

Kangaroo app integrate with many third-party libraries, the third-party libraries detail as follow:
| Feature      | Third-party library   | Version      |
|--------------|-----------------------|--------------|
| Compiler     | [Vala](https://gitlab.gnome.org/GNOME/vala) | 0.54.2 |
| Platform     | [GLib2](https://gitlab.gnome.org/GNOME/glib) | 2.68.1 |
| GUI Toolkit  | [GTK3](https://gitlab.gnome.org/GNOME/gtk) | 3.24.30 |
| GUI Toolkit  | [GTK4](https://gitlab.gnome.org/GNOME/gtk) | 4.4.0 |
| GUI adaptive | [libhandy](https://gitlab.gnome.org/GNOME/libhandy) | 1.4.0 |
| GUI adaptive | [libadwaita](https://gitlab.gnome.org/GNOME/libhandy) | 1.0.0 alpha2 |
| Code editor  | [GtkSourceView 4](https://gitlab.gnome.org/GNOME/gtksourceview) | 4.8.2 |
| Code editor  | [GtkSourceView 5](https://gitlab.gnome.org/GNOME/gtksourceview) | 5.2.0 |
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
| - | - | - |
| Virtual VM | VirtualBox | 6.1 |



## GTK4 upgrade summary
To pass the compilation, Kangaroo source code had been refactored file rounds, every round found many compile issues

| Round   | Action                       | Issues       |
|---------|------------------------------|--------------|
| round 1 | 1. update libraries and version<br/>2. fixed missed api issues | 400+ |
| Round 2 | 1. Fixed container api issues<br/>2. Fixed parameters issues | 1720+ |
| Round 3 | 1. Fixed clipboard api issues<br/>2. Fixed mouse and keyboard signal issues  | 1454 |
| Round 4 | 1. Fixed GtkBuilder issues<br/>2. Fixed UI module issues | 6+ |
| Round 5 | Fixed the final flag issues:<br/>GtkPaned<br/>GtkScrolledWindow<br/>GtkStack<br/>GtkOverlay<br/>GtkNotebook<br/>GtkTreeViewColumn<br/>Gtk.ComboBoxText<br/>Gtk.Assistant | 8 widget class issues |

Finally, the Kangaroo app GTK4 version had been compiled at 10/29/2021, then executed it ASAP, a wired UI with many missed features shown on my face.

a big step to GTK4 version.

## Technical analysis and solution