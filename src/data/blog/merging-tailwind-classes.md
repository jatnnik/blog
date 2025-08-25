---
title: Merging Tailwind Classes
pubDate: 2024-02-28
---

# Merging Tailwind Classes

[shadcn-ui](https://ui.shadcn.com/) contains a nifty utility function to conditionally merge Tailwind classes.

**Note:** Install `clsx` and `tailwind-merge` to use this.

```tsx
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```
