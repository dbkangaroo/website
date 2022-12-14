---
title: 常用问题列表
lang: zh-CN
---

# 常用问题列表

## 关于许可证
### 袋鼠数据库工具是否免费?
2022年2月1日，袋鼠基于可持续发展的考虑，上线了新版用户许可协议，基于该协议，标记为<Badge text="Dev" /> <Badge text="Beta"/>的版本个人和组织可以免费使用，其它版本需要付费使用，详情请阅读[产品许可证](../license/service-agreement.md) 获得更多明细.

### 袋鼠数据库工具是否开放源码?
如果开源能获得足够的赞助和支持，可支持项目可持续发展，开放源码将会是工具发展过程中的一个优先候选项。

## 关于版本
### 如何获得工具的当前版本？
您可以从工具的关于对话框窗口中获取版本信息：
第一步： 从__主菜单__进入__帮助__子菜单，然后点击__关于__菜单项，打开关于对话框
第二步：关于对话框文本的第二行即为当前版本，版本格式为：主版本.次版本.发布版本.构建日期，例如：'0.8.5.191108'

## 什么时候推出稳定版本？
袋鼠持续在努力推进稳定版本的输出目标，稳定版本有两个考量点：
1. 袋鼠依赖的库（GLib/GTK4）的成熟度和稳定性，需要选取高度成熟和稳定的依赖版本；
2. 袋鼠自身的功能成熟度和稳定性最关键，开发组在持续评估这方面的情况；
综合各方面的信息，乐观预计在袋鼠四周年的时候（2023.4.1）推出稳定版本。

## 关于多语言
### 袋鼠数据库工具支持哪些语言？
袋鼠数据库工具官方支持英语和中文，其它语言得依靠社区支持；

## 安装包校验
### 如何校验下载的安装包是否完整？
您可以按如下步骤对安装包进行校验：
1. 下载 SHA256 哈希值文件和签名文件(SHA256SUM and SHA256SUM.asc)
2. 获取签名用的公匙<br/>
    __1.6.1 及更新版本适用__<br/>
    签名用公匙ID: 8C0C55F7DEC8FC52 (当前有效, 生成于 2021)<br/>
    签名用公匙: E4F02524471B195CCEFBD7158C0C55F7DEC8FC52 <br/>

    __1.6.1 以前的版本适用__<br/>
    签名用公匙ID: 702F717E0A17659D (已归档, 生成于 2020)<br/>
    签名用公匙: 33E5119C5781C1B37E56E580702F717E0A17659D <br/>

    `gpg --keyserver hkp://hkps.pool.sks-keyservers.net --receive-keys 8C0C55F7DEC8FC52`

3. 校验哈希值文件签名<br/>
`gpg --verify kangaroo-1.6.1.210131.sha256sum.asc`

4. 校验安装包文件哈希值<br/>
在安装包下载目录内执行命令行获得安装包文件哈希：<br/>
`sha256sum kangaroo-1.6.1.<else>` <br/>
然后在 SHA256SUM 文件内搜索是否存在相同的哈希：<br/>
`grep <sha256sum output> kangaroo-1.6.1.sha256sum`


## 技术支持
### 如何获得袋鼠数据库工具的最新进展？
您可以从以下渠道获得袋鼠数据库工具的最新信息:
[Twitter](https://twitter.com/Kangaroo)
[Github](https://github.com/dbkangaroo/kangaroo)
[Gitee(码云)](https://gitee.com/dbkangaroo/kangaroo)
[官方网站](https://www.datatable.online/zh/)

### 如何获得技术支持？
您可以在项目仓库 [Github](https://github.com/dbkangaroo/kangaroo) / 
[Gitee(码云)](https://gitee.com/dbkangaroo/kangaroo) 提交缺陷和需求来获得官方支持，也可以分享您的解决方案；


### 微信公众号
为即时推送关于袋鼠的大篇幅文章和视频，故开通了微信公众号： 袋鼠数据库工具 (DataTableOnline)，有兴趣的同学可关注。 <br/>
![袋鼠微信公众号](../images/kangaroo_mp.png)

<Vssue :issue-id="3" :title="$title" />
