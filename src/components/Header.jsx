import { LOGO_URL } from "../utils/constant";
import { useState, useEffect , useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const {loggedInUser} = useContext(UserContext)
   const [btnNameReact, setBtnNameReact] = useState("Login");

     // useSelector is a hook in react-redux that allows you to extract data from the Redux store.
  // subscribe to the store using selector
  const cartItems = useSelector((store)=>store.cart.cartItems)
    // console.log(cartItems)

  //  * if no dependency array => its called on every render
  //  * if dependency array is empty => called on only intial render just ones
  //  *if we have something in dependency array [btnNameReact] => only called if the dependency changes
  //  means everytime btnNameReact name changes, useEffect will be called


   useEffect(()=>{
    console.log("useEffect called");
   },[]) 
    return (
      <div className="flex justify-between bg-gray-200">
        <div className="logo-container">
          <img className="w-36"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
            <Link to="/">Home</Link>  
            </li>
            <li className="px-4">
            <Link to="/about">About</Link>  
            </li>
            <li className="px-4">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-4 text-lg font-bold">            
              <Link to="/cart">Cart - {cartItems.length}</Link>
            </li>
            <button className="login-btn" 
            onClick={()=>{
             btnNameReact==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
            }}>{btnNameReact}</button>
          </ul>
          <li className="px-4">{loggedInUser}</li>
        </div>
      </div>
    )
  };

  export default Header;