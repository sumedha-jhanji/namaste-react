import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

//React Element
const heading = (
  <h1 id="heading" className="head" tabIndex="3">
    Namaste React
  </h1>
);
// root.render(heading);

//React Functional Component
const HeadingComponent = () => {
  return (
    <div id="body">
      <h1 id="heading">Namaste React functional component - Heading</h1>
      {/* component composition */}
      <TitleComponent /> 
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
