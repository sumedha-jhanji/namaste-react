import { useParams } from "react-router-dom";
import ShimmerComponent from "./ShimmerComponent";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategoryComponent from "./RestaurantCategoryComponent";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId); // called custom hook
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <ShimmerComponent />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}

      {/* Categories Accordion */}
      {categories?.map((category, index) => (
        // controlled component
        <RestaurantCategoryComponent
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems ={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
