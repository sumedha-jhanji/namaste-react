import React, { useState } from "react";

const UserComponent = (props) => {
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: chandigarh</h3>
      <h4>Contact: @sumedhajhanji</h4>
    </div>
  );
};

export default UserComponent;
