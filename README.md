<!-- @format -->
<a name="readme-top"></a>

# 🚀 Frontend Bookmarks for Interview Prep  

A curated list of study notes, references, and resources to prepare for **Frontend Engineer interviews**.  

---

## 📖 Table of Contents  

- 🎯 [First Things First](#first-things-first)  
- 🌐 [HTML](#html) | 🎨 [CSS](#css) | 🧩 [JavaScript](#javascript-articles) | 🌀 [Typescript](#typescript)  
- ⚛️ [React](#react)  
  - [Design Patterns](#react-design-patterns)  
  - [Rendering Patterns](#react-rendering-patterns)  
  - [Performance](#performance)  
  - [Testing](#testing)  
- 🛡️ [Security](#comman-patterns-in-security)
- 🌀 [Git & Version Control](#git--version-control)  
- 🛠️ [Tools & Resources](#tools-and-websites)  
- 📐 [System Design & Architecture](#system-design-and-design-systems)  
  - [Micro-Frontend](#micro-frontend)  
  - [API Design](#api)  
  - [Monorepo vs Polyrepo](#monorepo-vs-polyrepo)  
- 📚 [Cheat Sheets](#cheet-sheet)  
- 🧑‍💻 [Interview Prep](#interview-questions)  
  - [Form Questions](#interview-forms-questions)  
  - [Job Boards](#job-seeking-websites)  
- 🤖 [AI Tools](#ai-tools-for-frontend-ui-generation)  
- 🔊 [Talks & Videos](#talks-and-youtube-videos)  
- 📓 [Notes & Misc](#notes)  
- 🔮 [Topics to Research Later](#questions-later)  
- 🧪 [Problem Solving](#problem-solving)  

---

## 🎯 First Things First  

- ✅ Write semantic, accessible HTML (use [ARIA DevTools](https://chrome.google.com/webstore/detail/aria-devtools/dneemiigcbbgbdjlcdjjnianlikimpck))  
- ✅ Optimize CSS & HTML for **maintainability**  
- 📖 [CSS Display Reference](https://www.w3schools.com/cssref/pr_class_display.php)  
- 📗 *CSS Mastery Book*  

<p align="right">(<a href="#readme-top">Back to top ☝️</a>)</p>

---

## 🌐 HTML  

- **Normal Document Flow** → Block vs Inline, flow top → bottom, left → right  
  - [Video: Document Flow](https://www.youtube.com/watch?v=yqxb4clxszg)  

---

## 🎨 CSS  

- [Stacking Context](https://www.youtube.com/watch?v=uS8l4YRXbaw)  
- [CSS Layout Techniques](https://www.youtube.com/watch?v=i1FeOOhNnwU)  
- [Masonry Layout](https://hackernoon.com/how-to-build-a-masonry-layout-using-css?ref=dailydev)  

📑 **Cheat Sheets**:  
- [Flexbox Patterns (PDF)](https://attachments.convertkitcdnn.com/150663/071438c9-d64f-469c-83c3-d0dd6105a3a0/useful-flexbox-patterns.pdf)  
- [Grid Cheat Sheet](https://alialaa.github.io/css-grid-cheat-sheet/)  
- [Grid2](https://grid.malven.co/) | [Flexbox](https://flexbox.malven.co/)  
- [Easing Functions](https://easings.net/)  

---

## 🧩 JavaScript Articles  

- [Async vs Defer in HTML](https://dev.to/fidalmathew/async-vs-defer-in-javascript-which-is-better-26gm)  
- [Access Object Properties](https://dmitripavlutin.com/access-object-properties-javascript/)  
- [Wrong Abstraction](https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction)  
- [7 Shorthand Tricks](https://tapajyoti-bose.medium.com/7-shorthand-optimization-tricks-every-javascript-developer-should-know-bf4e136d4497)  
- [JS Event Propagation Explained](https://www.freecodecamp.org/news/a-simplified-explanation-of-event-propagation-in-javascript-f9de7961a06e/)  

📘 Interview Prep:  
- [JS Interview Questions Repo](https://github.com/didicodes/javascript-dev-bookmarks)  
- [Lydia Hallie JS Qs](https://github.com/lydiahallie/javascript-questions)  

---

## 🌀 Typescript  

- [Const vs Readonly](https://stackoverflow.com/questions/46561155/difference-between-const-and-readonly-in-typescript)  
- [Utility Types](https://timmousk.com/blog/typescript-utility-types/#picktype-keys)  
- [SOLID Principles in TS](https://www.jmalvarez.dev/posts/open-closed-principle)  

---

## ⚛️ React  

### 🔹 Design Patterns  

- [Singleton, Module, etc.](https://javascriptpatterns.vercel.app/patterns/design-patterns/singleton-pattern)  
- [Render Props](https://kentcdodds.com/blog?q=render+prop)  
- [Prop Getter Pattern](https://kentcdodds.com/blog/how-to-give-rendering-control-to-users-with-prop-getters)  
- [Inversion of Control](https://kentcdodds.com/blog/inversion-of-control)  

### 🔹 Rendering Patterns  

- [Patterns.dev Rendering Patterns](https://www.patterns.dev/posts/rendering-patterns)  
- [React Rendering Patterns (Video)](https://www.youtube.com/watch?v=Dkx5ydvtpCA)  

### 🔹 Performance  

- [Core Web Vitals (Fireship)](https://www.youtube.com/watch?v=0fONene3OIA)  
- [React Perf Profiling](./images/react-performance-profiling-optimization.gif)  
- ✅ `useMemo`, `useCallback`, push state down, lift children correctly  

### 🔹 Testing  

- [Don’t Mock Fetch](https://kentcdodds.com/blog/stop-mocking-fetch)  
- [Don’t Use Shallow Rendering](https://kentcdodds.com/blog/why-i-never-use-shallow-rendering)  

---

## 🛡️ Security  

- [CSP Basics](https://vercel.com/guides/understanding-xss-attacks#set-a-content-security-policy-(csp))  
- [SameSite Cookies](https://vercel.com/guides/understanding-the-samesite-attribute)  
- [CORS Visualized – Lydia Hallie](https://dev.to/lydiahallie/cs-visualized-cors-5b8h)  
- OWASP Topics: XSS, CSRF, IDOR, Clickjacking, XXE  

---

## 📐 System Design and Design Systems  

- [Frontend Masters Course](https://frontendmasters.com/courses/design-systems/)  
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)  

### Micro-Frontend  

- [Single-SPA Docs](https://single-spa.js.org/docs/microfrontends-concept/)  

### API  

- [Long Polling vs SSE vs WebSockets](https://www.youtube.com/watch?v=1cFyfT0m3bA)  

---

## 🛠️ Tools and Websites  

- [SVG Shape Divider](https://www.shapedivider.app/)  
- [Get Waves](https://getwaves.io/)  
- [Squoosh (Image Compression)](https://squoosh.app/)  
- [Font Pairing](https://fontjoy.com/)  
- [Undraw Illustrations](https://undraw.co/illustrations)  

---

## 🧑‍💻 Interview Prep  

### Common Questions  

- [React Interview Questions Repo](https://github.com/sudheerj/reactjs-interview-questions)  
- [Promise vs Observable](https://stackoverflow.com/questions/37364973/what-is-the-difference-between-promises-and-observables)  
- [Event Loop Explained](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)  

### Form Questions  

- *Why are you the ideal candidate?*  
<details><summary><b>Answer</b></summary>  
I bring a wealth of experience in React, TS, and modern frontend practices…  
</details>  

### Job Boards  

- [Remote OK](https://remoteok.com)  
- [Arc.dev](https://arc.dev/remote-jobs)  
- [NaukriGulf](https://www.naukrigulf.com/)  
- [WorkAtAStartup](https://www.workatastartup.com/)  

---

## 🤖 AI Tools for Frontend UI  

- [Vercel v0](https://v0.dev/)  
- [Locofy](https://www.locofy.ai/)  
- [Framer AI](https://www.framer.com/ai/)  
- [RapidCharts](https://www.rapidcharts.ai/)  

---

## 🔊 Talks & Helper Videos  

- [Arabic Advanced Git (Playlist)](https://www.youtube.com/playlist?list=PLDSsH9x1gRyHlHT1gizpNbGqAUpit77XH)  
- [Microservices & React](https://www.youtube.com/watch?v=wwktn2EafpM)  

---

## 🧪 Problem Solving  

- [Deep Dive into Logarithms in Time Complexity](https://www.youtube.com/watch?v=M4ubFru2O80)  
- [Binary Search in Bitonic Array](https://www.youtube.com/watch?v=hV7z1w8u8Us)  

---

<p align="right">(<a href="#readme-top">Back to top ☝️</a>)</p>

## 🌀 Git & Version Control  

- ✅ Use feature branches instead of pushing directly to `main`  
- ⚠️ Avoid `git push --force` on shared branches. Prefer:  
  ```bash
  git push --force-with-lease
📺 The Dangers of Git Force Push (YouTube)

Protect important branches in GitHub/GitLab to avoid accidental force pushes

Communicate with your team before rewriting history


