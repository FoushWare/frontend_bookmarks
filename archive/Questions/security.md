## 🔐 Security

### 🔹 Fundamentals

---

**1. What is XSS?**

- A: Network attack  
- B: Injecting malicious scripts into web pages  
- C: CSS bug  
- D: API failure  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**2. What is CSRF?**

- A: Script injection  
- B: Unauthorized actions using user session  
- C: API error  
- D: CSS issue  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**3. What is HTTPS?**

- A: Faster HTTP  
- B: Secure encrypted communication  
- C: CSS protocol  
- D: API tool  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 XSS Deep Dive

---

**4. Which is XSS type?**

- A: SQL Injection  
- B: Stored / Reflected / DOM XSS  
- C: CSRF  
- D: MITM  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**5. How to prevent XSS?**

- A: Use div  
- B: Escape/sanitize user input  
- C: Use CSS  
- D: Use images  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**6. Dangerous React API?**

- A: useState  
- B: dangerouslySetInnerHTML  
- C: useEffect  
- D: memo  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 CSRF

---

**7. How to prevent CSRF?**

- A: CSS  
- B: CSRF tokens / SameSite cookies  
- C: HTML  
- D: API only  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**8. Why cookies vulnerable to CSRF?**

- A: Stored in JS  
- B: Automatically sent with requests  
- C: CSS  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Authentication & Authorization

---

**9. Authentication vs Authorization?**

- A: Same  
- B: Auth = identity, Authorization = permissions  
- C: Opposite  
- D: CSS  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**10. What is JWT?**

- A: CSS  
- B: Token-based authentication  
- C: Database  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**11. Where store JWT securely?**

- A: localStorage  
- B: httpOnly cookies  
- C: sessionStorage  
- D: JS variable  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Storage Security

---

**12. localStorage risk?**

- A: Slow  
- B: Accessible via JS (XSS risk)  
- C: Not persistent  
- D: CSS  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**13. sessionStorage vs localStorage?**

- A: Same  
- B: sessionStorage clears on tab close  
- C: localStorage clears  
- D: None  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Headers & Policies

---

**14. What is CSP?**

- A: CSS  
- B: Content Security Policy  
- C: API  
- D: Routing  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**15. Purpose of CSP?**

- A: Styling  
- B: Prevent XSS  
- C: Routing  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**16. What is SameSite cookie?**

- A: CSS  
- B: Controls cross-site cookie sending  
- C: API  
- D: HTML  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Network Attacks

---

**17. What is MITM attack?**

- A: CSS  
- B: Intercepting communication  
- C: API  
- D: DOM  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**18. How HTTPS prevents MITM?**

- A: Faster  
- B: Encryption + certificates  
- C: CSS  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Input Validation

---

**19. Why validate input on backend?**

- A: CSS  
- B: Frontend can be bypassed  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**20. What is sanitization?**

- A: Styling  
- B: Cleaning user input  
- C: API  
- D: DOM  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Advanced Attacks

---

**21. What is clickjacking?**

- A: CSS  
- B: Tricking user to click hidden UI  
- C: API  
- D: DOM  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**22. Prevent clickjacking?**

- A: CSS  
- B: X-Frame-Options / CSP  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Frontend Security

---

**23. Why avoid exposing API keys?**

- A: CSS  
- B: Anyone can misuse them  
- C: HTML  
- D: JS  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**24. How to hide API keys?**

- A: CSS  
- B: Use backend proxy  
- C: HTML  
- D: JS  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 React Security

---

**25. React protects against XSS by default?**

- A: No  
- B: Yes (auto escaping)  
- C: Only in SSR  
- D: Only in hooks  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**26. When React NOT safe?**

- A: useState  
- B: dangerouslySetInnerHTML  
- C: useEffect  
- D: memo  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Tokens & Sessions

---

**27. What is refresh token?**

- A: CSS  
- B: Used to get new access token  
- C: API  
- D: HTML  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**28. Why short-lived access tokens?**

- A: Performance  
- B: Reduce risk if leaked  
- C: CSS  
- D: HTML  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Real Scenarios

---

**29. Why user session hijacked?**

- A: CSS  
- B: Token leakage / XSS  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**30. Why form vulnerable?**

- A: CSS  
- B: No validation / CSRF  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**31. Why data exposed in frontend?**

- A: CSS  
- B: Sensitive data sent to client  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Best Practices

---

**32. Best auth strategy?**

- A: localStorage  
- B: httpOnly cookies + secure flags  
- C: JS variable  
- D: CSS  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**33. What is secure cookie?**

- A: CSS  
- B: Sent only over HTTPS  
- C: API  
- D: HTML  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Advanced Concepts

---

**34. What is CORS?**

- A: CSS  
- B: Cross-origin resource sharing  
- C: API  
- D: HTML  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**35. Why CORS exists?**

- A: Performance  
- B: Security restriction  
- C: Styling  
- D: Rendering  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Debugging

---

**36. Why API blocked?**

- A: CSS  
- B: CORS issue  
- C: HTML  
- D: JS  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**37. Why cookie not sent?**

- A: CSS  
- B: SameSite / credentials issue  
- C: HTML  
- D: JS  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Senior Thinking

---

**38. Most dangerous frontend risk?**

- A: CSS  
- B: XSS  
- C: HTML  
- D: API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**39. Best mindset for security?**

- A: Ignore  
- B: Assume client is unsafe  
- C: Trust user  
- D: CSS  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**40. First rule of frontend security?**

- A: Optimize CSS  
- B: Never trust user input  
- C: Use React  
- D: Use API  

<details>
<summary><b>Answer</b></summary>

**B**

</details>
