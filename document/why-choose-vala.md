---
title: Why choose Vala to build Kangaroo?
lang: en-US
---

# Why choose Vala to build Kangaroo?

## Some thoughts about building Kangaroo
While I decide to build my own app, giving the talent to app is the most important thing, what kind of talent the new app must have? I think they are:
1. __Performance__: native app's speed is the best.
2. __Keep code safe__: the app must have capability to against reverse-engineering or modification, by making it difficult for a third-party to access your source code.
3. __Platform independent__: one copy of code can compile all of platforms.
4. __Technology maturity__: the technology stack could support to gain the business purpose, I need the money to continue the work.
5. __Master it easily__: Language must be simple and powerful, sure it is musts familiar by me. 

I had reviewed some kind of framework and languages like: 
QT / C++ vs WxWidget / C++ vs GTK-mm / C++ vs GTK-rs / Rust / Go-GTK / Go vs GTK / Vala

finally, I chosen GTK / Vala combination to  be the Kangaroo's tech stack.

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

## Benefits and strength from Vala
1. __语法兼容C#和Java，表达能力强，生产力高__

语法干净、简洁、表达能力强，没有让人晕菜的 ->/&/:，点号(.）搞定一切；

2. __内存所有权和使用引用计数管理，内存使用安全无烦恼__

3. __支持接口：支持抽象接口，也支持接口实现__

接口实现类似于PHP traits 和 JavaScript 的mixin的功能；

4. __点分名字空间支持大型应用开发__

5. __语言级别的正则表达式支持__

正则表达式给予了我强大的力量，在我的代码中无处不在，越用越熟练。<br/>
顺便推荐好工具： https://regex101.com/

6. __有C的速度和良好的互操作性支持__

可以生成C头文件和C代码并获得全平台支持，也可以Vala与C混合编译。

7. __强大且成熟的类库支持（官方支持约250个库）__

基于GLib的强大类库体系，有工业级成熟度的各种库和GUI框架。<br/>
默认基于 GObject 的对象系统，也支持构建自己的单根对象体系。


8. __有丰富且完善的文档支持（valadoc.org）也有大量开源项目可供参考学习__

9. __有多种语言服务器【LSP】实现，支持各种编辑器和IDE__
https://gitlab.gnome.org/esodan/gvls <br/>
https://github.com/benwaffle/vala-language-server

10. __Gnome 和 Elementary OS官方钦定语言，并获得IBM公司研究机构采用__

有大型机构和大公司采用 Vala 能给予普通开发者更大的信息加持，相信有更多开发者会加入 Vala 语言社区；
