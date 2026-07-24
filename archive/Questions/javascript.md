
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
````

* A: Lydia, undefined
* B: Lydia, ReferenceError
* C: ReferenceError, 21
* D: undefined, ReferenceError

<details>
<summary><b>Answer</b></summary>

**D**

</details>

---

**2. What is hoisting?**

* A: Moving variables to bottom
* B: Moving declarations to top
* C: Executing functions early
* D: Memory allocation

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**3. Difference between `var`, `let`, `const`?**

* A: Same
* B: var function-scoped, let/const block-scoped
* C: let global only
* D: const mutable

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Closures

---

**4. What is a closure?**

* A: Function without return
* B: Function with access to outer scope
* C: Global variable
* D: Callback

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**5. What's the output?**

```javascript
function outer() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const fn = outer();
console.log(fn(), fn());
```

* A: 1 1
* B: 1 2
* C: 2 3
* D: 0 1

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 This Keyword

---

**6. What is `this` in a regular function?**

* A: Always window
* B: Depends on call site
* C: Always undefined
* D: Always function

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**7. Arrow function `this`?**

* A: Dynamic
* B: Lexical (inherits parent)
* C: Always window
* D: Always null

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Event Loop

---

**8. What is event loop?**

* A: JS engine
* B: Handles async execution
* C: DOM parser
* D: Compiler

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**9. What's the output?**

```javascript
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

* A: A B C D
* B: A C D B
* C: A D C B
* D: A D B C

<details>
<summary><b>Answer</b></summary>

**C**

</details>

---

### 🔹 Promises & Async

---

**10. What does `Promise.all` do?**

* A: Runs sequentially
* B: Runs in parallel, fails fast
* C: Ignores errors
* D: Runs one by one

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**11. Difference between `async/await` and `.then()`?**

* A: Same
* B: async/await is syntax sugar over promises
* C: then is faster
* D: async blocks thread

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Objects & Prototypes

---

**12. What is prototype?**

* A: Object copy
* B: Inheritance mechanism
* C: Function call
* D: Variable scope

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**13. What is `__proto__`?**

* A: Function
* B: Link to prototype
* C: Object value
* D: Method

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Arrays & Methods

---

**14. What does `map` return?**

* A: Same array
* B: New array
* C: Boolean
* D: Object

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**15. Difference between `map` and `forEach`?**

* A: Same
* B: map returns new array
* C: forEach returns array
* D: map mutates

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Equality & Types

---

**16. `==` vs `===`?**

* A: Same
* B: `==` coerces, `===` strict
* C: `===` coerces
* D: No difference

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**17. What is type of `null`?**

* A: null
* B: object
* C: undefined
* D: number

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Functions

---

**18. What is higher-order function?**

* A: Returns number
* B: Takes or returns function
* C: Async function
* D: Global function

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**19. What is currying?**

* A: Loop
* B: Function returning another function
* C: Object
* D: Promise

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 ES6+

---

**20. What does destructuring do?**

* A: Deletes values
* B: Extracts values
* C: Converts object
* D: Maps array

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**21. Spread vs Rest?**

* A: Same
* B: Spread expands, rest collects
* C: Opposite
* D: Only arrays

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Advanced

---

**22. What is debounce?**

* A: Runs repeatedly
* B: Delays execution
* C: Stops execution
* D: Sync function

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**23. What is throttle?**

* A: Runs once
* B: Limits execution rate
* C: Stops execution
* D: Delays forever

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Memory & Performance

---

**24. What is garbage collection?**

* A: Memory leak
* B: Automatic memory cleanup
* C: Variable deletion
* D: DOM removal

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Edge Cases

---

**25. Output?**

```javascript
console.log([] + []);
```

* A: []
* B: ""
* C: undefined
* D: error

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**26. Output?**

```javascript
console.log({} + []);
```

* A: {}
* B: "[object Object]"
* C: error
* D: []

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Event Handling

---

**27. What is event delegation?**

* A: Multiple listeners
* B: Single parent listener
* C: Blocking events
* D: Async events

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Modules

---

**28. ES modules vs CommonJS?**

* A: Same
* B: ES modules static, CJS dynamic
* C: CJS faster
* D: ES modules deprecated

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Error Handling

---

**29. try/catch catches?**

* A: Sync errors
* B: Async errors
* C: Both always
* D: None

<details>
<summary><b>Answer</b></summary>

**A**

</details>

---

### 🔹 Real Scenarios

---

**30. Why infinite re-render in React?**

* A: CSS
* B: State update loop
* C: API
* D: HTML

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Hard Questions

---

**31. Output?**

```javascript
console.log(typeof NaN);
```

* A: number
* B: NaN
* C: undefined
* D: object

<details>
<summary><b>Answer</b></summary>

**A**

</details>

---

**32. Output?**

```javascript
console.log(0.1 + 0.2 === 0.3);
```

* A: true
* B: false
* C: error
* D: undefined

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**33. What is shallow copy?**

* A: Deep clone
* B: Copies reference for nested
* C: Copies all
* D: Deletes object

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**34. Deep copy methods?**

* A: JSON.parse/stringify
* B: structuredClone
* C: lodash cloneDeep
* D: All

<details>
<summary><b>Answer</b></summary>

**D**

</details>

---

**35. What is immutability?**

* A: Change values
* B: Not modifying original data
* C: Delete objects
* D: Freeze browser

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Async Deep Dive

---

**36. Microtasks vs Macrotasks?**

* A: Same
* B: Microtasks run before macrotasks
* C: Macrotasks first
* D: Random

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**37. Examples of microtasks?**

* A: setTimeout
* B: Promise
* C: setInterval
* D: DOM

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Advanced Patterns

---

**38. What is memoization?**

* A: Store results
* B: Delete cache
* C: Loop
* D: Async

<details>
<summary><b>Answer</b></summary>

**A**

</details>

---

**39. What is singleton pattern?**

* A: Multiple instances
* B: Single instance
* C: Async
* D: Event loop

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Browser APIs

---

**40. What is localStorage?**

* A: Session storage
* B: Persistent storage
* C: Server storage
* D: Cache

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Final Hard Ones

---

**41. Output?**

```javascript
console.log(typeof undefined);
```

* A: undefined
* B: object
* C: string
* D: number

<details>
<summary><b>Answer</b></summary>

**A**

</details>

---

**42. Output?**

```javascript
console.log([] == ![]);
```

* A: true
* B: false
* C: error
* D: undefined

<details>
<summary><b>Answer</b></summary>

**A**

</details>

---

**43. What is temporal dead zone?**

* A: Scope issue
* B: Access before declaration
* C: Async bug
* D: Memory issue

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**44. What is call stack?**

* A: Memory heap
* B: Execution stack
* C: Event loop
* D: DOM

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**45. What is closure memory leak risk?**

* A: None
* B: Retaining references
* C: Async issue
* D: DOM issue

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Senior / Tech Lead

---

**46. What is event bubbling?**

* A: Top-down
* B: Bottom-up propagation
* C: Async
* D: DOM creation

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**47. What is event capturing?**

* A: Bottom-up
* B: Top-down
* C: Same
* D: Async

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**48. Difference between `bind`, `call`, `apply`?**

* A: Same
* B: bind returns function
* C: call/apply invoke immediately
* D: All

<details>
<summary><b>Answer</b></summary>

**D**

</details>

---

**49. What is polyfill?**

* A: CSS
* B: Browser feature fallback
* C: JS engine
* D: API

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**50. What is tree shaking?**

* A: CSS
* B: Removing unused code
* C: DOM update
* D: Async

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Real Debugging

---

**51. Why memory leak happens?**

* A: CSS
* B: Unreleased references
* C: HTML
* D: Browser

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**52. Why API called twice?**

* A: CSS
* B: React StrictMode / duplicate effect
* C: HTML
* D: JS bug

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**53. Why event listener not removed?**

* A: CSS
* B: Reference mismatch
* C: HTML
* D: Browser

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**54. Why `this` is undefined?**

* A: Strict mode / wrong binding
* B: CSS
* C: HTML
* D: API

<details>
<summary><b>Answer</b></summary>

**A**

</details>

---

**55. Why promise not resolving?**

* A: CSS
* B: Missing resolve/reject
* C: HTML
* D: Browser

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**56. Why UI freezes?**

* A: CSS
* B: Blocking main thread
* C: HTML
* D: API

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**57. What is Web Worker?**

* A: UI thread
* B: Background thread
* C: DOM API
* D: CSS

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**58. What is event delegation advantage?**

* A: Slower
* B: Better performance
* C: More code
* D: None

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**59. Why use `useCallback`?**

* A: CSS
* B: Prevent re-renders
* C: HTML
* D: API

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**60. Why use `useMemo`?**

* A: Styling
* B: Memoize expensive computation
* C: API
* D: DOM

<details>
<summary><b>Answer</b></summary>

**B**

</details>
```

