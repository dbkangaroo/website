---
title: Install on Linux
lang: en-US
---

# Install on Linux

## Download Kangaroo
Download the latest version of Kangaroo from [Download](../download).

## Install on Ubuntu
the follow install script assumption tha GLib / GTK4 / GDK-Pixbuf have installed by default.
```bash
sudo apt install libadwaita-1-0 libgtksourceview-5-0 libpeas-1.0-0 
sudo apt install libxml2 libgee-0.8 libsoup-3.0 libjson-glib-1.0 libssh2-1 openssl 
sudo apt install libuchardet libarchive13 libqrencode4
sudo apt install sqlite3 mysql-client mariadb-client libpq5
sudo apt install unixodbc libsqliteodbc odbc-mariadb odbc-postgresql
```


## Install on Fedora
the follow install script assumption that GLib / GTK4 / GDK-Pixbuf have installed by default.
```bash
sudo dnf install libadwaita gtksourceview5 libpeas
sudo dnf install libgee json-glib libsoup3 libxml2 libssh2 openssl
sudo dnf install libuchardet libarchive qrencode-libs
sudo dnf install sqlite mysql mariadb postgresql
sudo dnf install unixODBC sqliteodbc mysql-connector-odbc mariadb-connector-odbc postgresql-odbc
```

## Install on RHEL/CentOS
the follow install script assumption that GLib / GTK4 / GDK-Pixbuf have installed by default.
```bash
sudo yum install gtksourceview5 libadwaita libpeas
sudo yum install libxml2 libgee json-glib libsoup libssh2 openssl
sudo yum install libuchardet libarchive qrencode-libs
sudo yum install sqlite mysql mariadb postgresql
sudo yum install unixODBC sqliteodbc mysql-connector-odbc mariadb-connector-odbc postgresql-odbc
```

## Install on ArchLinux
There are two ways to install Kangaroo on your system, the first way is installer, the second way is install manually.

### Installer
1. Download the installer form website;
2. Execute command to install it: `pacman -U <package>`

### Manaual
the follow install script assumption that GLib / GTK4 / GDK-Pixbuf have installed by default.
```bash
sudo pacman -Syu
sudo pacman -S gtksourceview5 libadwaita libpeas 
sudo pacman -S libxml2 libgee json-glib libsoup3 libssh2 openssl
sudo pacman -S libuchardet libarchive qrencode
sudo pacman -S sqlite mysql-clients mariadb-clients postgresql-libs
sudo pacman -S unixodbc sqliteodbc myodbc mariadb-connector-odbc psqlodbc
```
ODBC extra drivers：`msodbcsql oracle-instantclient-odbc`


<Vssue :issue-id="5" :title="$title" />
