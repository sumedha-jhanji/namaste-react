import { emit } from "process";
import React, { useState } from "react";
// import TestClassComponent from "./testClassComponet";

class UserClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   phone: "XX-XX-XX-XX-XX", // initial value
    //   emailID: "abc@gmail.com",
    userInfo:{
        name: "",
        location: "",
        bio: "",
        image:""

    }
    };
    console.log(this.props.name + " Child Constructor called");
  }

  async componentDidMount() {
    console.log(this.props.name + " Child Component did mount called");
    const data = await fetch("https://api.github.com/users/sumedha-jhanji");
    const json = await data.json();
    console.log(json);
    this.setState({
        userInfo:json
    })
  }

  componentDidUpdate(){
    console.log("ComponentDidUpdate")
  }

  componentWillUnmount(){
    console.log("componentWillUnmount called")
  }
  render() {
    console.log(this.props.name + " Child Render callled");
   // const { name, location } = this.props;
   const {name, location, bio, avatar_url} = this.state.userInfo;

    return (
      <div className="user-card">
       <img className="avatar" src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>{bio}</h4>
        {/* <h4>Contact: @sumedhajhanji</h4> */}       
        {/* <h5>Phone: {this.state.phone}</h5>
        <h5>Email: {this.state.emailID}</h5>
        {/* <button
          onClick={() => {
            this.setState({ phone: "YY-YY-YY-YY-YY" });
          }}
        >
          Update state variable
        </button> */}
        {/* <TestClassComponent /> */}
      </div>
    );
  }
}

export default UserClassComponent;
