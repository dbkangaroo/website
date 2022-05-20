---
title: Why choose Vala to build Kangaroo?(Updated at 5/20/2022)
lang: en-US
sidebarDepth: 2
copyright:
  minLength: 32
---

# Why choose Vala to build Kangaroo?(Updated at 5/20/2022)

## Some thoughts about building Kangaroo
While I decided to build my own app, the most important thing is that what kind of talents of the new app should have? I think they are:
1. __Performance__: native performance is the best.
2. __Keep code safe__: the app must be safe to against to be cracked.
3. __Platform independent__: support all platforms like Windows / macOS / Linux.
4. __Technology maturity__: the technology stack could support to gain the business purpose, I need the money to continue the work.
5. __Master it easily__: Language must be simple and powerful, sure it is familiar by yourself. 

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
1. __Syntax compatible with C# and Java__<br/>
It gives your apps the performance of C/C++ with the productivity of C# and Java; pls see:<br/>
[Vala for Java Programmers](https://wiki.gnome.org/Projects/Vala/ValaForJavaProgrammers)
[Vala for C# Programmers](https://wiki.gnome.org/Projects/Vala/ValaForCSharpProgrammers)

2. __Automatic memory management without GC__<br/>
Vala's memory management is based on automatic reference counting, no GC, no GC performance issue.

3. __Mixin interface support__<br/>
Vala's interface like PHP's traits and JavaScript's mixin.

4. __Dot(.) connect every thing__<br/>
DBKangaroo project has more than 400 source code files, divide them as three subproject with many namespaces and many levels, all of them connect with the character dot(.), and they work greatly and smoothly.

5. __First class regex expression support__<br/>
Regex expression treat as first class member, simple and powerful. Regex expression be used everywhere in DBKangaroo.
```vala
GLib.MatchInfo regex_match;
Regex regex = /(?<x>[\d\.\-]+),(?<y>[\s]*[\-\d\.]+)/mi;
if (regex.match(text, 0, out regex_match)) {
    point_new.set_x(double.parse(regex_match.fetch_named("x")));
    point_new.set_y(double.parse(regex_match.fetch_named("y")));
} 
```
Special gift: a powerful regex online tool： [Regex101](https://regex101.com/)

6. __Performance of C/C++ with great interoperability__<br/>
Vala produces C code as intermediate language to support all platforms, Vala code and  C code could be compiled in the same project。

7. __Rich and powerful libraries__<br/>
There are 300+ Vala bindings for GNOME foundation and other populary project. [VAPIs @ Github](https://github.com/nemequ/vala-girs/tree/master/vala/vapi) [VAPIs @ Project](https://gitlab.gnome.org/GNOME/vala/-/tree/main/vapi)

8. __Excellent documentation__<br/>
Vala has excellent documentation, be it in the form of [tutorials](https://chebizarro.gitbooks.io/the-vala-tutorial/content/), [code samples](https://wiki.gnome.org/Projects/Vala/Examples) or a [very easy-to-use API Reference](https://valadoc.org/).<br/>
[Vala projects at GNOME](https://wiki.gnome.org/Projects/Vala/Documentation#Projects_Developed_in_Vala)
[Vala projects at Github](https://github.com/search?l=Vala&q=Vala&type=Repositories)

9. __Visual Studio Code with Vala language server support__<br/>
The best Vala IDE is [Visual Studio Code](https://code.visualstudio.com/Download) + [Vala plugin](https://marketplace.visualstudio.com/items?itemName=prince781.vala) + [Vala language server](https://github.com/vala-lang/vala-language-server) + Meson(Ninja)/MSYS2, enjoy them, comtribute them, we can.

10. __Elementary OS team's primary language__<br/>
Elementary's blog will tell you the truth: [Why we write elementary apps in Vala](https://blog.elementary.io/why-we-write-elementary-apps-in-vala/)
