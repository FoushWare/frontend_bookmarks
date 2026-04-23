
## 🏗️ System Design (Frontend)

### 🔹 Fundamentals

---

**1. What is the goal of frontend system design?**

- A: Styling  
- B: Building scalable, maintainable UI architecture  
- C: Writing JS  
- D: API design  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**2. First step in system design interview?**

- A: Start coding  
- B: Clarify requirements  
- C: Choose framework  
- D: Optimize performance  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Architecture Decisions

---

**3. When should you use global state?**

- A: Always  
- B: Shared data across many components  
- C: Styling  
- D: API only  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**4. Best approach for large app state?**

- A: useState everywhere  
- B: Centralized state management  
- C: CSS  
- D: HTML  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**5. What problem does state management solve?**

- A: CSS  
- B: Data consistency & sharing  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Component Design

---

**6. How to design scalable components?**

- A: Large components  
- B: Small reusable components  
- C: Inline everything  
- D: No props  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**7. What is separation of concerns?**

- A: CSS only  
- B: Separate logic, UI, data  
- C: API  
- D: Routing  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Data Fetching

---

**8. Where handle API calls?**

- A: UI components  
- B: Hooks/services layer  
- C: CSS  
- D: HTML  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**9. How to handle caching?**

- A: Ignore  
- B: Use caching layer (React Query, SWR)  
- C: CSS  
- D: HTML  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**10. Stale-while-revalidate means?**

- A: No cache  
- B: Show cached data then update  
- C: Reload page  
- D: API retry  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Performance Design

---

**11. How to optimize large lists?**

- A: Render all  
- B: Virtualization  
- C: CSS  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**12. How to reduce bundle size?**

- A: Add libs  
- B: Code splitting  
- C: CSS  
- D: HTML  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**13. When to use SSR?**

- A: Always  
- B: SEO / fast initial load  
- C: Styling  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Routing

---

**14. Client-side routing vs server routing?**

- A: Same  
- B: CSR faster navigation  
- C: SSR faster navigation always  
- D: No difference  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 State & Data Flow

---

**15. Prop drilling solution?**

- A: CSS  
- B: Context / state management  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Scalability

---

**16. How to scale frontend architecture?**

- A: Single file  
- B: Modular structure  
- C: Inline styles  
- D: No folders  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**17. What is micro-frontend?**

- A: CSS  
- B: Split app into independent apps  
- C: API  
- D: DOM  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Security in Design

---

**18. How secure frontend?**

- A: CSS  
- B: Validate + secure storage  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Real Scenario (Dashboard)

---

**19. Designing dashboard with many widgets, first step?**

- A: CSS  
- B: Define data & components  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**20. How to avoid re-render of all widgets?**

- A: CSS  
- B: Memoization + split components  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Real Scenario (Search)

---

**21. Optimize search input?**

- A: CSS  
- B: Debounce  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Real Scenario (Forms)

---

**22. Large form performance issue?**

- A: CSS  
- B: Split form + lazy validation  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Data Consistency

---

**23. How sync data across components?**

- A: CSS  
- B: Shared state/store  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Error Handling

---

**24. How handle API errors globally?**

- A: CSS  
- B: Interceptors / global handlers  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Offline & Resilience

---

**25. How handle offline mode?**

- A: CSS  
- B: Cache + service workers  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Accessibility

---

**26. Why include accessibility in design?**

- A: CSS  
- B: Better UX & compliance  
- C: API  
- D: HTML  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Monitoring

---

**27. How monitor frontend errors?**

- A: CSS  
- B: Logging tools (Sentry, etc.)  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Tradeoffs

---

**28. CSR downside?**

- A: Faster  
- B: Slow initial load  
- C: Better SEO  
- D: None  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**29. SSR downside?**

- A: Faster  
- B: Server cost/complexity  
- C: CSS  
- D: HTML  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Advanced Concepts

---

**30. What is hydration issue?**

- A: CSS  
- B: Mismatch SSR vs client  
- C: API  
- D: HTML  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Real Debugging

---

**31. Why slow initial load?**

- A: CSS  
- B: Large bundle  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**32. Why app lagging?**

- A: CSS  
- B: Heavy rendering / JS  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Team & Scaling

---

**33. How organize large codebase?**

- A: One folder  
- B: Feature-based structure  
- C: Inline files  
- D: No structure  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**34. Why design system important?**

- A: CSS  
- B: Consistency & scalability  
- C: API  
- D: HTML  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Senior Thinking

---

**35. Best mindset in system design?**

- A: Optimize everything  
- B: Tradeoffs & requirements  
- C: Use libraries  
- D: Avoid complexity  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**36. What matters most?**

- A: CSS  
- B: Maintainability & scalability  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Advanced Scenarios

---

**37. Design real-time app (chat)?**

- A: CSS  
- B: WebSockets + state sync  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**38. Design high-traffic app?**

- A: CSS  
- B: CDN + caching + optimization  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Final

---

**39. Biggest frontend challenge?**

- A: CSS  
- B: Scaling complexity  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**40. What differentiates senior vs junior?**

- A: Syntax  
- B: Architecture thinking  
- C: CSS  
- D: HTML  

<details>
<summary><b>Answer</b></summary>

**B**

</details>
