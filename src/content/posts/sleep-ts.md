---
title: How to sleep in TypeScript
publishDate: 2024-02-12
isDraft: false
---

# How to sleep in TypeScript

This is a handy one-liner for delaying code execution in TypeScript:

```ts
const sleep = (ms: number) => new Promise(resolve, setTimeout(resolve, ms))
```

## Usage

```ts
async function doSomething() {
  sleep(1000)
  doSomethingElse()
}
```
