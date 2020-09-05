---
title: GLib 对象序列化和反序列化
lang: zh-CN
sidebarDepth: 2
---

# GLib 对象序列化和反序列化

## 背景介绍
如何比较两个对象是否一致及生成差异化补丁？

这是袋鼠数据库工具 1.0 版要面临的重要课题，由于之前没接触过这个问题，所以不知道它的最佳解决方案是啥，于是开始研究这个问题的解决方案。

## 解决方案
在 GLib 框架体系里，有两个库可支持对象序列化和反序列化，他们分别是 JSON-GLib / GXML:
| 名称           | 最新版本        | 官方网站        | 说明           |
|----------------|----------------|----------------|----------------|
| JSON-GLib | 1.52 | [JSON-GLib](https://gitlab.gnome.org/GNOME/json-glib) | JSON-GLib 使用 GLib and GObject 实现了一个完整的 JSON 解析器和生成器，集成支持各种 GLib 类型，属于 GLib 友好型库  |
| GXML    | 0.20 | [GXML](https://gitlab.gnome.org/GNOME/gxml) | GXML 实现了对象化的 API 接口操作 XML 文档，支持对象序列化和反序列化 |

### JSON-GLib vs GXML, 哪个库才是解决问题的最佳选择？
让我们通过一个清单来对比分析两个库对具体类型的支持程度，从而判断出哪个库是解决问题的最佳选择：
| 关键项目        | GXML           | JSON-GLib       | 说明       |
|----------------|:--------------:|:---------------:|------------|
| 基本类型        | [x] 已支持      | [x] 已支持      | char/int/double/... |
| 包装类型        | [ ] 未支持      | [x] 已支持      | Value/Variant/...   |
| 对象           | [x] 已支持      | [x] 已支持      | GObject 子类型对象    |
| Vala 数组      | [x] 已支持      | [ ] 未支持      | 容器类型    |
| Gee.ArrayList  | [x] 已支持      | [ ] 未支持      | 容器类型    |
| Gee.HashMap    | [x] 已支持      | [ ] 未支持      | 容器类型    |
| Gee.TreeMap    | [x] 已支持      | [ ] 未支持      | 容器类型    |
| Gee.LinkedList | [ ] 未支持      | [ ] 未支持      | 容器类型    |
| GLib.Array     | [ ] 未支持      | [ ] 未支持      | 容器类型    |
| GLib.List      | [ ] 未支持      | [ ] 未支持      | 容器类型    |
| GLib.SList     | [ ] 未支持      | [ ] 未支持      | 容器类型    |
| GLib.Queue     | [ ] 未支持      | [ ] 未支持      | 容器类型    |
| GLib.HastTable | [ ] 未支持      | [ ] 未支持      | 容器类型    |

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

### GXML 的优势和劣势
__优势__
1. Vala 友好
2. 支持各种 Gee 容器类型.

__劣势__
1. 缺乏 GLib 的各种内置容器类型支持
2. 缺乏 GLib 包装类型 支持

### JSON-GLib 的优势和劣势
__优势__
1. 支持注册类型序列化/反序列化函数来处理未支持的类型，无论是包装类型还是复合类型
2. 包装类型和容器类型友好

__劣势__
1. 缺乏对 GLib 内建容器类型的支持

### 袋鼠项目的选择
最终在袋鼠项目中选择了 JSON-GLib 来实现对象的序列化和反序列化，因为它对包装类型和容器类型友好，且支持注册类型序列化/反序列化函数来处理未支持的类型，使得我们有能力自己完成对自定义对象的序列化和反序列化；

## 序列化和反序列化案例
### GLib 容器类型的序列化
```vala
    public class DbObject : GLib.Object, Json.Serializable
    {
        public Json.Object? meta { get; construct set; default = null; }
        public VersionSync version { get; set; default = VersionSync.UNKNOWN; }

        public virtual Value get_property (ParamSpec pspec)
        {
            Value prop_value = GLib.Value(pspec.value_type);
            (this as GLib.Object).get_property(pspec.name, ref prop_value);
            stdout.printf ("%s --> %s\n", prop_value.type_name(), prop_value.strdup_contents());

            return prop_value;
        }

        public virtual void set_property (ParamSpec pspec, Value value)
        {
            (this as GLib.Object).set_property (pspec.name, value);
        }

        public unowned ParamSpec? find_property (string name)
        {
            return ((ObjectClass) get_type ().class_ref ()).find_property (name);
        }

        public virtual Json.Node serialize_property (string property_name, Value @value, ParamSpec pspec)
        {
            if (@value.type ().is_a (typeof (Json.Object)))
            {
                var obj = @value as Json.Object;
                if (obj != null)
                {
                    var node = new Json.Node (NodeType.OBJECT);
                    node.set_object (obj);
                    return node;
                }
            }
            else if (@value.type ().is_a (typeof (Gee.ArrayList)))
            {
                unowned Gee.ArrayList<GLib.Object> list_value = @value as Gee.ArrayList<GLib.Object>;
                if (list_value != null || property_name == "data")
                {
                    var array = new Json.Array.sized (list_value.size);
                    foreach (var item in list_value)
                    {
                        array.add_element (gobject_serialize (item));
                    }

                    var node = new Json.Node (NodeType.ARRAY);
                    node.set_array (array);
                    return node;
                }
            }
            else if (@value.type ().is_a (typeof (GLib.Array)))
            {
                unowned GLib.Array<GLib.Object> array_value = @value as GLib.Array<GLib.Object>;
                if (array_value != null || property_name == "data")
                {
                    var array = new Json.Array.sized (array_value.length);
                    for (int i = 0; i < array_value.length; i++) {
                        array.add_element (gobject_serialize (array_value.index(i)));
                    }

                    var node = new Json.Node (NodeType.ARRAY);
                    node.set_array (array);
                    return node;
                }
            }            
            else if (@value.type ().is_a (typeof (HashTable)))
            {
                var obj = new Json.Object ();
                var ht_string = @value as HashTable<string, string>;
                if (ht_string != null)
                {
                    ht_string.foreach ((k, v) => {
                        obj.set_string_member (k, v);
                    });

                    var node = new Json.Node (NodeType.OBJECT);
                    node.set_object (obj);
                    return node;
                } else {
                    var ht_object = @value as HashTable<string, GLib.Object>;
                    if (ht_object != null)
                    {
                        ht_object.foreach ((k, v) => {
                            obj.set_member (k, gobject_serialize (v));
                        });    

                        var node = new Json.Node (NodeType.OBJECT);
                        node.set_object (obj);
                        return node;
                    }
                }
            }

            return default_serialize_property (property_name, @value, pspec);
        }

        public virtual bool deserialize_property (string property_name, out Value @value, ParamSpec pspec, Json.Node property_node)
        {
            return default_deserialize_property (property_name, out @value, pspec, property_node);
        }
    }
```
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

## 参考资料
[GXml: Objects and Collections to XML and back](https://blogs.gnome.org/despinosa/2016/11/06/gxml-objects-and-collections-to-xml-and-back/)

[GXml 0.14 and Serialization](https://blogs.gnome.org/despinosa/2016/11/03/gxml-0-14-and-serialization/)

[HowTo: GObject Serialization to XML using GXml](https://blogs.gnome.org/despinosa/2016/05/04/howto-gobject-serialization-to-xml-using-gxml/)

[Serializing object property with Json.gobject_serialize?](https://stackoverflow.com/questions/43344017/vala-serializing-object-property-with-json-gobject-serialize)

[json-api-object.vala](https://github.com/major-lab/json-api-glib/blob/master/src/json-api-object.vala)

[Is there no way to auto serialize any array with data to JSON?](https://discourse.gnome.org/t/is-there-no-way-to-auto-serialize-any-array-with-data-to-json/1621)
