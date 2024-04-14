---
title: Object Oriented vs. Functional Programming
pubDate: 2024-04-14
published: true
---

If you are writing code, there are certainly some terms you often hear but can't really explain. For me this is _Object Oriented Programming (OOP)_ and _Functional Programming (FP)_. In my daily work as a full-stack web developer, I just write code. I don't really think about if it's object oriented or functional. I rather try to follow best practices like _KISS_ (Keep It Simple, Stupid), _DRY_ (Don't Repeat Yourself) and the principles of _[Clean Code](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29)_.

Let's look at two simple examples for object oriented and functional code. I wrote it in JavaScript, because that's the language I'm the most fluent in.

## Object Oriented

Let's say you have a cat, and now you want to describe that cat in code. Your cat has multiple _properties_ like name, age, fur color etc. She also has some _methods_, or interactions, like purring, meowing etc.

Using an object oriented approach, you would create a `Cat` class, which is like a blueprint for a cat. Your cat would then be an _instance_ of the class.

```js
class Cat {
  strokeCount = 0;

  // Define the properties of a cat.
  constructor(name, age, furColor) {
    this.name = name;
    this.age = age;
    this.furColor = furColor;
  }

  // Define some methods each cat has.
  meow() {
    alert("Meow!");
  }

  purr() {
    alert("Purrrrr");
  }

  stroke() {
    this.strokeCount += 1;
    this.purr();
  }
}

// Create a cat by using the class.
const myCat = new Cat("Elsa", 2, "black");

// Access your cat's properties.
console.log(
  `${myCat.name} is ${myCat.age} ${myCat.age === 1 ? "year" : "years"} old.`,
);

// Interact with the cat by calling her methods.
myCat.meow(); // Output: 'Meow!'
myCat.stroke(); // Output: 'Purrrrr'
```

By using this approach, each instance of the `Cat` class has a state, which contains the properties and fields – e.g. the `strokeCount`.

## Functional Programming

Now, let's describe our cat using a functional approach. In functional programming, you use functions instead of classes to create and modify data. This removes the concept of local state and adds a concept called _immutability_, which means that data never changes after it is created. You'd rather write a function that takes data as an input and returns a new, modified outcome. This often makes code simpler to maintain, understand and debug.

You also want to write _pure_ functions, which are functions with no _side effects_. An example for a side effect is the `stroke()` method from above.

```js
class Cat {
  //...

  stroke() {
    this.strokeCount += 1; // Side effect!
    this.purr();
  }
}
```

By increasing the `strokeCount` field, we modified local state. Imagine we do this in many places and now you need to debug where a buggy state assignment happens – this can quickly get a bit chaotic. So using pure functions with no side effects, which always generate the same output for a given input, we make our code simpler.

Let's look at the functional code for our cat:

```js
// This function creates a new cat.
function makeCat(name, age, furColor) {
  // We describe the methods by creating functions too.
  function purr() {
    alert("Purrrrr");
  }

  // Return an object with the given properties and some methods.
  return {
    name,
    age,
    furColor,
    strokeCount: 0,
    meow: () => alert("Meow!"),
    purr,
  };
}

// Create a cat by calling the function.
let myCat = makeCat("Elsa", 2, "black");
```

Notice that we didn't implement a `stroke` method yet – instead of adding local state to the `makeCat` function, we'll write a function for it:

```js
function strokeCat(cat) {
  alert("Purrrrr");

  return {
    ...cat,
    strokeCount: cat.strokeCount + 1,
  };
}

// Stroke the cat by calling the function.
myCat = strokeCat(myCat);
```

This produces the same output as the object oriented approach, but is easier to understand and simpler to test. Also, the `strokeCat` function doesn't introduce any side effects.

## Résumé

Functional Programming definitely has some obvious benefits, so from now on I will try to think about a functional approach before writing my code.
