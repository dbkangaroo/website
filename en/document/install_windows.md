---
title: Install on Windows
lang: en-US
---

## Install Kangaroo via Official website
::: tip
Recommended installation method, support windows 7 and all above version(64 bit)
:::

### Download Kangaroo
Download the latest version of Kangaroo from [Download](../download), recommend **installer** for normal users.

### Install Kangaroo
#### Windows Installer
Double click the installer and follow the guide to install Kangaroo on your windows directly.

If you want to make Kangaroo portable, like install and run it on USB device, then you should check the component **Profile in app directory** on windows installer.
![Make Kangaroo portable](../images/installer-windows-portable.png)

#### Windows Portable
1. Create folder to put the Kangaroo app, ex: D:\Program Files\Kangaroo\
2. Uncompress Kangaroo package to target folder with 7-Zip (7z.exe)
3. Create shortcut on desktop for Kangaroo app(bin\kangaroo.exe).
4. Double click the shortcut to run Kangaroo

## Install Kangaroo via WinGet
::: warning
This method support windows 10 and above versions only
:::
Download and install WinGet tool, then execute the command to install Kangaroo
```cmd
winget install Taozuhong.Kangaroo
```

## Install Kangaroo via Microsoft Store
::: warning
This method support windows 10 and above versions only
:::
Not yet support

<Vssue :issue-id="4" :title="$title" />
