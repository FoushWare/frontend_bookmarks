# 🧠 Frontend Interview Quiz — Complete Reference

> From basic to advanced: test how well you know JavaScript, React, TypeScript, CSS, and more. Answers are in the collapsed sections below the questions — click to expand. Good luck! ❤️

---

## 📑 Table of Contents

- [🟨 JavaScript Core](#-javascript-core)
- [⚛️ React](#️-react)
- [🔷 TypeScript](#-typescript)
- [🎨 CSS & Styling](#-css--styling)
- [🚀 Performance & Web Vitals](#-performance--web-vitals)
- [🧪 Testing](#-testing)
- [♿ Accessibility](#-accessibility)
- [🔌 APIs & Data Fetching](#-apis--data-fetching)
- [🔄 State Management](#-state-management)
- [🏗️ System Design](#️-system-design)
- [🔐 Security](#-security)
- [📦 Build Tools & Bundlers](#-build-tools--bundlers)
- [🌐 Web Fundamentals & Browser](#-web-fundamentals--browser)
- [🐙 Git & Workflow](#-git--workflow)
- [🤖 Next.js & SSR](#-nextjs--ssr)

---

## 🟨 JavaScript Core

### 🔹 Scope & Hoisting

---

**1. What's the output?**

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}
sayHi();
```

- A: `Lydia` and `undefined`
- B: `Lydia` and `ReferenceError`
- C: `ReferenceError` and `21`
- D: `undefined` and `ReferenceError`

<details>
<summary><b>Answer</b></summary>

**D: `undefined` and `ReferenceError`**

`var name` is hoisted and initialized as `undefined`. `let age` is hoisted but sits in the **Temporal Dead Zone** until the declaration line is reached — accessing it before then throws a `ReferenceError`.

</details>

---

**2. What's the output?**

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` and `0 1 2`
- B: `0 1 2` and `3 3 3`
- C: `3 3 3` and `0 1 2`
- D: `3 3 3` and `3 3 3`

<details>
<summary><b>Answer</b></summary>

**C: `3 3 3` and `0 1 2`**

`var` is function-scoped — all three callbacks share the **same** `i`. By the time they run, `i` is `3`. `let` is block-scoped — each iteration creates a **new binding**, so each callback closes over its own value.

</details>

---

**3. What's the output?**

```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());
```

- A: `20` and `62.83`
- B: `20` and `NaN`
- C: `20` and `63`
- D: `NaN` and `63`

<details>
<summary><b>Answer</b></summary>

**B: `20` and `NaN`**

`diameter` is a regular method — `this` refers to `shape`. `perimeter` is an **arrow function** — arrow functions inherit `this` from the outer (lexical) scope, not from the object. `this.radius` is `undefined`, making `2 * Math.PI * undefined` → `NaN`.

</details>

---

**4. What's the output?**

```javascript
+true;
!"Lydia";
```

- A: `1` and `false`
- B: `false` and `NaN`
- C: `false` and `false`

<details>
<summary><b>Answer</b></summary>

**A: `1` and `false`**

The unary `+` operator converts `true` → `1`. `"Lydia"` is truthy, so `!` negates it to `false`.

</details>

---

**5. Which option is NOT correct?**

```javascript
const bird = {
  size: "small",
};

const mouse = {
  name: "Mickey",
  small: true,
};
```

- A: `mouse[bird.size]`
- B: `mouse[bird["size"]]`
- C: `mouse["small"]`
- D: `mouse.bird.size`

<details>
<summary><b>Answer</b></summary>

**D: `mouse.bird.size`**

`mouse` has no `bird` property — `mouse.bird` is `undefined`, and `undefined.size` throws a `TypeError`. The other options all evaluate to `mouse["small"]` → `true`.

</details>

---

**6. What's the output?**

```javascript
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
```

- A: `Hello`
- B: `undefined`
- C: `Hey!`
- D: `ReferenceError`

<details>
<summary><b>Answer</b></summary>

**A: `Hello`**

Objects are assigned **by reference**. Both `c` and `d` point to the same object in memory. Mutating `c.greeting` is visible through `d`.

</details>

---

**7. What's the output?**

```javascript
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```

- A: `true` `false` `true`
- B: `false` `false` `true`
- C: `true` `false` `false`
- D: `false` `true` `true`

<details>
<summary><b>Answer</b></summary>

**C: `true` `false` `false`**

`new Number(3)` creates a **Number object**, not a primitive. `==` coerces the object to its primitive value → `true`. `===` checks both value and type — a primitive `number` vs. an `object` → `false`.

</details>

---

**8. What's the output?**

```javascript
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
console.log(freddie.colorChange("orange"));
```

- A: `orange`
- B: `purple`
- C: `green`
- D: `TypeError`

<details>
<summary><b>Answer</b></summary>

**D: `TypeError`**

`colorChange` is a **static** method — it belongs to the class itself, not to instances. `freddie.colorChange` is `undefined`, so calling it throws `TypeError: freddie.colorChange is not a function`.

</details>

---

### 🔹 Closures & Scope

---

**9. What's the output?**

```javascript
const add = () => {
  const cache = {};
  return (num) => {
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return `Calculated! ${result}`;
    }
  };
};

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));
```

- A: `Calculated! 20` `Calculated! 20` `Calculated! 20`
- B: `Calculated! 20` `From cache! 20` `Calculated! 20`
- C: `Calculated! 20` `From cache! 20` `From cache! 20`
- D: `Calculated! 20` `From cache! 20` `Error`

<details>
<summary><b>Answer</b></summary>

**C: `Calculated! 20` `From cache! 20` `From cache! 20`**

This is **memoization** via closure. `cache` persists between calls because of the closure. Both `10` and `5 * 2` evaluate to the same number, so the third call hits the cache too.

</details>

---

**10. What's the output?**

```javascript
let x = 1;
const list = [{ x: 2 }, { x: 3 }];

function addToX(obj) {
  obj.x += x;
  return obj;
}

const newList = list.map(addToX);
console.log(x);
console.log(newList);
```

- A: `1` and `[{x: 3}, {x: 4}]`
- B: `1` and `[{x: 3}, {x: 4}]` — but original list is mutated
- C: `3` and `[{x: 3}, {x: 4}]`
- D: `1` and `[{x: 2}, {x: 3}]`

<details>
<summary><b>Answer</b></summary>

**B: `1` and `[{x: 3}, {x: 4}]` — original objects are mutated**

`obj.x += x` mutates the original objects in `list` because objects are passed by reference. `x` itself (the number) is unchanged. `list[0].x` is now `3` and `list[1].x` is now `4`.

</details>

---

### 🔹 Prototypes & Classes

---

**11. What's the output?**

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
```

- A: `TypeError`
- B: `"Lydia Hallie"`
- C: `undefined undefined`
- D: `ReferenceError`

<details>
<summary><b>Answer</b></summary>

**A: `TypeError`**

`getFullName` is added to the **constructor function** itself, not to `Person.prototype`. Instances don't have access to it. Use `Person.prototype.getFullName = ...` to make it available on instances.

</details>

---

**12. What's the output?**

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);
```

- A: `Person { firstName: "Lydia", lastName: "Hallie" }` and `undefined`
- B: `Person { firstName: "Lydia", ... }` and `Person { firstName: "Sarah", ... }`
- C: `Person { firstName: "Lydia", ... }` and `{}`
- D: `Person { firstName: "Lydia", ... }` and `ReferenceError`

<details>
<summary><b>Answer</b></summary>

**A: `Person { firstName: "Lydia", lastName: "Hallie" }` and `undefined`**

`new Person()` creates an instance and returns it. `Person()` without `new` is a plain function call — `this` sets properties on the global object (or errors in strict mode), and the function returns nothing → `undefined`.

</details>

---

**13. What's the output?**

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function() {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog("Mara");
pet.bark();

delete Dog.prototype.bark;

pet.bark();
```

- A: `"Woof I am Mara"` then `TypeError`
- B: `"Woof I am Mara"` then `"Woof I am Mara"`
- C: `"Woof I am Mara"` then `undefined`
- D: `TypeError` then `TypeError`

<details>
<summary><b>Answer</b></summary>

**A: `"Woof I am Mara"` then `TypeError`**

After `delete Dog.prototype.bark`, the method is permanently removed from the prototype. The second `pet.bark()` throws `TypeError: pet.bark is not a function`.

</details>

---

**14. What's the output?**

```javascript
class Counter {
  #count = 0;

  increment() {
    this.#count++;
  }

  getCount() {
    return this.#count;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.getCount());
console.log(counter.#count);
```

- A: `2` and `2`
- B: `2` and `undefined`
- C: `2` and `SyntaxError`
- D: `undefined` and `undefined`

<details>
<summary><b>Answer</b></summary>

**C: `2` and `SyntaxError`**

`#count` is a **private class field** — only accessible inside the class body. Accessing `counter.#count` from outside the class is a `SyntaxError` at parse time.

</details>

---

### 🔹 Async JavaScript

---

**15. What's the output?**

```javascript
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
```

- A: `"one"`
- B: `"two"`
- C: `"two" "one"`
- D: `"one" "two"`

<details>
<summary><b>Answer</b></summary>

**B: `"two"`**

`Promise.race` resolves/rejects with the **first** settled promise. `secondPromise` resolves after 100ms — before `firstPromise` at 500ms.

</details>

---

**16. What's the output?**

```javascript
async function getData() {
  return await Promise.resolve("I made it!");
}

const data = getData();
console.log(data);
```

- A: `"I made it!"`
- B: `Promise { <pending> }`
- C: `Promise { "I made it!" }`
- D: `undefined`

<details>
<summary><b>Answer</b></summary>

**B: `Promise { <pending> }`**

`async` functions always return a Promise. The `console.log` runs synchronously before the async function resolves — so the Promise is still pending at that point.

</details>

---

**17. What's the output?**

```javascript
const myPromise = Promise.resolve(Promise.resolve("Promise!"));

function funcOne() {
  setTimeout(() => console.log("Timeout 1!"), 0);
  myPromise.then(res => res).then(res => console.log(`${res} 1!`));
  console.log("Last line 1!");
}

function funcTwo() {
  myPromise.then(res => console.log(`${res} 2!`));
  setTimeout(() => console.log("Timeout 2!"), 0);
  console.log("Last line 2!");
}

funcOne();
funcTwo();
```

- A: `Promise! 1!` `Last line 1!` `Promise! 2!` `Last line 2!` `Timeout 1!` `Timeout 2!`
- B: `Last line 1!` `Last line 2!` `Promise! 1!` `Promise! 2!` `Timeout 1!` `Timeout 2!`
- C: `Last line 1!` `Promise! 1!` `Last line 2!` `Promise! 2!` `Timeout 1!` `Timeout 2!`
- D: `Last line 1!` `Last line 2!` `Promise! 1!` `Timeout 1!` `Promise! 2!` `Timeout 2!`

<details>
<summary><b>Answer</b></summary>

**B: `Last line 1!` `Last line 2!` `Promise! 1!` `Promise! 2!` `Timeout 1!` `Timeout 2!`**

Order of execution: **synchronous code** → **microtasks (Promises)** → **macrotasks (setTimeout)**. Synchronous lines run first, then the microtask queue drains completely, then timeouts.

</details>

---

**18. What does `Promise.allSettled` return?**

```javascript
const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Error");
const p3 = Promise.resolve("Also Success");

Promise.allSettled([p1, p2, p3]).then(console.log);
```

- A: Only the resolved values
- B: Throws on first rejection
- C: An array of `{ status, value/reason }` objects for every promise
- D: `undefined`

<details>
<summary><b>Answer</b></summary>

**C: An array of `{ status, value/reason }` objects for every promise**

Unlike `Promise.all`, `Promise.allSettled` never short-circuits. Each result is `{ status: 'fulfilled', value: ... }` or `{ status: 'rejected', reason: ... }`.

</details>

---

**19. What's the output?**

```javascript
async function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield Promise.resolve(i);
  }
}

(async () => {
  const gen = range(1, 3);
  for await (const item of gen) {
    console.log(item);
  }
})();
```

- A: `Promise {1}` `Promise {2}` `Promise {3}`
- B: `1` `2` `3`
- C: `0` `1` `2`
- D: `undefined` `undefined` `undefined`

<details>
<summary><b>Answer</b></summary>

**B: `1` `2` `3`**

`for await...of` automatically awaits each yielded Promise. Even though `Promise.resolve(i)` is yielded, `for await` unwraps the resolved value.

</details>

---

### 🔹 Type Coercion & Operators

---

**20. What's the output?**

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `undefined`

<details>
<summary><b>Answer</b></summary>

**B: `"string"`**

`typeof 1` returns the string `"number"`. Then `typeof "number"` returns `"string"`. `typeof` always returns a string.

</details>

---

**21. What's the output?**

```javascript
console.log(3 + 4 + "5");
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

<details>
<summary><b>Answer</b></summary>

**B: `"75"`**

Evaluated left-to-right: `3 + 4` → `7` (number addition). Then `7 + "5"` → `"75"` (string concatenation by type coercion).

</details>

---

**22. What's the output?**

```javascript
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```

- A: `1` `1` `2`
- B: `1` `2` `2`
- C: `0` `2` `2`
- D: `0` `1` `2`

<details>
<summary><b>Answer</b></summary>

**C: `0` `2` `2`**

`number++` is **postfix** — returns `0` first, then increments to `1`. `++number` is **prefix** — increments to `2` first, then returns `2`.

</details>

---

**23. What's the output?**

```javascript
// 🎉 Classic!
const output = `${[] && "Im"}possible! You should${
  "" && `n't`
} see a therapist after so much JavaScript lol`;
console.log(output);
```

- A: `possible! You should see a therapist after so much JavaScript lol`
- B: `Impossible! You should see a therapist after so much JavaScript lol`
- C: `possible! You shouldn't see a therapist after so much JavaScript lol`
- D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`

<details>
<summary><b>Answer</b></summary>

**B: `Impossible! You should see a therapist after so much JavaScript lol`**

`[]` is **truthy** → `[] && "Im"` returns `"Im"`. `""` is **falsy** → `"" && "n't"` returns `""`. Result: `"Im" + "possible! You should" + "" + " see..."` → `Impossible! You should see...`.

</details>

---

**24. What's the output?**

```javascript
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);
```

- A: `false` `true` `false` `true`
- B: `false` `true` `true` `true`
- C: `true` `true` `false` `true`
- D: `true` `true` `true` `true`

<details>
<summary><b>Answer</b></summary>

**C: `true` `true` `false` `true`**

Object keys are always strings — both `"1"` and `1` match. Sets are **type-strict** — `set.has("1")` is `false` because the set contains the number `1`, not the string `"1"`.

</details>

---

**25. What's the output?**

```javascript
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

- A: `123`
- B: `456`
- C: `undefined`
- D: `ReferenceError`

<details>
<summary><b>Answer</b></summary>

**B: `456`**

Object keys are always strings. Both `b` and `c` stringify to `"[object Object]"`. So `a["[object Object]"]` is set to `123`, then overwritten with `456`.

</details>

---

### 🔹 ES6+ Features

---

**26. What's the output?**

```javascript
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
```

- A: `'{"username":"lydiahallie","level":19,"health":90}'`
- B: `'{"level":19,"health":90}'`
- C: `'{"health":90}'`
- D: `'{"username":"lydiahallie"}'`

<details>
<summary><b>Answer</b></summary>

**B: `'{"level":19,"health":90}'`**

The second argument to `JSON.stringify` is a **replacer array** — only the listed property names are included. `username` is excluded.

</details>

---

**27. What's the output?**

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍍";

console.log(food);
```

- A: `["🍍", "🍫", "🥑", "🍔"]`
- B: `["🍕", "🍫", "🥑", "🍔"]`
- C: `["🍕", "🍍", "🥑", "🍔"]`
- D: `ReferenceError`

<details>
<summary><b>Answer</b></summary>

**B: `["🍕", "🍫", "🥑", "🍔"]`**

Strings are **primitives** — copied by value, not reference. `info.favoriteFood` holds a copy of `"🍕"`, not a pointer to `food[0]`. Changing `info.favoriteFood` has no effect on the array.

</details>

---

**28. What's the output?**

```javascript
function* generator(I) {
  yield I;
  yield I * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
```

- A: `10` `20` `20`
- B: `10` `20` `undefined`
- C: `10` `10` `undefined`
- D: `Error`

<details>
<summary><b>Answer</b></summary>

**B: `10` `20` `undefined`**

Each `gen.next()` resumes to the next `yield`. After both yields are exhausted, the third call returns `{ value: undefined, done: true }`.

</details>

---

**29. What's the output?**

```javascript
const person = {
  name: "Lydia",
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y);
}
```

- A: `name` `Lydia` and `age` `21`
- B: `["name", "Lydia"]` and `["age", 21]`
- C: `"name"` `"age"` and `"Lydia"` `21`
- D: `Error`

<details>
<summary><b>Answer</b></summary>

**A: `name Lydia` and `age 21`**

`Object.entries(person)` returns `[["name", "Lydia"], ["age", 21]]`. Destructuring each entry as `[x, y]` gives the key and value.

</details>

---

**30. What's the output?**

```javascript
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit];
}

getItems(["banana", "apple"], "pear", "orange");
```

- A: `["banana", "apple", "pear", "orange"]`
- B: `[["banana", "apple"], "pear", "orange"]`
- C: `["banana", "apple", ["pear"], "orange"]`
- D: `SyntaxError`

<details>
<summary><b>Answer</b></summary>

**D: `SyntaxError`**

A **rest parameter** (`...args`) must always be the **last** parameter in a function. Placing another parameter after it is a `SyntaxError` at parse time.

</details>

---

**31. What's the output?**

```javascript
const user = { name: "Lydia", age: 21, email: "lydia@email.com" };
const { name, ...details } = user;
console.log(name);
console.log(details);
```

- A: `"Lydia"` and `{}`
- B: `"Lydia"` and `{ age: 21, email: "lydia@email.com" }`
- C: `"Lydia"` and `{ name: "Lydia", age: 21 }`
- D: `Error`

<details>
<summary><b>Answer</b></summary>

**B: `"Lydia"` and `{ age: 21, email: "lydia@email.com" }`**

Rest syntax in destructuring collects all **remaining** properties into a new object.

</details>

---

**32. What's the output?**

```javascript
const add = x => x + x;
console.log(add`Hello`);
```

- A: `NaN`
- B: `"HelloHello"`
- C: `["Hello"]`
- D: `Error`

<details>
<summary><b>Answer</b></summary>

**B: `"HelloHello"`**

This is a **tagged template literal**. `add` is called with the template parts array `["Hello"]` as the first argument. `x = ["Hello"]`, and `["Hello"] + ["Hello"]` coerces both arrays to strings → `"HelloHello"`.

</details>

---

### 🔹 Error Handling

---

**33. What's the output?**

```javascript
function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("It worked!", data);
  } catch (e) {
    console.log("Oh no an error:", e);
  }
}

sayHi();
```

- A: `It worked! Hello world!`
- B: `Oh no an error: undefined`
- C: `SyntaxError: can only throw Error objects`
- D: `Oh no an error: Hello world!`

<details>
<summary><b>Answer</b></summary>

**D: `Oh no an error: Hello world!`**

In JavaScript you can `throw` any value — not just `Error` objects. The string `"Hello world!"` is caught by the `catch` block as `e`.

</details>

---

**34. What's the output?**

```javascript
try {
  (() => {
    throw new TypeError("Error!");
  })();
} catch (e) {
  if (e instanceof TypeError) {
    console.log("TypeError");
  } else {
    console.log("Other error");
  }
}
```

- A: `TypeError`
- B: `Other error`
- C: `SyntaxError`
- D: `Uncaught TypeError: Error!`

<details>
<summary><b>Answer</b></summary>

**A: `TypeError`**

The IIFE throws a `TypeError`. The `catch` block catches it. `e instanceof TypeError` is `true`.

</details>

---

### 🔹 Functional & Array Methods

---

**35. What's the output?**

```javascript
[1, 2, 3].map(num => {
  if (typeof num === "number") return;
  return num * 2;
});
```

- A: `[]`
- B: `[null, null, null]`
- C: `[undefined, undefined, undefined]`
- D: `[1, 2, 3]`

<details>
<summary><b>Answer</b></summary>

**C: `[undefined, undefined, undefined]`**

Every element is a number, so the `if` condition is always `true` and `return;` executes — returning `undefined`. `map` always produces an array of the same length.

</details>

---

**36. What's the output?**

```javascript
const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);
```

- A: `["1 + 2", "1 * 2", "1 / 2"]`
- B: `[3, 2, 0.5]`
- C: `[1, 1, 1]`
- D: `[null, null, null]`

<details>
<summary><b>Answer</b></summary>

**B: `[3, 2, 0.5]`**

Array literal values are **evaluated immediately** when the array is created.

</details>

---

**37. What's the output?**

```javascript
const arr = [1, 2, 3, 4, 5];
const [y, z] = arr;
console.log(y, z);
```

- A: `1` `2`
- B: `1` `[2, 3, 4, 5]`
- C: `1` `undefined`
- D: `[1, 2]` `[3, 4, 5]`

<details>
<summary><b>Answer</b></summary>

**A: `1` `2`**

Array destructuring assigns values by position (left to right). `y` = `1`, `z` = `2`.

</details>

---

### 🔹 Objects & WeakRef

---

**38. What's the output?**

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details>
<summary><b>Answer</b></summary>

**C: `{ a: "three", b: "two" }`**

Duplicate keys in an object literal don't throw an error — the **last value wins**. Order is preserved positionally, but the value is overwritten.

</details>

---

**39. What's the output?**

```javascript
const map = new Map();
const obj = { name: "Lydia" };

map.set(obj, "Works!");
map.delete(obj);

console.log(map.size);
```

- A: `0`
- B: `1`
- C: `false`
- D: `Error`

<details>
<summary><b>Answer</b></summary>

**A: `0`**

`map.set` adds the entry (size = 1). `map.delete(obj)` removes it (size = 0). `Map.size` is a property, not a method.

</details>

---

**40. What is a WeakMap used for?**

- A: A slower version of Map
- B: A Map whose object keys are held weakly — they don't prevent garbage collection
- C: A Map that only holds primitive keys
- D: A Map with a maximum size limit

<details>
<summary><b>Answer</b></summary>

**B: A Map whose object keys are held weakly — don't prevent garbage collection**

When the only remaining reference to an object key is in a `WeakMap`, the garbage collector can reclaim it. Useful for attaching metadata to objects without causing memory leaks.

</details>

---

---

## ⚛️ React

### 🔹 Core Concepts

---

**41. What is the Virtual DOM?**

- A: A copy of the real DOM stored in the browser
- B: A lightweight in-memory representation of the DOM
- C: A database of UI elements
- D: A CSS abstraction

<details>
<summary><b>Answer</b></summary>

**B: A lightweight in-memory representation of the DOM**

React keeps a virtual DOM tree in memory and syncs it with the real DOM via reconciliation — only the minimal set of actual DOM operations are performed per update.

</details>

---

**42. What is React Fiber?**

- A: A CSS-in-JS library
- B: A network request manager
- C: React's internal reconciliation engine enabling incremental, interruptible rendering
- D: A deprecated feature replaced by hooks

<details>
<summary><b>Answer</b></summary>

**C: React's internal reconciliation engine enabling incremental, interruptible rendering**

Introduced in React 16, Fiber breaks rendering into small units of work that can be paused and resumed — enabling Suspense, concurrent features, and time-slicing.

</details>

---

**43. What is the difference between controlled and uncontrolled components?**

- A: Controlled use refs; uncontrolled use state
- B: Controlled have state managed by React; uncontrolled manage their own via the DOM
- C: They are the same
- D: Uncontrolled can't be used with forms

<details>
<summary><b>Answer</b></summary>

**B: Controlled have state managed by React; uncontrolled manage their own via the DOM**

In controlled components, form data is driven by `useState`. In uncontrolled, the DOM holds the data and you access it via `useRef`.

</details>

---

**44. What is `<React.StrictMode>` for?**

- A: Enables production optimizations
- B: In development: double-invokes functions to surface side effects, warns about deprecated APIs
- C: CSS strict mode equivalent
- D: Network isolation layer

<details>
<summary><b>Answer</b></summary>

**B: In development — double-invokes functions to surface side effects, warns about deprecated APIs**

Strict Mode has **no effect in production**. It's a developer tool to catch bugs early. In React 18+, it also simulates mounting components twice to detect cleanup issues.

</details>

---

**45. What problem does using array index as `key` cause?**

- A: Not a valid JavaScript value
- B: UI bugs when items are reordered, inserted, or deleted
- C: Forces re-renders on every change
- D: No problem — it's the recommended approach

<details>
<summary><b>Answer</b></summary>

**B: UI bugs when items are reordered, inserted, or deleted**

When list order changes, the same index maps to a different item — React's diffing gets confused, causing stale component state or wrong DOM node reuse.

</details>

---

### 🔹 Hooks

---

**46. When does `useEffect` with `[]` run?**

- A: On every render
- B: Never
- C: Only once after the initial render (mount)
- D: Only on unmount

<details>
<summary><b>Answer</b></summary>

**C: Only once after the initial render (mount)**

Empty `[]` = no dependencies to watch. Effect runs once on mount; cleanup runs on unmount.

</details>

---

**47. What does the cleanup function in `useEffect` do?**

- A: Deletes component state
- B: Runs before the next effect or on unmount — cancels subscriptions/timers
- C: Prevents the effect from running
- D: Resets the dependency array

<details>
<summary><b>Answer</b></summary>

**B: Runs before the next effect or on unmount — cancels subscriptions/timers**

Essential to prevent memory leaks. Always clear `setInterval`, abort `fetch`, or unsubscribe from event emitters in the cleanup.

</details>

---

**48. What is the difference between `useMemo` and `useCallback`?**

- A: No difference
- B: `useMemo` memoizes a computed value; `useCallback` memoizes a function reference
- C: `useCallback` memoizes a value; `useMemo` memoizes a function
- D: Both only work with async functions

<details>
<summary><b>Answer</b></summary>

**B: `useMemo` memoizes a computed value; `useCallback` memoizes a function reference**

`useCallback(fn, deps)` ≡ `useMemo(() => fn, deps)`. Both recompute only when dependencies change.

</details>

---

**49. What does `useRef` return?**

- A: Triggers re-render when `.current` changes
- B: A mutable object whose `.current` persists across renders without causing re-renders
- C: Global state
- D: Replaces `useEffect`

<details>
<summary><b>Answer</b></summary>

**B: A mutable `.current` that persists without causing re-renders**

Use cases: DOM node access, previous value storage, timer IDs, or any mutable value that shouldn't trigger re-renders.

</details>

---

**50. What is `useLayoutEffect` vs `useEffect`?**

- A: Only works on mobile
- B: Fires synchronously after DOM mutations but before browser paint; `useEffect` fires after paint
- C: Runs before mount
- D: Identical to `useEffect`

<details>
<summary><b>Answer</b></summary>

**B: Fires synchronously after DOM mutations but before browser paint**

Use for measuring layout (element dimensions) and synchronously applying changes to avoid visual flicker. Use `useEffect` for everything else.

</details>

---

**51. What is `useId` for?**

- A: Generating unique database record IDs
- B: Generating stable, unique IDs for accessibility attributes that are consistent across server and client renders
- C: Identifying the current user
- D: Resetting component state

<details>
<summary><b>Answer</b></summary>

**B: Stable, unique IDs consistent across SSR and client hydration**

Avoids hydration mismatches when wiring `htmlFor`/`id` pairs for form labels. Don't use it for list keys.

</details>

---

### 🔹 Performance

---

**52. What does `React.memo` do?**

- A: Prevents re-render if props don't change (shallow comparison)
- B: Stores data in memory
- C: Re-renders components faster
- D: Caches API calls

<details>
<summary><b>Answer</b></summary>

**A: Prevents re-render if props don't change (shallow comparison)**

Wrap with `React.memo` and pass stable callback refs via `useCallback` for the optimization to work correctly.

</details>

---

**53. What does `startTransition` do in React 18?**

- A: Starts a CSS animation
- B: Marks a state update as non-urgent — React can defer it without blocking urgent updates
- C: Transitions between React versions
- D: Triggers a page navigation

<details>
<summary><b>Answer</b></summary>

**B: Marks a state update as non-urgent — React can defer it**

Ideal for expensive, non-user-facing updates like filtering a large list. The UI stays responsive while deferred work runs in the background.

</details>

---

**54. What does `React.lazy` do?**

- A: Slows down React for debugging
- B: Dynamically imports a component, deferring its loading until it's rendered
- C: Memoizes a component
- D: Replaces `useEffect`

<details>
<summary><b>Answer</b></summary>

**B: Dynamically imports a component, deferring loading until rendered**

`const Comp = React.lazy(() => import('./Comp'))`. Must be inside a `<Suspense fallback={...}>` boundary.

</details>

---

### 🔹 Advanced Patterns

---

**55. What is a Higher-Order Component (HOC)?**

- A: A component with high render priority
- B: A function that takes a component and returns a new, enhanced component
- C: A CSS wrapper
- D: A lifecycle method

<details>
<summary><b>Answer</b></summary>

**B: A function that takes a component and returns a new, enhanced component**

Pattern predating hooks. Examples: `withAuth(Component)`, `connect()` in React-Redux. Custom hooks are often preferred today.

</details>

---

**56. What is `forwardRef` for?**

- A: Forwarding props to parents
- B: Allowing a parent to access a DOM node inside a child via a forwarded ref
- C: Memoizing child components
- D: Forwarding context values

<details>
<summary><b>Answer</b></summary>

**B: Allowing a parent to access a DOM node inside a child via a forwarded ref**

Common in component libraries: `React.forwardRef((props, ref) => <input ref={ref} {...props} />)`.

</details>

---

**57. What are React Server Components (RSC)?**

- A: Components only for Node.js
- B: Components that render on the server, access backends directly, and ship zero JS to the client
- C: SSR components that hydrate on the client
- D: A React Native concept

<details>
<summary><b>Answer</b></summary>

**B: Server-rendered, backend-accessible, zero client JS**

Cannot use hooks or browser APIs. Client components opt in with `"use client"`. RSCs dramatically reduce bundle size.

</details>

---

**58. What is `ReactDOM.createPortal` for?**

- A: Importing remote components
- B: Rendering a child into a different DOM node outside the parent hierarchy
- C: Routing
- D: Database access

<details>
<summary><b>Answer</b></summary>

**B: Rendering a child into a DOM node outside the parent hierarchy**

Essential for modals, tooltips, and dropdowns that need to escape `overflow: hidden` or `z-index` stacking context constraints.

</details>

---

**59. What is the render props pattern?**

- A: Passing JSX children to configure output
- B: Sharing code via a prop that is a function returning JSX
- C: Rendering props as HTML attributes
- D: A deprecated lifecycle pattern

<details>
<summary><b>Answer</b></summary>

**B: Sharing code via a prop that is a function returning JSX**

`<Mouse render={pos => <Cat position={pos} />} />`. Often replaced by custom hooks. Still used in some headless component APIs.

</details>

---

---

## 🔷 TypeScript

### 🔹 Type System

---

**60. What is the difference between `type` and `interface`?**

- A: No difference
- B: `interface` supports declaration merging and object shapes; `type` supports unions, intersections, and advanced types
- C: `type` is only for primitives
- D: `interface` can't be reused

<details>
<summary><b>Answer</b></summary>

**B: `interface` for object shapes + merging; `type` for unions, intersections, mapped/conditional types**

Rule of thumb: use `interface` for public APIs where declaration merging matters; use `type` for everything else.

</details>

---

**61. What is the difference between `unknown` and `any`?**

- A: Identical
- B: `unknown` requires type narrowing before use; `any` disables type checking entirely
- C: `any` requires narrowing; `unknown` does not
- D: Both disable type checking

<details>
<summary><b>Answer</b></summary>

**B: `unknown` requires narrowing; `any` disables checks**

`unknown` is the type-safe counterpart to `any`. You must prove the type with a guard before using it. Avoid `any` in production code.

</details>

---

**62. What does `never` represent?**

- A: Always undefined
- B: A value that can never occur — functions that always throw, or exhaustive type checks
- C: Accepts any value
- D: Alias for `void`

<details>
<summary><b>Answer</b></summary>

**B: A value that can never occur**

Used for exhaustive switch checks and functions that always throw or loop forever. If TypeScript infers `never` where you didn't expect, you have a logic error.

</details>

---

**63. What does `Partial<T>` do?**

- A: Makes all properties required
- B: Makes all properties optional
- C: Removes properties
- D: Converts types to strings

<details>
<summary><b>Answer</b></summary>

**B: Makes all properties optional**

Useful for update/patch payloads where only some fields may be sent.

</details>

---

**64. What does `Omit<T, K>` do?**

- A: Picks specified properties
- B: Creates a new type excluding the specified properties from T
- C: Makes properties required
- D: Merges two interfaces

<details>
<summary><b>Answer</b></summary>

**B: Creates a new type excluding the specified properties**

`Omit<User, 'password' | 'salt'>` creates a safe public-facing user type without sensitive fields.

</details>

---

**65. What is a discriminated union?**

- A: A union with duplicates
- B: A union of types sharing a common literal property used to narrow the type
- C: A union of only primitives
- D: A union that only works with classes

<details>
<summary><b>Answer</b></summary>

**B: A union sharing a common literal property for narrowing**

```ts
type Result =
  | { status: 'success'; data: string }
  | { status: 'error'; message: string };

// Checking result.status narrows to the correct variant
```

</details>

---

**66. What is a mapped type?**

- A: Based on JavaScript `Map`
- B: A type created by transforming properties of another type using `in keyof`
- C: Maps to a database schema
- D: A generic array type

<details>
<summary><b>Answer</b></summary>

**B: Transforms properties using `in keyof`**

```ts
type Optional<T> = { [K in keyof T]?: T[K] };
type Readonly<T> = { readonly [K in keyof T]: T[K] };
```

</details>

---

**67. What is a conditional type?**

- A: A type only inside `if` statements
- B: `T extends U ? X : Y` — selects one of two types based on a condition
- C: A type for booleans
- D: A runtime type check

<details>
<summary><b>Answer</b></summary>

**B: `T extends U ? X : Y`**

```ts
type IsString<T> = T extends string ? true : false;
type Flatten<T> = T extends Array<infer Item> ? Item : T;
```

</details>

---

**68. What does `as const` do?**

- A: Runtime constant cast
- B: Infers the most specific literal types and marks all properties `readonly`
- C: Prevents reassignment
- D: Converts a type to string literal

<details>
<summary><b>Answer</b></summary>

**B: Infers literal types and makes everything `readonly`**

```ts
const routes = ['/', '/about'] as const;
// Type: readonly ['/', '/about'] — not string[]
```

Useful for exhaustive checks and when you want TypeScript to track exact string values.

</details>

---

---

## 🎨 CSS & Styling

### 🔹 Layout

---

**69. What is the main difference between Flexbox and Grid?**

- A: No difference
- B: Flexbox is 1-dimensional; Grid is 2-dimensional
- C: Grid is deprecated
- D: Flexbox is slower

<details>
<summary><b>Answer</b></summary>

**B: Flexbox is 1D (row or column); Grid is 2D (rows and columns simultaneously)**

Use Flexbox for linear layouts (nav, button groups). Use Grid for two-dimensional page layouts or complex component grids.

</details>

---

**70. What does `position: sticky` do?**

- A: Fixes to the viewport permanently
- B: Stays in normal flow until a scroll threshold, then sticks within its scroll container
- C: Absolutely positions within its parent
- D: Removes from normal flow

<details>
<summary><b>Answer</b></summary>

**B: Normal flow until scroll threshold, then sticks**

Requires a `top`/`bottom`/`left`/`right` value. Sticks within its scroll container — once the container scrolls past, it unsticks.

</details>

---

**71. What does `box-sizing: border-box` change?**

- A: Adds a border to every element
- B: Makes `width`/`height` include padding and border, not just content
- C: Removes the box model
- D: Changes margin behavior

<details>
<summary><b>Answer</b></summary>

**B: `width`/`height` include padding and border**

The browser default `content-box` adds padding and border on top of the declared width. `border-box` keeps the total size as declared — generally far more intuitive.

</details>

---

**72. What is CSS specificity order?**

- A: Element → ID → Class → Inline → `!important`
- B: Inline → ID → Class → Element → `!important`
- C: Element → Class → ID → Inline → `!important`
- D: Class → Element → ID → Inline → `!important`

<details>
<summary><b>Answer</b></summary>

**C: Element → Class → ID → Inline → `!important`**

Specificity weights: element `(0,0,1)` < class/attribute/pseudo-class `(0,1,0)` < ID `(1,0,0)` < inline styles < `!important`.

</details>

---

**73. What is `clamp()` in CSS?**

- A: Flexbox shorthand
- B: Clamps a value between a minimum and maximum — great for fluid typography
- C: Border shorthand
- D: JavaScript-only function

<details>
<summary><b>Answer</b></summary>

**B: Clamps between min and max**

`font-size: clamp(1rem, 2.5vw, 2rem)` — scales with viewport, never smaller than `1rem` or larger than `2rem`. No media queries needed.

</details>

---

**74. What are CSS Container Queries?**

- A: Media queries for grid containers
- B: Queries applying styles based on an ancestor element's size — not the viewport
- C: Flexbox container rules
- D: JavaScript DOM queries

<details>
<summary><b>Answer</b></summary>

**B: Apply styles based on an ancestor's size**

`@container` enables truly component-driven responsive design. A card adapts to its container size regardless of viewport.

</details>

---

**75. What is the difference between `em` and `rem`?**

- A: No difference
- B: `em` is relative to the element's font-size; `rem` is relative to the root `html` font-size
- C: `rem` is relative to the parent; `em` to the root
- D: Both are absolute units

<details>
<summary><b>Answer</b></summary>

**B: `em` → element's font-size; `rem` → root font-size**

Nested `em` values compound. `rem` is always consistent — better for spacing and global typography.

</details>

---

**76. What is CSS `display: contents`?**

- A: Hides an element but keeps its space
- B: Makes the element's box disappear so children participate in the parent's layout directly
- C: Displays content in a modal
- D: Shows only text content

<details>
<summary><b>Answer</b></summary>

**B: Makes the box disappear so children participate directly in the parent layout**

Useful for semantic wrapper elements (like `<article>` or `<li>`) in a Flexbox/Grid context where you want children to be direct flex/grid items.

</details>

---

---

## 🧩 shadcn/ui

### ❓ What is shadcn/ui?

- [ ] A. A component library installed via npm  
- [ ] B. A CLI that copies prebuilt components into your project  
- [ ] C. A CSS framework  
- [ ] D. A state management tool  

<details>
<summary>✅ Answer</summary>

**B. A CLI that copies prebuilt components into your project**

</details>

---

### ❓ What styling approach does shadcn/ui use?

- [ ] A. Styled-components  
- [ ] B. CSS Modules  
- [ ] C. Tailwind CSS  
- [ ] D. Inline styles only  

<details>
<summary>✅ Answer</summary>

**C. Tailwind CSS**

</details>

---

### ❓ What is the main advantage of shadcn/ui?

- [ ] A. It reduces bundle size automatically  
- [ ] B. You fully own and customize the component code  
- [ ] C. It replaces React  
- [ ] D. It provides backend APIs  

<details>
<summary>✅ Answer</summary>

**B. You fully own and customize the component code**

</details>

---

### ❓ How are components added in shadcn/ui?

- [ ] A. Installed from npm  
- [ ] B. Imported from CDN  
- [ ] C. Generated and copied into your project  
- [ ] D. Loaded dynamically  

<details>
<summary>✅ Answer</summary>

**C. Generated and copied into your project**

</details>

---

### ❓ What is the relationship between shadcn/ui and Radix UI?

- [ ] A. They are competitors  
- [ ] B. shadcn/ui uses Radix UI primitives internally  
- [ ] C. Radix UI depends on shadcn/ui  
- [ ] D. They are unrelated  

<details>
<summary>✅ Answer</summary>

**B. shadcn/ui uses Radix UI primitives internally**

</details>

---

## 🧠 Radix UI

### ❓ What is Radix UI?

- [ ] A. A CSS framework  
- [ ] B. A headless UI component library  
- [ ] C. A state management library  
- [ ] D. A backend framework  

<details>
<summary>✅ Answer</summary>

**B. A headless UI component library**

</details>

---

### ❓ What does "headless" mean in Radix UI?

- [ ] A. No JavaScript  
- [ ] B. No styling included  
- [ ] C. No components  
- [ ] D. No DOM  

<details>
<summary>✅ Answer</summary>

**B. No styling included**

</details>

---

### ❓ What is the main benefit of Radix UI?

- [ ] A. Built-in themes  
- [ ] B. Fully styled components  
- [ ] C. Accessibility and behavior without styling constraints  
- [ ] D. Faster build times  

<details>
<summary>✅ Answer</summary>

**C. Accessibility and behavior without styling constraints**

</details>

---

### ❓ Which feature does Radix UI strongly focus on?

- [ ] A. Animations  
- [ ] B. Accessibility (ARIA, keyboard navigation)  
- [ ] C. SEO  
- [ ] D. Backend integration  

<details>
<summary>✅ Answer</summary>

**B. Accessibility (ARIA, keyboard navigation)**

</details>

---

### ❓ When would you choose Radix UI over a full UI library?

- [ ] A. When you want ready-made design  
- [ ] B. When you want full control over styling and behavior  
- [ ] C. When you don’t use React  
- [ ] D. When you need backend APIs  

<details>
<summary>✅ Answer</summary>

**B. When you want full control over styling and behavior**

</details>

---

---

## 🚀 Performance & Web Vitals

---

**77. What does LCP measure?**

- A: Time to first byte
- B: Time until the largest visible content element in the viewport is rendered
- C: Total page weight
- D: Number of DOM elements

<details>
<summary><b>Answer</b></summary>

**B: Time until the largest visible content element is rendered**

Good LCP: under 2.5s. Measures perceived loading performance — when the main content is visible to the user.

</details>

---

**78. What is CLS?**

- A: Total JS execution time
- B: A score measuring unexpected visual layout shifts during page load
- C: Number of DOM mutations
- D: First paint time

<details>
<summary><b>Answer</b></summary>

**B: A score measuring unexpected visual layout shifts**

Good CLS: under 0.1. Common fix: always declare explicit `width` and `height` on images and video elements.

</details>

---

**79. What is INP?**

- A: Image network performance
- B: A metric measuring the worst-case latency of all user interactions on the page
- C: Initial navigation performance
- D: Time to first DOM paint

<details>
<summary><b>Answer</b></summary>

**B: Worst-case latency of all user interactions**

INP replaced FID as a Core Web Vital in 2024. Good INP: under 200ms. Measures how quickly the page responds to clicks, taps, and keyboard input.

</details>

---

**80. What is tree shaking?**

- A: Removing dead CSS
- B: Eliminating unused JavaScript exports from the bundle at build time
- C: A DOM traversal optimization
- D: A React rendering optimization

<details>
<summary><b>Answer</b></summary>

**B: Eliminating unused JS exports at build time**

Requires ES modules (`import`/`export`) — bundlers like Rollup and Webpack statically analyze the import/export graph. CommonJS (`require`) is not statically analyzable, so it can't be tree-shaken.

</details>

---

**81. What is the difference between debounce and throttle?**

- A: No difference
- B: Debounce delays execution until after a pause; throttle limits to at most once per interval
- C: Throttle delays; debounce limits per interval
- D: Same concept, different names

<details>
<summary><b>Answer</b></summary>

**B: Debounce waits for pause; throttle limits rate**

**Debounce**: fire search API after user stops typing for 300ms.
**Throttle**: fire scroll handler at most every 100ms regardless of scroll speed.

</details>

---

**82. What is memoization?**

- A: A memory leak
- B: Caching function results — same inputs return the cached output without recomputing
- C: Storing data in `localStorage`
- D: A React hook for forms

<details>
<summary><b>Answer</b></summary>

**B: Caching function results for the same inputs**

`useMemo` and `useCallback` apply memoization at the React component level. The trade-off: memoization has memory cost and cache-check overhead.

</details>

---

---

## 🧪 Testing

---

**83. What is the Testing Library philosophy?**

- A: Test implementation details closely
- B: Test the way real users interact — behavior over implementation
- C: Only unit tests
- D: Avoid async testing

<details>
<summary><b>Answer</b></summary>

**B: Test behavior, not implementation**

Tests that mirror user behavior remain valid through refactors. Don't test internal state — test what the user sees and does.

</details>

---

**84. What is the testing pyramid?**

- A: Framework popularity ranking
- B: Many unit tests → fewer integration tests → fewest E2E tests
- C: CSS layout for test reports
- D: A file structure guide

<details>
<summary><b>Answer</b></summary>

**B: Many unit → fewer integration → fewest E2E**

Higher in pyramid = slower, more expensive, harder to maintain. A healthy suite has a wide base of fast unit tests.

</details>

---

**85. What is snapshot testing?**

- A: UI screenshots
- B: Serializing a component's rendered output and comparing it to a saved reference to catch unintended changes
- C: Browser-based snapshots
- D: A performance profiling technique

<details>
<summary><b>Answer</b></summary>

**B: Serializing rendered output and comparing to a saved reference**

Snapshots are stored in `__snapshots__` and committed to version control. Fragile for large components — prefer for small, stable ones.

</details>

---

**86. Why is `getByRole` the preferred Testing Library query?**

- A: It's fastest
- B: It queries by accessible ARIA roles — reflecting how assistive technology works
- C: It queries by CSS class
- D: It queries by test IDs

<details>
<summary><b>Answer</b></summary>

**B: Queries by ARIA role — how assistive technology navigates the page**

Testing Library priority: `getByRole` > `getByLabelText` > `getByText` > `getByAltText` > `getByTestId`. Avoid `getByTestId` for most cases.

</details>

---

---

## ♿ Accessibility

---

**87. What does WCAG AA require for normal text color contrast?**

- A: 2:1
- B: 3:1
- C: 4.5:1
- D: 7:1

<details>
<summary><b>Answer</b></summary>

**C: 4.5:1 for normal text (3:1 for large text)**

WCAG AAA requires 7:1. Large text = 18pt (24px) regular or 14pt (18.67px) bold.

</details>

---

**88. What is the first rule of ARIA?**

- A: Always use ARIA on every element
- B: Don't use ARIA if a native HTML element provides the same semantics
- C: ARIA replaces all HTML attributes
- D: Use `aria-hidden` on all decorative elements

<details>
<summary><b>Answer</b></summary>

**B: Don't use ARIA if a native element does the job**

A `<button>` is always better than `<div role="button" tabindex="0">` — keyboard interaction, focus, and semantics come for free.

</details>

---

**89. What does `aria-live` do?**

- A: Animates content in real-time
- B: Announces dynamic content changes to screen reader users without a focus change
- C: Updates the page title
- D: Triggers a browser notification

<details>
<summary><b>Answer</b></summary>

**B: Announces dynamic content changes without focus change**

`"polite"` waits for a pause before announcing. `"assertive"` interrupts immediately. Use `"assertive"` only for critical alerts.

</details>

---

**90. What is a skip navigation link?**

- A: A footer jump link
- B: A visually-hidden link at page top letting keyboard users bypass repetitive navigation
- C: A nav that hides on mobile
- D: A JavaScript redirect

<details>
<summary><b>Answer</b></summary>

**B: A visually-hidden link at page top bypassing navigation**

`<a href="#main-content" class="skip-link">Skip to content</a>`. Shown on `:focus`. Critical for keyboard and screen reader users.

</details>

---

---

## 🔌 APIs & Data Fetching

---

**91. What is the difference between `PUT` and `PATCH`?**

- A: No difference
- B: `PUT` replaces the entire resource; `PATCH` applies partial updates
- C: `PATCH` replaces; `PUT` patches
- D: Both delete the resource

<details>
<summary><b>Answer</b></summary>

**B: `PUT` replaces entire resource; `PATCH` applies partial updates**

Use `PATCH` when updating only one field (like `email`) without resending the full object.

</details>

---

**92. What is CORS and who enforces it?**

- A: A CSS layout module
- B: Cross-Origin Resource Sharing — enforced by the **browser**, not the server
- C: A JavaScript runtime restriction
- D: A caching protocol

<details>
<summary><b>Answer</b></summary>

**B: Browser-enforced mechanism for cross-origin requests**

Non-browser clients (curl, Postman, server-to-server) are **not** subject to CORS. The server sets `Access-Control-Allow-Origin` headers; the browser decides whether to allow the response.

</details>

---

**93. What is the `stale-while-revalidate` pattern?**

- A: Delete stale data immediately
- B: Return cached (stale) data immediately while fetching an update in the background
- C: Wait for fresh data before rendering anything
- D: Validate all data before caching

<details>
<summary><b>Answer</b></summary>

**B: Return cached data immediately; fetch fresh data in background**

Used in SWR, React Query, and the `Cache-Control: stale-while-revalidate` HTTP header. Provides instant responses with eventual consistency.

</details>

---

**94. What is the N+1 query problem?**

- A: Having more than N components
- B: Fetching a list of N items then making N more individual requests for each item's related data
- C: A TypeScript error
- D: Sending too many mutations

<details>
<summary><b>Answer</b></summary>

**B: 1 list request + N individual detail requests**

Fetching 20 posts then fetching each post's author separately = 21 requests. Fix with DataLoader (batching) in GraphQL or join queries in REST.

</details>

---

---

## 🔄 State Management

---

**95. What is the difference between client state and server state?**

- A: No difference
- B: Client state is local UI data; server state is remote data requiring synchronization
- C: Server state is always in Redux
- D: Client state is only for forms

<details>
<summary><b>Answer</b></summary>

**B: Client state = local; server state = remote, needs sync**

React Query/SWR handle server state (caching, revalidation, optimistic updates). Redux/Zustand handle complex client state. Don't use Redux to cache API responses.

</details>

---

**96. What is Zustand?**

- A: A German word for a CSS property
- B: A minimal, hook-based React state management library with near-zero boilerplate
- C: Redux middleware
- D: A server state library

<details>
<summary><b>Answer</b></summary>

**B: Minimal, hook-based state management**

Zustand supports selective subscriptions — components only re-render when the slice of state they subscribe to changes. No Provider wrapper needed.

</details>

---

**97. When should you use `useReducer` over `useState`?**

- A: Always
- B: When state transitions are complex, next state depends on previous, or multiple sub-values are related
- C: Only for global state
- D: Never — `useState` covers everything

<details>
<summary><b>Answer</b></summary>

**B: Complex transitions, previous-state dependency, related sub-values**

`useReducer` centralizes state logic into a pure function — making it predictable and easy to test independently of React.

</details>

---

---

## 🏗️ System Design

---

**98. What is a Micro Frontend?**

- A: A small UI component
- B: Splitting a frontend monolith into independently deployable applications owned by separate teams
- C: A backend microservice
- D: A CSS methodology

<details>
<summary><b>Answer</b></summary>

**B: Independently deployable frontend applications per team**

Approaches: Webpack Module Federation, iframes, Web Components, server-side composition. Each team ships independently without coordinating a monolith deploy.

</details>

---

**99. What is the BFF (Backend for Frontend) pattern?**

- A: Frontend testing helper
- B: A dedicated server layer tailored to one frontend, aggregating and shaping backend service responses
- C: CSS-in-JS pattern
- D: Build pipeline optimization

<details>
<summary><b>Answer</b></summary>

**B: Dedicated server layer per frontend client**

A BFF prevents the frontend from calling many microservices directly. It aggregates, transforms, and caches data optimally for that specific client (web vs. mobile).

</details>

---

**100. What is a CDN and why is it critical for frontends?**

- A: Content Detection Network
- B: Content Delivery Network — serves static assets from edge servers close to users, reducing latency
- C: Central Data Node
- D: CSS Distribution Network

<details>
<summary><b>Answer</b></summary>

**B: Serves assets from geographically close edge servers**

JS, CSS, images, and fonts served from a CDN have significantly lower latency. Long-term caching of hashed assets (`Cache-Control: max-age=31536000, immutable`) maximizes CDN efficiency.

</details>

---

---

## 🔐 Security

---

**101. What is XSS (Cross-Site Scripting)?**

- A: A CSS preprocessor vulnerability
- B: An attack injecting malicious scripts into pages viewed by other users
- C: A server-side rendering vulnerability
- D: A network interception attack

<details>
<summary><b>Answer</b></summary>

**B: Injecting malicious scripts into pages**

Prevention: sanitize user input, use `textContent` instead of `innerHTML`, avoid `dangerouslySetInnerHTML` with untrusted data, set a strict Content Security Policy (CSP).

</details>

---

**102. What is CSRF (Cross-Site Request Forgery)?**

- A: JavaScript injection
- B: Tricking an authenticated user's browser into making unintended requests to another site
- C: CSS injection
- D: DNS hijacking

<details>
<summary><b>Answer</b></summary>

**B: Tricking an authenticated browser into unintended requests**

Prevention: CSRF tokens in forms, `SameSite=Strict` or `SameSite=Lax` cookie attribute, validating `Origin`/`Referer` headers on the server.

</details>

---

**103. What do `HttpOnly` and `Secure` cookie flags do?**

- A: Set cookie expiry
- B: `HttpOnly` prevents JS access; `Secure` restricts cookie to HTTPS only
- C: Both encrypt the cookie value
- D: Both set cookie lifetime

<details>
<summary><b>Answer</b></summary>

**B: `HttpOnly` = no JS access; `Secure` = HTTPS only**

`HttpOnly` mitigates XSS token theft. `Secure` prevents sending the cookie over unencrypted HTTP. Always use both for auth session cookies.

</details>

---

**104. Why should auth tokens NOT be stored in `localStorage`?**

- A: `localStorage` is too slow
- B: `localStorage` is readable by any JS on the page — XSS can steal tokens trivially
- C: `localStorage` only holds strings
- D: `localStorage` is cleared on page refresh

<details>
<summary><b>Answer</b></summary>

**B: Any JS on the page can read `localStorage` — XSS steals tokens**

Prefer `HttpOnly` cookies. The browser manages them and JS cannot read them even during an XSS attack.

</details>

---

**105. What is Content Security Policy (CSP)?**

- A: API rate limiting policy
- B: An HTTP header restricting which sources of scripts, styles, and media the browser can load
- C: User authentication policy
- D: A CORS header

<details>
<summary><b>Answer</b></summary>

**B: HTTP header restricting which content sources are allowed**

CSP mitigates XSS by blocking execution of scripts from unauthorized sources. A strict CSP disallows inline scripts and `eval()`.

</details>

---

---

## 📦 Build Tools & Bundlers

---

**106. What is Vite and why is it fast in development?**

- A: CSS preprocessor
- B: A build tool using native ES modules in dev (no bundling) and Rollup for production
- C: Testing framework
- D: Backend framework

<details>
<summary><b>Answer</b></summary>

**B: Native ES modules in dev; Rollup for production**

Because browsers natively understand ESM, Vite skips bundling during development. Only changed modules are served — HMR is near-instant regardless of project size.

</details>

---

**107. What is Hot Module Replacement (HMR)?**

- A: Server module replacement
- B: Updating changed modules in the browser without a full reload, preserving application state
- C: A Webpack CSS plugin
- D: A React optimization

<details>
<summary><b>Answer</b></summary>

**B: In-place module updates without full reload, preserving state**

Change a component's style → it updates instantly without losing the current form state or navigation position.

</details>

---

**108. What is the purpose of a `.env` file?**

- A: Storing environment variables injected into the build
- B: Storing user passwords
- C: Defining CSS settings
- D: Configuring the Node.js server

<details>
<summary><b>Answer</b></summary>

**A: Storing environment variables injected at build time**

Vite exposes `VITE_`-prefixed vars; CRA exposes `REACT_APP_`-prefixed vars to the client bundle. **Never** store secrets in client-side env vars — they are visible in the bundle.

</details>

---

---

## 🌐 Web Fundamentals & Browser

---

**109. What is the Critical Rendering Path?**

- A: Network path to the server
- B: Steps from HTML bytes to pixels: HTML → DOM → CSSOM → Render Tree → Layout → Paint
- C: A React rendering concept
- D: CSS loading order

<details>
<summary><b>Answer</b></summary>

**B: HTML → DOM → CSSOM → Render Tree → Layout → Paint**

Optimizing the CRP reduces time-to-first-paint. Render-blocking resources (synchronous `<script>`, unloaded fonts, critical CSS) delay this sequence.

</details>

---

**110. What is the difference between `defer` and `async` on `<script>`?**

- A: No difference
- B: `async` fetches and executes immediately when ready; `defer` executes in document order after HTML parsing
- C: `defer` executes immediately; `async` waits for DOM
- D: Both block HTML parsing

<details>
<summary><b>Answer</b></summary>

**B: `async` = download+execute immediately; `defer` = execute in order after parsing**

Use `defer` for scripts that depend on the DOM or each other. Use `async` for independent scripts (analytics). Without either, scripts block HTML parsing.

</details>

---

**111. What is event delegation?**

- A: Multiple listeners on one element
- B: One listener on a parent handling events from children via bubbling
- C: Preventing event propagation
- D: A React-specific pattern

<details>
<summary><b>Answer</b></summary>

**B: One parent listener handles events from children via bubbling**

More efficient than attaching individual listeners to each child. React itself uses event delegation — all synthetic events are attached to the root container.

</details>

---

**112. What are WebSockets?**

- A: CSS layout feature
- B: A protocol providing full-duplex, persistent communication between client and server
- C: A REST API pattern
- D: A Service Worker API

<details>
<summary><b>Answer</b></summary>

**B: Full-duplex, persistent client-server communication**

Unlike HTTP (request/response only), WebSockets allow the server to push data at any time. Ideal for chat, live scores, and collaborative editing.

</details>

---

**113. What is `requestAnimationFrame` (rAF)?**

- A: A Promise for animations
- B: Schedules a callback before the next repaint, synced to the display refresh rate
- C: A CSS animation trigger
- D: A React animation hook

<details>
<summary><b>Answer</b></summary>

**B: Schedules a callback before the next repaint, synced to refresh rate**

Prefer over `setTimeout(fn, 16)` for animations — rAF automatically syncs to the monitor's refresh rate and pauses when the tab is hidden, saving battery.

</details>

---

**114. What does `preconnect` do as a resource hint?**

- A: Prefetches a resource file
- B: Establishes a connection (DNS, TCP, TLS) to an origin early to reduce latency
- C: Preloads a specific file into the cache
- D: Permanently caches a resource

<details>
<summary><b>Answer</b></summary>

**B: Early connection establishment — DNS + TCP + TLS**

`<link rel="preconnect" href="https://fonts.googleapis.com">` reduces font loading time by completing the handshake before the font request is made.

</details>

---

---

## 🐙 Git & Workflow

---

**115. What is the difference between `git merge` and `git rebase`?**

- A: No difference
- B: `merge` creates a merge commit preserving history; `rebase` rewrites commits for a linear history
- C: `rebase` is only for remote branches
- D: `merge` deletes the source branch

<details>
<summary><b>Answer</b></summary>

**B: `merge` preserves history; `rebase` rewrites for linear history**

Golden rule: **never rebase public/shared branches** — it rewrites commit hashes and breaks other collaborators' clones. Rebase is safe for local feature branches before merging.

</details>

---

**116. What does `git cherry-pick` do?**

- A: Selecting files to commit
- B: Applying a specific commit from one branch onto the current branch
- C: Stashing uncommitted changes
- D: Deleting a remote branch

<details>
<summary><b>Answer</b></summary>

**B: Applying a specific commit to the current branch**

`git cherry-pick <hash>` is useful for backporting a bug fix from `main` to a release branch without merging everything else.

</details>

---

**117. What does `git stash` do?**

- A: Permanently deletes uncommitted changes
- B: Temporarily shelves uncommitted changes so you can switch branches, then restore them later
- C: Stages all changes for commit
- D: Creates a new branch

<details>
<summary><b>Answer</b></summary>

**B: Temporarily shelves uncommitted changes**

`git stash` = save. `git stash pop` = restore. `git stash list` = see all stashes. Useful when you need to urgently switch context mid-work.

</details>

---

**118. What is the difference between `git fetch` and `git pull`?**

- A: No difference
- B: `fetch` downloads remote changes without merging; `pull` fetches and immediately merges into the current branch
- C: `pull` only downloads; `fetch` merges
- D: `fetch` only works with GitHub

<details>
<summary><b>Answer</b></summary>

**B: `fetch` downloads; `pull` fetches + merges**

`git fetch` is safer — it lets you inspect incoming changes before integrating them. `git pull` = `git fetch` + `git merge` (or `git fetch` + `git rebase` with `--rebase`).

</details>

---

---

## 🤖 Next.js & SSR

---

**119. What is the difference between SSR and SSG?**

- A: No difference
- B: SSR generates HTML per request; SSG generates HTML at build time
- C: SSG generates per request; SSR generates at build
- D: SSR is client-side only

<details>
<summary><b>Answer</b></summary>

**B: SSR = per-request; SSG = build-time**

SSG is served from CDN (fastest, no server cost). SSR provides per-request fresh data (personalization, auth-gated content). ISR combines both.

</details>

---

**120. What is Incremental Static Regeneration (ISR)?**

- A: Rebuilds entire site on every change
- B: Regenerates specific static pages in the background after a revalidation period — no full rebuild
- C: Client-side rendering with caching
- D: Progressive image loading

<details>
<summary><b>Answer</b></summary>

**B: Background regeneration per page, per revalidation period**

ISR = CDN performance of SSG + freshness of SSR. The `revalidate` option in `getStaticProps` (Pages Router) or `fetch` options (App Router) controls the revalidation interval.

</details>

---

**121. What is hydration in SSR?**

- A: Downloading CSS files
- B: React attaching event listeners to server-rendered HTML to make it interactive
- C: Converting JSON to HTML
- D: A caching mechanism

<details>
<summary><b>Answer</b></summary>

**B: React attaching event listeners to server-rendered HTML**

The server sends pre-rendered HTML (fast first paint). React then runs on the client to "hydrate" — attaching all event handlers. Hydration mismatches happen when server and client render differently.

</details>

---

**122. What is the difference between Server and Client Components in Next.js App Router?**

- A: Server components can use hooks; client components cannot
- B: Server components render on server with zero client JS; client components run in browser with hooks/events/state
- C: They are identical
- D: Client components cannot use CSS

<details>
<summary><b>Answer</b></summary>

**B: Server = server-only, no JS shipped; Client = browser with full React**

All components in the App Router are Server Components by default. Add `"use client"` to opt into a Client Component. The skill is in mixing them correctly for optimal performance.

</details>

---

**123. What is a Service Worker?**

- A: A JavaScript file running on the server
- B: A script running in a background browser thread, intercepting network requests and enabling offline functionality
- C: A Web Worker for CSS
- D: A React background task hook

<details>
<summary><b>Answer</b></summary>

**B: Background browser thread intercepting network requests**

Service workers power PWA features: offline mode (cache-first strategy), push notifications, and background sync. They run outside the main thread and persist even when the page is closed.

</details>

---

*123 questions across 15 categories. Bookmark this, review it before interviews, and keep updating it as you learn! 🚀*
