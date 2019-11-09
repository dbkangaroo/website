---
title: How to serialize / deserialize GLib object
lang: en-US
sidebarDepth: 2
---

# How to serialize / deserialize GLib object(Will update later)

## Background
How to compare two objects and generate the patch for them? It is a important step to forward Kangaroo 1.0.
I don't know which library is the best way to solve this problem,  So I start to study this problem.

## Solution
In GLib framework, there are two libraries support to serialize / deserialize object, there are:
| Library        | Latest version | Description        | Website    |
|----------------|----------------|----------------|----------------|
| json-glib | 1.44 | JSON-GLib implements a full JSON parser and generator using GLib and GObject, and integrates JSON with GLib data types. | [json-glib](https://gitlab.gnome.org/GNOME/json-glib) |
| GXML    | 0.16 | GXml provides a GObject API for manipulating XML and a Serializable framework from GObject to XML. | [GXML](https://gitlab.gnome.org/GNOME/gxml) |

### Which library is suitable for this problem?

let us list a checklist to check which library is better for our problem:
| Key item       | GXML                  | json-glib             | Remark                |
|----------------|-----------------------|-----------------------|-----------------------|
| Basic types    | [x] Supported         | [x] Supported         |                       |
| Boxed types    | [ ] Unsupported       | [x] Supported         |                       |
| Object         | [x] Supported         | [x] Supported         |                       |
| Vala Array     | [x] Supported         | [ ] Unsupported       |                       |
| Gee.ArrayList  | [x] Supported         | [ ] Unsupported       |                       |
| Gee.HashMap    | [x] Supported         | [ ] Unsupported       |                       |
| Gee.TreeMap    | [x] Supported         | [ ] Unsupported       |                       |
| Gee.LinkedList | [ ] Unsupported       | [ ] Unsupported       |                       |
| GLib.Array     | [ ] Unsupported       | [ ] Unsupported       |                       |
| GLib.List      | [ ] Unsupported       | [ ] Unsupported       |                       |
| GLib.SList     | [ ] Unsupported       | [ ] Unsupported       |                       |
| GLib.Queue     | [ ] Unsupported       | [ ] Unsupported       |                       |
| GLib.HastTable | [ ] Unsupported       | [ ] Unsupported       |                       |

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

### Advantage / Disadvantage of GXML
__Advantage__
1. Vala friendly 
2. Support four kinds of Gee container.

__Disadvantage__
1. Missing GLib built-in container support.
2. Missing boxed type support

### Advantage / Disadvantage of json-glib
__Advantage__
1. support to register new type function to serialize / deserialize unsupported types, both boxed types and complex objects.
2. Boxed type and container friendly.

__Disadvantage__
1. Missing GLib built-in container support.

## Example
### Example of json-glib, support GLib container
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


## Reference
[GXml: Objects and Collections to XML and back](https://blogs.gnome.org/despinosa/2016/11/06/gxml-objects-and-collections-to-xml-and-back/)

[GXml 0.14 and Serialization](https://blogs.gnome.org/despinosa/2016/11/03/gxml-0-14-and-serialization/)

[HowTo: GObject Serialization to XML using GXml](https://blogs.gnome.org/despinosa/2016/05/04/howto-gobject-serialization-to-xml-using-gxml/)

[Serializing object property with Json.gobject_serialize?](https://stackoverflow.com/questions/43344017/vala-serializing-object-property-with-json-gobject-serialize)

[json-api-object.vala](https://github.com/major-lab/json-api-glib/blob/master/src/json-api-object.vala)

[Is there no way to auto serialize any array with data to JSON?](https://discourse.gnome.org/t/is-there-no-way-to-auto-serialize-any-array-with-data-to-json/1621)
