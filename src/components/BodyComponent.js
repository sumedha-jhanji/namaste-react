import { useState } from "react";
import RestaurantData from "../data/restaurantData.json";
import RestaurantCardComponent from "./RestaurantCardComponent";

const BodyComponent = () => {
  
  //local state variable - scope will be inside Bosy component
  const[resData, setResData] = useState(RestaurantData);
  const[searchVal, setSearchVal] = useState('');

  const handleSearch = () => {
    if(searchVal == null || searchVal == '')
      setResData(RestaurantData);
    else
      setResData(resData.filter(r => r.data.name.toLowerCase().includes(searchVal.toLowerCase())))
}

  return (
    <div className="body">
      <div className="body-container">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              setResData(resData.filter(
                (res) => res.data.avgRating > 4
              ));
            }}
          >
            Top Rated Restaurants
          </button>
          <div className="search">
            <input type="text" className="searchText" value={searchVal} onChange={(event) => { setSearchVal(event.target.value)}}></input>
            <svg onClick={handleSearch}
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
        </div>
        <div className="res-container">
          {/* using static data and non dynamic page */}
          {/* {RestaurantData.map((restaurant) => (
            <RestaurantCardComponent
              key={restaurant.data.id}
              resData={restaurant}
            />
          ))} */}

          {/* using dynamic UI */}
          {resData.map((restaurant) => (
            <RestaurantCardComponent
              key={restaurant.data.id}
              resData={restaurant}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
