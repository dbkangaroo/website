---
title: 高分辨率缩放设置
lang: zh-CN
---

# 高分辨率缩放设置

## 4K 分辨率缩放(200%)
__Windows__
```
GDK_SCALE=2
// GDK_DPI_SCALE=96
```

__macOS__
```
// 环境变量 
GDK_SCALE = 2
// GDK_DPI_SCALE = 96
```

__Linux / GTK__
```
// 环境变量 
GDK_SCALE = 2
// GDK_DPI_SCALE = 96

or

// (X11 Server) XSettings value
Gdk/WindowScalingFactor = 2
Gdk/UnscaledDPI = 98340
```

__Linux / KDE__
```
// 环境变量 
unset GDK_SCALE
unset GDK_DPI_SCALE

// (X11 Server) XSettings value: ~/.config/xsettingsd/xsettingsd.conf
Gdk/WindowScalingFactor = 2
Gdk/UnscaledDPI = 98340
```

## 其它分辨率缩放(150%)
__Windows__
```
GDK_SCALE=1.5
// GDK_DPI_SCALE=96
```

__macOS__
```
// 环境变量 
GDK_SCALE = 1.5
// GDK_DPI_SCALE = 96
```

__Linux / GTK__
```
// 环境变量 
GDK_SCALE = 1.5
// GDK_DPI_SCALE = 96

or

// (X11 Server) XSettings value
Gdk/WindowScalingFactor = 1.5
Gdk/UnscaledDPI = 98340
```

__Linux / KDE__
```
// 环境变量 
unset GDK_SCALE
unset GDK_DPI_SCALE

// (X11 Server) XSettings value: ~/.config/xsettingsd/xsettingsd.conf
Gdk/WindowScalingFactor = 1.5
Gdk/UnscaledDPI = 98340
```