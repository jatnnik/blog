---
title: Sleeping in TypeScript
publishDate: 2024-02-12
isDraft: false
---

This is a handy one-liner for letting your TypeScript code take little naps:

```ts
const sleep = (ms: number) => new Promise(resolve, setTimeout(resolve, ms));
```
