# React
- Most popular javascript library
- used to build large-scale front-end application
- Two ways available to incorporate react in project
  
## 1st - CDN Links in react
- network of servers distributed geographically to deliver content to users more efficiently.
- for react it is a place where we have react libraries hosted and we are pulling these into our project

## Benefits of Using a CDN:
- Faster Load Times: By delivering content from a server closest to the user, CDNs reduce latency and improve load times.
- Reduced Server Load: Offloading traffic to a CDN reduces the burden on your primary server, enhancing performance.
- Reliability: CDNs offer redundancy, ensuring content availability even if one server goes down.
- Scalability: Easily handle high traffic volumes without affecting performance.

## Steps to add React using CDN links
- Go to https://legacy.reactjs.org/docs/cdn-links.html
- Above will have 2 versions of React and ReactDOM CDN links available
    - Development
    - Productoon
- Copy the development links and add the same in startup file of project
```js
 <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
 <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

## 2nd - Using npm (npmjs.com)
- package manager which is collection of libraries.
- standard repository for all the packages.
- all package(libraries, utilities) are hosted here.
- NPM manages these packages

## Steps to include npm in project
- Run command "npm init" on teminal
- Specify the required details it is asking for.
- As a reult we will get "package.json" (configuartion for npm)

## React and ReactDOM
- React not only works on browsers but also on mobiles (react native) etc devices also. That is why wehave 2 files
    - React -> consists of core react functionality
    - React-Dom -> bridge between react and browser. It is having react operations thats can modify document.

## React Element
- similar to DOM element but not the DOM Element. 
- React element is basically an object.
- when we render react element on DOM, then it becomes DOM element/HTML Element that we see on web page.

## How to create react element in traditional way
```js
React.createElement("h1",{id: "heading"}, "This is heading tag")
```
- createElement will take 3 parameters
  - tag/element that needs to be created
  - object that can have additional tag properties/attributes.
  - Child of tag which can be either a plain string or can be another react element.

## Rendering Data (React Element)
- If we are rendering any thing inside element of HTML, what ever content it earlier has will get replaced with latest render content   
```js
var root = ReactDom.createRoot("root");
const heading = React.createElement(
  "h1",
  { id: "heading", key: "heading" },
  "Hello World! from react"
);
root.Render(heading);
```
**Note:** React.createElement => object => Render() => HTML element

## Bundlers
- We need to bundle our code, minify our code, clean our code etc before deploying to production. For that we use bundlers. 
- Examples -> WebPack(default when project created using create-react-app), Parcel, Veet
- It bundles/package the app for deployment on production
- **Parcel** -It comes as node package. To incldue it in project we need to use **npm**
    - npm install -D parcel   // here -D is for dev dependencies
    - Zero Config tool
    - it will install say parcel latest version and show it in package.json as -> "parcel": "^2.13.0"
    - it will build development app
    - create a server for us 
    - host app on that server -> provide URL + port.
    - do "Hot Module Replacement (HMR)" as parcel uses file watching algo(written in c++)
        - is a feature that improves the development experience by automatically updating modules in the browser at runtime without needing a full page refresh
        - the application state can be retained as you make changes to your code, making development faster and more efficient
    - parcel is caching things for us that's why it is taking less time in building project next time (.parcel-cache folder)
    
    ![alt text](readme_images/image.png)
    
    - Image optimization
    - Minification and bundling of files
    - Compress files
    - Consistent Hashing
    - Code Splitting
    - Differetial Bundling - to support older browsers
    - Diagnostics
    - Good Error Handling
    - Provides way to host app on HTTPS
    - Tree Shaking - remove unused code.
    - Has Lazy mode also => npm install parcel --lazy
    - Different bundle/build for dev and production

## Dependencies
- There are 2 types are dependencies in app
    - Dev (Dev dependencies means required only in developmemt phase. For that we used -D with command) 
    - Normal

## Caret(^)
**Syntax:** ^MAJOR.MINOR.PATCH
**Behavior:** Allows updates that do not change the first non-zero number from the left. This means the minor and patch versions can be updated as long as the major version stays the same.
**Use Case:** Suitable when you want to receive non-breaking updates, ensuring that major version changes (which may introduce breaking changes) are not included automatically.
        
## Tilde (~)
**Syntax:** ~MAJOR.MINOR.PATCH
**Behavior:** Allows updates to the patch version, but fixes the minor version. This means only the patch version can be updated to newer releases, while the major and minor versions must remain the same.
**Use Case:** Suitable when you want to receive only critical bug fixes and avoid new features that might come with minor version updates.

## package.json and package-lock.json
**package.json** - configuartion for npm. Here version can caret or tiled
**package-lock.json** 
    - keeps track of exact version that is installed. It locks the dependency version installed. 
    - "Integrity" in it has the HASH(SHA512) to verify that whatever is there right now in dev machine is the same version which is being deployed on production.

## Tansitive Dependencies (Dependency tree)
- say our project has Parcel dependency which in further can have other depndencies which further can have other depenedencies and so on.. These dependencies are called transitive dependencies.
- Every package in node_modules(collection of dependencies) will have it own package.json, and further dependencies.

## .gitignore file
- since we don't want node_modules to go to git, we can add that in .gitignore

## Build project using parcel
- npx parcel "source file" (npx means executing a package)
    example -> npx parcel index.html
- all build file will get stored in "dist" folder

## Production build
- npx parcel **build** "<source file>"
- Also remove "main": "app.js" from package.json

![alt text](readme_images/image-1.png)
    
## Install React
- "npm install react" OR "npm i react"
  **Note:** it should not be dev dependency

## Install react-dom
- "npm install react-dom"
  **Note:** it should not be dev dependency

## Steps to make code working using npm libraries and using traditional way of app.js React code (via React.CreateElement())
- In app.js, we need to import React and ReactDOM to make the code working without CDN links and using npm libraries.
  ```js
    import React from "react";
    import ReactDOM from "react-dom/client";
  ```
- Also, we need to add "**type="module**" to start script files script tag
  ``` js
  <script type="module" src="./app.js"></script>
  ```

- app.js
  ```js
    import React from "react";
    import ReactDOM from "react-dom/client";
    
    const root = ReactDOM.createRoot(document.getElementById("root")); 
    const parent = React.createElement("div", { id: "parent" }, [
      React.createElement("div", { id: "child", key:"child1" }, [
        React.createElement(
            "h1",
            { id: "heading", key: "Child1heading1" },
            "Hello World! from react"
          ),
        React.createElement(
          "h3",
          { key: "Child1Heading2" },
          "First Child HTML creation"
        ),
      ]),
      React.createElement("div", { id: "2nd child", key:"child2" }, [
        React.createElement(
            "h1",
            { id: "heading", key: "Child2heading1" },
            "Hello World! from react"
          ),
        React.createElement(
          "h3",
          { key: "Child2Heading2" },
          "Second Child HTML creation"
        ),
      ]),
    ]);
    
    root.render(parent);
  ```

  -index.html
  ```js
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Namaste React</title>
        <link rel="stylesheet" href="./index.css"/>
    </head>
    <body>
        <div id="root">     
        </div>    
        <!-- using react  -->
        <script **type="module"** src="./app.js"></script>
    </body>    
    </html>   
  ```

## browsersList (browserslist.dev)
- to make app compatible with older browsers
- it is an npm package
- it needs some configuration
- we need to tell our project via pakcage.json that which all browesers we need to support

![alt text](readme_images/image-2.png)
- we can give country specific list also
```js
"broswersList":[
    "last 2 version"  // last 2 versions if all the browsers
]
``` 

## Create Script to build the project
- create npm script in package.json

![alt text](readme_images/image-3.png)

- "start" -> build and start project in dev mode
= "build" -> create production build.
- on terminal now run commmand 
  - "npm run start"
  OR
  - "npm start" ( will work only for start not for build)

## Extensions for making react code more readable
- Better Command
- Prettier Code
- ESLint
- Bracket pair colorization toggler

# JSX
- Javascript syntax which is easier to create react elements
- it is not part of react.
- convention where we can merge the markup(html) and logic(js) together
- it is **not an HTML**, it is **HTML like syntax**
- is a syntax extension for JavaScript used with React to describe what the UI should look like. 
- it allows you to write HTML-like code within JavaScript, making it easier to create and manage UI components
- component integration: You can embed React components within JSX to build complex UIs.
- You can use curly braces {} to embed JavaScript expressions within JSX.
- Js engine does not understand JSX. It is not supported by browsers. It is not valid pure javascript
- Js engine understands ES6 (ecmascript 6)
- parcel uses **Babel** and transpiled JSX code before it goes to Js engine
- JSX code => transpiled to React.CreateElement using Babel => JS oject => render() => HTML Element
- attributes in JSX are camel case
- to run any JS code in JSX, we can use {}. We can write any piece of code inside {} even console.log

## Create React Element
```js
const jsxHeading = <h1 id="heading" className="head" tabIndex="1">Namaste React</h1>
```
above JSX converts into HTML
```html
<h1 id="heading" class="head" tabindex="1"></h1>
```

- Multiple line JSX needs to wrap inside paranthesis

```js
const jsxHeading = (<h1 id="heading" className="head" tabIndex="1">
Namaste React
</h1>)
```

## Babel (babeljs.io)
- javascript compiler
- takes JSX and convert it into code that Js engine understands
- for older brwsers, babel transpiles theb ES6 code to th ES version which can be understood by browser

## React Components
- everything in react is a component
- example -> button, input box, list etc
- class based components & functional components

## Class based component
- old way fo writting code (no body uses now)
- uses javascript classes
- defined using ES6 class syntax and extend the React.Component class
- key feature
  - state management
  - life cycle methods
  - event handling
    - can handle events using methods within the class. These methods are bound to the component’s context

## Functional component
- uses javascript functions
- JavaScript functions that return JSX (JavaScript XML) and can accept props as arguments.
- use hooks to maintain state, effects etc without writing classes
- have less boilerplate code, making them more concise.
- have better performance because they are stateless by default.
- functional component name always starting with capital letter
- Js function returns react element(s).

```js
const HeadingComponent = () =>{
  return <h1>Namaste React functional component</h1>
};
```
OR
```js
const HeadingComponent = () => <h1>Namaste React functional component</h1>
```
OR
```js
const HeadingComponent = function() {
  return (<h1>Namaste React functional component</h1>)
};
```

## Render Component
```js
root.render(<HeadingComponent />)
```

## Component Composition (Render react component in react component)
- is a fundamental concept in React that involves building complex UIs by combining simpler, reusable components. 
- this approach promotes modularity and reusability, making your codebase more maintainable and easier to understand.
- render react component inside react component
- component cannot be rendered before initialization of same

```js
import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
const HeadingComponent = () => {
  return (
    <div id="body">
      <h1 id="heading">Namaste React functional component - Heading</h1>
      <TitleComponent />
    </div>
  );
};

const TitleComponent = () => (
  <h1 id="title" className="title" tabIndex="3">
    Namaste React functional Component - Title
  </h1>
);

root.render(<HeadingComponent />);
```

## Render react element in react component
```js
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

//React Element
const heading = (
  <h1 id="heading" className="head" tabIndex="3">
    Namaste React
  </h1>
);

//React Functional Component
const HeadingComponent = () => {
  return (
    <div id="body">
      <h1 id="heading">Namaste React functional component - Heading</h1>
      {/* component composition */}
      <TitleComponent /> 
      {/* Render react element */}
      {heading}
    </div>
  );
};

const TitleComponent = () => (
  <h1 id="title" className="title" tabIndex="3">
    Namaste React functional Component - Title
  </h1>
);

root.render(<HeadingComponent />);
```

## Cross Site Scripting attacks (XXS)
- As data is wrapped inside {}, JSX takes care of malicious data
- JSX will escape it 
- automatically taken care by react.
- ways to prevent from XXS
  - Use JSX: React's JSX syntax automatically escapes any values embedded in JSX before rendering them, which helps prevent XSS
  ```js 
  const userContent = "<script>alert('XSS')</script>";
  return <div>{userContent}</div>; // React will escape the script tag
  ```

  - Avoid dangerouslySetInnerHTML: if you need to insert raw HTML, use dangerouslySetInnerHTML with caution and ensure the content is sanitized.
  ```js
  const sanitizedContent = sanitize(userContent); // Use a sanitization library
  return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
  ```

  - Sanitize User Input: Always sanitize user input before displaying it, especially if it comes from an untrusted source
  ```js
  import DOMPurify from 'dompurify';
  const sanitizedContent = DOMPurify.sanitize(userContent);
  return <div>{sanitizedContent}</div>;
  ```
  - Use Libraries: Utilize libraries like DOMPurify or sanitize-html to sanitize user input before rendering it

## Props (properties)
- to pass data dynamically to component.
- just normal arguments to a function
- we can pass any number of props
- passing props syntax -> "propname"="value" as component property

![alt text](readme_images/image-4.png)
- referring passed rpop in component using {props.propname}

![alt text](readme_images/image-5.png)

## Destructuring props
- in component, we can specify props as below

![alt text](readme_images/image-7.png)

**OR**
```js
const {resName, resCuisine, resRating, resTiming} = props
```

## Config Driven UI
- website is drive by data using configs
- controlling the UI using config data.
- config comes from backend
- example food apps, they show data based on location
- is a design pattern where the structure and behavior of the user interface are defined using configuration files rather than being hard-coded into the application
- configuration files are typically in formats like JSON or YAML
- By separating the UI logic from the code, developers can easily modify the UI without changing the underlying codebase

## How Config-Driven UI Works
- Config-driven UI uses configuration files to control how the UI looks and works. 
- These files can be in formats like JSON or YAML. 
- The configuration file usually contains information about components, their properties, and how they should be arranged on the screen.
- Example: Comfiguring a form
```json
{
  "form": {
    "fields": [
      {
        "label": "Name",
        "type": "text",
        "required": true
      },
      {
        "label": "Email",
        "type": "email",
        "required": true
      },
      {
        "label": "Age",
        "type": "number",
        "required": false
      }
    ]
  }
}
```
- By parsing this configuration file, the UI can dynamically render the form based on the specified settings

## Dynamically binding to elemments in json and loop through it
- we can loop elements of object using map()

![alt text](readme_images/image-6.png)

- same can then ne used at appropriate places as below

![alt text](readme_images/image-8.png)


## Each child in a list should have unique key prop - Warning
- we must assign key value to each child element of list so that they can be uniquely represented
- key={}
- key is a reserved word which needs unique value like "id" 

![alt text](readme_images/image-6.png)

**OR another way**
- use index which is second argument of map()- Not recommended
- if order of items change, this can negatively impact performance abd may cause issues with component state.
- it is considerd as Anti-Pattern

![alt text](readme_images/image-9.png)


## Why we need unique key
- react optimizes its render cycle, so components need to have unique ids. 
- say, if some new component comes up, DOM has to place that at required place. 
- Using unique id, react will come to know what modification has been made. 
- Rather than re-rendering all the components, it can identify the modification using key and renders ony that.

## Sample Project UI structure (Namaste-react App)

![alt text](readme_images/image-13.png)

 ## Import and Export
- **Export**
- 2 types of export

 1. Default export: 
- export: to make component available for access by other components
- one file can have single export
 ```js
 export default <componentname>

 ```
2. Named export
- used when we have to export multiple things to export
- just use export against each object u want to export

![alt text](readme_images/image-11.png)

- **Import**
- 2 types of import
1. Default component's import
- import component to main component where we want to use it
 ```js
 import BodyComponent from "./components/BodyComponent";
 ```

. Named component's import 
- to import named exports, we need to use {} as below

 ![alt text](readme_images/image-10.png)


# Make App Dynamic (interactive)
- using features like Hooks, click handlers

## Event handlers
- handle events like click, mouseover etc
- example -> onclick event on button.
  - it will take callback function

  ![alt text](readme_images/image-14.png)

## React Hooks
- normal JS utility function given to us by react
- prebuilt
- it has some logic at behind


1. useState() 
- used to generated State variables(local state variable inside functional component) 
- Variable which has state of the component
- used to add state to functional components.
- way of 2 way binding even though react is unidirectional
- it returns the state which is consumed in array.
- it takes a default value which can be empty array, null, single value or list etc
- to modfy state variable, we need to use a function which comes as 2nd parameter of useState array. This will trigger diff algorithm.
- when ever state variable updates, react re-renders the component.
- **why we need state variable**
  - if we use local javascript variable, it will update the variable value if we update that but UI(component) won't get rendered.
  - to refresh or re-render the UI, we use state variables.
  - it is used to make the app dynamic
  - render whole component and change only the updated element. All other component react elements will remain intact

```js
import { useState } from "react";
const[resData, setResData] = useState(RestaurantData); // array destructuring on fly
```
- imported like named import i.e using {}

- **Example - we need to filter the list of restaurants wiith rating greater than 4 on click of button and show on UI (use case of useState())**
- Steps
  1. add click event to button

  ![alt text](readme_images/image-14.png)

  2. define state variable using useState()

  ![alt text](readme_images/image-15.png)

  3. use Set<variable> of useState to change state of the component-  - when we are calling set<variable> react is updating the variable name and calling/rendering the component once again. Variable will be a new variable now. New variable is created with the new value which has been updates using set function.

  ![alt text](readme_images/image-16.png)

  4. Binding your mapping component (RestaurantCardComponent) with state variable

  ![alt text](readme_images/image-17.png)

- **Best parctices**
- never create state variables outside of component.
- try to call hooks on top of component (inside component)
- Never create state vaiable inside condition/loops/functions. It is allowed in react but it will create inconsistency

2. useEffect()
- take 2 arguments
  - arrow function/ callback function : called after your component renders
  - dependency array: changes the behavior of the render (optional)
   
```js
import { useEffect } from "react";
useEffect(() => {
  console.log("callback function");
}, [])
```

- **when useEffect() is called**
  - after every render of that omponent - default baehavior
  - if no dependency array, useEffect will be called after every render.
  ```js
  import { useEffect } from "react";
  useEffect(() => {
    console.log("callback function");
  })
  ```

  - if dependency array is empty i.e. [], useEffect will be called on only once on initial render(when componeent loads not on re-renders)
  ```js
  import { useEffect } from "react";
  useEffect(() => {
    console.log("callback function");
  }, [])
  ```

  - if we pass some value in dependencu array, useEfect will called only when dependency changes
  ```js
  import { useEffect } from "react";
  const[btnName, setBtnName] = useState("Login")
  useEffect(() => {
    console.log("callback function");
  }, [btnName]);
  ```

3. useRouteError()
- given by react-router-dom
- used to hold the route errors
- it gives more information/details about error

```js
const error = useRouteError()
<h3>
  {error.status}: {error.statusText} - {error.error.message}
</h3>
```

4. useParams()
- to read the parameters value
```js
- in route configuartion
{
  path: "/restaurants/:resId",
  element: <RestaurantMenuComponent />,
}

- dynamic route link
<Link
  to={"/restaurants/" + restaurant.info.id}
  key={restaurant.info.id}
>
  <RestaurantCardComponent
    resData={restaurant}
  />
</Link>

- use this in component where we want to use the parameters passed as querystring
const { resId } = useParams();
```



## Diff algorithm & Reconciliation algorithm
- **Diff algorithm**
- Diff algorithm will find out then difference between 2 virtual DOMs(updated Virtual DOM and previous virtual DOM) and then will actually update the DOM.
- This process is necessary because React uses a virtual DOM to improve performance by minimizing direct manipulation of the actual DOM.
- Key Points:
  - Virtual DOM: React creates a virtual representation of the real DOM. Whenever the state of a component changes, a new virtual DOM is created.
  - Comparison: The diff algorithm compares the new virtual DOM with the previous version to identify changes.
  - Efficiency: The algorithm is designed to be efficient, with an O(n) complexity, meaning it operates linearly relative to the number of elements.
- Steps in Diffing:
  - Element Type Change: If elements of different types are compared, React destroys the old tree and builds a new one from scratch.
  - Key Usage: Keys are used to identify elements uniquely. This helps React efficiently update the list without re-rendering unchanged elements.
  - Component Tree Comparison: The algorithm recursively compares the component tree. If the root elements are the same, it compares their attributes and children.

- **Reconciliation alogorithm**
- React uses Reconciliation alogorithm also known as React Fiber. Came in react 16.
- Reconciliation alogorithm is the process React uses to update the DOM by applying the differences identified by the diff algorithm.
- The goal is to update the UI efficiently by minimizing the number of changes to the actual DOM.
- Key Points:
  - Minimal DOM Manipulation: React applies only the necessary changes to the DOM to bring it to the desired state.
  - Batch Updates: React batches multiple updates together to improve performance and avoid unnecessary re-renders.
  - Lifecycle Methods: During reconciliation, React calls appropriate lifecycle methods like componentDidUpdate to manage component behavior.
- Steps in Reconciliation:
  - Element Update: If an element remains the same, React updates its attributes and children accordingly.
  - Component Update: If a component remains the same, React updates its props and state, triggering re-renders only if necessary.
  - Component Mounting/Unmounting: React mounts new components and unmounts old ones as per the diff algorithm's findings.

- Example
    - suppose we have DOM in which we have res-ccontainer which has say 15 res cards
    - UI performs filtering and gets 3 cards.
    - To update this in actual DOM
      -  Firstly, react will create Virtual DOM(representation of actual DOM -> basically object of react elements) from actual DOM(HTML elements)
      - Using diff algo, will identify the diff between old virtual DOM (containing 15 res cards) and new virtual DOM (contains 3 res cards)
      - using Reconciliation alogo, will update the actual DOM by applying the diff identified. It will update DOM without re-rendering the unchanged items. It will render the whole component again which has been updated.

## **React Fiber Architecture**
- https://github.com/acdlite/react-fiber-architecture


## Approaches how web apps or UI applications fetch data from backend
1. As soon as app loads, we can make api call to fetch data, wait for data to come and then render it on UI.
2. As soon as page loads, we will quickly render UI, after render, we will make API call and when we get data, we will render data to our app.
  - We will always use this approach in React
  - provided better User experience as in first approach, it will block page for some time where as we load the page with skeleton and as soon as we get data, we render that on UI.
  - React's render cycle is very fast so 2 times render doesn't affect the performance.
  - we will useEffect() hook for this

## How to read data from API
- use fetch api provided by browser
- fetch will return promise which can then be resolved either
  - using .then()
    **OR**
  - using async await
```js
const fetchData = async() =>{
  const data = await fetch("api url");

  const json = await data.json();
};
```

## CORS Policy
- browsers blocks us to call api from one origin to another origin
- way to bypass
  - add browser extension for CORS (for dev environment)
  - **OR**
  - use corsproxy.io or we have other sites also for this. Just append  **https://corsproxy.io?** before url
    - https://corsproxy.io?https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.6601508&lng=76.8382204&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
    - it has a limit.
  - **OR**
  - if we have our own api, there we can use CORS middleware

## Optional chaining (?.) 
- is a feature in JavaScript that allows you to safely access deeply nested properties without having to check each level explicitly. This feature helps to avoid errors when accessing properties that might not exist.
- You can also use optional chaining to call a function that might not exist.
- Optional chaining can be useful when working with arrays and checking for elements at specific indices.

- **How It Works**
The optional chaining operator (?.) short-circuits and returns undefined if the value before it is null or undefined. This prevents runtime errors that occur when trying to access properties of null or undefined.

- **Advantages**
- Reduces Code Complexity: Simplifies the code by reducing the need for multiple checks for null or undefined.
- Improves Readability: Makes the code cleaner and easier to read.
- Prevents Errors: Helps avoid runtime errors caused by accessing properties of null or undefined.

## Shimmer UI
- resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the contnt has shown up
- it is like of kind, we load a fake page until we load actual data.
- as soon as page load, load/render it with shimmer UI


## Conditionl Rendering
-Rendering on base of vondition is called conditional rendering

![alt text](readme_images/image-18.png)

## Key concept
- say we have input box and we have binded local state variable to that. If we try to modfy input box, it won't be possible. This is because value of input box is strictly tied to variable. It will keep the old value intact unless we change the variable value using set<variable>
- to resolve this we need to use onChange event handler

```js
const [searchText, setSearchText] = useState("");
 <input
              type="text"
              className="search-text"
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}></input>
```
- **Note:** when we change local state variable(either we are typing anything in input box, making clal to api etc), Component gets re-rendered as react triggers a reconcilliation cycle

- **Note: React will re-render the whole component but it is only updating the input box value in actual DOM**

## Routing (https://reactrouter.com/home)
- use react router dom library
- npm i react-router-dom
  - it has created an error page byitself which is displayed to user in case user goes for unconfigured route path.

- **2 Types of routing in web apps**
  - Client side: no netwrok calls. We already have components and just loads the same at specified location. In react, w eare implementing this type of routing
  - Server Side: you go for navigation link, network call gets fired and it will get HTML from server and render the whole page

- **Steps**
- **Ist way**
  - create routing configuartion
  ```js
  import { createBrowserRouter } from "react-router-dom"; // createBrowserRouter will create routing cofiguration for us

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
    },
    {
      path: '/about',
      element: <AboutComponent />,
    },
  ]);
  ```

  - next we need to provide this configuration to render it.
    - use RouterProvider component provided by react router dom
    ```js
    import { createBrowserRouter, RouterProvider } from "react-router-dom";
    root.render(<RouterProvider router={appRouter}></RouterProvider>)
    ```

- **2nd Way**
```js
import { BrowserRouter, Routes, Route } from "react-router";
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="/about" element={<AboutComponent />} />
    </Routes>
  </BrowserRouter>
);
```

- to show custom error page, we can provide errorElement in route
```js
 {
    path: "/",
    element: <AppLayout />,
    errorElement:<ErrorComponent />
  },
```

## Children routes
- say we want header component tto remain intact and body component will get replaced with other route components
- for this we need to define child routes using children as below
```js
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <AboutComponent />,
      },
      {
        path: "/contact",
        element: <ContactComponent />,
      }
    ],
    errorElement: <ErrorComponent />, // for custok error page
  }
]);
```
- use outlet from react-router-dom
```js
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Outlet /> {/* won't be visible in the html */}
    </div>
  );
};
```

- link the routers to elements for navigation
  - don't use <a></a> as it will refersh whole page
  - rather use ink **component**. We can navigate the page without reloading. It will just refresh the component as react app is SPA. Behind the scene, it is converting into anchor tag when rendered. Link is a wrapper over anchor tag
```js
import { Link } from "react-router-dom";

<div className="header">
  <div className="logo-container">
    <img className="logo" src={Logo}></img>
  </div>
  <div className="nav-items">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li className="image-cart">
        Cart <img className="cart" src={Cart}></img>
      </li>
      <li>
        <button className="login" onClick={handleBtnName}>
          {btnName}
        </button>
      </li>
    </ul>
  </div>
</div>
```

## Dynamic Routing
- example in swiggy we are having list of restaurants, now we click a specific restaurant, this is done using dynamic route. In this we will make API call
- in route configuartion , we need to specify the dynamic value using ":"
```js
{
  path: "/restaurants/:resId",
  element: <RestaurantMenuComponent />,
} // here :resId is dynamic which will be the id of selected restaurant
```
- 






 






