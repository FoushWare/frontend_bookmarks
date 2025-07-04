<!-- @format -->
<a name="readme-top"></a>

# frontend_bookmarks



🔥Topics Here 📙
- [Ai tools](#AI-Tools-for-Frontend-UI-Generation)
- [What do you need to jump between frameworks smoother ](#what-do-you-need-to-know)
- [security](#comman-patterns-in-security)
- [performance](#performance)
- [Html](#html)
- [Css](#css)
- [Cheet sheet](#cheet-sheet)
- [search about](#search-about)
- [Refresh Learning](#refresh-learning)
- [system design and design systems](#system-design-and-design-systems)
- [Micro frontend](#micro-frontend)
- [API Design](#api)
- [job seeking websites](#job-seeking-websites)
- [First Things First](#first-things-first)
- [Interview questions](#interview-questions)
- [Typescript](#typescript)
- [interview Forms questions](#interview-forms-question)
- [Tools ⚙️⚒️](#tools-and-websites) 
- [Javascript articles](#javascript-articles)
    - [Abstraction](#abstraction) 
    - [3ways to access object properties](#object-access)
- [sources](#sources)
- [code review](#code-review)
- [React Design Patterns](#react-design-patterns)
  - [Render prop](#render-prop)
  - [prop getter](#prop-getter)
  - [inversion of control](#ioc)
 
- [React Rendering patterns](#react-rendering-patterns)
- [presentation with markdown more interactivity](#presentation)
- [🧪 testing](#testing)
- [🔊 Talks](#talks-and-youtube-videos)
- [helper videos](#helper-videos)
- [installation](#installation)
- [React 18](#react18)
- [Rendering](#renderring)
- [Questions to search about later](#questions-later)
- [Configurations](#configs)
- [Building tools for frontend 2023](#build-tools)
- [Monorepo vs polyrepo](#monorepo-vs-polyrepo)
- [Why use BEM](#why-use-BEM)
- [Edge Computing](#edge-computing)
- [notes](#notes)
- [Topics](#topics)
- [browser](#browser)
- [Atomic Design](#atomic-design)
- [some BE work](#backend)
- [problem solving](#problem-solving)



## what do you need to know
* to jump between frameworks you should know some concepts like:

      - component Architecture : like in the past there was dummy components and smart components  components for logic and componets for presenting but now there is loaders that load all the data and all components are dummy components
      - state managment
      - comman patterns in security you should avoid
      - how to make the code reusable and isolated this require to know some design patterns
      - layout and positioning with css

  <p align="right">(<a href="#readme-top">back to top ☝️ 🔼 </a>)</p>

## comman patterns in security

- content-security-policy [CSP](https://vercel.com/guides/understanding-xss-attacks#set-a-content-security-policy-(csp))
- you can access lydia halia course [advanced web developer quiz] video 15 to understand more
- [understand cookies for security](https://vercel.com/guides/understanding-cookies) 🍪
- [configure react with CSP](https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy)
- [sameSite](https://vercel.com/guides/understanding-the-samesite-attribute)
- [norefer,noopenr](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)
- [cors visualized lydia hallie](https://dev.to/lydiahallie/cs-visualized-cors-5b8h)
- patterns of security xss,csrf,ui redressing (click jacking ) , MTM (man in the middle)
- [Open Redirect Vulnerability](https://www.youtube.com/watch?v=4Jk_I-cw4WE&list=PLI_rLWXMqpSl_TqX9bbisW-d7tDqcVvOJ&index=2)
- [Http parametars pollution](https://www.youtube.com/watch?v=QVZBl8yxVX0&list=PLI_rLWXMqpSl_TqX9bbisW-d7tDqcVvOJ&index=2)
- [Insecure Direct Object Reference (IDOR)](https://www.youtube.com/watch?v=rloqMGcPMkI&list=PLI_rLWXMqpSl_TqX9bbisW-d7tDqcVvOJ&index=3)
- [XML External Entities (XXE)](https://www.youtube.com/watch?v=gjm6VHZa_8s&list=PLI_rLWXMqpSl_TqX9bbisW-d7tDqcVvOJ&index=4)


## performance

- core web vitals [fireship video ](https://www.youtube.com/watch?v=0fONene3OIA)
- tools to measure performance [web vital extension](https://chromewebstore.google.com/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma)
- tools to measure performance
  ```
  npx unlighthouse --site  site you need to measure
  ```

- [video hady osmany](https://www.youtube.com/watch?v=AQqFZ5t8uNc)

## html 
- normal document flow [from left to right and from top to bottom] , postionining elements based on block or inline element [video](https://www.youtube.com/watch?v=yqxb4clxszg)

<p align="right">(<a href="#readme-top">back to top ☝️ 🔼 </a>)</p>

## css
- stacking context [video](https://www.youtube.com/watch?v=uS8l4YRXbaw)
- css layouts [video](https://www.youtube.com/watch?v=i1FeOOhNnwU)
- [masonary layout](https://hackernoon.com/how-to-build-a-masonry-layout-using-css?ref=dailydev)

<p align="right">(<a href="#readme-top">back to top ☝️ 🔼 </a>)</p>

## cheet sheet
- flex patterns [flex-patterns](https://attachments.convertkitcdnn.com/150663/071438c9-d64f-469c-83c3-d0dd6105a3a0/useful-flexbox-patterns.pdf?utm_campaign=Landing%20Page%20or%20Form%20-%201884631&utm_medium=email&utm_source=convertkit)
- grid [grid](https://alialaa.github.io/css-grid-cheat-sheet/)
- grid2 [grid2](https://grid.malven.co/)
- flex [flex](https://flexbox.malven.co/)
- animation Easings [Easings](https://easings.net/)
- free resources [books-podcasts](https://github.com/EbookFoundation/free-programming-books?tab=readme-ov-file)
- sheet cheat for all programming langs [cheat sheet](https://www.codecademy.com/resources/cheatsheets/all)

<p align="right">(<a href="#readme-top">back to top ☝️ 🔼 </a>)</p>


## search about

  - thunk vs saga middleware
  - Redux toolkit with typescript
  - MonoRepo [NX for monoRepo](https://nx.dev/) , [video](https://www.youtube.com/watch?v=9iU_IE6vnJ8)
  - NX monorepo vs Turbo Repo ... the interviewer asked me about it and tell me that NX horrible due to migrations 🛎️ search about it before you forget it please
 
## refresh learning
  - redux toolkit (youtube) [Redux toolkit](https://www.youtube.com/playlist?list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3)

## first things first
- Write proper html .... you can test your html markup with this tool ARIA DevTools [ARIA DevTools](https://chrome.google.com/webstore/detail/aria-devtools/dneemiigcbbgbdjlcdjjnianlikimpck)

- first things use the proper html and css to make the code small and maintance
- [ ] display property [display css](https://www.w3schools.com/cssref/pr_class_display.php)
- [ ] css mastery book [css mastery book](https://www.breathebook.info/d/266566)


## system design and design systems
-[course frontent masters](https://frontendmasters.com/courses/design-systems/)

## micro-frontend
- [spa-application](https://single-spa.js.org/docs/microfrontends-concept/)


<p align="right">(<a href="#readme-top">back to top ☝️ 🔼 </a>)</p>

# api 
-[HTTP Long Polling vs Server Sent Events vs Websockets | Tech Primers](https://www.youtube.com/watch?v=1cFyfT0m3bA)

<p align="right">(<a href="#readme-top">back to top ☝️ 🔼 </a>)</p>

## interview forms questions

- what make you the ideal candidate?
> As a senior frontend developer i bring a wealth of experience and expertiese to the table .Wth deep understanding of HTML,CSSand javascript along with proficiency in framwork like React . I am well-equipped to tackle any frontend challenge . My commitment to staying updated with the latest industry trends ensures that i can deliver innovative solutions that meet both user needs and business goals. Additionally , my strong communication skills and leadership qualities make me an ideal candidate for collaborating with cross-functional teams and metoring junior developers.I am excited about the opportunity to leverage my skills and experience to drive success in your organization
## job seeking websites

- [dev kg](https://devkg.com/ru)
- [remote ok](https://remoteok.com)
- [naukrigulf](https://www.naukrigulf.com/)
- [arch dev](https://arc.dev/remote-jobs)
- [jobgether](https://jobgether.com/home)
- [remotive](https://remotive.com/?tags=react%20js)
- [companies-hiring-remote-devs](https://github.com/nmajor25/companies-hiring-remote-devs?tab=readme-ov-file)
- [workatastartup](https://www.workatastartup.com/)

<p align="right">(<a href="#readme-top">back to top ☝️ 🔼 </a>)</p>

## interview questions
- What is the difference between promise and observalble?
Ans: [stackoverflow](https://stackoverflow.com/questions/37364973/what-is-the-difference-between-promises-and-observables)
- [promise all,race,any,settled](https://dev.to/shameel/javascript-promise-all-vs-allsettled-and-race-vs-any-3foj)

- What is Reactive programming?
ans: [youtube](https://www.youtube.com/watch?v=Bme_RiT9CK4)
- what do you know about event loop?
 ans: [article Lydia Hallie](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)
- [lydiahallie question](https://github.com/lydiahallie/javascript-questions/tree/master)
- [React interview questions](https://github.com/sudheerj/reactjs-interview-questions)
- [Rendering pattersn react 10 of them ](https://www.youtube.com/watch?v=Dkx5ydvtpCA&t=9s)
- [Rendering patterns react lydia](https://www.patterns.dev/posts/rendering-patterns)
- [repo for js topics and questions](https://github.com/didicodes/javascript-dev-bookmarks?tab=readme-ov-file)


<p align="right">(<a href="#readme-top">back to top ☝️ 🔼 </a>)</p>



## Typescript

---

###### 01- Difference between const and readonly in typescript?

```
https://stackoverflow.com/questions/46561155/difference-between-const-and-readonly-in-typescript

```


<details><summary><b>Answer</b></summary>
<p>

they effectively both do the same thing, but one is for variables and the other is for properties.
 
 A const variable cannot be re-assigned, just like a readonly property.

Essentially, when you define a property, you can use readonly to prevent re-assignment. This is actually only a compile-time check.
 When you define a const variable (and target a more recent version of JavaScript to preserve const in the output), the check is also made at runtime.
 
 ```
 const x = 5;

// Not allowed
x = 7;


class Example {
    public readonly y = 6;
}

var e = new Example();

// Not allowed
e.y = 4;
 ```
 
 Important note... "cannot be re-assigned" is not the same as immutability.

```
 const myArr = [1, 2, 3];

// Not allowed
myArr = [4, 5, 6]

// Perfectly fine
myArr.push(4);

// Perfectly fine
myArr[0] = 9;
 
 ```

</p>
</details>

* (utility types](https://timmousk.com/blog/typescript-utility-types/#picktype-keys)

---

- [Solid Principles in Typescript](https://www.jmalvarez.dev/posts/open-closed-principle)


<p align="right">(<a href="#readme-top">back to top ☝️ 🔼 </a>)</p>

## sources 

- [smashing Magazine](https://www.smashingmagazine.com/)

<img src="./images/smashing__magazine.jpg" style="width:150px" />

<p align="right">(<a href="#readme-top">back to top ☝️ 🔼 </a>)</p>

## Tools and websites
- [SVG Custom Shape Dividers](https://www.shapedivider.app/)
- [Make some waves!](https://getwaves.io/)
- [css cheat sheet interactive not pdf](https://app.daily.dev/posts/fb8jSmx9X)
- [squoosh for image reduce sizes](https://squoosh.app/)
- [X] [Pair Typography fonts](https://fontjoy.com/) 
 <img src="./images/font__pairing.PNG" style="width:400px" />
 
- [X] [empty views svgs](https://undraw.co/illustrations)
 <img src="./images/empty.PNG" style="width:400px" />

<p align="right">(<a href="#readme-top">back to top ☝️ 🔼 </a>)</p>

## javascript articles 

### async and defer with html 
- [async and defer ](https://dev.to/fidalmathew/async-vs-defer-in-javascript-which-is-better-26gm?ref=dailydev)
#### object access
- [object access properties](https://dmitripavlutin.com/access-object-properties-javascript/)

#### abstraction
  - [AHA programming](https://kentcdodds.com/blog/aha-programming)
  - [wrong abstraction](https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction#:~:text=If%20you%20find%20yourself%20passing,it%20show%20you%20what's%20right.)

- [ ] javascript-visualized-event-loop-3dif article lidia

  - [javascript-visualized-event-loop-3dif article lidia](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)

- [ ] 7-shorthand-optimization-tricks-every-javascript-developer-should-know
  - [7-shorthand-optimization-tricks-every-javascript-developer-should-know](https://tapajyoti-bose.medium.com/7-shorthand-optimization-tricks-every-javascript-developer-should-know-bf4e136d4497)
- [ ] frontend desgin helper websites
  - [front end desgin helper websites](https://www.linkedin.com/feed/update/urn:li:activity:6995829940541644800/?utm_source=share&utm_medium=member_android)
- [ ] js interview questions

  - [Javascript interview questions](https://www.linkedin.com/feed/update/urn:li:activity:6995420810395992064/?utm_source=share&utm_medium=member_android)
  



* > Event propagation

   <img src="./images/Event_bubbling.jpg" style="width:300px" />

- [x] A simplified explanation of event propagation in JavaScript.
  - [A simplified explanation of event propagation in JavaScript.](https://www.freecodecamp.org/news/a-simplified-explanation-of-event-propagation-in-javascript-f9de7961a06e/)

- [X] SWR vs react query vs axios vs fetch
* > - [SWR](https://www.smashingmagazine.com/2020/06/introduction-swr-react-hooks-remote-data-fetching/#:~:text=Axios%20or%20Fetch%20will%20just,built%20on%20top%20of%20it.)

###### ❔ 👽 what is the difference between types and interface?
<details><summary><b>Answer</b></summary>
<p>

https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript

</p>
</details>

# My questions while learning ReactJS,NetxJS,...
---
> ## React Query 
   <img src="./images/reactquery.svg" style="width:300px" />


###### 00- What is the main difference between React Query and Redux?
###### 01- can react query replace Redux toolkit?

```
   currently I am using redux in different projects for state management. A few days back, I listened about react-query
   which is also used for state management and provides caching and async fetching. I am trying to figure out the main difference
   between these two libraries. Where I should use react-query and in which cases I need redux.

```


<details><summary><b>Answer</b></summary>
<p>

React-query is what you would call a specialized library. It holds an api cache for you - nothing else. And since it is specialized, it does that job quite well and requires less code.

Redux on the other hand gives you tools to just about store anything - but you have to write the logic. So you can do a lot more in Redux, but you'll have to potentialy write code that would not be necessary with a specialized library.

You can use them both side-by-side: api cache in react query, rest of your global state in Redux.

That said, the official Redux Toolkit also ships with an api cache abstraction RTK Query since version 1.6 with a similar feature set as React Query, but some different concepts overall - you might also want to check that out.

</p>
</details>


---

###### 02- Lorem question?

```
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,

```


<details><summary><b>Answer</b></summary>
<p>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,

</p>
</details>

---


> ## SWR VS react query

---




###### 02- When to use SWR ,react query or RTK query?

```
All of them add enhance to [fetch or Axios] by caching,pagination,preservce page postion,revalidation,interval refetching

```
   <img src="./images/swrVSReactQuery.jpg" style="width:500px" />



<details><summary><b>Answer</b></summary>

They are the same but my peripheral is 
  - when the app uses ReduxTool kit i will use RTK Query
  - when the app uses simple state i will use react Query
  - SWR is more intended to get data, not update it, usually you have another function to update and after it you will run mutate to update the cache and trigger a revalidation (SWR will fetch it again)


</details>

---

###### 03- What to do when creating React app from scratch?

```
Can you describe what will you think about when creating react app from scratch

```
  



<details><summary><b>Answer</b></summary>




</details>

---

---

###### 04- What you will do to increase performance in react?

<img src="./images/react-performance-profiling-optimization.gif"/>

```
Not doing things take less time than doing things

```
  



<details><summary><b>Answer</b></summary>

- push state down the tree so not to rerender heavy siplings components   [working with component hierarchy ]
- Pulling content up what i mean is :                                     [working with component hierarchy ]
 
 ```
  if the problem is 
  
 > app.js
 ========
     <WrapperComponent/>
 
 
 > WrapperComponent.js
 ===========
 
    <simpleComponent/>
    <HeaveryComponent/>
 
 
 solution will be 
 
 app.js
 ======
 <WrapperComponent>
  <SimpleComponent/>
 </WrapperComponent>
 
 > WrapperComponent.js
 
 {children}
 <HeavyComponent/>
 
 
 > children it treated as it's not sipling of HeavyComponent  😛😛😛
 
 
 ```

 - useMemo 
 - useCallback


</details>

---
<p align="right">(<a href="#readme-top">back to top ☝️ 🔼 </a>)</p>

## code review
[read this article and write your checklist](https://pagepro.co/blog/18-tips-for-a-better-react-code-review-ts-js/)

<p align="right">(<a href="#readme-top">back to top ☝️ 🔼 </a>)</p>

## react design patterns
- [Good Resource to practise patterns with lidiaHali](https://javascriptpatterns.vercel.app/patterns/design-patterns/singleton-pattern)

 - # render prop 
    - [Render prop kent c.doies](https://kentcdodds.com/blog?q=render+prop)
    - [props pattern patterns.dev](https://www.patterns.dev/posts/render-props-pattern) 
    - [Never use HOC ..video](https://www.youtube.com/watch?v=BcVAq3YFiuc)
 - # prop getter
   - [prop getter](https://kentcdodds.com/blog/how-to-give-rendering-control-to-users-with-prop-getters)
```
 maximum flexibility with minimal api ....like downshift it gives use two hooks and you can extend the functionality as you want
```
- [Module pattern](https://www.patterns.dev/posts/module-pattern)
- [React Hooks: What's going to happen to render props?](https://kentcdodds.com/blog/react-hooks-whats-going-to-happen-to-render-props) 
- # Ioc
  - [inversion on control](https://kentcdodds.com/blog/inversion-of-control)

<p align="right">(<a href="#readme-top">back to top ☝️ 🔼 </a>)</p>

## react rendering patterns
- First things first what is rendering?
- > rendering is turning code + data TO => Html
  >  (This can be done on the server OR Browser)
  > This can be done all at once OR partially i.e [ Render Now , Render on Scroll]
  > and these all have trade-offs in terms of [user-experience , performance, developer-experience ]

## presentation
[mdx-deck: slide decks powered by markdown and react](https://kentcdodds.com/blog/mdx-deck-slide-decks-powered-by-markdown-and-react)

<p align="right">(<a href="#readme-top">back to top ☝️ 🔼 </a>)</p>

## testing
- [static testing](https://kentcdodds.com/blog/eliminate-an-entire-category-of-bugs-with-a-few-simple-tools)
- [Never use shallow rendering](https://www.youtube.com/watch?v=zkpwdw_JWBg)
- [testing-implementation-details](https://kentcdodds.com/blog/testing-implementation-details)
- [why-i-never-use-shallow-rendering](https://kentcdodds.com/blog/why-i-never-use-shallow-rendering)
- [stop-mocking-fetch](https://kentcdodds.com/blog/stop-mocking-fetch)

<p align="right">(<a href="#readme-top">back to top ☝️ 🔼 </a>)</p>

## talks and youtube videos
- [Arabic Advanced Git](https://www.youtube.com/playlist?list=PLDSsH9x1gRyHlHT1gizpNbGqAUpit77XH)

## Helper videos
- [Microservice and react](https://www.youtube.com/watch?v=wwktn2EafpM)

## installation
-
## react18
- [release notes](https://reactjs.org/blog/2022/03/29/react-v18.html)
- [upgrade guid](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html)
- [suspense](https://github.com/reactjs/rfcs/blob/main/text/0213-suspense-in-react-18.md)
- [creat Root](https://github.com/reactwg/react-18/discussions/5)
- [transation](https://github.com/reactwg/react-18/discussions/41)

## renderring
- [render as you fetch](https://medium.com/jspoint/introduction-to-react-v18-suspense-and-render-as-you-fetch-approach-1b259551a4c0)

## questions later
- what is use client in Nextjs13 and why in nextjs13 server side components is the default ?


## configs
- Nextjs13 + Antd 5 [App Router]  flicking problem

  <details><summary><b>Answer</b></summary>

    1.Create /app/components/AntdProvider
    ```
        'use client'
        import { useState, type PropsWithChildren } from 'react'
        import { useServerInsertedHTML } from 'next/navigation'
        import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
        
        export const AntdProvider = ({ children }: PropsWithChildren) => {
          const [cache] = useState(() => createCache())
        
          useServerInsertedHTML(() => {
            return (
              <script
                dangerouslySetInnerHTML={{
                  __html: `</script>${extractStyle(cache)}<script>`,
                }}
              />
            )
          })
        
          return <StyleProvider cache={cache}>{children}</StyleProvider>
        }
    ```
    2.If you want to custom your antd theme,create /app/components/AntdStyleProvider
    ```
        'use client';
        
        import { PropsWithChildren, useEffect, useState } from 'react';
        import { ConfigProvider } from 'antd';
        import { AntdProvider } from './AntdProvider';
        
        export function AntdStyleProvider({ children }: PropsWithChildren) {
            return (
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#52c41a',
                        },
                    }}
                >
                    <ConfigProvider
                        theme={{
                            token: {
                                borderRadius: 16,
                            },
                        }}
                    >
                        <AntdProvider>{children}</AntdProvider>
                    </ConfigProvider>
                </ConfigProvider>
            );
        }
  ```
    3.Create the layout for the root page，/app/layout.tsx
    ```
        import type { PropsWithChildren } from 'react'
        import { AntdProvider } from './components/AntdProvider'
        import {AntdStyleProvider} from './components/AntdStyleProvider'
        
        export default function RootLayout({ children }: PropsWithChildren) {
          return (
            <html lang="es">
              <head />
              <body>
                <AntdStyleProvider>{children}</AntdStyleProvider>
              </body>
            </html>
          )
        };
    ```
    4./app/page.tsx
    ```
        'use client'
        import React, { Button } from 'antd'
        export default function Home() {
          return  <Button>Ant Design Button</Button>
        }
    ```
    This works for me
    But I also have a question，i use 'use client' in the provider，it surrounds all the child components , does it mean all the application is client ? if it is ,as @kkx64 said, i think antd5 does not fit next.js13，can someone answer the question?
    
    

 </details>

    - the best working soluation is here 
    [soluation](https://github.com/sagemathinc/cocalc/issues/6320)
  </details>

  - social login [React+RestfulApi with any backend]
      - [#Good Medium Article](https://alexanderleon.medium.com/implement-social-authentication-with-react-restful-api-9b44f4714fa) 


  

# build tools
[Article](https://stackdiary.com/build-tools-for-web-development/)
# monorepo vs polyrepo
- [Article medhat darwash](https://medhatdawoud.net/blog/using-monorepos-is-not-that-bad-case-study)

# why use BEM
[video](https://www.youtube.com/watch?v=SLjHSVwXYq4)
# edge computing
While reading this article for rendering patterns [article](https://www.patterns.dev/posts/rendering-patterns) i hit this concept
[video](https://www.youtube.com/watch?v=yOP5-3_WFus)

# notes
01- Domain Driven design
[01](https://raw.githubusercontent.com/FoushWare/frontend_bookmarks/master/images/domainDrivenDesign01.jpeg)
[02](https://raw.githubusercontent.com/FoushWare/frontend_bookmarks/master/images/domainDrivenDesign02.jpeg)


<p align="right">(<a href="#readme-top">back to top ☝️ 🔼 </a>)</p>



# topics
- function generators
    - [video web simplify](https://www.youtube.com/watch?v=IJ6EgdiI_wU&t=1s)
    - [article lydia](https://dev.to/lydiahallie/javascript-visualized-generators-and-iterators-e36)
 
- for...of
  - [article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
  - [code](https://github.com/FoushWare/frontend_bookmarks/blob/master/ArticlesCode/Generators%26iterators/generator.js)
 
      
<p align="right">(<a href="#readme-top">back to top ☝️ 🔼 </a>)</p>


## browser 
- [bfcache](https://developer.chrome.com/docs/web-platform/deprecating-unload?ref=dailydev)

## atomic design 
- [article](https://bradfrost.com/blog/post/atomic-web-design/)

## backend
- [mongo db crash course fast talking is greet 😆](https://www.youtube.com/watch?v=QPFlGswpyJY)



## problem solving

- #### Analysis of Algorithms
  - 
  - [log timing Deeply Understanding Logarithms In Time Complexities & Their Role In Computer Science](https://www.youtube.com/watch?v=M4ubFru2O80) you can see implemention for binary search like in this video [search an element in bitonic array](https://www.youtube.com/watch?v=hV7z1w8u8Us)



<p align="right">(<a href="#readme-top">back to top ☝️ 🔼 </a>)</p>

# binary tree 
- [what is binary tree](https://chatgpt.com/share/a99e517f-bdd5-48f0-8a48-0636bbc72946)




## AI Tools for Frontend UI Generation

AI-powered tools that help generate UI components and designs in real-time:

### Live UI Generation
- **[v0](https://v0.dev/)** - AI-powered UI component generator by Vercel (React, Tailwind)
- **[lovable](https://lovable.dev/)
- **[replit](https://replit.com/)
- **[Locofy](https://www.locofy.ai/)** - Convert designs to responsive code (Figma/Adobe XD to React/Next.js)
- **[BoltAI](https://www.boltai.com/)** - AI assistant for frontend developers
- **[Anima](https://www.animaapp.com/)** - Design to code automation

### Design to Code
- **[Figma AI](https://www.figma.com/ai/)** - Figma's built-in AI features for design generation

### Component Libraries
- **[Mantine AI](https://mantine.ai/)** - AI-generated Mantine components
- **[Chakra UI AI](https://chakra-ui.com/)** - AI-assisted Chakra component generation

### Prototyping
- **[Framer AI](https://www.framer.com/ai/)** - AI website generator in Framer
- **[Draftbit](https://draftbit.com/)** - AI-assisted mobile app builder

<p align="right">(<a href="#readme-top">back to top ☝️ 🔼 </a>)</p>




