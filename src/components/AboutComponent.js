import { abort } from "process";
import UserComponent from "./UserComponent";
import UserClassComponent from "./UserClassComponent";
import React from "react";
import UserContext from "../utils/userContext";

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

  componentDidMount() {
    console.log("Parent Component did mount called");
  }

  render() {
    console.log("Parent Render called");
    return (
      <div>
        <h1>About Component</h1>
        <div>
          <span className="text-lg font-bold">LoggedIn User: </span>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <span className="text-sm" >{loggedInUser}</span>
            )}
          </UserContext.Consumer>
        </div>
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
