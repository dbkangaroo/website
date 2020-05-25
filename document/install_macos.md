---
title: Install on MacOS
lang: en-US
---

## Notice(Need your help)
DBKangaroo is not ready on MacOS, because libgda 5.2.9 providers(MySQL / PostgreSQL / JDBC) are still missing, and crashed while exeuting the SQL, even internal provider: sqlite, they are all verified.

libgda need our help to improve quality, pls pay more attentions on it, [libgda website](https://gitlab.gnome.org/GNOME/libgda)

## Download Kangaroo

Download the latest version of Kangaroo from [Download](../download).

## Install Kangaroo
There are two ways to install Kangaroo on your system, the first way is DMG image, the second way is install manually.

### Installer
1. Download the DMG image form website;
2. Open the DMG image in Finder, drag the kangaroo's icon to Application's icon to finish installation.
<Badge text="warning" type="warning"/>the dependency libraries not include now, you shoud install third-party libraries manually.

## Manual (install via brew)
``` bash
brew install gtksourceview4 adwaita-icon-theme
brew install libgee libsoup json-glib libgda
brew install libxml libssh2 openssl
# brew install libgda-mysql libgda-postgtes libgda-jdbc
brew install mysql-connector-c mariadb-connector-c libpq
```
<Vssue :issue-id="6" :title="$title" />
