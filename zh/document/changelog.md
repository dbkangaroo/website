---
title: 版本更新记录
lang: zh-CN
---

# 袋鼠数据库工具 版本更新记录
## [袋鼠数据库工具 v3.93.1](/zh/download/v3.93.1.230928)
- 增加主工具栏图标设置
- 增加 SSH 工具下载连接
- 图像视图增加文件拖放支持
- 文本视图增加文件拖放支持
- 重构对象树视图
- 重构 SQL 构建器视图
- 重构模型视图界面，分离属性边栏
- 改进内容视图中构建器列视图
- 改进二进制内容网格显示文本
- 改进树视图显示性能
- 改进导航视图消息文本
- 实现升级支持（curl）
- 实现模型对象粘贴支持
- 更新应用图标
- 更新菜单项 `源头` to `查看源码`
- 更新函数和存储过程上下文菜单文本
- SQLite: 增加其它扩展名支持
- SQLite: 修复架构缺失问题
- SQLite: 修复无法加载数据库的问题
- SQLite: 修复0长度二进制字段值导致的崩溃问题
- MySQL: 修复系统表显示问题
- MariaDB: 修复系统表显示问题
- MariaDB: 修复用户和角色加载问题
- Fixed: 打开数据库时定位到表对象
- Fixed: 内容视图构建器WHERE页崩溃问题
- Fixed: 控制告警消息
- Fixed: 空语句报错问题
- Fixed: timestamp 为零的问题
- Fixed: DateTime 解析 ISO8601 格式失败问题
- Fixed: 模型视图无法响应用户键盘输入问题
- Fixed: 查询日志视图告警消息
- Fixed: 连接无法在多空间同步问题
- Fixed: SQL 文件扩展名问题

## [袋鼠数据库工具 v3.92.1](/zh/download/v3.92.1.230901)
- GTK4 升级为 4.12
- libadwaita 升级为 1.4 beta
- 新增 Redhat 系列系统安装包(rpm)
- 新增用户自定义代码块支持
  - 用户自定义代码块边栏(过滤/拖放支持)
  - 用户自定义代码块编辑对话框
  - 用户自定义代码块智能提示支持
  - 用户自定义代码块保存与配置支持
  - 用户自定义代码块之查询视图弹出菜单
- 查询视图弹出菜单增加执行菜单项
- 重构日志视图
- 重构着色文本视图
- 重构页面工具栏样式
- 重构工具栏配置支持
- 重构导出助理列映射页
- 重构导出助理实体映射页
- 重构导出助理DSV设置页
- 重构模型实体对话框
- 二维码增加袋鼠LOGO
- 更新中文语言支持
- 修复: 通讯连接问题
- 修复: 文档对话框数据显示问题
- 修复: 连接空间状态栏信息丢失问题
- 修复: 数据库连接ID丢失问题

## [袋鼠数据库工具 v3.91.1 (Beta)](/zh/download/v3.91.1.230801)
- 界面适配 libadwaita 1.4
- 重构切换空间属性（GtkSwitch.state to active）
- 增加显示数据库驱动库版本
- 增加中文语言支持(zh_Hans/zh_Hant)
- 改进工作空间状态栏用户体验
- 更新中文语言支持
- MariaDB: 增加表设计器页面
- MariaDB: 修复外键相关问题
- MySQL: 增加类型支持 TIMESTAMP
- PostgreSQL: 修复类型和排序规则问题
- SQLite: 修复模式相关问题
- 数据传输: 初始化默认设置
- 数据传输: 增加日志输出
- 数据传输: 修复目标连接问题

## [袋鼠数据库工具 v3.90.1 (Beta)](/zh/download/v3.90.1.230701)
- 增加数据库传输/结构同步/数据同步界面
- 实现数据库传输业务逻辑
- 实现数据库结构同步业务逻辑
- SQLite: 加密扩展支持(SQLCipher)
- MySQL: 改进 TEXT/BLOB 类型支持
- MariaDB: 改进 TEXT/BLOB 类型支持
- 对话框窗口居中支持
- 增加多语言切换支持
- 优化配置对话框性能
- 更新中文语言支持
- 修复 MySQL/MariaDB 字段标记问题

## [袋鼠数据库工具 v2.99.3 (Beta)](/zh/download/v2.99.3.230602)
- Windows: GTK4 升级为 4.11.2
- MySQL: 修复 TINYTEXT/TEXT/MEDIUMTEXT/LONGTEXT 显示问题
- MariaDB: 修复 TINYTEXT/TEXT/MEDIUMTEXT/LONGTEXT 显示问题

## [袋鼠数据库工具 v1.10.3 (Beta)](/zh/download/v1.10.3.230508)
- Windows: GTK4 升级为 4.11.1
- Fixed: 中文支持问题

## [袋鼠数据库工具 v2.99.2 (Beta)](/zh/download/v2.99.2.230428)
- 添加沙盒运行支持 (仅限 Windows)
- GTK4 升级为 4.10.3
- libadwaita 升级为 1.3.1

## [袋鼠数据库工具 v2.99.1 (Beta)](/zh/download/v2.99.1.230331)
- SQLite: 添加数据库直接访问支持
- MySQL: 添加数据库直接访问支持
- MariaDB: 添加数据库直接访问支持
- PostgreSQL: 添加数据库直接访问支持
- 改善了浮点数显示支持（默认展示5位小数位）
- 改进了连接建立方式（无需选择驱动）
- 更新中文语言支持(zh-CN/zh-TW/zh-SG/zh-HK)


## [袋鼠数据库工具 v2.3.2 (Beta)](/zh/download/v2.3.2.230301)
- MySQL: 增加执行器菜单入口
- MariaDB: 增加执行器菜单入口
- PostgreSQL: 增加执行器菜单入口
- 更新 DataGrid 常规样式背景色
- 更新中文语言支持(zh-CN/zh-TW/zh-SG/zh-HK)
- 修复: 未知字段 SCHEMA_COMMENT （< MariaDB 10.5)
- 修复: 执行器文件对话框问题
- 修复: 智能提示小写输入时无法响应问题
- 修复: 网格相关的崩溃问题

<div>
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

## [袋鼠数据库工具 v2.3.1 (Beta)](/zh/download/v2.3.1.230201)
- 增加用户查询文件面板
- 增加用户模型文件面板
- 更新工具栏样式
- 连接空间支持分割视图 (垂直或水平)
- 连接空间增加 状态栏控件
- 连接空间增加 语言切换 支持
- 连接空间增加 换行符 支持
- 连接空间增加 文件编码 支持
- 连接空间增加 自动换行 支持
- 连接空间增加 缩进设置 支持
- 连接空间增加 位置信息 支持
- 连接空间增加 面板切换 支持
- 连接空间增加 工作页消息 支持
- 更新关于窗口(增加系统信息)
- 更新 RPM 包安装脚本
- 更新中文语言支持(zh-CN/zh-TW/zh-SG/zh-HK)
- 移除主菜单之视图子菜单

## [袋鼠数据库工具 v2.2.1 (Beta)](/zh/download/v2.2.1.230101)
- 增加 SQL 执行对话框
- 增加 导出并转换对话框
- 增加查询耗时显示
- SQLite: 修复索引字段加载问题
- SQLite: 修复备份数据表名字问题
- MariaDB: 修复加载架构对象范围问题
- MySQL: 修复加载架构对象范围问题
- PostgreSQL: 修复 v15 用户属性问题
- 更新智能提示候选项图标
- 更新中文语言支持(zh-CN/zh-TW/zh-SG/zh-HK)
- 更新 Windows 安装程序以默认选择驱动程序
- 更新 GTK 库: v4.9.2 

## [袋鼠数据库工具 v2.1.1 (Beta)](/zh/download/v2.1.1.221201)
- 添加动态生成二维码支持
- 添加 debian 安装包支持
- 实现表设计器 克隆 菜单
- 实现表设计器 复制/粘贴 菜单
- 添加表设计器 剪切 菜单
- 添加 SQL `EXPLAIN` 语句支持(带格式)
- 添加 SQL `ANALYZE` 语句支持
- 重构 SQL 格式化和紧缩化功能
- 改进编辑器 后退重做 功能支持
- 更新 Linux 平台安装包脚本
- 更新中文语言支持(zh-CN/zh-TW/zh-SG/zh-HK)
- 修复: 关闭查询结果页时崩溃问题
- 修复: SSH 提示标签文字

## [袋鼠数据库工具 v2.0.0 (Beta)](/zh/download/v2.0.0.221101)
- 重构导入数据页面(列映射页/数据预览页)
- 重构列选择对话窗口
- 重构 SQLite 索引列窗口
- 重构 PostgreSQL 列编辑窗口
- 重构 MySQL 列编辑窗口
- 重构类型值编辑器窗口(Enum/set)
- 重构文档生成窗口
- 重构数据网格事件和上下文
- 替换系统图标为符号化图标
- 实现表单视图编辑和保存功能
- 实现表格视图编辑和保存功能
- 实现表单视图数据行导航功能
- 实现Binary/BLOB 导入导出和保存功能
- 改进 SQLite 架构支持
- 更新中文语言支持(zh-CN/zh-TW/zh-SG/zh-HK)
- 修复： 数值类型丢失小数位问题
- 修复： 工具图标尺寸设置问题
- 修复： 对象浏览器网格问题
- 修复： 导入数据失败问题
- 修复： 索引加载崩溃问题
- 修复： 对象树节点切换问题
- 修复： SQLite 函数编辑问题
- 修复： 应用控制台告警消息
- 修复： 编译器控制台告警消息
- 修复： 上下文菜单导出操作问题

<div>
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

## [袋鼠数据库工具 v1.99.1 (Dev)](/zh/download/v1.99.1.221001)
- 更新依赖库到新版本
- 规范化数据模型和元模型
- 重构并测试文档对话框
- 重构导出功能页面
- 重构导入功能页面
- 重构连接对话框
- 添加附加数据库对话框
- 添加通用数据库支持
- 添加 ODBC 帮助入口
- 添加对象搜索支持
- 更新 Windows 和 Arch Linux 的打包与安装脚本
- SQLite: 附加和卸载数据库
- SQLite: 加载扩展支持
- 改进新连接创建方式
- 更新中文语言支持(zh-CN/zh-TW/zh-SG/zh-HK)
- 修复：快捷键加载和保存问题

## [袋鼠数据库工具 v1.98.1 (Dev)](/zh/download/v1.98.1.220904)
- 数据网格增加当前单元格样式支持
- SQLite: 重构表设计器
- MySQL: 重构表设计器
- PostgreSQL: 重构表设计器
- 规范化字段的长度/精度/小数位支持
- 更新中文语言支持(zh-CN/zh-TW/zh-SG/zh-HK)
- 修复：ODBC CHAR/WCHAR 类型读取问题
- 修复：连接对话框丢失驱动问题
- 修复：修复起始页拖放建立连接问题
- 修复：MySQL/MariaDB 乱码问题

## [袋鼠数据库工具 v1.97.1 (Dev)](/zh/download/v1.97.1.220731)
- 更新 Windows 打包脚本，修复依赖库缺失问题
- 更新 ArchLinux 打包脚本，修复依赖库缺失问题
- 升级关闭确认对话框
- 重构网格组件（GtkColumnView）
- Windows 安装脚本增加 ODBC 驱动支持
- 改进 Windows 安装包本地化支持
- 改进对象浏览视图的排序支持
- 完善内容视图查询构建器
- 改进 SQL 构建器
- 改进 DBNull 支持
- 更新中文语言支持
- 修复 ODBC 连接相关问题

## [袋鼠数据库工具 v1.10.2 (Beta)](/zh/download/v1.10.2.220701)
1. 删除版本过期时间
2. Windows： 依赖库升级到最新版

## [袋鼠数据库工具 v1.96.1 (Dev)](/zh/download/v1.96.1.220701)
- 用 ODBC 替换 libgda
- 添加了通用数据库支持
- 更新中文语言支持

## [袋鼠数据库工具 v1.95.1 (Dev)](/zh/download/v1.95.1.220601)
- MySQL: 增加角色设计器
- MySQL: 增加架构设计器
- MySQL: 增加数据库设计器
- MariaDB: 增加角色设计器
- MariaDB: 增加架构设计器
- MariaDB: 增加数据库设计器
- PostgreSQL: 增加角色设计器
- PostgreSQL: 增加架构设计器
- PostgreSQL: 增加数据库设计器
- 更新对象浏览视图：支持架构和数据库对象
- 重构对象树上下文菜单
- 动态绑定页签图标和标题为对象浏览器标题和图标
- 更新中文语言支持

<div>
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

## [袋鼠数据库工具 v1.94.1 (Dev)](/zh/download/v1.94.1.220501)
- MySQL: 增加函数设计器
- MySQL: 增加存储过程设计器
- MySQL: 增加用户设计器
- MariaDB: 增加函数设计器
- MariaDB: 增加存储过程设计器
- MariaDB: 增加用户设计器
- PostgreSQL: 增加函数设计器
- PostgreSQL: 增加存储过程设计器
- PostgreSQL: 增加用户设计器
- 对话框增加运行时版本支持
- 更新中文语言支持
- 修复: 工作空间打开问题
- 修复: 自动缓存文件保存问题

## [袋鼠数据库工具 v1.93.1 (Dev)](/zh/download/v1.93.1.220401)
- SQLite: 增加索引设计器支持
- SQLite: 增加触发器设计支持
- SQLite: 重构视图设计器并改进设计支持
- MySQL: 对象浏览视图增加索引对象支持
- MySQL: 对象浏览视图增加触发器对象支持
- MySQL: 增加索引设计器支持
- MySQL: 增加触发器设计支持
- MySQL: 重构视图设计器并改进设计支持
- MariaDB: 对象浏览视图增加索引对象支持
- MariaDB: 对象浏览视图增加触发器对象支持
- MariaDB: 增加索引设计器支持
- MariaDB: 增加触发器设计支持
- MariaDB: 重构视图设计器并改进设计支持
- PostgreSQL: 增加索引设计器支持
- PostgreSQL: 增加触发器设计支持
- PostgreSQL: 重构视图设计器并改进设计支持
- 增加连接详情页
- 更新数据库仓库对象树图标
- 更新中文语言支持
- 重构起始页，增加连接详情页
- 重构数据库仓库视图
- 修复: 视图设计器恢复问题
- 修复: 工作空间工具栏菜单加载问题
- 修复: 下拉列表控件活动id为空时崩溃问题
- 修复: 编辑器有选中文本时输入错误问题
- 修复: 无法加载 MySQL/MariaDB 视图信息
- 修复: PostgreSQL连接的数据库名为空时崩溃 

## [袋鼠数据库工具 v1.92.1 (Dev)](/zh/download/v1.92.1.220228)
1. 增加对象浏览器视图(表格化 + 图表化)
2. 对象浏览器添加搜索和排序支持
3. SQLite: 加载对象数据
4. MariaDB: 加载对象数据
5. MySQL: 加载对象数据
6. PostgreSQL: 加载对象数据
7. 对象浏览器添加对象上下文菜单
8. 实现表和视图的上下文菜单
9. 重构工作空间工具栏
10. 更新数据库对象图标
11. 更新中文语言支持

## [袋鼠数据库工具 v1.91.1 (Dev)](/zh/download/v1.91.1.220128)
1. 重构主界面
2. 重构导入导出界面
3. 重构智能提示
4. 重构工具栏
5. 重构可视化SQL构建器 
6. 重构过期消息通知功能
7. 改进标题栏皮肤支持
8. 改进对话框样式
9. 拆分设置文件为界面配置文件和用户连接配置文件
10. 移动智能提示文件到用户文档目录
11. 更新中文语言翻译(zh-CN/zh-TW/zh-SG/zh-HK)
12. 修复: 无法打开链接
13. 修复: 生成无效插入SQL(user_name -> user__name)
14. 修复: 模型视图点击崩溃
15. 修复: DSV 格式额外列
16. 修复: 可伸缩图片尺寸问题
17. 修复: 修复控制台警告消息

<div>
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

## [袋鼠数据库工具 v1.90.1 (Dev)](/zh/download/v1.90.1.211231)
1. 升级核心界面库为 GTK4 (GTK3 -> GTK4 4.5)
2. 升级组件界面库为 GTK4 (libhandy -> libadwaita 1.0 beta)
3. 升级编辑器组件为 GtkSoureceView5 (4 -> 5)
4. 合并系统配置对话框和快捷键对话框
5. 编辑器视图添加文档概览图边栏
6. 编辑器视图支持选择配色方案
7. 添加开发模式支持
8. MySQL: 增加用户和权限管理支持
9. MariaDB: 增加用户和权限管理支持
10. PostgreSQL: 增加用户和权限管理支持

## [袋鼠数据库工具 v1.10.1 (Beta)](/zh/download/v1.10.1.210731)
1. 新增可视化查询设计器对话框
2. 新增值选择与编辑对话框
3. 数据表格上下文菜单增加图标
4. 增加单元值算法复制功能
5. 增加单元值算法更新功能
6. 改进连接对话框命名与保存机制
7. 改进工具栏按钮布局
8. 改进浮点类型支持
9. 更新中文语言支持
10. 修复: Text 类型无法生成正确的SQL(PostgreSQL)
11. 修复: 设计器勾选框控件无响应
12. 修复: 连接服务器时崩溃(MySQL/PostgreSQL)
13. 修复: 无法拉取视图源代码(PostgreSQL)
14. 修复: MacOS 无法切换为中文
15. 修复: 相同单元格值时生成无效的SQL

## [袋鼠数据库工具 v1.9.1 (Dev)](/zh/download/v1.9.1.210531)
1. 新增数据视图设计器
2. 新增工具栏控件（兼容GTK4）
3. 升级底层库: libgda 6.0.1
4. 改进 MySQL/MariaDB 连接稳定性
5. 重构数据库仓库上下文菜单
6. SQLite: 实现重命名支持
7. MySQL/MariaDB: 实现重命名功能
8. 实现数据视图 新建/设计/源码/重命名/转存/复制名称
9. 重构查询视图工具栏
10. 更新中文语言支持(zh-CN/zh-TW/zh-SG/zh-HK)
11. 数据网格添加列重排支持
12. 改进 日期时间/时间戳 类型显示
13. 新增几何坐标类型支持
14. 新增大型文本类型支持
15. 改进 Windows 和 MacOS 平台安装包
16. 修复: 数据库仓库目录树展开图标无响应
17. 修复: MySQL/MariaDB NULL/空字符串显示问题
18. 修复: 模型中无法显示数据视图字段问题
19. 修复: 模型中导入对象时无法自动扩充视图
20. 修复: 无法加载索引条目(MySQL)
21. 修复：无法编辑布尔类型数据
22. 修复：加载智能提示数据时的告警消息

<div>
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

## [袋鼠数据库工具 v1.8.1 (Dev)](/zh/download/v1.8.1.210430)
1. 改进工具栏支持（默认显示文本和大图标）
2. 改进查询视图标题，支持编号
3. 仅支持同一对象视图的唯一实例；
4. 更新工具分类
5. 模型视图工具栏添加从数据库导入、导出按钮
6. 模型视图支持从数据库导入对象
7. 模型视图支持表和视图节点数据保存和加载
8. 模型视图增加修改及关闭提醒
9. 增加数据库实体选择对话框
10. 改进模型绘制效果（表/视图/图形）
11. 修复: 数据表视图自定义查询页无法显示字段的问题
12. 修复：苹果版本增加插件目录变量定义（支持插件加载）
13. 修复：打开模型文件时模型不可见

## [袋鼠数据库工具 v1.7.1 (Dev)](/zh/download/v1.7.1.210331)
1. 实现十六进制编辑器支持 (已完成)
2. 实现工作空间页样式支持 (已完成)
3. 增加可独立查看日志支持 (已完成)
4. 增加界面快捷键定制支持 (已完成)
5. 增加数据图表支持 (前期开发中)
6. 数据库模型化支持 (前期开发中)
   - 支持模型文件加载和保存功能
   - 支持模型节点复制与粘贴功能
   - 支持模型节点多选功能
7. 支持拖放 SQLite 数据库到连接首页并自动打开 #76
8. 重构应用首页，方便用户操作
9. 支持复制数据为 LUA 表结构
10. 改进对象导航树操作体验
11. 支持保存和恢复工作空间界面布局功能，缓存正在编辑的内容
12. 增加更多语言支持
13. 改进日志支持（日志消息中增加数据库名和连接名）
14. 增加SQL脚本文件监测支持
15. 重构数据表视图支持显示特性工具栏
16. 打开连接时默认展示全部数据表
17. 重构对象树视图改进对象树显示效果
18. 增加快捷键对话框，支持查找和配置快捷键
19. 改进标题栏样式支持，支持颜色和图片背景快捷配置
20. 增加弹出桌面气泡消息支持
21. 增加关闭页面确认对话框支持
22. 重构数据表、设计器、模型页工具栏控件，支持图标和图标文字两种显示方式
23. 修复: Access denied: you need the SUPER privilege(s) for this operation
24. 修复: 删除对象后同步关闭其打开的视图
25. 修复: 重命名对象后同步更新打开的视图
26. 修复：苹果系统无法获得系统名称的错误

<div>
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

## [袋鼠数据库工具 v1.6.1 (Dev)](/zh/download/v1.6.1.210131)
1. 实现十六进制编辑器支持 (已完成)
2. 实现工作空间页样式支持 (已完成)
3. 增加可独立查看日志支持 (已完成)
4. 增加界面快捷键定制支持 (已完成)
5. 增加数据图表支持 (前期开发中)
6. 数据库模型化支持 (前期开发中)

## [袋鼠数据库工具 v1.5.1 (Dev)](/zh/download/v1.5.1.201231)
1. 实现十六进制编辑器支持 (已完成)
2. 实现工作空间页样式支持 (已完成)
3. 增加数据图表支持 (前期开发中)
4. 数据库模型化支持 (前期开发中)

## [袋鼠数据库工具 v1.0.6 (Beta)](/zh/download/v1.0.6.201109)
1. 更新域名为 www.datatable.online

## [袋鼠数据库工具 v1.3.1 (Dev)](/zh/download/v1.3.1.201102)
1. 实现十六进制编辑器支持 (已完成)
2. 增加数据图表支持 (前期开发中)
3. 增加数据库连接页新样式 (前期开发中)

## [袋鼠数据库工具 v1.0.5 (Beta)](/zh/download/v1.0.5.201019)
1. 实现单元格值上下文菜单
2. 改进数据库空值显示和编辑支持
3. 改进单元格数据文本视图，支持编码检测和转换
4. 改善中国大陆用户可访问性：显示版本更新列表
5. 提升 MySQL/MariaDB 连接稳定性
6. 修复: 切换单元格数据查看视图错误
7. 修复: 复制数据列长短名错误

<div>
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

## [袋鼠数据库工具 v0.99.3 (Beta)](/zh/download/v0.99.3.200921)
1. 重构了底层容器和服务模块
2. 改善了查看数据表和SQL查询性能
3. 更新了数据表格工具栏按钮图标
4. 修复: 无法打开 MariaDB 数据库

## [袋鼠数据库工具 v0.99.2 (Beta)](/zh/download/v0.99.2.200907)
1. 更新打包脚本: 制作 Mac OS X 安装程序包和便携式安装包
2. 改进工具页面本地化支持
3. 更新中文语言包(zh-CN/zh-TW/zh-HK/zh-SG)
4. 修复: 提示 MySQL server has done away 后，没有自动\手动重连 #63
5. 修复: 无法加载认证插件 caching_sha2_password #64
6. 修复: 控制台警告消息

## [袋鼠数据库工具 v0.99.1 (Beta)](/zh/download/v0.99.1.200824)
1. 改进表设计器通知用户保存修改
2. 改进消息对话框标题显示
3. 改进表设计器预览页只显示修改部分SQL
4. 更新SQLite/MySQL/PostgreSQL 元模型及数据
5. 改进 Windows 安装程序显示许可证和多语言支持
6. Make kangaroo portable #59

## [袋鼠数据库工具 v0.33.1 (Dev)](/zh/download/v0.33.1.200817)
1. 更新应用标题栏和页面导航栏样式
2. 改进日期时间选取控件
3. 改进日期时间网格单元渲染器
4. 实现日期时间数据编辑保存
5. 更新 Windows 部署脚本：包含插件库(libpeas)的加载器
6. 更新构建脚本增加第三方依赖库(用于支持 PDF/地图/绘图)
7. 更新构建脚本改进调试支持
8. 修复: 无法显示动画图片(.gif)

## [袋鼠数据库工具 v0.32.1 (Dev)](/zh/download/v0.32.1.200810)
1. 实现生成网页格式的数据库设计文档
2. 实现生成 Markdown 格式的数据库设计文档
3. 更新导入 / 导出 功能图标

<div>
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

## [袋鼠数据库工具 v0.31.1 (Dev)](/zh/download/v0.31.1.200803)
1. 实现 BLOB 内容识别（文件类型识别）
2. 实现 SQLite BLOB 类型数据处理(导入 / 导出 / 置空)
3. 实现 MySQL BLOB 类型数据处理(导入 / 导出 / 置空)
4. 实现 PostgreSQL BLOB 类型数据处理(导入 / 导出 / 置空)
5. 实现以文本方式查看 BLOB 数据
6. 应用紧凑样式到查找与搜索框

## [袋鼠数据库工具 v0.30.1 (Dev)](/zh/download/v0.30.1.200727)
1. 插件系统增加应用相对搜索路径
2. 增加数据查看面板和按钮
3. 实现文本和图像查看器
4. 界面按钮更新为瘦身平面样式

## [袋鼠数据库工具 v0.29.1 (Dev)](/zh/download/v0.29.1.200713)
1. 实现插件扩展系统
2. 实现一个简单的演示插件(example)
3. 更新 ArchLinux and MacOSX 安装包脚本
4. 更新便携式发布包(更具 *nix 风格)

## [袋鼠数据库工具 v0.28.1 (Dev)](/zh/download/v0.28.1.200629)
1. 实现查找替换功能
2. 更新中文语言翻译(zh-CN/zh-TW/zh-HK/zh-SG)

<div>
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

## [袋鼠数据库工具 v0.27.1 (Beta)](/zh/download/v0.27.1.200622)
1. 改进 PostgreSQL 的智能提示数据
2. 改进智能提示之自动完成样式（增加图标、过滤支持）
3. 添加智能提示之函数参数自动提示功能
4. 添加复制选中列头功能（长短名）
5. 添加复制全部列头功能(TSV/CSV)
6. 更新发布包命名格式
7. 更新中文语言翻译

## [袋鼠数据库工具 v0.26.1 (Dev)](/zh/download/v0.26.1.200615)
1. 支持智能提示数据挖掘（SQLite/MySQL/PostgreSQL）
2. 支持编辑视图代码自动完成（v1）

## [袋鼠数据库工具 v0.25.1 (Beta)](/zh/download/v0.25.1.200601)
1. 为数据库空间导航栏添加上下文菜单
2. 为对象树数据库和模式节点添加查询.
3. 更新中文翻译(zh-CN/zh-TW/zh-HK/zh-SG).
5. 修复:  PostgreSQL 12: 表和视图未显示 #46
6. 修复:  MariaDB 10.5: 不存在的列 cons.ENFORCED #47
7. 修复:  PostgreSQL 12: 不存在的列 c.consrc #48
8. 修复:  PostgreSQL 11.7 / 9.6: 数据行不存在 #49
9. 修复:  MySQL 5.7.30: information_schema 不存在表 'CHECK_CONSTRAINTS' #50
10. 修复:  PostgreSQL 9.6: 不存在的列 c.relispartition #51
11. 修复:  PostgreSQL: 数据库模式显示错误
12. 修复:  数据网格列头显示错误（含有下划线字符_）

## [袋鼠数据库工具 v0.24.1 (Dev)](/zh/download/v0.24.1.200525)
1. 新增 SQL 格式化模块，支持美化和简化SQL.
2. 新增 archlinux 安装器(基于 HowardZorn 提交的PR #45 ).
3. 新增 苹果平台 安装器

<div>
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

## [袋鼠数据库工具 v0.23.1 (Beta)](/zh/download/v0.23.1.200518)
1. 改进日期、日期时间选取控件.
2. 改进标题栏背景图片（颜色）.
3. 改进网格列标题.
4. 更新中文翻译.
5. 修复:  不能更新日期、日期时间类型数据.
6. 修复:  不能更新浮点类型数据.
7. 修复:  不能更新数值类型（Numeric）
8. 修复:  MySQL: 不能更新字符串数组类型(Char)
9. 修复:  PostgreSQL: SQL中名字错误
10. 修复:  数据网格工具栏状态错误.

## [袋鼠数据库工具 v0.22.1 (Beta)](/zh/download/v0.22.1.200511)
1. 增加中文语言翻译（简体中文[zh-CN//zh-SG]、繁体中文[zh-TW/zh-HK]）
2. SQLite: 新建数据库检查并增加扩展名(.sqlite).
3. 改进设计器、删除、刷新体验，可以定位到原对象.
4. 改进 Windows 平台自动化部署和安装脚本.
5. 修复:  重命名时奔溃的bug.
6. 修复:  删除对象时崩溃的bug.
7. 修复:  保存表设计器修改时崩溃的bug
8. 修复:  空表无法增加数据行
9. 修复:  及时模式无法保存追加行

## [袋鼠数据库工具 v0.21.1 (Beta)](/zh/download/v0.21.1.200504)
1. 重构整个DataGrid，为了更好的用户体验
2. DataGrid 支持三种编辑模式: LIVE / CACHE / TRANSACTION
3. DataGrid 支持复制粘贴多行操作
4. 当粘贴多行时，自动更新编辑模式为 CACHE 模式
5. 修复: 查询构建器 where 子句表达式错误

## [袋鼠数据库工具 v0.20.1 (Dev)](/zh/download/v0.20.1.200420)
1. 数据网格实现复制数据行到剪贴板功能（TSV 格式）
2. 重构表结构设计器弹出菜单.
3. 表结构设计器实现克隆功能.
4. 表结构设计器实现添加功能.
5. 表结构设计器实现多行支持（删除/上移/下移）.
6. 表结构设计器实现复制功能.
7. 表结构设计器实现剪切功能.
8. 表结构设计器实现粘贴功能.
9. 改进数据网格中文本处理性能.

<div>
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

## [袋鼠数据库工具 v0.19.1 (Dev)](/zh/download/v0.19.1.200413)
1. 对象树上实现复制对象名称（长短名）.
2. 数据网格实现复制数据行为 SQL 语句(Insert/Update/Delete).
3. 数据网格实现复制数据行为 TSV 格式
4. 数据网格实现复制数据行为 CSV 格式
5. 数据网格实现复制数据行为 PHP 数组
6. 数据网格实现复制数据行为 JSON 格式
7. 改进分栏控件边样式.
8. 修复:  格式化BLOB数据时崩溃
9. 修复:  数据表无关键字字段时崩溃
10. 修复:  数据表关键字段中包含下划线时崩溃(_)
11. 修复:  字段空值告警
12. 修复:  错误调用告警(to_string)

## [袋鼠数据库工具 v0.18.1 (Dev)](/zh/download/v0.18.1.200406)
1. 加密保存用户密码.
2. 数据网格支持插入、克隆、删除操作.
3. 开始视图中支持数据库连接克隆
4. 数据库对象树支持导出表结构SQL到剪贴板和文件
5. 数据库对象树支持导出表结构SQL到编辑器中
6. 数据库对象树支持刷新操作
7. 改进工作区视图标题页展示行为
8. 修复:  修复目录树回车键行为
9. 修复:  修复打开表时崩溃行为（有空值）

## [袋鼠数据库工具 v0.17.0 (Dev)](/zh/download/v0.17.0.200323)
1. 支持SSH隧道方式连接数据库 (Windows, Linux/Unix and MacOS)
2. 数据库连接对话框增加连接测试功能
3. 重构数据表格上下文菜单
4. 数据库对象树菜单增加导出SQL（剪贴板和文件）菜单
5. 实现数据表格选择菜单功能（全选和反选）
6. 实现数据表格跳转到指定行菜单
7. 修复: 切换表格和表单时崩溃

## [袋鼠数据库工具 v0.16.0 (Dev)](/zh/download/v0.16.0.200316)
1. 数据库连接支持SSH隧道(Windows 未通过测试). 
2. 数据浏览页支持输入页面号切换
3. 改进对话框中的开关控件布局
4. 修复：Windows 版不能打开链接
5. 修复: 日志文件序号问题

<div>
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

## [袋鼠数据库工具 v0.15.0 (Dev)](/zh/download/v0.15.0.200302)
1. 更新并分享 openssl.vapi，集成加密模块保护用户敏感数据. 
2. 改进语言支持(消息模版, zh_Hans and zh_Hant)
3. 改进首页资源加载性能（不在卡顿）
4. 应用网络代理设置
5. Linux: 切换首页浏览器视图为版本更新时间线视图
6. 使用下拉选择框代替编辑器

## [袋鼠数据库工具 v0.14.0 (Dev)](/zh/download/v0.14.0.200217)
1. SQLite: 支持创建新数据库
2. 重构数据库树向下文菜单
3. 集成OpenSSL用于支持保护用户密码
4. 右侧面板图标添加手指指针，用于提示可点击
5. 修复：第一次启动时的窗口大小

## [袋鼠数据库工具 v0.13.0 (Dev)](/zh/download/v0.13.0.200210)
1. 数据网格应用格式设置
2. SQL编辑器应用格式设置
3. Windows 32位版本支持
4. 实现SSH隧道初步支持
5. 微调数据库连接对话框（完善配置保存和加载）
6. 修复连接首页图标bug

## [袋鼠数据库工具 v0.12.1 (Dev)](/zh/download/v0.12.1.200120)
1. 新增应用配置对话框，可加载和保存应用配置
2. 界面增加「夜间模式」支持
3. 使用新配置模型重构连接对话框
4. 使用新配置模型重构连接开始页面

<div>
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

## [袋鼠数据库工具 v0.11.1 (Dev)](/zh/download/v0.11.1.200113)
1. 重新设计连接对话框，支持SSH、SSL、高级设置；
2. 首页增加捐赠图片展示 (Paypal/Wechat/Alipay)
3. 重新设置配置模型和文件(init --> json)
4. 在窗口标题栏使用符号图标(#25)
5. 修复：表格中编辑数据会批量更新的bug

## [袋鼠数据库工具 v0.11.0 (Dev)](/zh/download/v0.11.0.200106)
1. 增加程序首页，展示版本更新列表或显示网站首页（Linux）
2. 重新实现 DSV 格式引擎
3. 改进 CSV 格式与其它工具的兼容性
4. 改进 DSV 格式设置UI布局
5. 改进日期在线编辑控件，支持即时编辑
6. 修复: 生成错误的SQL语句.
7. 修复: 导入数据时奔溃.
8. 修复: 无法保存数据网格中编辑的数据
9. 修复: 修复一些控制台警告

## [袋鼠数据库工具 v0.10.0 (Dev)](/zh/download/v0.10.0.191223)
1. 增加导出向导用户界面
2. 支持批量导出数据表为文件
3. 支持多达7种数据格式(DSV/JSON/XML/HTML/Markdown/SQL)
4. 支持数据字段重名（别名或标题）

## [袋鼠数据库工具 v0.9.5 (Dev)](/zh/download/v0.9.5.191216)
1. 支持从DSV（CSV、TSV）格式文件导入数据
2. 支持从JSON格式文件导入数据
3. 支持XML格式文件导入数据
4. 使用libxml2库重写导出数据为XML格式
5. 增加导出助理界面
6. 初步实现导出格式、导出表选择页面

<div>
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

## [袋鼠数据库工具 v0.9.4 (Dev)](/zh/download/v0.9.4.191209)
1. 实现文件导入处理结果界面
2. 数据导入增加5中导入模式（追加、更新、合并、删除、替换）
3. 实现导入数据到表中（SQLite）
4. 重构对话框，增加翻译、艺术家和许可证信息，修复Mac和Ubuntu平台无法展示图片的问题；

## [袋鼠数据库工具 v0.9.3 (Dev)](/zh/download/v0.9.3.191202)
1. 实现工具页用于支持导入、导出功能
2. 增加IDE相关接口，用于后续重构支持；

## [袋鼠数据库工具 v0.9.2 (Dev)](/zh/download/v0.9.2.191125)
1. 实现从文件导入数据功能（DSV/XML/JSON） #19
    - 实现文件导入格式、编码和预览界面
    - 实现文件导入格式参数设置界面
    - 实现文件导入解析数据预览界面
    - 实现文件导入字段映射界面（功能未实现）
    - 实现文件导入处理进度界面（功能未实现）
    - 实现文件导入之DSV格式解析和预览支持
    - 实现数据字段和目标表字段映射支持

## [袋鼠数据库工具 v0.9.1 (Dev)](/zh/download/v0.9.1.191118)
1. 支持导出数据到剪贴板或文件 #18
   - 支持导出为 DSV 格式(CSV/TSV/...)
   - 支持导出为 JSON 格式；
   - 支持导出为 XML 格式
   - 支持导出为 HTML 格式
   - 支持导出为 SQL 格式（INSERT）
   - 支持导出为 Markdown 格式
2. 改进保存文件对话框文件过滤条件，提升用户体验

## [袋鼠数据库工具 v0.9.0 (Dev)](/zh/download/v0.9.0.191111)
1. 支持数据库表结构编辑和保存 #5
2. 支持导出为JSON和DSV格式

<div>
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

## [袋鼠数据库工具 v0.8.5 (Dev)](/zh/download/v0.8.5.191104)
1. 支持表结构编辑和保存（SQLite、PostgreSQL 预览版） #5
2. 增加了数据导出的UI和接口
3. 新建表保存时同步更新Tab页面标题

## [袋鼠数据库工具 v0.8.4 (Dev)](/zh/download/v0.8.4.191028)
1. 重组数据库对象树和界面 #17
2. 增加数据库对象树刷新菜单
3. 实现多个数据库支持
4. 编辑表结构并保存(MySQL 预览) #5

## [袋鼠数据库工具 v0.8.3 (Dev)](/zh/download/v0.8.3.191021)
1.  新建连接时出现插件未加载错误 #12
2. 增加 MacOS 平台编译支持 #13
3. 重构数据库对象模型并改进互操作性

## [袋鼠数据库工具 v0.8.2 (Dev)](/zh/download/v0.8.2.191014)
1. 改进字段选择对话框，支持根据值选择字段 #9
2. 改进表设计器支持 Tab 键 #3
3. 修复:  字段表达式对话框重加载失败 #10
4. 修复:  开始菜单和桌面快捷键和图标 #7
5. 修复:  SQL 语法高亮支持 #8
6. 修复:  数据表单加载失败 #11

<div>
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

## [袋鼠数据库工具 v0.8.1 (Dev)](/zh/download/v0.8.1.190930)
1. 改进：生成正确的编辑 SQL 语言
2. 重构: 增加源代码编辑模块
3. 改进：SQLite 模式SQL生成器
4. 修复: 编辑器无法正确显示空白行
5. 修复: 新增好行时获取字符串失败（控制台告警）
6. 修复: 编辑表结构时控制台报错

## [袋鼠数据库工具 v0.8.0 (Dev)](/zh/download/v0.8.0.190923)
1. 实现 PostgreSQL SQL 生成器(11.0)
2. 实现保存表结构到数据库（只创建）
3. 更新构建脚本：隐藏控制台窗口
4. 更新Windows安装程序：增加 MySQL 和 PostgreSQL 客户端库
5. 更新关于对话框中的链接
6. 改进单行编辑器控件（自动聚焦）
7. 更新忙状态时的界面光标

## [袋鼠数据库工具 v0.7.2 (Dev)](/zh/download/v0.7.2.190916)
1. 实现 PostgreSQL 11 加载器
2. 实现 PostgreSQL 11 表设计表单
3. 重构项目目录
4. 创建项目网站项目：dbkangaroo.github.io
5. 增加 Windows 安装器脚本

## 袋鼠数据库工具 v0.6.0 (Dev)
1. 实现数据网格中编辑和保存功能
2. 实现表单编辑和保存功能
3. 实现国际化支持(I18N)
4. 实现中文语言翻译
 
## 袋鼠数据库工具 v0.4.0 (Dev)
1. 实现数据翻页功能
2. 实现查询构建器和应用
3. 实现导出数据为CSV文件
4. 实现系统日志输出视图
5. 实现编辑和执行SQL
6. 实现多个查询结果支持

## 袋鼠数据库工具 v0.2.0 (Dev)
1. 增加连接设置界面
2. 增加连接管理模块
3. 实现加载并显示数据库对象树
4. 实现打开并显示表数据

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