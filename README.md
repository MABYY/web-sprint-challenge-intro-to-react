# Intro to React Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **introductory React**. During this sprint, you studied **React components and advanced styling**.

In your challenge this week, you will demonstrate your mastery of these skills by creating **a Star Wars page** using data from an API.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [ ] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [ ] Open the assignment in Canvas and click on the "Set up git" option.
- [ ] Follow instructions to set up Codegrade's Webhook and Deploy Key.
- [ ] Push your first commit: `git commit --allow-empty -m "first commit" && git push`.
- [ ] Check to see that Codegrade has accepted your git submission.

For a step-by-step on setting up Codegrade see [this guide.](https://www.notion.so/lambdaschool/Submitting-an-assignment-via-Code-Grade-A-Step-by-Step-Walkthrough-07bd65f5f8364e709ecb5064735ce374)

## Project Instructions

### Introduction

In this challenge you will create a web page that presents a styled list of characters obtained from an API. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

In meeting the minimum viable product (MVP) specifications listed below, your project might look somewhat similar to the solution examples below:

[Example](https://tk-assets.lambdaschool.com/b011a132-0916-4ed2-8955-14192de03a75_sample-screenshot.png)

[Another example](https://tk-assets.lambdaschool.com/3b82c793-2352-4d4d-a81d-e55bf350f7bd_sample-screenshot2.png)

### Instructions

Your finished project must include all of the following requirements:

- [ ] Use the endpoint `[GET] https://swapi.dev/api/people` (mocked in [msw](https://github.com/mswjs/msw)) to obtain characters.
- [ ] Set the list of characters into state.
- [ ] Render your characters to the DOM:

  1. Build a React component named 'Character' to render an individual character.
  1. Map over the list in state, and for each character render a Character to the page.
  1. Each rendered character must display its name in the DOM (e.g. "Luke Skywalker").
  1. The character's name can't be hard-coded into the HTML. This data must be obtained from the API.
  1. The components must be styled with **styled-components**.

  **Notes:**

- Data obtained from the endpoint using browser-run JavaScript is mocked with [msw](https://github.com/mswjs/msw).
- If you test the endpoint using HTTPie or Postman you will obtain different results, as msw won't intercept the request.
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries.
- The `start` process can sometimes choke after adding new dependencies and may need to be restarted.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on any the following optional goals:

- [ ] Make the Character component more complex and break it into several subcomponents.
- [ ] Use the endpoint `[GET] https://swapi.dev/api/films` (mocked in msw) to obtain movie information to render with the characters.
- [ ] Create a helper function in separate module to remove unneeded information from the API data, before putting it in state.
- [ ] Create transitions or animations with styled-components.
- [ ] Use Promise.all to resolve an array of promises.

## Submission format

- [ ] Submit via Codegrade by committing and pushing any new changes.
- [ ] Create a pull request to merge `<firstName-lastName>` branch into `main`.
- [ ] Please don't merge your own pull request and make sure **you are on your own repo**.
- [ ] Check Codegrade for automated feedback.
- [ ] Check Codegrade in the days following the Sprint Challenge for reviewer feedback.
- [ ] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

When a web page is loaded into a browser, the browser uses the HTML and the CSS files as a set of instructions on how to build the page. The browser parses these instructions and builds a model for how the page should look and act using Javascript. This JavaScript Object is referred to as the DOM, or Document Object Model.

The DOM is built as a data structure known as a 'Tree', because parent elements have nested children elements. This allows us to manipulate the DOM by using Javascript. We use Javascript to make our pages dynamic and usable. Thus, we can manipulate them and change their characteristics from the original html. An important feature of the DOM is the ability to create brand new elements dynamically. 

Every user interaction with a site is an event. When an event happens on a page, it is known as a trigger. The browser is always tracking them through the event listeners we set on the elements in the DOM and execute the callback functions. We can use this to manipulate the target in any way we want. Any time there is some interaction, the DOM creates and propagates an event object. This event object carries information about the event so that it may be handled at any point up the tree from the point of origin. JavaScript is used to consume the data and output the content into the DOM. 


React is a Javascript library for building complex, rich user interfaces. React works with a virtual DOM. Every time Reacts detects a change in the state of the app it will update the virtual DOM, taking note of which nodes have changed due to the state changes. Finally, it will update only those specific nodes on the actual DOM.

React allows the user to compose complex IUs from isolated pieces of code called components. Componets take may parameters (props) as input and returns a description of what we want to see on the screen using the render method. Most React developers use a special syntax called “JSX” which makes these structures easier to write.

When JavaScript was first introduced, inserting it into a web application meant writing the code inside of a script tag inside of an HTML file. The script ran sequentially, that is, from top to bottom. Back then, if you wanted to use the same code in another project, you had to copy and paste it. There were also performance issues - namely, functions and variables were all global - if you weren't careful, you could quickly see the trouble with declarations holding unexpected values. 

The release of Node.js in 2009 meant that JavaScript could now execute outside of the browser. With the latest version of JS, we can now export functions, data, components from our files by merely prefixing the export keyword. Then, when we want to bring such features into our file, we use the import keyword, the name of the exported item, and specify where it's located

2. Describe component state.

A component is made of several parts: HTML, CSS, or JavaScript brought together for reuse in a website or application. These are reusable pieces of code that can be used to build elements sharing functionality and styling triggered by an event. React uses components to display data to the screen for our users. Your state changes and your application reacts.

A stateful component is one that holds state data, either as an object placed inside the constructor function, or a function component that includes the .useState function.

In a process called "reconciliation", React will detect that the state of the app has changed. Then it will update the virtual DOM, taking note of which nodes have changed due to the state changes. Finally, once it knows which nodes have changed, it will update only those specific nodes on the actual DOM. This takes a lot of pressure off of our browsers and it's why React is as powerful as it is.

In other words, “state” allows us to create components that are dynamic and interactive.

3. Describe props.

Components may take information held on state inside one component to another component by using props. Components then return a description of what we want to see on the screen using the render method. Most React developers use a special syntax called “JSX” which makes these structures easier to write.

4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

A side effect is anything that affects something outside the scope of the function being executed. A a side effect can cause a component to return a different output for the same state and props. React offers us tools for managing side effects. The effect hook (useEffect()) is one of those. By using a dependency array as the second argument in the effect hook, we can tell it with which state or props the effect should be triggered. 

A React component without side effects is called a pure component. A component is considered pure if it always renders the same output for the same state and props.