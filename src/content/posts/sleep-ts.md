---
title: How to Sleep in TypeScript
date: 2024-02-12
---

# How to Sleep in TypeScript

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
