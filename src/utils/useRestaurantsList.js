import { useEffect, useState } from "react";
import { LIST_API } from "./constants";

const useRestaurantsList = () => {
  const [resData, setResData] = useState([]);
  const [filteredResData, setfilteredResData] = useState([]);
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
  return [resData, filteredResData];
};

export default useRestaurantsList;
