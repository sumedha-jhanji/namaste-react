import { useContext, useEffect, useState } from "react";
// import RestaurantData from "../data/restaurantData.json";
import RestaurantCardComponent, {
  withOpenLabel,
} from "./RestaurantCardComponent";
import ShimmerComponent from "./ShimmerComponent.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { LIST_API } from "../utils/constants.js";
import UserContext from "../utils/userContext.js";

const BodyComponent = () => {
  //local state variable - scope will be inside Bosy component
  const [searchText, setSearchText] = useState("");
  //const [resData, filteredResData] = useRestaurantsList();
  const [resData, setResData] = useState([]);
  const [filteredResData, setfilteredResData] = useState([]);
  const {loggedInUser, setUserName} = useContext(UserContext);

  const RestaurantCardOpened = withOpenLabel(RestaurantCardComponent);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(LIST_API);
    const json = await data.json();

    //optional chaining (?)
    setResData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    //filtered records
    setfilteredResData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants      
    );
  };

  //conditional rendering
  // if (resData.length == 0)
  //   return (
  //     <div className="body">
  //       <div className="body-container">
  //         <ShimmerComponent />
  //       </div>
  //     </div>
  //   );

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection.
      </h1>
    );

  // OR using ternary operator
  return resData.length == 0 ? (
    <ShimmerComponent />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg  text-md font-bold"
            onClick={() => {
              setfilteredResData(
                resData.filter((res) => res.info.avgRating > 4)
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)} //setUserName if from context provided by app.js
          />
        </div>
        <div className="m-4 p-4 flex grow items-center">
          <input
            data-testid="searchInput"
            type="text"
            className="border border-solid border-gray-300 w-full h-10 focus:border-black"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          ></input>
          <div
            data-testid="Search"
            className="search-action"
            onClick={() => {
              // filter the restauraunt cards and update the UI
              const filteredResData = resData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredResData(filteredResData);
            }}
          >
            <svg
              className="m-4"
              viewBox="5 -1 12 25"
              height="17"
              width="17"
              fill="#686b78"
            >
              <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
            </svg>
          </div>
          {/* <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredResData = resData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredResData(filteredResData);
            }}
          >
            Search
          </button> */}
        </div>
       
      </div>
      <div className="flex flex-wrap items-center overflow-hidden justify-center">
        {/* using static data and non dynamic page */}
        {/* {RestaurantData.map((restaurant) => (
            <RestaurantCardComponent
              key={restaurant.data.id}
              resData={restaurant}
            />
          ))} */}

        {/* using dynamic UI */}
        {filteredResData.map((restaurant) => (
          //console.log(restaurant.info.cloudinaryImageId)
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >            
            {/* If the restaurant is open then add a promoted label to it */}
            {restaurant?.info.isOpen ? (
              <RestaurantCardOpened resData={restaurant?.info} />
            ) : (
              <RestaurantCardComponent resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
