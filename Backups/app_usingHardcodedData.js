import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./images/food_logo.jpg";
import Cart from "./images/cart.jpg";
import StarRating from "./images/star-rating.jpg";
import ResData from "../resData.json"

/** Food App component
 * Header
 *    - Logo
 *    - Nav Items
 *  Body
 *    - Search
 *    - RestaurantContainer
 *      - Restaurant Card
 *        - image
 *        - name of res, star rating, cuisines, delivery time, cost
 * Footer
 *    - Copyright
 *    - Links
 *    - Address
 *    - Contact
 */

// inline style - pass it as JS object
const styleCard = {
  backgroundColor: "#f0f0f0 ",
};
 
const HeaderComponent = () => {
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
        </ul>
      </div>
    </div>
  );
};

const RestaurantCardComponent = (props) => {
  const { resName, resCuisine, resStarRating, resTiming, resLocation, resImage } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={resImage}
        alt="res-logo"
      ></img>
      <h3>{resName}</h3>
      <div className="res-cuisines">{resCuisine}</div>
      <div className="res-location">{resLocation}</div>
      <div className="res-card-details">
        <span>
          <span>
            <img className="res-start-image" src={StarRating}></img>{" "}
            {resStarRating} • {" "}
          </span>
          {resTiming}
        </span>
      </div>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" className="searchText"></input>
        <svg
          className="searchImage"
          viewBox="5 -1 12 25"
          height="17"
          width="17"
          fill="#686b78"
        >
          <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
        </svg>
        Search
      </div>
      <div className="res-container">
        {ResData.map((res) => (
          <RestaurantCardComponent
            key={res.id}
            resName={res.name}
            resCuisine={res.cuisine}
            resStarRating={res.rating}
            resTiming={res.timing}
            resLocation={res.location}
            resImage={res.image}
          ></RestaurantCardComponent>
          
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <HeaderComponent />
      {/* Body */}
      <BodyComponent />
      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
