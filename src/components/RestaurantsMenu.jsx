import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "../components/RestaurantCategory";
import {useState} from "react"

const RestaurantMenu = () => {
  const { resId } = useParams();

  console.log(resId);
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0)

  if (resInfo === null) return <Shimmer />;

  // console.log(resInfo.cards[2].card.card.info);
  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
  console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
  const itemCards =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards ||
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .categories[0].itemCards;
  //   console.log(itemCards);

  const categories = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((e)=>
    e?.card?.["card"]?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
  // console.log(categories)
  return (
    <div className="text-center">
      <h3 className="font-bold my-3 text-2xl">{name}</h3>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      { categories.map((category, index) => ( 
        <RestaurantCategory 
             key={category.card.card.categoryId} 
             data={category?.card?.card} 
             showItems={index === showIndex ? true : false}
             setShowIndex={()=> setShowIndex(index === showIndex ? null : index)}
        />  
        ))
      }
    </div>
  );
};

export default RestaurantMenu;
