import Logo from "../images/food_logo.jpg"
import Cart from "../images/cart.jpg";
import { useState } from "react";

const HeaderComponent = () => {
 const[btnName, setBtnName] = useState("Login")

  const handleBtnName = () =>{
    if(btnName.toLowerCase() == "login")
      setBtnName("Logout");
    else
    setBtnName("Login");
  }

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={Logo}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li className="image-cart">
              Cart <img className="cart" src={Cart}></img>
            </li>
            <li><button className="login" onClick={handleBtnName}>{btnName}</button></li>
          </ul>
        </div>
      </div>
    );
  };

  export default HeaderComponent;