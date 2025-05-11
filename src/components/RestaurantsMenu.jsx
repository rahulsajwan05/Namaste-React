import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu =() =>{
 
    const{ resId } = useParams();

//     const [resInfo, setResInfo] = useState(null);
    
//    useEffect(() =>{
//     fecthData();
//    },[])

//    //fetch the url
//     const{ resId } = useParams();

//    const fecthData = async() =>{
//     const data = await fetch(
//         MENU_API + resId
//         )
    
//     const json = await data.json();
//     console.log(json);
//     setResInfo(json.data);
// }
console.log(resId)
const resInfo = useRestaurantMenu(resId)

if(resInfo === null)  return <Shimmer/> 


    // console.log(resInfo.cards[2].card.card.info);
    const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
    // console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card);
    const itemCards  =  resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards ||
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories[0].itemCards;
//   console.log(itemCards);
   
  return (
      <div>
            <h3>{name}</h3>
            <p>{cuisines.join(",")}  -  {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
              
                    {itemCards.map((item) => <li key={item.card.info.id}>
                        {item.card.info.name} - { "RS ." }{item.card.info.price/100 || item.card.info.defaultPrice/100} 
                        </li>)}
               
            </ul>
       </div>
    );
};

export default RestaurantMenu;