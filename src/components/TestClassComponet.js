import React, { useState } from "react";
import UserComponent from "./UserComponent";

class TestClassComponent extends React.Component {
    constructor(props){
        super(props);
        console.log("Sub child constructor called")
    }
    componentDidMount(){
        console.log("Sub child componentDidMount called")
    }
    render(){
        return (<div>
            {console.log("Sub child render called")}
        </div>)
    }
}

export default TestClassComponent