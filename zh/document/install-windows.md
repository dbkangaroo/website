---
title: Windows 平台安装
lang: zh-CN
---

## 通过官网下载安装
::: tip
推荐安装方式，支持 Windows 7 / Windows 10 以上版本(x64)
:::

### 从官网下载软件包
点击链接下载最新版的袋鼠数据库工具 [下载](../download)

### 安装袋鼠数据库工具
Windows 版提供了两种安装方式：安装程序 和 手工安装，您可以根据您的需要选择安装。

#### 安装程序安装
1. 双击安装程序启动安装，根据安装指导完成安装即可，使用默认设置安装方式即可；
3. 检查开始菜单中是否存在袋鼠数据库工具图标

如果您想要 袋鼠 更具便携性，例如想要安装和运行在 USB 设备上，您需要在安装程序里勾选安装组件 **Profile in app directory** ，如下图所示：
![Make Kangaroo portable](../images/installer-windows-portable.png)


#### 压缩包手工安装
1. 创建存放袋鼠数据库工具的最终安装目录, 例如: C:\Program Files\Kangaroo\
2. 解压袋鼠数据库工具便携式压缩包到该目录中 (7-Zip 7z.exe)
3. 右键拖动 袋鼠数据库工具 执行文件到桌面创建快捷键 (bin\kangaroo.exe).
4. 双击快捷键启动工具

## 通过 WinGet 软件仓库安装
::: warning
这个方法只支持 Windows 10 以上版本
:::
下载并安装 WinGet, 然后执行命令完成安装
```cmd
winget install Taozuhong.Kangaroo
```

## 通过微软公司软件市场安装
::: warning
这个方法只支持 Windows 10 以上版本
:::
暂未开放支持，请耐心等候

<Vssue :issue-id="4" :title="$title" />
