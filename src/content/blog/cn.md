---
title: Merging Tailwind classes
pubDate: 2024-02-28
image: "/posts/2024/cn.jpg"
published: true
---

[shadcn-ui](https://ui.shadcn.com/) contains a nifty utility function to conditionally merge Tailwind classes.

Note: Install `clsx` and `tailwind-merge` to use this.

```tsx
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```
