---
title: Why choose Vala to build Kangaroo?
lang: en-US
---

# Some thoughts about building Kangaroo
While I decide to build my own app, giving the talent to app is the most important thing, what kind of talent the new app must have? I think they are:
1. __Performance__: native app's speed is the best.
2. __Keep code safe__: the app must have capability to against reverse-engineering or modification, by making it difficult for a third-party to access your source code.
3. __Platform independent__: one copy of code can compile all of platforms.
4. __Technology maturity__: the technology stack could support to gain the business purpose, I need the money to continue the work.
5. __Master it easily__: Language must be simple and powerful, sure it is musts familiar by me. 

I had reviewed some kind of framework and languages like: 
QT / C++ vs WxWidget / C++ vs GTK-mm / C++ vs GTK-rs / Rust / Go-GTK / Go vs GTK / Vala

finally, I chosen GTK / Vala combination to  be the Kangaroo's tech stack.

# Benefits and strength from Vala
1. 语法兼容C#和Java，表达能力强，生产力高。
语法干净、简洁、表达能力强，没有让人晕菜的 ->/&/:，点号(.）搞定一切；

2. 内存所有权和使用引用计数管理，内存使用安全无烦恼。

3. 支持接口：支持抽象接口，也支持接口实现
接口实现类似于PHP traits 和 JavaScript 的mixin的功能；

4. 点分名字空间支持大型应用开发。

5. 语言级别的正则表达式支持。
正则表达式给予了我强大的力量，在我的代码中无处不在，越用越熟练。
顺便推荐好工具： https://regex101.com/

6. 有C的速度和良好的互操作性支持
可以生成C头文件和C代码并获得全平台支持，也可以Vala与C混合编译。

7. 强大且成熟的类库支持（官方支持约250个库）
基于GLib的强大类库体系，有工业级成熟度的各种库和GUI框架。
默认基于 GObject 的对象系统，也支持构建自己的单根对象体系。


8. 有丰富且完善的文档支持（valadoc.org）也有大量开源项目可供参考学习。

9. 有多种语言服务器【LSP】实现，支持各种编辑器和IDE；
https://gitlab.gnome.org/esodan/gvls
https://github.com/benwaffle/vala-language-server

10. Gnome 和 Elementary OS官方钦定语言，并获得IBM公司研究机构采用。