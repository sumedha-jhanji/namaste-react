import Logo from "../images/food_logo.jpg";
import Cart from "../images/cart.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");

  const handleBtnName = () => {
    if (btnName.toLowerCase() == "login") setBtnName("Logout");
    else setBtnName("Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="image-cart">
            Cart <img className="cart" src={Cart}></img>
          </li>
          <li>
            <button className="login" onClick={handleBtnName}>
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
