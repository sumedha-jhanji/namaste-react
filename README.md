# React
- Most popular javascript library
- used to build large-scale front-end application
- Two ways available to incorporate react in project
- 
## 1st - CDN Links in react
- network of servers distributed geographically to deliver content to users more efficiently.
- for react it is a place where we have react libraries hosted and we are pulling these into our project    
  
    ## Benefits of Using a CDN**:
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
      <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

## 2nd - Using npm (npmjs.com)
- package manager which is collection of libraries.
- standard repository for all the packages.
- all package(libraries, utilities) are hosted here.
- NPM manages these packages

## Steps to include npm in project 
- Run command "**npm init**" on teminal
- Specify the required details it is asking for.
- As a reult we will get "package.json" (configuartion for npm)

## React and ReactDOM
- React not only works on browsers but also on mobiles (react native) etc devices also. That is why wehave 2 files
    - **React** -> consists of core react functionality
    - **React-Dom** -> bridge between react and browser. It is having react operations thats can modify document.

## Rendering Data
- If we are rendering any thing inside element of HTML, what ever content it earlier has will get replaced with latest render content   

## Bundlers
- We need to bundle our code, minify our code, clean our code etc before deploying to production. For that we use bundlers. 
- Examples -> WebPack(default when project created using create-react-app), Parcel, Veet
- It bundles/package the app for deployment on production
- **Parcel** -It comes as node package. To incldue it in project we need to use **npm**
    - npm install -D parcel   // here -D is for dev dependencies
    -  it will install say parcel latest version and show it in package.json as -> "parcel": "^2.13.0"

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
- it will build development app
- create a server for us 
- host app on that server -> provide URL + port.
- do "Hot Module Replacement (HMR)" as parcel uses file watching algo(written in c++)
    
## Install React
- "npm install react" OR "npm i react"
  **Note:** it should not be dev dependency

## Install react-dom
- "npm install react-dom"
  **Note:** it should not be dev dependency

## Steps to make code working using npm libraries and using traditional way of app.js React code (via React.CreateElement())
- In app.js, we need to import React and ReactDOM to make the code working without CDN links and using npm libraries.
  ```js import React from "react";
    import ReactDOM from "react-dom/client";
  ```
- Also, we need to add "**type="module**" to start script files script tag
  <script type="module" src="./app.js"></script>

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






