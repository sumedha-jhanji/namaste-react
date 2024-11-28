import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root")); //since we have to modify dom so we used ReactDOM

// parameters of createElement() -> ist ->tag, 2nd ->  object -> {} -> place where we will give attributes to tag, 3rd -> what needs to bee put in tag(text, or array of child elements)
const heading = React.createElement(
  "h1",
  { id: "heading", key: "heading" },
  "Hello World! from react"
); // creating element is core functionality of React so React is used. it will return ReactElement which is an object

//root.render(heading); // render will take the object(ReactElement) and convert it into javascript element(HTML that browser understands) and out it up on DOM

{
  /* 
<div id="parent">
    <div id="child">
        <h1 id="heading">Hello World! from react</h1>
        <h3>First Child HTML creation</h3>
    </div>
     <div id="2nd child">
        <h1 id="heading">Hello World! from react</h1>
        <h3>Second Child HTML creation</h3>
    </div>
</div> 
*/
}
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
