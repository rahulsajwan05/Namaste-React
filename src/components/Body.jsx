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

  console.log(listOfRestaurants)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4601767&lng=77.296542&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    console.log(json);
    const restaurants =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRestaurants(restaurants);
    setFilteredRestaurantList(restaurants);
    // setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>check your internet connection </h1>;
  }

  //conditional rendering
  if (listOfRestaurants.length === 0) {
    console.log("shimmmerer");
    return <Shimmer />;
  } else {
    return (
      <div className="body">
        <div className="flex">
          <div className="search m-4 p-4">
            <input
              type="text"
              placeholder="Search for restaurants"
              className="border border-solid border-black"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="search-btn px-4 py-2 bg-green-300 m-4 rounded-lg"
              onClick={() => {
                // const clonedList = [...listOfRestaurants];
                const filteredList = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurantList(filteredList);
              }}
            >
              Search
            </button>
          </div>

          <div className="search m-4 p-4 flex items-center">
            <button
              className="px-4 py-2 bg-gray-200 rounded-lg"
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
        </div>
        <div className="flex flex-wrap">
          {filteredRestaurantList.map((res) => (
            <Link key={res?.info?.id} to={"/restaurant/" + res?.info?.id}>
              <RestaurantCard resData={res} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default Body;
