---
title: Hi-DPI scale setting
lang: en-US
---

# Hi-DPI scale setting
GTK4 has HiDPI support on all platforms, all GTK4 app will scale with system scale setting automatically. sometimes, the scaling will not be working, so you should try another way to do it:

## 4K monitor scale(200%)
### Windows
```
// Environment variables(integer)
GDK_SCALE = 2
// GDK_DPI_SCALE=96
```

### macOS
```
// Shell environments 
GDK_SCALE = 2
// GDK_DPI_SCALE = 96
```

### Linux / GTK
```
// Shell environments 
GDK_SCALE = 2
// GDK_DPI_SCALE = 96

or

// (X11 Server) XSettings value
Gdk/WindowScalingFactor = 2
Gdk/UnscaledDPI = 98340
```

### Linux / KDE
```
// Shell environments 
unset GDK_SCALE
unset GDK_DPI_SCALE

// (X11 Server) XSettings value: ~/.config/xsettingsd/xsettingsd.conf
Gdk/WindowScalingFactor = 2
Gdk/UnscaledDPI = 98340
```

## 8K monitor scale(400%)
### Windows
```
GDK_SCALE = 4
// GDK_DPI_SCALE=96
```

### macOS
```
// Shell environments 
GDK_SCALE = 4
// GDK_DPI_SCALE = 96
```

### Linux / GTK
```
// Shell environments 
GDK_SCALE = 4
// GDK_DPI_SCALE = 96

or

// (X11 Server) XSettings value
Gdk/WindowScalingFactor = 4
Gdk/UnscaledDPI = 98340
```

### Linux / KDE
```
// Shell environments 
unset GDK_SCALE
unset GDK_DPI_SCALE

// (X11 Server) XSettings value: ~/.config/xsettingsd/xsettingsd.conf
Gdk/WindowScalingFactor = 4
Gdk/UnscaledDPI = 98340
```