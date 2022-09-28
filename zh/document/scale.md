---
title: 高分辨率缩放设置
lang: zh-CN
---

# 高分辨率缩放设置
GTK4 已经实现所有平台的高分辨率缩放支持, 所有的 GTK4 应用都会自动应用系统缩放设置进行缩放。但有时候会存在缩放问题，需要您尝试一下另一种方式来实现缩放支持，详细的解决办法如下：

## 4K 分辨率缩放(200%)
### Windows
```
GDK_SCALE = 2
// GDK_DPI_SCALE=96
```

### macOS
```
// 环境变量 
GDK_SCALE = 2
// GDK_DPI_SCALE = 96
```

### Linux / GTK
```
// 环境变量 
GDK_SCALE = 2
// GDK_DPI_SCALE = 96

or

// (X11 Server) XSettings value
Gdk/WindowScalingFactor = 2
Gdk/UnscaledDPI = 98340
```

### Linux / KDE
```
// 环境变量 
unset GDK_SCALE
unset GDK_DPI_SCALE

// (X11 Server) XSettings value: ~/.config/xsettingsd/xsettingsd.conf
Gdk/WindowScalingFactor = 2
Gdk/UnscaledDPI = 98340
```

## 8K 分辨率缩放(400%)
### Windows
```
GDK_SCALE = 4
// GDK_DPI_SCALE=96
```

### macOS
```
// 环境变量 
GDK_SCALE = 4
// GDK_DPI_SCALE = 96
```

### Linux / GTK
```
// 环境变量 
GDK_SCALE = 4
// GDK_DPI_SCALE = 96

or

// (X11 Server) XSettings value
Gdk/WindowScalingFactor = 4
Gdk/UnscaledDPI = 98340
```

### Linux / KDE
```
// 环境变量 
unset GDK_SCALE
unset GDK_DPI_SCALE

// (X11 Server) XSettings value: ~/.config/xsettingsd/xsettingsd.conf
Gdk/WindowScalingFactor = 4
Gdk/UnscaledDPI = 98340
```