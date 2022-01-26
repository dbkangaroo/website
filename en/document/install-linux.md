---
title: Install on Linux
lang: en-US
---

# Install on Linux

## Download Kangaroo
Download the latest version of Kangaroo from [Download](../download).

::: danger Critical tips for 1.9.1 and above with libgda 6.X
Due to libgda 6.X not yet release the stable version, so we must compile and install it manually:
```bash
git clone https://gitlab.gnome.org/GNOME/libgda.git
meson --buildtype=release build
meson compile -C build
sudo meson install -C build
```
:::

::: danger Critical tips for 1.91.1 with GtkSourceView 5.4
Due to GtkSoureView 5.4 not yet be released, so we must compile and install it manually:
```bash
git clone https://gitlab.gnome.org/GNOME/gtksourceview.git
meson --buildtype=release build
meson compile -C build
sudo meson install -C build
```
:::

## Install on Ubuntu
the follow install script assumption tha glibc / gtk-4.0 / gdk-pixbuf-2.0 have installed by default.
```bash
sudo apt install libgtk-4-0 libgee-0.8 libsoup2.4 libjson-glib-1.0
sudo apt install libsqlite3-0 mysql-client mariadb-client libpq5
# sudo apt install libgda-5.0-4 libgda-5.0-mysql libgda-5.0-postgtes
sudo apt install libgtksourceview-5-0 libwebkit2gtk-4.0 libssh2-1 openssl 
sudo apt install libadwaita-1-0 libuchardet libarchive13 libpeas-1.0-0
```


## Install on Fedora
the follow install script assumption that glibc / gtk-4.0 / gdk-pixbuf-2.0 have installed by default.
```bash
sudo dnf install gtk4 libgee json-glib libsoup
sudo dnf install sqlite mysql mariadb postgresql
# sudo dnf install libgda libgda-mysql libgda-postgres
sudo dnf install gtksourceview5 webkit2gtk3 libssh2 openssl
sudo dnf install libadwaita libuchardet libarchive libpeas
```


## Install on RHEL/CentOS
the follow install script assumption that glibc / gtk-4.0 / gdk-pixbuf-2.0 have installed by default.
```bash
sudo yum install libgee json-glib libsoup
sudo yum install sqlite mysql mariadb postgresql
# sudo yum install libgda libgda-mysql libgda-postgres
sudo yum install gtksourceview5 webkit2gtk3 libssh2 openssl
sudo yum install libadwaita libuchardet libarchive libpeas
```

## Install on ArchLinux
There are two ways to install Kangaroo on your system, the first way is installer, the second way is install manually.

### Installer
1. Download the installer form website;
2. Execute command to install it: `pacman -U <package>`

### Manaual
the follow install script assumption that glibc / gtk+-3.0 / gdk-pixbuf-2.0 have installed by default.
```bash
sudo pacman -Syu
sudo pacman -S libgee json-glib libsoup
sudo pacman -S sqlite mysql++ mariadb-libs postgresql-libs
# sudo pacman -S libgda libgda-mysql libgda-postgres
sudo pacman -S gtksourceview5 webkit2gtk3 libssh2 openssl
sudo pacman -S libadwaita libuchardet libarchive libpeas
```

<Vssue :issue-id="5" :title="$title" />
