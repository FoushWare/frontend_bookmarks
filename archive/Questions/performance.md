## 🚀 Performance & Web Vitals

### 🔹 Core Web Vitals

---

**1. What does LCP measure?**

- A: First interaction  
- B: Largest visible content load  
- C: Layout shifts  
- D: JS execution time  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**2. What does CLS measure?**

- A: Load time  
- B: Layout shift stability  
- C: JS execution  
- D: Network latency  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**3. What does INP (or FID) measure?**

- A: Paint time  
- B: Input responsiveness  
- C: Layout  
- D: CSS parsing  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Rendering Performance

---

**4. Which is most expensive?**

- A: Repaint  
- B: Reflow (layout)  
- C: Composite  
- D: Opacity change  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**5. Which properties are GPU-accelerated?**

- A: width  
- B: height  
- C: transform & opacity  
- D: margin  

<details>
<summary><b>Answer</b></summary>

**C**

</details>

---

**6. What blocks rendering?**

- A: Images  
- B: JS (without async/defer)  
- C: Fonts  
- D: HTML  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Network Performance

---

**7. What is code splitting?**

- A: Combine JS  
- B: Split bundle into chunks  
- C: Compress images  
- D: Cache API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**8. What is lazy loading?**

- A: Load everything  
- B: Load when needed  
- C: Preload all  
- D: Cache data  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**9. What is prefetch?**

- A: Load critical resources  
- B: Load future resources  
- C: Cache images  
- D: Compress JS  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**10. What is preload?**

- A: Load later  
- B: Load critical resources early  
- C: Lazy load  
- D: Remove cache  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Caching

---

**11. What is browser caching?**

- A: Store API  
- B: Store static assets locally  
- C: Store HTML only  
- D: Store JS only  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**12. What is CDN?**

- A: Database  
- B: Distributed servers for faster delivery  
- C: JS engine  
- D: CSS tool  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 React Performance

---

**13. Why unnecessary re-renders happen?**

- A: CSS  
- B: State/props changes  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**14. What does `React.memo` do?**

- A: Cache API  
- B: Prevent re-render if props unchanged  
- C: Store state  
- D: Async  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**15. When to use `useMemo`?**

- A: Styling  
- B: Expensive calculations  
- C: API calls  
- D: Routing  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**16. When to use `useCallback`?**

- A: Styling  
- B: Prevent function recreation  
- C: API call  
- D: DOM  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Bundle Optimization

---

**17. What is tree shaking?**

- A: Add code  
- B: Remove unused code  
- C: Compress images  
- D: Cache data  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**18. What increases bundle size?**

- A: Code splitting  
- B: Large dependencies  
- C: Minification  
- D: Lazy loading  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Images & Assets

---

**19. Best format for web images?**

- A: BMP  
- B: WebP / AVIF  
- C: TIFF  
- D: GIF only  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**20. What does `srcset` do?**

- A: Styling  
- B: Responsive images  
- C: Lazy loading  
- D: Caching  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Memory & CPU

---

**21. What causes memory leaks?**

- A: CSS  
- B: Unreleased references  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**22. What blocks main thread?**

- A: CSS  
- B: Heavy JS execution  
- C: Images  
- D: HTML  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Advanced Techniques

---

**23. What is virtualization?**

- A: Rendering all items  
- B: Render visible items only  
- C: Cache API  
- D: Reduce CSS  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**24. What is Web Worker?**

- A: UI thread  
- B: Background thread  
- C: DOM API  
- D: CSS  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Real-World Scenarios

---

**25. Why page loads slowly?**

- A: CSS  
- B: Large bundle / blocking JS  
- C: HTML  
- D: Fonts  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**26. Why layout jumps?**

- A: CSS  
- B: Missing size attributes  
- C: JS  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**27. Why app freezes?**

- A: CSS  
- B: Blocking main thread  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**28. Why API slow?**

- A: CSS  
- B: Network latency / server  
- C: HTML  
- D: JS only  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Metrics & Tools

---

**29. What tool for performance audit?**

- A: ESLint  
- B: Lighthouse  
- C: Prettier  
- D: Babel  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**30. What is TTFB?**

- A: Time to first byte  
- B: Total load time  
- C: CSS load  
- D: JS parse  

<details>
<summary><b>Answer</b></summary>

**A**

</details>

---

### 🔹 Advanced Concepts

---

**31. What is hydration cost?**

- A: CSS  
- B: JS attaching to DOM  
- C: API  
- D: HTML  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**32. What is critical CSS?**

- A: All CSS  
- B: Above-the-fold CSS  
- C: Animations  
- D: Grid  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**33. What is long task?**

- A: CSS  
- B: JS > 50ms blocking  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Tradeoffs

---

**34. Lazy loading downside?**

- A: Faster initial load  
- B: Delay when needed  
- C: Less memory  
- D: Better UX always  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**35. Code splitting downside?**

- A: Larger bundle  
- B: More requests  
- C: Slower build  
- D: None  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Senior-Level Thinking

---

**36. Best strategy to improve LCP?**

- A: More JS  
- B: Optimize images & preload  
- C: Add CSS  
- D: Add animations  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**37. Best fix for CLS?**

- A: Add JS  
- B: Set width/height for media  
- C: Remove CSS  
- D: Use grid  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**38. Best fix for INP?**

- A: More DOM  
- B: Reduce JS blocking  
- C: Add CSS  
- D: Add images  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Debugging

---

**39. Why Lighthouse score low?**

- A: CSS  
- B: Performance issues (bundle, blocking, layout)  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**40. First thing to check in perf issue?**

- A: CSS  
- B: Network & bundle size  
- C: HTML  
- D: Fonts  

<details>
<summary><b>Answer</b></summary>

**B**

</details>
