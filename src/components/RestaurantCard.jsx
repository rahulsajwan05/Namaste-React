import { CDN_URL } from "../utils/constant";


const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
   


    return (
      <div className="restaurant-card">
        <img
          className="restaurant-logo"
          src={CDN_URL + resData.info.cloudinaryImageId}
          alt="logo"
        
        />
        <h2> {name}</h2>
        <h4> {cuisines.join(", ")}</h4>
        <h4> {avgRating} stars</h4>
        <h4> {costForTwo}</h4>
        <h4> {sla.deliveryTime} minutes</h4>
      </div>
    );
  };

 

  export default RestaurantCard;