---
title: 为什么选择 Vala 语言打造袋鼠数据库工具？(5/20/2022 更新)
lang: zh-CN
sidebarDepth: 2
copyright:
  minLength: 32
---

# 为什么选择 Vala 语言打造袋鼠数据库工具？(5/20/2022 更新)

## 打造袋鼠数据库工具时的一些思考
当我决定开发袋鼠数据库工具时，为应用赋能力是最重要的考虑项，袋鼠数据库工具应赋予哪些持续的能力？我认为应该赋予：
1. __性能优先__: 应用程序应具有无与伦比的性能表现和响应能力， 最好是打造成原生应用。
2. __代码安全__: 应用程序有能力应对逆向工程，从而避免被破解和直接修改，保持持续的商业运营能力。
3. __跨平台__: 应用程序实现一份代码可以编译成所有平台兼容的应用；
4. __技术栈成熟度__: 技术栈成熟度能支持实现商业目标，因为工具需要利润支持持续发展。
5. __快速掌握__: 开发语言必须是语法简洁和强大，也应该是熟悉易上手的。

经过评估了如下几种技术栈和编程语言组合后，最终我选择了 GTK + Vala 技术栈组合来实现袋鼠数据库工具。
QT / C++ vs WxWidget / C++ vs GTK-mm / C++ vs GTK-rs / Rust / Go-GTK / Go vs GTK / Vala


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

## Vala 语言的优势和好处
1. __语法兼容C#和Java，表达能力强，生产力高__<br/>
有C#/Java 的强大表达能力，又有原生编译的性能和速度，更有接地气的独特特性；<br/>
[Vala for Java Programmers](https://wiki.gnome.org/Projects/Vala/ValaForJavaProgrammers)
[Vala for C# Programmers](https://wiki.gnome.org/Projects/Vala/ValaForCSharpProgrammers)

2. __内存所有权和使用引用计数管理，内存使用安全无烦恼__<br/>
Vala 使用自动引用计数的内存管理功能，无需垃圾内存回收支持（GC），亦无GC相关的性能问题。

3. __支持接口：支持抽象接口，也支持接口实现__<br/>
接口实现类似于PHP traits 和 JavaScript 的 MIXIN 的功能；

4. __点分名字空间支持大型应用开发__<br/>
DBKangaroo 工具编写了 400 多个源码模块，拆分为3个子项目和多个顶级名字空间，名字空间深度达5层，全部一个点(.)搞定，至今用起来很顺；

5. __语言级别的正则表达式支持__<br/>
Vala 把正则表达式视为一等公民对待，可以在代码中直接使用，正则表达式给予了我强大的力量，在我的代码中无处不在，越用越熟练。<br/>
```vala
GLib.MatchInfo regex_match;
Regex regex = /(?<x>[\d\.\-]+),(?<y>[\s]*[\-\d\.]+)/mi;
if (regex.match(text, 0, out regex_match)) {
    point_new.set_x(double.parse(regex_match.fetch_named("x")));
    point_new.set_y(double.parse(regex_match.fetch_named("y")));
} 
```
特别的礼物：一款优秀的在线正则工具： [Regex101](https://regex101.com/)

6. __有C的速度和良好的互操作性支持__<br/>
可以生成C头文件和C代码并获得全平台支持，也可以Vala与C混合编译。

7. __强大且成熟的类库支持__<br/>
基于GLib的强大类库体系，有工业级成熟度的各种库和GUI框架支持，目前有近300个VAPI, 请查询：[VAPIs @ Github](https://github.com/nemequ/vala-girs/tree/master/vala/vapi) [VAPIs @ Project](https://gitlab.gnome.org/GNOME/vala/-/tree/main/vapi)


8. __有丰富且完善的文档支持__<br/>
有优秀的文档和案例，也有大量开源项目可供参考学习，非常容易上手。<br/>
[Vala 官方在线文档](https://valadoc.org/)
[Vala 项目集合1(GNOME)](https://wiki.gnome.org/Projects/Vala/Documentation#Projects_Developed_in_Vala)
[Vala 项目集合2(Github)](https://github.com/search?l=Vala&q=Vala&type=Repositories)

9. __卓越的开发环境支持__<br/>
目前最好的 Vala IDE 组合是：[Visual Studio Code](https://code.visualstudio.com/Download) + [Vala plugin](https://marketplace.visualstudio.com/items?itemName=prince781.vala) + [Vala language server](https://github.com/vala-lang/vala-language-server) + Meson(Ninja)/MSYS2, 享受它们，贡献它们，我们可以.

10. __Elementary OS官方钦定语言__<br/>
Elementary 官方博文分享了他们的观点: [Why we write elementary apps in Vala](https://blog.elementary.io/why-we-write-elementary-apps-in-vala/)