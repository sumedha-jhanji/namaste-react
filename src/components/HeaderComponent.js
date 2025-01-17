import Logo from "../images/food_logo.jpg";
import Cart from "../images/cart.jpg";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const handleBtnName = () => {
    if (btnName.toLowerCase() == "login") setBtnName("Logout");
    else setBtnName("Login");
  };

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div>
        <img className="w-100" src={Logo}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="flex px-4 font-bold text-md">
            <div>Cart</div>
            <div>
              <img className="w-8" src={Cart}></img>
            </div>
          </li>
          <li className="px-4">
            <button onClick={handleBtnName}>{btnName}</button>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
