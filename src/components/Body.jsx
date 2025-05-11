import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";
const Body = () => {
  //Local state variable - super powerful state variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4601767&lng=77.296542&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    console.log(json);
    const restaurants =json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setListOfRestaurants(restaurants);
    setFilteredRestaurantList(restaurants);
    // setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  //conditional rendering
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer />
  // }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
   return <h1>check your internet connection </h1>
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">

        <div className="search">
          <input type="text" placeholder="Search for restaurants" 
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}/>
          <button
            className="search-btn"
            onClick={() =>{
              // const clonedList = [...listOfRestaurants];
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurantList(filteredList);
            }

            }
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
            // console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

      </div>
      <div className="restaurant-container">
        {filteredRestaurantList.map((res) => (
         <Link  key={res?.info?.id} to={"/restaurant/" + res?.info?.id}> <RestaurantCard resData={res} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
