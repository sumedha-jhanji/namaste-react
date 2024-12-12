import { abort } from "process";
import UserComponent from "./UserComponent";
import UserClassComponent from "./UserClassComponent";
import React from "react";

// const AboutComponent = () =>{
//     console.log("About Component")
//     return (
//         <div>
//             <h1>About Component</h1>
//             <h2>This is Namaste React Training</h2>
//             {/* <UserComponent  name={"Sumedha (Functional Component Example)"} /> */}
//             <UserClassComponent name={"Sumedha (Class Component Example)"} location={"Chandigarh"} />
//             {console.log("after child compoenent")}
//         </div>
//     )
// }

class AboutComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor called");
  }

  componentDidMount(){
    console.log("Parent Component did mount called");
  }
  
  render() {
    console.log("Parent Render called");
    return (
      <div>
        <h1>About Component</h1>
        <h2>Namaste React Training</h2>
        {/* <UserComponent  name={"Sumedha (Functional Component Example)"} /> */}
        <UserClassComponent
          name={"Sumedha (Class Component Example)"}
          location={"Chandigarh"}
        />
         {/* <UserClassComponent
          name={"Sumedha (Class Component Example) 1"}
          location={"Chandigarh"}
        /> */}

        {console.log("after child compoenent")}
      </div>
    );
  }
}

export default AboutComponent;
