import React, { useState } from "react";
import ItemListComponent from "./ItemListComponent";

//
const RestaurantCategoryComponent = ({ data, showItems, setShowIndex }) => {
 //const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex(); // change state of parent conponent from child component. Passed as prop from parent
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemListComponent items={data.itemCards}  />}
      </div>
    </div>
  );
};

export default RestaurantCategoryComponent;
