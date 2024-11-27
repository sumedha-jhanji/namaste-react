# React
- Most popular javascript library
- used to build large-scale front-end application
- Two ways available to incorporate react in project
-
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
     ``` js
      <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
     ```

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

If we are rendering any thing root element of HTML, what ever content it earlier has will get replaced with latest render content

JSX

