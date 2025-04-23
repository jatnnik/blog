---
title: "Git: Case-Sensitive File Renaming"
date: 2025-04-23
---

# Git: Case-Sensitive File Renaming

When renaming a file on macOS, git won't detect a change when you only change the case. `git mv` to the rescue!

```zsh
git mv Component.tsx component.tsx
```
