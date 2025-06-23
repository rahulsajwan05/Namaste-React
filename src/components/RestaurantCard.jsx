import { CDN_URL } from "../utils/constant";


const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  
    return (
      <div className="m-4 p-4 w-[190px] bg-slate-100 rounded-lg hover:bg-slate-200"  >
        <img
          className="rounded-md"
          src={CDN_URL + resData.info.cloudinaryImageId}
          alt="logo"
        />
        <h2 className="font-bold py-2 text-lg"> {name}</h2>
        <h4> {cuisines.join(", ")}</h4>
        <h4> {avgRating} stars</h4>
        <h4> {costForTwo}</h4>
        <h4> {sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  export const withHigherRating = (RestaurantCard) =>{
      return(props)=>{
        return (
          <div>
            <label className="absolute bg-black text-white rounded-lg p-1" >promoted</label>
            <RestaurantCard {...props}/>
          </div>
        )
      }
  }


 

  export default RestaurantCard;