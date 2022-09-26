---
title: Hi-DPI scale setting
lang: en-US
---

# Hi-DPI scale setting

## 4K monitor scale(200%)
__Windows__
```
GDK_SCALE=2
// GDK_DPI_SCALE=96
```

__macOS__
```
// Shell environments 
GDK_SCALE = 2
// GDK_DPI_SCALE = 96
```

__Linux / GTK__
```
// Shell environments 
GDK_SCALE = 2
// GDK_DPI_SCALE = 96

or

// (X11 Server) XSettings value
Gdk/WindowScalingFactor = 2
Gdk/UnscaledDPI = 98340
```

__Linux / KDE__
```
// Shell environments 
unset GDK_SCALE
unset GDK_DPI_SCALE

// (X11 Server) XSettings value: ~/.config/xsettingsd/xsettingsd.conf
Gdk/WindowScalingFactor = 2
Gdk/UnscaledDPI = 98340
```

## 2K ~ 3K monitor scale(150%)
__Windows__
```
GDK_SCALE=1.5
// GDK_DPI_SCALE=96
```

__macOS__
```
// Shell environments 
GDK_SCALE = 1.5
// GDK_DPI_SCALE = 96
```

__Linux / GTK__
```
// Shell environments 
GDK_SCALE = 1.5
// GDK_DPI_SCALE = 96

or

// (X11 Server) XSettings value
Gdk/WindowScalingFactor = 1.5
Gdk/UnscaledDPI = 98340
```

__Linux / KDE__
```
// Shell environments 
unset GDK_SCALE
unset GDK_DPI_SCALE

// (X11 Server) XSettings value: ~/.config/xsettingsd/xsettingsd.conf
Gdk/WindowScalingFactor = 1.5
Gdk/UnscaledDPI = 98340
```