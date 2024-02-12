---
title: Sleeping in JavaScript
pubDate: 2024-02-12
published: true
---

This is a handy one-liner for letting your code take little naps:

```ts
const sleep = (ms: number) => new Promise(resolve, setTimeout(resolve, ms));
```
