---
title: Install on MacOS
lang: en-US
---

## Notice(Need your help)
DBKangaroo is not ready on MacOS, because libgda 5.2.9 providers(MySQL / PostgreSQL / JDBC) are still missing, and crashed while exeuting the SQL, even internal provider: sqlite, they are all verified.

libgda need our help to improve quality, pls pay more attentions on it, [libgda website](https://gitlab.gnome.org/GNOME/libgda)

## Download Kangaroo

Download the latest version of Kangaroo from [Download](../download).


## Install via Brew
``` bash
brew install gtksourceview4 adwaita-icon-theme
brew install libgee libsoup json-glib libgda
brew install libxml libssh2 openssl
# brew install libgda-mysql libgda-postgtes libgda-jdbc
brew install mysql-connector-c mariadb-connector-c libpq
```
<Vssue :issue-id="6" :title="$title" />
